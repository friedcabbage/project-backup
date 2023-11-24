/*import { stderr, stdout } from 'process';
import './bootstrap';
import { error } from 'console';

var bodyParser = require('body-parser')
const express = require('express')
const { exec } = require('child_process')

const server = express()
const app = express()
const port = 8000

app.get('/settings/state', (req,res) => {
    exec('python3 nrf24recv.py', (error,stdout,stderr) =>{
        if (error) {
            console.error(`Error: ${error.message}`)
            res.status(500).send("Internal Server error")
            return
        }
        console.log(`Script out: ${stdout}`)
        res.send("Python script executed sucessfully")
    })
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})*/