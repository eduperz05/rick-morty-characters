import VanillaTilt from "vanilla-tilt";

const cardCreate = (character) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("card");

  const showListEpisodes = () => {
    return character.episode.map(episode => "<li>" + episode.split("/").at(-1) + "</li>")
      .join("");
  };

  newDiv.innerHTML =
    `
    <h1>${character.name}</h1>
    <img src="${character.image}">
    <p>${character.status}</p>
    <p>${character.species}</p>
    <ul>
    ${showListEpisodes()}
    </ul>
    `;
  container.appendChild(newDiv);
};

const container = document.querySelector(".container");

fetch("https://rickandmortyapi.com/api/character")
  .then(res => res.json())
  .then((data) => {
    data.results.forEach(char => cardCreate(char));
    VanillaTilt.init(document.querySelectorAll(".card"), {
      glare: true
    });
  });

particlesJS.load("particles-js", "assets/particles.json", function() {
  console.log("callback - particles.js config loaded");
});
