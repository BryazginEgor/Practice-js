// Задание №1

const users = [
    {
        name: "Igor",
        age: 61,
        adress: {
            city: "Moscow",
            street: "Lomonosov",
            house: 11   
        }
    },
    {
        name: "Aleksandr",
        age: 61,
        adress: {
            city: "Saratov",
            street: "Pushkin",
            house: 12
        }
    },{
        name: "Aleksei",
        age: 22,
        adress: {
            city: "Vladivostok",
            street: "Pirat",
            house: 13
        }
    }
]



function getTotalAge(users){
    let totalAge = 0;
    users.map(user => totalAge += user.age)
    return totalAge;
}

console.log(getTotalAge(users));

function getUsersStreets(users){
    let street = [];
    users.map(user => street.push(user.adress.street))
    return street;
}

console.log("УЛИЦЫ")
console.log(getUsersStreets(users));


function getOldPeople(users){
    let oldPeople = []
    users.map(user => oldPeople.push(user))
    return oldPeople;
}

console.log("Возраст 60+")
console.log(getOldPeople(users));