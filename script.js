function BankAccount(name,balance=0){
    this.CustomerName =name;
    this.accountNumber=Date.now();
    this.balance=balance;

    this.deposit=(amount)=>{
        this.balance+=amount;
    }
    
    this.withdraw=(amount)=>{
     this.balance-=amount;
    }
    
 }
 
 // BankAccount.prototype.withdraw=function(ammount){
 //   this.balance-=ammount;
 // }
 
 //Account creation
 const accounts =[];
 const accountForm=document.querySelector("#accountForm");
 const customerName=document.querySelector("#CustomerName");
 const balence=document.querySelector("#balance");
 
 // Deposit
 const deposittForm=document.querySelector("#depositForm");
 const accountNumber=document.querySelector("#accountNumber");
 const amount=document.querySelector("#amount");
 
 //Withdraw
 const withdrawForm=document.querySelector("#withdrawForm");
 const accNumber=document.querySelector("#accNumber");
 
 //check Balance
 const checKBlnce=document.querySelector("#checKBlnce");
 const acNumber=document.querySelector("#acNumber");

 
 accountForm.addEventListener('submit',(e)=>{
   e.preventDefault();
   const acc = new BankAccount(customerName.value,+balence.value);
   accounts.push(acc);
   console.log(accounts);
   
   document.getElementById("h33").innerHTML=`Congratulatins your account has been created <br> Your Account number is ${acc.accountNumber}`;
 })
 
 deposittForm.addEventListener('submit',(e)=>{
   e.preventDefault();
   const account= accounts.find((account)=> account.accountNumber=== +accountNumber.value);
   account.deposit(parseInt(amount.value));
   document.getElementById("h34").innerHTML=`Your current balence is &#8377 ${account.balance}`
 })
 
 withdrawForm.addEventListener('submit',(e)=>{
     e.preventDefault();
     const account= accounts.find((account)=> account.accountNumber=== +accNumber.value);
     account.withdraw(parseInt(ammm.value));
     document.getElementById("h35").innerHTML=`Your current balence is &#8377 ${account.balance}`
 })

 checKBlnce.addEventListener('submit',(e)=>{
    e.preventDefault();
    const account=accounts.find((account)=> account.accountNumber===+acNumber.value);
    document.getElementById("h36").innerHTML=`Your current balence is &#8377 ${account.balance}`
})