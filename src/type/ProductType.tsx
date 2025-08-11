interface Variation {
    color: string;
    colorCode: string;
    colorImage: string;
    image: string;
}

export interface ProductType {
    id: string,
    category: string,
    type: string,
    name: string,
    gender: string,
    new: boolean, // donot need this 
    sale: boolean, // donot need this 
    rate: number, // i dont need this too 
    price: number, // i dont need this 
    originPrice: number, // donot need this 
    brand: string, // donot need this 
    sold: number, // donot need this
    quantity: number, // donot need this
    quantityPurchase: number, // donot need this
    sizes: Array<string>, // donot need this
    variation: Variation[], // donot need this
    thumbImage: Array<string>,
    images: Array<string>,
  description: string | string[]; // ← allow both
    action: string,
    slug: string
}