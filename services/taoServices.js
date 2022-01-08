const client = require("../dbConnection")
let pageCollection = null
let bookCollection = null
//const collections ={pageCollection, bookCollection}

const DB_NAME = "project-tao"
const INIT_COLLECTION = "page-content"
const BOOK_COLLECTION = "book-applications"

setTimeout(() => {
    pageCollection = client.mongoClient.db(DB_NAME).collection(INIT_COLLECTION)
    bookCollection = client.mongoClient.db(DB_NAME).collection(BOOK_COLLECTION)
}, 2000);

// init page
const getInitContent = (res) => {
    pageCollection.find().toArray((err, result) => {
        console.log('--> sending init content')
        if(err) {
            throw err
        }
        res.send({result, statusCode: 200})
    })
}

const insertBookingApplication = (data, res) => {
    bookCollection.insertOne(data, (err, result) => {
        console.log('--> new book application added:', result)
        //res.send({result: 200})
        res.sendStatus(204)
    })
}

const getBookingList = (res) => {
    bookCollection.find().toArray((err, result) => {
        if(err) {
            throw err
        }
        res.send(result)
    })
}

module.exports = {
    getInitContent,
    insertBookingApplication,
    getBookingList
}