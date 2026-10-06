# 贡献指南

感谢你愿意为简幻欢社区维基出一份力！

本指南面向**所有贡献者**。你不需要会写代码——补充文档、修正错别字、翻译、报错，都是有价值的贡献。

> 只想改站点配置、构建或部署？请直接看 [开发与构建文档](development.md)。

---

## 目录

- [我可以怎么贡献](#我可以怎么贡献)
  - [通过 Issue 反馈](#通过-issue-反馈)
- [一、改文档（最常见的贡献）](#一改文档最常见的贡献)
- [二、文档写作规范](#二文档写作规范)
- [三、三套文档实例的目录映射](#三三套文档实例的目录映射)
- [四、新增一个页面](#四新增一个页面)
  - [4.1 命名与排序约定](#41-命名与排序约定)
  - [4.2 完整示例](#42-完整示例)
- [五、新增一套文档](#五新增一套文档)
- [六、本地预览与自检](#六本地预览与自检)
- [七、提交 PR](#七提交-pr)
- [八、常见问题](#八常见问题)

---

## 我可以怎么贡献

| 方式 | 适合谁 | 入口 |
| --- | --- | --- |
| 修正错别字、补充说明 | 任何人 | 页面底部「编辑此页」 |
| 新增一篇文档 | 熟悉对应平台的玩家 | 见[第四节](#四新增一个页面) |
| 报错 / 提需求 | 任何人 | 见下方[通过 Issue 反馈](#通过-issue-反馈) |
| 改站点样式、配置 | 会前端 | [开发文档](development.md) |
| 反馈截图与文案不一致 | 使用者 | Issue 或直接改 |

**最快的方式**：打开 <https://simpdoc.top/>，翻到任意页面的底部，点击 **「编辑此页」**。GitHub 会直接打开对应的源文件，改完在网页上提交即可，全程不需要本地环境。

### 通过 Issue 反馈

如果你不打算自己动手改，或者想先讨论清楚再改，请[新建 Issue](https://github.com/simpdoc/simpfun-wiki/issues/new/choose)。仓库已准备好三种模板，新建时会让你选择：

| 模板 | 什么时候用 |
| --- | --- |
| 📝 [文档内容建议](https://github.com/simpdoc/simpfun-wiki/issues/new?template=content-suggestion.yml) | 想新增文档、补充内容，或觉得某处讲得不够清楚 |
| 🐛 [文档错误提交](https://github.com/simpdoc/simpfun-wiki/issues/new?template=doc-error.yml) | 内容写错了、过时了，链接失效，或照着做不通 |
| 💬 [其他内容](https://github.com/simpdoc/simpfun-wiki/issues/new?template=other.yml) | 站点功能、样式、协作流程，以及其他一切 |

只是想提问或聊聊想法的话，去[讨论区](https://github.com/simpdoc/simpfun-wiki/discussions)更随意。

---

## 一、改文档（最常见的贡献）

### 1. 找到对应文件

三套文档各在独立目录下，页面路由与目录一一对应：

| 文档 | 目录 | 路由 |
| --- | --- | --- |
| Web | `docs-web/` | `/web/...` |
| MCJE | `docs-mcje/` | `/mcje/...` |
| MCBE | `docs-mcbe/` | `/mcbe/...` |

例如 <https://simpdoc.top/web/create_server> 对应文件是 `docs-web/03-create_server.mdx`。

> 注意：文件名里的**数字前缀会被去掉**（`03-` 不出现在 URL 里），而后面的部分**原样保留**。
> 本仓库用**下划线**连接单词，所以 URL 里也是下划线（`/web/create_server`）。
> 文件名一旦确定就不要再改——**改名等于改公开 URL**，会让已有外链失效。

### 2. 改内容

文件是 Markdown（`.mdx`）格式，直接编辑即可。页面底部的「编辑此页」链接会自动指向正确路径，**推荐用它来定位文件**。

### 3. 提交

在 GitHub 网页上直接提交会创建一个分支并引导你发起 Pull Request，无需本地环境。

---

## 二、文档写作规范

本站文档按**严格 MDX v3** 解析。以下语法**必须遵守**，用错会导致构建失败或渲染异常。

### 警告框标题：用方括号

```mdx
:::tip[阅读建议]
这里是内容。
:::
```

| ✅ 正确（本站） | ❌ 错误（旧的 MDX v1 写法） |
| --- | --- |
| `:::tip[阅读建议]` | `:::tip 阅读建议` |
| `:::warning[注意]` | `:::warning 注意` |

可用的类型：`note`、`tip`、`info`、`warning`、`danger`。

### 标题 ID：用 JSX 注释

```mdx
## 我的标题 {/* #my-id */}
```

| ✅ 正确（本站） | ❌ 错误（旧的 MDX v1 写法） |
| --- | --- |
| `## 标题 {/* #my-id */}` | `## 标题 {#my-id}` |

### 注释：用 JSX 注释

```mdx
{/* 这是注释，不会渲染 */}
```

不要用 `<!-- -->`，HTML 注释在严格 MDX v3 下不再被支持。

### 页面开头必须写 front matter

```mdx
---
sidebar_position: 2
---

# 页面标题

正文……
```

- `sidebar_position` 决定它在侧边栏中的排序（数字越小越靠前）
- **每个文件都要有且只有一个一级标题（`#`）**，其余用 `##` / `###`

### 其他约定

- 文件名使用 **小写**，单词之间用**下划线**分隔（本仓库现状），例如 `select_server.mdx`、`server_properties.mdx`、`create_server.mdx`
  > 这与 Docusaurus 官方模板的 kebab-case（连字符）不同。**建议沿用现有的下划线风格**，别混用两种——因为文件名会原样进入 URL（见[第三节](#三三套文档实例的目录映射)），混用会导致 URL 风格不统一。
  > 连字符并非无效，只是会与本仓库现有地址不一致。
- 文件名前面的**数字排序前缀**规则见[第四节的命名与排序约定](#41-命名与排序约定)，例如 `15-performance_tuning.mdx`
- 文章统一使用 `.mdx` 扩展名（即使不含 JSX），保持全站一致
- 站内链接使用**绝对路径**，例如 `[Web 文档](/web/intro)`；跨文档互链时记得带上目标文档的前缀
- 中文与英文、数字之间加一个半角空格，例如「使用 Paper 核心」
- 代码块标注语言，例如 ` ```bash ` / ` ```properties `

### 图片引用

图片引用是本项目**最容易报错的地方**，请务必按下面的写法来。

#### 图片放在哪里

| 放法 | 位置 | 适用场景 |
| --- | --- | --- |
| **放 `static/`**（推荐） | `static/img/pages/<实例>/`，例如 `static/img/pages/web/` | 截图等大图；可被多篇文档共用 |
| 与文档同目录 | 直接放在 `docs-web/` 等目录里 | 只被单篇文档使用的小图 |

#### 怎么引用

**规则：引用 `static/` 里的图片，路径必须以 `/` 开头。**

```mdx
<!-- ✅ 正确：绝对路径 -->
![进入控制台](/img/pages/web/1-intro-1.png)
```

```mdx
<!-- ❌ 错误：会被当成相对路径，去 docs-web/static/img/... 找，必然找不到 -->
![进入控制台](static/img/pages/web/1-intro-1.png)
```

**为什么？** Docusaurus 会校验每一张 Markdown 图片是否真实存在，解析规则是（源码 `@docusaurus/mdx-loader` 的 `transformImage`）：

| 写法 | 解析基准 |
| --- | --- |
| `@site/...` | 站点根目录 |
| **`/...`（以斜杠开头）** | **`static/` 目录** |
| 其他（相对路径） | **当前文档所在目录** |

所以 `static/img/...` 既不是绝对路径、也没有 `@site/` 前缀，会被归到第三类，去 `docs-web/static/img/...` 找——那个目录并不存在。

写错时构建/dev 会直接报错：

```
Markdown image with URL `static/img/pages/web/1-intro-1.png`
couldn't be resolved to an existing local image file.
```

#### 关于 alt 文本

图片的 alt 文本请写**有意义的描述**，不要只写数字。它会在图片加载失败时显示，也影响无障碍阅读与搜索收录：

```mdx
<!-- ✅ 好 -->
![点击官网右上角的「进入控制台」](/img/pages/web/1-intro-1.png)

<!-- ❌ 差 -->
![1](/img/pages/web/1-intro-1.png)
```

#### 不用关心的事

- **不需要** 手动写 `width` / `height`，Docusaurus 会自动读取图片真实尺寸并写入产物
- **不需要** 操心 `baseUrl`：写 `/img/...` 即可，Docusaurus 会正确处理路径前缀
- 图片会被 webpack 处理并输出到 `/assets/images/` 下（带内容 hash，便于缓存），原文件同时保留在 `static/` 中，两种访问方式都有效

### 折叠块（`<details>`）

用 `<details>` + `<summary>` 做**点击展开**的折叠区域，适合放邀请码列表、FAQ、可选的长内容：

```mdx
<details>
<summary>开发者邀请码列表（点击展开）</summary>

- 曾小皮-ZengXiaoPi `1300270` [点此注册](https://simpfun.cn/auth?type=register&code=1300270)
- 午夜_Midnight `1308824` [点此注册](https://simpfun.cn/auth?type=register&code=1308824)

</details>
```

**可以放心用 HTML 语法，Markdown 在内部完全生效。** 已实测支持：

| 位置 | 支持情况 |
| --- | --- |
| `<summary>` 内的行内代码、加粗、斜体、链接 | ✅ 正常渲染 |
| 正文的列表、链接、行内代码、强调 | ✅ 正常渲染 |
| `<summary>` 内换行书写的纯文本 | ✅ 自动包成 `<p>`，不影响显示 |

**原理**：Docusaurus 的 remark 插件会把 `<details>` 改写成主题的 `Details` 组件，
于是它变成 **JSX 元素**而非原生 HTML——这正是 Markdown 能被解析的原因
（原生 HTML 里的 Markdown 在严格 MDX v3 下不会被解析）。

> 这一点和网上很多"MDX 里 HTML 内部 Markdown 不生效"的说法相反，但本站实测确认可用。

#### 不需要导入任何东西

`Details` 由主题提供，直接写 `<details>` 即可。大小写不敏感：

- `<details>` / `<Details>` —— 都会被转成主题组件，**带样式**（蓝色信息框 + 平滑展开动画）
- 加 `open` 属性可让折叠块**默认展开**：`<details open>`

#### 样式说明

折叠块会自动套用 Docusaurus 的 `alert alert--info` 样式（浅蓝信息框）。
若你希望它看起来像警告框，用[警告框](#警告框标题用方括号)更合适；
`<details>` 适合"内容可选、默认收起"的场景。

#### 注意：这仍然是 MDX，不是纯 HTML

写进 `<details>` 的 HTML 仍受严格 MDX v3 约束，两条最容易踩：

| 写法 | ✅ 正确 | ❌ 错误 |
| --- | --- | --- |
| 注释 | `{/* 注释 */}` | `<!-- 注释 -->` |
| 自定义 class | `className="my-class"` | `class="my-class"` |

---

## 三、三套文档实例的目录映射

三套文档由 `@docusaurus/plugin-content-docs` 的**多实例能力**提供。每个实例有独立的 `id`、内容目录、路由前缀和侧边栏文件：

| 实例 `id` | 内容目录 | 路由前缀 | 侧边栏文件 | sidebarId |
| --- | --- | --- | --- | --- |
| `web` | `docs-web/` | `/web` | `sidebars-web.ts` | `webSidebar` |
| `mcje` | `docs-mcje/` | `/mcje` | `sidebars-mcje.ts` | `mcjeSidebar` |
| `mcbe` | `docs-mcbe/` | `/mcbe` | `sidebars-mcbe.ts` | `mcbeSidebar` |

侧边栏目前全部使用 `autogenerated` 模式，即**根据目录结构自动生成**。因此你只要把文件放进对应目录并写好 `sidebar_position`，它就会自动出现在侧边栏里，**不需要手动改侧边栏文件**。

> 需要注意：`docs-web/` 里的文件只会出现在 `/web` 的侧边栏中。如果你想写的内容属于另一个平台，请放进对应目录，否则会出现在错误的侧边栏里。

---

## 四、新增一个页面

### 4.1 命名与排序约定

侧边栏顺序由 front matter 里的 **`sidebar_position`** 决定，它是页面在侧边栏中的**唯一排序依据**。

#### `sidebar_position`：普通整数，不要补零

```yaml
---
sidebar_position: 10
---
```

`10` 不会排到 `5` 前面——它按**数值**比较，不是字符串。所以 **`5`、`10`、`15` 直接写就行，不要写成 `05`、`015`**。

#### 文件名：用零填充的数字前缀

文件名前缀的作用是**让文件在目录里也按同一顺序排列**，便于对照和维护。但它按**字典序**比较，所以**必须补零**：

| | 文件名 | 结果 |
| --- | --- | --- |
| ✅ | `05-intro.mdx`、`10-select_server.mdx`、`15-performance_tuning.mdx` | 文件列表与侧边栏顺序一致 |
| ❌ | `5-intro.mdx`、`10-select_server.mdx`、`15-performance_tuning.mdx` | `10-`、`15-` 会插到 `5-` 前面，错序 |

> 两者的区别要记住：**`sidebar_position` 是数字比较，文件名前缀是字符串比较。** 这就是同一个编号在前者不需要补零、在后者必须补零的原因。

#### URL 会自动去掉数字前缀

`15-performance_tuning.mdx` 生成的路由是 `/mcje/performance_tuning`，**编号不会出现在 URL 里**，但**下划线会保留**。你不需要为了 URL 好看而放弃编号。

#### 编号可以留空号

`5`、`10`、`15` 之间留空是**推荐做法**，不是问题。这样以后想在「5」和「10」之间插入新文档时，把新文件编号写成 `7` 即可，**不需要重命名后面所有文件**。

> 前缀统一用**两位零填充**（`05`、`10`、`15`…）。即使当前不到 10 篇也建议照此写，免得以后补零时批量重命名。超过 99 篇时再整体扩到三位。

#### 小结

```
docs-mcje/
├── 01-intro.mdx                sidebar_position: 1    → /mcje/intro
├── 02-select_server.mdx        sidebar_position: 2    → /mcje/select_server
└── 03-performance_tuning.mdx   sidebar_position: 3    → /mcje/performance_tuning
```

文件名前缀（字典序）、`sidebar_position`（数值）、侧边栏顺序三者一致，谁看都不会乱。

> 上面用的是本仓库现有文档的真实编号。`sidebar_position` 与文件前缀取同一个数字，是目前的实际做法。

### 4.2 完整示例

以在 MCJE 文档中新增一篇「性能调优」为例：

1. 在 `docs-mcje/` 下新建 `15-performance_tuning.mdx`
2. 写入 front matter 与正文：

   ```mdx
   ---
   sidebar_position: 15
   ---

   # 性能调优

   ## 内存分配

   正文……
   ```

3. 本地预览确认（见[第六节](#六本地预览与自检)），或在 PR 中等待检查
4. 提交 PR

页面会自动出现在 `/mcje` 的侧边栏中，**无需修改任何配置文件**。

> 侧边栏里显示的文字取自页面的一级标题（如 `# 性能调优`）。想让侧边栏显示的文字与标题不同时，可以额外加 `sidebar_label: 显示文字`——但常规情况不需要写。

---

## 五、新增一套文档

只有在需要开一整套新平台文档时才这样做（例如未来新增 `MCEE`）。需要**同时修改 4 处**，漏掉任何一处都会出问题：

1. **新建内容目录**，例如 `docs-mcee/`，并放入至少一个 `intro.mdx`
2. **新建侧边栏文件** `sidebars-mcee.ts`，导出一个**全局唯一**的 sidebarId：

   ```ts
   import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

   const sidebars: SidebarsConfig = {
     mceeSidebar: [{type: 'autogenerated', dirName: '.'}],
   };

   export default sidebars;
   ```

3. **在 `docusaurus.config.ts` 的 `plugins` 中追加一个实例**：

   ```ts
   [
     '@docusaurus/plugin-content-docs',
     {
       id: 'mcee',
       path: 'docs-mcee',
       routeBasePath: 'mcee',
       sidebarPath: './sidebars-mcee.ts',
       editUrl: 'https://github.com/simpdoc/simpfun-wiki/tree/main/',
     },
   ],
   ```

4. **在 `themeConfig.navbar.items` 中追加导航入口**，`docsPluginId` 必填：

   ```ts
   {
     type: 'docSidebar',
     docsPluginId: 'mcee',
     sidebarId: 'mceeSidebar',
     position: 'left',
     label: 'MCEE',
   },
   ```

> ⚠️ 第 4 步的 `docsPluginId` 是最容易漏的一项。本仓库已把预设自带的默认文档实例设为 `docs: false`，因此**漏写 `docsPluginId` 会直接构建报错**——这比静默指错侧边栏要好，看到报错补上即可。

改完请务必本地跑一次 `npm run build` 确认通过。

---

## 六、本地预览与自检

如果你只想改文档，**这一步可以跳过**——PR 提交后会有自动检查。但本地预览能让你立刻看到排版效果。

```bash
npm install        # 首次需要，环境要求见开发文档
npm run start      # 启动开发服务器，浏览器打开 http://localhost:3000
```

提交前建议至少跑一次构建，它会把所有语法错误和**失效的站内链接**一次性暴露出来：

```bash
npm run build
```

本仓库的 `onBrokenLinks` 设为 `throw`，**任何站内死链都会让构建失败**。这是刻意的——能避免把坏链接发布上线。

更完整的环境说明、常见报错处理与部署细节见 [开发与构建文档](development.md)。

---

## 七、提交 PR

1. Fork 本仓库（或直接在网页上编辑以自动派生分支）
2. 新建分支，分支名建议 `docs/简短描述`，例如 `docs/mcje-memory-tuning`
3. 提交信息建议使用 [Conventional Commits](https://www.conventionalcommits.org/) 风格：
   - `docs(mcje): 补充内存分配建议`
   - `docs(web): 修正变配步骤的描述`
   - `fix(theme): 修正深色模式下 logo 背景`
4. 发起 Pull Request，并在描述里说明**改了什么、为什么改**
5. 等待维护者 review

我们会尽快回复。如果几天没有动静，欢迎在 PR 里 @ 一下维护者，或到[讨论区](https://github.com/simpdoc/simpfun-wiki/discussions)提醒。

### 内容审核原则

- **准确优先**：请确保操作步骤是你实际验证过的
- **不要复制粘贴他人文档**：注意版权，引用请注明来源
- **截图请打码**：上传截图前请清理掉 Token、IP、账号等敏感信息
- **保持中立**：客观描述，避免夸大宣传

---

## 八、常见问题

**Q：我不会用 Git，能贡献吗？**

可以。在 GitHub 网页上点「编辑此页」，改完直接提交，GitHub 会自动帮你创建分支和 PR，全程不需要命令行。

**Q：改了之后页面没变化？**

本地开发服务器一般会热更新。如果没反应，检查文件是否放在了**正确的实例目录**下（例如把 MCBE 的内容放进了 `docs-mcje/`）。

**Q：构建报错 `MDX compilation failed`？**

大概率是用了旧的 MDX v1 语法。回到[第二节](#二文档写作规范)对照检查警告框标题、标题 ID 和注释的写法。

**Q：构建报错 `Broken link`？**

站内链接写错了或指向了不存在的页面。检查链接路径，注意跨文档链接需要带前缀（如 `/mcje/intro`）。

**Q：我想改首页或导航栏？**

那属于站点开发，请看 [开发与构建文档](development.md)，相关文件是 `src/pages/index.tsx` 与 `docusaurus.config.ts`。

---

再次感谢你的贡献！🎉
