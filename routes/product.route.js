const express=require("express")
const router=express.Router()
const {getProducts,getOneProduct,addProduct,updateProduct,deleteProduct}=require("../controllers/product.controller.js")

router.post('/',addProduct)
router.get('/',getProducts)
router.get('/:id',getOneProduct)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)

module.exports=router;