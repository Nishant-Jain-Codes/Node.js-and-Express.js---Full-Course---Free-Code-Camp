module.exports.animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
const person = {
    name: `Nishant`,
}
module.exports.nishantPerson = person;
console.log(typeof(animals));
// ReferenceError: animals is not defined
// we are only exporting animals and not defining it