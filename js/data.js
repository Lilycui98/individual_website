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
            image: "images/和合图.jpg",
            description: "2016年，作品320cm x 90cm，作品中共有568人，展现了朝鲜族的衣食住行等民俗文化，共计两年时间完成整部作品。作品中的民俗传统多来自于作者的自身经历。作品之“和合”，代表家庭之和合，人与人之和合、民族之和合、国家之和合",
            size: "wide"
        },
        {
            id: 2,
            title: "《满家小院》",
            image: "images/满家小院.jpg",
            description: "2016年，作品40cm x 40cm",
            size: "small"
        },
        {
            id: 3,
            title: "《笛声悠扬》",
            image: "images/笛声悠扬.jpg",
            description: "2016年，作品",
            size: "small"
        },
        {
            id: 4,
            title: "《金达莱》",
            image: "images/金达莱.jpg",
            description: "2016年，作品",
            size: "small"
        },
        {
            id: 5,
            title: "《醉秋》",
            image: "images/醉秋.jpg",
            description: "2016年，作品",
            size: "wide"
        },
        {
            id: 6,
            title: "《乞粒舞》",
            image: "images/乞粒舞.jpg",
            description: "2016年，作品",
            size: "small"
        }, 
        {
            id: 7,
            title: "《嘎拉哈》",
            image: "images/嘎拉哈.jpg",
            description: "2016年，作品",
            size: "small"
        },
        {
            id: 8,
            title: "《南北大炕》",
            image: "images/南北大炕.jpg",
            description: "2016年，作品",
            size: "small"
        },
        {
            id: 9,
            title: "《串门》",
            image: "images/串门.jpg",
            description: "2016年，作品",
            size: "small"
        },
        {
            id: 10,
            title: "《窗户纸糊在外》",
            image: "images/窗户纸糊在外.jpg",
            description: "2016年，作品",
            size: "small"
        },
        {
            id: 11,
            title: "《大饼子一锅出》",
            image: "images/大饼子一锅出.jpg",
            description: "2016年，作品",
            size: "small"
        },
        {
            id: 12,
            title: "《硕果》",
            image: "images/硕果.jpg",
            description: "2016年，作品",
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
        "崔哲海，桓仁版画的代表性人物之一，其作品多取材于辽东地区的民间风俗、地域文化及满族、朝鲜族的生活场景，风格质朴舒展，色彩对比强烈，具有浓郁的乡土气息和民间艺术特色。",
        "《和合图》系列作品是其代表作，该系列作品曾入选第二十一届、第二十二届及第二十四届全国版画作品展，并被重庆美术馆等国家级机构收藏。崔哲海也是桓仁县首位加入中国美术家协会的会员。",
        "如果您对崔哲海的作品感兴趣，欢迎通过以下方式联系："
    ]
};