// SNACK 1

// 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal Snack.

const biciclette=[ 

    {
        nome:"trek",
        peso: 7
    },
    {
        nome:'Atala',
        peso: 10
    },
    {
        nome:"Cannondale",
        peso: 6
    },
    {
        nome:"Bianchini",
        peso: 8
    }

]
console.log(biciclette);

let biciLeggera = biciclette[0];

for(let i=0; i<biciclette.length; i++){
    let thisbici= biciclette[i];

    if(thisbici.peso < biciLeggera.peso){
        biciLeggera= thisbici;
    }
}

console.log(biciLeggera);

// destrutturo per mettere i miei valori in 'variabili':

const{nome, peso}= biciLeggera;

// e stampo la mia bici più leggera

const stampaBici =`
    <ul>
        <li>La tua bici più leggera è: </li>
        <li> Nome Bici: ${nome}</li>
        <li> ed ha un peso di: ${peso} kg.</li>
    </ul>
`
document.getElementById('bici').innerHTML= stampaBici;

// ---------------------------------------------------------------------------------------------------------------------------

// SNACK 2:

// 2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//  Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
//  Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
