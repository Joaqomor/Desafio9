import { faker } from "@faker-js/faker"
import {productsModel} from '../models/products.model.js';

export default class MockManager {

    async getMockingProducts() {
        try {
            const mockingProducts = [];
            for (let i = 0; i < 100; i++) {
                const product = await productsModel.create({
                    title: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    thumbnail: faker.image.imageUrl(),
                    code: faker.random.alphaNumeric(6),
                    stock: faker.random.numeric(),
                    category: faker.commerce.department()
                })
                mockingProducts.push(product)
            }
            return mockingProducts
        } catch (error) {
            console.log(error)
        }
    }
}
