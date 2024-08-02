import { IBoard } from "interface/boardAndReply.interface";
import { getSpecifiableData } from "./search.getdata";
import { displayPost } from "./search.render";


document.addEventListener("DOMContentLoaded", async () => {
    // 쿼리에서 검색어 가져옴
    const params = new URLSearchParams(window.location.search);
    const searchedWord : string | null = params.get('word');

    if(searchedWord == null)
        return;

    // 검색어 기반으로 데이터 가져옴
    const postList : IBoard[] = await getSpecifiableData(searchedWord);
    // 게시판 그리기
    displayPost(postList);

})