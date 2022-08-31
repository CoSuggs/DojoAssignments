class Ninja {
    constructor(name, health = 100, attributes = { "speed": 3, "strength": 3 }) {
        this.name = name;
        this.health = health;
        this.attributes = attributes
    }
    sayName() {
        console.log(this.name);
    }
    showStats(ninja) {
        console.log('name is', this.name, 'health is', this.health, 'attributes are', this.attributes);
    }
    drinkSake() {
        console.log(this.name, 'drank some sake increasing their health by 10 for a total of', this.health + 10);
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name, 200, { "speed": 10, "strength": 10, "wisdom": 10})
        this.name = name
    }
    speakWisdom(){
        super.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
    senseiShowStats(){
        super.showStats()
    }
}
const ninja1 = new Ninja("bryon");
const sensei1 = new Sensei("Master Splinter")
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
sensei1.senseiShowStats();
sensei1.speakWisdom();