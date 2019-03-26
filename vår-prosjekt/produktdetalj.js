let bildecontainer = document.querySelector("#bildecontainer")
let sykdom = document.querySelector("#sykdom")

var url_string = window.location.href;
var url = new URL (url_string);
var id = url.searchParams.get("id");

let db = firebase.database();
let sykdomhund = db.ref("Dyr/Hunder/" + id);
let sykdomkatt = db.ref("Dyr/Katter/" + id);

function genererHTML(snapshot){
  let dyr = snapshot.val();
  console.log(snapshot.val())

  bildecontainer.innerHTML = `
    <img src=$(dyr.Bilde)>
  `;

  sykdom.innerHTML=`
  <p>Navn: $(dyr.Navn)</p>
  <p>Journal: $(dyr.sykdom)</p>
  `;
}

if (id.charAt(0) === "H"){
  sykdomhund.on("value", genererHTML);
}

else if(id.charAt(0) === "K"){
  sykdomkatt.on("value",genererHTML);
}
