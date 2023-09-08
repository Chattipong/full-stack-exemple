var assert = require("assert");
const { createUserAccountTest } = require("../app/controller/users/create");
describe("BasicTest By Mocha", function () {
  it("Test Create Name", async function () {
    var result = await createUserAccountTest("test");
    assert.equal(result, "test");
  });
});
