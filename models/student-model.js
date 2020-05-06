const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    productName:{type:String},
    productDescription:{type:String},
    productPrice:{type:String},
    manufactureDate:{type:Date},
    expiryDate:{type:Date},
    barcode:{type:String}
})

module.exports=mongoose.model('product',productSchema)