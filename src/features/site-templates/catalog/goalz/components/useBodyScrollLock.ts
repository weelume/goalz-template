'use client'
import {useLayoutEffect} from 'react'
import {logDebug} from '../logging'
/** 固定背景并保留实际宽度、滚动位置；关闭时同步恢复，兼顾 iOS 和原生滚动条。 */
export function useBodyScrollLock(open:boolean):void{
 useLayoutEffect(()=>{
  if(!open)return
  const body=document.body,html=document.documentElement,y=window.scrollY,width=html.clientWidth
  const previous={overflow:body.style.overflow,position:body.style.position,top:body.style.top,left:body.style.left,right:body.style.right,width:body.style.width}
  body.style.position='fixed';body.style.top=-y+'px';body.style.left='0';body.style.right='auto';body.style.width=width+'px';body.style.overflow='hidden'
  logDebug('navigation','移动导航已打开',{open:true,width})
  return()=>{
   Object.assign(body.style,previous)
   // 避免页面的平滑滚动规则把位置恢复变成可见的自动滚动。
   const previousBehavior=html.style.scrollBehavior;html.style.scrollBehavior='auto';window.scrollTo(0,y);html.style.scrollBehavior=previousBehavior
   logDebug('navigation','移动导航已关闭',{open:false,restored:true})
  }
 },[open])
}
