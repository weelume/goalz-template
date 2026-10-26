import {readFile} from 'node:fs/promises'
import {test} from 'node:test'
import assert from 'node:assert/strict'
import ts from 'typescript'
const source=await readFile(new URL('../src/features/site-templates/catalog/goalz/routes.ts',import.meta.url),'utf8')
const {outputText}=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ES2022,target:ts.ScriptTarget.ES2022}})
const {alternateLocaleHref}=await import('data:text/javascript;base64,'+Buffer.from(outputText).toString('base64'))
test('独立与宿主的语言切换均保留详情页、参数与锚点',()=>{
assert.equal(alternateLocaleHref('/templates/goalz/site','/templates/goalz/site/programs/goalkeeper-academy','zh','check=1','#details'),'/templates/goalz/site/en/programs/goalkeeper-academy?check=1#details')
assert.equal(alternateLocaleHref('/templates/goalz/site/en','/templates/goalz/site/en/contact-us','en','topic=trial','#form'),'/templates/goalz/site/contact-us?topic=trial#form')
assert.equal(alternateLocaleHref('','/gallery','zh'),' /en/gallery'.trim())
assert.equal(alternateLocaleHref('/en','/en','en'),'/')
})
test('拒绝挂载路径前缀碰撞',()=>assert.throws(()=>alternateLocaleHref('/en','/english','en')))
