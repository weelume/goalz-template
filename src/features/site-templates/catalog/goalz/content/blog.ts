import {text} from './data'
import type {Bilingual} from '../host'
export interface ArticleSection {title:Bilingual;paragraphs:Bilingual[];items?:Bilingual[]}
export interface Article {slug:string;title:Bilingual;author:string;date:string;image:string;sections:ArticleSection[]}
export const articles:Article[]=[
{slug:'from-play-to-progress-the-importance-of-early-motor-skills-growth',title:text('从玩耍到进步：早期运动能力为何重要','From Play to Progress: The Importance of Early Motor Skills Growth'),author:'Maya Kessler',date:'2026-01-09',image:'blog-one.webp',sections:[
{title:text('足球从这里开始','Where Football Begins'),paragraphs:[text('对 4 至 6 岁的孩子来说，足球首先是运动、想象与发现的游乐场。他们尽情奔跑、踢球，为掌握的新技能庆祝。这些快乐时刻，也在悄悄培养运动基础。','For our youngest players, football is a playground of movement, imagination, and joyful discovery. At ages 4 to 6, Minis celebrate running, kicking and every new skill. Beneath the fun lies the development of early motor skills.'),text('基础动作帮助孩子成长为自信、有能力的运动参与者。启蒙训练通过游戏、创造与探索培养这些能力，而不是严格操练与压力。','Foundational movements help children grow into confident, capable athletes. These skills are taught through play, creativity, and exploration rather than pressure-filled expectations.')]},
{title:text('为什么早期运动能力重要','Why Motor Skills Matter in Early Childhood'),paragraphs:[text('孩子通过运动学习。跳跃、跨步、踢球与翻滚让肌肉、反应和协调不断建立联系。停住滚动的球、快速变向和转身保持平衡，都是身体素养的一部分。','Children learn through movement. Every hop, skip, kick, and tumble develops muscles, reflexes and coordination. Stopping a rolling ball, changing direction and balancing during a turn build physical literacy.'),text('这些看似微小的动作，让孩子能够在运动环境中更舒适、安全和快乐地活动，也为足球与长期的运动自信打下基础。','These small movements help children move comfortably, safely, and joyfully in athletic environments. They are building blocks of football ability and lifelong physical confidence.')]},
{title:text('通过运动建立自信','Building Confidence Through Movement'),paragraphs:[text('每一次小小的成功都值得庆祝。第一次运球、把球踢向想去的方向，都让孩子相信“我可以做到”。','Every small success matters. Dribbling for the first time or kicking the ball in the intended direction creates the belief that “I can do this!”'),text('被支持、被鼓励，也为努力感到骄傲的孩子，更愿意再试一次、继续进步。启蒙训练关注进步，而不是完美。','When children feel supported, encouraged, and proud of their effort, they become more willing to try again and explore bigger challenges. Minis training focuses on progress, not perfection.')]},
{title:text('一步一步，为未来做准备','Preparing for the Future, One Small Step at a Time'),paragraphs:[text('色彩鲜明的标志桶、创意游戏和欢笑背后，是对身体控制、速度变化、空间理解与协调的培养。这些能力会成为少年和青年训练的基础。','Colorful cones, creative games and laughter develop body control, changing speed, understanding space and coordinating movement. These are foundations for later Juniors and Teens training.'),text('运动基础扎实的孩子，往往更容易适应结构化训练，带球和团队活动也更从容。今天的基础，为明天铺路。','Strong early motor skills help children transition into structured training, feel comfortable with the ball and move in a team environment. The fundamentals built today create the pathway for tomorrow.')]},
{title:text('让快乐成为成长的第一步','Where Fun Becomes the First Step Toward Greatness'),paragraphs:[text('足球梦想常常开始于最小的瞬间：快乐的一脚、带着笑声的冲刺、停住球后的微笑。通过有意义的运动与探索，孩子发现足球，也发现活跃、表达和勇敢的快乐。','Football dreams begin in small moments: a joyful kick, a sprint full of laughter, or a proud smile after stopping a ball. Through playful exploration, young players discover football and the joy of being active, expressive and brave.'),text('在这个年龄，快乐本身就是学习，也是足球旅程最好的起点。','At this age, fun is the learning — and it is the perfect place for every football journey to begin.')]}]},
{slug:'rising-talents-meet-the-future-professional-stars-of-our-teens-team',title:text('成长中的天赋：认识青年队的未来之星','Rising Talents: Meet the Future Professional Stars of Our Teens Team'),author:'Theo Markovic',date:'2026-01-17',image:'blog-two.webp',sections:[
  {
    "title": {
      "zh": "青年阶段：从天赋到有意识的成长",
      "en": "Teen Football: Turning Ability into Purpose"
    },
    "paragraphs": [
      {
        "zh": "13 至 17 岁的球员开始面对更快的节奏、更明确的位置职责和更激烈的竞争。这个阶段的成长，需要把训练中的技术带进真正的比赛判断。",
        "en": "Between 13 and 17, players meet faster games and more demanding roles. The next step is to connect practiced skills with choices made alongside teammates."
      },
      {
        "zh": "这篇学院故事关注四名示例球员。不同位置上的进步，说明潜能并没有统一的表现形式：有人学会创造机会，有人学会让整支队伍更稳定。",
        "en": "Four illustrative academy stories show different kinds of progress. One player creates opportunities, another sets the tempo, while others give their teammates a dependable defensive foundation."
      }
    ]
  },
  {
    "title": {
      "zh": "Jasper：在进攻中学会选择",
      "en": "Jasper: Choosing the Right Attacking Action"
    },
    "paragraphs": [
      {
        "zh": "Jasper 的速度让他敢于挑战防线。教练希望他在接球前观察中路与边路的空间，区分适合一对一突破的机会，以及更值得传球的时刻。",
        "en": "Jasper can threaten defenders with his pace. His current focus is scanning before receiving, recognizing a useful one-on-one, and spotting when a teammate has the better route forward."
      },
      {
        "zh": "他也练习回撤接应，为队友创造继续进攻的线路。对前锋而言，成长既包括完成射门，也包括帮助球队把一次机会组织得更好。",
        "en": "Dropping into a passing lane adds another option to his attacking game. A forward can influence the outcome by connecting the move as well as by taking the final shot."
      }
    ]
  },
  {
    "title": {
      "zh": "Tyson：让中场配合更有秩序",
      "en": "Tyson: Giving the Midfield a Clearer Rhythm"
    },
    "paragraphs": [
      {
        "zh": "Tyson 的训练重点，是接球前确认身后的压力，再决定转身、回传或改变方向。稳定的第一脚处理，能让队友获得继续移动的时间。",
        "en": "Tyson works on checking the pressure behind him before choosing whether to turn, return the pass, or switch play. A settled first touch gives the next runner more time."
      },
      {
        "zh": "在比赛中，他尝试用简短、具体的提示提醒队友位置。中场的组织能力既来自脚下技术，也来自愿意承担沟通责任。",
        "en": "He also practices short, useful calls that help nearby players find their positions. His midfield role combines technical execution with the responsibility to keep people connected."
      }
    ]
  },
  {
    "title": {
      "zh": "Isabel：在后防线上建立稳定",
      "en": "Isabel: Building Reliability in Defence"
    },
    "paragraphs": [
      {
        "zh": "Isabel 通过观察对手与球的关系来调整站位。防守练习不只统计抢断次数，也检查她是否保护了危险空间，是否给队友留下补位时间。",
        "en": "Isabel adjusts her position by reading both the attacker and the ball. Her reviews consider protected space and recovery time for teammates, alongside successful tackles."
      },
      {
        "zh": "她逐渐能在压力下保持清晰，及时提醒队友并果断完成处理。可靠的防守来自多次正确的小选择，而不只是一次显眼的解围。",
        "en": "Clear communication and a decisive next action help her manage pressure. Consistency comes from a sequence of small decisions, rather than depending on a single spectacular clearance."
      }
    ]
  },
  {
    "title": {
      "zh": "Gabriel：从球门后方支持全队",
      "en": "Gabriel: Supporting the Team from Goal"
    },
    "paragraphs": [
      {
        "zh": "Gabriel 的训练把扑救准备、身体平衡和出球选择放在同一个情境中。接到球之后，寻找可靠的传球对象，是下一次进攻的起点。",
        "en": "Gabriel combines his set position, balance, and distribution in the same exercise. After securing possession, identifying a dependable passing option starts the next phase of play."
      },
      {
        "zh": "门将还能通过观察提醒队友。稳定的呼喊与清晰的指令，有助于让后防线知道身后有人支持。",
        "en": "The goalkeeper sees spaces that teammates may miss. Consistent calls and clear information help defenders understand the support available behind them."
      }
    ]
  },
  {
    "title": {
      "zh": "用不同的成长故事激励下一步",
      "en": "Recognizing Progress Across the Whole Team"
    },
    "paragraphs": [
      {
        "zh": "这些示例展示了不同位置的学习目标，不能用同一张进球表衡量每个人。学院通过具体反馈帮助球员看见变化，也让他们知道下一次训练可以努力什么。",
        "en": "These examples call for different measures of progress. Specific feedback helps each player identify a change they have made and one practical focus for the next session."
      },
      {
        "zh": "保持好奇、遵守约定、支持队友，让个人能力逐渐成为团队能力。每个球员都可以从自己的起点继续向前。",
        "en": "Curiosity, dependable habits, and support for teammates help individual ability become a team resource. Every player can take a useful next step from their own starting point."
      }
    ]
  }
]},
{slug:'goalkeepers-of-tomorrow-what-makes-a-truly-great-young-shot-stopper',title:text('未来守门员：优秀年轻门将的关键能力','Goalkeepers of Tomorrow: What Makes a Truly Great Young Shot-Stopper?'),author:'Aaron Rossi',date:'2026-01-19',image:'blog-three.webp',sections:[
  {
    "title": {
      "zh": "门将位置需要完整的能力",
      "en": "The Goalkeeper’s Role: More Than Stopping Shots"
    },
    "paragraphs": [
      {
        "zh": "门将既需要完成扑救，也要判断何时出击、如何传球，以及怎样向后防线提供信息。这些任务会同时考验身体准备与注意力。",
        "en": "Goalkeepers decide when to advance, where to distribute, and what information defenders need. Their preparation combines physical readiness with attention to a changing game."
      },
      {
        "zh": "青年阶段的专项训练应循序渐进，让球员在安全的环境中理解动作，熟悉球的线路，并建立愿意继续尝试的信心。",
        "en": "Youth sessions should introduce these demands in manageable stages. A safe learning environment allows keepers to understand the movement, read the ball, and build the confidence to try again."
      }
    ]
  },
  {
    "title": {
      "zh": "从愿意守护球门开始",
      "en": "Starting with Willingness and Responsibility"
    },
    "paragraphs": [
      {
        "zh": "有些孩子喜欢扑住来球的挑战，也有人享受保护队友的责任。教练首先观察他们的兴趣，帮助他们熟悉接球、落地和重新站起的基本动作。",
        "en": "Some children enjoy the challenge of an incoming shot; others value the responsibility of supporting the team. Coaches can begin with that interest while teaching catches, landings, and safe recovery."
      },
      {
        "zh": "勇气不等于忽视安全。适合年龄的球速、距离与动作难度，让主动参与和正确习惯一起形成。",
        "en": "Being willing to participate does not remove the need for care. Suitable ball speed, distance, and difficulty allow positive engagement and safe habits to develop together."
      }
    ]
  },
  {
    "title": {
      "zh": "把反应练习与观察结合",
      "en": "Connecting Reactions with Observation"
    },
    "paragraphs": [
      {
        "zh": "反应练习不应只要求“越快越好”。先识别来球方向、保持准备姿态，再完成合适的处理，能帮助球员理解一次扑救为什么有效。",
        "en": "Reaction work is more useful when the keeper can explain the cue. Reading the direction, maintaining a ready position, and choosing an action give speed a clear purpose."
      },
      {
        "zh": "通过变化球的高度、角度和起始位置，教练可以逐步增加挑战，并在每组练习后留出恢复和反馈时间。",
        "en": "Coaches can vary the height, angle, and starting position of a service. Short sets with recovery and feedback keep the challenge focused and appropriate."
      }
    ]
  },
  {
    "title": {
      "zh": "步法让扑救更从容",
      "en": "Footwork Creates a Better Starting Position"
    },
    "paragraphs": [
      {
        "zh": "在触球之前，小幅度移动往往已经决定了处理难度。侧向调整、重心转换和及时站稳，帮助门将面对来球保持平衡。",
        "en": "Small adjustments before contact can change the difficulty of a save. Lateral steps, controlled weight transfer, and a stable set position help the keeper meet the ball in balance."
      },
      {
        "zh": "步法训练还需要接上后续动作：扑救后如何起身，拿球后如何观察，失去位置后如何回到合适区域。",
        "en": "Footwork also continues after the first action. Recovering after a save, looking up with possession, and returning to a useful area make the movement part of a complete sequence."
      }
    ]
  },
  {
    "title": {
      "zh": "在持续尝试中成长",
      "en": "Developing Confidence One Session at a Time"
    },
    "paragraphs": [
      {
        "zh": "年轻门将会遇到失球和判断失误。复盘时关注可以控制的环节，例如准备姿势、观察和沟通，比只讨论结果更有帮助。",
        "en": "Young keepers will concede and misjudge situations. Reviewing controllable details such as preparation, observation, and communication gives them a more useful task than judging the result alone."
      },
      {
        "zh": "支持性的反馈与清晰的小目标，让门将逐渐具备承担责任的能力，也能继续享受这个位置。",
        "en": "Supportive feedback and specific goals help keepers accept responsibility while continuing to enjoy the role. Development should leave room for both challenge and satisfaction."
      }
    ]
  }
]},
{slug:'training-smarter-the-techniques-every-junior-player-should-maste',title:text('更聪明地训练：少年球员应掌握的技术','Training Smarter: The Techniques Every Junior Player Should Master'),author:'Samira Holt',date:'2026-01-20',image:'blog-four.webp',sections:[
  {
    "title": {
      "zh": "少年阶段，为技术建立可靠基础",
      "en": "The Junior Years: Establishing Useful Habits"
    },
    "paragraphs": [
      {
        "zh": "7 至 12 岁的训练适合把基本技术放进容易理解的游戏中。球员既需要足够多的触球机会，也需要知道练习与比赛之间的联系。",
        "en": "For players aged 7 to 12, simple games can connect a technical task with a recognizable match situation. Frequent involvement matters, along with understanding what the practice is for."
      },
      {
        "zh": "好的课程在挑战和鼓励之间保持平衡。通过观察、尝试和交流，孩子逐渐学会自己寻找解决办法。",
        "en": "A useful session balances an achievable challenge with encouragement. Observation, experimentation, and discussion give children opportunities to find solutions for themselves."
      }
    ]
  },
  {
    "title": {
      "zh": "第一脚处理，为下一步留出选择",
      "en": "First Touch: Preparing the Next Action"
    },
    "paragraphs": [
      {
        "zh": "接球前看一眼周围，再让第一脚触球服务于下一步：向空间转身、护住球，或把球传给队友。练习需要让球员理解不同处理的用途。",
        "en": "A look around before receiving helps the player choose what the first touch should achieve: turning into space, protecting possession, or setting up a pass."
      },
      {
        "zh": "教练可以从没有对抗的接传开始，再逐渐加入方向和防守压力。目标是获得更多选择，而不是要求每次触球都完全一样。",
        "en": "Coaches can begin without opposition, then add direction and pressure. The aim is to create options, rather than asking for an identical touch in every situation."
      }
    ]
  },
  {
    "title": {
      "zh": "控球与带球，学会识别空间",
      "en": "Ball Control: Understanding When to Carry the Ball"
    },
    "paragraphs": [
      {
        "zh": "带球练习既包括变向和平衡，也包括观察防守者与空当。孩子需要通过小场情境体验何时推进、何时护球、何时寻找队友。",
        "en": "Dribbling involves balance and changes of direction, but also reading a defender and the available space. Small games let players experience when to advance, shield, or combine."
      },
      {
        "zh": "允许尝试不同做法，再讨论选择带来的结果，有助于培养创造力和判断。一次丢球也可以成为下一次练习的线索。",
        "en": "Trying more than one approach and discussing the outcome supports creativity and judgment. Losing possession can provide a practical question for the next attempt."
      }
    ]
  },
  {
    "title": {
      "zh": "重视理解，而不是追求零失误",
      "en": "Learning Well Matters More Than Avoiding Every Mistake"
    },
    "paragraphs": [
      {
        "zh": "训练质量体现在球员是否参与、是否理解任务，以及能否把反馈用于下一次尝试。适当的重复应配合休息和清晰目标。",
        "en": "Session quality can be judged by involvement, understanding, and whether a player uses feedback in the next attempt. Repetition works best with clear goals and suitable rest."
      },
      {
        "zh": "家长和教练共同关注努力与个人进步，减少不必要的比较，让孩子有空间探索自己的踢球方式。",
        "en": "When adults focus on effort and individual progress, children have more room to explore. Comparisons should not become the main measure of their experience."
      }
    ]
  },
  {
    "title": {
      "zh": "把基本功带进未来的比赛",
      "en": "Carrying the Fundamentals into Future Games"
    },
    "paragraphs": [
      {
        "zh": "稳定接球、合理带球、及时传球和主动沟通会彼此配合。随着比赛复杂度提高，这些基础能帮助球员继续学习。",
        "en": "Receiving, carrying, passing, and communication reinforce one another. As games become more complex, those habits provide a base for continued learning."
      },
      {
        "zh": "训练结束时，让孩子说出一个发现和一个想继续尝试的动作。可理解、可实现的下一步，比笼统的“更努力”更有价值。",
        "en": "At the end of a session, ask for one discovery and one action to try again. A specific next step is more useful than a general request to work harder."
      }
    ]
  }
]},
{slug:'inside-the-velocity-cup-the-tournament-that-transforms-young-players',title:text('走进极速杯：让年轻球员成长的赛事','Inside the Velocity Cup: The Tournament That Transforms Young Players'),author:'Lena Duarte',date:'2026-01-22',image:'blog-five.webp',sections:[
  {
    "title": {
      "zh": "赛事是检验训练的另一种环境",
      "en": "A Tournament Offers a Different Learning Environment"
    },
    "paragraphs": [
      {
        "zh": "极速杯的意义不只在于比分。连续比赛会让球员面对陌生对手、时间安排和团队任务，把平时训练中的习惯带到新的环境。",
        "en": "The Velocity Cup offers more to review than the score. Unfamiliar opponents, match schedules, and team responsibilities test how training habits transfer to a different environment."
      },
      {
        "zh": "以下为模板赛事故事，并非真实赛果或报名信息。关注准备、比赛和复盘，可以把一次活动变成连续的学习过程。",
        "en": "This is an illustrative event story, rather than a record of actual results or registration details. Preparation, play, and review form one connected learning process."
      }
    ]
  },
  {
    "title": {
      "zh": "赛前准备：让期待变成具体行动",
      "en": "Before the Event: Turning Anticipation into Preparation"
    },
    "paragraphs": [
      {
        "zh": "球队可以提前确认装备、集合安排与每场比赛的简单目标。教练使用熟悉的训练情境帮助球员理解阵型和职责，减少临场信息负担。",
        "en": "Equipment, meeting arrangements, and a small number of match objectives can be settled in advance. Familiar practice situations help players understand their role without overloading them on the day."
      },
      {
        "zh": "紧张可以通过交流变得更容易管理。让球员说出担心的事情，再一起确认可以采取的行动。",
        "en": "A conversation can make nerves more manageable. Players can name a concern and work with the group to identify something practical they can do about it."
      }
    ]
  },
  {
    "title": {
      "zh": "首场比赛：把注意力放在下一次行动",
      "en": "The Opening Match: Focusing on the Next Action"
    },
    "paragraphs": [
      {
        "zh": "比赛开始后，球员需要把注意力带回场上可以控制的事情：观察、沟通、跑动和支持。一次失误之后，下一次接应依然重要。",
        "en": "Once play starts, attention can return to controllable actions: looking, communicating, moving, and supporting. After an error, the next available passing option still matters."
      },
      {
        "zh": "场边反馈保持简短，让孩子有机会独立判断。赛后再讨论具体片段，比在每个触球时不断给指令更清楚。",
        "en": "Brief touchline feedback leaves room for independent decisions. A discussion of specific moments afterwards is clearer than a stream of instructions with every touch."
      }
    ]
  },
  {
    "title": {
      "zh": "面对起伏：学习共同调整",
      "en": "Responding to Ups and Downs as a Team"
    },
    "paragraphs": [
      {
        "zh": "进球、失球、疲劳和比分变化都会影响情绪。球队可以在短暂休息时恢复呼吸，检查身体状态，再确认接下来最重要的一件事。",
        "en": "Goals, fatigue, and changes in the score can all affect emotions. A short break offers time to settle, check how players feel, and agree on the next priority."
      },
      {
        "zh": "相互支持不只发生在胜利之后。困难时愿意提供接应、遵守约定，也是可以被具体肯定的团队贡献。",
        "en": "Support is valuable after disappointment too. Offering a passing option and carrying out an agreed role are team contributions that can be recognized specifically."
      }
    ]
  },
  {
    "title": {
      "zh": "赛后复盘：把经历转化为训练目标",
      "en": "After the Event: Choosing What to Work on Next"
    },
    "paragraphs": [
      {
        "zh": "复盘可以围绕三个问题展开：什么有效、什么困难、下一次想怎么做。球员参与讨论，才能把反馈理解为自己的学习计划。",
        "en": "A review can use three questions: what worked, what was difficult, and what to try next. Involving players helps them take ownership of the resulting practice goal."
      },
      {
        "zh": "比分会结束，但观察、合作和面对压力的经验仍可以继续使用。下一次训练，就是检验新发现的机会。",
        "en": "The result is final, but lessons about awareness, cooperation, and pressure remain useful. The next session becomes an opportunity to test what the team has learned."
      }
    ]
  }
]},
{slug:'building-confidence-through-football-how-young-players-grow-on-the-pitch',title:text('通过足球建立自信：年轻球员如何在场上成长','Building Confidence Through Football: How Young Players Grow on the Pitch'),author:'Marco Velasquez',date:'2026-01-30',image:'blog-six.webp',sections:[
  {
    "title": {
      "zh": "从一次可以完成的尝试开始",
      "en": "Starting with a Manageable Challenge"
    },
    "paragraphs": [
      {
        "zh": "自信可以在一项项可完成的任务中慢慢建立。对刚加入训练的孩子，接到一次传球、主动说出队友名字，也可以是值得看见的进步。",
        "en": "Confidence can grow through manageable tasks. For a child joining a new group, receiving a pass or calling a teammate by name may be a meaningful step."
      },
      {
        "zh": "足球提供了许多这样的机会。教练和家长可以帮助孩子认识自己的变化，而不只用比赛结果解释表现。",
        "en": "Football offers frequent opportunities to notice change. Adults can help children recognize that progress without relying on match results as the only explanation of performance."
      }
    ]
  },
  {
    "title": {
      "zh": "1. 允许尝试，也练习重新开始",
      "en": "1. Trying Again Is a Skill to Practice"
    },
    "paragraphs": [
      {
        "zh": "射门偏出或丢掉球权后，给孩子一个明确的后续任务，例如回到接应位置。重新参与能让失误成为过程的一部分，而不是结束。",
        "en": "After a missed shot or lost ball, a clear next task helps the player rejoin the game. Recovery can be practiced as part of the activity rather than treated as an interruption."
      }
    ]
  },
  {
    "title": {
      "zh": "2. 让鼓励指向具体行动",
      "en": "2. Make Encouragement Specific"
    },
    "paragraphs": [
      {
        "zh": "与其只说“踢得好”，不如指出刚才的观察、坚持或配合。具体反馈能让孩子知道自己做对了什么，也知道如何再次做到。",
        "en": "Instead of a general compliment, identify the useful scan, persistence, or supporting run. Specific feedback tells children what worked and gives them a way to repeat it."
      },
      {
        "zh": "积极反馈也需要真实和适量。认真倾听球员的感受，能帮助他们形成自己的判断，而不完全依赖外部评价。",
        "en": "Positive feedback should remain honest and proportionate. Listening to how the player experienced an action also helps them develop their own judgment."
      }
    ]
  },
  {
    "title": {
      "zh": "3. 在团队中练习表达与信任",
      "en": "3. Practice Communication and Trust"
    },
    "paragraphs": [
      {
        "zh": "小组任务让孩子练习说话、倾听与分工。团队可以明确几项简单约定，让每个人都知道怎样参与。",
        "en": "Group activities create chances to speak, listen, and share responsibility. A few simple agreements help every player understand how to contribute."
      }
    ],
    "items": [
      {
        "zh": "主动提出接应或表达想法",
        "en": "Offer a passing option or explain an idea"
      },
      {
        "zh": "履行与队友约定的任务",
        "en": "Follow through on an agreed team task"
      },
      {
        "zh": "认识和支持不同的伙伴",
        "en": "Work with and support different teammates"
      },
      {
        "zh": "肯定每个人对集体的贡献",
        "en": "Recognize each person’s contribution to the group"
      }
    ]
  },
  {
    "title": {
      "zh": "4. 用小目标看见自己的变化",
      "en": "4. Use Small Goals to Notice Progress"
    },
    "paragraphs": [
      {
        "zh": "把目标写得具体，例如接球前观察一次，而不是笼统要求“更有自信”。完成后一起回顾，再决定是否增加难度。",
        "en": "A goal such as checking the space before receiving is easier to use than a broad request to be confident. Review it together before adding another challenge."
      }
    ]
  },
  {
    "title": {
      "zh": "5. 给球员独立选择的机会",
      "en": "5. Leave Room for Independent Choices"
    },
    "paragraphs": [
      {
        "zh": "传球还是带球，推进还是等待队友，比赛中的选择需要练习。让孩子解释自己看见了什么，可以让讨论围绕信息和行动展开。",
        "en": "Choices about passing, carrying, or waiting for support need practice. Asking what the player noticed keeps the discussion focused on information and action."
      }
    ],
    "items": [
      {
        "zh": "在行动前观察周围",
        "en": "Notice what is happening before acting"
      },
      {
        "zh": "比较不同的可行选项",
        "en": "Compare the available options"
      },
      {
        "zh": "尝试作出自己的判断",
        "en": "Make a choice and give it a try"
      },
      {
        "zh": "回顾结果并承担相应责任",
        "en": "Review the outcome and take responsibility"
      }
    ]
  },
  {
    "title": {
      "zh": "6. 成人提供稳定的支持",
      "en": "6. Adults Can Provide Consistent Support"
    },
    "paragraphs": [
      {
        "zh": "教练说明任务，家长帮助保持合适的休息与期待。面对困难时，先倾听孩子的感受，再共同寻找一个可以行动的小步骤。",
        "en": "Coaches can clarify the task while parents support suitable rest and expectations. When something is difficult, listening first makes it easier to agree on a useful next step."
      }
    ]
  },
  {
    "title": {
      "zh": "把球场上的信心带到日常生活",
      "en": "Taking Useful Habits Beyond Football"
    },
    "paragraphs": [
      {
        "zh": "愿意尝试、主动沟通和完成约定，都能延伸到课堂和生活。足球中的一次小进步，可以帮助孩子认识到能力是能够通过练习发展的。",
        "en": "Trying, communicating, and following through are useful in everyday situations too. A small improvement in football can show a child that an ability can develop with practice."
      },
      {
        "zh": "成长的节奏因人而异。让孩子保有乐趣与参与感，才能为下一次挑战留下积极的起点。",
        "en": "Children develop at different rates. Enjoyment and a sense of involvement provide a constructive starting point for the next challenge."
      }
    ]
  }
]},
]
