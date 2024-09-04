import { beforeEach, describe, expect, it, jest } from '@jest/globals'
import { Pokemon } from './pokemon';

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
        pikachu.useMove('tackle');
        expect(consoleSpy).toHaveBeenCalledWith("Pikachu used Pikachu's move: tackle");
        consoleSpy.mockRestore();
    });
});
