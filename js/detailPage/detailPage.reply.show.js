import { addBtnEvent, addRemoveEvent, addUpdateEvent } from "../commentManager/comment.eventControll.js";
export function drawComment(replyData, repeat) {
    const commentRegion = document.querySelector(".commentContainer");
    for (const commentData of replyData) {
        const commentContainer = document.createElement("div");
        if (!repeat) {
            commentContainer.classList.add('commentContainer-frofileAndContent');
        }
        else {
            commentContainer.classList.add('commentContainer-frofileAndContent-repeat');
        }
        commentContainer.setAttribute('data-set', `${commentData.id}`);
        commentRegion.append(commentContainer);
        const commentHTMLSyntax = `
<!-- 유저 정보 영역 -->
<div class="userImgContainer"> <img src="" class="userProfileContainer-userImgContainer-img"></div>
<div class="entireUserInfo">
    <div class="userProfileContainer">
        <div class="userProfileContainer-nicknamecontainer"> <span>${commentData.unickname} </span></div>
        <div class="userProfileContainer-dateContainer"> <span>${commentData.createdAt} </span></div>
        <div class="userProfileContainer-repliesBtnContainer" data-set="${commentData.id}"><span> 답글 </span></div>
        <div class="userProfileContainer-updateBtnContainer" data-set=${commentData.id}><span> 수정 </span></div>
        <div class="userProfileContainer-deleteBtnContainer" data-set=${commentData.id}><span> 삭제 </span></div>
    </div>
    <!-- 댓글 내용  -->
    <div class="replyContainer" data-set="${commentData.id}"><span class = "replyContainer-span" data-set="${commentData.id}">${commentData.replyContent}</span></div>
</div>
`;
        commentContainer.innerHTML = commentHTMLSyntax;
        if (commentData.isDeleted) {
            commentContainer.querySelector(".userProfileContainer-repliesBtnContainer").remove();
            commentContainer.querySelector(".userProfileContainer-updateBtnContainer").remove();
            commentContainer.querySelector(".userProfileContainer-deleteBtnContainer").remove();
            const text = commentContainer.querySelector(".replyContainer-span");
            text.style.color = "lightgray";
        }
        if (!commentData.isDeleted) {
            const replyBtn = commentContainer.querySelector(".userProfileContainer-repliesBtnContainer");
            addBtnEvent(replyBtn);
            const updateBtn = commentContainer.querySelector(`.userProfileContainer-updateBtnContainer`);
            addUpdateEvent(updateBtn, commentData.replyContent);
            const deleteBtn = commentContainer.querySelector(`.userProfileContainer-deleteBtnContainer`);
            addRemoveEvent(deleteBtn, commentData.category, String(commentData.boardId), String(commentData.id), commentData.uid);
        }
        if (Array.isArray(commentData.replies) && commentData.replies.length > 0) {
            drawComment(commentData.replies, true);
        }
    }
}
