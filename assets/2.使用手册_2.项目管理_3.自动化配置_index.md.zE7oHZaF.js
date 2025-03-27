import{_ as s,c as a,o as l,a6 as i,j as t}from"./chunks/framework.CghGZaHa.js";const e="/assets/image.K68RfJet.png",n="/assets/image-1.DA9IbvI9.png",r="/assets/image-11.DLaaH77Z.png",o="/assets/image-12.Dp6w4iEJ.png",h="/assets/image-13.FLjReB1K.png",p="/assets/image-10.RWEswtCV.png",k="/assets/image-2.D6JeA78c.png",c="/assets/image-3.Qp43xwtj.png",d="/assets/image-4.n2hwXeet.png",g="/assets/image-7.CdVXMk7g.png",u="/assets/image-8.DxCQc8SI.png",m="/assets/image-9.kcKY96r8.png",E="/assets/image-5.Bx7JvDPp.png",y="/assets/image-14.sNAjsd1w.png",b="/assets/image-6.D_GSABSy.png",w=JSON.parse('{"title":"自动化配置","description":"","frontmatter":{},"headers":[],"relativePath":"2.使用手册/2.项目管理/3.自动化配置/index.md","filePath":"2.使用手册/2.项目管理/3.自动化配置/index.md","lastUpdated":1723463573000}'),_={name:"2.使用手册/2.项目管理/3.自动化配置/index.md"},A=i('<h1 id="自动化配置" tabindex="-1">自动化配置 <a class="header-anchor" href="#自动化配置" aria-label="Permalink to &quot;自动化配置&quot;">​</a></h1><h2 id="新建自动化配置" tabindex="-1">新建自动化配置 <a class="header-anchor" href="#新建自动化配置" aria-label="Permalink to &quot;新建自动化配置&quot;">​</a></h2><ul><li>适用角色：项目组长及项目经理以上人员</li><li>操作步骤：进入【自动化配置】，点击【新建自动化配置】，填写对应项目自动化配置基础信息，点击【保存】</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>配置类型：选择对应自动化配置类型，例如：WEB自动化</li><li>配置名称：填写对应自动化配置名称，例如：WEB UI 自动化</li><li>配置描述：填写对应自动化配置描述，例如：WEB UI 自动化测试配置</li><li>启用状态：默认为启用状态即可</li></ul></div><p><img src="'+e+'" alt="alt text" data-fancybox="gallery"></p><h2 id="新建项目配置" tabindex="-1">新建项目配置 <a class="header-anchor" href="#新建项目配置" aria-label="Permalink to &quot;新建项目配置&quot;">​</a></h2><ul><li>适用角色：项目组长及项目经理以上人员</li><li>操作步骤：进入【自动化配置-项目配置】，点击【新建项目配置】，填写对应项目信息，点击【立即创建】</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>项目名称：填写对应项目名称，例如：Sakura.Web.UI.Automation.Test</li><li>项目描述：填写对应项目描述，例如：WEB UI 自动化测试项目</li><li>项目地址：填写对应项目描述，例如： <ul><li><a href="https://gitee.com/SakuraTech/Sakura.Web.UI.Automation.Test.git" target="_blank" rel="noreferrer">https://gitee.com/SakuraTech/Sakura.Web.UI.Automation.Test.git</a></li></ul></li><li>项目路径：作为自动化项目存储路径，例如： <ul><li>/data/sakura/Sakura.Web.UI.Automation.Test/test/src/test/java</li></ul></li><li>启用状态：默认为启用状态即可</li></ul></div><p><img src="'+n+'" alt="alt text" data-fancybox="gallery"></p><h2 id="Windows自动化环境搭建" tabindex="-1">Windows自动化环境搭建 <a class="header-anchor" href="#Windows自动化环境搭建" aria-label="Permalink to &quot;Windows自动化环境搭建&quot;">​</a></h2><blockquote><p>视频安装教程</p></blockquote>',11),f=t("iframe",{src:"//player.bilibili.com/player.html?bvid=BV16TbzekEf6&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",width:"685",height:"400"},null,-1),B=i('<h3 id="安装JDK、Maven、Ant、Git、Python" tabindex="-1">安装JDK、Maven、Ant、Git、Python <a class="header-anchor" href="#安装JDK、Maven、Ant、Git、Python" aria-label="Permalink to &quot;安装JDK、Maven、Ant、Git、Python&quot;">​</a></h3><blockquote><p>下载地址：<a href="https://share.weiyun.com/lFNsB9Ye" target="_blank" rel="noreferrer">https://share.weiyun.com/lFNsB9Ye</a></p></blockquote><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>这里主要是通过添加本地或远程的Windows电脑自动化环境，然后作为Jenkins节点使用，操作如下： <ul><li>1.找一台Windows电脑，可以是本机也可以是虚拟机</li><li>2.进入【D盘】，创建【Program】目录</li><li>3.下载JDK，默认安装至【C:\\Program Files\\Java\\jdk1.8.0_112】</li><li>4.下载Maven，手动安装至【D:\\Program\\Maven】</li><li>5.下载Ant，手动安装至【D:\\Program\\Ant\\org.apache.ant_1.9.6.v201510161327】</li><li>6.下载Git，手动安装至【D:\\Program\\Git\\cmd\\git.exe】</li><li>7.下载Python，手动安装至【D:\\Program\\Python\\3.9.0\\python.exe】</li></ul></li></ul></div><p><img src="'+r+'" alt="alt text" data-fancybox="gallery"><img src="'+o+'" alt="alt text" data-fancybox="gallery"></p><h3 id="配置系统环境变量" tabindex="-1">配置系统环境变量 <a class="header-anchor" href="#配置系统环境变量" aria-label="Permalink to &quot;配置系统环境变量&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>安装JDK、Maven、Ant、Git、Python后，需要配置系统环境变量，操作如下： <ul><li>1.进入【我的电脑】-&gt;【属性】-&gt;【高级系统设置】-&gt;【环境变量】</li><li>2.在【系统变量】中，点击【新建】</li><li>3.变量名：【JAVA_HOME】，变量值：【C:\\Program Files\\Java\\jdk1.8.0_112】</li><li>4.变量名：【CLASSPATH】，变量值：【.;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar;%JAVA_HOME%\\jre\\lib\\ext\\jfxrt.jar;%Ant_HOME%\\lib】</li><li>5.变量名：【JAVA_TOOL_OPTIONS】，变量值：【-Dfile.encoding=UTF-8】</li><li>6.变量名：【MAVEN_HOME】，变量值：【D:\\Program\\Maven】</li><li>7.变量名：【ANT_HOME】，变量值：【D:\\Program\\Ant\\org.apache.ant_1.9.6.v201510161327】</li><li>8.变量名：【GIT_HOME】，变量值：【D:\\Program\\Git\\cmd\\git.exe】</li><li>9.变量名：【PYTHON_HOME】，变量值：【D:\\Program\\Python\\3.9.0】</li><li>10.变量名：【Path】，追加变量值： <ul><li>%JAVA_HOME%\\bin</li><li>%JAVA_HOME%\\jre\\bin</li><li>%MAVEN_HOME%\\bin</li><li>%ANT_HOME%\\bin</li><li>%GIT_HOME%\\cmd</li><li>%GIT_HOME%\\bin</li><li>%PYTHON_HOME%</li><li>%PYTHON_HOME%\\Scripts</li></ul></li></ul></li></ul></div><p><img src="'+h+'" alt="alt text" data-fancybox="gallery"></p><h3 id="测试系统环境变量" tabindex="-1">测试系统环境变量 <a class="header-anchor" href="#测试系统环境变量" aria-label="Permalink to &quot;测试系统环境变量&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>配置JDK、Maven、Ant、Git、Python后，需要测试系统环境变量是否生效，操作如下： <ul><li>1.打开【Win+R】，输入【cmd】，打开命令行窗口</li><li>2.输入【java -version】，回车，有显示版本即可</li><li>3.输入【mvn -version】，回车，有显示版本即可</li><li>4.输入【ant -version】，回车，有显示版本即可</li><li>5.输入【git --version】，回车，有显示版本即可</li><li>6.输入【python --version】，回车，有显示版本即可</li></ul></li></ul></div><p><img src="'+p+'" alt="alt text" data-fancybox="gallery"></p><h2 id="新建Jenkins配置" tabindex="-1">新建Jenkins配置 <a class="header-anchor" href="#新建Jenkins配置" aria-label="Permalink to &quot;新建Jenkins配置&quot;">​</a></h2><ul><li>适用角色：项目组长及项目经理以上人员</li><li>操作步骤：进入【自动化配置-Jenkins配置】，点击【新建Jenkins配置】，填写对应信息，点击【立即创建】</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>IP：选择对应Jenkins主机IP，例如：172.19.5.227</li><li>端口：选择对应Jenkins，例如：8080</li><li>名称：填写对应Jenkins用户名，例如：sakura</li><li>密码：填写对应Jenkins密码，例如：3edc$RFV</li><li>地址：填写对应Jenkins地址，例如：<a href="http://172.19.5.227:8080" target="_blank" rel="noreferrer">http://172.19.5.227:8080</a></li><li>项目：选择对应Jenkins项目，例如：Sakura.Web.UI.Automation.Test</li><li>启用状态：默认为启用状态即可</li></ul></div><p><img src="'+k+'" alt="alt text" data-fancybox="gallery"></p><h2 id="新建环境配置" tabindex="-1">新建环境配置 <a class="header-anchor" href="#新建环境配置" aria-label="Permalink to &quot;新建环境配置&quot;">​</a></h2><h3 id="添加Jenkins节点" tabindex="-1">添加Jenkins节点 <a class="header-anchor" href="#添加Jenkins节点" aria-label="Permalink to &quot;添加Jenkins节点&quot;">​</a></h3><ul><li>适用角色：项目组长及项目经理以上人员</li><li>操作步骤：进入【自动化配置-环境配置】，点击【新建环境配置】，填写对应节点信息，点击【Create】</li><li>操作描述：这里主要是把本地或远程的Windows电脑环境当做自动化环境，通过Jenkins远程控制</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>添加节点：</p><ul><li>节点名称：填写对应Windows自动化环境IP地址，通过ipconfig查看IPv4地址，例如：172.18.1.119</li><li>Type：可勾选复制现有节点，输入对应节点名称搜索选择，例如：172.18.1.118</li></ul><p>配置节点：</p><ul><li>名称：填写对应节点名称，例如：172.18.1.118（注意不要重复）</li><li>描述：填写对应节点描述，例如： <ul><li>{&quot;name&quot;:&quot;刘智&quot;,&quot;systemType&quot;:&quot;Windows&quot;,&quot;userName&quot;:&quot;liuzhi&quot;,&quot;passWord&quot;:&quot;3edc$RFV&quot;}</li><li>这里根据以上示例修改对应内容即可，例如：远程电脑用户名，系统类型，账号密码等</li></ul></li><li>远程工作目录：填写对应远程工作目录，例如：D:\\Jenkins</li><li>工具位置：注意对应工具位置为对应Windows远程节点上本地的安装目录，例如： <ul><li>JDK: C:\\Program Files\\Java\\jdk1.8.0_112</li><li>Maven：D:\\Program\\Maven</li><li>Ant：D:\\Program\\Ant\\org.apache.ant_1.9.6.v201510161327</li><li>Python：D:\\Program\\Python\\3.9.0\\python.exe</li><li>Git：D:\\Program\\Git\\cmd\\git.exe</li></ul></li><li>其它默认即可</li></ul></div><p><img src="'+c+'" alt="alt text" data-fancybox="gallery"><img src="'+d+'" alt="alt text" data-fancybox="gallery"></p><h3 id="启动Jenkins节点" tabindex="-1">启动Jenkins节点 <a class="header-anchor" href="#启动Jenkins节点" aria-label="Permalink to &quot;启动Jenkins节点&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>添加节点成功后，Jenkins会自动生成远程连接脚本，Windows主要使用第二排的脚本，如下：</li></ul></div><p><img src="'+g+`" alt="alt text" data-fancybox="gallery"></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>创建启动脚本，修改对应内容，启动即可，操作如下： <ul><li><ol><li>进入对应远程节点目录，一般是【D:\\Jenkins】，新建【node】目录</li></ol></li><li><ol start="2"><li>快捷键Win+R，输入【cmd】，再输入【D:&amp;&amp;cd D:\\Jenkins\\node】回车</li></ol></li><li><ol start="3"><li>执行命令下载agent.jar文件，命令从Jenkins生成的脚本中复制，如下：</li></ol><ul><li>【curl.exe -sO <a href="http://172.19.5.227:8080/jnlpJars/agent.jar%E3%80%91" target="_blank" rel="noreferrer">http://172.19.5.227:8080/jnlpJars/agent.jar】</a></li></ul></li><li><ol start="4"><li>关闭cmd窗口，右键新建一个【run.sh】文件，复制粘贴下面shell脚本保存</li></ol></li><li><ol start="5"><li>修改其中的启动命令，命令从Jenkins生成的脚本中复制，如下：</li></ol><ul><li>【java -jar agent.jar -url <a href="http://172.19.5.227:8080/" target="_blank" rel="noreferrer">http://172.19.5.227:8080/</a> -secret 8bf084e987bf06c35faad470d785c4c36159145901ed790f8d99cae29398fe4bx -name &quot;172.18.1.118&quot; -workDir &quot;D:\\Jenkins&quot;】</li></ul></li><li><ol start="6"><li>启动【run.sh】脚本，即可远程控制对应Windows节点</li></ol></li><li><ol start="7"><li>启动成功后，Jenkins会自动同步对应节点信息</li></ol></li></ul></li></ul></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes dracula-soft vitesse-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">#---FUNCTION-----------------------------------------------------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">#   NAME:  启动脚本</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">#   DESCRIPTION:  脚本入口函数</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">#----------------------------------------------------------------------------------------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">function</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;"> __echo_info</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;">  echo</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#999999;">\`</span><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">date</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> +</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">%F %T</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&#39;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#999999;">\`</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> - [INFO] : </span><span style="--shiki-dark:#BF9EEE;--shiki-light:#A65E2B;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">$*</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">run</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">()</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> {</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">  ls</span><span style="--shiki-dark:#BF9EEE;--shiki-light:#A65E2B;"> -l</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;">  export</span><span style="--shiki-dark:#BF9EEE;--shiki-light:#B07D48;"> os_type</span><span style="--shiki-dark:#F286C4;--shiki-light:#999999;">=</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">Win</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">  _echo_info</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">---------&gt; 开始启动远程节点 &lt;---------</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">  if</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> [[</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#999999;">\${</span><span style="--shiki-dark:#BF9EEE;--shiki-light:#B56959;">os_type</span><span style="--shiki-dark:#E7EE98;--shiki-light:#999999;">}</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;"> ==</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">Win</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;"> ]];</span><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;"> then</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">    # 新版本的jenkins需要使用jdk11启动，不然会报错</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">    # 下载JDK11【https://share.weiyun.com/lFNsB9Ye】，安装至【C:/Program Files/Java/jdk-11.0.15】</span></span>
<span class="line"><span style="--shiki-dark:#7B7F8B;--shiki-light:#A0ADA0;">    # 这里的命令根据从Jenkins生成的脚本中替换即可</span></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">    &quot;C:/Program Files/Java/jdk-11.0.15/bin/java&quot;</span><span style="--shiki-dark:#BF9EEE;--shiki-light:#A65E2B;"> -jar</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> agent.jar</span><span style="--shiki-dark:#BF9EEE;--shiki-light:#A65E2B;"> -url</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> http://172.19.5.227:8080/</span><span style="--shiki-dark:#BF9EEE;--shiki-light:#A65E2B;"> -secret</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;"> 8bf084e987bf06c35faad470d785c4c36159145901ed790f8d99cae29398fe4bx</span><span style="--shiki-dark:#BF9EEE;--shiki-light:#A65E2B;"> -name</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">172.18.1.118</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span><span style="--shiki-dark:#BF9EEE;--shiki-light:#A65E2B;"> -workDir</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">D:\\Jenkins</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#F286C4;--shiki-light:#1E754F;">  fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">  __echo_info</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;"> &quot;</span><span style="--shiki-dark:#E7EE98;--shiki-light:#B56959;">---------&gt; 启动远程节点结束 &lt;---------</span><span style="--shiki-dark:#DEE492;--shiki-light:#B5695999;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#F6F6F4;--shiki-light:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#62E884;--shiki-light:#59873A;">run</span><span style="--shiki-dark:#F286C4;--shiki-light:#AB5959;"> ||</span><span style="--shiki-dark:#97E1F1;--shiki-light:#998418;"> exit</span><span style="--shiki-dark:#BF9EEE;--shiki-light:#2F798A;"> 1</span></span></code></pre></div><p><img src="`+u+'" alt="alt text" data-fancybox="gallery"><img src="'+m+'" alt="alt text" data-fancybox="gallery"></p><h3 id="同步Jenkins节点" tabindex="-1">同步Jenkins节点 <a class="header-anchor" href="#同步Jenkins节点" aria-label="Permalink to &quot;同步Jenkins节点&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>注意事项：每次进入环境配置页面，都会自动同步Jenkins上的节点环境，也可以手动同步或修改</li></ul></div><p><img src="'+E+'" alt="alt text" data-fancybox="gallery"></p><h2 id="安装浏览器-浏览器驱动" tabindex="-1">安装浏览器 &amp; 浏览器驱动 <a class="header-anchor" href="#安装浏览器-浏览器驱动" aria-label="Permalink to &quot;安装浏览器 &amp; 浏览器驱动&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>这里主要是安装Chrome浏览器和驱动，注意驱动版本需要与浏览器版本对应，操作如下： <ul><li>1.下载<a href="https://www.google.cn/intl/zh-CN/chrome/" target="_blank" rel="noreferrer">chrome</a>，默认安装至【C:/Program Files/Google/Chrome/Application】</li><li>2.下载<a href="https://googlechromelabs.github.io/chrome-for-testing" target="_blank" rel="noreferrer">chromedriver</a>，手动解压至【C:/Program Files/Google/Chrome/Application】</li></ul></li></ul></div><p><img src="'+y+'" alt="alt text" data-fancybox="gallery"></p><h2 id="新建浏览器配置" tabindex="-1">新建浏览器配置 <a class="header-anchor" href="#新建浏览器配置" aria-label="Permalink to &quot;新建浏览器配置&quot;">​</a></h2><ul><li>适用角色：项目组长及项目经理以上人员</li><li>操作步骤：进入【自动化配置-浏览器配置】，点击【新建浏览器配置】，填写对应浏览器信息，点击【确定】</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>浏览器类型：选择对应浏览器类型，例如：Chrome</li><li>浏览器名称：填写对应浏览器名称，例如：谷歌浏览器</li><li>浏览器版本：填写对应浏览器版本，例如：114.0.5735.199</li><li>浏览器官方下载地址：填写对应浏览器官方下载地址，例如： <ul><li><a href="https://www.google.cn/intl/zh-CN/chrome/" target="_blank" rel="noreferrer">https://www.google.cn/intl/zh-CN/chrome/</a></li><li><a href="https://downzen.com/en/windows/google-chrome/versions/" target="_blank" rel="noreferrer">https://downzen.com/en/windows/google-chrome/versions/</a></li></ul></li><li>浏览器驱动下载地址：填写对应浏览器驱动下载地址，例如： <ul><li>Chrome &lt;= 114： <a href="http://chromedriver.storage.googleapis.com/index.html" target="_blank" rel="noreferrer">http://chromedriver.storage.googleapis.com/index.html</a></li><li>Chrome &gt; 114： <a href="https://googlechromelabs.github.io/chrome-for-testing" target="_blank" rel="noreferrer">https://googlechromelabs.github.io/chrome-for-testing</a></li></ul></li><li>浏览器程序路径：填写对应浏览器程序路径，例如： <ul><li>C:/Program Files/Google/Chrome/Application/chrome.exe</li></ul></li><li>浏览器驱动路径：选择对应浏览器驱动路径，例如： <ul><li>C:/Program Files/Google/Chrome/Application/chromedriver.exe</li></ul></li><li>浏览器配置文件路径：填写对应浏览器配置文件路径，例如： <ul><li>C:/Users/user06/AppData/Local/Google/Chrome/User Data/Default</li></ul></li><li>启用状态：默认为启用状态即可</li></ul></div><p><img src="'+b+'" alt="alt text" data-fancybox="gallery"></p>',35),P=[A,f,B];function F(D,v,x,q,J,T){return l(),a("div",null,P)}const I=s(_,[["render",F]]);export{w as __pageData,I as default};
