
const express = require('express');
const router = express.Router();
const contact = require('../models/contacts');
//retriving contacts
router.get('/contacts',(req,res,next)=>{
//res.send('Rerive the contact list');
contact.find(function(err,contacts){
    res.json(contacts);
})

});
//add contact
router.post('/contacts',(req,res,next)=>{
let newContact=new contact({
first_name:req.body.first_name,
last_name: req.body.last.name,
phone:req.body.phone

});
newContact.save((err, contact)=>{
if(err)
{
    res.json({msg:'Failed to add contact'});
}
else {

res.json({msg :'contact added succesfully'});
    }
})
    //loginc to add contact
});
//delete contact
router.delete('/contact/:id',(req,res,next)=>{

    ///logic for delete
    contact.remove({
        _id:req.params.id},function(err,result){
            if(err)
            {
                res.json(err);
            }
            else
            {
            res.json(resulst);
            }
        });
});
module.exports = router;