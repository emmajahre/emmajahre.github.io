const main = document.querySelector("main")

var url_string = window.location.href;
var url = new URL (url_string);
var id = url.searchParams.get("id");
var parent = url.searchParams.get("parent");

const db = firebase.database();
const valgtProdukt = db.ref("varer/"+parent+"/"+id);





function genererHTML(snapshot){
  let varer = snapshot.val();
  main.innerHTML = `
  <article class="infovarer">
    <h1 id="produktNavn">${varer.navn}</h1>
    <img id="produktBilde" src="bilder/${varer.bilde}">
    <p id="produktPris">${varer.pris},- </p>
    <!--<p id="InfoProdukt">${varer.type} i ${varer.stoff} </p>
    <p id="InfoProdukt">Passer fint til ${varer.anledning}</p>-->
    <div id="produktKnapper">
    <form action="handlekurv.html">
                  <select required name="">
                    <option class="str" value="">størrelse</option>
                    <option value="1">34</option>
                    <option value="2">36</option>
                    <option value="3">38</option>
                    <option value="4">40</option>
                    <option value="5">42</option>
                  </select>
                  <button class="kjøp" type="submit">Legg til i handlekurv</button>
                </form>
    </div>
  </article>

  `;


}

valgtProdukt.on("value",genererHTML);
