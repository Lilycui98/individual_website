/* ========================================
   data.js - 作品数据文件
   ========================================
   说明：
   每次上传新作品时，只需编辑这个文件即可。
   每个作品是一个对象，包含以下字段：
   - id: 唯一标识符（数字）
   - title: 作品标题
   - image: 图片路径（相对于项目根目录）
   - description: 作品描述（可选）
   - size: 图片展示尺寸 -> small | medium | large | wide | tall
   - category: 所属分类 -> home | projects | editorial | personal
   
   要添加新作品，只需在对应分类的数组中新增一个对象即可。
   ======================================== */

const PortfolioData = {
    // 首页展示的作品（精选）
    home: [
        {
            id: 1,
            title: "《和合图》",
            image: "images/[2015]和合图.jpg",
            description: "2015年，作品320x90cm，作品中共有568人，展现了朝鲜族的衣食住行等民俗文化，共计两年时间完成整部作品。作品中的民俗传统多来自于作者的自身经历。作品之“和合”，代表家庭之和合，人与人之和合、民族之和合、国家之和合。本作品入选第二十一届和第二十四届全国版画作品展览，2025年农民画大展，首届中国乡土绘画作品展。在中国国家博物馆和上海美术馆展出。",
            size: "wide"
        },
        {
            id: 2,
            title: "《赶场》",
            image: "images/[2021]赶场.jpg",
            description: "2016年，作品119x100cm，入选第十四届全国美术作品展览，中国新兴版画运动九十周年——全国版画作品展",
            size: "small"
        },
        {
            id: 3,
            title: "《父老乡亲》",
            image: "images/[2019]父老乡亲.jpg",
            description: "2016年，作品94x155cm，入选第十三届全国美术作品展览",
            size: "small"
        },
        {
            id: 4,
            title: "《过大寿》",
            image: "images/[2012]过大寿.jpg",
            description: "2012年，作品45x60cm，入选2012辽源东丰·中国农民画艺术节暨全国农民画展览，获得2014年我们的中国梦·全国农民画展优秀奖",
            size: "small"
        },
        {
            id: 5,
            title: "《满家小院》",
            image: "images/[2016]满家小院.jpg",
            description: "2016年，作品40x40cm，入选“中国精神·中国梦”全国农民画创作展",
            size: "small"
        },
        {
            id: 6,
            title: "《迎亲图》",
            image: "images/[2013]迎亲图.jpg",
            description: "2013年，作品91x56cm，获得2014年我们的中国梦·全国农民画展优秀奖，入选2013年美丽辽宁——迎全运全省优秀美术作品展",
            size: "wide"
        }, 
        {
            id: 10,
            title: "《惠风和畅接新娘》",
            image: "images/[2013]惠风和畅接新娘.JPG",
            description: "2013年，作品150x33cm，获得梦之青春——辽宁青年优秀美术作品展铜奖",
            size: "wide"
        },
        {
            id: 11,
            title: "《盛世欢歌》",
            image: "images/[2013]盛世欢歌.jpg",
            description: "2013年，作品91x122cm，获得庆祝建国六十五周年暨迎接第十二届全国美展——辽宁优秀美术作品展优秀奖，入选2014年耕云种月——桓仁农民版画进京展",
            size: "small"
        },
        {
            id: 12,
            title: "《蹦爆米花》",
            image: "images/[2012]蹦包米花.jpg",
            description: "2012年，作品35x30cm，入选第三届辽宁省文联文艺基地美术、摄影、书法展",
            size: "small"
        },
        {
            id: 13,
            title: "《喜乐舞》",
            image: "images/[2012]喜乐舞.jpg",
            description: "2012年，作品42x29cm，入选第三届辽宁省文联文艺基地美术、摄影、书法展",
            size: "small"
        },
        {
            id: 14,
            title: "《盼》",
            image: "images/[2012]盼.jpg",
            description: "2012年，作品45x53cm，入选第三届辽宁省文联文艺基地美术、摄影、书法展",
            size: "small"
        },
        {
            id: 15,
            title: "《盛世欢歌2026》",
            image: "images/[2026]盛世欢歌.jpg",
            description: "2026年，作品108x118cm",
            size: "small"
        },
        {
            id: 16,
            title: "《天马》",
            image: "images/[2025]天马.jpg",
            description: "2025年，作品14x19cm",
            size: "small"
        },
        {
            id: 17,
            title: "《笑脸》",
            image: "images/[2022]笑脸.jpg",
            description: "2022年，作品14x19cm",
            size: "small"
        },
        {
            id: 18,
            title: "《平安吉祥》",
            image: "images/[2018]平安吉祥.jpg",
            description: "2018年，作品40x40cm",
            size: "small"
        },
        {
            id: 21,
            title: "《反穿皮袄毛朝外》",
            image: "images/[2017]反穿皮袄毛朝外.jpg",
            description: "2017年，作品40x40cm",
            size: "small"
        },
        {
            id: 22,
            title: "《东北大秧歌》",
            image: "images/[2017]东北大秧歌.jpg",
            description: "2017年，作品40x40cm",
            size: "small"
        },
        {
            id: 23,
            title: "《串亲戚》",
            image: "images/[2017]串亲戚.jpg",
            description: "2017年，作品40x40cm",
            size: "small"
        },
        {
            id: 24,
            title: "《硕果》",
            image: "images/[2016]硕果.jpg",
            description: "2016年，作品40x40cm",
            size: "small"
        }
    ],

    // // 商业项目
    // projects: [
    //     {
    //         id: 5,
    //         title: "Project Name 1",
    //         image: "images/project-01.jpg",
    //         description: "客户项目描述",
    //         size: "medium"
    //     },
    //     {
    //         id: 6,
    //         title: "Project Name 2",
    //         image: "images/project-02.jpg",
    //         description: "客户项目描述",
    //         size: "large"
    //     },
    //     {
    //         id: 7,
    //         title: "Project Name 3",
    //         image: "images/project-03.jpg",
    //         description: "客户项目描述",
    //         size: "small"
    //     }
    // ],

};

/* ========================================
   个人信息配置
   ======================================== */
const SiteConfig = {
    // 你的名字（显示在Logo下方）
    name: "崔哲海",
    
    // 版权信息
    copyright: "© 保留所有权利。未经崔哲海书面授权，任何人不得以任何方式、基于任何用途，对本作品进行使用、复制、修改，或将其录入检索存储系统。禁止使用作品进行大语言模型训练，禁止将作品投入大语言模型中进行分析等操作。",
    
    // 联系邮箱
    email: "dantamiao@outlook.com",
    
    // 关于我页面的文字
    aboutText: [
        "崔哲海，辽宁省美术家协会会员、本溪版画协会理事，中国美术家协会会员桓仁版画的代表性人物之一，其作品多取材于辽东地区的民间风俗、地域文化及满族、朝鲜族的生活场景，风格质朴舒展，色彩对比强烈，具有浓郁的乡土气息和民间艺术特色。《和合图》系列作品是其代表作，该系列作品曾入选第二十一届、第二十二届及第二十四届全国版画作品展，并被中国美术馆、上海美术馆、重庆美术馆等国家级机构收藏。",
        "作品获奖情况（部分）：",
        "《和合图》作为特邀作品入选 首届中国乡土绘画作品展，于2025年在上海美术馆（中华艺术宫）展出",
        "《和合图》入选 大地彩绘——2025年农民画大展，于2025年在中国国家博物馆展出",
        "《赶场》入选 第十四届全国美展览，2024年",
        "《父老乡亲》入选 第十三届全国美术作品展览，2019年",
        "《和合图之三》入选 第二十四届全国版画作品展览，2021年",
        "《和合图之一》入选 第二十一届全国版画作品展览，2015年",
        "《和合图之二》入选 第十届“民族百花奖”——中国各民族美术作品展览，2020年 ",
        "《赶场》入选 中国新兴版画运动九十周年——全国版画作品展，2021年",
        "《和合图之一》入选 韩国弘益大学国际版画邀请展，2017年",
        " ",
        "如果您对崔哲海的作品感兴趣，欢迎通过以下方式联系"
    ]
};