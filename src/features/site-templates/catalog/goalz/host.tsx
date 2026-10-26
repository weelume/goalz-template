'use client'
import {createContext,useContext,type ReactNode} from 'react'
export type Bilingual={zh:string;en:string}
export interface GoalzHostConfig{brandName:Bilingual;logo?:string;lightLogo?:string;marketplaceHref?:string;marketplaceLabel?:Bilingual;marketplaceAriaLabel?:Bilingual;filing?:ReactNode}
const Context=createContext<GoalzHostConfig>({brandName:{zh:'Goalz 足球学院',en:'Goalz'},logo:'/templates/goalz/images/logo.svg'})
export function GoalzHostProvider({children,...config}:GoalzHostConfig&{children:ReactNode}){return <Context.Provider value={config}>{children}</Context.Provider>}
export const useGoalzHost=()=>useContext(Context)
