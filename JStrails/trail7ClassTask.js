class BankAccount {
	transferLimits = 50000;
	transactions = [];
	constructor(name, accountNumber, initialBalance){
		this.name = name
		this.accountNumber = accountNumber
		this.balance = initialBalance
	}
	
}
BankAccount.prototype.getBalance  = function () {
		return this.balance
}
BankAccount.prototype.deposit = function (amountToDeposit) {
	let isDeposited;
	if(amountToDeposit > 0) {
		this.balance += amountToDeposit
		this.transactions.push(`+${amountToDeposit}`)
		isDeposited = true
	} else {
		isDeposited = false
	}
	return {balance : this.balance, amountToDeposit, isDeposited}
}
BankAccount.prototype.withdrawl = function (amountToWithdrawl) {
	if(amountToWithdrawl <= this.balance) {
		this.balance -= amountToWithdrawl
		this.transactions.push(`-${amountToWithdrawl}`)
		isWidthdrawl = true
	} else {
		isWidthdrawl = false
	}
	const transaction = new Transaction('debited', amountToWithdrawl, this.balance,this.accountNumber)
	console.log(transaction.getFormattedTransaction())
	return {balance : this.balance, amountToWithdrawl, isWidthdrawl}
}
BankAccount.prototype.resetTransactionLimits = function () {
	this.transferLimits = 50000
	return true;
}
BankAccount.prototype.transferTo = function (amountToTransfer,recipientAccount) {
	let isTransfered , reason = '', recipientAccountNumber = recipientAccount.accountNumber;
	if(peopleAccounts.length < 2 ) {
		reason = "Not enough account avaliable to transfer"
		isTransfered = false
		return {reason, isTransfered}
	}
	if(this.accountNumber === recipientAccountNumber ) {
		reason = "Recipent Account Number can't be same as your account"
		isTransfered = false
		return {reason, isTransfered}
	}
	if ( !peopleAccounts.filter(peopleAccount => peopleAccount.accountNumber === recipientAccountNumber).length == 1) {
		reason = "Recipent Account not found"
		isTransfered = false
		return {reason , isTransfered}
	}
	//if i pass the array value by reference i can change that directly here right? without looking for that entry and creating new array?
	if(this.balance >= amountToTransfer) {
		peopleAccounts = peopleAccounts.map(entry => {
			if(entry.accountNumber === recipientAccountNumber) {
				entry.deposit(amountToTransfer)
				this.balance -= amountToTransfer
			}
			return entry
		}
	)
	reason = "Transfer successful"
	isTransfered = true
	const transaction = new Transaction('credit', amountToTransfer, recipientAccount.balance,recipientAccount.accountNumber)
	console.log(transaction.getFormattedTransaction())
	return {reason, isTransfered,amountToTransfer, balance:this.balance,recipientAccountNumber}
	}
}
BankAccount.prototype.getMiniStatement = function () {
	const transactionLength = this.transactions.length 
	if(transactionLength <= 5) {
		return {statement : this.transactions}
	} 
	return {statement : this.transactions.slice(this.transactions.length - 5,this.transactions.length)}
}
class Transaction {
	constructor(type, amount, balance, otherParty) {
		this.type = type
		this.amount = amount
		this.balance = balance
		this.otherParty = otherParty
		this.timestamp = new Date();        
		this.transactionId = Math.random().toString(36).slice(2, 9);
	}
}
Transaction.prototype.getFormattedTransaction = function () {
		return `[${this.transactionId}] ₹${this.amount} ${this.type} ${this.otherParty ? `to ${this.otherParty}` : ''} on ${this.timestamp.getFullYear()}-${this.timestamp.getMonth()}-${this.timestamp.getDate()} ${this.timestamp.getHours()}:${this.timestamp.getMinutes()}`
}
let peopleAccounts = [];
const acc1 = new BankAccount("Rahul", "ACC001", 50000);
const acc2 = new BankAccount("Priya", "ACC002", 30000);
const acc3 = new BankAccount("Amit", "ACC003", 10000);
peopleAccounts.push(acc1,acc2,acc3)
console.log(acc1.transferTo(20000, acc2))