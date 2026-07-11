// 1. 初始化 Dify 配置 Token
window.difyChatbotConfig = { token: 'coinGH7vwY55pm3K' };

// 2. 加上安全锁：等网页全部渲染完毕后，再挂载机器人，完美避开找不到身体的报错
window.addEventListener('DOMContentLoaded', function() {
  var difyScript = document.createElement('script');
  difyScript.src = "https://udify.app/embed.min.js";
  difyScript.id = "coinGH7vwY55pm3K";
  difyScript.defer = true;
  document.head.appendChild(difyScript);

  // 3. 动态注入悬浮窗的高级样式（颜色和尺寸）
  var difyStyle = document.createElement('style');
  difyStyle.innerHTML = `
    #dify-chatbot-bubble-button { background-color: #1C64F2 !important; }
    #dify-chatbot-bubble-window { width: 24rem !important; height: 40rem !important; }
  `;
  document.head.appendChild(difyStyle);
});
