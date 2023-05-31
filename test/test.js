process.env.NODE_ENV = "test"; // set process env to test
const chai = require("chai"); // import chai, assert & should methods
const assert = require("chai").assert;
const should = chai.should();
const chaiHttp = require("chai-http"); // import chai http
const server = require("../app"); // import backend app
const item = require("./testItem.json"); // import test object

/* Tested backend using mocha and chai frameworks, 
three tests were conducted, 
1. test to connect to the backend and see if the response 
message was as expected, 
2. post an item to the backend using post method, the id 
of the test item should match the response id,
3. delete an item from the backend using delete method, 
the response.body should have a length of 0  */

chai.use(chaiHttp);

describe("test Backend API", () => {
  describe("Connected to the server", () => {
    it("test welcome route", (done) => {
      chai
        .request(server)
        .get("/api/welcome")
        .end((err, resp) => {
          resp.should.have.status(200);
          resp.body.should.be.a("object");
          console.log(resp.body.message);
          const message = resp.body.message;
          assert.equal(
            message,
            "Welcome to the server!",
            "Not connected to server!"
          );
          done();
        });
    });

    describe("Post new object to favourites", () => {
      it("test post route", (done) => {
        chai
          .request(server)
          .post("/list/")
          .set("Content-Type", "application/json")
          .send(item)
          .end((err, resp) => {
            resp.should.have.status(200);
            resp.body.should.be.a("array");
            const trackId = resp.body[0].trackId;
            assert.equal(trackId, item.trackId, "Items don't match");
          });
        // testing post method
        done();
      });
    });

    describe("Delete Item from favourites", () => {
      it("test delete route", (done) => {
        chai
          .request(server)
          .delete(`/list/?Id=${item.trackId}`)
          .end((err, resp) => {
            console.log(`${resp.body.length} items in favourites list`);
            assert.equal(resp.body.length, 0, "Item not removed");
          });
        done();
      });
    });
  });
});
