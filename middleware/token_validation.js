const { verify } = require('jsonwebtoken');

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("Authorization");
        if(token) {
            token = token.slice(7);
            verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
                if(err) {
                    res.json({
                        success: 0,
                        message: "invalid token"
                    });
                } else {
                    req.body.payload = decoded;
                    next();
                }
            })
        } else {
            res.json({
                success: 0,
                message: "access denied! unauthorize user"
            });
        }
    }
}