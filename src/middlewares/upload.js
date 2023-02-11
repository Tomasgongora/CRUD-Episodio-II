const multer = require('multer');
const path = require('path');


const storeProductImage = multer.diskStorage({
    destination : function (req, file, callback){
        callback(null, 'public/images/products')
    },
    filename : function (req, file, callback){
        callback(null, `${Date.now()}_product${path.extname(file.originalname)}`)
    }
});

const uploadProductImage = multer({
    storage : storeProductImage
});

module.exports = {
    uploadProductImage
}