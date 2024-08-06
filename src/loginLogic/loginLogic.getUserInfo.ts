import { ICookieUserInfo } from "interface/cookie.interface";

// 쿠키로 유저 정보 받아오기
export async function getUserIdAndNickName() {
    try {
        const response = await fetch("http://localhost:3000/users/profile", {
            method : 'GET',
            credentials : 'include',
        });

        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error ${response.status}: ${errorData.message}`)
        }

        const data : ICookieUserInfo = await response.json();

        return data;
    } catch (err) {
        alert("인증 오류가 발생하였습니다. 다시 시도해주세요.")
        console.error("쿠키 유저 정보 획득 오류: ", err.message);
    }

}