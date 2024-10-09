const { Router } = require('express');
const { Urls } = require('../models/urls.model');

const router = Router();

router.get('/', async (req, res) => {
    const urls = await Urls.find();
    res.json(urls);
})

router.post('/new', async (req, res) => {
    const { url } = req.body;
    const new_url = Urls({
        url: url
    });
    await new_url.save();
    // res.json({
    //     message: 'URL has been shortened!'
    // })
    res.redirect('/')
})

router.post('/update', async (req, res) => {
    const { id, url } = req.body;
    await Urls.findByIdAndUpdate(id, {
        $set: { url: url }
    })
    // const updated_url = await Urls.findById(id);
    // res.json({
    //     message: 'URL has been updated!'
    // })
    res.redirect('/')
})

router.post('/delete', async (req, res) => {
    const { id } = req.body;
    await Urls.findByIdAndDelete(id)
    // res.json({
    //     message: 'URL has been deleted!'
    // })
    res.redirect('/')
})

module.exports = router;