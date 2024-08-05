var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function deleteBoard(uid, boardId, category) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://localhost:3000/board/${category}/${boardId}/postDelete`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                    "userToken": `testID`,
                },
            });
            if (response.ok) {
                window.location.href = `../category/${category}.html`;
            }
            else {
                console.log("서버 오류: ", response.status);
                alert("서버 오류 발생, 다시 시도해주세요.");
            }
        }
        catch (err) {
            console.log("patch 오류: ", err);
        }
    });
}
