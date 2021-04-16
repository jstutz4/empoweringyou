export default {
    title: 'Road Map',
    name: 'roadmap',
    type: 'document',

    fields: [
        {
            title: 'Heading',
            name: 'heading',
            type: 'string'
        },

        {
            title: 'Priority',
            name: 'priority',
            type: 'number'
        },

        {
            title: 'Page',
            name: 'page',
            type: 'reference',
            to: {type: 'page'}
        },

        {
            title: 'Article List',
            name: 'articlelist',
            type: 'array',
            of: [{
                    type: 'reference',
                    to: [{type: 'article'}]
                }]
        }
    ]
}