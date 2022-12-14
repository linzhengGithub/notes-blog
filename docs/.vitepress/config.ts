import { sidebarGuide } from '../guide/index';
import { sidebarComponents } from '../components/index';
import { nav } from '../navbar/index';

const config = {
  base: '/notes-blog/',
  title: 'Notes-template',
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Notes-template',
    nav: nav(),
    // navbar link
    socialLinks: [
      { icon: 'github', link: 'https://github.com/linzhengGithub/notes-template' }
    ],
    // 需申请
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>',
    //   // If Algolia did not provided you any `appId`, use `BH4D9OD16A` or remove this option
    //   appId: '<APP_ID>',
    // },
    sidebar: {
      '/guide/': sidebarGuide(),
      '/components/': sidebarComponents()
    },
    // footer: {
    //   message: '',
    //   copyright: '',
    // }
  }
}

export default config
