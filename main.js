const fs = require('fs');


let gender = [];
let eyeColor = [];
let skinColor = [];
let hairColor = [];

const promesaLectura = new Promise(
    (resolve, reject) => {
        fs.readFile('./data/people.json', 'utf-8',
            (err, contenido) => {
                if (err) {
                    reject(err);
                } else {
                    const people = JSON.parse(contenido);
                    resolve(people);
                }
            });
    }
);


promesaLectura
    .then( //pregunta 1
        (arreglo) => {
            arreglo.map(
                valorActual => {
                    gender.push(valorActual.gender);// pregunta 5
                    return valorActual.gender;
                }
            )
                .forEach(
                    (genero) => console.log(genero)
                );
        }
    )
    .then( //pregunta 2
        (arreglo) => {
            arreglo.map(
                valorActual => {
                    eyeColor.push(valorActual.eye_color);// pregunta 5
                    return valorActual.eye_color;
                }
            )
                .forEach(
                    (eyeColor) => console.log(eyeColor)
                );
        }
    )
    .then( //pregunta 3
        (arreglo) => {
            arreglo.map(
                valorActual => {
                    skinColor.push(valorActual.skin_color);// pregunta 5
                    return valorActual.skin_color;
                }
            )
                .forEach(
                    (skinColor) => console.log(skinColor)
                );
        }
    )
    .then( //pregunta 4
        (arreglo) => {
            arreglo.map(
                valorActual => {
                    hairColor.push(valorActual.hair_color);// pregunta 5
                    return valorActual.hair_color;
                }
            )
                .forEach(
                    (hairColor) => console.log(hairColor)
                );
        }
    )
    .then(
        (arreglo) => {
            arreglo.forEach(
                (valorActual) => {
                    let masaTotal = 0;
                        valorActual.mass +

                }
            )
        }
    )
    .catch(
        (errorLectura) => {
            console.log("Ha ocurrido un error", errorLectura)
        }
    );