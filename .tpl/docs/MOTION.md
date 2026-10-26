# 动效清单与验证边界

参考站为 https://goalz-template.framer.website/ 。已在内置浏览器观察标题逐字入场、区块上移显现、卡片图片缩放、双层文字悬停、菜单展开、FAQ 高度展开、数字递增、创始人文字随滚动清晰、图库视频播放以及页尾标题入场。

实现入口：components/Motion.tsx、Founder.tsx、Header.tsx、Faq.tsx、useBodyScrollLock.ts、pages/GalleryPage.tsx 和 theme.css。逐字错峰 35ms、字母 750ms、区块 700ms、数字 1600ms 为实现参数，不能当作原站精确测量结果。尊重 useReducedMotion 和 prefers-reduced-motion；不引入滚动劫持。

PC 1440×1000、iPad 834×1180、H5 390×844 已实测 FAQ 展开中间/结束状态、数字从零递增至 500+/100+/4.9★/10+、创始人文字 blur(16px) 经中间值至 blur(0px)。平板和手机菜单锁定背景、内部键盘滚动、关闭恢复原位置已回归通过。四段本地视频已在手机实际解码播放并暂停，PC/iPad 补测首段。

尚未逐项精确测量原站全部缓动、时长、触摸手势及减少动态效果系统模式；未取得逐动画逐帧等效证据。不得将本实现标记为“完整动效复刻验收通过”。原站没有被实际观察到的拖拽、回弹或轮播，不虚构对应验收。
