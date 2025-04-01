import{_ as i,c as a,o as n,a4 as h}from"./chunks/framework.DmV6WhQo.js";const A=JSON.parse('{"title":"项目结构","description":"","frontmatter":{},"headers":[],"relativePath":"src/zh/1.使用指南/4.项目结构/index.md","filePath":"src/zh/1.使用指南/4.项目结构/index.md","lastUpdated":1743066200000}'),k={name:"src/zh/1.使用指南/4.项目结构/index.md"};function l(p,s,t,e,E,r){return n(),a("div",null,s[0]||(s[0]=[h(`<h1 id="项目结构" tabindex="-1">项目结构 <a class="header-anchor" href="#项目结构" aria-label="Permalink to &quot;项目结构&quot;">​</a></h1><h2 id="前端结构" tabindex="-1">前端结构 <a class="header-anchor" href="#前端结构" aria-label="Permalink to &quot;前端结构&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">Sakura.Automation.Platform.Web</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> docs</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                                  # 项目文档</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> public</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                                # 公共文件</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">   └──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> logo.png</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                          # LOGO</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">   └──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> index.html</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                        # Vue 入口模板</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> src</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                                   # 主目录</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">   ├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> api</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                               # Api ajax 等</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">   ├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> assets</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                            # 本地静态资源</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">   ├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> config</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                            # 项目基础配置，包含路由，全局设置</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">   ├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> components</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                        # 业务通用组件</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">   ├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> core</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                              # 项目引导, 全局配置初始化，依赖包引入等</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">   ├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> directive</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                         # 自定义指令</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">   ├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> router</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                            # Vue-Router</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">   ├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> store</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                             # Vuex</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">   ├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> utils</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                             # 工具库</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">   ├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> locales</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                           # 国际化资源</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">   ├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> views</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                             # 业务页面入口和常用模板</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">   ├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> App.vue</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                           # Vue 模板入口</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">   └──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> main.js</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                           # Vue 入口 JS</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">   └──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> permission.js</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                     # 路由守卫(路由权限控制)</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">   └──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> global.less</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                       # 全局样式</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> tests</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                                 # 测试工具</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> .eslintrc.js</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                          # ESLint 配置项</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> .browserslistrc</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                       # Babel 转码配置</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> .editorconfig</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                         # 定义代码格式</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> .gitignore</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                            # Git 忽略项</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> babel.config.js</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                       # Babel-loader 配置</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> vue.config.js</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                         # Vue-cli 配置</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> postcss.config.js</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                     # PostCSS 配置</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> package.json</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                          # npm包配置文件，里面定义了项目的npm脚本，依赖包等信息</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">└──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> README.md</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                             # 项目说明文档</span></span></code></pre></div><h2 id="后端结构" tabindex="-1">后端结构 <a class="header-anchor" href="#后端结构" aria-label="Permalink to &quot;后端结构&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">Sakura.Automation.Platform.Api</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> sakura-admin</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                          # 系统启动入口</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> sakura-common</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                         # 工具类</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">       └──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> annotation</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                    # 自定义注解</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">       └──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> config</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                        # 全局配置</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">       └──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> constant</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                      # 通用常量</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">       └──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> core</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                          # 核心控制</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">       └──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> enums</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                         # 通用枚举</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">       └──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> exception</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                     # 通用异常</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">       └──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> filter</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                        # 过滤器处理</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">       └──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> utils</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                         # 通用类处理</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> sakura-controller</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                      # 前台控制器</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> sakura-framework</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                      # 框架核心</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">       └──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> aspectj</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                       # 注解实现</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">       └──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> config</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                        # 系统配置</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">       └──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> datasource</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                    # 数据权限</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">       └──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> interceptor</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                   # 拦截器</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">       └──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> manager</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                       # 异步处理</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">       └──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> security</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                      # 权限控制</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">│</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">       └──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> web</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                           # 前端控制</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> sakura-generator</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                      # 代码生成工具</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> sakura-quartz</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                         # 定时任务</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> sakura-system</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                         # 系统管理</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> sakura-xxxxxx</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                         # 其他模块</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">├──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> pom.xml</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                               # Maven 项目核心配置文件</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">└──</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> README.md</span><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">                             # 项目说明文档</span></span></code></pre></div>`,5)]))}const g=i(k,[["render",l]]);export{A as __pageData,g as default};
