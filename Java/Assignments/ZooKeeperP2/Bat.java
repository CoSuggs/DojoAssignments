public class Bat extends Mammal{
    public Bat(){
        super();
    }

    public Bat(int newEnergyLevel){
        super(newEnergyLevel);
    }

    public void fly(){
        this.setEnergyLevel(this.getEnergyLevel() - 50);
        System.out.println("The bat has started flying! It now has: "+ this.displayEnergy()+ " remaining energy");
    }

    public void eatHumans(){
        this.setEnergyLevel(this.getEnergyLevel() + 25);
        System.out.println("The bat is satisfied with eating.... something.. it now has "+ this.displayEnergy()+ " remaining energy");
    }

    public void attackTown(){
        this.setEnergyLevel(this.getEnergyLevel() - 100);
        System.out.println("The bat has started to attack the town, it has "+ this.displayEnergy()+ " remaining energy");
    }
}
