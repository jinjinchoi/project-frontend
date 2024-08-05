import { IReply } from "../interface/boardAndReply.interface";
import { addBtnEvent, addRemoveEvent, addUpdateEvent } from "../commentManager/comment.eventControll"

export function drawComment (replyData : IReply[], repeat : boolean) : void {
    const commentRegion = document.querySelector(".commentContainer");

    for(const commentData of replyData) {
        const commentContainer = document.createElement("div");
        if(!repeat) {
            commentContainer.classList.add('commentContainer-frofileAndContent');
        } else {
            commentContainer.classList.add('commentContainer-frofileAndContent-repeat');
        }
        
        commentContainer.setAttribute('data-set', `${commentData.id}`)
        commentRegion.append(commentContainer);


       const commentHTMLSyntax =
`
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
`

        commentContainer.innerHTML = commentHTMLSyntax;
        
        // 삭제된 글이면 수정 삭제 답글 버튼 안뜨게
        if(commentData.isDeleted) {
            commentContainer.querySelector(".userProfileContainer-repliesBtnContainer").remove();
            commentContainer.querySelector(".userProfileContainer-updateBtnContainer").remove();
            commentContainer.querySelector(".userProfileContainer-deleteBtnContainer").remove();

            const text = commentContainer.querySelector(".replyContainer-span") as HTMLSpanElement;
            text.style.color = "lightgray"
        }

        if (!commentData.isDeleted) {
            // 답글 버튼 이벤트 리스너 추가
            const replyBtn = commentContainer.querySelector(".userProfileContainer-repliesBtnContainer") as HTMLDivElement;
            addBtnEvent(replyBtn);

            // 댓글 수정 버튼 이벤트 리스너 추가
            const updateBtn = commentContainer.querySelector(`.userProfileContainer-updateBtnContainer`) as HTMLDivElement;
            addUpdateEvent(updateBtn, commentData.replyContent);

            // 댓글 삭제 버튼 이벤트 리스너 추가
            const deleteBtn = commentContainer.querySelector(`.userProfileContainer-deleteBtnContainer`) as HTMLDivElement;
            addRemoveEvent(deleteBtn, commentData.category, String(commentData.boardId), String(commentData.id), commentData.uid);
        }

        

        if(Array.isArray(commentData.replies) && commentData.replies.length > 0) {
            drawComment(commentData.replies, true);
        }
    }

}