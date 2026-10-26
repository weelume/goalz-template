# 修改指南

品牌与联系方式：config/brand.ts；Logo 与可选消费方配置：host.tsx。双语课程、教练、FAQ、评价和数据：content/data.ts；赛事：content/events.ts。

颜色、字体、间距、圆角、玻璃卡片、滚动条及三端布局：theme.css；文字入场、计数和悬浮：components/Motion.tsx；导航及语言：components/Shell.tsx 和 routes.ts；视频交互：pages/GalleryPage.tsx。

增加页面时同时更新 meta.ts 和 .tpl/template.json。所有站内链接基于传入的 basePath，英文位于基础路径后的 /en；不得硬编码部署前缀。

内容变更按影响范围运行 typecheck、lint、test、build；动效和布局变更应在相应设备与减少动态偏好下实际验证。

文章的每节包含 title、paragraphs，可选 items 用于列表；中英内容同时修改。ArticlePage 负责语义标题与列表呈现，不将正文逻辑复制到页面。
