import { IResponseData } from "interface/boardAndReply.interface";

export async function getSpecifiableData (word : string) {
    try {
        // console.log("category: ", category);
        const response = await fetch(`http://localhost:3000/board/logic/search?word=${word}`);
        if(!response.ok) {
            throw new Error("응답 에러")
        }
        const responseData : IResponseData  = await response.json();
        const { postList : specifiedPost }  = responseData;
        // console.dir(specifiedPost);
        return specifiedPost;
    } catch (err) {
        console.log('패치 오류: ', err.message)
    }
    return [];
}