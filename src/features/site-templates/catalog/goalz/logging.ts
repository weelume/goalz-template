type LogScope='navigation'|'form'|'video'
type LogContext=Record<string,string|number|boolean|null>
/** 单行结构化上下文便于浏览器与采集器读取；调用方只传流程状态，不传表单值。 */
export function logDebug(scope:LogScope,message:string,context:LogContext):void{if(process.env.NODE_ENV==='development')console.debug('[goalz:'+scope+'] '+message+' '+JSON.stringify(context))}
