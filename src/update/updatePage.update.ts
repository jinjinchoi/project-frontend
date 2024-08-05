import { showExistringData } from "./updatePage.showData";

// 주소창에서 파라미터 값 가져오기
const params = new URLSearchParams(window.location.search);
const category = params.get('category');
const id = params.get('id');
const parsedId : number = Number(id);

// 원래 존재했던 본문 내용 보여주기
document.addEventListener("DOMContentLoaded", async () => {
    showExistringData(category, parsedId);
})

// 파일 변경시 표시
document.querySelector("#bottom-file").addEventListener("change", (e) => {
    const uploadedFile = e.target as HTMLInputElement;
    const file = uploadedFile.files[0];
    
    if(file && file.name.length > 0) {
        document.querySelector(".bottom-fileName").textContent = file.name;
    }
    else {
        document.querySelector(".bottom-fileName").textContent = "기존 파일이 업로드 됩니다.";
    }
})

// 업데이트
document.querySelector(".wright-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    formData.forEach((value, key) => {
        if (value instanceof File) {
          console.log(`Key: ${key}`);
          console.log(`Name: ${value.name}`);
          console.log(`Size: ${value.size}`);
          console.log(`Type: ${value.type}`);
        } else {
          console.log(`${key}: ${value}`);
        }
      });

    try {
        const response = await fetch(`http://localhost:3000/board/free/${id}/postUpdate`, {
            method: 'PATCH',
            headers: {
                "userToken": `testID`,
            },
            body: formData,
        });

        if (response.ok) {
            window.location.href = `../detailpage/detailpage.html?category=${category}&id=${parsedId}`;
        } else {
            console.log("서버 오류: ", response.status);
            alert("서버 오류 발생, 다시 시도해주세요.")
        }

    } catch (err) {
        console.log("patch 전송오류: ", err);
    }
});

