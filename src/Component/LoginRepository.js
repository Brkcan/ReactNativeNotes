import {SampleTextInput} from './SampleTextInput';

class UserInfo {
    constructor(email, password) {
        this._email = email
        this._password = password
    }
    get email () {return this._email}
    get password () {return this._password}
}

let users = [
    new UserInfo('Burak@gmail.com', '1234'),
    new UserInfo('Damla@gmail.com', '12212'),
    new UserInfo('S', 'S'),
    new UserInfo('A', 'A')
]

  const  exists = (email, password) => {
        return users.findIndex(ui => ui.email == email && ui.password == password) != -1
    }
  const  save = (email, password) => {
        if(exists(email, password))
            return false

        return users.push(new UserInfo(email, password))
    }

export {exists, save}
