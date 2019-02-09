let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


let favT= require('../models/favourite');
router.get('/',(req,res,next)=>{
favT.find((err,favList) => {
//console.log(contactList);
if(err){
    return console.error(err);
}
else{
    console.log(favList);
    res.render('favourite/index',{
        title:'FAVOURITE LIST',
        favList: favList
    });
}
})
});

module.exports = router;