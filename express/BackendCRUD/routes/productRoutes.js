import express from 'express'
import upload from '../middleware/upload.js'
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/ProductController.js'
const router = express.Router()
router.post('/' , upload.single('productImage'), createProduct)
router.get('/' , getProducts)
router.put('/:id' , upload.single('productImage') ,updateProduct)
router.delete('/:id' , deleteProduct)
export default router