let bandNumber = 1

const takeNumber = function (band) {
    return `${bandNumber++}. ${band}`;
}

const scum = takeNumber("Galactic Scum")
console.log(scum)

const under = takeNumber("Underdogs")
console.log(under);

const jimmy = takeNumber("Jimmy Band")
console.log(jimmy);

const dave = takeNumber("Dave Band")
console.log(dave);