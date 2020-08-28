const helloButton = document.getElementById('hello-button');
const petList = document.getElementById('pet-list');

const categories = {
    dogs: {
        button: document.getElementById('dogs-link'),
        content: document.getElementById('dogs')
    },
    cats: {
        button: document.getElementById('cats-link'),
        content: document.getElementById('cats')

    },
    mices: {

        button: document.getElementById('mices-link'),
        content: document.getElementById('mices')

    }
}

let dogList = [
    {
        name: "Chihuahua",
        region: "México",
        description: "A tiny nose dog"
    },
    {
        name: "Beagle",
        region: "England",
        description: "A medium hunting dog"
    },
    {
        name: "German Shepherd",
        region: "Germany",
        description: "Big dog for farm work"
    },
    {
        name: "Huskey",
        region: "Siberia",
        description: "Big dog for recue work in gelid wather"
    }
];

let catList = [
    {
        name: "Asiático",
        region: "Britain",
        description: "Friendly and caring"
    },
    {
        name: "Azul Ruso",
        region: "Russia",
        description: "Gray short hear"
    },
    {
        name: "Balinés",
        region: "America",
        description: "Long hear"
    },
    {
        name: "Bombay",
        region: "Britain and EE.UU.",
        description: "Black and shiny hear"
    }

];

let micesList = [
    {
        name: "Manx",
        region: "Europe",
        description: "Tiny rat"
    },
    {
        name: "Bald",
        region: "Asia",
        description: "No hair and short tail"
    },
    {
        name: "Dumbo",
        region: "America",
        description: "Big ears"
    },
    {
        name: "Rex",
        region: "Britain",
        description: "Really big and hairy rat"
    }

];

categories.dogs.button.onclick = ()=> {
    if(categories.dogs.content.innerHTML){
        categories.dogs.content.innerHTML = '';
        
        return;
    }
    dogList.forEach(dog =>{
        categories.dogs.content.innerHTML += `<li>
            <span>${dog.name}</span>
            <div>region: ${dog.region}</div>
            <div>description: ${dog.description}</div>
        </li>`;//ES6 Emacsript 6
    });
}

categories.cats.button.onclick = ()=> {
    if(categories.cats.content.innerHTML){
        categories.cats.content.innerHTML = '';
        
        return;
    }
    catList.forEach(cat =>{
        categories.cats.content.innerHTML += `<li>
            <span>${cat.name}</span>
            <div>region: ${cat.region}</div>
            <div>description: ${cat.description}</div>
        </li>`;//ES6 Emacsript 6
    });
}

categories.mices.button.onclick = ()=> {
    if(categories.mices.content.innerHTML){
        categories.mices.content.innerHTML = '';
        
        return;
    }
    micesList.forEach(mices =>{
        categories.mices.content.innerHTML += `<li>
            <span>${mices.name}</span>
            <div>region: ${mices.region}</div>
            <div>description: ${mices.description}</div>
        </li>`;//ES6 Emacsript 6
    });
}
