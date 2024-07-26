export function drawPostRegion(postData) {
    const detailContainer = document.querySelector(".onlyPostContainer");
    const profileDiv = document.createElement("div");
    profileDiv.classList.add("topProfileContainer");
    detailContainer.append(profileDiv);
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("contentContainer");
    detailContainer.append(contentDiv);
    const profileHTMLSyntax = `
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
`;
    const postHTMLSyntax = `
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

`;
    profileDiv.innerHTML = profileHTMLSyntax;
    contentDiv.innerHTML = postHTMLSyntax;
    if (postData.boardFile) {
        const fileContainer = document.createElement('div');
        fileContainer.classList.add("contentContainer-fileContainer");
        const imgTag = document.createElement('img');
        imgTag.classList.add("contentContainer-img");
        document.querySelector('.contentContainer-contentContainer').insertAdjacentElement('afterend', fileContainer);
        fileContainer.append(imgTag);
        const src = `http://localhost:3000/${postData.boardFile}`;
        imgTag.src = src;
    }
}
