class Szemely {
  /**Az osztály egy sablon amivel Személyeket hozhatunk létre */
  #szuletesiNev; //ez egy privát adattag

  //javascriptben csak 1db konstruktor van
  constructor(nev, szulDatum, SzuloElem) {
    /**a konstruktórban beállítjuk az adattagokat */
    this.nev = nev; //publikus adattag, azaz kívűlről eléerhető
    this.szulDatum = szulDatum;
    this.setSzuletesiNev(nev);
    /**this az a konkrét osztálypéldányra mutat , azaza a konkrét objektumra */

    /**megjelenítem az elemet a html oldalon */
    SzuloElem.append(`
    <div class="szemely">
    <h3>${this.#szuletesiNev}</h3>
    <p>${this.kor()}
    </div>
    `);

    /**Elnevezem a html elemet is */
    this.szemelyELEM = $(".szemely:last-child");
    //console.log(this.szemelyELEM);
    console.log(this);//objektum pédányra kel mutatnia [this = objektum pédány]
    

    this.szemelyELEM.on("click", function(){
        console.log(this);/**function esetén a this azt a HTML elemet jelenti, ami a
         kiválasztotta az eseményt event.targetet jelenti*/
    })

    this.szemelyELEM.on("click", () =>{
        console.log(this);/**nyil függvény esetén  a this a konkrét objektumot példányt jelent*/
    })


  }

  /**Privát adatagokat csak ezen keresztűl érhetek el */
  getSzuletesinev() {
    return this.#szuletesiNev;
  }

  //privát adattag ellenőrzött módosítására használjuk
  setSzuletesiNev(ujnev) {
    //a névben ne lehessen szám, nagybetűvel kezdődjön, csakadott nevek közül lehessen választani.
    this.#szuletesiNev = ujnev;
  }

  kor() {
    const d = new Date();
    let year = d.getFullYear();
    let aktualisKor = year - this.szulDatum;

    return aktualisKor;
  }
}

export default Szemely;
