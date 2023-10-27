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
    for (let i = 0; i < users.length; i++){
        street.push(users[i].adress.street)
    }
    return street;
}

console.log(getUsersStreets(users));


function getOldPeople(users){
    let oldPeople = []
    for (let i = 0; i < users.length; i++){
        if (users[i].age > 60){
            oldPeople.push(users[i])
        }
    }
    return oldPeople;
}

console.log(getOldPeople(users));