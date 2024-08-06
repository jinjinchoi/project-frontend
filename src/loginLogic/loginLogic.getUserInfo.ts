import { ICookieUserInfo } from "interface/cookie.interface";

// 쿠키로 유저 정보 받아오기
export async function getUserIdAndNickName() {
    try {
        const response = await fetch("http://localhost:3000/users/profile", {
            method : 'GET',
            credentials : 'include',
        });

        if(!response.ok)
            throw new Error("리스폰스 응답 에러");

        const data : ICookieUserInfo = await response.json();

        return data;
    } catch (err) {
        console.error("쿠키 유저 정보 획득 오류: ", err.message);
    }

}