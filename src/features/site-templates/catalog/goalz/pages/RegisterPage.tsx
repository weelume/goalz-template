'use client'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {Closing,PageHero,Pricing} from '../components/Sections'
import {DemoForm} from '../components/DemoForm'
import {text} from '../content/data'
export default function RegisterPage({locale='zh',basePath}:SiteTemplatePageProps){const props={locale,basePath};return <Shell {...props}><PageHero {...props} picture="register-hero.webp" eyebrow={text('体验训练','Trial training')} title={text('从今天开始\n开启足球旅程','Start a Football Journey Today')} description={text('为球员选择适合年龄与水平的课程，用简单的信息填写了解体验课流程。','Register easily to find the best program for your player’s age and skill level with simple guided steps.')} buttons={false}/><section className="gz-section gz-register"><DemoForm locale={locale} registration/></section><Pricing {...props}/><Closing {...props}/></Shell>}
