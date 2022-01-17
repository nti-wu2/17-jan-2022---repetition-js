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


dicegame.init();