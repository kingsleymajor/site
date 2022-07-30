//for in loop
var  myArray = ["mango","orange","quava","pear","lemon","tangeline","water lemon","cucumber"]
for(i in myArray){
    if (myArray[i].length <= 5){
        console.log(myArray[i], '=', myArray[i].length);
    }
}
myArray.push("berry")
myArray[0]="orange";
console.log(myArray)


//redeclearing var variable
var a =9 
var a= 10
console.log(a)

//while loop
var i= 2;
while(i<10000){
    console.log(i);
    i *= 2;
}

//class,method and objects
class person{
    constructor(color,height,name,sex){
         this.color=color;
         this.height=height;
         this.name=name;
         this.sex=sex;
    }
    call(){
        console.log("my name is: ", this.name, "\ni am:",this.color, "in complexion", "\ni am:", this.height, "meters tall");
    }
}

var major = new person("black","1.8","nedu",);
major.call();


const myArray=["rice","beans","potato","okro","melon","banana","casava","orange"]
for (let i in myArray){
    console.log('\n',i.length)
}
var a = myArray.length
console.log(a)

//fereinheit to celcius
let toCelcius=function(fereinheit){
    return  (fereinheit + " degree fereinheit = " + (5/9 * (fereinheit-32)) + " degree celcius");
}

console.log(toCelcius(-40));

// class animal{
//     name=String
//     color=String
//     age=Number

//     bark(){
//         return (this.name + ' is'+ ' barking wow! wow! wow!')
//      }
// }

// const dog = new animal();
// dog.age= 'nm';
// dog.color= 8
// dog.name = 'bingo'

// console.log(dog.bark())

//quadratic equation
function quad(a,b,c){

    return [((-(b)+(b**2-(4*a*c))**(1/2))/(2*a)),(-(b)-(b**2-(4*a*c))**(1/2))/(2*a)];  
    
}

console.log(quad(1,2,-5));

//objects and methods
const major={
    name : 'nedu',
    color : 'dark',
    height : '180cm',
    walk : function(){
        return (this.name + ' is walking fast')
    }
}

console.log (major.walk())

//for of loop
let cars = ['volvo','bmw','jeep','honda'];
for(x of cars){
    if(x.length>=4)
    console.log('\n',x + ' has '+ x.length + ' letters')
}
    
//class inheritance
class phone{
    constructor(brand,model){
        this.make=brand;
        this.features=model;}

    Present(){
        return "i have " + this.make+ " phone of " + this.features + " model, " ;
    }
    }


class info extends phone{
    constructor(brand,model,price){
        super(brand,model);
        this.price=price;}

    Show(){
        return this.Present() + ' it costs '+ this.price;
    }
    }


let ekwe = new info('Nokia','C1','#50,000');

console.log(ekwe.Show());

class house{
    constructor(kind,color){
        this.kind = kind;
        this.color = color;
    }
    desc(){
        return "This house is a "+ this.kind+',' + " It's "+ this.color +" in color";
    }
}
    
class location extends house{
    constructor(kind,color,place){
        super(kind,color);
        this.place=place;
    }
    desc1(){
        return this.desc()+" and it's located in "+ this.place;
    }
}

let house1 = new location('bungalow','pink','ikeja');
document.getElementById('demo').innerHTML=house1.$desc()
document.write(house1.desc1())
module.exports.location= this.desc1()

//getters and setters
//getter
class location{
    constructor(place){
        this._spot=place;
    }
    get spot(){
        return this._spot;
    }
}
var myPlace = new location('Enugu')
console.log(myPlace.spot)

//setter
class location{
    constructor(place){
        this._spot=place;
    }
    set spot(place){
        this._spot= x;
    }
}
let myPlace = new location('Enugu');
myPlace.spot = 'awka';
console.log(myPlace.spot);

//callback functios
function add(a,callback){
    console.log(a +' is a number');
    callback();
}

function callMe(){
    console.log('i am a callback function')
}

add(6,callMe)

//call() method
const person= {
    firstName: "major",
    lastName: "Aniakor",
    fullName: function(){
        return this.firstName+ " " + this.lastName
    }
}

const person1={
    firstName:"Nedu",
    lastName: "Kings"
}
console.log(person.fullName());
let fullName=person.fullName.bind(person1);
console.log(fullName)

//regex
let text = 'find major in this';
let n= text.search('this');
console.log(n);

//case sensiive serch
let text1 = 'find major here';
let n1 = text1.search(/Here/i);
console.log(n1)

//replace
let text2= 'visit lagos';
let n2 = text2.replace(/lagos/i,'Anambra');
console.log(n2)

//test method(returns true or false)
let pattern = /e/;
let n3= pattern.test('we are here');
console.log(n3)

//exec method(returns search as object)
let pattern2 = /e/g; //g means global search
let n4=pattern2.exec('we are here');
console.log(n4);

//switch statement
const a= 'major';
switch(a){
    case 'nedu':
        console.log('name is nedu');
        break;
    case 'major':
        console.log('name is major');
        break;
    case 'kings':
        console.log('name is kings');
        break;
    default:
        console.log('no case found!')
}

date/day()
const day = (Date().getDay);
console.log(day)

//SET
const letter = new Set([1,2,3,4,5,6]);
letter.add(7);//adds new elements
letter.delete();//removes an element
letter.has()//checks if an element is contained in a set
letter.forEach(7);//invokes callback for each element in aset
letter.values(7);//returns an iterator with all elements in a set
letter.size//returns number of elements in a set