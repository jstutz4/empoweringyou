export default {
    name: 'comment',
    type: 'document',

    fields: [
        {
            name: 'topic',
            type: 'reference',
            to: {type: 'topic'}
        },

        {
            name: 'username',
            type: 'string'
        },

        {
            name: 'title',
            type: 'string'
        },

        {
            name: 'body',
            type: 'text'
        },

        {
            name: 'subcomments',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{type: 'comment'}]
            }]
        }
    ]
}