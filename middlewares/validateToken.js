import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import User from "../models/User.js";

export default passport.use(
    //la estrastegia recibe dos parametros, la configuracion  y la fuincion que va ejecutar
    new Strategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET,
            //algorithms: ["HS256"],
            //ignoreExpiration: false,
            //passReqToCallback: true,
        },
        async (jwtPayload, done) => {
            try {

                let user = await User.findOne({email: jwtPayload.email, online: true});
                if(user){
                    return done(null, user); //retortna el usuario porque si lo encontro, sin error --> te dejo pasar
                }else{
                    return done(null,null); //retorna null porque no lo encontro, sin error --> no te dejo pasar
                }
            } catch (error) {
                return done(error, false);
                
            }
        }
        //jwtPayload es el payload que se le pasa al token
        //done es una funcion que se llama cuando se termina la validacion
        //done(null, jwtPayload) si la validacion es correcta
        //done(null, false) si la validacion es incorrecta
    )
)