import jwt from 'jsonwebtoken';

export default (req, res, next) => {
     try {
        
        const token = jwt.sign(
            {
                email: req.user.email,
                role: req.user.role
            },
            process.env.JWT_SECRET,
            //se puede crerar tambien ucolocando el tiempo enb segundos 60*60*24 --> para un dia en segundos 
            {
                expiresIn: '1h'
            }
        )
        req.token = token
        next()
     } catch (error) {
        next(error)
     }
}