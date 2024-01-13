export default class GetUserData {
  constructor() {
    this._data = JSON.parse(localStorage.getItem("user"))
  }

  getSedes() {
    return this._data.sede
  }

  getSedeActive() {
    return this.getSedes().find(e => e.id == parseInt(localStorage.getItem("sede")))
  }
}
