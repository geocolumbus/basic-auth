"use strict"

const users = [
    {userid: "george", hashword: "Q5610fHtAQu6IU0q+tAgT7P2GkTP7axbxC/k9BunuSA="}
]

const _isUser = function (userid, hashword) {
    //console.log(userid, hashword)
    let validated = false
    for (let i = 0; i < users.length; i++) {
        const user = users[i]
        if (user.userid === userid && user.hashword === hashword) {
            validated = true
            break
        }
    }
    return validated
}

exports.isUser = _isUser
