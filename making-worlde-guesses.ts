/*
Write a function, `markWordleGuess(guess: string, hiddenTarget: string):MarkedGuess` which calculates the correctness hints for each letter of a given single guess in Wordle based on the given hidden target.

Assume that the strings guess and hiddenTarget are always formed of exactly 5 upper-case alphabet characters (often with repeats).

The exact type, `MarkedGuess`, is up to you - its design is part of this exercise - but it should contain the guess and its marking - enough so that when it is passed to a GUI component there is enough information to display the guess on screen with appropriately coloured letters.  It *shouldn’t* embed specific colours - 
instead encode the marking in a representation that’s readable for the programmer.

 B R O W N
 B E A N S
 
 B = MarkedGuess

*/

interface MarkedGuess {
    guessedWord: string,
    correctPlace: string,
    wrongPlace: string,
    wrong: string

}
const target = ["b", "r", "o", "w", "n"]

const guess = ["b", "e", "a", "b", "s"]

function IsItInTarget(guess: string[], target: string[]): string[] {
    let verifiedLetters: string[] = [];
    for (const letter of target) {
        if (guess.includes(letter)) {
          verifiedLetters.push(letter)
        }
        return verifiedLetters
}
}