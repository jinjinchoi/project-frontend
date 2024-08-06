var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function updateExecute(replyId, e, userToken) {
    return __awaiter(this, void 0, void 0, function* () {
        const params = new URLSearchParams(window.location.search);
        const category = params.get('category');
        const id = params.get('id');
        const formData = new FormData(e.target);
        formData.append("id", replyId);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        try {
            const response = yield fetch(`http://localhost:3000/board/${category}/${id}/replyUpdate`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    "userToken": userToken.uid,
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error("응답 오류" + response);
            }
            else {
                window.location.reload();
            }
        }
        catch (err) {
            console.log("댓글 수정 로직 오류: ", err);
        }
    });
}
