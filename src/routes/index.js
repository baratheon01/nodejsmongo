const express = require('express');
const router = express.Router();
const Task= require('../models/task');

router.get('/', async (req, res) =>{
    const tasks =await Task.find();
res.render('index',{
    tasks
});
});
router.post('/add', async (req, res) =>{
const tazk = new Task(req.body);
await tazk.save();
res.redirect('/');
});
router.get('/rent/:id', async (req, res)=>{
    const {id} = req.params;
    const tasks = await Task.findById(id);
    tasks.status =!tasks.status;
    await tasks.save();
    res.redirect('/');
});
router.get('/update/:id', async (req, res)=>{
    const {id} = req.params;
    const tasks = await Task.findById(id);
    res.render('update',{
        tasks
    });
});
router.post('/update/:id', async (req, res)=>{
    const {id} = req.params;
    await Task.update({_id:id}, req.body);
    res.redirect('/');
});
router.get('/delete/:id', async (req, res)=>{
const {id} = req.params;
await Task.remove({_id: id});
res.redirect('/');
});
module.exports = router;