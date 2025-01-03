
const jwt = require('jsonwebtoken');
const JWT_SECRET = "my demo secret !!!";


 const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token){
        res.status(401).send({error:'please enter a valid token'})
    }
    
    try{
        const userdata = jwt.verify(token, JWT_SECRET);
        
        // console.log(userdata)
        req.userFound = userdata.userFound;
        next();
    }
    catch(error){
        res.status(401).send({error:'entered token is not correct'})
    }
}

module.exports = fetchuser;
