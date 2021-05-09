function clkLogin(){
    var txtIdElem= document.getElementById('txtId');
    var txtPwElem= document.getElementById('txtPw');

    console.log(txtIdElem.value);
    console.log(txtPwElem.value);

    if(txtIdElem.value === '' || txtPwElem.value === ''){
        alert('로그인을 할 수 없습니다.');
    }
    else{
        location.href= 'main.html';
    }
}

function goToback(){
    history.back();
}

function join(){
    var IdElem= document.getElementById('Id');
    var pwElem1= document.getElementById('pw1');
    var pwElem2= document.getElementById('pw2');

    console.log(IdElem.value);
    console.log(pwElem1.value);
    console.log(pwElem2.value);

    if(IdElem.value ==='' || pwElem1.value ==='' || pwElem2.value ===''){
        alert('회원가입을 할 수 없습니다.');
    }
    else if(pwElem1.value !== pwElem2.value){
        alert('비밀번호를 확인해 주세요.');
    }
    else{
        location.href= 'login.html';
    }



}