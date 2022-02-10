export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62047100a073680c3cbce536',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-m57ozy5o',
                  apiId: '6ab6616f-fb49-471d-8687-a28032b07ba5'
                },
                {
                  buildHookId: '620471004ef7d50d4bea11c1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-csebktop',
                  apiId: '7d0e4add-a12c-4b3f-85da-230d71e1a914'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DanielHirunrusme/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-csebktop.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
