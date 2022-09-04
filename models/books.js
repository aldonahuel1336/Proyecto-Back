const {request} = require('../db/request')

module.exports.allBooks = async () => {
    const data = await request ("SELECT * FROM books")
     return {
        books: data
    }
}

module.exports.bookById = async (id) => {
    const data = await request (`SELECT * FROM books WHERE id = ${id}`)

    return {
        books: data [0]
    }
}


module.exports.createBook = async ({name, stock, publish_date, disponible}) => { 
const data = await request (`INSERT INTO books (name,stock, publish_date, disponible) VALUES("${name}", ${stock}, "${publish_date}", ${disponible})`)
return {
    id: data.insertId,
    name,
  }
}


module.exports.updateBook = async ({id, name, stock, publish_date, disponible})=>{
    const data = await request(`UPDATE books SET name ='${name}', stock =${stock},publis_date'${publish_date}', disponible =${disponible} WHERE id =${id}`)
return{
    id,
    name,
    publish_date,
    disponible,
    updated: data.affectedRows ?  true : false
}
}

module.exports.deleteBook = async (id) => {
    const data = await request(`DELETE FROM books WHERE id = ${id}`)
    
    return{
        id,
        deleted: data.affectedRows ? true : false,
        msg: 'libro eliminado'
    }
}
