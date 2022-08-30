const cats = ["Milo", "Otis", "Garfield"]
const catsNew = []
const newCats = []
const lessCats = []
const catsLess = []

function destructivelyAppendCat (name) {
    cats.push(name);
    return cats
}

function destructivelyPrependCat (name) {
    cats.unshift(name);
    return cats
}

function destructivelyRemoveLastCat () {
    cats.pop()
    return cats
}

function destructivelyRemoveFirstCat () {
    cats.shift()
    return cats
}

function appendCat(name) {
    let catsNew = [...cats, name]
    return catsNew
}

function prependCat(name) {
    let newCats = [name, ...cats]
    return newCats
}

function removeLastCat() {
    let lessCats = cats.slice(0,2)
    return lessCats
}

function removeFirstCat() {
    let catsLess = cats.slice(1)
    return catsLess
}