const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode ? res.statusCode : 500;
    console.log(statusCode);

}


module.exports = errorHandler