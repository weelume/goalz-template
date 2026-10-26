import type {Bilingual} from '../host'
export const text=(zh:string,en:string):Bilingual=>({zh,en})
export const programs=[
{slug:'goalkeeper-academy',title:text('守门员学院','Goalkeeper Academy'),image:'course-keeper.webp',description:text('为守门员打造的专项训练，通过专注的指导与个性化反馈，提升反应速度、判断与自信。','Specialized training designed for goalkeepers — improving reflexes and thinking with focused coaching and personalized feedback.'),tags:[text('因材施教','Tailored Approach'),text('更快进步','Faster Progress')]},
{slug:'group-trainings',title:text('小组训练','Group Trainings'),image:'course-group.webp',description:text('一起学习、比赛与成长。通过有趣的训练与合作，建立技术、团队意识和赛场自信。','Learn, play, and grow together. Our group sessions focus on teamwork, technique, and building confidence through fun, engaging activities.'),tags:[text('团队成长','Team Growth'),text('技术发展','Skill Development')]},
{slug:'personal-trainings',title:text('私人训练','Personal Trainings'),image:'player-two.webp',description:text('围绕你的目标设计一对一课程，在专业教练的专注指导下，更快突破自身能力。','One-on-one sessions tailored to your goals. Perfect for players who want to improve faster with direct attention from our professional coaches.'),tags:[text('专业指导','Expert Coaching'),text('从容应战','Confidence Under Pressure')]},
{slug:'player-camps-events',title:text('训练营与活动','Player Camps & Events'),image:'player-one.webp',description:text('充满活力、竞技与乐趣的季节训练营和赛事，让球员把所学带到真实比赛。','Seasonal football camps and tournaments that bring energy, competition, and fun — helping players confidently apply their skills in real game scenarios.'),tags:[text('真实比赛','Real Game Experience'),text('社群激励','Community & Motivation')]},
{slug:'tactical-intelligence',title:text('战术意识','Tactical Intelligence'),image:'course-tactics.webp',description:text('通过情境训练培养战术意识和比赛思考，让球员理解空间、沟通与决策。','A program focused on tactical awareness and match-specific thinking skills development through scenario-based training.'),tags:[text('场上沟通','Communication'),text('阅读比赛','Game Reading')]},
{slug:'player-performance',title:text('球员表现','Player Performance'),image:'course-performance.webp',description:text('以系统训练提升高阶技术与身体素质，为更高水平的比赛做好准备。','A structured program focused on developing advanced technical skills and building physical strength to prepare players for higher competition.'),tags:[text('控球能力','Ball Mastery'),text('灵活敏捷','Agility')]},
]
export const coaches=[
{slug:'marco-velasquez',name:'Marco Velasquez',years:'12+',image:'marco.webp'},
{slug:'samira-holt',name:'Samira Holt',years:'8+',image:'samira.webp'},
{slug:'theo-markovic',name:'Theo Markovic',years:'10+',image:'theo.webp'},
{slug:'lena-duarte',name:'Lena Duarte',years:'9+',image:'lena.webp'},
{slug:'aaron-rossi',name:'Aaron Rossi',years:'7+',image:'aaron.webp'},
{slug:'maya-kessler',name:'Maya Kessler',years:'5+',image:'maya.webp'},
]
export const advantages=[
{title:text('专业教练','Professional Coaching'),body:text('每一次训练都由经验丰富的教练带领，关注正确技术与持续成长。','Every session is led by experienced coaches focused on proper technique and growth.'),image:'player-one.webp'},
{title:text('小组教学','Small Group Training'),body:text('控制每组人数，让每位球员都能获得个性化关注与具体反馈。','Limited group sizes ensure every player benefits from personal attention and individual feedback.'),image:'player-two.webp'},
{title:text('技术与心态','Skill Development'),body:text('培养足球技能，也培养场内外的自信、纪律和团队意识。','We develop football skills while shaping confident and disciplined team players on and off the field.'),image:'player-three.webp'},
{title:text('现代化场地','Modern Facilities'),body:text('专业球场与安全环境，为享受足球、提升表现创造条件。','Professional pitches and safe environments that support enjoyment, development, and great results.'),image:'ball.webp'},
]
export const ageGroups=[
{title:text('启蒙组','Minis'),age:text('4–6 岁','Ages 4–6'),body:text('在游戏和运动中，建立协调、平衡以及对足球的热爱。','Learning through play and movement, we build coordination, balance, and a love for active games.')},
{title:text('少年组','Juniors'),age:text('7–12 岁','Ages 7–12'),body:text('专注技术、自信与比赛理解，为未来发展打好基础。','Focused on technique, confidence, and game understanding. The perfect stage to build basics.')},
{title:text('青年组','Teens'),age:text('13–17 岁','Ages 13–17'),body:text('提升战术、体能和高阶技能，为竞技比赛做好准备。','Advanced training in tactics, fitness, and skills preparing players for competitive football action.')},
]
export const reviews=[
{name:'Anna Delmayer',quote:text('孩子加入一年后，不仅技术进步了，也在教练的鼓励中找到了更大的目标。','My son joined a year ago, and his skills and ambitions have grown thanks to the coaches and motivation.')},
{name:'Daniel Roberts',quote:text('我以前在球场上很害羞。现在我踢得更专注、更有热情，这个赛季还成了队长！','Before joining, I was shy on the field. Now I play with focus and passion — I even made captain this season!')},
{name:'Oleg Dameniuk',quote:text('训练安排清晰，孩子们始终充满兴趣。这里把学习和快乐很好地结合起来。','The sessions are organized well and keep kids interested. They fully balance learning with fun.')},
{name:'Mathew Daniels',quote:text('女儿学会了踢足球，也学会相信自己。教练营造的氛围让人安心。','My daughter learned to play football and believe in herself. The coaches create a supportive space.')},
]
export const faqs=[
{q:text('谁可以加入学院？','Who can join the academy?'),a:text('训练按年龄与水平分组，初学者无需比赛经验。具体年龄与课程适配请先通过体验课了解。','Training groups are divided by age and skill level. No prior competitive experience is required for beginners; a trial helps identify the right program.')},
{q:text('可以先参加体验课吗？','Is there a trial session available?'),a:text('可以。你可以填写体验课演示表单，了解需要准备的信息；此站点不会真正预约或保存报名。','Yes. Explore the trial form to see the information required. This demonstration does not create a booking or save a registration.')},
{q:text('如何为孩子报名？','How do I register my child?'),a:text('在加入学院页面填写球员及监护人信息，选择位置和日期。当前模板仅作本地校验演示。','Enter player and guardian details on the registration page, then select a position and trial date. This template validates locally only.')},
{q:text('加入前需要能力评估吗？','Do players need to pass an evaluation?'),a:text('体验训练帮助教练了解球员的经验与目标，并建议适合的训练分组。','A trial helps coaches understand experience and goals and recommend a suitable training group.')},
{q:text('球员会参加比赛吗？','Do players participate in tournaments?'),a:text('课程包含团队配合与比赛情境练习。具体赛事由实际运营方安排并与监护人确认。','Programs include teamwork and game scenarios. Actual tournament arrangements are confirmed by the academy with guardians.')},
{q:text('比赛多久举行一次？','How often are matches played?'),a:text('安排会随年龄组、训练阶段与赛季变化，请向学院了解实际计划。','Schedules vary by age group, training stage and season. Contact the academy for the actual calendar.')},
{q:text('比赛需要外出吗？','Do players travel for tournaments?'),a:text('如有外出赛事，会提前与监护人确认安排和必要授权。','Any travel arrangements and required permission are confirmed with guardians in advance.')},
{q:text('学院在哪里？','Where is the academy located?'),a:text('联系页展示的是模板示例地址。正式使用前请替换成实际训练地点。','The contact page contains a demonstration address. Replace it with the actual training location before use.')},
{q:text('天气不好时怎么办？','What happens during bad weather?'),a:text('实际训练方应及时告知改期或场地调整，确保训练安全。','The academy should communicate rescheduling or venue changes promptly to keep training safe.')},
{q:text('教练如何与家长沟通？','How do coaches communicate with parents?'),a:text('教练可定期提供训练反馈。此模板没有消息发送或家长账户功能。','Coaches can provide regular training feedback. This template has no messaging or parent account service.')},
]
export const stats=[{value:500,suffix:'+',title:text('受训球员','Players Trained'),body:text('从第一次触球到竞技赛场，每个成长都值得被看见。','From first-time players to competitive athletes, each with a success story.')},{value:100,suffix:'+',title:text('认证教练','Certified Coaches'),body:text('专业指导贯穿每次训练。','Experienced professionals guiding every session.')},{value:4.9,suffix:'★',title:text('家长评价','Parent Satisfaction'),body:text('以认真训练与成长建立信任。','Trusted by families for quality coaching and real results.')},{value:10,suffix:'+',title:text('训练经验','Years of Experience'),body:text('让技术、自信与热爱一起成长。','Developing skills, confidence, and a love for the game.')}]
export const navItems=[{slug:'about-us',label:text('关于学院','About')},{slug:'programs',label:text('训练课程','Programs')},{slug:'team',label:text('球员团队','Team')}]
export const moreItems=[{slug:'',label:text('首页','Home')},{slug:'academy-schedule',label:text('训练课表','Schedule')},{slug:'membership-plans',label:text('会员计划','Membership Plans')},{slug:'gallery',label:text('训练图库','Gallery')},{slug:'events',label:text('活动','Events')},{slug:'coaches',label:text('教练团队','Coaches')},{slug:'blog',label:text('学院博客','Blog')},{slug:'faq',label:text('常见问题','FAQ')},{slug:'register',label:text('加入学院','Register')},{slug:'privacy',label:text('隐私说明','Privacy')},{slug:'terms',label:text('使用条款','Terms')}]
