block('wrapper')({

  tag: 'table',
  cls: 'contacts-wrap',
  content: (node,ctx) => {
    return ([
      {
        html: '<tr><td>'
      },
      {
        block: 'preface',
        mix: { block: node.block, elem: 'preface' },
        depart: ctx.data.preface
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
