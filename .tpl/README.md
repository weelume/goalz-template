# Goalz 使用说明

本模板为中英双语足球学院展示站，默认中文，英文路径 `/en`，包含课程、教练、活动详情、视频图库、FAQ、联系及注册演示。

Node 版本见 `.nvmrc`，pnpm 版本见 `package.json`。使用 `pnpm install --frozen-lockfile` 安装，`pnpm dev` 启动开发服务，`pnpm build` 构建，`pnpm start` 启动生产预览。默认端口 43670，可使用环境变量 PORT 修改。服务进程使用 Ctrl+C 停止。

不依赖数据库或外部接口。联系和注册只在浏览器校验，不发送、不保存。图片、字体和视频本地托管，不运行参考站跟踪脚本。

修改入口见 docs/CUSTOMIZATION.md；架构见 docs/ARCHITECTURE.md；实际验收及限制见 docs/VERIFICATION.md；许可见 docs/LICENSE.md。
