import { IDetailPageResponseData } from "interface/boardAndReply.interface";
import { getData } from "./detailPage.getData";
import { drawPostRegion } from "./detailPage.post.show";
import { drawComment } from "./detailPage.reply.show";
import { DoYouLike } from "../like/like.getIsLike";
import { colorPainting, removePainting } from "../like/like.fillButton";

document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);

    const category = params.get('category');
    const id = params.get('id');
    const parsedId : number = Number(id);

    try {
        const detailPageData : IDetailPageResponseData = await getData(category, parsedId);
        drawPostRegion(detailPageData.wholeContents.content);
        drawComment(detailPageData.wholeContents.reply, false);

        // 좋아요 색칠하기
        const checkIsLike : boolean = await DoYouLike(parsedId, category, "testId");
        if(checkIsLike) {
            colorPainting();
        }
        else {
            removePainting();
        }

    } catch(err) {
        console.log("detailPage controller Error: ", err);
    }
    
    // 상단 to게시물 버튼 활성화
    const toView = document.querySelector("#topBar-toView") as HTMLAnchorElement;
    toView.href = `../category/${category}.html`;

    // 상단 to작성 버튼 활성화
    const toWrite = document.querySelector("#toBar-toWrite") as HTMLAnchorElement;
    toWrite.href = `../write/${category}BoardWrite.html`;

})
