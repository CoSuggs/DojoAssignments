package com.cody.inheritance;

//import java.util.ArrayList;

class DeveloperTest{
    public static void main(String[] args){
        System.out.println("----Starting Developer Test---");
        Developer dev1 = new Developer("Pepper", 2);
        dev1.setSalary(-30);
        dev1.addOneLanguage("Java");
        dev1.addOneLanguage("Meow");


        dev1.displayInfo();

        Developer dev2 = new Developer();
        dev2.displayInfo();

        System.out.println("Dev count: "+ Developer.getDevCount());
        System.out.println("languages count: "+ Developer.getTotalLanguages());
        System.out.println("-----Finish Developer Test-----");
        
        JuniorDeveloper dev3 = new JuniorDeveloper();
        dev3.displayInfo();
        dev3.completeInternship();
        dev3.displayInfo();
        
        JuniorDeveloper dev4 = new JuniorDeveloper("Ohio Joe");
        dev4.displayInfo();
        
        SeniorDeveloper dev5 = new SeniorDeveloper();
        dev5.displayInfo();
        dev5.yellAtJunDev(dev3);

        
    }
}