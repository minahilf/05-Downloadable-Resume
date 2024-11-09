let fullName:any = document.getElementById("name")
let title : any = document.getElementById("title")
let phone : any = document.getElementById("phone-no")
let email  : any= document.getElementById("email")
let linkdIn : any = document.getElementById("linkdin")
let intro: any  = document.getElementById("intro") 
let jtitle : any = document.getElementById("jtitle")
let jtitle1 : any = document.getElementById("jtitle1")
let exp: any  = document.getElementById("exp") 
let exp1: any  = document.getElementById("exp1") 
let skills: any  = document.getElementById("skills") 
let skills2: any  = document.getElementById("skills2") 
let skills3: any  = document.getElementById("skills3") 
let skilld: any  = document.getElementById("skilld") 
let skilld2: any  = document.getElementById("skilld2") 
let skilld3: any  = document.getElementById("skilld3") 
let degree: any  = document.getElementById("degree") 
let degree2: any  = document.getElementById("degree2") 
let degree3: any  = document.getElementById("degree3") 
let education : any = document.getElementById("edu") 
let education2 : any = document.getElementById("edu2") 
let education3 : any = document.getElementById("edu3") 
let ppic : any = document.getElementById("ppic") 



let btn = document.getElementById("btn")
let form = document.getElementById("resume-form")

form?.addEventListener("submit", (e)=>{
    e.preventDefault()

    if (!fullName.value || !title.value || !phone.value || !email.value) {
        alert("Please fill in all required fields!");
        return;
    }

    localStorage.setItem("name", fullName.value)
    localStorage.setItem("title", title.value)
    localStorage.setItem("phone-no", phone.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("linkdIn", linkdIn.value)
    localStorage.setItem("intro", intro.value)
    localStorage.setItem("jtitle", jtitle.value)
    localStorage.setItem("jtitle1", jtitle1.value)
    localStorage.setItem("exp", exp.value)
    localStorage.setItem("exp1", exp1.value)
    localStorage.setItem("skills", skills.value)
    localStorage.setItem("skills2", skills2.value) 
    localStorage.setItem("skills3", skills3.value)  
    localStorage.setItem("skilld", skilld.value)
    localStorage.setItem("skilld2", skilld2.value)
    localStorage.setItem("skilld3", skilld3.value)
    localStorage.setItem("degree", degree.value)
    localStorage.setItem("degree2", degree2.value)
    localStorage.setItem("degree3", degree3.value)
    localStorage.setItem("edu", education.value)
    localStorage.setItem("edu2", education2.value)
    localStorage.setItem("edu3", education3.value)

    if(ppic.files && ppic.files[0]){
        let reader = new FileReader()
        reader.addEventListener("load", ()=>{
            let text:any = reader.result
            localStorage.setItem("profile", text)
        })
        reader.readAsDataURL(ppic.files[0])
    }

    window.location.href = "./01-Static Interactive Resume Builder/resume.html"
})
