import isHappyTicket from "./10th_challenge.mjs";
import * as assert from "assert";

assert.equal(isHappyTicket(123123), true); 
assert.equal(isHappyTicket(456663), true);
assert.equal(isHappyTicket(223999), false);
