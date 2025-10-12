let form = document.querySelector(".user")

form.addEventListener("submit" , (e)=>{

let userData = {
name:e.target.yame.value,
age :e.target.age.value,
email : e.target.eName.value,
number : e.target.number.value,
passworld : e.target.pFrom.value
}
for(let key in userData){
    console.log(userData[key])
}
e.preventDefault()
})


