module.exports = {
    checkRole: (allowedRole) => {
        return (req, res, next) => {
            const role = req.account.role;
            if(allowedRole.include(role)) {
                next();
            } else {
                res.status(403).json({
                    error: 'you do not have permission to access this data'
                });
            }
        }
    },
    checkAccess: () => {
        
    }
}

//accessCheck -> 
// if director -> 
// if manager -> 
// if employee ->