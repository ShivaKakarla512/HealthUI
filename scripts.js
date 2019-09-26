const app = document.getElementById('root');

// const logo = document.createElement('img');
// logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

// app.appendChild(logo);
app.appendChild(container);

var drug = document.getElementById("drug").innerHTML;
var sym = document.getElementById("sym").innerHTML;

var link = 'https://www.ehealthme.com/api/v1/ds/' + drug + '/' + sym + '/';


var request = new XMLHttpRequest();
request.open('GET', link, true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {

	    const card1 = document.createElement('div');
      card1.setAttribute('class', 'card');

      const h11 = document.createElement('h1');
      h11.textContent = "Co Existing Conditions";

      const p1 = document.createElement('p');
      //p1.textContent = `$co_existing_conditions`;
	    //p1.textContent = JSON.stringify(data);
      display(data.co_existing_conditions, p1);


      container.appendChild(card1);
      card1.appendChild(h11);
      card1.appendChild(p1);

	    const card2 = document.createElement('div');
      card2.setAttribute('class', 'card');

      const h12 = document.createElement('h1');
      h12.textContent = "Co Existing Symptoms";

      const p2 = document.createElement('p');
      //p2.textContent = `$co_existing_symptoms`;
      display(data.co_existing_symptoms, p2);

      container.appendChild(card2);
      card2.appendChild(h12);
      card2.appendChild(p2);

	    const card3 = document.createElement('div');
      card3.setAttribute('class', 'card');

      const h13 = document.createElement('h1');
      h13.textContent = "Reports";

      const p3 = document.createElement('p');
      //p3.textContent = `$top_side_effects`;
	    display(data.reports, p3);

      container.appendChild(card3);
      card3.appendChild(h13);
      card3.appendChild(p3);

	    const card4 = document.createElement('div');
      card4.setAttribute('class', 'card');

      const h14 = document.createElement('h1');
      h14.textContent = "Top Drugs";

      const p4 = document.createElement('p');
      //p4.textContent = '$top_drugs';
	    display(data.top_drugs, p4);

	    container.appendChild(card4);
      card4.appendChild(h14);
      card4.appendChild(p4);

      const card5 = document.createElement('div');
      card5.setAttribute('class', 'card');

      const h15 = document.createElement('h1');
      h15.textContent = "Top Conditions";

      const p5 = document.createElement('p');
	    display(data.top_conditions, p5);

	    container.appendChild(card5);
      card5.appendChild(h15);
      card5.appendChild(p5);

      const card6 = document.createElement('div');
      card6.setAttribute('class', 'card');

      const h16 = document.createElement('h1');
      h16.textContent = "Top Side Effects";

      const p6 = document.createElement('p');
	    display(data.top_side_effects, p6);

	    container.appendChild(card6);
      card6.appendChild(h16);
      card6.appendChild(p6);

      function display(data, p) {
        if (data != null) {
          var content = JSON.stringify(data);
          var disp = "";
          JSON.parse(content, (key, value) => {
            if (key != "") {
              key = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize the first letter
              p.innerHTML += (key + ": " +  value);
              p.innerHTML += "<br>";
            }
          });
        }
        else {
          p.innerHTML = "No data available";
        }
      }

	//);
   } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
