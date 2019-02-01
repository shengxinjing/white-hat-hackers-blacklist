module.exports = {
  title: '程序员找工作黑名单',
  description: '有些事情，应该被记住',
  plugins: ['@vuepress/blog'] ,
    head: [
    ['link', { rel: 'icon', href: `/logo.ico` }]
  ],
  ga:"UA-120821049-2",
  themeConfig:{
    lastUpdated: '更新时间',
    nav: [
      // { text: 'Javascript', link: '/javascript/' },
      { text: '黑名单', link: '/blacklist/' },      
      // { text: '城市', items:[
      //   {text:'北京',link:'xx'}
      // ] },      
      { text: '法律', link: '/law/' },      
      // { text: 'React全家桶', link: '/react/' },
      { text: '工具', link: '/tools/' },
      // { text: '成长', link: '/learn/' },
      { text: '同行', link: '/colleague/' },
      { text: 'Github', link: 'https://github.com/shengxinjing/programmer-job-blacklist' }
    ],
    sidebar:{
      '/blacklist/':[
        {
          title: '黑名单',
          collapsable: false,
          children: [
            '',
          ],
        },
      ],
      '/law/':[
        {
          title: '法律',
          collapsable: false,
          children: [
            '',
          ],
        },
      ],
      '/tools/':[
        {
          title: '工具和建议',
          collapsable: false,
          children: [
            '',
          ],
        },
      ],

      '/colleague/':[
        {
          title: '同行',
          collapsable: false,
          children: [
            '',
          ],
        },
      ]
    }
  }
}

// module.exports = {
//   title: '蜗牛老湿的个人网站',
//   description: '资深程序员，擅长javascript，python',
//   head: [
//     ['link', { rel: 'icon', href: `/logo.ico` }]
//   ],
//   ga:"UA-120821049-2",
//   themeConfig: {
//     repo: 'shengxinjing',
//     lastUpdated: '更新时间',
//     nav: [
//       // { text: 'Javascript', link: '/javascript/' },
//       { text: '读书', link: '/books/' },      
//       // { text: 'React全家桶', link: '/react/' },
//       { text: '构建自己的React', link: '/react-code/' },
//       { text: '区块链', link: '/blockchain/' },
//     ],
//     sidebar: {
//       '/books/': [
//         {
//           title: '读书',
//           collapsable: false,
//           children: [
//             '2019',
//             'mpvue-update',
//             '',
//           ],
//         },
//       ],
//       '/react/': [
//         {
//           title: 'React',
//           collapsable: false,
//           children: [
//             '',
//             'getting-started',
//           ],
//         },
//       ],

//       '/react-code/': [
//         {
//           title: 'React',
//           collapsable: false,
//           children: [
//             '',
//             'getting-started',
//           ],
//         },
//       ],

//       '/blockchain/': [
//         {
//           title: 'Blockchain',
//           collapsable: false,
//           children: [
//             '',
//             'build-block-with-nodejs',
//           ],
//         },
//       ],
//     }
//   },


// }