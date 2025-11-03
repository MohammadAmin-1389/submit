let form = document.querySelector(".user");

form.addEventListener("submit", (e) => {
  

  let userData = {
    info: e.target.name.value,
    age: e.target.myage.value,
    email: e.target.eName.value,
    number: e.target.number.value,
    password: e.target.pFrom.value,
    post: e.target.postCod.value,
    adress: e.target.adCod.value
  };

  let datauser =[];
  datauser.push(userData)
  console.log(datauser);
 
e.preventDefault();
});


