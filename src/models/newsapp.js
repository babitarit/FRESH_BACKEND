const express = require('express');
const mongoose = require('mongoose');


//defining schema
const newsappSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
   author: {
        type: String,
        required: true,
   },
   content: {
        type: String,
        required: true,

   },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    urlToImage: {
        type: String,
        required: true,
    },
    publishedAt: {
        type: String,
        required: true,
    },
});


const Newsapp = new mongoose.model('Newsapp', newsappSchema);

module.exports = Newsapp;