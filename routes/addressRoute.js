const {Router}=require('express');
const { getAddress, saveAddress, deleteAddress, updateAddress } = require('../controller/addressController');
const router=Router();

router.get('/',getAddress)
router.post('/save',saveAddress)
router.post('/delete',deleteAddress)
router.post('/update',updateAddress)
module.exports=router;