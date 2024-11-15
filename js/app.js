function updateCase(isIncrease,product,num){
    const caseInput=document.getElementById(product+"-number");
    let caseNumber=caseInput.value;
    if(isIncrease==true){
        caseNumber=parseInt(caseNumber)+1;
    }
    else if(caseNumber>0){
        caseNumber=parseInt(caseNumber)-1;
    }
caseInput.value=caseNumber;
const caseTotal=document.getElementById(product+"-total");
caseTotal.innerText=caseNumber*num;
calculate()
}
function getInputValue(product){
    const phoneInput=document.getElementById(product+"-number");
    const phoneNumber=parseInt(phoneInput.value);
    return phoneNumber;
}
function calculate(){
const phoneTotal=getInputValue("phone")*1219;
const caseTotal=getInputValue("case")*59;
const subTotal=phoneTotal+caseTotal;
const tax=subTotal/10;
const total=subTotal+tax
document.getElementById("sub-total").innerText=subTotal;
document.getElementById("tax-total").innerText=tax;
document.getElementById("total-ammount").innerText=total;

}
document.getElementById("phone-plus").addEventListener("click",function(){
    updateCase(true,"phone",1219);
})
document.getElementById("phone-minus").addEventListener("click",function(){
    updateCase(false,"phone",1219);
})
document.getElementById("case-plus").addEventListener("click",function(){
    updateCase(true,"case",59);
})
document.getElementById("case-minus").addEventListener("click",function(){
    updateCase(false,"case",59)

})