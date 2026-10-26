'use client'
import {useEffect,type RefObject} from 'react'
/** 抽屉打开后循环键盘焦点，避免背景被锁定时焦点仍进入正文。 */
export function useMenuFocus(open:boolean,toggle:RefObject<HTMLButtonElement|null>){
 useEffect(()=>{
  if(!open)return
  const frame=requestAnimationFrame(()=>document.querySelector<HTMLAnchorElement>('#gz-mobile-menu a')?.focus({preventScroll:true}))
  function trap(event:KeyboardEvent){
   if(event.key!=='Tab')return
   const menu=document.querySelector<HTMLElement>('#gz-mobile-menu'),links=[...document.querySelectorAll<HTMLAnchorElement>('#gz-mobile-menu a')],first=toggle.current,last=links.at(-1)
   if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus({preventScroll:true});if(menu)menu.scrollTop=menu.scrollHeight}
   else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus({preventScroll:true})}
   else if(!event.shiftKey&&document.activeElement===first){event.preventDefault();menu?.focus({preventScroll:true});if(menu)menu.scrollTop=0}
  }
  document.addEventListener('keydown',trap)
  return()=>{cancelAnimationFrame(frame);document.removeEventListener('keydown',trap)}
 },[open,toggle])
}
