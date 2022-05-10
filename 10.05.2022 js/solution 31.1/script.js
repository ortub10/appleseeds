const table = document.querySelector("table");
async function promise() {
  const figures = [];
  try {
    const detailes = await fetch("https://swapi.dev/api/people/");
    const data = await detailes.json();
    const arr = data.results;
    for (let obj of arr) {
      const url = obj.homeworld;
      try {
        const innerDetailes = await fetch(url);
        const innerData = await innerDetailes.json();
        const figure = {
          name: obj.name,
          hair: obj.hair_color,
          height: obj.height,
          planet: { name: innerData.name, population: innerData.population },
        };
        figures.push(figure);
      } catch {
        alert("wrong in inner detailes");
      }
    }
  } catch {
    alert("wrong in detailes");
  }
  return figures;
}
async function addTotable(promise) {
  const figures = await promise;
  table.style.display = "table";
  for (let figure of figures) {
    const tr = document.createElement("tr");
    const colunms = `<td>${figure.name}</td>
      <td>${figure.hair}</td>
      <td>${figure.height}</td>
      <td>${figure.planet.name}</td>
      <td>${figure.planet.population}</td> `;
    tr.innerHTML = colunms;
    table.append(tr);
  }
}
addTotable(promise());
