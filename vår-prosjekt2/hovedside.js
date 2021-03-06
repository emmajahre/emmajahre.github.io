  const main = document.querySelector("main");
  const db = firebase.database();
  const genser = db.ref("varer/genser");
  const topper = db.ref("varer/topper");
  const bukser = db.ref("varer/bukser");
  const skjort = db.ref("varer/skjørt");
  const kjoler = db.ref("varer/kjole");

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
