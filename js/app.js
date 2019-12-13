"use strict"

const fs = require("fs")
const crypto = require("crypto")
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 8000
const validator = require("./validator.js")
const config = require("./config.js")
const session = require("express-session")
const sess = {
    secret: config.sessionSecret,
    cookie: {maxAge: 60000}
}
const sessions = {}

if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies, could be set to "auto"
}
app.use(session(sess))

app.use(session({
    genid: function (req) {
        return genuuid()
    },
    secret: config.sessionSecret
}))

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (request, response) => {
    if (sessions[request.session.id]) {
        response.send(fs.readFileSync("index.html", "utf-8"))
    } else {
        response.send(fs.readFileSync("login.html", "utf-8"))
    }

    console.log(`request.session.id = ${request.session.id}`)
})

app.post("/", (request, response) => {
    const hash = crypto.createHash("sha256")
    hash.update(request.body.password + config.salt, "utf-8")
    if (validator.isUser(request.body.userid, hash.digest("base64"))) {
        sessions[request.session.id] = true
        response.send(fs.readFileSync("index.html", "utf-8"))
    } else {
        response.send(fs.readFileSync("failure.html", "utf-8"))
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port} in the ${app.get("env")} environment`)
})