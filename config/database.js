/**En el archivo database.js  
 * se  encuentra la configuración para la conexión a la base de datos de mongoDB con mongoose. 
 *  
*/

const mongoose = require('mongoose');

/**Parámetrizar todos los datos que lleva la cadena de conexión 
 * para poder conectarse a la base de datos de mongoDB.
 * 
*/

//Db Local
// const host = "localhost";
// const port = "27017";
// const db = "hr";

//Db Remote
const remoteHost = 'cluster0.7dssf.mongodb.net';
const remoteUser = 'UKADMIN';
const remotePass = 'AdminUK';
const remoteDb = 'hr';

//const URI = 'mongodb+srv://tarkian20:Alastor66246@cdappdb.cmkad.mongodb.net/coldream';


//Cadena de conexión a la base de datos de mongoDB.

exports.mongoConnect = () => {
    //Local
    // const mongoStringConnection = `mongodb://${host}:${port}/${db}`;

    //Remoto
    const mongoStringConnection = `mongodb+srv://${remoteUser}:${remotePass}@${remoteHost}/${remoteDb}?retryWrites=true&w=majority`;

    //Configurar la conexión a la base de datos de mongoDB.
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    console.log('MongoDB connection established');
    dbConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));

}