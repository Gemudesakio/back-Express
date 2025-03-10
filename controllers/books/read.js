import Book from '../../models/Book.js'
let allBooks = async (req,res)=>{

    try {
        let all = await Book.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
        
    }
}

export default allBooks