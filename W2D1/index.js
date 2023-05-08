const accountNameInput = document.getElementById("account-name-input");
const depositInput = document.getElementById("deposit-input");
const createAccountBtn = document.getElementById("create-account-btn");
const accountsTextArea = document.getElementById("accounts-text-area");
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");

const mainPage = document.getElementById("main-page");
const depositPage = document.getElementById("deposit-page");
const withDrawalPage = document.getElementById("withdraw-page");

accountsTextArea.value = "";

createAccountBtn.addEventListener("click", () => {
    let accountName = accountNameInput.value.trim();
    let deposit = depositInput.value.trim();

    if (accountName == null || accountName == "") {
        alert("Account Name is Empty");
        return;
    }

    if (deposit == null || deposit == "") {
        alert("Deposit is Empty");
        return;
    }

    let newBank = new BankAccount(accountName, deposit);
    BankAccount.accountInfoList.push(newBank);

    refreshAccountsTextArea();
})

function refreshAccountsTextArea() {
    accountsTextArea.value = "";
    let text = "";
    BankAccount.accountInfoList.forEach(account => {
        text += account.toString() + "\n";
    });

    accountsTextArea.value = text;
}


const withdrawSelect = document.getElementById("withdraw-accounts-select")
const depositSelect = document.getElementById("deposit-accounts-select")

function addSelected(select) {
    let selectOption = document.createElement("option");
    selectOption.innerHTML = "Select Account";
    selectOption.disabled = true;
    selectOption.selected = true;
    select.appendChild(selectOption);
}


depositBtn.addEventListener("click", () => {
    depositSelect.innerHTML = "";
    makePageVisible("deposit-page");

    addSelected(depositSelect);
    depositAmountBtn.disabled = true;

    BankAccount.accountInfoList.forEach(account => {
        let option = document.createElement("option");
        option.innerHTML = account.getAccountName();
        depositSelect.appendChild(option);
    })
})

withdrawBtn.addEventListener("click", () => {
    withdrawSelect.innerHTML = "";
    makePageVisible("withdraw-page")

    addSelected(withdrawSelect);
    withdrawAmountBtn.disabled = true;

    BankAccount.accountInfoList.forEach(account => {
        let option = document.createElement("option");
        option.innerHTML = account.getAccountName();
        withdrawSelect.appendChild(option);
    })
})


const depositAmountBtn = document.getElementById("deposit-amount-btn");
const withdrawAmountBtn = document.getElementById("withdraw-amount-btn");
const depositAmountInput = document.getElementById("deposit-amount-input")
const withdrawAmountInput = document.getElementById("withdraw-amount-input");

depositSelect.addEventListener("change", () => {
    depositAmountBtn.disabled = false;
})

withdrawSelect.addEventListener("change", () => {
    withdrawAmountBtn.disabled = false;
})

depositAmountBtn.addEventListener("click", () => {
    let index = depositSelect.selectedIndex - 1;
    let amount = Number(depositAmountInput.value);

    BankAccount.accountInfoList[index].balance = Number(BankAccount.accountInfoList[index].balance) + amount;
    refreshAccountsTextArea();
})

withdrawAmountBtn.addEventListener("click", () => {
    let index = withdrawSelect.selectedIndex - 1;
    let amount = Number(withdrawAmountInput.value);

    BankAccount.accountInfoList[index].balance = Number(BankAccount.accountInfoList[index].balance) - amount;

    refreshAccountsTextArea();
})



const goBackDeposit = document.getElementById("go-back-deposit");
const goBackWithdraw = document.getElementById("go-back-withdraw");

goBackDeposit.addEventListener("click", () => {
    makePageVisible("main-page");
})

goBackWithdraw.addEventListener("click", () => {
    makePageVisible("main-page");
})


function makePageVisible(name) {
    switch (name) {
        case "main-page":
            withDrawalPage.style.display = "none";
            mainPage.style.display = "block";
            depositPage.style.display = "none";
            break;
        case "deposit-page":
            withDrawalPage.style.display = "none";
            mainPage.style.display = "none";
            depositPage.style.display = "block";
            break;
        case "withdraw-page":
            withDrawalPage.style.display = "block";
            mainPage.style.display = "none";
            depositPage.style.display = "none";
            break;
        default:
            break;
    }
}
