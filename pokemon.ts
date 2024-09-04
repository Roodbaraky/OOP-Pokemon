export class Pokemon {
    name: string;
    hitPoints: number;
    attackDamage: number;
    move: string;
    constructor(name) {
        this.name = name;
        this.hitPoints = 100;
        this.attackDamage = 45;
        this.move = 'tackle'
    }
    takeDamage(damageAmount: number) {
        this.hitPoints -= damageAmount
    };
    useMove(move: string) {
        console.log(`${this.name} used ${this.name}'s move: ${this.move}`)

    }
    hasFainted() {
        return this.hitPoints <= 0
            ? true
            : false
    }
}