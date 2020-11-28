import allSolutions from "../solutions.js";
import service from "./machine.js";

const pathArray = window.location.pathname.split("/");
const filePath = pathArray[pathArray.length - 1].substring(0, 4);
const directoryPath = pathArray[pathArray.length - 2];

// console.log(filePath);
// console.log(directoryPath);

const solutions = allSolutions[`${directoryPath}`][filePath];

const form = `${filePath}`;
const esercizio = document.getElementById(form);

export { solutions, esercizio, service };
