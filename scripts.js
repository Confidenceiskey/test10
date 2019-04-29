//let url = 'https://confidenceiskey.github.io/test10/enscape.json';

fetch(url)
  .then( res => res.json())
  .then( data => {

    //creates the main unordered list for the historical company highlights
    let ul = document.createElement("ul");
    ul.className = "company-highlights";
    document.getElementById("enscapeHistory").appendChild(ul);

    let helperDate;
    let count = 0;

    for (let i = 0; i < data.enscape.length; i++) {
      let dateYear = moment(data.enscape[i].date, 'YYYY-MMMM').format('YYYY');
      let dateMonth = moment(data.enscape[i].date, 'YYYY-MMMM').format('MMMM YYYY');

      if (dateYear !== helperDate) {
        helperDate = dateYear;

        //creates an li element for each new year
        let li = document.createElement("li");
        li.className = "year";
        document.querySelector(".company-highlights").appendChild(li);

        //encloses the new li element in a heading format
        let yearHeader = document.createElement("h3");
        yearHeader.appendChild(document.createTextNode(dateYear));
        li.appendChild(yearHeader);

        //Creates a new unordered list for the months in the current year
        ul = document.createElement("ul");
        ul.className = "month-list";
        let year = document.querySelectorAll(".year");

        year[count].appendChild(ul);

        count++
      }

      //Creates all month li elements in the current year
      let monthList = document.querySelectorAll(".month-list");
      let li = document.createElement("li");
      li.className = "month";
      li.appendChild(document.createTextNode(dateMonth));

      let monthCount = count - 1;
      monthList[monthCount].appendChild(li);
    }
  });