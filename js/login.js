// 로그인 Input 작용시 버튼색 바꿈 이벤트
class BtnLight{
    constructor() {
        this.idInput = document.querySelector('#uid')
        this.pwInput = document.querySelector('#upw')
        this.loginBtn = document.querySelector('.login_btn')

        this.event()
        this.btnChange()
    }

    event(){
        this.idInput.addEventListener('input', () => this.btnChange());
        this.pwInput.addEventListener('input', () => this.btnChange());
    }

    btnChange(){
        if((this.idInput.value.length >= 8) && (this.pwInput.value.length >= 8)){
            this.loginBtn.classList.add('login_btnOn');
            this.loginBtn.classList.remove('login_btn');
        }else{
            this.loginBtn.classList.remove('login_btnOn');  
            this.loginBtn.classList.add('login_btn');
        }
    }
}
const loginBtn = new BtnLight()