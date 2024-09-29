const m1 = (req, res, next) => {
    if (!req.cookies['name']) {
        return res.status(401).json({message: 'Unauthorized'});
    }
    next();
}

module.exports = m1;