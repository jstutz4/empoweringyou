export default {
    name: 'forum',
    type: 'document',

    fields: [
        {
            title: 'list of topics',
            name: 'ListOfTopics',
            type: 'array',
            of: [{type: 'reference', 
                    to: [{type: 'topic'}]
                }]
        }
    ]
}