package com.cody.inheritance;

public class SeniorDeveloper extends Developer{

	public SeniorDeveloper() {
		super("A random Senior Dev", 10, 40, 150000);
	}
	public void yellAtJunDev(JuniorDeveloper junDev) {
		this.setBrainCell(getBrainCell() - 1);
		junDev.setBrainCell(junDev.getBrainCell() +1);
		System.out.println("Yelling at " + junDev + " in Progress");
	}
}
