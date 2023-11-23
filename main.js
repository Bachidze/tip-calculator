 const billel = document.querySelector('#bill')
const tipamountel = document.querySelector('#tip')
const totalamountel = document.querySelector('#total')
const totalpeopleel = document.querySelector('#peopele1')
const resetel = document.querySelector('#reset1')
const tipels = document.querySelectorAll('input[name="tip"]') 
const p = document.querySelector('p')
const gio = document.querySelector('.giorgi')

function recalculatetotal(){
    const billamount = getbill()
    const tipPercentage = getTipPercentage()
    const totalpeople = parseInt(totalpeopleel.value || '1')
    const tipamount = (tipPercentage / 100) * billamount
    const tipamountperperson = tipamount / totalpeople
    const total = billamount + tipamount
    const totalperperson = total / totalpeople
    tipamountel.innerText = `$${tipamountperperson.toFixed(2)}`
    totalamountel.innerText = `$${totalperperson.toFixed(2)}`
}

function getbill(){
    return parseFloat(billel.value || '0')
}

function getTipPercentage(){
    let selectedTip = 0;
    tipels.forEach((tipel) => {
        if (tipel.checked) {
            selectedTip = parseFloat(tipel.value);
        }
    });
    return selectedTip || 0;
}

billel.addEventListener('input', recalculatetotal);
totalpeopleel.addEventListener('input', recalculatetotal);

tipels.forEach((tipel) => {
    tipel.addEventListener('change', recalculatetotal);
});

totalpeopleel.addEventListener('click',()=>{
    totalpeopleel.style.border = '2px solid red'
    p.innerText = 'Please enter only numbers.';
})

resetel.addEventListener('click', () => {
    document.getElementById('gio').reset();
    recalculatetotal();
});

billel.addEventListener('click',()=>{
    billel.style.border = '2px solid green'
})

function isValidNumber(value) {
    return /^\d+$/.test(value);
}

totalpeopleel.addEventListener('input', function () {
    if (!isValidNumber(totalpeopleel.value)) {
        p.innerText = 'Please enter only numbers.';
        totalpeopleel.parentElement.appendChild(p);
        totalpeopleel.classList.add('red');
    } else {
        p.innerText = ''; 
        totalpeopleel.parentElement.removeChild(p);
        totalpeopleel.classList.remove('red');
        recalculatetotal();
    }
});

