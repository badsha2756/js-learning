// create a new object

const myObj ={
    a : 5,
    b : 10,
    c : 15
}
// update and delete keys values
delete myObj.c;
myObj.c=70;
myObj.d=95;
myObj.r=65;
delete myObj.d;

//loop through the object

for(const key in myObj){
    myObj[key]=myObj[key]*2;
}
console.log(myObj);

//get all values of object

const valueArray= Object.values(myObj);
console.log(valueArray);

// get all keys of an object

const keysArray = Object.keys(myObj);
console.log(keysArray);


