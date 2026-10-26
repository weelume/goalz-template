export function alternateLocaleHref(basePath:string,pathname:string,locale:'zh'|'en',search='',hash=''):string{
if(!pathname.startsWith(basePath)||basePath&&pathname.length>basePath.length&&pathname[basePath.length]!=='/')throw new Error('当前页面不属于模板挂载路径')
const root=basePath.replace(/\/en$/,''),slug=pathname.slice(basePath.length)
return (root+(locale==='zh'?'/en':'')+slug||'/')+(search?'?'+search.replace(/^\?/,''):'')+hash
}
