import { series } from "./data.js";
var serieTable = document.getElementById("series");
var averageTable = document.getElementById("averageSeasons");
mostrarDatosSerie(series);
showAverageSeason(series);
function mostrarDatosSerie(series) {
    var tbodySerie = document.createElement("tbody");
    console.log('Series array:', series);
    var _loop_1 = function (serie) {
        var trElement = document.createElement("tr");
        // Crear los elementos td para cada campo de la serie
        var indexTd = document.createElement("td");
        indexTd.textContent = serie.index.toString();
        var nameTd = document.createElement("td");
        nameTd.textContent = serie.name;
        // Agregar evento click al nombre de la serie
        nameTd.addEventListener("click", function () { return mostrarCardSerie(serie); });
        var channelTd = document.createElement("td");
        channelTd.textContent = serie.channel;
        var seasonsTd = document.createElement("td");
        seasonsTd.textContent = serie.seasons.toString();
        // Agregar los elementos td al trElement
        trElement.appendChild(indexTd);
        trElement.appendChild(nameTd);
        trElement.appendChild(channelTd);
        trElement.appendChild(seasonsTd);
        // Agregar trElement al tbody
        tbodySerie.appendChild(trElement);
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
    serieTable.appendChild(tbodySerie);
}
function mostrarCardSerie(serie) {
    // Crear el HTML de la tarjeta de Bootstrap
    var cardHtml = "\n    <div class=\"card shadow bg-light\" >\n    <img src=\"".concat(serie.pathImage, "\" class=\"card-img-top\" alt=\"").concat(serie.name, "\"  object-fit: cover;\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(serie.name, "</h5>\n        <p class=\"card-text\">").concat(serie.description, "</p>\n        <a href=\"").concat(serie.link, "\" class=\"btn btn-primary\">Ver m\u00E1s</a>\n    </div>\n</div>\n    ");
    // Crear un contenedor para la tarjeta si aún no existe
    var cardContainer = document.getElementById("card");
    if (!cardContainer) {
        cardContainer = document.createElement("div");
        cardContainer.id = "cardContainer";
        document.body.appendChild(cardContainer);
    }
    // Actualizar el contenedor con la nueva tarjeta
    cardContainer.innerHTML = cardHtml;
}
function showAverageSeason(series) {
    var lengSerie = 0;
    var averageseason = 0;
    var tbody = document.createElement("p");
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        lengSerie += 1;
        averageseason += serie.seasons;
    }
    tbody.innerHTML = "<b>Average Seasons&nbsp;&nbsp;".concat(averageseason / lengSerie, "&nbsp;&nbsp</b> ");
    averageTable.appendChild(tbody);
}
