const Contact = require('../models/contact');
const NewJob = require('../models/newJob');
const Admin = require('../models/admin');
const Product = require('../models/product');
const Blog = require('../models/blog');
const Job = require('../models/job'); //Store the data of applied job
const Logo = require('../models/logo');

module.exports.contact = async (req, res) => {
    const input = req.body;

    try {
        await Contact.create(input);
      
        return res.status(200).json({
          message: 'Contact Saved.'
        });
    } catch (error) {
        return res.status(401).json({
          message: `Error in saving a contact -> ${error.message}`
        });
    }
}

module.exports.jobApplication = (req, res) => {
    const input = req.body;

    res.send("Job Application");
}

module.exports.newBlog = (req, res) => {
    const input = req.body;

    res.send("Blog!");
}

module.exports.newJobPost = async (req, res) => {
    const input = req.body;

    try {
        await NewJob.create(input);
      
        return res.status(200).json({
          message: 'New Job Created.'
        });
    } catch (error) {
        return res.status(401).json({
          message: `Error in creating new job -> ${error.message}`
        });
    }
}

module.exports.AllJob = async (req, res) => {
    const input = req.body;

    try {
        const data = await NewJob.find({});
      
        return res.status(200).json({
          data
        });
    } catch (error) {
        return res.status(401).json({
          message: `Error in geteing the new job data -> ${error.message}`
        });
    }
}

module.exports.adminRegister = async (req, res) => {
    const input = req.body;
    console.log("input", input);

    try {
        await Admin.create(input);
      
        return res.status(200).json({
            message: 'Admin Created.'
          });
    } catch (error) {
          return res.status(401).json({
            message: `Error in creating Admin -> ${error.message}`
          });
    }
}

module.exports.adminLogin = async (req, res) =>{
    const input = req.body;

    try{
        const user = await Admin.find({email: input.email, password: input.password});
        console.log("user", user);
        if(user.length>0){
            return res.status(200).json({
                login: true
              });
        }
        return res.status(200).json({
            login: false
          });
    }catch(error) {
        return res.status(401).json({
            message: `Error in loging Admin -> ${error.message}`
          });
    }
}

module.exports.addProduct = async (req, res) => {
  const input = req.body;
  
  try{
    await Product.create(input);
      
    return res.status(200).json({
      message: 'New product Created.'
    });
  }catch{
    return res.status(401).json({
      message: `Error in saving product -> ${error.message}`
    });
  }
}


module.exports.AllProduct = async (req, res) => {

  try {
      const data = await Product.find({});
    
      return res.status(200).json({
        data
      });
  } catch (error) {
      return res.status(401).json({
        message: `Error in getting the product data -> ${error.message}`
      });
  }
}

module.exports.addBlog = async (req, res) => {
  const input = req.body;
  
  try{
    await Blog.create(input);
      
    return res.status(200).json({
      message: 'New blog Created.'
    });
  }catch{
    return res.status(401).json({
      message: `Error in saving blog -> ${error.message}`
    });
  }
}


module.exports.AllBlog = async (req, res) => {

  try {
      const data = await Blog.find({});
    
      return res.status(200).json({
        data
      });
  } catch (error) {
      return res.status(401).json({
        message: `Error in getting the blog data -> ${error.message}`
      });
  }
}


module.exports.applyJob = async (req, res) => {
  const input = req.body;

  try{
    await Job.create(input);
      
    return res.status(200).json({
      message: 'Job applied.'
    });
  }catch{
    return res.status(401).json({
      message: `Error in applying job -> ${error.message}`
    });
  }
}

module.exports.addLogo = async (req, res) => {
  const input = req.body;
  
  try{
    await Logo.create(input);
      
    return res.status(200).json({
      message: 'New Logo Created.'
    });
  }catch{
    return res.status(401).json({
      message: `Error in saving Logo -> ${error.message}`
    });
  }
}

module.exports.AllLogo = async (req, res) => {

  try {
      const data = await Logo.find({});
    
      return res.status(200).json({
        data
      });
  } catch (error) {
      return res.status(401).json({
        message: `Error in getting the blog data -> ${error.message}`
      });
  }
}