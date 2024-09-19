export interface Room {
    totalRooms: number;
    availableRooms: number;
    bookedrooms: number;
}

export interface RoomList {
    roomNumber: number;
    roomType: string;
    amenities: string;
    price: number;
    photo: string;
    checkInTime: Date;
    checkOutTime: Date;
}