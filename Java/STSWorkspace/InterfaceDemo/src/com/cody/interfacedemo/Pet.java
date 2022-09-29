package com.cody.interfacedemo;

public class Pet {
	protected String name;
	protected String type;
	
	public Pet() {
		this.name = "a random pet";
	}
	
	public Pet(String name, String type) {
		this.name = name;
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	public void displayStatus() {
		System.out.println("Name: "+ this.name);
		System.out.println("Type: "+ this.type);
	}
}
