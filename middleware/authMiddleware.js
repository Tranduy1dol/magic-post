module.exports = {
    checkRole: (allowedRole) => {
        return (req, res, next) => {
            const role = req.account.role;
            if(allowedRole.include(role)) {
                next();
            } else {
                res.status(403).json({
                    error: 'you dont have permission to accsess this data'
                });
            }
        }
    }
}