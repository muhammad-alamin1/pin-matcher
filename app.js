function getPin() {
    const random = Math.random() * 100000000;
    let pin = (random + '').split('.')[0];
    if (pin.length === 8) {
        return pin;

    } else {
        return getPin();
    }
}


// generate pin btn
function generatePin() {
    const pinInput = document.getElementById('generate-pin');
    pinInput.value = getPin();
}


// added input number
function insertNumber(num) {
    let inputNumber = document.getElementById('added-input-pin').value;
    document.getElementById('added-input-pin').value = inputNumber + num;

    return inputNumber;
}


// delete input
function deleteNumber() {
    let inputNumber = document.getElementById('added-input-pin').value = '';
}


// submit btn
function matchingPin() {
    const pinInput = document.getElementById('generate-pin').value;
    let inputNumber = document.getElementById('added-input-pin').value;

    if (pinInput == inputNumber) {
        document.getElementById('pin-match').style.display = 'block';
        document.getElementById('pin-didnot-match').style.display = 'none';
    }
    else {
        document.getElementById('pin-match').style.display = 'none';
        document.getElementById('pin-didnot-match').style.display = 'block';
    }

}