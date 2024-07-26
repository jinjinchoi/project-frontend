// 파일 업로드시 파일명 보여주는 함수
document.querySelector("#bottom-file").addEventListener("change", (e) => {
    const uploadedFile = e.target as HTMLInputElement;
    const file = uploadedFile.files[0];
    
    if(file && file.name.length > 0) {
        document.querySelector(".bottom-fileName").textContent = file.name;
    }
    else {
        document.querySelector(".bottom-fileName").textContent = "";
    }
})

document.querySelector(".wright-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    try {
        const response = await fetch("http://localhost:3000/board/free/postCreate", {
            method: 'POST',
            headers: {
                "userToken": `testID`,
                "unickname": "user"
            },
            body: formData,
        });

        if (response.ok) {
            window.location.href = "../category/free.html"
            
        } else {
            console.log("서버 오류: ", response.status);
            alert("서버 오류 발생, 다시 시도해주세요.")
        }

    } catch (err) {
        console.log("patch 전송오류: ", err);
    }
});