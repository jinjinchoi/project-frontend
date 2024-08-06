// 로그아웃시 메세지 변경하고 쿠키 삭제하고 링크 변경하는 함수

export async function logoutExecute(logoutDiv : HTMLDivElement, myPageSpan : HTMLSpanElement, aTag : HTMLAnchorElement) : Promise<void> {
    logoutDiv.remove();
    myPageSpan.innerHTML = "Log in"
    aTag.href = "../../html/login/login.html";
    // 백엔드에서 쿠키 삭제 필요
    
    // window.location.reload();
}

export function alreadyLogout() {
    const logutDiv = document.querySelector(".banner-userUI-logout") as HTMLDivElement;
    if(!logutDiv)
        return;
    logutDiv.remove();
    const myPageATag = document.querySelector(".banner-login-a") as HTMLAnchorElement 
    myPageATag.href = "./../html/login/login.html"
        const myPageSpan = myPageATag.querySelector('span') as HTMLSpanElement;
        myPageSpan.innerHTML = "Log in"
}