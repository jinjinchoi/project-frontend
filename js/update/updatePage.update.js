var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { showExistringData } from "./updatePage.showData.js";
const params = new URLSearchParams(window.location.search);
const category = params.get('category');
const id = params.get('id');
const parsedId = Number(id);
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    showExistringData(category, parsedId);
}));
document.querySelector("#bottom-file").addEventListener("change", (e) => {
    const uploadedFile = e.target;
    const file = uploadedFile.files[0];
    if (file && file.name.length > 0) {
        document.querySelector(".bottom-fileName").textContent = file.name;
    }
    else {
        document.querySelector(".bottom-fileName").textContent = "기존 파일이 업로드 됩니다.";
    }
});
document.querySelector(".wright-form").addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const formData = new FormData(e.target);
    const textAreaValue = formData.get('boardContent');
    const inputValue = formData.get('boardTitle');
    if (inputValue.trim() === '') {
        alert("제목을 입력해주세요");
        return;
    }
    if (textAreaValue.trim() === '') {
        alert("내용을 입력해주세요");
        return;
    }
    formData.forEach((value, key) => {
        if (value instanceof File) {
            console.log(`Key: ${key}`);
            console.log(`Name: ${value.name}`);
            console.log(`Size: ${value.size}`);
            console.log(`Type: ${value.type}`);
        }
        else {
            console.log(`${key}: ${value}`);
        }
    });
    try {
        const response = yield fetch(`http://localhost:3000/board/free/${id}/postUpdate`, {
            method: 'PATCH',
            headers: {
                "userToken": `testID`,
            },
            body: formData,
        });
        if (response.ok) {
            window.location.href = `../detailpage/detailpage.html?category=${category}&id=${parsedId}`;
        }
        else {
            console.log("서버 오류: ", response.status);
            alert("서버 오류 발생, 다시 시도해주세요.");
        }
    }
    catch (err) {
        console.log("patch 전송오류: ", err);
    }
}));
