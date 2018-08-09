block('preface')({
  content: (node,ctx) => {
    console.log(ctx.department);
    return {};
  }
});
