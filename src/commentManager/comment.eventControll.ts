import { renderReplyInputDOM } from "./comment.inputRender";
import { updateRender } from "./comment.updateRender";

// 답글 버튼에 이벤트 리스너 추가
export function addBtnEvent(replyButton : HTMLDivElement) : void {
    replyButton.addEventListener("click", (e)=>{
        const target = e.currentTarget as HTMLDivElement;
        const replyId = target.getAttribute('data-set')
        
        const verifyOpen = document.querySelector(`.replyInputContainer[data-set="${replyId}"]`)
        if(verifyOpen) {
            verifyOpen.remove();
        } else {
            renderReplyInputDOM(replyId);
        }

    })
}

// 수정 버튼에 이벤트 리스너 추가
export function addUpdateEvent(updateBtn : HTMLDivElement, content : string) : void {
    updateBtn.addEventListener("click", (e) => {
        const target = e.currentTarget as HTMLDivElement;
        const replyId = target.getAttribute('data-set');

        updateRender(replyId, content);
    })
}

// 삭제 버튼에 이벤트 리스너 추가