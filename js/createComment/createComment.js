var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.querySelector(".commentInputContainer-form").addEventListener('submit', (e) => __awaiter(this, void 0, void 0, function* () {
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const id = params.get('id');
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    try {
        const response = yield fetch(`http://localhost:3000/board/${category}/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "userToken": `testID`,
                "unickname": `user`
            },
            body: JSON.stringify(data),
        });
        console.log(yield response.json());
        if (!response.ok) {
            throw new Error("응답 오류" + response.statusText);
        }
        else {
            window.location.reload();
        }
    }
    catch (err) {
        console.log("댓글 생성 로직 오류: ", err);
    }
}));
