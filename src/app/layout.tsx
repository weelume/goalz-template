import type {ReactNode} from 'react'
import './globals.css'
export const metadata={title:'Goalz · 足球训练学院',description:'中英双语足球训练学院展示模板'}
export default function Layout({children}:{children:ReactNode}){return <html lang="zh-CN" data-scroll-behavior="smooth"><body>{children}</body></html>}
