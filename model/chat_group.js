const Schema = require('../helpers/model_library_support');

const schema = new Schema.Schema({
        ticket_chat_group_id: { type: String,required: true },
        ticket_related_comments_user_comments_object: { type: new Object, required: true },
});


schema.set('toJSON', { virtuals: true });

module.exports = Schema.mongoose.model('ticket_chat_table', schema);
