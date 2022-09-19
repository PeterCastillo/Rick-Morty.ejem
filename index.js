const container = document.querySelector('.container')

window.addEventListener('load' , () => {
    if(localStorage.getItem('characters')){
        characters = JSON.parse(localStorage.getItem('characters'));
        putCharacters(characters);
        return
    }
    getData();
})


let characters = {}

const getData = async() => {
    console.log("FETCH")
    const data = await fetch('https://rickandmortyapi.com/api/character')
    const { results } = await data.json();
    settData( results );
}


const settData = (data) => {
    characters = data;
    localStorage.setItem('characters' , JSON.stringify(characters))
    putCharacters(characters);
}

const putCharacters = (characters) => {
    characters.forEach(element => {
        let div = document.createElement('div');
        let divContent = `
        <div>
            <img src="${element.image}" alt="${element.name}">
        </div>
        <div>
            <span><b>ID:</b>${element.id}</span>
            <span><b>Name:</b>${element.name}</span>
            <span><b>Status:</b>${element.species}</span>
        </div>
        `
        div.innerHTML = divContent;
        container.appendChild(div)
    });
}
