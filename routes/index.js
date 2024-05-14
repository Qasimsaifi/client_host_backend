const express = require('express');
const router = express.Router();
const userData = require('../controller/userData');
const multer  = require('multer');
const path = require('path');

router.use(express.json());
router.use(express.urlencoded({extended:false}));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/') // uploads is the folder where uploaded files will be stored
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname) // Rename uploaded files if needed
    }
});

const upload = multer({ storage: storage });

router.get('/test', function(req, res){
    res.send("Server is running!");
});

router.post('/contact', userData.contact);
router.post('/jobApplication', userData.jobApplication);
router.get('/allJob', userData.AllJob);
router.post('/newBlog', userData.newBlog);
router.post('/newJobPost', userData.newJobPost);
router.post('/adminRegister', userData.adminRegister);
router.post('/adminLogin', userData.adminLogin);
// Set up your routes
router.post('/upload', upload.single('file'), (req, res) => {
    // Handle the file upload
    const fileName = req.file.filename;
    return res.status(200).json({
        fileName
      });
  });

router.post('/addProduct', userData.addProduct);
router.get('/allProduct', userData.AllProduct);
router.post('/addBlog', userData.addBlog);
router.get('/allBlog', userData.AllBlog);
router.post('/applyJob', userData.applyJob);
router.post('/addLogo', userData.addLogo);
router.get('/allLogo', userData.AllLogo);


module.exports = router;