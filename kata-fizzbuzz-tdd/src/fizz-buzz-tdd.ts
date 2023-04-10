import {BUZZ, BUZZ_MULTIPLIER, FIZZ, FIZZ_MULTIPLIER} from "@src/constants";

export function fizzBuzz(number: number): string {
    let fizzBuzzValue: string = ''

    if (isMultipleOf(number, FIZZ_MULTIPLIER)) {
        fizzBuzzValue += FIZZ;
    }

    if (isMultipleOf(number, BUZZ_MULTIPLIER)) {
        fizzBuzzValue += BUZZ;
    }

    if (fizzBuzzValue !== '') {
        return fizzBuzzValue;

    }

    return number.toString();
}

function isMultipleOf(number: number, multiplier: number): boolean {
    return number % multiplier === 0;
}
