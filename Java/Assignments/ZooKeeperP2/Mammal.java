public class Mammal{
    private int energyLevel;

    public Mammal(){
        this.setEnergyLevel(100);
    }

    public Mammal(int newEnergyLevel){
        this.setEnergyLevel(newEnergyLevel);
    }

    public int displayEnergy(){
        System.out.println(this.getEnergyLevel()+ " points");
        return this.getEnergyLevel();
    }

	public int getEnergyLevel() {
		return this.energyLevel;
	}

	public void setEnergyLevel(int energyLevel) {
		this.energyLevel = energyLevel;
	}
}