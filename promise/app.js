const API_URL = "https://starwars.egghead.training/";
const output = document.getElementById('output');

fetch(API_URL + "films")
.then((response)=> response.json())
.then((films)=>{
    output.innerText = getFilmsDetails(films)
});

function getFilmsDetails(films){
    return films
    .sort((a,b)=> a.episode_id - b.episode_id)
    .map(film=>`${film.episode_id}. ${film.title}`)
    .join('\n')
}