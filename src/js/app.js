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

 
  for (let key in userData) {
    if (userData[key] === "") {
      alert("لطفاً همه‌ی فیلدها را پر کنید!");
      return;
    }
  }

 
  if (userData.info.length < 3) {
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

   if (userData.postCod.length < 7) {
    alert("کد پستی حداقل هشت رقم است!")
    ;
    return;
  }

  if (userData.adCod.length < 5) {
   alert("ادرست رو کامل بنویس");
    return;
  }


  console.log("اطلاعات کاربر:", userData);
  alert("ثبت با موفقیت انجام شد ✅");
   e.preventDefault();
});