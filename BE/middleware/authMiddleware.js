module.exports = {
    checkRole: (allowedRole) => {
        return (req, res, next) => {
            const role = req.body.payload.role;
            if(allowedRole.includes(role)) {
                next();
            } else {
                res.status(403).json({
                    error: 'you do not have permission to access this data'
                });
            }
        }
    },
    checkAccess: (req, res, next) => {
        console.log('body ', req.body);

        const payload = req.body.payload;
        if(payload.role === 'director') {
            next();
        }

        if(payload.role === 'manager' || payload.role === 'employee') {
            const filter = {
                $or: [
                    {warehouse: req.body.warehouse},
                    {office: req.body.office}
                ]
            }
            account.find(filter)
                .then((results) => {
                    if(results._id != payload._id) {
                        return res.json({
                            error: "you do not have permission to access this data"
                        });
                    } else {
                        next();
                    }
                })
                .catch((error) => {
                    return res.json({
                        error: error
                    });
                });
        }
    }
}

//accessCheck -> 
// if director -> 
// if manager -> 
// if employee ->