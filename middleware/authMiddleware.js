module.exports = {
    checkRole: (allowedRole) => {
        return (req, res, next) => {
            const role = req.body.role;
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
        console.log(req.body);
        next();
    }
}

//accessCheck -> 
// if director -> 
// if manager -> 
// if employee ->