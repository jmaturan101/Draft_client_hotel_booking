
export interface User {
    userName : String,
    email : String
}
export interface UserAttribute {
    Name: string,
    Value: string
}

export interface Hotel {
    hotelId: string,
    name: string,
    location: string,
    photoUrl?: string,
}