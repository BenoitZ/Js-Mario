function MarioBros (titre, console, annee, description){
    this.titre = titre,
    this.console = console,
    this.annee = annee,
    this.description = description
};

    let marioBros1      = new MarioBros ("MarioBros", "Atari", 1983, "Un jour, le royaume Champignon fut envahi par les Koopas, une tribu de tortues reconnues pour leur magie noire. Les calmes et pacifiques habitants du royaume furent transformés en pierres, en briques et même en plantes! Le royaume est tombé en ruines! La seule capable de briser le sort est la princesse Toadstool, la fille du roi Champignon. Malheureusement, elle est détenue par le méchant roi Bowser.");
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
            <h1>${element.titre} </h1>
            <h3>${element.annee} </h3>
            <h2 class="consoleCarte">Console : ${element.console} </h2>
            <button class="popUp" id= ${"marioBros"+(index+=1)}> En savoir plus </button>
        </div>
    `).join("");

    const maPopUp = document.getElementsByClassName('popUp');
    const titrePop = document.getElementById('titrePop');
    const paraPop = document.getElementById('texte');
    const classL = document.getElementById('popupp');
    const fermeture = document.getElementById('popup');

    for (let index= 0; index<maPopUp.length; index++) {
        maPopUp[index].addEventListener('click', (e)=>{
            let key = e.target.id;
            classL.classList.add('active');
            fermeture.classList.remove('active');
            titrePop.innerText = maCollection[key].titre;
            paraPop.innerText = maCollection[key].description;
            let image = document.getElementById('image');
                image.src = 'img/' + key + '.jpg';
            });   
    }

    fermeture.addEventListener('click', ()=>{
        classL.classList.remove('active');
        });  



//AJOUT CAROUSEL

document.body.onload = function() {
    const nbr = 10;
    var p=0;
    var container = document.getElementById('container');
    var g = document.getElementById('g');
    var d = document.getElementById('d');
        container.style.width = (800*nbr) + "px";

    for(i=1; i<=nbr; i++){
        div = document.createElement('div');
        div.className = 'photo';
        div.style.backgroundImage = "url('img/" +i+ ".jpg')";
        container.appendChild(div);
    }
    g.onclick = function(){
        if(p>-nbr+1){
            p--;  
            container.style.transform="translate("+ p * 800 + "px)";
            container.style.transition = "all 1s ease";
         }
        }
    d.onclick = function(){
        if(p<0){
            p++;  
            container.style.transform="translate("+ p * 800 + "px)";
            container.style.transition = "all 1s ease";
         }
        }
}


