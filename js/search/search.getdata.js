var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function getSpecifiableData(word) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`http://localhost:3000/board/logic/search?word=${word}`);
            if (!response.ok) {
                throw new Error("응답 에러");
            }
            const responseData = yield response.json();
            const { postList: specifiedPost } = responseData;
            return specifiedPost;
        }
        catch (err) {
            console.log('패치 오류: ', err.message);
        }
        return [];
    });
}
