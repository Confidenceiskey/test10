
let url = 'https://confidenceiskey.github.io/test10/enscape.json';

fetch(url)
  .then( res => res.json())
  .then( data => {

    let ul = document.createElement("ul");
    document.getElementById("enscapeHistory").appendChild(ul);

    for (let i = 0; i < data.enscape.length; i++) {
      if (moment(data.enscape[i]).format('YYYY') === '2017') {
        console.log('true');
      }
      let li = document.createElement("li");
      let node = document.createTextNode(data.enscape[i].date);
      li.appendChild(node);
      document.querySelector('ul').appendChild(li);
    }
  });
