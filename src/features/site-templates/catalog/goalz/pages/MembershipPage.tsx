'use client'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {Closing,PageHero,Pricing,Reviews,GoalkeeperSpotlight} from '../components/Sections'
import {text} from '../content/data'
export default function MembershipPage({locale='zh',basePath}:SiteTemplatePageProps){const props={locale,basePath};return <Shell {...props}><PageHero {...props} picture="membership-hero.webp" eyebrow={text('会员计划','Best Membership Plans')} title={text('为每位球员\n找到合适计划','Flexible Programs for Every Player')} description={text('让专业训练融入成长的每个阶段。','Structured training for every stage of a player’s journey.')} buttons={false}/><Pricing {...props}/><GoalkeeperSpotlight {...props} picture="membership-keeper.webp"/><Reviews {...props}/><Closing {...props}/></Shell>}
