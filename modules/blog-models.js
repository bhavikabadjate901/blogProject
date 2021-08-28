const Joi=require('joi')
const mongoose=require('mongoose')


const blogRegistration=mongoose.model('blogRegistration',new mongoose.Schema({
    blogID: {
        type: String,
        required: false,
        unique: true,
    },

    uniqueID: {
        type: String,
        required: false,
    },

    title: {
        type: String,
        required: false,
        unique: true,
    },
    
    desc : {
        type: String,
        required: false,
    },

    markdown: {
        type: String,
        required: false,
    },

    photo: {
        type: String,
        required: false,
    },
      
    auther: {
        type: String,
        required: false,
    },
      
    createdAt: {
        type: String,
        required: false,
        },
      
    },
    { timestamps: true }
))


// function validateblog_Registration(obj){

    // const schema={
    //     blogID:Joi.string().min(1).max(5000).required(),
    //     uniqueID:Joi.string().min(1).max(5000).required(),
    //     title:Joi.string().min(1).max(5000).required(),
    //     desc:Joi.string().min(1).max(5000),
    //     markdown:Joi.string().min(1).max(5000).required(),
    //     photo:Joi.string().min(1).max(5000).required(),
    //     auther:Joi.string().min(1).max(5000).required(),
    //     createdAt:Joi.string().min(1).max(5000),
    // }
    // return Joi.validate(obj ,schema);
// }

// function validateblog_updateRegistration(obj){
//     const schema={
//         title:Joi.string().min(1).max(5000).required(),
//         desc:Joi.string().min(1).max(5000),
//         markdown:Joi.string().min(1).max(5000),
//         photo:Joi.string().min(1).max(5000),
//         createdAt:Joi.string().min(1).max(5000),
//     }
//     return Joi.validate(obj,schema);
// }

exports.blogRegistration=blogRegistration
// exports.validateblog_Registration=validateblog_Registration
// exports.validateblog_updateRegistration=validateblog_updateRegistration
// module.exports = mongoose.model("Post", blogRegistration);