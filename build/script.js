"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var imc = function (peso, altura) {
    return peso / (Math.pow(altura, 2));
};
//console.log('Digite o peso: ')
var peso = Number(prompt('Digite o peso: '));
//console.log(`Digite a altura: `)
var altura = Number(prompt('Digite a altura: '));
var resultadoIMC = imc(peso, altura);
console.log("O calculo do IMC \u00E9: ".concat(resultadoIMC));
