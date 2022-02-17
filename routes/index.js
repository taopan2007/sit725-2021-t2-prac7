const express = require("express")
const router = express.Router()

const Controller = require("../controllers")

router.post("/bookReq", (req, res) => {
    Controller.book.addNewBooking(req.body, res)
})

router.get("/bookList", (req, res) => {
    console.log('----')
    Controller.book.getBookListContent(res)
})

router.get("/init", (req, res) => {
    console.log('---> router recv: init')
    Controller.page.getInitContent(res)
})

module.exports = router