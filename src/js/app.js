import Validator from './Validator';

const userName = 'Angry_Hunter-309k';

const userNameValidator = new Validator(userName);

userNameValidator.validateUsername();
