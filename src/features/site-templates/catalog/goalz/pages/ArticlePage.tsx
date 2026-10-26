'use client'
import {usePathname} from 'next/navigation'
import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../components/Shell'
import {Closing} from '../components/Sections'
import {ArticleCards} from './BlogPage'
import {articles} from '../content/blog'
import {image} from '../config/brand'
export default function ArticlePage({locale='zh',basePath}:SiteTemplatePageProps){const path=usePathname(),article=articles.find(a=>path.endsWith('/'+a.slug));if(!article)throw new Error('未知文章路由：'+path);const props={locale,basePath};return <Shell {...props}><article><header className="gz-section gz-article-header"><div className="gz-blog-meta"><span>{locale==='zh'?'作者：':'Author: '}{article.author}</span><time dateTime={article.date}>{article.date}</time></div><h1>{article.title[locale]}</h1><img src={image(article.image)} alt={article.title[locale]}/></header><div className="gz-article gz-article-body">{article.sections.map((section,i)=><section key={section.title.en}>{i===0?<h2>{section.title[locale]}</h2>:<h3>{section.title[locale]}</h3>}{section.paragraphs.map((p,j)=><p key={j}>{p[locale]}</p>)}{section.items&&<ul>{section.items.map(item=><li key={item.en}>{item[locale]}</li>)}</ul>}</section>)}</div></article><section className="gz-section"><p className="gz-eyebrow">{locale==='zh'?'你可能也感兴趣':'You may also be interested in'}</p><h2>{locale==='zh'?'继续探索年轻球员的成长旅程':'Discover the Training, Growth, and Journeys of Our Young Athletes'}</h2><ArticleCards {...props} exclude={article.slug}/></section><Closing {...props}/></Shell>}
