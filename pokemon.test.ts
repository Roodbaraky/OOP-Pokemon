import { beforeEach, describe, expect, it, jest } from '@jest/globals'
import { FireType, Pokemon } from './pokemon';

describe('Pokemon Class', () => {
    let pikachu: Pokemon;

    beforeEach(() => {
        pikachu = new Pokemon('Pikachu');
    });

    it('should create a Pokemon with the correct default properties', () => {
        expect(pikachu.name).toBe('Pikachu');
        expect(pikachu.hitPoints).toBe(100);
        expect(pikachu.attackDamage).toBe(45);
        expect(pikachu.move).toBe('tackle');
    });

    it('should reduce hitPoints when takeDamage is called', () => {
        pikachu.takeDamage(20);
        expect(pikachu.hitPoints).toBe(80);
    });

    it('should not have negative hitPoints after taking more damage than available', () => {
        pikachu.takeDamage(150);
        expect(pikachu.hitPoints).toBe(-50);
    });

    it('should correctly determine if the Pokemon has fainted', () => {
        pikachu.takeDamage(100);
        expect(pikachu.hasFainted()).toBe(true);

        pikachu.takeDamage(50);
        expect(pikachu.hasFainted()).toBe(true);
    });

    it('should correctly use a move', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        pikachu.useMove();
        expect(consoleSpy).toHaveBeenCalledWith("Pikachu used Pikachu's move: tackle");
        consoleSpy.mockRestore();
    });
});

describe('FireType Class', () => {
    let charmander: FireType;
    let bulbasaur: Pokemon;
    let squirtle: Pokemon;

    beforeEach(() => {
        charmander = new FireType('Charmander');
        bulbasaur = new Pokemon('Bulbasaur');
        bulbasaur.type = 'grass';
        squirtle = new Pokemon('Squirtle');
        squirtle.type = 'water';
    });

    test('should create a FireType Pokemon with the correct default properties', () => {
        expect(charmander.name).toBe('Charmander');
        expect(charmander.hitPoints).toBe(100);
        expect(charmander.attackDamage).toBe(45);
        expect(charmander.move).toBe('tackle');
        expect(charmander.type).toBe('fire');
    });

    test('should correctly identify when a FireType is effective against a grass-type Pokemon', () => {
        expect(charmander.isEffectiveAgainst(bulbasaur)).toBe(true);
    });

    test('should correctly identify when a FireType is not effective against a non-grass-type Pokemon', () => {
        expect(charmander.isEffectiveAgainst(squirtle)).toBe(false);
    });

    test('should correctly inherit methods from Pokemon class', () => {
        charmander.takeDamage(20);
        expect(charmander.hitPoints).toBe(80);
        
        const consoleSpy = jest.spyOn(console, 'log');
        charmander.useMove();
        expect(consoleSpy).toHaveBeenCalledWith("Charmander used Charmander's move: tackle");
        consoleSpy.mockRestore();

        charmander.takeDamage(100);
        expect(charmander.hasFainted()).toBe(true);
    });
});
