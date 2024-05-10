#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n \t WELCOME\n");
//define the list of curencies and their exchange rate
let exchange_rate: any={
    "USD": 1,//Base Currency
    "EUR": 0.9,//European Currency (Euro)
    "JYP": 113,//Japenese Currency(Yen)
    "CAD": 1.3,//Canadian Dollar
    "AUD": 1.65,//Australlin Dollar
    "PKR": 277.70,//Pakistan Rupees
    //add more currencies and their exchange rate here
 }
 //Promt the user to select currencies to convert fromand to
 let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]               
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
 ]);
 //Perform currency conversion by using formula
 let from_amount = exchange_rate[user_answer.from_currency];
 let to_amount = exchange_rate[user_answer.to_currency];
 let amount = user_answer.amount

 //Formula of conversion
 let base_amount = amount / from_amount
 let converted_amount = base_amount * to_amount

 //Display the converted amount
 console.log(`Converted Amount = ${converted_amount.toFixed(2)} `);