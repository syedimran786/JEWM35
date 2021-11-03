// let input=document.getElementById("inp");
// let eye=document.getElementById("eye")

// console.log(eye.className);
// function togglePassword1()
// {
//       input.type="text";
//       eye.className="fas fa-eye-slash"
// }

// function togglePassword2()
// {
//       input.type="password";
//       eye.className="fas fa-eye"
// }

let colors=["red","pink","orange","Yellow","blue","green"]
let i=1;
function counter()
{
      // document.title=`Counter Updated ${i++} times`;

     for (let ind in colors) {
      document.title=`Counter Updated ${colors[ind]} times`;
     }
      
      // console.log(i++);
}
setInterval(counter,1000)
