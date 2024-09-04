type PokemonType = 'fire' | 'grass' | 'water' | 'electric' | 'normal';
const TypeEffectiveness = {
    fire: { effectiveAgainst: 'grass', weakTo: 'water' },
    water: { effectiveAgainst: 'fire', weakTo: 'electric' },
    grass: { effectiveAgainst: 'water', weakTo: 'fire' },
    electric: { effectiveAgainst: 'water', weakTo: 'grass' },
    normal: { effectiveAgainst: null, weakTo: null },
};

export class Pokemon {
    name: string;
    hitPoints: number;
    attackDamage: number;
    move: string;
    type: PokemonType;
    constructor(name: string, type: PokemonType = 'normal') {
        this.type = type
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
    isEffectiveAgainst(pokemon: Pokemon) {
        return TypeEffectiveness[this.type]?.effectiveAgainst === pokemon.type;
    }
    isWeakTo(pokemon: Pokemon) {
        return TypeEffectiveness[this.type]?.weakTo === pokemon.type;
    }
}


export class FireType extends Pokemon {
    constructor(name: string) {
        super(name, 'fire')
    }
}
export class WaterType extends Pokemon {
    constructor(name: string) {
        super(name, 'water')
    }
}
export class GrassType extends Pokemon {
    constructor(name: string) {
        super(name, 'grass')
    }
}
export class ElectricType extends Pokemon {
    constructor(name: string) {
        super(name, 'electric')
    }
}
