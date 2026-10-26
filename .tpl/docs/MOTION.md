# 动效清单与验证边界

参考站为 https://goalz-template.framer.website/ 。本清单区分 DOM 实际读数、功能观察和无法读取的时间参数，不能把代码值当作原站测量结果。

| 类型 | 原站已观察状态 | 实现入口 |
| --- | --- | --- |
| 常规滚动显现 | 初始 opacity:0、translateY(20px)，进入视口后回到正常位置 | components/Motion.tsx 的 Reveal |
| 逐字显现 | 未进入视口的字母为 opacity:.001、translateY(30px)、rotate(0deg)，完成为 opacity:1、transform:none | SplitHeading；首页、训练四行与页尾 |
| 训练行交互 | 双层逐字文字，链接可跳转课程 | HomePage.tsx、theme.css |
| 菜单 | 展开/关闭，手机内容错峰，内部滚动与背景锁定 | components/Shell.tsx、useBodyScrollLock.ts、useMenuFocus.ts |
| FAQ | 高度与透明度展开、关闭、互斥 | pages/FaqPage.tsx |
| 数字 | 滚动触发后由零递增 | Counter |
| 创始人文字 | 随滚动从模糊变清晰 | components/Founder.tsx |
| 图库视频 | 实际视频播放与暂停 | pages/GalleryPage.tsx |
| 卡片与文字 | 图片缩放、双层文字切换、按钮反馈 | theme.css |

1.0.1 修正了区块原来的 38px 位移、文字百分比位移及额外旋转，并补回训练四行的逐字入场。减少动态效果模式中菜单子项改为无初始位移；Reveal、SplitHeading、Counter、Founder、FAQ 和 CSS 均保留对应分支。

逐字错峰 35ms、字母 750ms、区块 700ms、数字 1600ms 为当前实现参数。浏览器提供渲染 DOM 样式，但未暴露动画计时接口，不能精确反推出原站时长或缓动。原生 hover、滑块拖动及系统减少动态效果模拟在当前内置浏览器操作接口中不可用，未将这些项目标为实机通过。

已有三端实测覆盖 FAQ 中间/结束、数字初始/递增/结束、创始人文字 blur(16px) 经中间值至 blur(0px)、菜单背景锁定/恢复及实际视频播放。1.0.1 补测训练字母初始/运行/结束与六篇文章布局。没有逐动画逐帧等效证据，不标记为完整动效复刻验收通过。
