let fullname = localStorage.getItem("name")       

   window.addEventListener("load", ()=>{
       let title = localStorage.getItem("title")
       let phone =  localStorage.getItem("phone-no")
       let email = localStorage.getItem("email")
       let linkdin = localStorage.getItem("linkdIn")
       let intro = localStorage.getItem("intro")
       let jtitle = localStorage.getItem("jtitle")
       let jtitle1 = localStorage.getItem("jtitle1")
       let exp = localStorage.getItem("exp")
       let exp1 = localStorage.getItem("exp1")
       let skills = localStorage.getItem("skills") 
       let skills2 = localStorage.getItem("skills2") 
       let skills3 = localStorage.getItem("skills3") 
       let skilld = localStorage.getItem("skilld")
       let skilld2 = localStorage.getItem("skilld2")
       let skilld3 = localStorage.getItem("skilld3")
       let degree = localStorage.getItem("degree")
       let degree2 = localStorage.getItem("degree2")
       let degree3 = localStorage.getItem("degree3")
       let edu = localStorage.getItem("edu")
       let edu2 = localStorage.getItem("edu2")
       let edu3 = localStorage.getItem("edu3")
       let profile = localStorage.getItem("profile")
    

       let infoName :any = document.getElementById("infoName")
       infoName.textContent = fullname

       let infoStitle :any = document.getElementById("infoStitle")
       infoStitle.textContent = title

       let infoPhone :any = document.getElementById("infoPhone")
       infoPhone.textContent = phone

       let infoEmail :any = document.getElementById("infoEmail")
       infoEmail.textContent = email

       let infoLink :any = document.getElementById("infoLink")
       infoLink.textContent = linkdin

       let infoIntro :any = document.getElementById("infoIntro")
       infoIntro.textContent = intro

        let infoSubTitle: any = document.getElementById("infoSubTitle")
        infoSubTitle.textContent = jtitle

        let infoSubTitle1: any = document.getElementById("infoSubTitle1")
        infoSubTitle1.textContent = jtitle1

        let infoExp :any = document.getElementById("infoExp")
        infoExp.textContent = exp

        let infoExp1 :any = document.getElementById("infoExp1")
        infoExp1.textContent = exp1

        
        let infoskillh :any = document.getElementById("infoskillh")
        infoskillh.textContent = skills

        let infoskillh2 :any = document.getElementById("infoskillh2")
        infoskillh2.textContent = skills2

        let infoskillh3 :any = document.getElementById("infoskillh3")
        infoskillh3.textContent = skills3

        let infoskilld :any = document.getElementById("infoskilld")
        infoskilld.textContent = skilld

        let infoskilld2 :any = document.getElementById("infoskilld2")
        infoskilld2.textContent = skilld2

        let infoskilld3 :any = document.getElementById("infoskilld3")
        infoskilld3.textContent = skilld3

        let infoeduh :any = document.getElementById("infoeduh")
        infoeduh.textContent = degree

        let infoeduh2 :any = document.getElementById("infoeduh2")
        infoeduh2.textContent = degree2

        let infoeduh3 :any = document.getElementById("infoeduh3")
        infoeduh3.textContent = degree3

        let infoedud :any = document.getElementById("infoedud")
        infoedud.textContent = edu

        let infoedud2 :any = document.getElementById("infoedud2")
        infoedud2.textContent = edu2

        let infoedud3 :any = document.getElementById("infoedud3")
        infoedud3.textContent = edu3

        let infopic :any = document.getElementById("infopic")
        infopic.src = profile

    })
    
 
let edit = document.getElementById("edit")
edit?.addEventListener("click", ()=>{
    window.history.back()
})

let printpdf = document.getElementById("print")
printpdf?.addEventListener("click", ()=>{
    window.print()
})

let share = document.getElementById("share")
let anchor = document.getElementById("anchor")
let username
if(fullname){
    username = fullname.toLowerCase().replace(/\s+/g, "-")
} else {
    username = "user"
}

let baseurl = "http://127.0.0.1:5500/01-Static%20Interactive%20Resume%20Builder/resume.html"
let uniqueurl = `${baseurl}?/${fullname}`

share?.addEventListener("click" , ()=>{
anchor?.setAttribute("href", uniqueurl)
})

let linkcopy = document.getElementById("linkcopy")
linkcopy?.addEventListener("click" , ()=>{
    navigator.clipboard.writeText(uniqueurl).then(()=>{
        alert("Copied")
    })
})