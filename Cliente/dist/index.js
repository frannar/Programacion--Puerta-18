"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Select the div element using the id property
const app = document.getElementById("app");
const table = document.getElementById("socies-table");
let socies = [];
fetch("http://localhost:5000/socies")
    .then(resp => {
    resp.json()
        .then(data => {
        data.socies.forEach((socie) => {
            let tr = document.createElement("tr");
            //link
            let link = document.createElement("a");
            link.href = "http://localhost:5000/socie/" + socie.nick;
            link.innerText = socie.nombre;
            //td
            let td_nombre = document.createElement("td");
            td_nombre.appendChild(link);
            let td_apellido = document.createElement("td");
            td_apellido.textContent = socie.apellido;
            let td_nick = document.createElement("td");
            td_nick.textContent = socie.nick;
            let td_edad = document.createElement("td");
            td_edad.textContent = socie.edad.toString(10);
            let td_button = document.createElement("button");
            td_button.textContent = "Mostrar";
            td_button.onclick = function () {
                showSocie(socie);
            };
            tr === null || tr === void 0 ? void 0 : tr.appendChild(td_nombre);
            tr === null || tr === void 0 ? void 0 : tr.appendChild(td_apellido);
            tr === null || tr === void 0 ? void 0 : tr.appendChild(td_nick);
            tr === null || tr === void 0 ? void 0 : tr.appendChild(td_edad);
            tr === null || tr === void 0 ? void 0 : tr.appendChild(td_button);
            table === null || table === void 0 ? void 0 : table.appendChild(tr);
        });
    });
});
function showSocie(socie) {
    fetch("http://localhost:5000/socie/" + socie.nick)
        .then(resp => {
        resp.json()
            .then(data => {
            let p = document.createElement("p");
            p.textContent = data.socie.nombre;
            app === null || app === void 0 ? void 0 : app.appendChild(p);
        });
    });
}
