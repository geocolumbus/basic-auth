"use strict"

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
        response.sendFile(__dirname + "/dist/index.html")
    } else {
        response.redirect("/login")
    }
})

app.get("/js/:file", (request, response) => {
    if (sessions[request.session.id]) {
        response.header("Content-Type", "text/javascript")
        response.sendFile(__dirname + "/dist/js/" + request.params.file)
    } else {
        response.status(403)
        response.send()
    }
})

app.get("/css/:file", (request, response) => {
    if (sessions[request.session.id]) {
        response.header("Content-Type", "text/css")
        response.sendFile(__dirname + "/dist/css/" + request.params.file)
    } else {
        response.status(403)
        response.send()
    }
})

app.get("/img/:file", (request, response) => {
    if (sessions[request.session.id]) {
        response.header("Content-Type", "image/png")
        response.sendFile(__dirname + "/dist/img/" + request.params.file)
    } else {
        response.status(403)
        response.send()
    }
})

app.get("/login", (request, response) => {
    if (sessions[request.session.id]) {
        response.redirect("/")
    } else {
        response.sendFile(__dirname + "/login.html")
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
