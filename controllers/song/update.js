import Song from "../../models/Song.js";

//update con metodo updateOne
let update = async (req,res, next)=>{
    try {
        let songInfo = req.body
        console.log(songInfo);
        let updateSong = await Song.updateOne(
            {title: songInfo.title}, //condiciones de busqueda
            {duration: songInfo.duration} //modificaciones
        )
        return res.status(201).json({
            response: updateSong
        })
        
    } catch (error) {
        next(error)
    }
}

let findUpdateID =async (req,res,next)=>{
    try {
        let search = req.params.id
        let infoSong = req.body
        let updateSong =await Song.findByIdAndUpdate(
            search, //se pasa directamente el id, no se lo pasa como clave valor
            {year: infoSong.year},
            {new: true}
        )
        if (updateSong) {
            return res.status(201).json({
                success: true,
                response:updateSong
            })
        }else {
            return res.status(404).json({ response: 'not found' })
        }  
      
    } catch (error) {
        next(error)
    }

}
export  {update,findUpdateID}