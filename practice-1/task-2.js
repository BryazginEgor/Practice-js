const users = [
    {
        id: 1,
        name: "Igor",
        age: 61,
    },
    {
        id: 2,
        name: "Aleksandr",
        age: 61,
    },{
        id: 3,
        name: "Aleksei",
        age: 22,
    }
]

function sleep(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, seconds)
    })
}

async function getUser(id) {
    await sleep(2000)
    return users.find(user => user.id === id)
}  

getUser(2).then((user) => {console.log(user)})

function loadUsersSequentially(userIds) {
    const userPromises = userIds.map(userId => getUser(userId));
    return userPromises.reduce((chain, userPromise) => {
      return chain.then(results => {
        return userPromise.then(user => {
          results.push(user);
          return results;
        });
      });
    }, Promise.resolve([]));
  }
  
  function loadUsersInParallel(userIds) {
    const userPromises = userIds.map(userId => getUser(userId));
    return Promise.all(userPromises);
  }
  
  // Example usage of loadUsersSequentially()
  loadUsersSequentially([1, 2])
    .then(users => {
      console.log(users);
    })
    .catch(error => {
      console.log(error);
    });
  
  // Example usage of loadUsersInParallel()
  loadUsersInParallel([1, 2])
    .then(users => {
      console.log(users);
    })
    .catch(error => {
      console.log(error);
    });
