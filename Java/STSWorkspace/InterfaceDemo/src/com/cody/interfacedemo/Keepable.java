package com.cody.interfacedemo;

public interface Keepable {
	public default void play() {
		System.out.println("Playing_____");
	}
	abstract void showAffection();
	
	abstract void begForFood();
}
