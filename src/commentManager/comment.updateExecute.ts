
export async function updateExecute (replyId : string, e : SubmitEvent) {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const id = params.get('id');

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("id", replyId);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        const response = await fetch(`http://localhost:3000/board/${category}/${id}/replyUpdate`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json',
                "userToken" : `testID`,
            },
            body : JSON.stringify(data),
        })
        if(!response.ok) {
            throw new Error("응답 오류" + response);
        } else {
            window.location.reload();
        }
    } catch (err) {
        console.log("댓글 수정 로직 오류: ", err);
    }

}