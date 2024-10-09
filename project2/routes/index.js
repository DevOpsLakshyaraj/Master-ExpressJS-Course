const { Router } = require('express');
const { Urls } = require('../models/urls.model');

const router = Router();

router.get('/', async (req, res) => {
    const urls = await Urls.find();
    res.render('index', {
        title: 'Home - iUrl',
        urls,
        base_url: req.protocol + "://" + req.headers.host
    });
})
router.get('/visit/:shortID', async (req, res) => {
    const obj = await Urls.findOne({
        shortID: req.params.shortID
    });
    res.redirect(obj.url);
})

router.get('/edit/:id', async (req, res) => {
    const obj = await Urls.findById(req.params.id);
    res.render('edit', {
        title: 'Edit Your URL - iUrl',
        obj,
        base_url: req.protocol + "://" + req.headers.host
    });
})

router.get('/delete/:id', async (req, res) => {
    const obj = await Urls.findById(req.params.id);
    res.render('delete', {
        title: 'Delete Your URL - iUrl',
        obj,
        base_url: req.protocol + "://" + req.headers.host
    });
})

module.exports = router;