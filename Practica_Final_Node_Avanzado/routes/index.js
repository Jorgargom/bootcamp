'use strict';

let express = require('express');
let router = express.Router();
let request = require('request');


let tags = require('../config/configAPI').tags

const defaultLimitArt = 6; //Definimos por defecto el limite de elementos a mostrar.

/* GET home page. */

router.get('/', function (req, res) {

  var page = (!req.query.page) ? 1 : parseInt(req.query.page);
  var limit = (!req.query.limit) ? defaultLimitArt : parseInt(req.query.limit); 
  var skip = page > 0 ? ((page - 1) * limit) : 0;

  var filters = '';

  if (req.query.tags) filters += '&tags=' + req.query.tags;
  if (req.query.venta) filters += '&venta=' + req.query.venta;
  if (req.query.nombre) filters += '&nombre=' + req.query.nombre;
  if (req.query.precio) filters += '&precio=' + req.query.precio;

  //var lang = req.cookies.lang;


  let url = req.protocol+'://'+req.get('host')+'/apiv1/anuncios?skip=' + skip + '&limit=' + limit + '&' + filters;

  request(url, function (err, resp, body) {

    body = JSON.parse(body);

    if (body.success) {

      if (body.rows) {

        var totalPage = Math.ceil(body.totalRecords / limit);


        res.render('index', {

          anuncios: body.rows,
          totalPage: totalPage,
          page: page,
          filters: filters
        });

      } else {

        res.render('error', {

          error: __('ARTICLE_NOT_FOUND')
        });

      }

    } else {

      res.render('error', {

        error: __(body.error)
      });
    }

  });
});




module.exports = router;