export interface AddProductInterface {
    sku: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    stockNecessary: boolean;
    limitPerOrder: number;
    pictureUrl: string;
}