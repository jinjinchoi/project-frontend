import { renderReplyInputDOM } from "./renderReplyInputDOM";

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