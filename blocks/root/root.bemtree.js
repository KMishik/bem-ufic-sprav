block('root')({

  replace: (node,ctx) => {
    return {
      block: 'page',
      content: [
        {
          block: 'wrapper',
          data: ctx.s_data,
        }
      ]
    };
  }
});

