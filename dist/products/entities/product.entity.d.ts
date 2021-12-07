import { BaseEntity } from 'typeorm';
export declare class Product extends BaseEntity {
    id: string;
    updatedAt?: Date;
    imageUrl: string;
    description: string;
    valueInitial: number;
    valueDiscount: number;
}
