class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attact(target){
        //reduce target res by power
    }
}

class Effect extends Card{
    constructor(name,cost,magnitude,target)
}