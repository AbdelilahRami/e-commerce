type Item = {
    id: number;
    description: string | null;
    price: number;
}


export class Cart {
    items: Item[];
    totalPrice: number
    empty: boolean;

    constructor(items: Item[], totalPrice: number) {
        this.items = items || [];
        this.totalPrice = totalPrice || 0;
        this.empty = (this.totalPrice ==0) && (this.items ==[])
    }

    addProduct(product: Item) : Cart{
        this.items.push(product)
        this.totalPrice += product.price;
        this.empty= false;
        return this;
    }
}

