let students=[
      {
            sname:"Dinga",
            age:23,
            usn:123,
            dept:"cse",
            marks:620,
            imgurl:"https://media.istockphoto.com/photos/business-illustration-3d-rendering-man-character-cartoon-businessman-picture-id1348958781?b=1&k=20&m=1348958781&s=170667a&w=0&h=Rp_hkpr8VAxbU-G_TfQvOvFTQjGwWyXEhUdL5ZjGvs8="
      },
      {
            sname:"Sheela",
            age:19,
            usn:234,
            dept:"ise",
            marks:560,
            imgurl:"https://media.istockphoto.com/photos/portrait-of-a-teenage-3d-character-picture-id1330874290?b=1&k=20&m=1330874290&s=170667a&w=0&h=bMv6ET7KluHY6DC-zcU2fjjvAfsxElq4sH5xjhSfQ1w="
      },
      {
            sname:"Ram",
            age:22,
            usn:345,
            dept:"cse",
            marks:345,
            imgurl:"https://media.istockphoto.com/photos/hands-holding-white-mask-picture-id861868424?b=1&k=20&m=861868424&s=170667a&w=0&h=Lk6gOodHjeyokh-bOxKKJY7HpNeFmlczjzp6Row8oqk="
      },
      {
            sname:"Raju",
            age:22,
            usn:345,
            dept:"cse",
            marks:345,
            imgurl:"https://media.istockphoto.com/vectors/male-user-icon-vector-id517998264?k=20&m=517998264&s=612x612&w=0&h=pdEwtkJlZsIoYBVeO2Bo4jJN6lxOuifgjaH8uMIaHTU="
      },
      {
            sname:"Jhon",
            age:22,
            usn:345,
            dept:"cse",
            marks:345,
            imgurl:"https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE="
      }
];

console.log(students);


let sdata=document.getElementById("sdata");


for(let student of students)
{
      sdata.innerHTML+=
      `
            <tr>
                  <td>${student.usn}</td>
                  <td>
                        <img src=${student.imgurl} height="200px" width="200px" />
                  </td>
                  <td>${student.sname}</td>
                  <td>${student.age}</td>
                  <td>${student.dept}</td>
                  <td>${student.marks}</td>
            </tr>
      `
     
}
