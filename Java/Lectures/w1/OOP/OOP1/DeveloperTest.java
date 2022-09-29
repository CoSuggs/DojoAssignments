class DeveloperTest{
    public static void main(String[] args){
        System.out.println("----Starting Developer Test---");
        Developer dev1 = new Developer();
        dev1.name = "Pepper";
        dev1.yearsofCoding = 14;
        dev1.brainCell = 2;
        dev1.languages.add("Java");
        dev1.languages.add("Meow");


        dev1.displayInfo();
    }
}