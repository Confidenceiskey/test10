let retrieveCareerSection = () => {
let url = './enscape.json';

  fetch(url)
    .then( res => res.json())
    .then( data => console.log(data))
}