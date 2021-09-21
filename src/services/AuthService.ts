import { User } from '../model/model';
import { UserAttribute } from '../model/model';

export class AuthService {
    public async login(userName: string, password: string) : Promise<User | undefined> {
        if (userName === 'user' && password === '1234') {
            return {
                userName: userName,
                email: 'user@example.com'
            }
        } else {
            return undefined
        }
    }

    public async getUserAttributes(user: User):Promise<UserAttribute[]>{
        const result: UserAttribute[] = [];
        result.push({
            Name: 'Location',
            Value: 'Cayman Islands!'
        });
        result.push({
            Name: 'Ratings',
            Value: '5 Star'
        });
        result.push({
            Name: 'Availabiliy ',
            Value: '7'
        });
        result.push({
            Name: 'Price',
            Value: '$1000'
        });
        return result
    }
} 