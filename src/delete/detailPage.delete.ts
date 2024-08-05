// 게시물 삭제 로직
// 아이디 비교 필요
export async function deleteBoard(uid : string, boardId : string, category : string) : Promise<void> {

    try {
        const response = await fetch(`http://localhost:3000/board/${category}/${boardId}/postDelete`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "userToken": `testID`,
            },
        });

        if (response.ok) {
            window.location.href = `../category/${category}.html`
        } else {
            console.log("서버 오류: ", response.status);
            alert("서버 오류 발생, 다시 시도해주세요.")
        }

    } catch (err) {
        console.log("patch 오류: ", err);
    }
}