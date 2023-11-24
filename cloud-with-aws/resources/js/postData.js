
const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()

const API_ENDPOINT = process.env.API_ENDPOINT
const py_script = 'app.py'

async function postData(data) {
    try {
        const response = await axios.post(py_script, data)
        console.log(response.data)
    } catch (error) {
        console.error("Failed to Send Data")
        console.log(error)
    }
}

const data = {
    key1: 'Active',
    key2: 'Inactive',
}

postData(data)