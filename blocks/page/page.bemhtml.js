block('page')(

    mode('doctype')(function() {
        return { html : '<!DOCTYPE html>' };
    }),

    wrap()(function() {
        var ctx = this.ctx;

        return [
            apply('doctype'),
            {
                tag : 'html',
                attrs : { lang : 'ru' },
                content : [
                    {
                        elem : 'head',
                        content : [
                            { tag : 'meta', attrs : { charset : 'utf-8' } },
                            { tag : 'title', content : 'Справочник УФИЦ' },
                            { tag : 'link', attrs: { rel : 'stylesheet', href: 'uficcontactmodal.css' } },
                        ]
                    },
                    ctx
                ]
            }
        ];
    }),

    tag()('body'),

    content()(function() {
        return [
            applyNext(),
            this.ctx.scripts
        ];
    }),

    elem('head')(
        bem()(false),
        tag()('head')
    ),

);
