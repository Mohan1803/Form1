function myFunc(){
  const username = document.getElementById("user");
  const email = document.getElementById("email");
  const password = document.getElementById("pwd");
  const password1 = document.getElementById("pwd1"); 

  //MAIL FORMAT
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


  //FOR PASSWORD FIELD

  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  
 





   
       if (username.value==0 || email.value==0 || password.value==0 || password1.value==0)
       {
        alert("PLEASE FILL THE DETAILS!!!");
      } 
      else if(!password.value.match(lowerCaseLetters) || !password.value.match(upperCaseLetters) ||
      !password.value.match(numbers) || !password.value.length >= 8)
      {  
        
        document.getElementById('demo2').innerHTML="INSECURED PASSWORD!!!!";
      }
       else if(!email.value.match(mailformat))
     { 
      document.getElementById('demo1').innerHTML="You have entered an invalid email address!";
     }
       else if(password.value!=password1.value)
     {
       document.getElementById('demo').innerHTML="PASSWORD MISMATCH";
     }
       else
     {
        alert("SIGNUP SUCCESSFULL")
     }
     return false;
}