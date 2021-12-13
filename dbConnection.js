const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://taopan2021:tp1234567@taocluster.lvqyr.mongodb.net/project-tao?retryWrites=true&w=majority";

const mongoClient = new MongoClient(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

//const dbConnection;

mongoClient.connect((err, db) => {
    if(!err) {
        console.log('--> db connected')
    } else {
        console.log('--> [db error]: ', err)
    }
})

module.exports.mongoClient = mongoClient

/* 
module.exports = {
    connectToDatabase: (callback) => {
        client.connect((err, db) => {
            if (err || !db) {
                return callback(err)
            }
        })

        dbConnection = client.db('project-tao')
        console.log('=> connected to mongodb atlas')

        return callback()
    },

    getDB: () => {
        return dbConnection
    }
} */

/* client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
}); */