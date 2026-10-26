'use client'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {Closing,CoachCards,PageHero} from '../components/Sections'
import {text} from '../content/data'
import {Founder} from '../components/Founder'
export default function CoachesPage({locale='zh',basePath}:SiteTemplatePageProps){const props={locale,basePath};return <Shell {...props}><PageHero {...props} picture="coaches-hero.webp" eyebrow={text('教练团队','Our Coaches')} title={text('让每份潜能\n得到专业回应','Coaching the Next Generation')} description={text('以专业、专注与热爱，帮助年轻球员在每次训练中成长。','A dedicated coaching team supports young athletes in reaching their potential.')}/><section className="gz-section"><CoachCards {...props}/></section><Founder {...props}/><Closing {...props}/></Shell>}
