import { ILikeResponseMessage } from "interface/like.interface";
import { colorPainting, removePainting } from "./like.fillButton";

// 좋아요 실행 함수
export async function likeImplement (category : string, boardId : number, userToken? : string) : Promise<void> {
    try {
        const resonse = await fetch(`http://localhost:3000/board/${category}/${boardId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "userToken": "testId",
            }
        })

        if(!resonse.ok)
            throw new Error ("리스폰스 응답 오류");

        const responseMesaage : ILikeResponseMessage = await resonse.json();

        if(responseMesaage.message = "좋아요") {
            colorPainting();
        } else {
            removePainting();
        }


    } catch (err) {
        console.log("Err : like.implement ::", err.mesaage);
    }
}