package com.cody.inheritance;

public class JuniorDeveloper extends Developer{
	//1. Attributes
	private boolean isIntern;
	//2. Constructors
	public JuniorDeveloper() {
		super("A random developer", 50);
		this.setYearsOfCoding(1);
		this.isIntern=true;
	}
	
	public JuniorDeveloper(String name) {
		super(name, 1, 60, 85000);
		this.isIntern=false;
	}
	//3. Getters/Setters
	public boolean isIntern() {
		return isIntern;
	}
	
	public void setIntern(boolean isIntern) {
		this.isIntern = isIntern;
	}
	
	//4. Other Methods
	public void completeInternship() {
		isIntern=false;
		this.setSalary(70000);
		
	}
	
	public void completeProject() {
		this.setSalary(getSalary() + 1000);
	}
}
