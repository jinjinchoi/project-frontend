
import { IDetailPageResponseData } from "interface/boardAndReply.interface";
import { getData } from "./detailPage.getData";
import { drawPostRegion } from "./detailPage.post.show";
import { drawComment } from "./detailPage.reply.show";

document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);

    const category = params.get('category');
    const id = params.get('id');
    const parsedId : number = Number(id);
    
    console.log(parsedId);


    try {
        const detailPageData : IDetailPageResponseData = await getData(category, parsedId);
        drawPostRegion(detailPageData.wholeContents.content);
        drawComment(detailPageData.wholeContents.reply, false);
    } catch(err) {
        console.log("controller Error: ", err);
    }
    


})