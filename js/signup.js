// ------------------------ ID 중복체크 ------------------------


// const checkBtn = document.querySelector('#id_check');
// const uid = document.querySelector('#uid')
// const checkFalse = document.querySelector('#check_id_false')
// const checkTrue = document.querySelector('#check_id_true')

// checkBtn.addEventListener('click', () => {
//     if((uid.value.length <= 20) && (uid.value.length >= 6)){
//             checkFalse.style.display = 'none'
//             checkTrue.style.display = 'block'
//     }else {
//         checkTrue.style.display = 'none'
//         checkFalse.style.display = 'block'
//     }
// })


class Check{
    constructor(){
        this.checkBtn = document.querySelector('#id_check')
        this.uid = document.querySelector('#uid')
        this.checkFalse = document.querySelector('#check_id_false')
        this.checkTrue = document.querySelector('#check_id_true')
        this.reg = /^[A-Za-z0-9]{6,20}$/;

        this.event()
    }

    event(){
        this.checkBtn.addEventListener('click', () => {
            if(this.reg.test(this.uid.value)){
                this.checkFalse.style.display = 'none'
                this.checkTrue.style.display = 'block'
            }else{
                this.checkTrue.style.display = 'none'
                this.checkFalse.style.display = 'block'
            }
        })
    }
}

const idCheck = new Check();
// -----------------------------------------------------------------

// --------------------------- 가입 취소 --------------------------


// const signupCancel = document.querySelector('#signup_btn_cancel');

// signupCancel.addEventListener('click', () => {
//     if(confirm('취소하시겠습니까?') == true){
//         window.location.href = '../login/login.html'; 
//     }
// })


class SignupCancel{
    constructor(){
        this.cancel = document.querySelector('#signup_btn_cancel')

        this.event()
    }

    event(){
        this.cancel.addEventListener('click', () => {
            if(confirm('취소하시겠습니까?') == true){
                window.location.href = '../login/login.html'; 
            }
        })
    }
}

const cancelBtn = new SignupCancel();
// -------------------------------------------------------------------

// --------------------- 가입하기 ID중복체크 --------------------------
class SignupCheck{
    constructor(){
        this.checkTrue = document.querySelector('#check_id_true')
        this.signupBtn = document.querySelector('#signup_btn')
        this.pwInput = document.querySelector('#upw')
        this.pwInput2 = document.querySelector('#check_upw')
        this.nickInput = document.querySelector('#uNickname')
        this.emailInput = document.querySelector('#uEmail')
        this.phoneInput = document.querySelector('#uPhone')

        this.nickReg = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,8}$/;
        this.emailReg =  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        this.phoneReg = /^\d{3}-?\d{3,4}-?\d{4}$/;
        this.pwReg = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,20}$/;

        this.event()
    }

    event(){
        this.signupBtn.addEventListener('click', () => {
            if(this.checkTrue.style.display !== 'block'){
                alert('아이디 중복확인을 해주세요.')
            }else if(this.pwInput.value !== this.pwInput2.value){
                alert('비밀번호가 일치하지 않습니다.')
            }else if(!this.emailReg.test(this.emailInput.value)){
                alert('이메일을 다시 확인해주세요.')
            }else if(!this.phoneReg.test(this.phoneInput.value)){
                alert('휴대폰 번호를 다시 입력해주세요.')
            }else if((this.checkTrue.style.display === 'block') && (this.pwReg.test(this.pwInput.value)) && (this.pwInput.value === this.pwInput2.value) && (this.nickReg.test(this.nickInput.value)) && (this.emailReg.test(this.emailInput.value)) && (this.phoneReg.test(this.phoneInput.value))){
                alert('회원가입에 성공했습니다.')
            }
        })
    }
}

const signupBtn = new SignupCheck();

// -------------------------------------------------------------------
