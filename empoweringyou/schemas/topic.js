export default {
    name: 'topic',
    type: 'document',

    fields: [
        {
            name: 'topic',
            type: 'string'
        },

        {
            name: 'description',
            type: 'string'
        },

        {
            title: 'Number of topics',
            name: 'numTopics',
            type: 'number'
        },

        {
            title: 'Number of comments',
            name: 'numComments',
            type: 'number'
        },

        {
            name: 'subtopics',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{type: 'comment'}]
            }]
        }
    ]
}