const prompt = require("prompt-sync")();

var Notes_2000 = false;
var Notes_1000 = false;
var Notes_500 = true;
var Notes_200 = true;
var Notes_100 = true;

var BankBalance = 1000
var TransferBankBalance = 1000;
var PrintMiniStatement = [];


const SBI = {
    UserName: "swetha",
    PassWord: 7075,
    TransferUserName: "bala",
    AccountNumber: "254152151221"
}
console.log("SBI Details");
console.table(SBI);

const HDFC = {
    UserName: "bala",
    PassWord: 7777,
    TransferUserName: "tarun",
    AccountNumber: "254152151234"
}
console.log("HDFC Details");
console.table(HDFC);

const AXIS = {
    UserName: "tarun",
    PassWord: 2222,
    TransferUserName: "devi",
    AccountNumber: "254152151256"
}
console.log("AXIS Details");
console.table(AXIS);

let user = prompt("Enter your name : ");
console.log(user)

let _password = parseInt(prompt("Enter the password : "));
console.log(_password)

if (((user === SBI.UserName) && (_password === SBI.PassWord)) || ((user === HDFC.UserName) && (_password === HDFC.PassWord)) || ((user === AXIS.UserName) && (_password === AXIS.PassWord))) {
    console.log("Welcome to the Banking process");
    while (true) {
        let options = {
            deposite: "1",
            withdraw: "2",
            balanceEnquiry: "3",
            MoneyTransfer: "4",
            MiniStatement: "5",
            Exit: "6"
        }
        console.table(options)
        let option = prompt("choose your option : ");
        if (option == options.deposite) {
            console.log("deposite")
            var depositeAmount = parseInt(prompt("enter deposite amount : "));
            if ((depositeAmount < BankBalance ) || (depositeAmount > BankBalance )||(depositeAmount == BankBalance )){
                BankBalance = BankBalance + depositeAmount
                //console.log("depositeAmount : ",depositeAmount)
                //console.log("BankBalance :  ", BankBalance)
                var PrintDepositAmount = `$${depositeAmount} amount deposited successfully.`
                PrintMiniStatement.push(PrintDepositAmount)
            }

        }
        else if
            (option == options.withdraw) {
            console.log("withdraw")
            var withdrawAmount = parseInt(prompt("enter withdraw amount : "));
            if (withdrawAmount <= BankBalance){
                BankBalance = BankBalance - withdrawAmount;
                //console.log("withdrawAmount : ",withdrawAmount)
                //console.log("BankBalance :  ", BankBalance)
                var PrintwithdrawAmount = `$${withdrawAmount} amount withdraw successfully.`
                PrintMiniStatement.push(PrintwithdrawAmount)
                var count = 0 ;
                if ((Notes_2000) && (withdrawAmount>=2000)){
                    var Notes_count_2000 = Math.floor(withdrawAmount/2000);
                    console.log(Notes_count_2000,"==> 2000 Notes");
                    count+=Notes_count_2000;
                    withdrawAmount-=Notes_count_2000 * 2000;
                }
                if ((Notes_1000) && (withdrawAmount>=1000)){
                    var Notes_count_1000 = Math.floor(withdrawAmount/1000);
                    console.log(Notes_count_1000,"==> 1000 Notes");
                    count+=Notes_count_1000;
                    withdrawAmount-=Notes_count_1000 *1000;
                }
                if ((Notes_500) && (withdrawAmount>=500)){
                    var Notes_count_500 = Math.floor(withdrawAmount/500);
                    console.log(Notes_count_500,"==> 500 Notes");
                    count+=Notes_count_500;
                    withdrawAmount-=Notes_count_500 * 500;
                }
                if ((Notes_200) && (withdrawAmount>=200)){
                    var Notes_count_200 = Math.floor(withdrawAmount/200);
                    console.log(Notes_count_200,"==> 200 Notes");
                    count+=Notes_count_200;
                    withdrawAmount-=Notes_count_200 * 200;
                }
                if ((Notes_100) && (withdrawAmount>=100)){
                    var Notes_count_100 = Math.floor(withdrawAmount/100);
                    console.log(Notes_count_100,"==> 100 Notes");
                    count+=Notes_count_100;
                    withdrawAmount-=Notes_count_100 * 100;
                }
                console.log("Notes_count", count)
            }
            else{
                console.log("Insufficint Balance");
            }
        }

        else if
            (option == options.balanceEnquiry) {
            console.log("balanceEnquiry")
            console.log(BankBalance)
        }
        else if
            (option == options.MoneyTransfer) {
            console.log("MoneyTransfer")
            var transferUserNameID = prompt("enter transferUserNameID : ");
            var transferAccountNumber = prompt("enter accountNumber : ");
            if (((transferUserNameID === SBI.TransferUserName) && (transferAccountNumber === SBI.AccountNumber)) || ((transferUserNameID === HDFC.TransferUserName) && (transferAccountNumber === HDFC.AccountNumber)) || ((transferUserNameID === AXIS.TransferUserName) && (transferAccountNumber === AXIS.AccountNumber))){
                var transferAmount = parseInt(prompt("enter the transferAmount : "));
                if (transferAmount<=BankBalance){
                    TransferBankBalance += transferAmount
                    BankBalance -= transferAmount
                    var PrintTransferAmount = `$${transferAmount} amount transferred successfully to ${transferUserNameID}`;
                    PrintMiniStatement.push([PrintTransferAmount])
                
                }

            }
        }
        else if
            (option == options.MiniStatement) {
            console.log("MiniStatement")
            console.log(PrintMiniStatement)
            
        }
        else if
            (option == options.Exit) {
            console.log("Exit")
            console.log(`thank you for banking ${user}, your remaining bank balance ${BankBalance
            } `);
            break;
        }
        else {
            console.log("choose your correct option ")
        }
    }
}










else {
    console.log("Invalid Credentials");
}