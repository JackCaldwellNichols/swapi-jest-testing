const fetch = require("node-fetch");
const swapi = require("./script.js");

// it("calls swapi to get people", (done) => {
//   expect.assertions(1);
//   swapi.getPeople(fetch).then((data) => {
//     expect(data.count).toEqual(87);
//     done();
//   });
// });

// it("calls swapi to get people", (done) => {
//   expect.assertions(2);
//   swapi.getPeoplePromise(fetch).then((data) => {
//     expect(data.count).toEqual(87);
//     expect(data.results.length).toBeGreaterThan(5);
//     done();
//   });
// });

// it("getPeople returns counts and results", () => {
//   const mockFetch = jest.fn().mockReturnValue(
//     Promise.resolve({
//       json: () =>
//         Promise.resolve({
//           count: 87,
//           results: [0, 1, 2, 3, 4, 5],
//         }),
//     })
//   );
//   expect.assertions(4);
//   return swapi.getPeoplePromise(mockFetch).then((data) => {
//     expect(mockFetch.mock.calls.length).toBe(1);
//     expect(mockFetch).toHaveBeenCalledWith("https://swapi.py4e.com/api/people");
//     expect(data.count).toEqual(87);
//     expect(data.results.length).toBeGreaterThan(5);
//   });
// });

it("calls r&m to get person", (done) => {
  expect.assertions(2);
  swapi.getRickAndMortyCharacter(fetch).then((data) => {
    expect(data.status).toEqual("Alive");
    expect(data.name).toContain("Morty");
    expect(data.length);
    done();
  });
});

it("calls rick and morty to get people", (done) => {
  expect.assertions(3);
  swapi.getPeopleFromRickAndMorty(fetch).then((data) => {
    expect(data.count).toEqual(826);
    expect(data.results.length).toBeGreaterThan(10);
    expect(data.pages).toBe(42);
    done();
  });
});
