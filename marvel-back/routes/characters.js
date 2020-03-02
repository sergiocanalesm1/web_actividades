var express = require("express");
var router = express.Router();
var json = `{
    {
        "id": 1,
        "description":"la descripcion",
        "thumbnail":{
            "path" : "image path",
            "extension": "jpg"
        },
        "otra":1
    },{
        "id": 2,
        "description":"la descripcion 2",
        "thumbnail":{
            "path" : "image path 2",
            "extension": "jpg 2"
        },
        "otra":2
    }
}`;
/*
router.get('/',function(req,res,next) {
    //console.log('router characters');
    res.send(json);
});*/ 
const axios = require('axios');
const url = "http://gateway.marvel.com/v1/public/characters?ts=3&apikey=3019f66588507982e994e44537eb77eb&hash=2a94b0610a4504e68aca2c817a42bac7";
router.get('/', function(req, res) {
    console.log('hola');
  });
module.exports = router;