var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getData(category) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://localhost:3000/board/jmt`);
            if (!response.ok) {
                throw new Error("응답 에러");
            }
            const responseData = yield response.json();
            const { postList: specifiedPost } = responseData;
            return specifiedPost;
        }
        catch (err) {
            console.log('패치 오류: ', err.message);
        }
        return [];
    });
}
function displayPost(postList) {
    try {
        const dateOptions = {
            year: "numeric",
            month: 'long',
            day: 'numeric',
        };
        const timeOptions = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        };
        for (const postData of postList) {
            const storedDate = new Date(postData.createdAt.replace(' ', 'T'));
            const koreanDate = storedDate.toLocaleDateString('ko-KR', dateOptions);
            const koreanTime = storedDate.toLocaleTimeString('ko-KR', timeOptions);
            const formattedDate = `${koreanDate} ${koreanTime}`;
            const postRigion = document.createElement('div');
            postRigion.classList.add("post-region");
            document.querySelector(".post-container").append(postRigion);
            let classStatus = '';
            if (!postData.boardFile) {
                classStatus = 'off';
            }
            const htmlContext = `
    <!-- 상단 정보 영역 -->
    <div class = "post-profileRegion">
        <!-- 유저 프로필 사진 -->
        <div class = "profileRegion-userProfile">
            <img src="">
        </div>
        <div class="profileRegion-userNickname"> <span> ${postData.unickname} </span></div>
        <!-- 게시물 날짜 -->
        <div class = "profileRegion-date"> <span>${formattedDate}</span></div>
    </div>
    <!-- 본분 영역 -->
    <a href="../detailpage/detailpage.html?category=jmt&id=${postData.id}" class="post-A">
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
`;
            postRigion.innerHTML = htmlContext;
        }
    }
    catch (err) {
        console.log(err.message);
    }
}
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postInfo = yield getData("jmt");
        console.log("postInfo: ", postInfo);
        displayPost(postInfo);
    }
    catch (err) {
        console.log(err.message);
    }
}));
export {};
