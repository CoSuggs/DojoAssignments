import java.util.*;

public class CafeUtil{
    public String name;
    public int numWeeks;
    public ArrayList<String> menu;
    public double lineItems;
    
    public int getStreakGoal(int numWeeks){
        int sum = 0;
        for(int i=0; i <= numWeeks;i++){
            sum += i;
        }
    return sum;
    }
    
    public double getOrderTotal(double[] prices){
        double total = 0;
        for(int i = 0; i < prices.length; i++){
            total += prices[i];
            System.out.println(total);
        }
        return total;
    }

    public void displayMenu(ArrayList<String> menuItems){
        for(String idx : menuItems){
            System.out.println(idx);
        }
    }

    public void addCustomer(ArrayList<String> customers){
        System.out.println("Please enter your name: ");
        String userName = System.console().readLine();
        System.out.println("Hello, "+ userName);
        System.out.println("There are "+ customers.size() +" in front of you");
        customers.add(userName);
        System.out.println(customers);
    }
}