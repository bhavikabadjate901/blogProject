const express=require('express')
const router=express.Router()
const {blogRegistration}=require("../modules/blog-models")

router.post('/registration',async(req,res)=>{

    // const {error}=validateblog_Registration(req.body)
    // if (error) return res.status(400).send(`Bad Request ${error}`)
    
    // let data= blogRegistration({
    //     blogID:req.body.blogID,
    //     uniqueID:req.body.uniqueID,
    //     title:req.body.title,
    //     desc:req.body.desc,
    //     markdown:req.body.markdown,
    //     photo:req.body.photo,
    //     auther:req.body.auther,
    //     createdAt:req.body.createdAt,
    // })
    
    // data= await data.save();
    // res.json({"message":"Blog Created!!!",
    //             "status":"200"
    // })

        const newPost = new blogRegistration(req.body);
        try {
            const savedPost = await newPost.save();
            res.status(200).json(savedPost);
        } catch (err) {
            res.status(500).json(err);
        }
})


router.get('/viewAllBlogs',async(req,res)=>{
	try{
	   const posts=await blogRegistration.find();
	   res.json(posts);
	}catch(err){
		res.json({message:err});
	}
});

router.get('/viewBlog/:blogID',async(req,res)=>{
	try{
	   const posts=await blogRegistration.findOne({blogID:req.params.blogID});
	   res.json(posts);
	}catch(err){
		res.json({message:err});
	}
});

router.put('/editBlog/:blogID',async(req,res)=>{
        const { error }= validateblog_updateRegistration(req.body)
        if(error) return res.status(400).send(`Bad Request ${error}`)
    
        const temp=await blogRegistration.findOneAndUpdate({blogID:req.params.blogID},
            {$set:req.body},{new:true});
        if(!temp) return res.status(400).send(`bad Request ${num} not found`);
    
        res.json({"message":"successfully update!!!",
        "status":"200"
        })
    

})

router.delete('/delete/:blogID',async(req,res)=>{
	try{
	 const posts = await blogRegistration.remove({blogID:req.params.blogID});
	 res.json("Post deleted sucessfully!!!!");
	}catch(err){
		res.json({message:err});
	}

    // try {
    //     const post = await Post.findById(req.params.id);
    //     if (post.username === req.body.username) {
    //       try {
    //         await post.delete();
    //         res.status(200).json("Post has been deleted...");
    //       } catch (err) {
    //         res.status(500).json(err);
    //       }
    //     } else {
    //       res.status(401).json("You can delete only your post!");
    //     }
    //   } catch (err) {
    //     res.status(500).json(err);
    //   }


});

module.exports=router


