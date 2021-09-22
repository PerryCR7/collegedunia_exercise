const fs = require('fs')
const load_data = () => {
    try {
        // console.log("hello")
        const dataBuffer = fs.readFileSync('./src/colleges.json')
        // console.log(dataBuffer)
        const dataJSON = dataBuffer.toString()
        // console.log(JSON.parse(dataJSON))
        return JSON.parse(dataJSON)
    } catch (e) {
        console.log(e)
        return []
    }
}

module.exports = load_data