var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getData } from "./detailPage.getData.js";
import { drawPostRegion } from "./detailPage.post.show.js";
import { drawComment } from "./detailPage.reply.show.js";
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const id = params.get('id');
    const parsedId = Number(id);
    try {
        const detailPageData = yield getData(category, parsedId);
        drawPostRegion(detailPageData.wholeContents.content);
        drawComment(detailPageData.wholeContents.reply, false);
    }
    catch (err) {
        console.log("controller Error: ", err);
    }
    const toView = document.querySelector("#topBar-toView");
    toView.href = `../category/${category}.html`;
    const toWrite = document.querySelector("#toBar-toWrite");
    toWrite.href = `../write/${category}BoardWrite.html`;
}));
