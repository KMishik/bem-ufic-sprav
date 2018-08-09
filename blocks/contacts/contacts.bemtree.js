block('contacts')({
  content: (node,ctx) => {
    console.log(ctx.users);
    return {};
  }
});
