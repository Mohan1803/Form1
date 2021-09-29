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
      !password.value.match(numbers) || !password.value.length >= 7)
      {  
        document.getElementById('pwd').style.borderColor="#FF0000";
        document.getElementById('demo2').innerHTML="Password Must has atleast 8 characters that include atleast 1 lowercase , 1 uppercase , 1 number & 1 special character in(!@#$%^&*)";
      }
   //   else if(password.value.match(lowerCaseLetters) || password.value.match(upperCaseLetters) ||
  //    password.value.match(numbers) || password.value.length >= 8)
 //     {
  //      document.getElementById('pwd').style.borderColor="green";
  //      document.getElementById('demo2').innerHTML="";
  //    }
       
     else if(!email.value.match(mailformat))
     { 
      document.getElementById('email').style.borderColor="#FF0000";
      document.getElementById('demo1').innerHTML="You have entered an invalid email address!";
     }
  //   else if(email.value.match(mailformat))
  //   { 
  //    document.getElementById('email').style.borderColor="green";
   //   document.getElementById('demo1').innerHTML="";
   //  }
       else if(password.value!=password1.value)
     {
      document.getElementById('pwd1').style.borderColor="#FF0000";
       document.getElementById('demo').innerHTML="PASSWORD MISMATCH";
     }
       else
     {
        alert("SIGNUP SUCCESSFULL")
     }
     return false;
}