package com.cody.interfacedemo;

public abstract class Cat extends Pet implements Keepable{
	public Cat() {
		super("Arandom cat", "Cat");
	}
	public Cat(String name) {
		super(name, "Cat");
	}
	
	public void showAffecttion() {
		System.out.println(this.name + " is slapping you");
	}
	public void begForFood() {
		System.out.println("Meowwwwww");
	}
}

