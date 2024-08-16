const generate = document.querySelector('.button')
const inputfield= document.getElementById("inputfield")
const copy = document.querySelector(".fa-solid ")
// console.log(copy)
function generate_Pass(){
    const len = 12
    const Uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const Lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const Numbers = '0123456789'
    const Symbols = '!@#$%^&*()_+~\|}{[]:;?><,./-='
    const allchar = Uppercase +Lowercase +Numbers +Symbols
    let password1 = ""
    password1 +=Uppercase[Math.floor(Math.random()*Uppercase.length)]
    
    password1 +=Lowercase[Math.floor(Math.random()*Lowercase.length)]
    
    password1 +=Numbers[Math.floor(Math.random()*Numbers.length)]
    
    password1 +=Symbols[Math.floor(Math.random()*Symbols.length)]

    while(password1.length<len){
        password1+=allchar[Math.floor(Math.random()*allchar.length)]
    }
    return password1
}


generate.addEventListener('click',()=>{
    password=generate_Pass()
    inputfield.value = password

})
copy.addEventListener("click", () => {
    inputfield.select();
    inputfield.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");

    const notification = document.getElementById('copy-notification');
    notification.style.visibility = 'visible';

    setTimeout(() => {
        notification.style.visibility = 'hidden';
    }, 2000);
});

