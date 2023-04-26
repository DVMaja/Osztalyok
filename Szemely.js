class Szemely{
    /**Az osztály egy sablon amivel Személyeket hozhatunk létre */

    //javascriptben csak 1db konstruktor van
    constructor(nev, szulDatum){
        /**a konstruktórban beállítjuk az adattagokat */
        this.nev = nev;
        this.szulDatum =  szulDatum;
        /**this az a konkrét osztálypéldányra mutat , azaza a konkrét  */
    }

}

export default Szemely;