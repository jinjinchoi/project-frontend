document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await axios.get('http://localhost:3000/users/modify',{
        withCredentials: true});
        
        const user = response.data;
        console.log(response)
        if(user.uprofile){
            document.querySelector('#user_img').src = `http://localhost:3000/${user.uprofile}`;
        }else{
            document.querySelector('#user_img').src =  "../../profile/unknown.jpg"
        }
        document.querySelector('#unick_input').value = user.unickname;
        document.querySelector('#uemail_input').value = user.uemail;
        document.querySelector('#uphone_input').value = user.uphone;
    
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
});

document.querySelector('#uprofile_input').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.querySelector('#user_img').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});


class OkBtn{
    constructor(){
        this.okBtn = document.querySelector('#okBtn')

        this.event()
    }

    event(){
        this.okBtn.addEventListener('click', async () => {
            if(confirm('정말 수정하시겠습니까?')){
                // FormData 객체 생성
                const formData = new FormData();

                // 파일 업로드
                const profileFileInput = document.querySelector('#uprofile_input'); // 파일 입력 필드
                if (profileFileInput.files.length > 0) {
                    formData.append('profile', profileFileInput.files[0]);
                }

                // 기타 사용자 정보
                formData.append('unickname', document.querySelector('#unick_input').value);
                formData.append('uemail', document.querySelector('#uemail_input').value);
                formData.append('uphone', document.querySelector('#uphone_input').value);
                if(document.querySelector('#upw_input').value > 8){
                    formData.append('upw', document.querySelector('#upw_input').value);
                }

                for (const [key, value] of formData.entries()) {
                    console.log(key, value);
                }

                try {
                    const response = await axios.post('http://localhost:3000/users/modify', formData, {
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });
                    alert('로그인 화면으로 돌아갑니다.')
                    location.href = '../login/login.html'
                } catch (error) {
                    console.error('Error updating user data:', error);
                }
            }
        })
    }
}

const modifyBtn = new OkBtn();

// ------------------- 취소 버튼 ----------------------------
class Cancel{
    constructor(){
        this.cancelBtn = document.querySelector('#cancelBtn')
        this.event()
    }

    event(){
        const btn = this.cancelBtn
        console.log(btn);
        if (btn) {
            btn.onclick = (e) => {
                e.preventDefault();
                location.href = 'http://127.0.0.1:5500/nestjsProject/frontend/html/mypage/mypage.html';
            }
        }
    }
}

const back = new Cancel();
// ---------------------------------------------------------