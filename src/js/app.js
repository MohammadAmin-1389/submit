let form = document.querySelector(".user");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userData = {
    name: e.target.yame.value,
    age: e.target.age.value,
    email: e.target.eName.value,
    number: e.target.number.value,
    password: e.target.pFrom.value,
  };

 
  for (let key in userData) {
    if (userData[key] === "") {
      alert("لطفاً همه‌ی فیلدها را پر کنید!");
      return;
    }
  }

 
  if (userData.name.length < 3) {
    alert("نام باید حداقل ۳ حرف باشد!");
    return;
  }

  if (userData.age < 3) {
    alert("سن کمتر از ۳ سال مجاز نیست!");
    return;
  }

  if (userData.number.length < 7) {
    alert("شماره باید حداقل ۷ رقم باشد!");
    return;
  }

  if (userData.password.length < 6) {
    alert("رمز عبور باید حداقل ۶ کاراکتر باشد!");
    return;
  }


  console.log("اطلاعات کاربر:", userData);
  alert("ثبت با موفقیت انجام شد ✅");
});