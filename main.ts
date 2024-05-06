import { Serie} from "./Serie.js"
import { series } from "./data.js";
let serieTable :HTMLElement = document.getElementById("series")!;
let averageTable :HTMLElement = document.getElementById("averageSeasons")!;
mostrarDatosSerie(series)
showAverageSeason(series)

function mostrarDatosSerie(series: Serie[]): void {
    let tbodySerie = document.createElement("tbody");
    console.log('Series array:', series);
    
    for (let serie of series) {
        let trElement: HTMLElement = document.createElement("tr");

        // Crear los elementos td para cada campo de la serie
        let indexTd = document.createElement("td");
        indexTd.textContent = serie.index.toString();

        let nameTd = document.createElement("td");
        nameTd.textContent = serie.name;
        // Agregar evento click al nombre de la serie
        nameTd.addEventListener("click", () => mostrarCardSerie(serie));

        let channelTd = document.createElement("td");
        channelTd.textContent = serie.channel;

        let seasonsTd = document.createElement("td");
        seasonsTd.textContent = serie.seasons.toString();

        // Agregar los elementos td al trElement
        trElement.appendChild(indexTd);
        trElement.appendChild(nameTd);
        trElement.appendChild(channelTd);
        trElement.appendChild(seasonsTd);

        // Agregar trElement al tbody
        tbodySerie.appendChild(trElement);
        
    }
    serieTable.appendChild(tbodySerie);
}

function mostrarCardSerie(serie: Serie): void {
    // Crear el HTML de la tarjeta de Bootstrap
    const cardHtml = `
    <div class="card shadow bg-light" >
    <img src="${serie.pathImage}" class="card-img-top" alt="${serie.name}"  object-fit: cover;">
    <div class="card-body">
        <h5 class="card-title">${serie.name}</h5>
        <p class="card-text">${serie.description}</p>
        <a href="${serie.link}" class="btn btn-primary">Ver más</a>
    </div>
</div>
    `;

    // Crear un contenedor para la tarjeta si aún no existe
    let cardContainer = document.getElementById("card");
    if (!cardContainer) {
        cardContainer = document.createElement("div");
        cardContainer.id = "cardContainer";
        document.body.appendChild(cardContainer);
    }

    // Actualizar el contenedor con la nueva tarjeta
    cardContainer.innerHTML = cardHtml;

}



function showAverageSeason(series: Serie[]):void{
    let lengSerie : number =0
    let averageseason : number =0;
    let tbody = document.createElement("p");
    for (let serie of series){
        lengSerie +=1;
        averageseason += serie.seasons;
    }
    tbody.innerHTML=`<b>Average Seasons&nbsp;&nbsp;${averageseason/lengSerie}&nbsp;&nbsp</b> `;
    averageTable.appendChild(tbody);
}





