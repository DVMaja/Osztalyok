import Szemely from "./Szemely.js";

$(function () {
    console.log("Hello World!");

    /**példányosítás azaz a sablon alapján egy konkrét objektum létrehozása */

    const SzuloElem = $('.tarolo');

    const szemely1 = new Szemely("Béla", 1969, SzuloElem)
    //console.log(szemely1);
    //console.log(szemely1.nev);
    //console.log(szemely1.szulDatum);
    szemely1.pontszam=12;
    //console.log(szemely1.pontszam);
    /**JS-ben futásidőben tudom módsítani az adattagokat! A JAVA nem ilyen */
    
    const szemely2 = new Szemely("Mucika", 1931, SzuloElem)
    /**JAvascriptben az azonos osztályból példányosított elemek nem biztos , hogy 
     * ugyanazokkal a tulajdonságokkal rendelkeznek
     */

    //console.log(szemely2.nev);
    szemely2.nev = "Jolán";
    //.log(szemely2.nev);
    //log("SZületési név: " +szemely2.getSzuletesinev());
    //console.log(szemely2.#szuletesiNev); privát adatagot nem tudok kívűlről elérni    
    //console.log(szemely2.kor());
})