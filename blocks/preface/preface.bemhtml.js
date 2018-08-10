block('preface')({
  content: (node,ctx) => {
    
    let htmlPreface = CreateHtmlString(ctx.depart);
    return ([
      { html: htmlPreface }
    ]);

    function CreateHtmlString( { name_full, name_abr, addr_ur, addr_fact, phones, mail } ){
      let phonesStr = phones.join(' , ');
      let mailStr = mail.join(' , ');
      let htmlStr = '';
    
      htmlStr = `<br/><p><span>Полное наименование:</span> ${name_full}<br/><br/>
                 <span>Сокращенное наименование:</span> ${name_abr}
                 <br/><br/><span>Юридический адрес:</span> ${addr_ur}<br/>
                 <span>Почтовый адрес: ${addr_fact}</p><br/>
                 <p>тел./факс ${phonesStr}<br/>
                 e-mail: ${mailStr}<br/><br/></p>`;
      
      return htmlStr;
    }
  }
});

