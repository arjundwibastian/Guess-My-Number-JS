# Guess My Number 🎯

A small number-guessing game I built while working through **Jonas Schmedtmann's "The Complete JavaScript Course"** on Udemy — then rewrote in **TypeScript** as a way to practice converting plain JS over to typed TS.

You get 20 points, the computer picks a secret number between 1 and 20, and you have to guess it before your score runs out. Guess too high or too low and you lose a point each time.

## How to play

1. Type a number between 1 and 20 in the box.
2. Hit **Check!**
3. Keep guessing — the message tells you if you're too high or too low.
4. Beat your high score. Hit **Again!** to reset and try once more.

## What I learned

- Selecting and changing elements with `document.querySelector`
- Reading input with `.value` and converting it with `Number()`
- Listening for clicks with `addEventListener`
- Changing text, styles and the background colour from JS
- Writing `if / else if / else` logic to handle the different outcomes
- Generating a random number with `Math.random()` and `Math.trunc()`

On the TypeScript side:

- Adding types (`number`, `string`) so mistakes are caught before running
- Casting DOM elements (`as HTMLInputElement`, `as HTMLElement`) so `.value`, `.style` and `.textContent` type-check
- Setting up a `tsconfig.json` and compiling `.ts` down to the `script.js` the browser actually runs

## Files

- `index.html` — the layout
- `style.css` — the retro styling
- `script.ts` — the source, written in **TypeScript** (this is what I edit)
- `script.js` — the compiled output the browser loads (generated from `script.ts`)
- `tsconfig.json` — compiler config so `tsc` knows what to build

## Running it

Install TypeScript once, then compile:

```bash
npm install
npx tsc
```

That turns `script.ts` into `script.js`. Then just open `index.html` in your browser and play. While editing, `npx tsc --watch` recompiles on every save.

## Credit

Project idea and starter HTML/CSS come from the course:
[The Complete JavaScript Course: From Zero to Expert! — Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/)
