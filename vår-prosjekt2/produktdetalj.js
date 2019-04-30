const main = document.querySelector("main")

var url_string = window.location.href;
var url = new URL (url_string);
var id = url.searchParams.get("id");

const db = firebase.database();
const infoGenser = db.ref("varer/genserer/" + id);
const infoTopper = db.ref("varer/topper/" + id);
const infoBukser = db.ref("varer/bukser/" + id);
const infoSkjort = db.ref("varer/skjørt/" + id);
const infoKjoler = db.ref("varer/kjoler/" + id);

function genererHTML(snapshot){
  let varer = snapshot.val();
  main.innerHTML = `
    <p>${varer.navn}</p>

  `;

}

if (id.charAt(0) === "g") {
    infoGenser.on("value",genererHTML)
  } else if (id.charAt(0) === "t") {
    infoTopper.on("value",genererHTMLL)
  } else if (id.charAt(0) === "b") {
    infoBukser.on("value",genererHTMLLL)
  } else if (id.charAt(0) === "s") {
    infoSkjort.on("value",genererHTMLLLL)
  } else if (id.charAt(0) === "k") {
    infoKjoler.on("value",genererHTMLLLL)
  }
