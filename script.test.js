const fetch = require("node-fetch");
const swapi = require("./script.js");

it("calls swapi to get people", (done) => {
  expect.assertions(1);
  swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(87);
    done();
  });
});
it("calls swapi to get people", (done) => {
  expect.assertions(2);
  swapi.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
    done();
  });
});
