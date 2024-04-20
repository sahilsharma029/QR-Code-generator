let imgbox = document.querySelector(".qrcode");
let qrimg = document.getElementById("qrimg");
let qrtext = document.getElementById("qrtext");
let btn = document.querySelector("button");

const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

function generateqrcode()
{
    qrimg.src = url + qrtext.value;
}

btn.addEventListener("click",()=>{
    if(qrtext.value.length > 0)
    {
        generateqrcode();
    setTimeout(() => {
        qrtext.value = "";
    }, 2000);
    }
    else{
        qrtext.classList.add("error");
        setTimeout(() => {
            qrtext.classList.remove("error");
        }, 1000);
    }
})