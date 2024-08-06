var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function getUserIdAndNickName() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("http://localhost:3000/users/profile", {
                method: 'GET',
                credentials: 'include',
            });
            if (!response.ok) {
                const errorData = yield response.json();
                throw new Error(`Error ${response.status}: ${errorData.message}`);
            }
            const data = yield response.json();
            return data;
        }
        catch (err) {
            alert("인증 오류가 발생하였습니다. 다시 시도해주세요.");
            console.error("쿠키 유저 정보 획득 오류: ", err.message);
        }
    });
}
