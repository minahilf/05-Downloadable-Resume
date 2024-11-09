"use strict";
let fullName = document.getElementById("name");
let title = document.getElementById("title");
let phone = document.getElementById("phone-no");
let email = document.getElementById("email");
let linkdIn = document.getElementById("linkdin");
let intro = document.getElementById("intro");
let jtitle = document.getElementById("jtitle");
let jtitle1 = document.getElementById("jtitle1");
let exp = document.getElementById("exp");
let exp1 = document.getElementById("exp1");
let skills = document.getElementById("skills");
let skills2 = document.getElementById("skills2");
let skills3 = document.getElementById("skills3");
let skilld = document.getElementById("skilld");
let skilld2 = document.getElementById("skilld2");
let skilld3 = document.getElementById("skilld3");
let degree = document.getElementById("degree");
let degree2 = document.getElementById("degree2");
let degree3 = document.getElementById("degree3");
let education = document.getElementById("edu");
let education2 = document.getElementById("edu2");
let education3 = document.getElementById("edu3");
let ppic = document.getElementById("ppic");
let btn = document.getElementById("btn");
let form = document.getElementById("resume-form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!fullName.value || !title.value || !phone.value || !email.value) {
        alert("Please fill in all required fields!");
        return;
    }
    localStorage.setItem("name", fullName.value);
    localStorage.setItem("title", title.value);
    localStorage.setItem("phone-no", phone.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("linkdIn", linkdIn.value);
    localStorage.setItem("intro", intro.value);
    localStorage.setItem("jtitle", jtitle.value);
    localStorage.setItem("jtitle1", jtitle1.value);
    localStorage.setItem("exp", exp.value);
    localStorage.setItem("exp1", exp1.value);
    localStorage.setItem("skills", skills.value);
    localStorage.setItem("skills2", skills2.value);
    localStorage.setItem("skills3", skills3.value);
    localStorage.setItem("skilld", skilld.value);
    localStorage.setItem("skilld2", skilld2.value);
    localStorage.setItem("skilld3", skilld3.value);
    localStorage.setItem("degree", degree.value);
    localStorage.setItem("degree2", degree2.value);
    localStorage.setItem("degree3", degree3.value);
    localStorage.setItem("edu", education.value);
    localStorage.setItem("edu2", education2.value);
    localStorage.setItem("edu3", education3.value);
    if (ppic.files && ppic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let text = reader.result;
            localStorage.setItem("profile", text);
        });
        reader.readAsDataURL(ppic.files[0]);
    }
    window.location.href = "./01-Static Interactive Resume Builder/resume.html";
});
