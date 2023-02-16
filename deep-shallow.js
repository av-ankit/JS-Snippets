const arr = Array.from(Array(26)).map((ele, key) => key + 65);
const alphabets = arr.map((x) => String.fromCharCode(x));
alphabets

// object
const object1 = {
    name:'krishna',
    designation: 'supreme lord',
    city: {
        street:'goloka',
        gali:{
            entryFor:'bhakts',
            whoCanEnter:'everyone'
        }
    }
}

// object-ASSIGN object
var objectAssign = Object.assign({},object1)
// var objectAssign = object1
console.log(objectAssign)

// spread - object
var objectSpread = {...object1}
console.log(objectSpread)

// assign change
objectAssign.name = 'Ram'
console.log(objectAssign.name)
console.log(object1.name)
object1


// -----------------Deep copying''

var objectDeep = JSON.parse(JSON.stringify(object1))

objectDeep.city.gali.entryFor = 'log'
console.log(objectDeep.city.gali.entryFor)
console.log(object1.city.gali.entryFor)

objectDeep
object1
objectAssign

