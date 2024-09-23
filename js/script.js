

// reuseable function 1 
function getInputValuById(num) {
    return document.getElementById(`donationInput-${num}`);
}

// reusable function 2
function getValueById(num) {
    return document.getElementById(`totalCollection-${num}`);
}

function getHeadingNameById(num) {
    return document.getElementById(`headingName-${num}`);
}






function donate(number) {
    const inputs = getInputValuById(number);
    const donateAmount = inputs.value;
    const collection = getValueById(number).innerText;
    const accountBalanceEl = document.getElementById('accountBalance');
    const currentBalance = accountBalanceEl.innerText;


    if (isNaN(donateAmount) || donateAmount === 'string') {
        return alert("Input should be a number");
    } else if (donateAmount <= 0) {
        return alert("Invalid Input(it should be a positive number)")
    }
    if (parseFloat(donateAmount) > parseFloat(currentBalance)) {
        return alert("insufficient balance")
    }


    const newAccountBalance = parseFloat(currentBalance) - parseFloat(donateAmount)
    document.getElementById('accountBalance').innerText = newAccountBalance;

    const totalAmount = parseFloat(donateAmount) + parseFloat(collection);
    document.getElementById(`totalCollection-${number}`).innerText = totalAmount;

    inputs.value = "";



    const heading = getHeadingNameById(number).innerText;
    const currentDate = new Date();

    const historyLogs = document.getElementById('historyLog');
    console.log(historyLogs)
    historyLogs.innerHTML += `
        <div  class="border rounded-xl p-10 space-y-3">
                    <h1 class="lg:text-2xl text-xl font-bold">${donateAmount} ${heading}
                    </h1>
                    <p class="text-[#111111B3] opacity-70">Date: ${currentDate.toDateString()} ${currentDate.toTimeString()}</p>
                </div>
    `



}