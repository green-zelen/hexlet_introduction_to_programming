import isPerfect from "./3rd_challenge.mjs";
import * as assert from "assert";

assert.equal(isPerfect(-28), false); 
assert.equal(isPerfect(44), false);
assert.equal(isPerfect(0), false);
assert.equal(isPerfect(6), true);
assert.equal(isPerfect(28), true);
assert.equal(isPerfect(26), false);