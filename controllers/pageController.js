const Service = require("../services")

const getInitContent = (res) => {
    console.log('--> controller: init')
    Service.TaoServices.getInitContent(res)
}

module.exports = {getInitContent}