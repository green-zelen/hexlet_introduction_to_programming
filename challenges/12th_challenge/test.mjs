import reverseRecurs from "./12th_challenge.mjs";
import * as assert from "assert";

assert.equal(reverseRecurs('мама'), 'амам'); 
assert.equal(reverseRecurs('111000'), '000111');
assert.equal(reverseRecurs('abcd'), 'dcba');
assert.equal(reverseRecurs('самокат'), 'такомас');
