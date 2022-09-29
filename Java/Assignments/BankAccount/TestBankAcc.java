public class TestBankAcc {
    public static void main(String[] args) {
        System.out.println("----Starting Developer Test---");
        BankAccount user1 = new BankAccount("User One");
        BankAccount user2 = new BankAccount("User Two", 1000.0);
        BankAccount user3 = new BankAccount("User Three", 999.9, 1000000.0);
        user1.displayInfo();
        user2.displayInfo();
        user3.displayInfo();
        

        
        user1.checkingWithdraw(50.0);
        user1.displayInfo();
        user1.checkingDeposit(500.0);
        user1.displayInfo();
        user1.checkingWithdraw(560.0);
        user1.checkingWithdraw(550.0);
        user1.displayInfo();
        
        user2.savingsWithdraw(40.0);
        user2.displayInfo();
        user2.checkingDeposit(400.0);
        user2.displayInfo();
        user2.savingsWithdraw(460.0);
        user2.savingsWithdraw(450.0);
        user2.displayInfo();
        
        user3.savingsWithdraw(40.0);
        user3.displayInfo();
        user3.checkingDeposit(400.0);
        user3.displayInfo();
        user3.savingsWithdraw(460.0);
        user3.savingsWithdraw(450.0);
        user3.displayInfo();
        
        
        System.out.println(BankAccount.getAccountCount());
        System.out.println(BankAccount.getTotalStoredBalance());
    }

}
