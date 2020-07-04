var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
console.log('Name Let', nameLet);

const nameConst = 'Haudiboy';
console.log('Name Const', nameConst);

function getPetName(){
    let petName='Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

//Block scopin
var fullName = 'Andrew Mead';
let firstName;
if(fullName){
    firstName= fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);