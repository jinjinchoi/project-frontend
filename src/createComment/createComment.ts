
document.querySelector(".commentInputContainer-form").addEventListener('submit', async (e) => {
    e.preventDefault();

    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const id = params.get('id');

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log("data: ", data);

    try {
        const response = await fetch(`http://localhost:3000/board/${category}/${id}/replyCreate`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                "userToken" : `testID`,
                "unickname" : `user`
            },
            body : JSON.stringify(data),
        })

        console.log(await response.json())
        if(!response.ok) {
            throw new Error("응답 오류" + response);
        } else {
            window.location.reload();
        }
    } catch (err) {
        console.log("댓글 생성 로직 오류: ", err);
    }
})