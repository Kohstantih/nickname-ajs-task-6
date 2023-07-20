export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    return /^[^-_\d]([A-Za-z\-_][\d]{0,3})*[^-_\d]$/.test(this.userName);
  }
}
