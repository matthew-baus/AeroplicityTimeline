import { Deserializeable } from './deserializeable.model'

export class Product{
    Markup: number
    Date: Date | null
    Quantity: number
    Price: number
    Company: string

    deserialize(input: any): this {
        Object.assign(this, input)
        return this
    }
}

export class Products implements Deserializeable{
    public Products : Product[]

    deserialize(input: any): this{
        Object.assign(this,input)
        this.Products = []
        input.products.foreach(input => {
            this.Products.push(new Product().deserialize(input))
        })
        return this
    }
}