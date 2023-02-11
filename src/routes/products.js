// ************ Require's ************
const express = require('express');
const { uploadImageProduct } = require('../../../../../class/mod-5-express/class-49/uploadManager19/middlewares/upload');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');
//************* Multer ****************/
const {uploadProductImage} = require('../middlewares/upload')


/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', productsController.create); 
router.post('/', uploadProductImage.single('image') ,productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id/', productsController.edit); 
router.put('/edit/:id', uploadProductImage.single('image') , productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
