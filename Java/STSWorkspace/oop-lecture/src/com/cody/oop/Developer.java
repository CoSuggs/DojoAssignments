package com.cody.oop;

import java.util.ArrayList;

class Developer{
    // 1. member variables : what it does (private)
    private String name;
    private int yearsofCoding;
    private ArrayList<String> languages;
    private int brainCell;
    private double salaray;
    private static int devCount;
    private static int totalLanguages;

    // 2. constructor (overloaded constructer and empty argument)
    public Developer(){
        this.name = "Anonymous";
        this.yearsofCoding = 5;
        this.languages  = new ArrayList<String>();
        this.brainCell = 30;
        devCount++;
    }

    public Developer(String name, int brainCell){
        this.name = name;
        this.brainCell = brainCell;
        this.languages = new ArrayList<String>();
        this.yearsofCoding = 10;
        devCount++;
    }
    //3. getters and setters 
    // getter: return datatype of variable, no parameters
    // naming: getName, getYearsOfCoding
    
    public String getName(){
        return this.name;
    }

    public int getYearsOfCoding(){
        return this.yearsofCoding;
    }
    public ArrayList<String> getLanguages(){
        return this.languages;
    }
    public int getBrainCell(){
        return this.brainCell;
    }
    public double getSalary(){
        return this.salaray;
    }
    //static : the method below belongs to the class not the instance
    public static int getDevCount(){
        return devCount;
    }
    public static int getTotalLanguages(){
        return totalLanguages;
    }

    // setter : no return, with parameters with same datatype

    public void setName(String name){
        this.name = name;
    }
    public void setYearsOfCoding(int yearsofCoding){
        this.yearsofCoding = yearsofCoding;
    }
    public void setLanguages(ArrayList<String> languages){
        this.languages = languages;
    }
    public void setBrainCell(int brainCell){
        this.brainCell = brainCell;
    }
    public void setSalary(double salaray){
        this.salaray = salaray;
    }
    public static void setDevCount(int updatedCount){
        devCount = updatedCount;
    }


    // other methods
    public void addOneLanguage(String lang){
        this.languages.add(lang);
        this.salaray +=1000;
        this.brainCell += 10;
        totalLanguages++;
    }

    public void displayInfo() {
        System.out.println(">>>>>"+ this.name+ "<<<<<");
        System.out.println("Years of coding: "+ this.yearsofCoding);
        System.out.println("Languages: "+ this.languages);
        System.out.println("BrainCell: "+ this.brainCell);
        System.out.println("Salaray: "+ this.salaray);
    }
}