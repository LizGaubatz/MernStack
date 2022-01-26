class Ninja {
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health; 
        this.speed = speed;
        this.strength = strength;
    }
    sayName = () => console.log(this.name);
    showStats = () => console.log("Name: " + this.name, "Health: " + this.name, "Speed: " + this.speed, "Strength: " + this.strength);
    drinkSake = () => this.health += 10;
}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10);
        this.wisdom = 10
    }
    speakWisdom () {
        superSensei.drinkSake();
        console.log("I hope I am doing this right.");
    }
}

// const superSensei = new Sensei ("The Dude")
// superSensei.speakWisdom();
// superSensei.showStats();

class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target) {
        if(target instanceof Unit) {
            target.resilience -= this.power;
        }
        else {
            console.log("Target must be a unit!")
        }
    }

    displayInfo() {
        console.log(this.name + ":", "Cost:" + this.cost, "Power:" + this.power, "Resilience:" + this.resilience)
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    apply(target){
        console.log("Playing...");
        if (target instanceof Unit) {
            if(this.stat==="power") {
                target.power += this.magnitude; 
            }
            else if (this.stat==="resilience") {
                target.resilience += this.magnitude;
            }
        }
    }
}

const rb_ninja_1 = new Unit("Red Belt Ninja", 3, 3, 4);
const bb_ninja_1 = new Unit("Black Belt Unit", 3, 5, 4);
const hard_algorithm = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3);
const unhandled_promise_rejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2);
const pair_programming = new Effect("Pair Programming", 2, "Increase target's power by 2", "power", 2);



rb_ninja_1.displayInfo();
bb_ninja_1.displayInfo();
hard_algorithm.apply(rb_ninja_1);
rb_ninja_1.displayInfo();
bb_ninja_1.displayInfo();
pair_programming.apply(rb_ninja_1);
rb_ninja_1.displayInfo();
bb_ninja_1.displayInfo();
rb_ninja_1.attack(bb_ninja_1);
rb_ninja_1.displayInfo();
bb_ninja_1.displayInfo();