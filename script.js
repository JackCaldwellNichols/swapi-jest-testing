const fetch = require("node-fetch");

const getPeoplePromise = (fetch) => {
  return fetch("https://swapi.py4e.com/api/people")
    .then((res) => res.json())
    .then((data) => {
      return {
        count: data.count,
        results: data.results,
      };
    });
};

const getPeople = async (fetch) => {
  const res = await fetch("https://swapi.py4e.com/api/people");
  const data = await res.json();

  return {
    count: data.count,
    results: data.results,
  };
};

const getRickAndMortyCharacter = (fetch) => {
  return fetch("https://rickandmortyapi.com/api/character/2")
    .then((res) => res.json())
    .then((data) => {
      return {
        name: data.name,
        status: data.status,
      };
    });
};

const getPeopleFromRickAndMorty = async (fetch) => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();

  return {
    count: data.info.count,
    pages: data.info.pages,
    results: data.results,
  };
};

module.exports = {
  getPeople,
  getPeoplePromise,
  getRickAndMortyCharacter,
  getPeopleFromRickAndMorty,
};
