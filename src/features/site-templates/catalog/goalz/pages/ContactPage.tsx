'use client'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {Closing,Pricing,ProgramCards} from '../components/Sections'
import {DemoForm} from '../components/DemoForm'
import {Reveal} from '../components/Motion'
import {brand} from '../config/brand'
export default function ContactPage({locale='zh',basePath}:SiteTemplatePageProps){const props={locale,basePath};return <Shell {...props}><section className="gz-section gz-contact"><Reveal><p className="gz-eyebrow">{locale==='zh'?'开启对话':'Get in Touch'}</p><h1>{locale==='zh'?'与学院\n一起迈出第一步':'Contact Our Academy'}</h1><address><p>{brand.address[locale]}</p><a href={'mailto:'+brand.email}>{brand.email}</a><p>{brand.phone}</p></address></Reveal><Reveal delay={.15}><DemoForm locale={locale}/></Reveal></section><section className="gz-section"><div className="gz-section-heading"><h2>{locale==='zh'?'释放潜能\n开创自己的未来':'Unlock Your Potential. Define Your Future.'}</h2><p className="gz-eyebrow">{locale==='zh'?'训练课程':'Programs'}</p></div><ProgramCards {...props} limit={4}/></section><Pricing {...props}/><Closing {...props}/></Shell>}
