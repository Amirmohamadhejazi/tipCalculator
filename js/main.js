let tipPersent = 0
function calcResult(data) {
    tipPersent = isNaN(data) !== true && data
    let valueInputBill = parseInt($(`input[name=bill]`).val())
    let valueInputNumber = parseInt($(`input[name=numberpeopel]`).val())
    let calc =  floatEditNum(valueInputBill / valueInputNumber )



    if(tipPersent!==0){
        if(valueInputBill !== 0 && valueInputBill !== "" && valueInputNumber !== 0 && valueInputNumber !== "" &&
         isNaN(valueInputBill) !== true && isNaN(valueInputNumber) !== true){
        let calcTip = valueInputBill / 100 * tipPersent
        let personMoneyTip = floatEditNum(calcTip / valueInputNumber)
        $(`#tipAmountPerson`).html(`<span class="InterBold fontSize40 c_calcPrice">$${personMoneyTip}</span>`);
        $(`#Total`).html(`<span class="InterBold fontSize40 c_calcPrice">$${calc}</span>`)
    }
    }else{
        if(valueInputBill !== 0 && valueInputBill !== "" && valueInputNumber !== 0 && valueInputNumber !== "" &&
        isNaN(valueInputBill) !== true && isNaN(valueInputNumber) !== true){
        $(`#Total`).html(`<span class="InterBold fontSize40 c_calcPrice">$${calc}</span>`);
    }}

    function floatEditNum(Num){
        return Math.floor(Num * 1000) / 1000
    }


    if ( parseInt($(`input[name=bill]`).val())   > 0  && parseInt($(`input[name=numberpeopel]`).val())  > 0 ){
        $("#Reset").removeClass("btnResetDisable");
    }else {
        $("#Reset").addClass("btnResetDisable");
    }

}

$('input[name=bill]').on("input" , function(e){
    calcResult()

    if (parseInt($(`input[name=bill]`).val()) == 0){
        $("#textErrorBill").text("number Cant be Zero")
        $('input[name=bill]').addClass("errorInput");
    }else {
        $("#textErrorBill").text("")
        $('input[name=bill]').removeClass("errorInput");
    }

});

$('input[name=numberpeopel]').on("input" , function(e){
    calcResult()

    if (parseInt($(`input[name=numberpeopel]`).val()) == 0){
         $("#textErrorNumberOfPeople").text("number Cant be Zero")
        $('input[name=numberpeopel]').addClass("errorInput");
    }else {
        $("#textErrorNumberOfPeople").text("")
        $('input[name=numberpeopel]').removeClass("errorInput");
    }


});

$(document).on("click","#tipPercent",function(e) {
    let percentTip = e.currentTarget.innerText.split("%")[0]
    $(`.boxSelectTipSelected`).removeClass("boxSelectTipSelected")
    $(`div[name=${parseInt(percentTip)}]`).addClass("boxSelectTipSelected")
    calcResult(parseInt(percentTip))
    $(`input[name=custumTip]`).val(parseInt(percentTip))
});

$(document).on("click","#Reset",function(e) {
    tipPersent = 0
    $(`input[name=bill]`).val('')
    $(`input[name=numberpeopel]`).val('')
    $(`input[name=custumTip]`).val('')
    $(`#tipAmountPerson`).html(`<span class="InterBold fontSize40 c_calcPrice">$0.00</span>`);
    $(`#Total`).html(`<span class="InterBold fontSize40 c_calcPrice">$0.00</span>`)
    $("#Reset").addClass("btnResetDisable");
    $(".boxSelectTipSelected").removeClass("boxSelectTipSelected");
});

$('input[name=custumTip]').on("input" , function(e){
    let valueInputcustumTip = parseInt($(`input[name=custumTip]`).val())
    if(parseInt($(`input[name=custumTip]`).val()) !== tipPersent){
        $(".boxSelectTipSelected").removeClass("boxSelectTipSelected");
    }
    calcResult(valueInputcustumTip)
});