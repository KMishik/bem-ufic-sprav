block('contacts')({
  content: (node,ctx) => {
    return [
      applyNext(),
      'Я список контактов'
    ];
  }
});
