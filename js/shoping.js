
function handleProductChange(produceName,isIncrease){
    let produceNameInput=document.getElementById(produceName + 'Count');
    let produceNameCountNumber=parseInt(produceNameInput.value);
   
    if(isIncrease==true){
        produceNameNewCount=++produceNameCountNumber;
    }
    if(isIncrease==false && produceNameCountNumber>0){
        produceNameNewCount=--produceNameCountNumber;
    }
    produceNameInput.value=produceNameNewCount;
    // let caseTotal=caseNewCount*59;
    let produceNameTotal=0;
    if(produceName=='phone'){
        produceNameTotal=produceNameNewCount*1219;
    }
    else if(produceName=='case'){
        produceNameTotal=produceNameNewCount*59;
    }
    document.getElementById(produceName + 'TotalAmount').innerText=produceNameTotal;
    calculatorTotal();
}



function calculatorTotal(){
    // let phoneInput = document.getElementById("phoneCount").value;
    // let phoneInputNum=parseInt(phoneInput);
    // let caseInput = document.getElementById("caseCount").value;
    // let caseInputNum=parseInt(caseInput);
    let phoneInputNum= getInputValue('phone');
    let caseInputNum= getInputValue('case');
    let totalCost=phoneInputNum*1219 + caseInputNum*59;
    document.getElementById('totalCost').innerText=totalCost;
    let tax=Math.round(totalCost*0.1);
    document.getElementById('taxAmount').innerText=tax;
    let grandTotal=totalCost+tax;
    document.getElementById('grandTotal').innerText=grandTotal;
}
function getInputValue(product){
    let productInput = document.getElementById(product + "Count");
    let productInputNum=parseInt(productInput.value);
    return productInputNum;
}
// let handlePhoneChange = (isIncrease) =>{
//     let phoneValue=document.getElementById('phoneCount');
//     let phoneCountNumber=parseInt(phoneCount.value);
//    if(isIncrease==true){
//     phoneNewCount=++phoneValueNumber;
//    }
//    if(isIncrease==false && phoneNewCount>0){
//     phoneNewCount=--phoneValueNumber;
//    }
//     phoneValue.value=phoneNewCount;
//     let phoneTotal=phoneNewCount*1219;
//     document.getElementById('phoneTotalAmount').innerText=phoneTotal;
// }



// let addCase=document.getElementById('addCase');
// addCase.addEventListener('click',function(){
//     let caseInput=document.getElementById('caseCount');
//     let caseCountNumber=parseInt(caseInput.value);
//     let caseNewCount=++caseCountNumber;
//     caseInput.value=caseNewCount;
//     let caseTotal=caseNewCount*59;
//     document.getElementById('caseTotalAmount').innerText=caseTotal;
    
// });
// let minusCase=document.getElementById('minusCase');
// minusCase.addEventListener('click',function(){
//     let caseInput=document.getElementById('caseCount');
//     let caseCountNumber=parseInt(caseInput.value);
//     let caseNewCount=--caseCountNumber;
//     caseInput.value=caseNewCount;
//     let caseTotal=caseNewCount*59;
//     document.getElementById('caseTotalAmount').innerText=caseTotal;
// });