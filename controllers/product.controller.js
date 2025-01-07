const products=require('../models/product.model.js')
const express = require('express')
const app = express()
app.use(express.json())

const getProducts=async(req,res)=>{
    try {
        const Products=await products.find({})
        res.status(200).json(Products)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const getOneProduct=async(req,res)=>{
    try {
        const {id}=req.params
        const Products=await products.findById(id)
        res.status(200).json(Products)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const addProduct=async (req,res)=>{
    try {
        const product=await products.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const updateProduct=async (req,res)=>{
    try {
        const {id}=req.params
        const product=await products.findByIdAndUpdate(id,req.body)
        if(!product){
            res.status(404).json({message:"product not found!"})
        }
        const updatedProduct=await products.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const deleteProduct=async(req,res)=>{
    try {
        const {id}=req.params
        const product=await products.findByIdAndDelete(id)
        if(!product){
            res.status(404).json({message:"product not found!"})
        }
        res.status(200).json({message:"product deleted successfully"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports={
    getProducts,
    getOneProduct,
    addProduct,
    updateProduct,
    deleteProduct
}