import Book from '../../models/Book.js'
let allBooks = async (req,res,next)=>{

    try {
        let all = await Book.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export default allBooks