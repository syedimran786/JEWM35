// Alphabets Validation

// function valid()
// {
//       let user=document.getElementById("user");

//       let reg=/^[A-Za-z]+$/g;
//       let res=reg.test(user.value)

     
//       if(res==true)
//       {
//             alert("Username Accepted");
//             return true;
//       }
//       else
//       {
//             // alert("Username Should contain only alphabets");

//             let msg=document.getElementById("msg");
//             msg.style.visibility="visible";
//             user.style.border="1px solid red"
//             return false;
//       }

      
     
// }



// Mobile Number Validation


// function valid()
// {
//       let user=document.getElementById("user");

//       let reg=/^[6-9][0-9]{9}$/g;
//       let res=reg.test(user.value)

     
//       if(res==true)
//       {
//             alert("Mobile Accepted");
//             return true;
//       }
//       else
//       {
//             // alert("Username Should contain only alphabets");

//             let msg=document.getElementById("msg");
//             msg.style.visibility="visible";
//             user.style.border="1px solid red"
//             return false;
//       }

      
     
// }

// Password and confirm Password

function valid()
{
      let pass=document.getElementById("pass");
      let cpass=document.getElementById("cpass");

      
            if(pass.value===cpass.value)
            {
                  alert("Password is matching")
                  return true
            }
            else
            {
                  let msg=document.getElementById("msg");
                  msg.style.visibility="visible"
                  return false;
            }
     
      

      
     
}
