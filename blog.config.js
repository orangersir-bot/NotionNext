// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3', 
  
  // 【重要】已帮你修正 ID 位置
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID || 'a0459a11547883a4aa9e01a19f0dd854',

  // 【主题设置】建议使用 'hexo' (正式大气) 或 'heo' (现代美观)
  THEME: process.env.NEXT_PUBLIC_THEME || 'hexo', 
  
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN', 
  SINCE: 2026, // 建站年份

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, 
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60, 
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', 
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], 

  // 【团队信息设置】你可以把下面的引号内容改成你真实的名称
  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || '社会实践团', 
  BIO: process.env.NEXT_PUBLIC_BIO || '记录青春足迹，服务乡村振兴。', 
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://notion-next-z7xi.vercel.app', // 已填入你的网址
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || '社会实践, 大学生, 调研报告, 志愿服务', 
  
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', 
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', 
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/', 
  BEI_AN_GONGAN: process.env.NEXT_PUBLIC_BEI_AN_GONGAN || '', 

  // RSS订阅
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, 

  // 其它复杂配置（保持默认即可）
  ...require('./conf/comment.config'), 
  ...require('./conf/contact.config'), 
  ...require('./conf/post.config'), 
  ...require('./conf/analytics.config'), 
  ...require('./conf/image.config'), 
  ...require('./conf/font.config'), 
  ...require('./conf/right-click-menu'), 
  ...require('./conf/code.config'), 
  ...require('./conf/animation.config'), 
  ...require('./conf/widget.config'), 
  ...require('./conf/ad.config'), 
  ...require('./conf/plugin.config'), 
  ...require('./conf/performance.config'), 
  ...require('./conf/top-tag.config'), 

  // 高级用法
  ...require('./conf/layout-map.config'), 
  ...require('./conf/notion.config'), 
  ...require('./conf/dev.config'), 

  // 自定义外部脚本
  CUSTOM_EXTERNAL_JS: [''],
  CUSTOM_EXTERNAL_CSS: [''], 

  // 自定义菜单
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, 

  // 文章列表相关设置
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, 

  ...require('./conf/techgrow.config'), 

  // 侧栏布局 是否反转
  LAYOUT_SIDEBAR_REVERSE: process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // 【欢迎语设置】会显示在首页大图上，用英文逗号隔开
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    '欢迎来到冀艺拾光实践队, 记录我们的成长故事, 传播实践正能量',

  // uuid重定向至 slug
  UUID_REDIRECT: process.env.UUID_REDIRECT || false
}

module.exports = BLOG
