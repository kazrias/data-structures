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
