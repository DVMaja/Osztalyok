import Szemely from "./Szemely.js";

$(function () {
    console.log("Hello World!");

    /**példányosítás azaz a sablon alapján egy konkrét objektum létrehozása */
    const szemely1 = new Szemely("Béla", 1969)
    console.log(szemely1);
})