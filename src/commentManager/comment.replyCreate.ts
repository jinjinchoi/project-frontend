//  댓글에 답글 다는 로직

import { ICookieUserInfo } from "interface/cookie.interface";

export async function sendReply(e : SubmitEvent, parentId : string, userToken : ICookieUserInfo) {
    e.preventDefault();

    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const id = params.get('id');

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append('parentId', parentId);
    const data = {};
    

    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        const response = await fetch(`http://localhost:3000/board/${category}/${id}/replyCreate`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                "userToken" : userToken.uid,
                "unickname" : userToken.unickname,
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
}