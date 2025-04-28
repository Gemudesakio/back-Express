const error_handler = (error,req,res,next)=>{
    console.log(error);
    
    return res.status(500).json({
        success: false,
        message: `algo no ha salido bien en tu  peticion ${req.method} con la direccion ${req.url}`,
        error: error.message             
    
       } )
}
export default error_handler