(function () {
  'use strict';

  const translations = {
    'SPIN Lab - 官方网站': 'SPIN Lab - Official Website',
    '实验室简介 - SPIN Lab': 'About - SPIN Lab',
    '团队成员 - SPIN Lab': 'People - SPIN Lab',
    '学术成果 - SPIN Lab': 'Publications - SPIN Lab',
    '招生信息 - SPIN Lab': 'Join Us - SPIN Lab',
    '联系方式 - SPIN Lab': 'Contact - SPIN Lab',
    '搜索结果 - SPIN Lab': 'Search Results - SPIN Lab',
    '成员信息登记 - SPIN Lab': 'Member Profile Submission - SPIN Lab',

    '中科大空间智能实验室 SPIN Lab': 'USTC Spatial Intelligence Lab · SPIN Lab',
    '首页': 'Home',
    '实验室简介': 'About',
    '团队成员': 'People',
    '学术成果': 'Publications',
    '招生信息': 'Join Us',
    '研究方向': 'Research',
    '搜索...': 'Search...',
    '您的邮箱地址': 'Your email address',
    '关于我们': 'About Us',
    '快速链接': 'Quick Links',
    '更多资源': 'Resources',
    '订阅我们': 'Newsletter',
    '订阅我们的通讯，获取最新研究动态': 'Subscribe for the latest research news and updates.',
    '订阅': 'Subscribe',
    '保留所有权利.': 'All rights reserved.',
    '© 2025 SPIN Lab. 保留所有权利.': '© 2025 SPIN Lab. All rights reserved.',
    '© 2023 SPIN Lab. 保留所有权利.': '© 2025 SPIN Lab. All rights reserved.',
    'SPIN Lab致力于空间智能与机器人等领域的前沿研究，培养高水平国际化人才。': 'SPIN Lab advances spatial intelligence and robotics while nurturing globally minded researchers.',
    'SPIN Lab致力于空间智能、智能无人系统等领域的前沿研究，培养高水平研究人才。': 'SPIN Lab advances spatial intelligence and autonomous systems while nurturing outstanding researchers.',
    'SPIN Lab 致力于空间智能、智能无人系统等领域的前沿研究，培养高水平研究人才。': 'SPIN Lab advances spatial intelligence and autonomous systems while nurturing outstanding researchers.',

    '欢迎访问SPIN Lab': 'Welcome to SPIN Lab',
    '中科大空间智能实验室（SPatial INtelligence Lab）专注于空间智能、三维视觉、自主机器人以及多模态感知等前沿方向的研究。实验室由中国科学技术大学人工智能与数据科学学院特任教授夏彦领衔，致力于赋予智能体在复杂三维环境中的感知、理解与交互能力。实验室研究涵盖激光雷达点云定位与建图、多模态融合学习、视觉语言导航、以及具身智能系统的构建。团队注重理论与应用结合，积极与国际知名高校和产业界合作，推动空间智能在机器人与无人驾驶领域的落地与发展。': 'The USTC Spatial Intelligence Lab (SPIN Lab), led by Prof. Yan Xia at the School of Artificial Intelligence and Data Science, studies spatial intelligence, 3D vision, autonomous robotics, and multimodal perception. We build intelligent agents that can perceive, understand, and interact with complex 3D environments, spanning LiDAR localization and mapping, multimodal learning, vision-language navigation, and embodied AI.',
    '了解更多': 'Learn More',
    '研究成果': 'Research Highlights',
    '实验室的核心研究方向包括：定位与建图、多模态感知、空间导航与理解、人机协作与物理交互，服务应用于智能家居、智能制造、无人驾驶和科学实验等场景。': 'Our research covers localization and mapping, multimodal perception, spatial navigation and understanding, human–robot collaboration, and physical interaction, with applications in autonomous driving, manufacturing, smart environments, and scientific discovery.',
    '查看论文': 'View Publications',
    '招募优秀人才': 'Join Our Team',
    '我们以 "Empowering 3D Intelligence for the Autonomous World"为使命，注重理论创新与硬件落地结合 ，拥有先进的实验平台和开源生态。 欢迎企业与学界以联合研发、技术咨询等形式开展合作，共同推动具身智能从实验室走向真实世界。欢迎有志于空间智能、机器人方向的优秀本科、硕士、博士生、博士后，加入我们的团队': 'Guided by “Empowering 3D Intelligence for the Autonomous World,” we connect fundamental innovation with real robotic systems. We welcome academic and industry collaborations, as well as motivated undergraduate, master’s, PhD, and postdoctoral researchers.',
    '招生详情': 'Open Positions',
    '实验室风采': 'Life at SPIN',
    'SPIN Lab 团队凝聚了一批朝气蓬勃、富有创新精神的青年研究者。我们在浓厚的学术氛围中协作攻关，在空间智能与具身智能的前沿探索中并肩前行，共同书写属于实验室的精彩篇章。': 'SPIN Lab brings together energetic young researchers who collaborate in an open academic environment and explore the frontiers of spatial and embodied intelligence.',
    '认识我们': 'Meet the Team',
    '最新动态': 'Latest News',
    '论文发表': 'Publication',
    '学术活动': 'Academic Event',
    '重要通知': 'Announcement',
    '阅读更多': 'Read More',
    '查看全部新闻': 'View All News',
    '收起': 'Collapse',
    '我们的论文C-LaV被CVPR 2026接收': 'C-LaV Accepted by CVPR 2026',
    'C-LaV：面向恶劣天气鲁棒激光雷达位置识别的条件隐速度场去噪方法': 'C-LaV: Conditional latent velocity field denoising for weather-robust LiDAR place recognition.',
    '我组承办CEAI 2026具身操作与空间智能前沿论坛': 'SPIN Lab Co-organizes the CEAI 2026 Frontier Forum',
    '中国科学技术大学与东南大学联合承办，聚焦具身智能"操作"与"空间"两大核心方向': 'Co-organized by USTC and Southeast University, focusing on embodied manipulation and spatial intelligence.',
    '"新一代人工智能"国家科技重大专项项目启动会召开': 'National Key AI Project Kick-off Meeting Held at USTC',
    '《知识增强的科学具身智能体平台》项目在中国科大高新校区正式启动': 'The Knowledge-enhanced Scientific Embodied Agent Platform project officially launched at USTC.',
    '我们的论文TARGO被IJCV接收': 'TARGO Accepted by IJCV',
    'TARGO：面向遮挡场景下目标驱动机器人抓取的基准测试': 'TARGO: Benchmarking target-driven robotic grasping under occlusions.',
    '举办ICCV Workshop专题研讨会': 'ICCV Workshop on Multimodal Localization and Mapping',
    '此次研讨会主题为"Multi-modal Localization and Mapping (MuLMa)"': 'The workshop focuses on Multi-modal Localization and Mapping (MuLMa).',
    '我们的论文被CVPR 2025接收': 'Our Paper Accepted by CVPR 2025',
    '恭喜团队成员在协同目标检测领域的研究成果被CVPR 2025会议接收！': 'Our work on cooperative object detection was accepted by CVPR 2025.',
    '我们的论文Text2Loc被CVPR 2024接收': 'Text2Loc Accepted by CVPR 2024',
    '恭喜团队成员在3D点云定位领域的研究成果被CVPR 2024会议接收！': 'Our work on 3D point-cloud localization was accepted by CVPR 2024.',
    '三维视觉': '3D Vision',
    '研究智能体对复杂环境中物体的精准识别与动态理解。': 'Perception and dynamic understanding of objects in complex environments.',
    '空间智能': 'Spatial Intelligence',
    '研究构建高精度语义地图，强化自主感知与空间定位能力。': 'High-precision semantic mapping for autonomous perception and localization.',
    '机器人': 'Robotics',
    '研究机器人在复杂场景中的灵活移动、物体操作等任务。': 'Robotic mobility and manipulation in complex real-world environments.',
    '无人驾驶': 'Autonomous Driving',
    '研究无人驾驶技术中的环境感知以及定位等相关任务。': 'Perception and localization for safe autonomous driving.',
    '代表性学术成果': 'Selected Publications',
    '最新论文': 'Latest',
    '顶会论文': 'Top Venues',
    '代码': 'Code',
    '项目主页': 'Project',
    '查看所有论文': 'All Publications',
    '核心团队成员': 'Core Team',
    '实验室PI': 'Principal Investigator',
    '特任教授 / 实验室 PI': 'Professor / Principal Investigator',
    '研究方向：三维视觉、具身智能、无人驾驶': 'Research: 3D vision, embodied AI, and autonomous driving.',
    '研究方向：点云处理、多模态大模型': 'Research: point-cloud processing and multimodal foundation models.',
    '研究方向：具身智能、机器人导航': 'Research: embodied AI and robot navigation.',
    '查看所有成员': 'Meet Everyone',
    '联系我们': 'Contact Us',
    '欢迎联系SPIN Lab了解更多信息或讨论合作机会': 'Contact SPIN Lab to learn more or discuss collaboration opportunities.',
    '中国科学技术大学人工智能与数据科学学院': 'School of Artificial Intelligence and Data Science, USTC',

    '关于SPIN Lab': 'About SPIN Lab',
    'SPIN Lab（Spatial Intelligence Laboratory）成立于2025年，聚焦于空间智能前沿研究，致力于探索智能体在物理世界中感知、决策并执行复杂任务的理论与技术。': 'Founded in 2025, SPIN Lab explores the theory and technology that enable intelligent agents to perceive, reason, and act in the physical world.',
    '实验室依托中国科学技术大学人工智能与数据科学学院，汇聚了由夏彦特任教授领衔的跨学科团队，成员涵盖计算机视觉、机器人学、强化学习、机械工程等领域的研究者与开发者。我们以"Empowering 3D Intelligence for the Autonomous World"为使命，注重理论创新与硬件落地结合。': 'Based at USTC’s School of Artificial Intelligence and Data Science, our interdisciplinary team spans computer vision, robotics, reinforcement learning, and mechanical engineering. Led by Prof. Yan Xia, we connect theoretical innovation with real-world systems.',
    '实验室拥有先进的实验平台和开源生态，并欢迎企业与学界以联合研发、技术咨询等形式开展合作，共同推动空间智能从实验室走向真实世界。我们致力于培养具有国际视野和创新能力的高水平研究人才。': 'We maintain advanced experimental platforms and an open-source ecosystem, welcome collaboration with academia and industry, and train creative researchers with a global perspective.',
    '实验室资源': 'Research Platforms',
    '机器狗': 'Quadruped Robot',
    '无人配送车': 'Autonomous Delivery Vehicle',
    '无人机': 'Unmanned Aerial Vehicle',
    '穿越机': 'FPV Drone',
    '人形机器人开发平台': 'Humanoid Robot Platform',
    '双臂开发平台': 'Dual-arm Robot Platform',
    '主从臂开发平台': 'Master–Slave Manipulator Platform',
    '外骨骼': 'Exoskeleton',
    '使命与愿景': 'Mission & Vision',
    '我们的使命': 'Our Mission',
    '以创新思维推动空间认知和具身智能领域的技术发展，解决真实世界中的复杂问题，培养具有国际竞争力的高水平研究人才。': 'Advance spatial cognition and embodied intelligence, solve challenging real-world problems, and train internationally competitive researchers.',
    '我们的愿景': 'Our Vision',
    '成为国际知名的空间智能研究中心，引领前沿技术研究方向，推动学术交流与产业合作，为人工智能的发展贡献力量。': 'Become a globally recognized center for spatial intelligence that advances frontier research and connects academia with industry.',
    '我们的价值观': 'Our Values',
    '坚持创新、协作、开放、责任的价值观，追求学术卓越，注重技术转化，推动知识与应用共进。': 'Innovation, collaboration, openness, and responsibility—pursuing academic excellence and meaningful real-world impact.',
    '合作伙伴': 'Partners',

    '教师团队': 'Faculty',
    '研究生': 'Graduate Students',
    '本科生': 'Undergraduate Students',
    '博士研究生': 'PhD Student',
    '硕士研究生': 'Master’s Student',
    '夏彦': 'Yan Xia',
    '曹学伟': 'Xuewei Cao',
    '吴雨涵': 'Yuhan Wu',
    '黄非凡': 'Feifan Huang',
    '宋沙清': 'Shaqing Song',
    '王志超': 'Zhichao Wang',
    '王硕': 'Shuo Wang',
    '曾志文': 'Zhiwen Zeng',
    '李梓豪': 'Zihao Li',
    '陈炫伊': 'Xuanyi Chen',
    '李思澄': 'Sicheng Li',
    '邓一诚': 'Yicheng Deng',
    '杨家越': 'Jiayue Yang',
    '宋涵亮': 'Hanliang Song',
    '刘心语': 'Xinyu Liu',
    '中国科学技术大学人工智能与数据科学学院 特任教授': 'Professor, School of Artificial Intelligence and Data Science, USTC',
    '国家高层次青年人才，博士生导师。主要研究方向包括三维视觉，具身智能，无人驾驶等。博士毕业于德国慕尼黑工业大学，曾任慕尼黑机器学习中心（MCML）研究科学家和慕尼黑工业大学计算机视觉与人工智能组高级研究员，英国牛津大学视觉几何实验室（VGG）、剑桥大学访问学者。研究成果以第一作者/通讯作者发表于IJCV、CVPR、ICCV、ECCV等国际顶级期刊和会议，获ICCV 2025 E2E3D Workshop最佳论文奖等。担任第13届国际移动测量技术大会程序委员会主席、第一届中国空间智能大会演示主席等。': 'Prof. Yan Xia is a doctoral advisor and recipient of a national young-talent program. His research spans 3D vision, embodied intelligence, and autonomous driving. He received his PhD from the Technical University of Munich and served as a research scientist at the Munich Center for Machine Learning (MCML) and a senior researcher in TUM’s Chair of Computer Vision & Artificial Intelligence. He was also a visiting researcher at Oxford VGG and the University of Cambridge. His work appears in IJCV, CVPR, ICCV, and ECCV.',
    '曹学伟，中科大智能科学与技术专业在读博士研究生，研究方向为点云处理、多模态大模型。': 'Xuewei Cao is a PhD student in Intelligent Science and Technology at USTC, working on point-cloud processing and multimodal foundation models.',
    '吴雨涵，中科大智能科学与技术专业在读博士研究生，研究方向为具身智能、机器人导航。': 'Yuhan Wu is a PhD student in Intelligent Science and Technology at USTC, working on embodied AI and robot navigation.',
    '黄非凡，中国科学技术大学人工智能与数据科学学院2026级博士生，主要研究机器人移动抓取与移动操作，包括三维视觉感知、物体几何理解、抓取姿态估计与具身智能。': 'Feifan Huang is a PhD student at USTC working on mobile manipulation, 3D perception, geometric understanding, grasp pose estimation, and embodied AI.',
    '宋沙清，中国科学技术大学人工智能与数据科学学院26级博士研究生，主要研究方向为点云理解、空间推理、室外场景定位。': 'Shaqing Song is a PhD student at USTC studying point-cloud understanding, spatial reasoning, and outdoor localization.',
    '王志超，中科大在读硕士研究生。': 'Zhichao Wang is a master’s student at USTC.',
    '王硕，中科大在读硕士研究生。': 'Shuo Wang is a master’s student at USTC.',
    '曾志文，中科大智能科学与技术专业在读硕士研究生，研究方向为自动驾驶中的多模态融合感知与三维定位，涵盖BEV感知、跨模态定位，致力于提升自动驾驶场景的感知与定位鲁棒性。': 'Zhiwen Zeng is a master’s student at USTC studying multimodal perception and 3D localization for autonomous driving.',
    '李梓豪，中科大在读硕士研究生。': 'Zihao Li is a master’s student at USTC.',
    '陈炫伊，中国科学技术大学智能科学与技术专业硕士研究生，主要研究具身智能与智能机器人，重点关注复杂室外环境中的智能感知、三维空间理解与自主决策。': 'Xuanyi Chen is a master’s student at USTC studying embodied AI, intelligent robotics, 3D understanding, and autonomous decision-making in complex outdoor environments.',
    '李思澄，中国科学技术大学人工智能与数据科学学院2026届硕士研究生，主要研究基于强化学习和模仿学习的机器人智能控制。': 'Sicheng Li is a master’s student at USTC studying intelligent robot control through reinforcement and imitation learning.',
    '邓一诚，中国科学技术大学，研究方向为具身智能': 'Yicheng Deng studies embodied intelligence at USTC.',
    '杨家越，中国科学技术大学计算机科学与技术专业本科生，现于剑桥大学开展访问研究。主要研究方向包括三维、四维计算机视觉与空间智能。': 'Jiayue Yang is an undergraduate student in Computer Science and Technology at USTC and is currently conducting visiting research at the University of Cambridge. His research focuses on 3D and 4D computer vision and spatial intelligence.',
    '宋涵亮，中科大人工智能与数据科学学院在读本科生。': 'Hanliang Song is an undergraduate at USTC’s School of Artificial Intelligence and Data Science.',
    '刘心语，中国科学技术大学数据科学专业的大三本科生，现阶段主要关注 manipulation 与 3D 视觉方向。她对具身智能相关问题有较强的兴趣，希望在实验室中进一步积累研究与实践经验，并持续提升在感知、建模与算法实现方面的能力。': 'Xinyu Liu is a junior undergraduate in Data Science at USTC, interested in manipulation, 3D vision, and embodied intelligence.',
    '加入我们': 'Join Us',
    '我们实验室欢迎对空间智能、智能无人系统等领域感兴趣的优秀学生和研究人员加入。我们提供开放、创新的研究环境和丰富的学术资源。': 'We welcome students and researchers who are passionate about spatial intelligence and autonomous systems. SPIN Lab offers an open, creative research environment and strong academic resources.',
    '查看招生信息': 'View Open Positions',
    '成员资料维护': 'Member Profile',

    '加入我们的团队': 'Join Our Team',
    '欢迎对空间智能和具身智能研究充满热情的优秀学者加入！': 'We welcome outstanding researchers who are passionate about spatial and embodied intelligence.',
    '博士后研究员': 'Postdoctoral Researchers',
    '全职博士后研究员职位': 'Full-time postdoctoral positions',
    '提供具有竞争力的薪酬待遇': 'Competitive salary and benefits',
    '申请国家和省部级博士后基金': 'Support for national and provincial fellowship applications',
    '参与顶级会议论文发表': 'Opportunities to publish at leading venues',
    '提供国际会议交流和访学机会': 'International conference and visiting opportunities',
    '全日制博士研究生项目': 'Full-time PhD program',
    '学制3-5年': '3–5 years',
    '提供奖学金和助教机会': 'Scholarships and teaching assistantships',
    '参与国际顶级会议和论文发表': 'Publish at leading international venues',
    '有机会参与国际交流和实习': 'International exchange and internship opportunities',
    '全日制硕士研究生项目': 'Full-time master’s program',
    '学制2-3年': '2–3 years',
    '提供奖学金和助研机会': 'Scholarships and research assistantships',
    '参与高水平会议和论文发表': 'Publish at high-quality conferences and journals',
    '有机会继续攻读博士学位': 'Pathways to continue toward a PhD',
    '本科生科研': 'Undergraduate Research',
    '面向本科生的科研训练': 'Research training for undergraduates',
    '参与实验室研究项目': 'Participate in laboratory research projects',
    '提供本科生科研奖励计划': 'Undergraduate research awards',
    '优秀者可推荐攻读研究生': 'Graduate study recommendations for outstanding students',
    '培养学术研究和创新能力': 'Develop research and innovation skills',
    '申请要求': 'Requirements',
    '期待具有扎实专业基础和研究热情的优秀学者加入我们的团队': 'We seek motivated candidates with strong fundamentals and genuine research curiosity.',
    '学术背景': 'Academic Background',
    '研究经验': 'Research Experience',
    '专业技能': 'Technical Skills',
    '语言能力': 'Language Skills',
    '请有意向的同学将个人简历（含GPA）、成绩单、代表性项目或论文材料发送至邮箱：yan.xia@ustc.edu.cn，邮件标题请注明“应聘实习/硕士/博士/博士后+姓名+学校”。': 'Please email your CV (including GPA), transcript, and representative projects or papers to yan.xia@ustc.edu.cn. Use the subject: “Application – Internship/Master/PhD/Postdoc – Name – University.”',

    '全部成果': 'All',
    '会议论文': 'Papers',
    '学术研讨会': 'Workshops',
    '论文PDF': 'PDF',
    '会议详情': 'Event Details',
    '举办时间：': 'Date:',
    '举办地点：': 'Location:',
    '会议语言：': 'Language:',
    '英文': 'English',
    '组织者信息': 'Organizers',
    '主办单位：中国科学技术大学SPIN Lab实验室': 'Hosted by SPIN Lab, University of Science and Technology of China',

    '实验室成员信息登记': 'Member Profile Submission',
    '本入口面向已经加入 SPIN Lab 的新成员。提交资料后，相关信息将用于更新团队成员页面。': 'This form is for new SPIN Lab members. Submitted information will be used to update the People page.',
    '提交个人介绍': 'Submit Your Profile',
    '使用 GitHub 表单提交信息，可直接拖拽上传头像，并保留完整的资料记录。': 'Submit through GitHub, upload your portrait by drag and drop, and keep a complete record of your profile.',
    '填写资料': 'Complete Profile',
    '填写姓名、成员类别、个人简介和公开联系方式。': 'Provide your name, role, short bio, and public contact information.',
    '上传头像': 'Upload Portrait',
    '把清晰的正面照片拖入头像栏，提交前检查预览。': 'Upload a clear front-facing portrait and check the preview before submitting.',
    '完成登记': 'Finish Submission',
    '资料确认完成后，网站会自动更新成员介绍。': 'Once confirmed, the website will update your profile automatically.',
    '提交前请准备': 'Before You Start',
    '姓名与成员类别': 'Name and role',
    '100–300 字个人简介': 'A 100–300 word bio',
    '清晰、比例合适的个人头像': 'A clear, well-proportioned portrait',
    '邮箱及个人主页（可选）': 'Email and personal homepage (optional)',
    'GitHub 主页（可选）': 'GitHub profile (optional)',
    'Google Scholar（可选）': 'Google Scholar (optional)',
    '打开成员登记表': 'Open Submission Form',
    '提交内容和头像将公开显示在 GitHub 与实验室网站上，请勿填写手机号、身份证号、住址等隐私信息。提交需要登录 GitHub。': 'Your profile and portrait will be public on GitHub and the lab website. Do not include private information. A GitHub account is required.',
    '成员信息登记': 'Member Submission',
    '需要帮助？': 'Need Help?',
    '如无法使用 GitHub 提交，请联系实验室协助登记。': 'Contact the lab if you cannot submit through GitHub.',
    '返回团队页面': 'Back to People',

    '搜索结果': 'Search Results',
    '以下是您搜索的结果': 'Results matching your query',
    '搜索结果:': 'Results for:',
    '搜索': 'Search',
    '正在搜索...': 'Searching...',
    '输入关键词搜索...': 'Enter keywords...',
    '请输入至少2个字符进行搜索': 'Please enter at least two characters.',

    '欢迎通过以下方式与我们取得联系，了解我们的研究工作或寻求合作机会': 'Get in touch to learn about our research or discuss collaboration opportunities.',
    '电子邮件': 'Email',
    '电话': 'Phone',
    '实验室地址': 'Lab Address',
    '办公时间': 'Office Hours',
    '关注我们': 'Follow Us',
    '发送消息': 'Send a Message',
    '姓名': 'Name',
    '电子邮箱': 'Email',
    '主题': 'Subject',
    '消息内容': 'Message',
    '公共交通': 'Public Transport',
    '停车信息': 'Parking',
    '校园指南': 'Campus Guide',
    '常见问题': 'Frequently Asked Questions',
    '请输入您的姓名': 'Your name',
    '请输入您的电子邮箱': 'Your email',
    '请输入消息主题': 'Message subject',
    '请输入您的消息内容': 'Your message'
  };

  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  const originalTitle = document.title;
  let currentLanguage = 'zh';
  let applying = false;

  function normalize (value) {
    return value.replace(/\s+/g, ' ').trim();
  }

  function translateTextNode (node, language) {
    if (!node.parentElement || node.parentElement.closest('.language-switcher, script, style, noscript')) return;

    const current = normalize(node.nodeValue || '');
    if (!current) return;

    let original = originalText.get(node);
    const translatedOriginal = original ? (translations[original] || original) : '';
    if (!original || (current !== original && current !== translatedOriginal)) {
      original = current;
      originalText.set(node, original);
    }

    const next = language === 'en' ? (translations[original] || original) : original;
    const leading = (node.nodeValue.match(/^\s*/) || [''])[0];
    const trailing = (node.nodeValue.match(/\s*$/) || [''])[0];
    const value = leading + next + trailing;
    if (node.nodeValue !== value) node.nodeValue = value;
  }

  function translateAttributes (element, language) {
    const attributes = ['placeholder', 'title', 'aria-label', 'alt'];
    let originals = originalAttributes.get(element);
    if (!originals) {
      originals = {};
      originalAttributes.set(element, originals);
    }

    attributes.forEach(attribute => {
      if (!element.hasAttribute(attribute)) return;
      const current = normalize(element.getAttribute(attribute));
      if (!originals[attribute]) originals[attribute] = current;
      const original = originals[attribute];
      const value = language === 'en' ? (translations[original] || original) : original;
      if (element.getAttribute(attribute) !== value) element.setAttribute(attribute, value);
    });
  }

  function translateSubtree (root, language) {
    if (!root) return;

    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root, language);
      return;
    }

    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) translateTextNode(node, language);

    if (root.nodeType === Node.ELEMENT_NODE) translateAttributes(root, language);
    root.querySelectorAll?.('[placeholder], [title], [aria-label], [alt]').forEach(element => {
      translateAttributes(element, language);
    });
  }

  function updateSwitcher () {
    const switcher = document.querySelector('.language-switcher');
    if (!switcher) return;
    switcher.querySelectorAll('[data-lang]').forEach(option => {
      const active = option.dataset.lang === currentLanguage;
      option.classList.toggle('active', active);
      option.setAttribute('aria-hidden', String(!active));
    });
    switcher.setAttribute('aria-label', currentLanguage === 'zh' ? 'Switch to English' : '切换到中文');
    switcher.title = currentLanguage === 'zh' ? 'Switch to English' : '切换到中文';
  }

  function applyLanguage (language, persist = true) {
    currentLanguage = language === 'en' ? 'en' : 'zh';
    applying = true;
    translateSubtree(document.body, currentLanguage);
    document.documentElement.lang = currentLanguage === 'en' ? 'en' : 'zh-CN';
    document.body.classList.toggle('lang-en', currentLanguage === 'en');
    document.title = currentLanguage === 'en' ? (translations[originalTitle] || originalTitle) : originalTitle;
    updateSwitcher();
    if (persist) localStorage.setItem('spin-language', currentLanguage);
    window.clearTimeout(window.spinI18nFallbackTimer);
    document.documentElement.classList.remove('spin-i18n-pending');
    applying = false;
    document.dispatchEvent(new CustomEvent('spin:languagechange', { detail: { language: currentLanguage } }));
  }

  function createSwitcher () {
    const navRight = document.querySelector('.nav-right');
    if (!navRight || navRight.querySelector('.language-switcher')) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'language-switcher';
    button.innerHTML = '<span data-lang="zh">中</span><span class="language-divider">/</span><span data-lang="en">EN</span>';
    button.addEventListener('click', () => applyLanguage(currentLanguage === 'zh' ? 'en' : 'zh'));

    const search = navRight.querySelector('.search-box');
    navRight.insertBefore(button, search || null);
  }

  function init () {
    createSwitcher();
    const saved = localStorage.getItem('spin-language');
    const initial = saved === 'en' || saved === 'zh' ? saved : 'zh';
    applyLanguage(initial, false);

    const observer = new MutationObserver(mutations => {
      if (applying) return;
      applying = true;
      mutations.forEach(mutation => {
        if (mutation.type === 'characterData') {
          translateTextNode(mutation.target, currentLanguage);
        } else {
          mutation.addedNodes.forEach(node => translateSubtree(node, currentLanguage));
        }
      });
      applying = false;
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  window.spinI18n = {
    applyLanguage,
    getLanguage: () => currentLanguage,
    translate: value => currentLanguage === 'en' ? (translations[normalize(value)] || value) : value
  };

  if (document.body) {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
}());
