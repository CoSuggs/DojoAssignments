package com.cody.interfacedemo;

public class PetTest {

	public static void main(String[] args) {
		Cat pepper = new Cat("Pepper");
		pepper.displayStatus();
		pepper.play();
		pepper.showAffection();
		pepper.begForFood();
		
		Dog chica = new Dog("Chica");
		chica.displayStatus();
		chica.play();
		chica.showAffection();
		chica.begForFood();
		
		}

}
