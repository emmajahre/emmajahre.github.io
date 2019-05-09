  const main = document.querySelector("main");
  const db = firebase.database();
  const genser = db.ref("varer/genser");
  const topper = db.ref("varer/topper");
  const bukser = db.ref("varer/bukser");
  const skjort = db.ref("varer/skjørt");
  const kjoler = db.ref("varer/kjole");
  const nav = document.getElementById("bildeserie")
  const OverNav = document.getElementById("forsideTekst")


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
setTimeout(showSlides, 2000);
}

  function VisVarer (snapshot){
    let varer = snapshot.val();
    let key = snapshot.key;
    let parent = snapshot.ref.parent.key;

    main.innerHTML +=`
      <a class="produkt" href="produktdetaljer.html?id=${key}&parent=${parent}">
      <article>
          <h1>${varer.navn}</h1>
          <img src="bilder/${varer.bilde}" alt="">
          <p> ${varer.type}, ${varer.stoff}</p>
          <p>${varer.pris} kr </p>
      </article>
      </a>
    `
  }

  function VisForside (snapshot){
    let varer = snapshot.val();
    let key = snapshot.key;
    let parent = snapshot.ref.parent.key;

    main.innerHTML +=`
      <a class="produkterForside" href="produktdetaljer.html?id=${key}&parent=${parent}">
      <article>
          <img src="bilder/${varer.bilde}" alt="">
          <p> ${varer.navn}</p>
      </article>
      </a>
  `
}

  function VisGensere() {
      main.innerHTML="Vi har gensere i en hver smak! Store strikkegensere eller tynne vårgensere!" ;
      nav.innerHTML="";
      OverNav.innerHTML="";
      genser.on("child_added",VisVarer);
  }

  function VisTopper() {
      main.innerHTML="Vi har både den allvenlige hverdagsblusen og toppen du trenger til fest! Her er det mange farger å velge mellom!" ;
      nav.innerHTML="";
      OverNav.innerHTML="";
      topper.on("child_added",VisVarer);
  }

  function VisBukser() {
      main.innerHTML="Vi har alle buksene du trenger! De kule dressbuksene til jobb og silkebuksene til fest. Vi har også et stort utvalg av jeans!" ;
      nav.innerHTML="";
      OverNav.innerHTML="";
      bukser.on("child_added",VisVarer);
  }

  function VisSkjort() {
      main.innerHTML="Nå er våren her og det er tiden for sukkersøte skjørt igjen! Vi har både avslappede og festlige skjørt! " ;
      nav.innerHTML="";
      OverNav.innerHTML="";
      skjort.on("child_added",VisVarer);
  }

  function VisKjoler() {
      main.innerHTML="Skal du på ball? Eller må kaste på no lett når du skal til stranda? Vi har enhver kjole du trenger og ønsker deg!" ;
      nav.innerHTML="";
      OverNav.innerHTML="";
      kjoler.on("child_added",VisVarer);
  }



  /*FILTER PÅ GENSERE*/
  function VisGKnit() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    genser
          .orderByChild("type")
          .equalTo("knit")
          .on("child_added",VisVarer);
  }

  function VisGGenser() {
    main.innerHTML="";
    nav.innerHTML="";
    genser
          .orderByChild("type")
          .equalTo("genser")
          .on("child_added",VisVarer);
  }
  function VisGHoodie() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    genser
          .orderByChild("type")
          .equalTo("hoodie")
          .on("child_added",VisVarer);
  }

  function VisGHvit() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    genser
          .orderByChild("farge1")
          .equalTo("hvit")
          .on("child_added",VisVarer);
    genser
        .orderByChild("farge2")
        .equalTo("hvit")
        .on("child_added",VisVarer);
  }

  function VisGGrå() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    genser
          .orderByChild("farge1")
          .equalTo("grå")
          .on("child_added",VisVarer);
    genser
        .orderByChild("farge2")
        .equalTo("grå")
        .on("child_added",VisVarer);
  }
  function VisGSort() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    genser
          .orderByChild("farge1")
          .equalTo("sort")
          .on("child_added",VisVarer);
    genser
        .orderByChild("farge2")
        .equalTo("sort")
        .on("child_added",VisVarer);
  }

  function VisGBlå() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    genser
          .orderByChild("farge1")
          .equalTo("blå")
          .on("child_added",VisVarer);
    genser
        .orderByChild("farge2")
        .equalTo("blå")
        .on("child_added",VisVarer);
  }
  function VisGGrønn() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    genser
          .orderByChild("farge1")
          .equalTo("grønn")
          .on("child_added",VisVarer);
    genser
        .orderByChild("farge2")
        .equalTo("grønn")
        .on("child_added",VisVarer);
  }

  function VisGGul() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    genser
          .orderByChild("farge1")
          .equalTo("gul")
          .on("child_added",VisVarer);
    genser
        .orderByChild("farge2")
        .equalTo("gul")
        .on("child_added",VisVarer);
  }
  function VisGRød() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    genser
          .orderByChild("farge1")
          .equalTo("rød")
          .on("child_added",VisVarer);
    genser
        .orderByChild("farge2")
        .equalTo("rød")
        .on("child_added",VisVarer);
  }

  function VisGLilla() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    genser
          .orderByChild("farge1")
          .equalTo("lilla")
          .on("child_added",VisVarer);
    genser
        .orderByChild("farge2")
        .equalTo("lilla")
        .on("child_added",VisVarer);
  }
  function VisGRosa() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    genser
          .orderByChild("farge1")
          .equalTo("rosa")
          .on("child_added",VisVarer);
    genser
        .orderByChild("farge2")
        .equalTo("rosa")
        .on("child_added",VisVarer);
  }
  function VisGFest() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    genser
          .orderByChild("anledning")
          .equalTo("fest")
          .on("child_added",VisVarer);
  }

  function VisGHverdag() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    genser
          .orderByChild("anledning")
          .equalTo("hverdag")
          .on("child_added",VisVarer);
  }

  /*FILTER PÅ TOPPER*/
  function VisTBluse() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    topper
          .orderByChild("type")
          .equalTo("bluse")
          .on("child_added",VisVarer);
  }

  function VisTSinglet() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    topper
          .orderByChild("type")
          .equalTo("singlet")
          .on("child_added",VisVarer);
  }
  function VisTTskjorte() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    topper
          .orderByChild("type")
          .equalTo("tskjorte")
          .on("child_added",VisVarer);
  }

  function VisTHvit() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    topper
          .orderByChild("farge1")
          .equalTo("hvit")
          .on("child_added",VisVarer);
    topper
        .orderByChild("farge2")
        .equalTo("hvit")
        .on("child_added",VisVarer);
  }
  function VisTSort() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    topper
          .orderByChild("farge1")
          .equalTo("sort")
          .on("child_added",VisVarer);
    topper
        .orderByChild("farge2")
        .equalTo("sort")
        .on("child_added",VisVarer);
  }

  function VisTBlå() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    topper
          .orderByChild("farge1")
          .equalTo("blå")
          .on("child_added",VisVarer);
    topper
        .orderByChild("farge2")
        .equalTo("blå")
        .on("child_added",VisVarer);
  }
  function VisTGrønn() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    topper
          .orderByChild("farge1")
          .equalTo("grønn")
          .on("child_added",VisVarer);
    topper
        .orderByChild("farge2")
        .equalTo("grønn")
        .on("child_added",VisVarer);
  }
  function VisTRød() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    topper
          .orderByChild("farge1")
          .equalTo("rød")
          .on("child_added",VisVarer);
    topper
        .orderByChild("farge2")
        .equalTo("rød")
        .on("child_added",VisVarer);
  }

  function VisTRosa() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    topper
          .orderByChild("farge1")
          .equalTo("rosa")
          .on("child_added",VisVarer);
    topper
        .orderByChild("farge2")
        .equalTo("rosa")
        .on("child_added",VisVarer);
  }
  function VisTFest() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    topper
          .orderByChild("anledning")
          .equalTo("fest")
          .on("child_added",VisVarer);
  }

  function VisTHverdag() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    topper
          .orderByChild("anledning")
          .equalTo("hverdag")
          .on("child_added",VisVarer);
  }
  /*FILTER PÅ BUKSER*/
  function VisBJeans() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    bukser
          .orderByChild("type")
          .equalTo("jeans")
          .on("child_added",VisVarer);
  }

  function VisBBukse() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    bukser
          .orderByChild("type")
          .equalTo("bukse")
          .on("child_added",VisVarer);
  }

  function VisBHvit() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    bukser
          .orderByChild("farge1")
          .equalTo("hvit")
          .on("child_added",VisVarer);
    bukser
        .orderByChild("farge2")
        .equalTo("hvit")
        .on("child_added",VisVarer);
  }
  function VisBSort() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    bukser
          .orderByChild("farge1")
          .equalTo("sort")
          .on("child_added",VisVarer);
    bukser
        .orderByChild("farge2")
        .equalTo("sort")
        .on("child_added",VisVarer);
  }

  function VisBBlå() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    bukser
          .orderByChild("farge1")
          .equalTo("blå")
          .on("child_added",VisVarer);
    bukser
        .orderByChild("farge2")
        .equalTo("blå")
        .on("child_added",VisVarer);
  }
  function VisBGrønn() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    bukser
          .orderByChild("farge1")
          .equalTo("grønn")
          .on("child_added",VisVarer);
    bukser
        .orderByChild("farge2")
        .equalTo("grønn")
        .on("child_added",VisVarer);
  }
  function VisBRød() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    bukser
          .orderByChild("farge1")
          .equalTo("rød")
          .on("child_added",VisVarer);
    bukser
        .orderByChild("farge2")
        .equalTo("rød")
        .on("child_added",VisVarer);
  }

  function VisBRosa() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    bukser
          .orderByChild("farge1")
          .equalTo("rosa")
          .on("child_added",VisVarer);
    bukser
        .orderByChild("farge2")
        .equalTo("rosa")
        .on("child_added",VisVarer);
  }
  function VisBFest() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    bukser
          .orderByChild("anledning")
          .equalTo("fest")
          .on("child_added",VisVarer);
  }

  function VisBHverdag() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    bukser
          .orderByChild("anledning")
          .equalTo("hverdag")
          .on("child_added",VisVarer);
  }

  /*FILTER PÅ SKJØRT*/
  function VisSKortskjort() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    skjort
          .orderByChild("type")
          .equalTo("kortskjørt")
          .on("child_added",VisVarer);
  }

  function VisSMaxiskjort() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    skjort
          .orderByChild("type")
          .equalTo("maxiskjørt")
          .on("child_added",VisVarer);
  }

  function VisSHvit() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    skjort
          .orderByChild("farge1")
          .equalTo("hvit")
          .on("child_added",VisVarer);
    skjort
        .orderByChild("farge2")
        .equalTo("hvit")
        .on("child_added",VisVarer);
  }

  function VisSSort() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    skjort
          .orderByChild("farge1")
          .equalTo("sort")
          .on("child_added",VisVarer);
    skjort
        .orderByChild("farge2")
        .equalTo("sort")
        .on("child_added",VisVarer);
  }

  function VisSBlå() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    skjort
          .orderByChild("farge1")
          .equalTo("blå")
          .on("child_added",VisVarer);
    skjort
        .orderByChild("farge2")
        .equalTo("blå")
        .on("child_added",VisVarer);
  }
  function VisSGrønn() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    skjort
          .orderByChild("farge1")
          .equalTo("grønn")
          .on("child_added",VisVarer);
    skjort
        .orderByChild("farge2")
        .equalTo("grønn")
        .on("child_added",VisVarer);
  }

  function VisSGul() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    skjort
          .orderByChild("farge1")
          .equalTo("gul")
          .on("child_added",VisVarer);
    skjort
        .orderByChild("farge2")
        .equalTo("gul")
        .on("child_added",VisVarer);
  }
  function VisSRød() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    skjort
          .orderByChild("farge1")
          .equalTo("rød")
          .on("child_added",VisVarer);
    skjort
        .orderByChild("farge2")
        .equalTo("rød")
        .on("child_added",VisVarer);
  }

  function VisSRosa() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    skjort
          .orderByChild("farge1")
          .equalTo("rosa")
          .on("child_added",VisVarer);
    skjort
        .orderByChild("farge2")
        .equalTo("rosa")
        .on("child_added",VisVarer);
  }
  function VisSFest() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    skjort
          .orderByChild("anledning")
          .equalTo("fest")
          .on("child_added",VisVarer);
  }

  function VisSHverdag() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    skjort
          .orderByChild("anledning")
          .equalTo("hverdag")
          .on("child_added",VisVarer);
  }


  /*FILTER PÅ KJOLER*/
  function VisKKortkjole() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    kjoler
          .orderByChild("type")
          .equalTo("kortkjole")
          .on("child_added",VisVarer);
  }

  function VisKMaxikjole() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    kjoler
          .orderByChild("type")
          .equalTo("maxikjole")
          .on("child_added",VisVarer);
  }

  function VisKHvit() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    kjoler
          .orderByChild("farge1")
          .equalTo("hvit")
          .on("child_added",VisVarer);
    kjoler
        .orderByChild("farge2")
        .equalTo("hvit")
        .on("child_added",VisVarer);
  }

  function VisKSort() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    kjoler
          .orderByChild("farge1")
          .equalTo("sort")
          .on("child_added",VisVarer);
    kjoler
        .orderByChild("farge2")
        .equalTo("sort")
        .on("child_added",VisVarer);
  }

  function VisKBlå() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    kjoler
          .orderByChild("farge1")
          .equalTo("blå")
          .on("child_added",VisVarer);
    kjoler
        .orderByChild("farge2")
        .equalTo("blå")
        .on("child_added",VisVarer);
  }
  function VisKGrønn() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    kjoler
          .orderByChild("farge1")
          .equalTo("grønn")
          .on("child_added",VisVarer);
    kjoler
        .orderByChild("farge2")
        .equalTo("grønn")
        .on("child_added",VisVarer);
  }

  function VisKGul() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    kjoler
          .orderByChild("farge1")
          .equalTo("gul")
          .on("child_added",VisVarer);
    kjoler
        .orderByChild("farge2")
        .equalTo("gul")
        .on("child_added",VisVarer);
  }

  function VisKRosa() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    kjoler
          .orderByChild("farge1")
          .equalTo("rosa")
          .on("child_added",VisVarer);
    kjoler
        .orderByChild("farge2")
        .equalTo("rosa")
        .on("child_added",VisVarer);
  }
  function VisKFest() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    kjoler
          .orderByChild("anledning")
          .equalTo("fest")
          .on("child_added",VisVarer);
  }

  function VisKHverdag() {
    main.innerHTML="";
    nav.innerHTML="";
    OverNav.innerHTML="";
    kjoler
          .orderByChild("anledning")
          .equalTo("hverdag")
          .on("child_added",VisVarer);
  }

  function visVår() {
    nav.innerHTML="";
    OverNav.innerHTML="";
    main.innerHTML="";
    genser
      .orderByChild("sesong")
      .equalTo("spring19")
      .on("child_added",VisVarer);
    topper
      .orderByChild("sesong")
      .equalTo("spring19")
      .on("child_added",VisVarer);
    bukser
      .orderByChild("sesong")
      .equalTo("spring19")
      .on("child_added",VisVarer);
    skjort
      .orderByChild("sesong")
      .equalTo("spring19")
      .on("child_added",VisVarer);
    kjoler
      .orderByChild("sesong")
      .equalTo("spring19")
      .on("child_added",VisVarer);
  }

  function vis4utvalgte() {
    skjort
          .orderByChild("navn")
          .equalTo("Astrids sommer")
          .on("child_added",VisForside);
    genser
          .orderByChild("navn")
          .equalTo("Cabin")
          .on("child_added",VisForside);
    bukser
          .orderByChild("navn")
          .equalTo("Trøkk")
          .on("child_added",VisForside);
    kjoler
          .orderByChild("navn")
          .equalTo("Forelska")
          .on("child_added",VisForside);
  }

  vis4utvalgte();
