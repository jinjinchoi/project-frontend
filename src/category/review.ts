import { IBoard, IResponseData } from "interface/boardAndReply.interface"
import { throttle } from "./throttle";

let offset : number = 0;
const LIMIT : number = 10;

// 게시물 요청하는 함수
async function getData(category:string): Promise<IBoard[]> {
    try {

        const response = await fetch(`http://localhost:3000/board/review?limit=${LIMIT}&offset=${offset}`);
        if(!response.ok) {
            throw new Error("응답 에러")
        }
        const responseData : IResponseData  = await response.json();
        const { postList : specifiedPost }  = responseData;

        
        if(specifiedPost.length === 0) {
            window.removeEventListener('scroll', addPost)
            return specifiedPost;
        }

        offset += LIMIT;

        return specifiedPost;
    } catch (err) {
        console.log('패치 오류: ', err.message)
    }
    return [];
}

// 게시물 그리는 함수
function displayPost(postList : IBoard[]) : void{
    try {
        const dateOptions : Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: 'long',
            day: 'numeric',
            
        };
        const timeOptions : Intl.DateTimeFormatOptions = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        };

        for(const postData of postList) {
            // 날짜 형식 '2024년 7월 24일' 로 변경
            const storedDate = new Date(postData.createdAt.replace(' ', 'T'));
            const koreanDate = storedDate.toLocaleDateString('ko-KR', dateOptions);
            const koreanTime = storedDate.toLocaleTimeString('ko-KR', timeOptions);
            const formattedDate =  `${koreanDate} ${koreanTime}`;


            const postRigion = document.createElement('div');
            postRigion.classList.add("post-region");
            document.querySelector(".post-container").append(postRigion);

            let classStatus:string ='';
            if(!postData.boardFile) {
                 classStatus = 'off';
            }

            const htmlContext =  `
    <!-- 상단 정보 영역 -->
    <div class = "post-profileRegion">
        <!-- 유저 프로필 사진 -->
        <div class = "profileRegion-userProfile">
            <img src="">
        </div>
        <div class="profileRegion-userNickname"> <span> ${postData.unickname} </span></div>
        <!-- 게시물 날짜 -->
        <div class = "profileRegion-date"> <span>${formattedDate }</span></div>
    </div>
    <!-- 본분 영역 -->
    <a href="../detailpage/detailpage.html?category=review&id=${postData.id}" class="post-A">
        <div class="post-mainContainer">
            <!-- 글 -->
            <div class="mainContainer-titleRegion"><h3>${postData.boardTitle}</h3></div>
            <div class="mainContainer-dataRegion"><span>${postData.boardContent} </span></div>
            <!-- 사진 or 영상 -->
            <div class="mainContainer-fileRegion ${classStatus}"> <img src="http://localhost:3000/${postData.boardFile}" class = "mainContainer-file ${classStatus}"> </div>
        </div>
    </a>
    <!-- 댓글, 좋아요 영역 -->
    <div class = "post-bottomContainer">
        <!-- 댓글 -->
        <a href="" class="bottomContainer-comment-a"><div class = "bottomContainer-buttonReion"><span> 💬 ${postData.numberOfComment} </span></div></a>
        <!-- 좋아요 -->
        <div class = "bottomContainer-buttonReion"><span> ♡ ${postData.boardLike}</span></div>
    </div>
<hr class="postDivide">
<!-- 게시물 영역 종료 -->
`
            
            postRigion.innerHTML = htmlContext;
        }
    } catch (err) {
        console.log(err.message);
    }
}

// 페이지 로딩 시
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const postInfo:IBoard[] = await getData("review");
        console.log("postInfo: ", postInfo)
        displayPost(postInfo);
    } catch(err) {
        console.log(err.message);
    }

})





// 스크롤시 이벤트 추가

let isLoading = false;

async function addPost () {
    if (isLoading) return; 
    const pageBottom = window.innerHeight + window.scrollY >= document.documentElement.offsetHeight
    if(pageBottom) {
        isLoading = true;
        try {
            const postInfo:IBoard[] = await getData("review");
            displayPost(postInfo);
        } finally {
            isLoading = false;
        }
    }
}


window.addEventListener('scroll', throttle(addPost, 200))