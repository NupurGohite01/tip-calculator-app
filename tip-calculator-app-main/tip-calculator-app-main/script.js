const billInput =document.querySelector(".input-bill");
const pplInput =document.querySelector(".input-people");
const tipPerPerson=document.getElementById("tip-amount");
const totalPerPerson=document.getElementById("total-amount");
const selectedTip=document.querySelectorAll(".select-tip");
const customInput =document.querySelector(".custom-tip");
const resetbtn=document.querySelector(".reset");
const errorInput=document.querySelector(".error");


billInput.addEventListener("input",billInputFun);
pplInput.addEventListener("input",pplInputFun);
customInput.addEventListener("input",customInputFun);
resetbtn.addEventListener("click",resetFun);

selectedTip.forEach(function(val){
    val.addEventListener("click",handleClick);
})


billInput.value="0.0";
pplInput.value="1";
tipPerPerson.innerHTML="$ "+(0.0).toFixed(2);
totalPerPerson.innerHTML="$ "+(0.0).toFixed(2);

let billValue=0.0;
let pplValue=1;
let tipVal=0.15;

function billInputFun(){
    billValue=parseFloat(billInput.value);
    // console.log(billValue);
    calculateTip()
}
function pplInputFun(){
    pplValue=parseFloat(pplInput.value);
    // console.log(pplValue);
    // calculateTip()

    if(pplValue<1){
        errorInput.style.display='flex';
        pplInput.style.border='thick solid red';
    }else{
        errorInput.style.display='none';
        pplInput.style.border='none';
        calculateTip()
    }
}
function customInputFun(){
    custValue=parseFloat(customInput.value/100);
    selectedTip.forEach(function(val){
        val.classList.remove("active-tip");
    });
    calculateTip()
}

function handleClick(event){
    selectedTip.forEach(function(val){
        val.classList.remove("active-tip");
        if(event.target.innerHTML==val.innerHTML){
            val.classList.add("active-tip");
            tipVal=parseFloat(val.innerHTML)/100
        }
    });
    // console.log(tipVal);
    calculateTip();
}

function calculateTip(){
    if(pplValue>=1){
        let tipAmt =(billValue+tipVal)/pplValue;
        let total=(billValue*tipAmt)/pplValue;
        tipPerPerson.innerHTML="$ "+tipAmt.toFixed(2);
        totalPerPerson.innerHTML="$ "+total.toFixed(2);
    }
}
function resetFun(){
    billInput.value="0.0";
    billInputFun()
    pplInput.value="1";
    pplInputFun();
    customInput.value=1;
}