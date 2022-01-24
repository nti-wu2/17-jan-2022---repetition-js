/* DATATYPER  */

let string = `Hello, Im a string`;
let numbers = 1234.892102380;
let boolean = true || false;
let n = null;
let uf = undefined;

/* FUNKTIONER */
function name(name = 'Ann Defeyned') {
    console.log(`Hejsan ${name}, din gamle get!`);
}

function add(num1 = 0, num2 = 0){
    return num1 + num2;
}
let answer = add(12);


/* DATASTRUKTURER */
let fruits = ['kiwi', 'orange', 'pear', 'apple'];
let crazyArr = [true, () => {}, [], {}, 'keso'];

let pear = fruits[0]; // titta i enskilt "fack";
fruits.length // kika längden på arrayen

fruits.push('pineapple', 'melon'); // lägga till i slutet
fruits.pop() // plocka bort sista värdet
let pickedFruit = fruits.splice(3, 1, 'cheese'); // Putta in saker i en en array på en spec position

let num = [1,32,4,56,67,7,678,879,2,345,45,43];

// Filter = filtera fram och returnera saker utifrån ett / fler krav
let b = num.filter(num => num > 20);

// Sortera alfa ( default) alt. num =>>
let c = num.sort((a,b) => a - b);


let dicegame = {
    sides: 6,
    numOfThrows: 1000,
    totalValue: 0,
    stats: [0,0,0,0,0,0,0,0,0,0,0,0],
    throw(){
        return Math.ceil(Math.random()*this.sides);
    },
    init(){

        for(let i=0; i<this.numOfThrows; i++){

            let value1 = this.throw();
            let value2 = this.throw();

            let total = (value1 + value2);
            this.stats[total-2]++;

            this.totalValue += total;

        }
        console.log(this.stats);
    }
};

// for loop 
for(let i = 0; i<num.length; i++ ){

    if(num[i] >= 20 && num[i] <= 100){
      //  document.write(`<p>${num[i]}</p>`);
    } else {
      //  document.write(`<p>${num[i]} är INTE mellan 20 - 100.</p>`);
    }
}

document.querySelector('h1').innerText = 'Hello Johan!';
document.querySelector('h2').style.backgroundColor = 'red';
document.querySelector('h2').remove();

let list = document.querySelectorAll('li');

list.forEach(el => {
    
    el.addEventListener('click', () => {
        console.log(`Du klickade på ${el.innerText}`);
        el.classList.toggle('clicked');
    })

})

let template = `<p>Hejsan hoppsan! Jag är en template string.<p>`;
document.querySelector('body').insertAdjacentHTML('beforeend', template);

document.querySelector('body').innerHTML = '';