

// reuseable function 1 
function getInputValuById(num) {
    return document.getElementById(`donationInput-${num}`);
}

// reusable function 2
function getCollectionValueById(num) {
    return document.getElementById(`totalCollection-${num}`);
}

function getHeadingNameById(num) {
    return document.getElementById(`headingName-${num}`);
}


function getValueById(id){
    return document.getElementById(id);
}



function donate(number) {
    const inputs = getInputValuById(number);
    const donateAmount = inputs.value;
    const collection = getCollectionValueById(number).innerText;
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

function toggleBtn(event){
    const cardSectionEl = getValueById('cardSection');
    const historySectionEl = getValueById('historySection');
    const donationBtnEl = getValueById('donationBtn');
    const historyBtnEl = getValueById('historyBtn');

    
    if(event.innerText == 'History'){
        historySectionEl.classList.remove('hidden');
        cardSectionEl.classList.add('hidden');
        donationBtnEl.classList.remove('bg-primary')
        historyBtnEl.classList.add('bg-primary');
        historyBtnEl.classList.remove('text-gray-400');
        donationBtnEl.classList.add('text-gray-400')
        
    }
    else{
        historySectionEl.classList.add('hidden')
        cardSectionEl.classList.remove('hidden')
        historyBtnEl.classList.remove('bg-primary')
        donationBtnEl.classList.add('bg-primary');
        donationBtnEl.classList.remove('text-gray-400')
        historyBtnEl.classList.add('text-gray-400');
    }
}

