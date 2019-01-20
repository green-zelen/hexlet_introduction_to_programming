import formattedTime from "./13th_challenge.mjs";
import * as assert from "assert";

assert.equal(formattedTime(5), '00:05'); 
assert.equal(formattedTime(15), '00:15');
assert.equal(formattedTime(60), '01:00'); 
assert.equal(formattedTime(67), '01:07');
assert.equal(formattedTime(175), '02:55'); 
assert.equal(formattedTime(600), '10:00');
assert.equal(formattedTime(754), '12:34'); 
assert.equal(formattedTime(1381), '23:01'); 
