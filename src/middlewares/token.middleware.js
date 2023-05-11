const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    try {
        const authorizationHeader = req.get("Authorization")

        if (authorizationHeader == null) {
            throw new Error ("Authorization header is missing")   
        }

        const [type, token] = authorizationHeader.split(" ")

        if (type !== "Bearer") {
            throw new Error (" Authorization header does not not have the 'Bearer' type")
        }

        req.payload = jwt.verify(token, process.env.PRIVATE_KEY)

        next()

    } catch (err) {
        res.status(401).send("Forbidden Access")
    }
}

module.exports = {
    verifyToken
}