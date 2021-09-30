function myFunc(){
  const result = "";
  result += validateUsername();
  result += validateEmail();
  result += validatePassword();



  if(result == "")
  {
    alert("SIGNUP SUCCESSFULL");
    return true;
  }
  else{
    return false;
  }

//validating username

  function validateUsername(){
  const username = document.getElementById("user").value;

  if(username.length < 3){
    document.getElementById('user').style.borderColor="#FF0000";
    document.getElementById('demo3').innerHTML="Username must be between 3 to 25 characters";
  }
  else{
    document.getElementById('user').style.borderColor="green";
    document.getElementById('demo3').innerHTML="";
    return "";
  }
}


//validating email

function validateEmail(){
  const email = document.getElementById("email");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(!email.match(mailformat)){
    document.getElementById('email').style.borderColor="#FF0000";
    document.getElementById('demo1').innerHTML="Password Must have atleast 8 characters that include atleast 1 lowercase , 1 uppercase , 1 number & 1 special character in(!@#$%^&*)";
  }
  else{
    document.getElementById('email').style.borderColor="green";
    document.getElementById('demo1').innerHTML="";
    return "";
  }
  
}


//validating password

function validatePassword(){
  const password = document.getElementById("pwd").value;
  const password1 = document.getElementById("pwd1").value;
  const pwdformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

  if(!password.match(pwdformat)){
    document.getElementById('pwd').style.borderColor="#FF0000";
    document.getElementById('demo2').innerHTML="Password Must have atleast 8 characters that include atleast 1 lowercase , 1 uppercase , 1 number & 1 special character in(!@#$%^&*)";
 }
 else{
  document.getElementById('pwd').style.borderColor="green";
  document.getElementById('demo2').innerHTML="";
  return "";
 }

 if(password != password1)
 {
  document.getElementById('pwd1').style.borderColor="#FF0000";
  document.getElementById('demo').innerHTML="PASSWORD MISMATCH";
 }
 else 
 {
  document.getElementById('pwd1').style.borderColor="green";
   document.getElementById('demo').innerHTML="";
   return "";
}
}
}
  

 



  
 





   
      