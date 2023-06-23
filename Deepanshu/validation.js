// let uname=document.getElementById("username");
// let pdetail=document.getElementById("password");
// let uerror=document.getElementById("usererror")
// let passrerror=document.getElementById("passrerror")
// let login=document.getElementsById("login")

function validation(){
    let uname=document.getElementById("username");
    let pdetail=document.getElementById("password");
    const regx = new RegExp("/^[A_Za-z]/");
    console.log("Dun")
    if(uname.value.trim() === ""){
        alert("Credentials can't be empty")
        console.log("Hi")
        document.getElementById("error").innerHTML="Username is must";
        return false;
    }
    else if(!regx.test(uname.value)){
        alert("Username can't contain numeric value")
        return false
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