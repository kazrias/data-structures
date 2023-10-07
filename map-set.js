class Users {
  #users = new Map()
  constructor(usersArr) {
    Users.#add.call(this, usersArr)
  }
  addUsers(users) {
    Users.#add.call(this, users)
  }
  getUserById(id) {
    return this.users.get(id)
  }
  get users() {
    return this.#users
  }
  static #add(users) {
    for (let obj of users) {
      this.users.set(obj.id, obj)
    }
  }
}

const mappedUser = new Users([
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
]);
mappedUser.addUsers([{ id: 3, name: "Ann", email: "ann@example.com" }]); 
console.log(mappedUser.users);
console.log(mappedUser.getUserById(3));