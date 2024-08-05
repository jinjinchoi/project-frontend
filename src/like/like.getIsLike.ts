import { ILike } from "../interface/like.interface"

// 좋아요 했는지 알아보자
export async function DoYouLike(boardId: number, category: string, uswerToken?: string): Promise<boolean> {
    try {
        const resonse = await fetch(`http://localhost:3000/board/${category}/${boardId}/whetherLike`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'userToken': `testID`,
            }
        })

        if(!resonse.ok)
            throw new Error("좋아요 GET 로직 오류");

        const resonseMessage: ILike = await resonse.json();

        return resonseMessage.isLike;
    } catch (err) {
        console.log("좋아요 정보 획득 오류 : ", err.mesaage)
    }
}