import Book from "../../models/Book.js"

let create = async (req, res, next)=>{
    try {
       let bookData=req.body
       let newBook = await Book.insertMany(bookData)
       return res.status(201).json({
         response: newBook
       })
        
    } catch (error) {
        next(error)
        
    }
}
export default create