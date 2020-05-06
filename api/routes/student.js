const Product=require('../../models/product-model')

module.exports=function (router){
    router.get('/product',function (req,res){
        Product.find({},function (err,product){
            if(err){
                res.json({status:'failure',message:err})
            }
            else{ 
                if(!product){
                    res.json({status:'failure',message:'no product found'})
                }
                else{
                    res.json({status:'success',product:product})
                }
            }
        })
    })
    router.post('/product',function(req,res){
        let data=new Product(req.body)
        data.save(function (err,data){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(data)
        })
    })
    router.put('/product',(req,res)=>{
        if(!req.body._id){
            res.json({status:'failure',message:'No id provided'})
        }
        else{
            Product.findOne({_id:req.body._id},(err,product)=>{
                if(err){
                    res.json({status:'failure',message:'Not a valid id'})
                }
                else{
                    product.productName=req.body.productName
                    product.productDescription=req.body.productDescription
                    product.productPrice=req.body.productPrice
                    product.manufactureDate=req.body.manufactureDate
                    product.expiryDate=req.body.expiryDate
                    product.barcode=req.body.barcode

                    product.save((err)=>{
                        if(err){
                            res.json({status:'failure',message:err})
                        }
                        else{
                            res.json({status:'success',message:'product is updated'})
                        }
                    })
                }
            })
        }
    })
    router.delete('/product/:id',(req,res)=>{
        if(!req.params.id){
            res.json({status:'failure',message:'No id provided'})
        }
        else{
            Product.findOne({_id:req.params.id},(err,product)=>{
                if(err){
                    res.json({status:'failure',message:'Not a valid id'})
                }
                else{
                    product.remove((err)=>{
                        if(err){
                            res.json({status:'failure',message:err})
                        }
                        else{
                            res.json({status:'success',message:'product Deleted'})
                        }
                    })
                }
            })
        }
    })

}