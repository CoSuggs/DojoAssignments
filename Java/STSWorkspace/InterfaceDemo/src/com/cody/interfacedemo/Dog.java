package com.cody.interfacedemo;

public abstract class Dog extends Pet implements Keepable {

	public Dog() {
		// TODO Auto-generated constructor stub
		super("a random dog", "Dog");
	}
	public Dog(String name) {
		super(name, "Dog");
	}

	@Override
	public void showAffection() {
		System.out.println(this.name + " Is wagging their tail");
	}

	@Override
	public void begForFood() {
		System.out.println("Bark! Bark!");
	}

}
