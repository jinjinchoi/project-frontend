import { renderReplyInputDOM } from "./renderReplyInputDOM.js";
export function addBtnEvent(replyButton) {
    replyButton.addEventListener("click", (e) => {
        const target = e.currentTarget;
        const replyId = target.getAttribute('data-set');
        const verifyOpen = document.querySelector(`.replyInputContainer[data-set="${replyId}"]`);
        if (verifyOpen) {
            verifyOpen.remove();
        }
        else {
            renderReplyInputDOM(replyId);
        }
    });
}
