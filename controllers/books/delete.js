import Book from '../../models/Book.js'
let deleteMany =async (req,res,next)=>{
    try {
        let infoBook = req.body
        let destroyed = await Book.deleteMany(
            {publicationYear: infoBook.publicationYear}
        ) 
        return res.status(200).json({
            success:true,
            response:destroyed
        })
    } catch (error) {
        next(error)
    }

}
export default deleteMany