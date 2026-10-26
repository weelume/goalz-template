# 架构

通用源码位于 `src/features/site-templates/catalog/goalz`：config 保存品牌，content 保存双语内容，components 保存共享区块、表单和动效，pages 组合页面，meta.ts 注册所有页面，routes.ts 负责语言路径合同。App Router 路由入口仅负责页面匹配和404。

主题与滚动条仅在 `.gz` 模板范围生效；根滚动条通过 html:has(.gz) 自动清理。运行素材位于 public/templates/goalz。host.tsx 是可选品牌注入接口，不包含任何消费方专属配置。
