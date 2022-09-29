public class Gorilla extends Mammal{
    public Gorilla(){
        super();
    }

    public Gorilla(int newEnergyLevel){
        super(newEnergyLevel);
    }

    public void throwSomething(){
        this.setEnergyLevel(this.getEnergyLevel() - 5);
        System.out.println("The gorilla has thrown something! It now has: "+ this.displayEnergy()+ " remaining energy");
    }

    public void eatBananas(){
        this.setEnergyLevel(this.getEnergyLevel() + 10);
        System.out.println("The gorilla is satisfied with eating the banana it now has "+ this.displayEnergy()+ " remaining energy");
    }

    public void climb(){
        this.setEnergyLevel(this.getEnergyLevel() - 10);
        System.out.println("The gorilla has climbed a tree it has "+ this.displayEnergy()+ " remaining energy");
    }
}
