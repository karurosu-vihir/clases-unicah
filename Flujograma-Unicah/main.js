import info from "./db.js"

const data = info()
const clases = data.clases

const clase_container = document.querySelectorAll(".clase_container")

console.log(clases)
console.log(clase_container)

function coloresestado(clase){
    if(clase.children[0].children[4].textContent == ""){
        clase.style.backgroundColor = "blue"
    }
    else if(clase.children[0].children[4].textContent == "APR"){
        clase.style.backgroundColor = "green"
    }
    else if(clase.children[0].children[4].textContent == "CUR"){
        clase.style.backgroundColor = "gray"
    }
}

function init(){
    console.log("hola")
    clase_container.forEach((e,index)=>{
        let i = index + 1
        clases.forEach((clase) => {
            let clasediv = crearclase(clase)
            if(clase.periodo == i){
                clase_container[i-1].appendChild(clasediv) 
            }
            coloresestado(clasediv)
        })
    })   
}

function crearclase (clase) {
    const clasediv = document.createElement('div');
    clasediv.className = 'clase';
    clasediv.innerHTML = `
        <div class="info">
            <p>${clase.nombre}</p>
            <p>${clase.seccion}</p>
            <p>${clase.creditos}</p>
            <span>${clase.requisitos}</span>
            <span>${clase.estatus}</span>
        </div>
    `
    return clasediv
}

let lastClicked = null;

function claseclick(){
    const clasesdiv = document.querySelectorAll(".clase")
    clasesdiv.forEach(clasediv=>{
        clasediv.addEventListener('click',()=>{
            if (lastClicked === clasediv) {
                reiniciarSeleccion();
            } else {
                lastClicked = clasediv;
                reiniciarSeleccion();
                clasediv.style.backgroundColor = "cadetblue";
                claserequisito(clasediv.children[0].children[3].textContent);
                claseaabrir(clasediv.children[0].children[0].textContent)
            }
        })
    })
}

function reiniciarSeleccion(){
    const clasesdiv = document.querySelectorAll(".clase")
    clasesdiv.forEach(clase=>{
        if(clase.style.backgroundColor == "cadetblue" || clase.style.backgroundColor == "orange" || clase.style.backgroundColor == "purple"){
            coloresestado(clase)
        } 
    })
} 

function claserequisito(req){
    const clasesdiv = document.querySelectorAll(".clase")
    clasesdiv.forEach(clase=>{
        if(req === clase.children[0].children[0].textContent){
            clase.style.backgroundColor = "orange"
        }
    })
}

function claseaabrir(nombreclase){
    const clasesdiv = document.querySelectorAll(".clase")
    clasesdiv.forEach(clase=>{
        if(clase.children[0].children[3].textContent == nombreclase){
            clase.style.backgroundColor = "purple"
        }
    })
}

init()

claseclick()
