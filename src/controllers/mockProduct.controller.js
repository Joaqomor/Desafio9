import MockManager from "../mockingProducts/mockingProducts.js";

const mockManager = new MockManager();

export const getMockingProducts = async (req, res) => {
    try {   
        const mockingProducts = await mockManager.getMockingProducts();
        if (mockingProducts) {
         res.json({ message: 'false products', results: mockingProducts })

        }
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}