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

if (app.get("env") === "production") {
    app.set("trust proxy", 1) // trust first proxy
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
        response.send(fs.readFileSync("webapp/index.html", "utf-8"))
    } else {
        response.redirect("/login")
    }
})

app.get("/login", (request, response) => {
    if (sessions[request.session.id]) {
        response.redirect("/")
    } else {
        response.send(fs.readFileSync("server/login.html", "utf-8"))
    }
})

app.post("/login", (request, response) => {
    const hash = crypto.createHash("sha256")
    hash.update(request.body.password + config.salt, "utf-8")
    if (validator.isUser(request.body.userid, hash.digest("base64"))) {
        if (!sessions[request.session.id]) {
            sessions[request.session.id] = {date: (new Date()).toISOString()}
        }
        response.redirect("/")
    } else {
        response.redirect("/login")
    }
})

app.get("/logout", (request, response) => {
    delete sessions[request.session.id]
    response.redirect("/")
})

app.listen(port, () => {
    console.log(`Listening on port ${port} in the ${app.get("env")} environment`)
})
