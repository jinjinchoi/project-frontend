import { likeImplement } from "like/like.implement";
import { deleteBoard } from "../delete/detailPage.delete";
import { IBoard } from "interface/boardAndReply.interface";


// 본문과 프로필 영역 그린다.
export function drawPostRegion(postData : IBoard) : void {
    const detailContainer  = document.querySelector(".onlyPostContainer")

    // 프로필 영역 div 생성
    const profileDiv = document.createElement("div");
    profileDiv.classList.add("topProfileContainer");
    detailContainer.append(profileDiv);

    // 본문 영역 div 생성
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("contentContainer");
    detailContainer.append(contentDiv);


    const profileHTMLSyntax : string =
`
<div class="topProfileContainer">
    <div class="topProfileContainer-userImgContainer"> <img src="" class="topProfileContainer-userImgContainer-img"> </div> <!-- 프로필 사진 -->
    <div class="topProfileContainer-nicknameContainer"><span>${postData.unickname}</span></div>
    <div clasas="topProfileContainer-dateContainer"><span>${postData.createdAt}</span></div>
    <div class="topProfileContainer-categoryContainer"><span>${postData.categories}</span></div>
    <div class="topProfileContainer-viewContainer"><span>조회수 ${postData.boardView}</span></div>
    <div class="topProfileContainer-UDContainer">
        <a href="../update/${postData.categories}BoardUpdate.html?category=${postData.categories}&id=${postData.id}" class="UDContainer-updateA" data-set= "${postData.id}"><div class="UDContainer-updateContainer"><span>수정</span></div></a>
        <div class="UDContainer-deleteContainer" data-set="${postData.id}"><span>삭제</span></div>
    </div>
</div>
`


    const postHTMLSyntax : string =
`
<div class = "contentContainer-titleContainer">
    <h3>${postData.boardTitle}</h3>
</div>
<div class="contentContainer-contentContainer"><span>${postData.boardContent}</span></div>
<!-- 이미지 들어가는 div -->

<!-- 댓글, 좋아요 버튼 영역 -->
<div class = "post-bottomContainer">
    <!-- 댓글 -->
    <div class = "bottomContainer-buttonReion"><span> 💬 ${postData.numberOfComment} </span></div>
    <!-- 좋아요 -->
    <div class = "bottomContainer-buttonReion"><span> ♡ ${postData.boardLike}</span></div>
</div>

`

    profileDiv.innerHTML = profileHTMLSyntax;
    contentDiv.innerHTML = postHTMLSyntax;

    // 삭제 구현
    profileDiv.querySelector(".UDContainer-deleteContainer").addEventListener("click", () =>{
        if(confirm("정말로 삭제하시겠습니까?")) {
            deleteBoard(postData.uid, String(postData.id), postData.categories);
        } else {
            return;
        }
    })

    // 좋아요 기능 구현
    profileDiv.querySelector(".bottomContainer-buttonReion").addEventListener("click", () => {
        likeImplement(postData.categories, postData.id);
    })


    // 파일이 있을 경우 표시
    if(postData.boardFile)
    {
        const fileContainer = document.createElement('div');
        fileContainer.classList.add("contentContainer-fileContainer");

        const imgTag = document.createElement('img');
        imgTag.classList.add("contentContainer-img");

        document.querySelector('.contentContainer-contentContainer').insertAdjacentElement('afterend', fileContainer);
        fileContainer.append(imgTag);

        const src : string = `http://localhost:3000/${postData.boardFile}`;
        imgTag.src = src;

    }
}