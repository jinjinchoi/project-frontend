var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { colorPainting, removePainting } from "./like.fillButton.js";
export function likeImplement(category, boardId, userToken) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resonse = yield fetch(`http://localhost:3000/board/${category}/${boardId}/LikeUpdate`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "userToken": userToken.uid,
                }
            });
            if (!resonse.ok)
                throw new Error("리스폰스 응답 오류");
            const responseMesaage = yield resonse.json();
            if (responseMesaage.message = "좋아요") {
                colorPainting();
            }
            else {
                removePainting();
            }
            window.location.reload();
        }
        catch (err) {
            console.log("Err : like.implement ::", err.mesaage);
        }
    });
}
