

function MarioBros (titre, console, annee, description){
    this.titre = titre,
    this.console = console,
    this.annee = annee,
    this.description = description
};

    let marioBros1      = new MarioBros ("MarioBros", "Atari", 1983, "Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio quas voluptatem illo amet sint quidem cupiditate vero dolorum illum!");
    let marioBros2      = new MarioBros ("SuperMarioBros", "Nes", 1985, "Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio quas voluptatem illo amet sint quidem cupiditate vero dolorum illum!");
    let marioBros3      = new MarioBros ("SuperMarioBrosSpecial", "Sharp X1", 1986, "Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio quas voluptatem illo amet sint quidem cupiditate vero dolorum illum!");
    let marioBros4      = new MarioBros ("SuperMariosBros2", "Famicom", 1988, "Lorem 4 ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio quas voluptatem illo amet sint quidem cupiditate vero dolorum illum!");
    let marioBros5      = new MarioBros ("SuperMarioBros3", "Famicom", 1988, "Lorem 5 ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio quas voluptatem illo amet sint quidem cupiditate vero dolorum illum!");
    let marioBros6      = new MarioBros ("SuperMarioLand", "GameBoy", 1989, "Lorem 6ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio quas voluptatem illo amet sint quidem cupiditate vero dolorum illum!");
    let marioBros7      = new MarioBros ("SuperMarioWorld", "SuperFamicom", 1990, "Lorem 7 ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio quas voluptatem illo amet sint quidem cupiditate vero dolorum illum!");
    let marioBros8      = new MarioBros ("SuperMarioLand2", "GameBoy", 1992, "Lorem 8 ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio quas voluptatem illo amet sint quidem cupiditate vero dolorum illum!");
    let marioBros9      = new MarioBros ("SuperMarioWorld", "SuperNintendo", 1995, "Lorem 9 ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio quas voluptatem illo amet sint quidem cupiditate vero dolorum illum!");
    let marioBros10     = new MarioBros ("SuperMario64", "Nintendo64", 1996, "Lorem 10 ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio quas voluptatem illo amet sint quidem cupiditate vero dolorum illum!");


let maCollection = {...{marioBros1}, ...{marioBros2}, ...{marioBros3},
                    ...{marioBros4}, ...{marioBros5}, ...{marioBros6}, 
                    ...{marioBros7}, ...{marioBros8}, ...{marioBros9}, ...{marioBros10}};

for (const key in maCollection){
    console.log(maCollection[key]);
};



let div = document.getElementById('affichage');

div.innerHTML = Object.values(maCollection).map((element, index) => `
    <div class="carte">
        <h1>Titre : ${element.titre} </h1>
        <h2>Console : ${element.console} </h2>
        <h3>Année : ${element.annee} </h3>
        <button class="popUp" id= ${"marioBros"+(index+=1)}> En savoir plus </button>
    </div>
`).join("");


const maPopUp = document.getElementsByClassName('popUp');
const h2 = document.getElementById('titrePop');
const p = document.getElementById('texte');
const classL = document.getElementById('popupp');
const fermeture = document.getElementById('popup');


for (let index= 0; index<maPopUp.length; index++) {

    maPopUp[index].addEventListener('click', (e)=>{

        let key = e.target.id;

        classL.classList.add('active');
        fermeture.classList.remove('active');

        h2.innerText = maCollection[key].titre;
        p.innerText = maCollection[key].description;

        let image = document.getElementById('image');
            image.setAttribute("src", "marioBros"+[key]+".jpg");
            console.log(image);

        });   
}

    fermeture.addEventListener('click', ()=>{
        classL.classList.remove('active');
        });  


        // CLASSLIST


        // <button class="popUp" id= ${"marioBros"+(index+=1)}> En savoir plus </button>



// const cartes = document.getElementsByClassName('carte');

// cartes.addEventListener('click', ()=>{

//     cartes.classList.add
// });








// Version avec For in

// for (const key in maCollection) {

//     let h2 = document.createElement('h2');
//     let h3 = document.createElement('h3');
//     let h4 = document.createElement('h4');
//     let div2 = document.createElement('div');
//     let div = document.getElementById('affichage');

//     h2.textContent = " - Titre : " + maCollection[key].titre + " -";
//     h3.textContent = "Console : " + maCollection[key].console;
//     h4.textContent = "Année : " + maCollection[key].annee;
    
//     div.appendChild(div2);
//     div2.appendChild(h2);
//     div2.appendChild(h3);
//     div2.appendChild(h4);
    
// }


