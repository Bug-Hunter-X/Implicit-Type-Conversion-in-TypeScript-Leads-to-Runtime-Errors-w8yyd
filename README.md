# Implicit Type Conversion in TypeScript Leading to Runtime Errors

This repository demonstrates a common error in TypeScript where implicit type conversion during string and number addition can cause unexpected runtime errors, despite the code compiling without errors. 

The `bug.ts` file contains the buggy code. The `bugSolution.ts` file shows how to fix it using type guards or explicit type checking. 

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `tsc bug.ts` to compile the buggy code.
4. Run `node bug.js` to execute the compiled code. You'll see `NaN` as the output.
5. Then run `tsc bugSolution.ts` to compile the fixed code.
6. Run `node bugSolution.js` to execute the compiled code. You'll see the correct output.

## How to Fix

The provided solution uses a type guard to prevent the runtime error by explicitly checking the types before performing the addition operation. This ensures that only numbers are added, preventing the `NaN` issue.

## Conclusion

This example highlights the importance of careful type handling in TypeScript. While TypeScript's type system offers strong protection against errors, it's crucial to be aware of situations where implicit type conversion can lead to unexpected runtime behaviors.  Always validate user input or data before attempting operations sensitive to type mismatches.