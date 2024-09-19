export interface AddProduct {
    sku: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    stockNecessary: boolean;
    limitPerOrder: number;
    pictureUrl: string;
}