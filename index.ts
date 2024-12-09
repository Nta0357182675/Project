// hiện mật khẩu
let pass = document.querySelector('form .form_2 i') as HTMLElement

let mk = document.querySelector('form .form_2 input') as HTMLInputElement

let found = true
pass.addEventListener('click', function (){
   found = !found
   if(!found){
    mk.type = 'text'
    pass.className = "fa-regular fa-eye-slash"
   } else{
    pass.className = "fa-regular fa-eye"
    mk.type = 'password'
   }
})
