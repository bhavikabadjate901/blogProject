const express = require('express')
const router = express.Router()
const Blog = require('../modules/blog-models')


router.get('/', async(req,res) => {
    try{
           const blogs = await Blog.find()
           res.json(blogs)
    }catch(err){
        res.send({'Error':err})
    }
})

router.get('/:id', async(req,res) => {
    try{
        const blog = await Blog.findById(req.params.id)
        res.json(blog)
    }catch(err){
        res.send({'Error':err})
    }
});


router.post('/', async(req,res) => {
    const blog = new Blog({
        blogID: req.body.blogID,
        uniqueID: req.body.uniqueID,
        title: req.body.title,
        auther: req.body.auther,
        desc: req.body.desc,
        markdown: req.body.markdown
    })
    try{
        const a1 =  await blog.save() 
        res.json(a1)
    }catch(err){
        res.send({'Error':err})
    }
});

router.patch('/:id',async(req,res)=> {
    try{
        const blog = await Blog.findById(req.params.id) 
        blog.auther = req.body.auther
        const a1 = await blog.save()
        res.json(a1)   
    }catch(err){
        res.send({'Error':err})
    }
})

router.delete('/:id',async(req,res)=> {
try {
    const blog = await Blog.findById(req.params.id)
      try {
        await blog.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
  } catch (err) {
    res.status(500).json(err);
  }
});


router.put('/:id',async(req,res)=> {
    try {
        const blog = await Blog.findById(req.params.id);
          try {
            const updatedBlog = await Blog.findByIdAndUpdate(
              req.params.id,
              {
                $set: req.body,
              },
              { new: true }
            );
            res.status(200).json(updatedBlog);
          } catch (err) {
            res.status(500).json(err);
          }
      } catch (err) {
        res.status(500).json(err);
      }
})

module.exports = router