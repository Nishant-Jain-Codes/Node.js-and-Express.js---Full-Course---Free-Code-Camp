const notFound = (req,res) => res.status(404).send('Route Doesnt Exists')
module.exports = notFound