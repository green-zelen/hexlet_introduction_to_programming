import bracketsBalance from "./11th_challenge.mjs";
import * as assert from "assert";

assert.equal(bracketsBalance('()(())'), true); 
assert.equal(bracketsBalance('(())()(())'), true);
assert.equal(bracketsBalance('(()'), false);
assert.equal(bracketsBalance(')(()'), false);
