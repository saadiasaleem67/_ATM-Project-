import inquirer from "inquirer";
console.log("WELCOME TO BANK ISLAMI");
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Type your Name: "
    },
    {
        type: "password",
        name: "userpass",
        message: "Type your P/W, (4 Character only): "
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your Account Type: "
    },
    {
        type: "list",
        name: "transactiontype",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select transaction Type ",
        when(answers) {
            return answers.accountType;
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 10000, 20000, 50000],
        message: "Select your ammount:",
        when(answers) {
            return answers.transactiontype === "Fast Cash";
        },
    },
    {
        type: "nunmber",
        name: "amount",
        message: "Enter your Amount:",
        when(answers) {
            return answers.transactiontype === "Withdraw";
        },
    },
]);
console.log(answers.userId, answers.userpass);
if (answers.userId && answers.userpass) {
    let balance = Math.floor(Math.random() * 100000);
    console.log("Your current balance is:", balance);
    let Enteredamount = answers.amount;
    if (balance >= Enteredamount) {
        let remainigbalance = balance - Enteredamount;
        console.log("Transaction successfull!  Your Remaning Balance is: ", remainigbalance);
    }
    else {
        console.log("Insuficient balance Please select lower amount");
    }
}
