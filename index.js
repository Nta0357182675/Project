// hiện mật khẩu
var pass = document.querySelector('form .form_2 i');
var mk = document.querySelector('form .form_2 input');
var found = true;
pass.addEventListener('click', function () {
    found = !found;
    if (!found) {
        mk.type = 'text';
        pass.className = "fa-regular fa-eye-slash";
    }
    else {
        pass.className = "fa-regular fa-eye";
        mk.type = 'password';
    }
});
