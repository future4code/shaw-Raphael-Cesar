import express from 'express'
import ProductBussiness from '../business/ProductBusiness'
import ProductController from '../controller/ProductController'
import ProductDatabase from '../data/ProductDatabase'
import IdGenerator from '../services/IdGenerator'

const productBusiness = new ProductBussiness(
    new IdGenerator(),
    new ProductDatabase()
)

const productController = new ProductController(
    productBusiness
)

export const productRouter = express.Router()

productRouter.post("/register", productController.createProduct)
productRouter.get("/details/:searchParam", productController.getProductDetails)