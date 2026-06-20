export interface Bike {
    id: string;
    model: string;
    type: string;
    rentalPricePerHour: number;
    imageUrl: string;
}

export interface RentalOption {
    bike: Bike;
    durationInHours: number;
    totalPrice: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
}