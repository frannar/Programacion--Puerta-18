"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./classes/server");
const router_1 = require("./routes/router");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
let server = new server_1.Servidor();
server.app.use(body_parser_1.default.urlencoded({
    extended: true
}));
server.app.use(body_parser_1.default.json());
server.app.use((0, cors_1.default)({ origin: true, credentials: true }));
// Credenciales de seguridad
server.app.use('/', router_1.router);
server.start(() => {
    console.log("servidor corriendo en " + server.port);
});
