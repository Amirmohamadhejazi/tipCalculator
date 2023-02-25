let tipPersent = 0

function calcResult() {
    let valueInputBill = parseInt($(`input[name=bill]`).val())
    let valueInputNumber = parseInt($(`input[name=numberpeopel]`).val())
    let calc = valueInputBill / valueInputNumber 

    if(tipPersent!==0){
        if(valueInputBill !== 0 && valueInputBill !== "" && valueInputNumber !== 0 && valueInputNumber !== "" &&
         isNaN(valueInputBill) !== true && isNaN(valueInputNumber) !== true){
        let calcWithTip = calc / 100 * tipPersent
        let MoneybyTip = calc + calcWithTip
        $(`#tipAmountPerson`).html(`<span class="InterBold fontSize40 c_calcPrice">$${MoneybyTip}</span>`);
        $(`#Total`).html(`<span class="InterBold fontSize40 c_calcPrice">$${calc}</span>`)
    }
    }else{
        if(valueInputBill !== 0 && valueInputBill !== "" && valueInputNumber !== 0 && valueInputNumber !== "" &&
        isNaN(valueInputBill) !== true && isNaN(valueInputNumber) !== true){
        $(`#Total`).html(`<span class="InterBold fontSize40 c_calcPrice">$${calc}</span>`);
    }}
}
    

$('input[name=bill]').on("input" , function(e){
    calcResult()
});

$('input[name=numberpeopel]').on("input" , function(e){
    calcResult()
});

$(document).on("click","#tipPercent",function(e) {
    let percentTip = e.currentTarget.innerText.split("%")[0]
    tipPersent = parseInt(percentTip)
    calcResult()
});


$(document).on("click","#Reset",function(e) {
    // $('#fileId').val('');
    $(`input[name=bill]`).val('')
    $(`input[name=numberpeopel]`).val('')
    tipPersent = 0
    $(`#tipAmountPerson`).html(`<span class="InterBold fontSize40 c_calcPrice">$0.00</span>`);
        $(`#Total`).html(`<span class="InterBold fontSize40 c_calcPrice">$0.00</span>`)
});
