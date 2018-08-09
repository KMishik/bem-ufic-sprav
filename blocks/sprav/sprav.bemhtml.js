block('wrapper')({

  tag: 'table',
  cls: 'contacts-wrap',
  content: (node,ctx) => {
    return ([
      {
        html: '<tr><td>'
      },
      {
        elem: 'preface'
      },
      {
        html: '</td></tr><tr><td>'
      },
      {
        block: 'contacts',
        mix: { block: node.block, elem: 'contacts' }
      },
      {
        html: '</td></tr>'
      }
    ])
  }
});

