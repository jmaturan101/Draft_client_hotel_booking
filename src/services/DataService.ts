import { Hotel } from "../model/model";

export class DataService {

    public async getHotels(): Promise<Hotel[]> {
        const result: Hotel[] = []
        result.push({
            location: 'China',
            name: 'China Buffet',
            hotelId: '123'
        });
        result.push({
            location: 'North Korea',
            name: 'Nuclear Bomb',
            hotelId: '124'
        });
        result.push({
            location: 'Russia',
            name: 'Comrad',
            hotelId: '125'
        });
        return result;
    }
} 
