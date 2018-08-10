block('contacts')({
  bem: false,
  tag: 'table',
  cls: 'contacts-group',
  content: (node,ctx) => {
    let users = ctx.users;

    let arrUsersHtml = users.map(function(currentUser) {
      let { div, subdiv, name, position, phones } = currentUser;
      let htmlStr = '';
      if (div && div ==='main') {
        htmlStr = `<tr bgcolor="#3b70b"><td width="380px"><span style="font-size:14px">
          <span style="color: rgb(255, 255, 255)">
          <strong>Должность, ученая степень, ученое звание</strong>
          </span></span></td><td><span style="font-size:14px;">
          <span style="color: rgb(255, 255, 255);">
          <strong>ФИО</strong></span></span></td><td>
          <span style="font-size:14px;">
          <span style="color: rgb(255, 255, 255);">
          <strong>Телефон</strong></span></span></td></tr>`;
       return htmlStr;
      }
      if (subdiv) {
        htmlStr = `<tr><td><br><br></td></tr>
          <tr bgcolor="#3b70b8"><td colspan="3" style="text-align: center">
          <span style="font-size:14px;"><span style="color: rgb(255, 255, 255);">
          <strong>${name}</strong></span></span></td><td></td><td></td></tr>`;
        return htmlStr;
      }

      htmlStr = `<tr><td>${position}</td><td><b>${name}</b></td><td>${phones.join('<br/>')}</td></tr>`
      return htmlStr;
    });

    return [
      {
        html: arrUsersHtml.join('')
      }
    ];
  }
});