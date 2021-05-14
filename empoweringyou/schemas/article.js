export default {
    title: "Article",
    name: "article",
    type: "document",

    fields: [
       // slugs are use to make frontend urls to navigate to the article
      
        {
            title: "Title",
            name: "title", // what the api will use
            type: "string" 
        },

        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 200, // will be ignored if slugify is set
            }
        },

        {
            title: 'Paragraphs',
            name: 'paragraph',
            type: 'array',
            of: [
              {
                title: 'Block',
                type: 'block',
                styles: [{title: 'Normal', value: 'normal'}, {title: 'Quote', value: 'blockquote'}],
                lists: [{title: "Bullet", value: 'bullet'}, {title:"Number", value: 'number'}],
                marks: {
                    annotations: [
                      {
                        name: 'link',
                        type: 'object',
                        title: 'External link',
                        fields: [
                          {
                            name: 'href',
                            type: 'url',
                            title: 'URL'
                          },
                          {
                            title: 'Open in new tab',
                            name: 'blank',
                            description: 'Read https://css-tricks.com/use-target_blank/',
                            type: 'boolean'
                          }
                        ]
                      },
                      {
                        name: 'internalLink',
                        type: 'object',
                        title: 'Internal link',
                        fields: [
                          {
                            name: 'reference',
                            type: 'reference',
                            title: 'Reference',
                            to: [
                              { type: 'template' },
                              // other types you may want to link to
                            ]
                          }
                        ]
                      }
                    ]
                  }
              },
              {type: 'image', icon: 'myIcon'}
            ],
        },

        {
            title: "Article Video",
            name: "article_video",
            type: 'media',
        },

        {
            title: "Downloadable files",
            name: "template_file",
            type: 'array',
            of: [{title:"file", type:'template'}]
        },
    ]
}