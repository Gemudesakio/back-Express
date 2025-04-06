import Book from "../../models/Book.js";
let update =async (req,res,next)=>{
    try {
        let infoBook = req.body
        let updateBook = await Book.updateOne(
            {title: infoBook.title},
            {publicationYear: infoBook.publicationYear}
        )
        return res.status(201).json({
            success: true,
            response:updateBook
        })
    } catch (error) {
        next(error)
    }
}

export default update