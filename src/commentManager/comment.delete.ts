
export async function deleteComment(category : string, boardId : string, replyId : string, userToken : string) : Promise<void> {

    try {
        const response = await fetch(`http://localhost:3000/board/${category}/${boardId}/${replyId}/replyDelete`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "userToken": userToken,
            },
        });

        if (response.ok) {
            window.location.reload();
        } else {
            console.log("서버 오류: ", response.status);
            alert("서버 오류 발생, 다시 시도해주세요.")
        }

    } catch (err) {
        console.log("patch 오류: ", err);
    }
}