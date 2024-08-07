var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function logoutExecute(logoutDiv, myPageSpan, aTag) {
    return __awaiter(this, void 0, void 0, function* () {
        logoutDiv.remove();
        myPageSpan.innerHTML = "Log in";
        aTag.href = "../../html/login/login.html";
    });
}
export function alreadyLogout() {
    const logutDiv = document.querySelector(".banner-userUI-logout");
    if (!logutDiv)
        return;
    logutDiv.remove();
    const myPageATag = document.querySelector(".banner-login-a");
    myPageATag.href = "./../html/login/login.html";
    const myPageSpan = myPageATag.querySelector('span');
    myPageSpan.innerHTML = "Log in";
}
