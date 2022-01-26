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