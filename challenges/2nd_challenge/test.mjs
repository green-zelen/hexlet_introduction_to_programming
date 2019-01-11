import diff from "./2nd_challenge.mjs";
import * as assert from "assert";

assert.equal(diff(0, 45), 45); 
assert.equal(diff(0, 80), 80);
assert.equal(diff(120, 280), 160);
assert.equal(diff(270, 120), 150);
assert.equal(diff(45,90), 45);