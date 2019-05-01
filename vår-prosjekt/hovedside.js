  const main = document.querySelector("main");
  const db = firebase.database();
  const genser = db.ref("varer/genser");
  const topper = db.ref("varer/topper");
  const bukser = db.ref("varer/bukser");
  const skjort = db.ref("varer/skjørt");
  const kjoler = db.ref("varer/kjole");

  var slideIndex = 0;
showSlides();

function showSlides() {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
setTimeout(showSlides, 2000); // Change image every 2 seconds
}

  function VisVarer (snapshot){
    let varer = snapshot.val();
    let key = snapshot.key;

    main.innerHTML +=`
      <a class="${varer.bilde}" href="produktdetaljer.html?id=${key}">
      <article>
          <h1>${varer.navn}</h1>
          <img src="bilder/${varer.bilde}" alt="">
          <p> ${varer.type}, ${varer.stoff}</p>
      </article>
    `
  }


  function VisGensere() {
      main.innerHTML=" " ;
      genser.on("child_added",VisVarer);
  }

  function VisTopper() {
      main.innerHTML=" " ;
      topper.on("child_added",VisVarer);
  }

  function VisBukser() {
      main.innerHTML=" " ;
      bukser.on("child_added",VisVarer);
  }

  function VisSkjort() {
      main.innerHTML=" " ;
      skjort.on("child_added",VisVarer);
  }

  function VisKjoler() {
      main.innerHTML=" " ;
      kjoler.on("child_added",VisVarer);
  }
