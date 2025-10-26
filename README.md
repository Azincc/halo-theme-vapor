````markdown
```markdown
# halo-theme-vapor（迁移版）

这是将原 Hexo 主题迁移为 Halo 主题的起点骨架。内容基于 halo theme-starter 与 Halo 开发文档，包含最小可用文件与示例模板。

工作流程（我会做的事情）
1. 在 halo-migration 分支推送本骨架文件。
2. 在 Halo 实例中启用主题并逐页测试（首页、文章页、分页、侧边栏）。
3. 根据测试调整模板变量与样式，完成完整迁移。

仓库结构（本次提交）
- theme.json                主题元信息（manifest）
- preview.svg               预览图（占位，请替换为实际图片）
- templates/                Halo 模板（layout、index、post、partials）
- assets/                   css / js / images
- README.md                 本文件（安装与测试说明）
- package.json              （构建脚本占位，可选）

注意
- 模板中已标注 HALO-PLACEHOLDER 注释，请在 Halo 模板语法下替换为正确变量（例如 Thymeleaf / FreeMarker 表达式）。
- 我会先提交最小骨架并在分支中保留详细的迁移 TODO 列表，之后可以逐文件替换 Hexo 逻辑为 Halo 数据调用。

确认
- 若内容无异议，请回复“请提交到 halo-migration 分支”。我将把这些文件提交到该分支并把变更详情返回给你。
```
````