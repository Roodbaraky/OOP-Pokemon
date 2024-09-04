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

export class Pokeball {
    storedPokemon?: Pokemon;
    constructor() {
    }

    isEmpty() {
        return this.storedPokemon === undefined
    }
    contains(){
        return this.isEmpty()
        ?`The pokeball is empty!`
        :this.storedPokemon?.name
    }
    throw(pokemon?: Pokemon) {
        if (pokemon && this.isEmpty()) {
            console.log(`Captured ${pokemon.name}!`)
            this.storedPokemon = pokemon
        }
        if (!pokemon && !this.isEmpty()) {
            console.log(`Go ${this.storedPokemon?.name}`)
        }
        else {
            console.log(`${this.isEmpty()
                ?this.contains()
            :'This pokeball already contains '+ this.contains()+'!'}`)
        }
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
export class Charmander extends FireType {
    constructor(name: string) {
        super(name)
        this.move = 'ember'
    }
}
export class Squirtle extends WaterType {
    constructor(name: string) {
        super(name)
        this.move = 'water gun'
    }
}
export class Bulbasaur extends GrassType {
    constructor(name: string) {
        super(name)
        this.move = 'vine whip'
    }
}
export class Pikachu extends ElectricType {
    constructor(name: string) {
        super(name)
        this.move = 'thunder bolt'
    }
}
export class Rattata extends Pokemon {
    constructor(name: string) {
        super(name)
    }
}