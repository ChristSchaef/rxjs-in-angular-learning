"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[603],{6603:(E,f,o)=>{o.r(f),o.d(f,{RunModule:()=>M});var l=o(9808),b=o(2382),Z=o(5796),p=o(7579),h=o(262),T=o(515),t=o(7587),j=o(9841),y=o(4004);const m={now:()=>(m.delegate||Date).now(),delegate:void 0};class S extends p.x{constructor(r=1/0,e=1/0,s=m){super(),this._bufferSize=r,this._windowTime=e,this._timestampProvider=s,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,r),this._windowTime=Math.max(1,e)}next(r){const{isStopped:e,_buffer:s,_infiniteTimeWindow:i,_timestampProvider:u,_windowTime:a}=this;e||(s.push(r),!i&&s.push(u.now()+a)),this._trimBuffer(),super.next(r)}_subscribe(r){this._throwIfClosed(),this._trimBuffer();const e=this._innerSubscribe(r),{_infiniteTimeWindow:s,_buffer:i}=this,u=i.slice();for(let a=0;a<u.length&&!r.closed;a+=s?1:2)r.next(u[a]);return this._checkFinalizedStatuses(r),e}_trimBuffer(){const{_bufferSize:r,_timestampProvider:e,_buffer:s,_infiniteTimeWindow:i}=this,u=(i?1:2)*r;if(r<1/0&&u<s.length&&s.splice(0,s.length-u),!i){const a=e.now();let c=0;for(let d=1;d<s.length&&s[d]<=a;d+=2)c=d;c&&s.splice(0,c+1)}}}var I=o(3099),g=o(2843),v=o(520);let A=(()=>{class n{constructor(e){this.http=e,this.jobsUrl="api/jobs",this.jobs$=this.http.get(this.jobsUrl).pipe((0,h.K)(this.handleError))}handleError(e){let s;return s=e.error instanceof ErrorEvent?`An error occurred: ${e.error.message}`:`Backend returned code ${e.status}: ${e.message}`,console.error(e),(0,g._)(()=>s)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(v.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),U=(()=>{class n{constructor(e,s){this.http=e,this.jobService=s,this.runsUrl="api/runs",this.runs$=this.http.get(this.runsUrl).pipe((0,h.K)(this.handleError)),this.jobs$=this.jobService.jobs$.pipe((0,h.K)(this.handleError)),this.runsWithJobs$=(0,j.a)([this.runs$,this.jobs$]).pipe((0,y.U)(([i,u])=>i.map(a=>Object.assign(Object.assign({},a),{job:u.find(c=>a.jobId===c.id)}))),function R(n,r,e){let s,i=!1;return n&&"object"==typeof n?({bufferSize:s=1/0,windowTime:r=1/0,refCount:i=!1,scheduler:e}=n):s=null!=n?n:1/0,(0,I.B)({connector:()=>new S(s,r,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}(1))}handleError(e){let s;return s=e.error instanceof ErrorEvent?`An error occurred: ${e.error.message}`:`Backend returned code ${e.status}: ${e.message}`,console.error(e),(0,g._)(()=>s)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(v.eN),t.LFG(A))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function $(n,r){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA()()),2&n){const e=r.$implicit;t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.runState),t.xp6(2),t.Oqu(null==e.job?null:e.job.name),t.xp6(2),t.Oqu(e.started),t.xp6(2),t.Oqu(e.lastUpdate)}}function x(n,r){if(1&n&&(t.TgZ(0,"table",5)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"Run Id"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Run State Id"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Job Id"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Started"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Last update"),t.qZA()()(),t.TgZ(13,"tbody"),t.YNc(14,$,11,5,"tr",6),t.qZA()()),2&n){const e=r.ngIf;t.xp6(14),t.Q6J("ngForOf",e)}}function L(n,r){if(1&n&&(t.TgZ(0,"div",7),t._uU(1),t.qZA()),2&n){const e=r.ngIf;t.xp6(1),t.hij(" ",e,"\n")}}let C=(()=>{class n{constructor(e){this.runService=e,this.pageTitle="Run List",this.errorMessageSubject=new p.x,this.errorMessage$=this.errorMessageSubject.asObservable(),this.runs$=this.runService.runsWithJobs$.pipe((0,h.K)(s=>(this.errorMessageSubject.next(s),T.E)))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(U))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-run-list"]],decls:8,vars:7,consts:[[1,"card"],[1,"card-header"],[1,"table-responsive"],["class","table mb-0",4,"ngIf"],["class","alert alert-danger",4,"ngIf"],[1,"table","mb-0"],[4,"ngFor","ngForOf"],[1,"alert","alert-danger"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2),t.qZA(),t.TgZ(3,"div",2),t.YNc(4,x,15,1,"table",3),t.ALo(5,"async"),t.qZA()(),t.YNc(6,L,2,1,"div",4),t.ALo(7,"async")),2&e&&(t.xp6(2),t.hij(" ",s.pageTitle," "),t.xp6(2),t.Q6J("ngIf",t.lcZ(5,3,s.runs$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(7,5,s.errorMessage$)))},dependencies:[l.sg,l.O5,l.Ov]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,b.UX,Z.Bz.forChild([{path:"",component:C}])]}),n})()}}]);