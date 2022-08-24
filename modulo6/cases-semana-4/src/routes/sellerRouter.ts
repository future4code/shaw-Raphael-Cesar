import express from 'express'
import IdGenerator from '../services/IdGenerator'
import HashManager from '../services/HashManager'
import Authenticator from '../services/Authenticator'
import SellerDatabase from '../data/SellerDatabase'
import SellerController from '../controller/SellerController'
import SellerBusiness from '../business/SellerBusiness'

const sellerBusiness = new SellerBusiness(
    new IdGenerator(),
    new HashManager(),
    new Authenticator(),
    new SellerDatabase()
)
const sellerController = new SellerController(
    sellerBusiness
)

export const sellerRouter = express.Router()

sellerRouter.post("/signUp", sellerController.signUp)
sellerRouter.post("/signIn", sellerController.signIn)