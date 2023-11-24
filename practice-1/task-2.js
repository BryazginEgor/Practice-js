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
    return sleep(2000).then(() => {
      return users.find(user => user.id === id)
    })
}  

getUser(2).then((user) => {console.log(user)})

const loadUsersSquentially = async (ID_list) => {
  const t0 = Date.now();
  let loadedUsers = [];
  for(let i = 0; i < ID_list.length; i++){
    loadedUsers.push(await getUser(ID_list[i]));
  }
  
  console.log('Список пользователей:');
  loadedUsers.forEach(user => console.log(user))

  return loadedUsers;
}


const loadUsersInParallel = async (ID_list) => {
  const t1 = Date.now();
  const promises = ID_list.map(x => getUser(x))
  const loadedUsers = await Promise.all(promises);
  
  console.log('Список пользователей:');
  loadedUsers.forEach(element => element.getInfo())
  return loadedUsers;
}


loadUsersSquentially([1,2])