import { Component } from 'react';
import { Hotel } from '../../model/model';
import { DataService } from '../../services/DataService';
import { HotelComponent } from './HotelComponent';

interface HotelsState {
    hotels: Hotel[]
}

interface HotelsProps {
    dataService: DataService
}

export class Hotels extends Component<HotelsProps, HotelsState> {

    constructor(props: HotelsProps) {
        super(props)
        this.state = {
            hotels: []
        }
        this.reserveHotel = this.reserveHotel.bind(this);
    }

    async componentDidMount() {
        const hotels = await this.props.dataService.getHotels();
        this.setState({
            hotels: hotels
        });
    }

    private async reserveHotel(hotelId: string) { }

    private renderHotels() {
        const rows: any[] = []
        for (const hotel of this.state.hotels) {
            rows.push(
                <HotelComponent
                    location={hotel.location}
                    name={hotel.name}
                    hotelId={hotel.hotelId}
                    reserveHotel={this.reserveHotel}
                />
            )
        }

        return rows;
    }

    render() {
        return (
            <div>
                <h2>Welcome to the Hotels page!</h2>
                {this.renderHotels()}
            </div>
        )
    }


} 