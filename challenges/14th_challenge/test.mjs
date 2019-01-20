import dnaToRna from "./14th_challenge.mjs";
import * as assert from "assert";

assert.equal(dnaToRna('ACGTGGTCTTAA'), 'UGCACCAGAAUU'); 
assert.equal(dnaToRna('CCGTA'), 'GGCAU');
assert.equal(dnaToRna(''), ''); 
assert.equal(dnaToRna('ACNTG'), null);
