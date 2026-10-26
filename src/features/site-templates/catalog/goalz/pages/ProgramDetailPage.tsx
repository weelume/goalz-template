'use client'
import {usePathname} from 'next/navigation'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {Action,Closing,Pricing} from '../components/Sections'
import {Reveal} from '../components/Motion'
import {programs,ageGroups} from '../content/data'
import {programProfiles} from '../content/programProfiles'
import {image} from '../config/brand'
export default function ProgramDetailPage({locale='zh',basePath}:SiteTemplatePageProps){
 const path=usePathname(),program=programs.find(p=>path.endsWith('/'+p.slug)),profile=programProfiles.find(p=>path.endsWith('/'+p.slug))
 if(!program||!profile)throw new Error('未知课程路由：'+path)
 const props={locale,basePath}
 return <Shell {...props}>
  <section className="gz-detail-hero">
   <img className="gz-hero-background" src={image('detail-'+program.slug+'.webp')} alt=""/>
   <Reveal><h1>{program.title[locale]}</h1><p>{program.description[locale]}</p></Reveal>
   <Reveal delay={.15} className="gz-detail-points"><ul>{profile.tags.map(tag=><li key={tag.en}>{tag[locale]}</li>)}</ul><Action href={basePath+'/contact-us'}>{locale==='zh'?'加入学院':'Join the Academy'}</Action></Reveal>
  </section>
  <div className="gz-section gz-detail-layout">
   <article className="gz-article gz-detail-article"><h2>{profile.heading[locale]}</h2>{profile.paragraphs.map((paragraph,i)=><p key={i}>{paragraph[locale]}</p>)}<h3>{profile.listHeading[locale]}</h3><ul>{profile.list.map(item=><li key={item.en}>{item[locale]}</li>)}</ul>{profile.sections.map(section=><section key={section.title.en}><h3>{section.title[locale]}</h3><p>{section.body[locale]}</p></section>)}</article>
   <aside className="gz-detail-aside"><h2>{locale==='zh'?'为每位球员\n找到适合的分组':'Find the right group for every player'}</h2>{ageGroups.map((group,i)=><Reveal className="gz-compact-age" key={group.title.en} delay={i*.07}><span>{i+1}</span><div><h3>{group.title[locale]}</h3><p className="gz-eyebrow">{group.age[locale]}</p></div><p>{group.body[locale]}</p></Reveal>)}</aside>
  </div>
  <Pricing {...props}/><Closing {...props}/>
 </Shell>
}
