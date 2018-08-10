block('wrapper')({
  bem: false,
  tag: 'table',
  cls: 'contacts-wrap',
  content: (node,ctx) => {
    return ([
      {
        html: '<tbody>'
      },
/*       {
        html: '<tr><td>'
      },
      {
        block: 'preface',
        mix: { block: node.block, elem: 'preface' },
        depart: ctx.data.preface
      },
 */      {
        html: /* '</td></tr> */'<tr><td>'
      },
      {
        block: 'contacts',
        mix: { block: node.block, elem: 'contacts' },
        users: ctx.data.users
      },
      {
        html: '</td></tr>'
      },
      {
        html: '</tbody>'
      }
    ])
  }
});
