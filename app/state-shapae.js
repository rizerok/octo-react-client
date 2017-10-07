let stateShape = {
    primaryData: {
        company: {
            phone: '88002006000',
            siteInfo: '@ 2017 company name'
        },
        nav: {
            list: [
                {
                    url: '/page/page1',
                    name: 'Page1',
                    top: true,
                    bottom: false
                }
            ]
        },
        state: {
            isFetching: true
        }
    },
    currentState: {
        isFirstFetch: true,
        isFetching: true,
        error:false
    },
    asideMenu: {
        open: false,
        eventFn: null
    },
    pages: {
        list: [
            {
                id: 1,
                slug: 'page1',
                title: 'Page1',
                content: 'Super page1',
                isFetching: '',
                db_info:[]
            }
        ]
    },
    rootLayout: {
        isFetching: true
    },
    widget: {
        list: [
            {
                db_info:[],
                pageId:1,
                content: '',
                id: 18,
                name: 'Клиенты',
                order: 9,
                slug: 'clients',
                title: 'Наши клиенты',
                view_url: '',
                widget_info: null
            }
        ]
    },
    staticBlock: {
        list: [
            {
                db_info:[],
                pageId:1,
                announce: '',
                content: '',
                id: 17,
                image1_parsed: null,
                image2_parsed: null,
                image3_parsed: null,
                image4_parsed: null,
                is_published: true,
                order: 10,
                title: 'Контактная информация'
            }
        ]
    },
    pageGallery:{
        list:[
            {
                db_info:[],
                pageId:1,
                images:[
                    {}
                ]
            }
        ]
    },
    modal:{
        open:false
    }
};