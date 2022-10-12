const Schema = require('../helpers/model_library_support');

const schema = new Schema.Schema({
    username: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    hash: { type: String, required: true },
});

schema.set('toJSON', { virtuals: true });

module.exports = Schema.mongoose.model('registration_table', schema);
