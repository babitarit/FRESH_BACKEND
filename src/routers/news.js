const express = require('express');
const router = require('express').Router();
const newsapp = require('../models/newsapp');



//handling post request
router.post('/newsapp', async (req, res) => {
    try{
        const addingNewsappRecords = new newsapp(req.body);
        console.log(req.body);
       
        const insertNewsapp = await addingNewsappRecords.save();
        res.status(201).send(insertNewsapp);
        

    }catch(e){
        res.send(e);
    }
});


//handling get request
router.get('/newsapp', async (req, res) => {
    try{
        const getNewsapp = await newsapp.find({});
        res.send(getNewsapp);

    }catch(e){
        res.status(400).send(e);

    }
});

//handling get request of individual
router.get('/newsapp/:id', async (req, res) => {
    try{
        const _id = req.params.id;
        const getNewsapp = await newsapp.findById(_id);
        res.send(getNewsapp);
    }catch(e){
        res.status(400).send(e);
    }
})

//handling patch request
router.patch('/newsapp/:id', async (req, res) => {
    try{
        const _id = req.params.id;
        const getNewsapp = await newsapp.findByIdAndUpdate(_id,req.body);
        res.send(getNewsapp);
    }catch(e){
            res.status(500).send(e);}
})

//handling delete request
router.delete('/newsapp/:id', async (req, res) => {
    try{
        const _id = req.params.id;
        const getNewsapp = await newsapp.findByIdAndDelete(_id);
        res.send(getNewsapp);
    }catch(e){
            res.status(500).send(e);}
})

module.exports = router;
