import {fizzBuzz} from "@src/fizz-buzz-tdd";

describe("Kata FizzBuzz using TDD", () => {
    it("should return same number when it is not multiple of three or five", () => {
        const number = 1;
        expect(fizzBuzz(number)).toBe("1");
    });
    it("should return Fizz when number is multiple of three", () => {
        const number = 3;
        expect(fizzBuzz(number)).toBe("Fizz");
    });
    it("should return Buzz when number is multiple of five", () => {
        const number = 5;
        expect(fizzBuzz(number)).toBe("Buzz");
    });
    it("should return FizzBuzz when number is multiple of three and five", () => {
        const number = 15;
        expect(fizzBuzz(number)).toBe("FizzBuzz");
    });
});
