import type {Bilingual} from '../host'
interface EventProfile {title:Bilingual;body:Bilingual[];rules:Bilingual[];schedule:{title:Bilingual;items:Bilingual[]}[]}
// 赛事正文按各自赛制维护，避免联赛误用单日杯赛安排。
export const eventProfiles:Record<string,EventProfile>={
  "velocity-cup": {
    "title": {
      "zh": "高节奏比赛 在压力下突破",
      "en": "High-Speed Competition. High Pressure Moments"
    },
    "body": [
      {
        "zh": "为富有竞争力的青年队打造的快速淘汰赛，考验战术、速度与心理韧性。",
        "en": "Designed for competitive youth teams, this fast-paced knockout event rewards tactical sharpness, physical speed, and mental resilience."
      }
    ],
    "rules": [
      {
        "zh": "标准 11 人制比赛",
        "en": "Standard 11v11 soccer format"
      },
      {
        "zh": "上下半场各 20 分钟",
        "en": "Match time: 2 × 20 minutes"
      },
      {
        "zh": "加时采用金球制，先得分者获胜",
        "en": "Golden Goal overtime — first team to score wins"
      },
      {
        "zh": "加时无进球则进行点球",
        "en": "Penalties if overtime ends scoreless"
      },
      {
        "zh": "允许滚动换人",
        "en": "Rolling substitutions allowed"
      },
      {
        "zh": "由合资格裁判执法",
        "en": "Certified referees officiate all matches"
      },
      {
        "zh": "黄红牌遵循青年足球规则",
        "en": "Yellow/red cards follow official youth football regulations"
      },
      {
        "zh": "严格遵守纪律与公平竞赛",
        "en": "Strict discipline and fair-play policy"
      }
    ],
    "schedule": [
      {
        "title": {
          "zh": "单日赛程",
          "en": "One-Day Format"
        },
        "items": [
          {
            "zh": "08:00 — 签到与热身",
            "en": "08:00 — Check-In & Warm-Up"
          },
          {
            "zh": "09:00 — 首轮比赛",
            "en": "09:00 — First Round Matches"
          },
          {
            "zh": "12:00 — 四分之一决赛",
            "en": "12:00 — Quarterfinals"
          },
          {
            "zh": "14:00 — 半决赛",
            "en": "14:00 — Semifinals"
          },
          {
            "zh": "16:30 — 决赛",
            "en": "16:30 — Final"
          },
          {
            "zh": "18:00 — 颁奖",
            "en": "18:00 — Awards Ceremony"
          }
        ]
      }
    ]
  },
  "continental-youth-cup": {
    "title": {
      "zh": "赛事看点",
      "en": "What to Expect"
    },
    "body": [
      {
        "zh": "洲际青年杯汇集欧洲及其他地区的年轻球员，重视成长、协作与高水平竞技，为学院、学校及俱乐部球队提供交流和挑战的机会。",
        "en": "The Continental Youth Challenge brings together young talents from across Europe and beyond, focusing on player development, teamwork, and high-level competition."
      },
      {
        "zh": "年度赛事鼓励雄心、公平竞赛与个人成长。",
        "en": "Held once a year, the event encourages ambition, fair play, and personal growth."
      }
    ],
    "rules": [
      {
        "zh": "小组赛：上下半场各 20 分钟",
        "en": "Group Stage: 2 × 20 minutes"
      },
      {
        "zh": "淘汰赛：上下半场各 25 分钟",
        "en": "Knockout Matches: 2 × 25 minutes"
      },
      {
        "zh": "决赛：上下半场各 30 分钟",
        "en": "Final Match: 2 × 30 minutes"
      },
      {
        "zh": "中场休息 5 分钟",
        "en": "Halftime Break: 5 minutes"
      },
      {
        "zh": "场上 11 人，至少 7 人方可开赛",
        "en": "11 players on the field; minimum 7 required to start"
      },
      {
        "zh": "名单最多 18 人",
        "en": "Squad size: up to 18 players"
      },
      {
        "zh": "滚动换人须经裁判同意",
        "en": "Rolling substitutions only with referee approval"
      }
    ],
    "schedule": [
      {
        "title": {
          "zh": "分阶段赛程",
          "en": "Tournament Schedule"
        },
        "items": [
          {
            "zh": "9月3–4日 — 抵达与开幕",
            "en": "September 3–4 — Arrival & Opening"
          },
          {
            "zh": "9月5–6日 — 训练与准备",
            "en": "September 5–6 — Training & Preparation"
          },
          {
            "zh": "9月7–11日 — 小组赛",
            "en": "September 7–11 — Group Stage"
          },
          {
            "zh": "9月11–13日 — 十六强",
            "en": "September 11–13 — Round of 16"
          },
          {
            "zh": "9月13–14日 — 八强与工作坊",
            "en": "September 13–14 — Quarterfinals & Workshops"
          },
          {
            "zh": "9月15–16日 — 半决赛",
            "en": "September 15–16 — Semifinals"
          },
          {
            "zh": "9月17日 — 决赛与闭幕",
            "en": "September 17 — Grand Final & Closing"
          }
        ]
      }
    ]
  },
  "academy-masters-cup": {
    "title": {
      "zh": "赛事看点",
      "en": "What to Expect"
    },
    "body": [
      {
        "zh": "有组织的高强度赛事模拟职业学院要求，由合资格裁判、维护良好的球场和清晰的比赛安排保证公平竞技。",
        "en": "Teams compete in a structured, high-energy environment mirroring professional football academies, with certified referees, well-maintained pitches, and organized match cycles."
      },
      {
        "zh": "场外的成长活动帮助球员结识伙伴，在充满动力的氛围中交流。",
        "en": "Off the field, players join development-focused activities, meet fellow athletes, and enjoy a motivational atmosphere."
      }
    ],
    "rules": [
      {
        "zh": "标准 11 人制比赛",
        "en": "Standard 11v11 soccer format"
      },
      {
        "zh": "小组赛上下半场各 25 分钟",
        "en": "Two 25-minute halves for group stage matches"
      },
      {
        "zh": "淘汰赛上下半场各 30 分钟",
        "en": "Two 30-minute halves for knockout matches"
      },
      {
        "zh": "允许滚动换人",
        "en": "Rolling substitutions allowed"
      },
      {
        "zh": "由合资格裁判执法",
        "en": "Certified referees officiate all matches"
      },
      {
        "zh": "黄红牌遵循青年足球规则",
        "en": "Yellow/red cards follow official youth football regulations"
      },
      {
        "zh": "严格遵守纪律与公平竞赛",
        "en": "Strict discipline and fair-play policy"
      }
    ],
    "schedule": [
      {
        "title": {
          "zh": "单日赛程示例",
          "en": "One-Day Format"
        },
        "items": [
          {
            "zh": "08:00 — 签到与热身",
            "en": "08:00 — Team Check-In & Warm-Up"
          },
          {
            "zh": "09:00 — 小组赛",
            "en": "09:00 — Group Stage Matches"
          },
          {
            "zh": "12:30 — 四分之一决赛",
            "en": "12:30 — Quarterfinals"
          },
          {
            "zh": "14:30 — 半决赛",
            "en": "14:30 — Semifinals"
          },
          {
            "zh": "16:30 — 决赛",
            "en": "16:30 — Final Match"
          },
          {
            "zh": "18:00 — 颁奖",
            "en": "18:00 — Awards Ceremony"
          }
        ]
      }
    ]
  },
  "future-pros-invitational": {
    "title": {
      "zh": "赛事看点",
      "en": "What to Expect"
    },
    "body": [
      {
        "zh": "邀请赛让球员体验职业足球的强度，同时鼓励成长与学习。比赛由合资格裁判执法，注重公平、安全和竞争。",
        "en": "The Future Pros Invitational tests players under the intensity of professional soccer while encouraging growth and learning, with certified referees and fair, safe gameplay."
      },
      {
        "zh": "球员可与其他精英项目的同龄人交流，体验职业球探考察式的环境。",
        "en": "Athletes meet peers from other elite programs, exchange ideas, and experience an environment designed to replicate professional scouting events."
      }
    ],
    "rules": [
      {
        "zh": "标准 11 人制比赛",
        "en": "Standard 11v11 soccer format"
      },
      {
        "zh": "小组赛上下半场各 25 分钟",
        "en": "Two 25-minute halves for group stage matches"
      },
      {
        "zh": "淘汰赛上下半场各 30 分钟",
        "en": "Two 30-minute halves for knockout matches"
      },
      {
        "zh": "允许滚动换人",
        "en": "Rolling substitutions allowed"
      },
      {
        "zh": "由合资格裁判执法",
        "en": "Certified referees officiate all matches"
      },
      {
        "zh": "黄红牌遵循青年足球规则",
        "en": "Yellow/red cards follow official youth football regulations"
      },
      {
        "zh": "严格遵守纪律与公平竞赛",
        "en": "Strict discipline and fair-play policy"
      }
    ],
    "schedule": [
      {
        "title": {
          "zh": "第一天",
          "en": "Day 1"
        },
        "items": [
          {
            "zh": "08:00 — 签到与热身",
            "en": "08:00 — Team Check-In & Warm-Up"
          },
          {
            "zh": "09:00 — 小组赛",
            "en": "09:00 — Group Stage Matches"
          },
          {
            "zh": "12:30 — 技术挑战与战术工作坊",
            "en": "12:30 — Skill Challenges & Tactical Workshops"
          },
          {
            "zh": "15:00 — 四分之一决赛",
            "en": "15:00 — Quarterfinals"
          }
        ]
      },
      {
        "title": {
          "zh": "第二天",
          "en": "Day 2"
        },
        "items": [
          {
            "zh": "09:00 — 半决赛",
            "en": "09:00 — Semifinals"
          },
          {
            "zh": "12:00 — 排位赛",
            "en": "12:00 — Placement Matches"
          },
          {
            "zh": "14:30 — 冠军决赛",
            "en": "14:30 — Championship Final"
          },
          {
            "zh": "17:00 — 颁奖与闭幕",
            "en": "17:00 — Awards Ceremony & Closing Event"
          }
        ]
      }
    ]
  },
  "champions-league": {
    "title": {
      "zh": "关于冠军发展联赛",
      "en": "About the Champions Development League"
    },
    "body": [
      {
        "zh": "面向追求职业水平的青年球员，联赛汇集学院队、精英俱乐部和优秀球员，通过多周比赛发展技术、战术意识与稳定表现。",
        "en": "The Champions Development League brings together academy teams, elite clubs, and standout young players in a multi-week competition emphasizing technical skill, tactical awareness, and consistent performance."
      },
      {
        "zh": "连续的联赛让球员追踪进步，在多场比赛中建立团队协作。",
        "en": "Players track their progress, develop teamwork across a series of games, and compete in a professional-style league environment."
      }
    ],
    "rules": [
      {
        "zh": "标准 11 人制比赛",
        "en": "Standard 11v11 soccer format"
      },
      {
        "zh": "小组赛上下半场各 25 分钟",
        "en": "Two 25-minute halves for group stage matches"
      },
      {
        "zh": "淘汰赛上下半场各 30 分钟",
        "en": "Two 30-minute halves for knockout matches"
      },
      {
        "zh": "允许滚动换人",
        "en": "Rolling substitutions allowed"
      },
      {
        "zh": "由合资格裁判执法",
        "en": "Certified referees officiate all matches"
      },
      {
        "zh": "黄红牌遵循青年足球规则",
        "en": "Yellow/red cards follow official youth football regulations"
      },
      {
        "zh": "严格遵守纪律与公平竞赛",
        "en": "Strict discipline and fair-play policy"
      }
    ],
    "schedule": [
      {
        "title": {
          "zh": "多周联赛",
          "en": "Multi-Week League"
        },
        "items": [
          {
            "zh": "第1–3周 — 小组赛",
            "en": "Week 1–3: Group Stage Matches"
          },
          {
            "zh": "第4–5周 — 十六强与四分之一决赛",
            "en": "Week 4–5: Round of 16 & Quarterfinals"
          },
          {
            "zh": "第6周 — 半决赛",
            "en": "Week 6: Semifinals"
          },
          {
            "zh": "第7周 — 决赛与颁奖",
            "en": "Week 7: Final Match & Awards Ceremony"
          }
        ]
      },
      {
        "title": {
          "zh": "比赛日示例",
          "en": "Daily Match Schedule (example)"
        },
        "items": [
          {
            "zh": "08:00 — 球队热身",
            "en": "08:00 — Team Warm-Up"
          },
          {
            "zh": "09:00 — 首场比赛",
            "en": "09:00 — First Match"
          },
          {
            "zh": "11:30 — 第二场比赛",
            "en": "11:30 — Second Match"
          },
          {
            "zh": "14:00 — 训练与战术工作坊",
            "en": "14:00 — Training & Tactical Workshop"
          },
          {
            "zh": "16:00 — 比赛分析",
            "en": "16:00 — Match Analysis Session"
          }
        ]
      }
    ]
  },
  "elite-rising-stars-cup": {
    "title": {
      "zh": "关于精英新星杯",
      "en": "About the Elite Rising Stars Cup"
    },
    "body": [
      {
        "zh": "面向希望挑战高水平对手的优秀青年球员，汇集学院队和走向职业足球的年轻新星。",
        "en": "The Elite Rising Stars Cup brings together academy teams and standout young athletes seeking to test their skills against top-tier competition."
      },
      {
        "zh": "高强度比赛、职业式组织与教练指导，帮助球员展示天赋并体验高水平竞技。",
        "en": "High-intensity matches, professional-style organization, and expert coaching oversight give rising stars a platform to showcase talent and experience elite competition."
      }
    ],
    "rules": [
      {
        "zh": "标准 11 人制比赛",
        "en": "Standard 11v11 soccer format"
      },
      {
        "zh": "小组赛上下半场各 25 分钟",
        "en": "Two 25-minute halves for group stage matches"
      },
      {
        "zh": "淘汰赛上下半场各 30 分钟",
        "en": "Two 30-minute halves for knockout matches"
      },
      {
        "zh": "允许滚动换人",
        "en": "Rolling substitutions allowed"
      },
      {
        "zh": "由合资格裁判执法",
        "en": "Certified referees officiate all matches"
      },
      {
        "zh": "黄红牌遵循青年足球规则",
        "en": "Yellow/red cards follow official youth football regulations"
      },
      {
        "zh": "严格遵守纪律与公平竞赛",
        "en": "Strict discipline and fair-play policy"
      }
    ],
    "schedule": [
      {
        "title": {
          "zh": "第一天",
          "en": "Day 1"
        },
        "items": [
          {
            "zh": "08:00 — 签到与热身",
            "en": "08:00 — Team Check-In & Warm-Up"
          },
          {
            "zh": "09:00 — 小组赛",
            "en": "09:00 — Group Stage Matches"
          },
          {
            "zh": "12:30 — 技术挑战与战术工作坊",
            "en": "12:30 — Skill Challenges & Tactical Workshops"
          },
          {
            "zh": "15:00 — 四分之一决赛",
            "en": "15:00 — Quarterfinals"
          }
        ]
      },
      {
        "title": {
          "zh": "第二天",
          "en": "Day 2"
        },
        "items": [
          {
            "zh": "09:00 — 半决赛",
            "en": "09:00 — Semifinals"
          },
          {
            "zh": "12:00 — 排位赛",
            "en": "12:00 — Placement Matches"
          },
          {
            "zh": "14:30 — 冠军决赛",
            "en": "14:30 — Championship Final"
          },
          {
            "zh": "17:00 — 颁奖与闭幕",
            "en": "17:00 — Awards Ceremony & Closing Event"
          }
        ]
      }
    ]
  }
}
