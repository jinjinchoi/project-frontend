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
    <div class="topProfileContainer-UDContainer">
        <a href="" class="UDContainer-updateA"><div class="UDContainer-updateContainer"><span>수정</span></div></a>
        <div class="UDContainer-deleteContainer" data-set="${postData.id}"><span>삭제</span></div>
    </div>
</div>
`


    const postHTMLSyntax : string =
`
<div class = "contentContainer-titleContainer">
    <h3>${postData.boardTitle}</h3>
</div>
<div class="contentContainer-contentContainer">
    <span>${postData.boardContent}</span>
</div>
<!-- 이미지 들어가는 div -->
<div class = "contentContainer-fileContainer">
    <img src="${postData.boardFile}" class ="contentContainer-img">
</div>

<!-- 댓글, 좋아요 버튼 영역 -->
<div class = "post-bottomContainer">
    <!-- 댓글 -->
    <div class = "bottomContainer-buttonReion"><span> 💬 ${postData.numberOfComment} </span></div>
    <!-- 좋아요 -->
    <div class = "bottomContainer-buttonReion"><span> ♡ ${postData.boardLike}</span></div>
</div>

`
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

    profileDiv.innerHTML = profileHTMLSyntax;
    contentDiv.innerHTML = postHTMLSyntax;
}