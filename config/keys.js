dbPassword = 'mongodb+srv://dbUser:' + process.env.DBPW + '@cluster0-sixwu.mongodb.net/test?retryWrites=true';;

module.exports = {
    mongoURI: dbPassword
};