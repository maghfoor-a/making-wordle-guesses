/*
Write a function, `markWordleGuess(guess: string, hiddenTarget: string):MarkedGuess` which calculates the correctness hints for each letter of a given single guess in Wordle based on the given hidden target.

Assume that the strings guess and hiddenTarget are always formed of exactly 5 upper-case alphabet characters (often with repeats).

The exact type, `MarkedGuess`, is up to you - its design is part of this exercise - but it should contain the guess and its marking - enough so that when it is passed to a GUI component there is enough information to display the guess on screen with appropriately coloured letters.  It *shouldn’t* embed specific colours - 
instead encode the marking in a representation that’s readable for the programmer.

 B R O W N
 B E A N S
 
 B = MarkedGuess

 ===============
 FUNCTION 

========
if  letter is 
*/

interface MarkedLetter {
  status: "correct" | "half-correct" | "incorrect",
  letter: string

}
const target = ["b", "r", "o", "w", "n"]

const guess = ["b", "e", "a", "b", "s"]

// function IsItInTarget(guess: string[], target: string[]): string[] {
//     let verifiedLetters: string[] = [];
//     for (const letter of target) {
//         if (guess.includes(letter)) {
//           verifiedLetters.push(letter)
//         }
//         return verifiedLetters
// }

/* */

export function markWordleGuess(guess: string, hiddenTarget: string): (null | MarkedLetter)[] {
  let markedLetterArr: (null | MarkedLetter)[] = [null, null, null, null, null]
  const guessArr = guess.split('');
  const hiddenTargetArr = hiddenTarget.split('');
  //priority loop: checks for perfectly correct letters
  for (let i = 0; i < guessArr.length; i++) {
    if (guessArr[i] === hiddenTargetArr[i]) {
      markedLetterArr[i] = { status: "correct", letter: guessArr[i] }
      hiddenTargetArr[i] = "used"
      guessArr[i] = "used"
    }
  }
  console.log({ guess, hiddenTarget, guessArr, hiddenTargetArr, markedLetterArr })
  //marks all remaining letters as half-corrects and incorrects
  for (let i = 0; i < guessArr.length; i++) {
    // if this letter has already been marked as "used",
    //     skip and go to next letter
    if (guessArr[i] !== "used") {
      if (hiddenTargetArr.includes(guessArr[i])) {
        markedLetterArr[i] = { status: "half-correct", letter: guessArr[i] }
        hiddenTargetArr[i] = "used"
      }
      else if (!hiddenTargetArr.includes(guessArr[i])) {
        markedLetterArr[i] = { status: "incorrect", letter: guessArr[i] }
      }
    }
  }
  return markedLetterArr
}