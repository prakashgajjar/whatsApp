const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
const getUserFromCookie = (req, res, next) => {
    const token = req.cookies.loginToken; 
    if (!token) {
        return res.status(401).json({ message: "No token provided, unauthorized" });
    }
    try {
        const decoded = jwt.verify(token, "prakash");
        req.user = decoded; 
        next(); 
    } catch (error) {
        return res.status(403).json({ message: "Invalid token" });
    }
};

module.exports = getUserFromCookie;
