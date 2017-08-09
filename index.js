const express = require('express')
const app = express()
const cfg = require('./config')
const ClientOAuth2 = require('client-oauth2')
const client = new ClientOAuth2(cfg.client);
const util = require('util');

app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index', { cfg: cfg });
})

app.get(cfg.paths.authFlowStart, function (req, res) {
    console.log(cfg.paths.authFlowStart)
    var uri = client.code.getUri()
    res.redirect(uri)
})

app.get(cfg.paths.authFlowCallback, function (req, res) {
    console.log(cfg.paths.authFlowCallback, req.originalUrl)
    client.code.getToken(req.originalUrl)
        .then(function (user) {
            return res.render('token', { user: util.inspect(user) });
        })
        .catch(function (error) {
            return res.render('error', { error: error });
        })
})

app.listen(cfg.port, function () {
    'use strict';
    console.log('\n');
    console.log('+--------------------------');
    console.log(' PID %d', process.pid);
    console.log(' Listening on port', cfg.port);
    console.log('+--------------------------');
});