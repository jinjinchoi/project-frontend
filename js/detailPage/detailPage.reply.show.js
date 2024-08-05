import { addBtnEvent, addRemoveEvent, addUpdateEvent } from "../commentManager/comment.eventControll.js";
export function drawComment(replyData, repeat) {
    const commentRegion = document.querySelector(".commentContainer");
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
    for (const commentData of replyData) {
        const storedDate = new Date(commentData.createdAt.replace(' ', 'T'));
        const koreanDate = storedDate.toLocaleDateString('ko-KR', dateOptions);
        const koreanTime = storedDate.toLocaleTimeString('ko-KR', timeOptions);
        const formattedDate = `${koreanDate} ${koreanTime}`;
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
        <div class="userProfileContainer-dateContainer"> <span>${formattedDate} </span></div>
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
