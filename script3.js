var input_username = document.querySelector('.username-email-phone');
var input_password = document.querySelector('.password-login');
const btn_check = document.querySelector('.submit-login');
const error_alert = document.querySelector('.error-alert-text');
const load_login = document.querySelector('.load_login');
const trueOfalse_reload = false;

btn_check.onclick = () =>{   
if(input_username.value == "" && input_password.value == "" || input_username.value == null || input_password.value == null){
    error_alert.textContent = 'Username and password required';
}
if(input_username.value == ""){
    error_alert.textContent = 'Username and password required';
}
if(input_password.value == ""){
    error_alert.textContent = 'Username and password required';
}
if(input_username.value.length >=3 && input_password.value.length >=8 && input_username.value.length <=20 && input_password.value.length <=200){
    // alert('success');
    load_login.style.display = 'inline-block';
    btn_check.style.display = 'none';
    error_alert.textContent = '';
    setTimeout(function () {
        location.reload(1);
        return trueOfalse_reload = true;
    }, 3000)
}
if(input_username.value.length <1 && input_password.value.length <8 && input_username.value.length >20 && input_password.value.length >200){
    error_alert.textContent = 'Username and password required';
}
}