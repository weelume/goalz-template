'use client'
import {usePathname} from 'next/navigation'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {Closing,PageHero} from '../components/Sections'
import {events} from '../content/events'
import {eventProfiles} from '../content/eventProfiles'
import {text} from '../content/data'
export default function EventDetailPage({locale='zh',basePath}:SiteTemplatePageProps){const path=usePathname(),event=events.find(e=>path.endsWith('/'+e.slug));if(!event)throw new Error('未知活动路由：'+path);const profile=eventProfiles[event.slug];const props={locale,basePath};return <Shell {...props}><PageHero {...props} picture={event.image} eyebrow={text('赛事详情','Event Details')} title={event.title} description={event.description}/><article className="gz-section gz-article"><div className="gz-event-facts"><div><h2 className="gz-eyebrow">{locale==='zh'?'年龄组':'Age Group'}</h2><p>{event.age}</p></div><div><h2 className="gz-eyebrow">{locale==='zh'?'地点':'Location'}</h2><p>{event.location[locale]}</p></div><div><h2 className="gz-eyebrow">{locale==='zh'?'日期':'Date'}</h2><p>{event.date[locale]}</p></div></div><p className="gz-demo">{locale==='zh'?'以下为模板演示赛事，不提供真实报名。':'Demonstration event. No actual registration is provided.'}</p><h2>{profile.title[locale]}</h2>{profile.body.map(item=><p key={item.en}>{item[locale]}</p>)}<h3>{locale==='zh'?'赛事规则':'Official Rules'}</h3><ul>{profile.rules.map(item=><li key={item.en}>{item[locale]}</li>)}</ul><h2>{locale==='zh'?'活动日程':'Schedule'}</h2>{profile.schedule.map(section=><section key={section.title.en}><h3>{section.title[locale]}</h3><ol className="gz-schedule">{section.items.map(item=><li key={item.en}>{item[locale]}</li>)}</ol></section>)}</article><Closing {...props}/></Shell>}
