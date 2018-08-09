block('root')({

  replace: (node,ctx) => {
    return {
      block: 'wrapper',
      content: [
        {
          block: 'preface',
          department: ctx.s_data.preface
        },
        {
          block: 'contacts',
          users: ctx.s_data.users
        }
      ]
    };
  }
});

