import invertCase from "./9th_challenge.mjs";
import * as assert from "assert";

assert.equal(invertCase('HeLLo WorlD'), 'hEllO wORLd'); 
assert.equal(invertCase('MaMa'), 'mAmA');
assert.equal(invertCase('ПриФФет'), 'пРИффЕТ');
