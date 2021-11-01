import { IUser, User } from '../models/users'
export default {
    Query: {
        async login(_: any, args: any, context: any) {
            console.log(args,'........')
        }
    },
    Mutation: {
        async register(_: any, args: any, context: any) {
            const user: IUser = new User({
                email: 'bill@microsoft.com',
                name: 'Bill',
                password: 'Gates'
              });
            let userdata =  await user.save();
            return userdata
        }
    },
  };