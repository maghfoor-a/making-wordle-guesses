import { markWordleGuess } from "./marking-wordle-guesses";

test("given a guess with a single letter of correct value and index, L, return an array of objects which includes {status: correct, letter: L}", () => {
    expect(markWordleGuess("seans", "brows")).toEqual([{ status: "incorrect", letter: "s" }, { status: "incorrect", letter: "e" }, { status: "incorrect", letter: "a" }, { status: "incorrect", letter: "n" },{ status: "correct", letter: "s" }])
})

test("given a fully correct guess, return a corresponding array of objects [{status: correct, letter: }, ...", () => {
    expect(markWordleGuess("chess", "chess")).toEqual([{ status: "correct", letter: "c" }, { status: "correct", letter: "h" }, { status: "correct", letter: "e" }, { status: "correct", letter: "s" }, { status: "correct", letter: "s" }])
})