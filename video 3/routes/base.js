const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
    // console.log(req.baseUrl)
    console.log(req.cookies);
    console.log(req.cookies['name']);
    
    // if (req.cookies['accessToken']) {
    //     res.send('blog page');
    // } else {
    //     res.status(401).json({message: 'Unauthorized!'})
    // }
    // res.send('blog page');
    // res.type('.html')
    res.sendFile('templates/index.html', {root: '.'})
})

module.exports = router;