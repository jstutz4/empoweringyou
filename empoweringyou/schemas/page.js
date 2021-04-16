import article from './article'

export default {
    title: "Page",
    name: "page",
    type: "document",

    fields: [
        // ids are auto generated

        {
            title: "Name",
            name: "name", // what the api will use
            type: "string"
        },

        {
            title: "Article",
            name: "articles", // what the api will use
            type: 'array',
            of: [{
                type: 'reference',
                to: [{type: 'article'}]
            }]
        },

    ]
}