'use client'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {Closing,PageHero,ProgramCards} from '../components/Sections'
import {text} from '../content/data'
export default function ProgramsPage({locale='zh',basePath}:SiteTemplatePageProps){const props={locale,basePath};return <Shell {...props}><PageHero {...props} picture="programs-hero.webp" eyebrow={text('训练课程','Programs')} title={text('培养下一位\n赛场领航者','Developing the Next Leaders')} description={text('从第一次触球到追求更高表现，为不同水平的年轻球员打造合适课程。','Explore programs that cultivate young athletes across all skill levels, from beginners to elite performers.')}/><section className="gz-section"><ProgramCards {...props}/></section><Closing {...props}/></Shell>}
