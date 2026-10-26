'use client'
import Link from 'next/link'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {Closing,PageHero} from '../components/Sections'
import {Reveal} from '../components/Motion'
import {articles} from '../content/blog'
import {text} from '../content/data'
import {image} from '../config/brand'
export function ArticleCards({locale='zh',basePath,exclude}:{exclude?:string}&SiteTemplatePageProps){return <div className="gz-blog-grid">{articles.filter(a=>a.slug!==exclude).slice(0,exclude?3:articles.length).map((article,i)=><Reveal delay={i%3*.08} key={article.slug}><Link className="gz-blog-card" href={basePath+'/blog/'+article.slug}><div className="gz-image-wrap"><img src={image(article.image)} alt={article.title[locale]} loading="lazy"/></div><h3>{article.title[locale]}</h3><div className="gz-blog-meta"><span>{locale==='zh'?'作者：':'Author: '}{article.author}</span><time dateTime={article.date}>{article.date}</time></div></Link></Reveal>)}</div>}
export default function BlogPage({locale='zh',basePath}:SiteTemplatePageProps){const props={locale,basePath};return <Shell {...props}><PageHero {...props} picture="event-two.webp" eyebrow={text('学院博客','Academy Blog')} title={text('见解 故事\n与难忘瞬间','Insights, Stories and Moments')} description={text('探索训练建议、比赛回顾、球员故事，见证不同年龄球员的成长。','Discover training tips, match reports, player spotlights, and inspiring stories from all age groups.')} buttons={false}/><section className="gz-section"><ArticleCards {...props}/></section><Closing {...props}/></Shell>}
