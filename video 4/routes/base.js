const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.sendFile('templates/index.html', {root: '.'})
})

module.exports = router;