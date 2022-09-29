import java.util.ArrayList;

class Developer{
    // 1. member variables : what it does
    public String name;
    public int yearsofCoding;
    public ArrayList<String> languages = new ArrayList<String>();
    public int brainCell;

    // 2. constructor
    

    // other methods
    public void displayInfo() {
        System.out.println(">>>>>"+ this.name+ "<<<<<");
        System.out.println("Years of coding: "+ this.yearsofCoding);
        System.out.println("Languages: "+ this.languages);
        System.out.println("BrainCell: "+ this.brainCell);
    }
}