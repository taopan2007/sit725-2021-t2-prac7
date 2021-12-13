const Service = require("../services")

const getBookListContent = (res) => {
    console.log('--> controller: booking list')
    Service.TaoServices.getBookingList(res)
}

const addNewBooking = (data, res) => {
    console.log('--> adding new booking application')
    Service.TaoServices.insertBookingApplication(data, res)
}

module.exports = {
    getBookListContent,
    addNewBooking
}