// const mongoose = require('mongoose');

// exports.connectMongoose=()=>{
//     mongoose.connect('mongodb://localhost:27017/passport_registration')
//     .then((e)=>console.log(`connected to MongoDb ${e.connection.host}`))
//     .catch((e)=>console.log(e))
// }

const mongoose = require('mongoose');

exports.connectMongoose = () => {
    const atlasConnectionUri = 'mongodb+srv://rdevverman:miqtkT4HQIct6PsY@cluster0.jtmu0x1.mongodb.net/?retryWrites=true&w=majority';

    mongoose.connect(atlasConnectionUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.error('Error connecting to MongoDB Atlas:', error));
};
