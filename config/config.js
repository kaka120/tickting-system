/* Config file for various configuration */
var config = {
    development: {
        connectionString: "mongodb://localhost/node-mongo-registration-login-api",
        secret: "rajesh",
        //url to be used in link generation
        url: 'http://localhost',
        //mongodb connection settings
        database: {
            host:   '127.0.0.1',
            port:   3306,
            db:     'jdbcframework'
        },
        //server details
        server: {
            host: '127.0.0.1',
            port: '4000'
        }
    },
    production: {
        //url to be used in link generation
        url: 'http://',
        //mongodb connection settings
        database: {
            host: '127.0.0.1',
            port: '27017',
            db:     'site'
        },
        //server details
        server: {
            host:   '127.0.0.1',
            port:   '3421'
        }
    }
    };
    module.exports = config;