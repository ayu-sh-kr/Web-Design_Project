let uname=document.getElementById("usernamedetail");
let pdetail=document.getElementById("passdetail");
let uerror=document.getElementById("usererror")
let passrerror=document.getElementById("passrerror")
// let login=document.getElementsById("login")

const validation=()=>{
    if(uname.value.trim()==""){
        alert("Credentials can't be empty")
        uerror.innerHTML="Username is must"
        return false;
    }
    else if(pdetail.value.trim().length<6){
        passrerror.innerHTML="password is incorrect";
        return false;
    }
    else if(pdetail.value.trim()==""){
        passrerror.innerHTML="Password can't be empty"
        return false;
    }
    else {
        return true;  
    }
    


}