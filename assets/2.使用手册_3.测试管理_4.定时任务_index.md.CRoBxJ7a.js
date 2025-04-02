import{_ as i,c as a,o as t,a4 as e}from"./chunks/framework.DilU7MK7.js";const s="/assets/image.CwT541-J.png",o="/assets/image-1.BwriATYd.png",r="/assets/image-2.CqN6jxfm.png",x=JSON.parse('{"title":"定时任务","description":"","frontmatter":{},"headers":[],"relativePath":"2.使用手册/3.测试管理/4.定时任务/index.md","filePath":"2.使用手册/3.测试管理/4.定时任务/index.md","lastUpdated":1743066200000}'),c={name:"2.使用手册/3.测试管理/4.定时任务/index.md"};function n(_,l,d,p,u,m){return t(),a("div",null,l[0]||(l[0]=[e('<h1 id="定时任务" tabindex="-1">定时任务 <a class="header-anchor" href="#定时任务" aria-label="Permalink to &quot;定时任务&quot;">​</a></h1><h2 id="创建定时任务" tabindex="-1">创建定时任务 <a class="header-anchor" href="#创建定时任务" aria-label="Permalink to &quot;创建定时任务&quot;">​</a></h2><ul><li>适用角色：所有人员</li><li>操作步骤：进入【测试管理-定时任务】，点击【新建任务】，填写对应任务信息，点击【立即创建】</li><li>操作描述：定时任务的主要作用指定时间执行对应测试计划，例如：每天凌晨3点执行XXXX_冒烟测试计划</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>所属计划：选择任务所属计划，例如：百度BD_V1.0.0_冒烟测试计划</li><li>任务类型：选择对应任务类型，例如：UI自动化</li><li>任务名称：填写对应任务名称，例如：百度BD_V1.0.0_冒烟测试计划_定时任务</li><li>任务描述：填写对应任务描述，例如：百度BD_V1.0.0_冒烟测试计划_定时任务</li><li>运行环境：选择对应运行环境，例如：产品环境，自动化环境等</li><li>运行规则：填写对应运行规则，例如：0 0 3 * * ?（cron表达式）</li><li>是否并发：选择对应是否并发，例如：禁止</li><li>错误策略：选择对应错误策略，例如：立即执行</li><li>任务状态：选择对应任务状态，例如：默认开启</li></ul></div><p><img src="'+s+'" alt="alt text" data-fancybox="gallery"></p><h2 id="查看执行日志" tabindex="-1">查看执行日志 <a class="header-anchor" href="#查看执行日志" aria-label="Permalink to &quot;查看执行日志&quot;">​</a></h2><ul><li>适用角色：所有人员</li><li>操作步骤：进入【测试管理-定时任务】，选择对应定时任务，点击【操作-日志】，即可查看</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>定时任务列表数据来源是根据对应测试计划定时自动执行后生成的，列表展示信息如下： <ul><li>ID：按定时任务执行顺序自增，例如：1、2、3</li><li>所属计划：对应任务所属计划，例如：百度BD_V1.0.0_冒烟测试计划</li><li>任务类型：对应定时任务类型，例如：UI自动化</li><li>任务名称：对应定时任务名称，例如：百度BD_V1.0.0_冒烟测试计划_定时任务</li><li>运行规则：对应任务运行规则，例如：0 0 3 * * ?（cron表达式）</li><li>执行状态：对应定时任务状态，例如：成功</li><li>执行时间：对应定时任务生成时间，例如：2024-07-15 16:41:05</li></ul></li></ul></div><p><img src="'+o+'" alt="alt text" data-fancybox="gallery"></p><h2 id="查看测试报告" tabindex="-1">查看测试报告 <a class="header-anchor" href="#查看测试报告" aria-label="Permalink to &quot;查看测试报告&quot;">​</a></h2><ul><li>适用角色：所有人员</li><li>操作步骤：进入【测试管理-测试报告】，即可查看</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>注意事项：每次定时任务执行成功后，都会自动生成对应的测试报告</li></ul></div><p><img src="'+r+'" alt="alt text" data-fancybox="gallery"></p>',13)]))}const b=i(c,[["render",n]]);export{x as __pageData,b as default};
