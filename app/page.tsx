export default function Home() {
  return <main>
    <a className="skip-link" href="#content">跳到主要内容</a>
    <nav className="nav" aria-label="主导航">
      <a className="brand" href="#top"><span className="brand-mark">D</span><span>D.R.E.A.M. Track</span></a>
      <div className="nav-links"><a href="#about">关于</a><a href="#labs">Labs</a><a href="#projects">项目</a><a href="#together">共创</a></div>
      <span className="nav-note">MINGJIAN ZHANG · 2026</span>
    </nav>
    <section className="home-hero" id="top">
      <div className="home-grid" aria-hidden="true"/>
      <div className="home-copy"><p className="eyebrow"><span/> DESIGN · RESEARCH · ENGINEERING · ART · MAKING</p><h1>把想象，<br/><em>做成可以经历的未来。</em></h1><p className="hero-lead">D.R.E.A.M. Track 将实体造物与交互体验放在同一套创新系统中。学生不只学习工具，而是从一个关于未来的问题出发，跨越材料、身体、空间与数字世界。</p></div>
      <div className="axis" aria-hidden="true"><span>ATOMS</span><i/><b>DREAM</b><i/><span>BITS</span></div>
    </section>
    <div id="content">
      <section className="about-section" id="about">
        <div className="section-tag"><span>01</span> ABOUT</div>
        <div className="about-copy"><p className="about-kicker">张铭健 · MINGJIAN ZHANG</p><h2>把技术、叙事与<br/>学习体验连接起来。</h2><p>我从事信息技术教育，关注教育科技、数字媒体叙事、计算机科学教育与 AI 素养。我的实践从一个问题开始：怎样帮助学生把对技术与游戏的兴趣，转化为有表达力、也有社会价值的真实项目？</p><a href="https://moonshotacademy.cn/team/64f5addb9976f67c52/" target="_blank" rel="noopener">查看学校介绍页 ↗</a></div>
        <div className="focus-grid" aria-label="关注方向"><article><span>01</span><h3>Computer Science Education</h3><p>编程 · 设计思维 · 项目式学习</p></article><article><span>02</span><h3>AI × Education</h3><p>智能体 · 学习支持 · AI 素养</p></article><article><span>03</span><h3>Digital Media</h3><p>交互叙事 · 沉浸体验 · 项目孵化</p></article></div>
      </section>
      <section className="lab-split" id="labs">
        <a className="lab-card mtl-card" href="/mtl/"><span className="lab-code">MTL · TANGIBLE</span><h2>让未来，<br/>可以被触碰。</h2><p>实体系统 · 机器人 · 可穿戴 · 日常机械</p><b>进入 MTL ↗</b></a>
        <a className="lab-card mil-card" href="/mil/"><span className="lab-code">MIL · INTERACTION</span><h2>让未来，<br/>可以被进入。</h2><p>空间交互 · 身体 · 虚拟身份 · 社会性游戏</p><b>进入 MIL ↗</b></a>
      </section>
      <section className="system-section" id="method"><div className="section-tag"><span>02</span> ONE SYSTEM</div><div className="system-copy"><h2>两个实验室，<br/>围绕同一个未来问题工作。</h2><p>MTL 让概念获得结构、材料、传感与运动；MIL 让系统获得行为、空间、身份与体验。项目不在两个 Lab 之间传递，而是在共同的问题里同时生长。</p></div><div className="system-map"><article><span>MTL</span><h3>PHYSICAL<br/>FORM</h3><p>结构 · 材料 · 传感 · 执行</p></article><i>×</i><article><span>MIL</span><h3>HUMAN<br/>EXPERIENCE</h3><p>行为 · 空间 · 身份 · 关系</p></article><b>共同形成<br/>可运行、可体验、可讨论的系统</b></div></section>
      <section className="track-section"><div className="section-tag light"><span>03</span> HOW WE WORK</div><header><h2>从问题出发，<br/>用原型继续提问。</h2><p>DREAM Track 不把工具熟练度当作终点。学生在真实项目里经历观察、想象、制作、体验与反思。</p></header><div className="track-steps"><article><span>01</span><h3>Observe</h3><p>观察人、环境与尚未被满足的体验。</p></article><article><span>02</span><h3>Imagine</h3><p>提出不被今天工具限制的未来愿景。</p></article><article><span>03</span><h3>Prototype</h3><p>让想法成为能够运行与被体验的原型。</p></article><article><span>04</span><h3>Learn</h3><p>从人的回应、故障和意外中继续迭代。</p></article></div></section>
      <section className="featured-project" id="projects">
        <div className="section-tag"><span>04</span> FEATURED PROJECT</div>
        <div className="project-visual"><img src="/projects/fangcun-cure/assets/lifestyle_scene.png" alt="方寸 CURE 小愈盒在家居环境中的使用场景"/></div>
        <div className="project-summary"><p className="project-label">AI × FAMILY HEALTH · PRODUCT CONCEPT</p><h2>方寸 CURE<br/><em>小愈盒</em></h2><p>一个面向都市青年与年轻家庭的 AI 常备药库存管家。它聚焦更真实的家庭场景：更快找到药、提前看见临期风险，减少重复购买与收纳混乱。</p><ul><li>智能药仓 + 小程序 + 产品官网</li><li>产品渲染、家居场景与用户调研</li></ul><a href="/projects/fangcun-cure/fangcun-cure.html">打开完整项目页 ↗</a></div>
      </section>
      <section className="home-together" id="together"><div className="section-tag"><span>05</span> CO-CREATE</div><div><p>WHAT FUTURE DO YOU WANT TO MAKE REAL?</p><h2>未来不只等待被预测，<br/>也等待被共同制作。</h2><a href="mailto:dreamtrack@moonshotacademy.cn">带着一个问题加入 DREAM Track ↗</a></div></section>
    </div>
    <footer className="site-footer"><span>D.R.E.A.M. Track</span><span>Moonshot Academy · Mingjian Zhang</span><a href="#top">回到顶部 ↑</a></footer>
  </main>
}
