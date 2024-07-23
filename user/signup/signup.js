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

        this.event()
    }

    event(){
        this.signupBtn.addEventListener('click', () => {
            if(this.checkTrue.style.display !== 'block'){
                alert('아이디 중복확인을 해주세요.')
            }else{
                alert('회원가입에 성공하셨습니다.')
            }
        })
    }
}

const signupBtn = new SignupCheck();

// -------------------------------------------------------------------