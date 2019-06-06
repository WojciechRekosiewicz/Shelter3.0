

export interface Advert {
    advertId: number;
    title: string;
    authorId: string;
    reservingId: string;
    shortDescription: string;
    longDescription: string;
    imageUrl: string;
    authorUser?: any;
    reservingUser?: any;
}