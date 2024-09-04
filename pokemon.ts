export class Pokemon {
    name: string;
    hitPoints: number;
    attackDamage: number;
    move: string;
    type: string;
    constructor(name: string) {
        this.type = 'normal'
        this.name = name;
        this.hitPoints = 100;
        this.attackDamage = 45;
        this.move = 'tackle'
    }
    takeDamage(damageAmount: number) {
        this.hitPoints -= damageAmount
    };
    useMove() {
        console.log(`${this.name} used ${this.name}'s move: ${this.move}`)
    }
    hasFainted() {
        return this.hitPoints <= 0
            ? true
            : false
    }
}

export class FireType extends Pokemon {
    constructor(name: string) {
        super(name)
        this.type = 'fire';
    }
    isEffectiveAgainst(pokemon: Pokemon) {
        return pokemon.type === 'grass'
    }
}