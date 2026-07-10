// 1. 初始化 Dify 配置 Token
window.difyChatbotConfig = { token: 'coinGH7vwY55pm3K' };

// 2. 动态加载 Dify 核心悬浮窗脚本
var difyScript = document.createElement('script');
difyScript.src = "https://udify.app/embed.min.js";
difyScript.id = "coinGH7vwY55pm3K";
difyScript.defer = true;
document.body.appendChild(difyScript);

// 3. 动态注入悬浮窗的高级样式（颜色和尺寸）
var difyStyle = document.createElement('style');
difyStyle.innerHTML = `
  #dify-chatbot-bubble-button { background-color: #1C64F2 !important; }
  #dify-chatbot-bubble-window { width: 24rem !important; height: 40rem !important; }
`;
document.head.appendChild(difyStyle);
