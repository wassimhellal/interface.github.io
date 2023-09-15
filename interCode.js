let section=document.getElementsByClassName("inp");
let username=document.getElementById("div1");
let usernameError=document.getElementById("error");





section.addEventListener('submit',(event)=>{
    event.preventDefault();
    let uservalue=user.value.trim()
    if(uservalue.length==0){
        usernameError.innerText="user empty!"
        usernameError.style.color="red"
    }else{
        username.style.borderStyle="solid"
        username.style.borderWidth="2px"
        username.style.borderColor="green"
    }

})

