"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
let socies = [
    {
        nombre: 'Nahuel',
        apellido: 'Heredia',
        nick: "N4hu3l",
        edad: 22,
    },
    {
        nombre: 'Irina',
        apellido: 'Davico',
        nick: 'Ir1n4',
        edad: 21,
    },
    {
        nombre: 'John',
        apellido: 'Maza',
        nick: 'J0hny',
        edad: 20,
    }
];
exports.router.get('/socies', (req, res) => {
    res.json({
        ok: true,
        socies: socies
    });
});
exports.router.get('/socie/:nick', (req, res) => {
    let ficha = { nombre: "", apellido: "", nick: "", edad: 0 };
    socies.forEach(socie => {
        if (socie.nick === req.params.nick) {
            ficha = socie;
        }
    });
    res.json({
        ok: true,
        socie: ficha
    });
});
