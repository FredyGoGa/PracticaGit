//*el escope va desde afuera hacia adentro

let t = 3

//las llaves separan el scope
{

    let t = 7
    console.log(t);
}

console.log(t)
//resultado : 7 y 3