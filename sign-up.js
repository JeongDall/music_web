const subBtn = document.querySelector('#submit');
const canBtn = document.querySelector('#cancel');

subBtn.addEventListener('click', subSignup);
canBtn.addEventListener('click', canSignup);

function subSignup() {
    alert('회원가입에 성공하셨습니다!');

    const link = '../So-So.html';
    location.href = link;
}

function canSignup(){
    const link = './sign-in.html';
    location.href = link;
}