import { describe, test, it, expect } from 'vitest';
import { calculateAverage, factorial, fizzBuzz, max } from '../src/intro';



describe('max', () =>{
    //AAA 
    // Arrange - set up test environment any necessary data or configurations ex: Turn on Tv
    //const a = 2;
    //const b = 1;
    //  Act - call the function with the arguments ex: Press the power button
    //const result = max(2, 1);
    //  Assert - check the result against the expected value ex: Verify TV is off
    //expect(result).toBe(2);
    it('should return the first argument if it is greater', () =>{
        // going to use the Assert
        expect(max(2, 1)).toBe(2);
    })
    it('should return the second argument if it is greater', () =>{
        // going to use the Assert
        expect(max(1, 2)).toBe(2);
    })
    it('should return the first argument if argements are equal', () =>{
        // going to use the Assert
        expect(max(1, 1)).toBe(1);
    })
})

describe('fizzBuzz', () => {
    it('should return "FizzBuzz" if arg is divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    }); 
    it('should return Fizz if arg is only divisible by 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });

    it('should return Buzz if arg is only divisible by 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });

    it('should return arg as a string if it is not divisible by 3 or 5', () => {
        expect(fizzBuzz(1)).toBe('1');
    });
});

describe('calculateAverage', () => {
  it('should return NaN if given an empty array', () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  it('should calculate the average of an array with a single element', () => {
    expect(calculateAverage([1])).toBe(1);
  });

  it('should calculate the average of an array with two elements', () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });

  it('should calculate the average of an array with three elements', () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});

describe('factorial', () => {
    it('should return 1 for factorial of 0', () => {
        expect(factorial(0)).toBe(1);
    })
    it('should return 1 for factorial of 1', () => {
        expect(factorial(1)).toBe(1);
    })
    it('should return 2 for factorial of 2', () => {
        expect(factorial(2)).toBe(2);
    })
    
    it('should return 6 for factorial of 3', () => {
        expect(factorial(3)).toBe(6);
    })
    
    it('should return 4 for factorial of 24', () => {
        expect(factorial(3)).toBe(6);
    })
    
    it('should return undefined if given negative number', () => {
        expect(factorial(1)).toBeUndefined;
    })
})