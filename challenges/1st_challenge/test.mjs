import isPowerOfThree from "./1st_challenge.mjs";
import * as assert from "assert";

assert.equal(isPowerOfThree(0), false); 
assert.equal(isPowerOfThree(1), true);
assert.equal(isPowerOfThree(2), false);
assert.equal(isPowerOfThree(9), true);
assert.equal(isPowerOfThree(27), true);
assert.equal(isPowerOfThree(81), true);