const express = require('express')
const router = express.Router()
const Alien = require('../modules/blog-models')


router.get('/', async(req,res) => {
    try{
           const aliens = await Alien.find()
           res.json(aliens)
    }catch(err){
        res.send({'Error':err})
    }
})

router.get('/:id', async(req,res) => {
    try{
           const alien = await Alien.findById(req.params.id)
           res.json(alien)
    }catch(err){
        res.send({'Error':err})
    }
})


router.post('/', async(req,res) => {
    const alien = new Alien({
        blogID: req.body.blogID,
        uniqueID: req.body.uniqueID,
        title: req.body.title,
        auther: req.body.auther,
        desc: req.body.desc,
        markdown: req.body.markdown
    })
    try{
        const a1 =  await alien.save() 
        res.json(a1)
    }catch(err){
        res.send({'Error':err})
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const alien = await Alien.findById(req.params.id) 
        alien.auther = req.body.auther
        const a1 = await alien.save()
        res.json(a1)   
    }catch(err){
        res.send({'Error':err})
    }

})

module.exports = router