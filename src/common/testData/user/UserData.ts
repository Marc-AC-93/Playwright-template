export class UserData {
    constructor(
        public email: string,
        public confirmEmail: string= email,
        public name: string= 'Name',
        public lastName: string= 'Last Name',
        public password: string='Qa123456',
        public year: string= '2000',
        public month: string= '12',
        public day: string= '12') {
    }
}