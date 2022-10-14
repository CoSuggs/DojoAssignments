package com.cody.bankaccount;

public class BankAccount {
    private String user;
    private double checkingBalance;
    private double savingsBalance;
    private static int accountCount;
    private static double totalStoredBalance;
    
    public BankAccount(){
        this.user = "Anon";
        this.checkingBalance = 100;
        this.savingsBalance = 100;
        accountCount++;
        totalStoredBalance = totalStoredBalance + checkingBalance + savingsBalance;
    }

    public BankAccount(String user){
        this.user = user;
        this.checkingBalance = 100;
        this.savingsBalance = 100;
        accountCount++;
        totalStoredBalance = totalStoredBalance + checkingBalance + savingsBalance;
    }
    
    public BankAccount(String user, double checkingBalance){
        this.user = user;
        this.checkingBalance = checkingBalance;
        this.savingsBalance = 100;
        accountCount++;
        totalStoredBalance = totalStoredBalance + checkingBalance + savingsBalance;
    }
    
    public BankAccount(String user, double checkingBalance, double savingsBalance){
        this.user = user;
        this.checkingBalance = checkingBalance;
        this.savingsBalance = savingsBalance;
        accountCount++;
        totalStoredBalance = totalStoredBalance + checkingBalance + savingsBalance;
    }

	public String getUser() {
		return this.user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public double getCheckingBalance() {
		return this.checkingBalance;
	}
    
	public double getSavingsBalance() {
		return this.savingsBalance;
	}

	public static int getAccountCount() {
		return accountCount;
	}

	public static double getTotalStoredBalance() {
		return totalStoredBalance;
	}

    public void checkingDeposit(double deposit){
        this.checkingBalance += deposit;
        totalStoredBalance = totalStoredBalance + deposit;
        System.out.println("Your new checking account ballance: "+ this.checkingBalance);
    }

    public void savingsDeposit(double deposit){
        this.savingsBalance += deposit;
        totalStoredBalance = totalStoredBalance + deposit;
        System.out.println("Your new saving account ballance: "+ this.savingsBalance);
    }

    public void checkingWithdraw(double withdraw){
        if((this.checkingBalance - withdraw) < 0){
            System.out.println("Balance insufficient");
        }else{
        this.checkingBalance -= withdraw;
        totalStoredBalance = totalStoredBalance - withdraw;
        }        
        System.out.println("Your new checking account ballance: "+ this.checkingBalance);
    }

    public void savingsWithdraw(double withdraw){
        if((this.savingsBalance - withdraw) < 0){
            System.out.println("Balance insufficient");
        }else{
        this.savingsBalance -= withdraw;
        totalStoredBalance = totalStoredBalance - withdraw;
        }
        System.out.println("Your new saving account ballance: "+ this.savingsBalance);
    }
    
    public void displayInfo() {
    	
		 System.out.println("-----User: "+ this.user+ "-----");
		 System.out.println("Checking Account Balance: "+ this.checkingBalance);
		 System.out.println("Savings Account Balance: "+ this.savingsBalance);
    }
	 


}

