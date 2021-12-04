const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://taopan2021:tp1234567@taocluster.lvqyr.mongodb.net/project-tao?retryWrites=true&w=majority";

const client = new MongoClient(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

let dbConnection;

module.exports = {
    connectToDatabase: (callback) => {
        client.connect((err, db) => {
            if (err || !db) {
                return callback(err)
            }
        })

        //dbConnection = db.db('project-tao')
        dbConnection = client.db('project-tao')
        console.log('=> connected to mongodb atlas')

        return callback()
    },

    getDB: () => {
        return dbConnection
    }
}

/* client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
}); */