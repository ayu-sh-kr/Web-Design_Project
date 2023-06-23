// let uname=document.getElementById("username");
// let pdetail=document.getElementById("password");
// let uerror=document.getElementById("usererror")
// let passrerror=document.getElementById("passrerror")
// let login=document.getElementsById("login")

function validation(){
    let uname=document.getElementById("username");
    let pdetail=document.getElementById("password");
    console.log("Dun")
    if(uname.value.trim() === ""){
        alert("Credentials can't be empty")
        console.log("Hi")
        // uname.value="Username is must";
        return false;
    }
    else if(pdetail.value.trim().length<6){
        pdetail.value="password is incorrect";
        return false;
    }
    else if(pdetail.value.trim() === ""){
        alert("password can't be empty")
        // pdetail.value="Password can't be empty"
        return false;
    }
    else {
        return true;  
    }
}