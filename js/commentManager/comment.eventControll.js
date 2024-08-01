import { renderReplyInputDOM } from "./comment.inputRender.js";
import { updateRender } from "./comment.updateRender.js";
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
export function addUpdateEvent(updateBtn, content) {
    updateBtn.addEventListener("click", (e) => {
        const target = e.currentTarget;
        const replyId = target.getAttribute('data-set');
        updateRender(replyId, content);
    });
}
