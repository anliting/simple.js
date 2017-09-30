'use strict';function h(){}h.prototype[Symbol.iterator]=function*(){for(;this.size;)yield this.out()};h.iterator=(a)=>{return h.prototype[Symbol.iterator].call(a)};function f(){this._a=[]}Object.setPrototypeOf(f.prototype,h.prototype);f.prototype.in=function(){this._a.push(...arguments)};f.prototype.out=function(){return this._a.pop()};Object.defineProperty(f.prototype,"size",{get(){return this._a.length}});function k(){this._vertices=[];this._edges=[]}Object.defineProperty(k.prototype,"vertices",
{get(){return this._vertices.slice()}});Object.defineProperty(k.prototype,"edges",{get(){return this._edges.slice()}});k.prototype.addVertex=function(a=Symbol()){this._vertices.push(a);return a};k.prototype.addEdge=function(a,c){this._edges.push([a,c])};function q(){this._a=[]}Object.setPrototypeOf(q.prototype,f.prototype);function g(a=k){this._DataStructure=k;this._data=new this._DataStructure}Object.defineProperty(g.prototype,"vertices",{get(){return this._data.vertices.slice()}});Object.defineProperty(g.prototype,
"edges",{get(){return this._data.edges.slice()}});g.prototype.addVertex=function(a){return this._data.addVertex(a)};g.prototype.addEdge=function(a,c){this._data.addEdge(a,c)};g.prototype.longestTopologicalSort=function(a=new q){let c={},d={};for(var l of this._data.vertices){c[l]=0;d[l]=[]}for(let [a,b]of this._data.edges){c[b]++;d[a].push(b)}l=[];for(let b of this._data.vertices.filter((a)=>{return c[a]==0}))a.in(b);for(let b of h.iterator(a)){l.push(b);d[b].map((b)=>{return--c[b]||a.in(b)})}return l};
Object.defineProperty(g.prototype,"topologicalSort",{get(){let a=this.longestTopologicalSort();if(a.length<this._data.vertices.length)throw Error("Cycle detected.");return a}});function p(a=0,c=a){this.x=a;this.y=c}p.prototype[Symbol.iterator]=function*(){yield*[this.x,this.y]};function b(){p.apply(this,arguments)}Object.setPrototypeOf(b,p);Object.setPrototypeOf(b.prototype,p.prototype);b.prototype.add=function(a){this.x=this.x+a.x;this.y=this.y+a.y;return this};b.prototype.addN=function(a,c=a){this.x=
this.x+a;this.y=this.y+c;return this};b.prototype.sub=function(a){this.x=this.x-a.x;this.y=this.y-a.y;return this};b.prototype.subN=function(a,c=a){this.x=this.x-a;this.y=this.y-c;return this};b.prototype.mul=function(a){this.x=this.x*a.x;this.y=this.y*a.y;return this};b.prototype.mulN=function(a,c=a){this.x=this.x*a;this.y=this.y*c;return this};b.prototype.div=function(a){this.x=this.x/a.x;this.y=this.y/a.y;return this};b.prototype.divN=function(a,c=a){this.x=this.x/a;this.y=this.y/c;return this};
b.prototype.lt=function(a){return this.x<a.x&&this.y<a.y};b.prototype.ltN=function(a,c){return this.x<a&&this.y<c};b.prototype.eq=function(a){return this.x==a.x&&this.y==a.y};b.prototype.eqN=function(a,c){return this.x==a&&this.y==c};b.prototype.gt=function(a){return this.x>a.x&&this.y>a.y};b.prototype.gtN=function(a){return this.x>a.x&&this.y>a.y};Object.defineProperty(b.prototype,"new",{get(){return new b(this.x,this.y)}});Object.defineProperty(b.prototype,"newNeg",{get(){return this.newMulN(-1)}});
b.prototype.newAdd=function(a){return new b(this.x+a.x,this.y+a.y)};b.prototype.newAddN=function(a,c=a){return new b(this.x+a,this.y+c)};b.prototype.newSub=function(a){return new b(this.x-a.x,this.y-a.y)};b.prototype.newSubN=function(a,c=a){return new b(this.x-a,this.y-c)};b.prototype.newMul=function(a){return new b(this.x*a.x,this.y*a.y)};b.prototype.newMulN=function(a,c=a){return new b(this.x*a,this.y*c)};b.prototype.newDiv=function(a){return new b(this.x/a.x,this.y/a.y)};b.prototype.newDivN=function(a,
c=a){return new b(this.x/a,this.y/c)};function n(a){this._a=[];this._cmp=a||((a,b)=>{return a-b})}Object.setPrototypeOf(n.prototype,f.prototype);n.prototype.in=function(){for(let a=0;a<arguments.length;a++){this._a.push(arguments[a]);for(let a=this._a.length-1,b;a;a=b){b=~~((a-1)/2);this._cmp(this._a[a],this._a[b])<0&&([this._a[a],this._a[b]]=[this._a[b],this._a[a]])}}};n.prototype.out=function(){let a=this._a[0];this._a[0]=this._a[this._a.length-1];this._a.pop();for(let a=0;2*a+1<this._a.length;){let b=
this._a.length<=2*a+2||this._cmp(this._a[2*a+1],this._a[2*a+2])<0?2*a+1:2*a+2;if(this._cmp(this._a[a],this._a[b])<0)break;[this._a[a],this._a[b]]=[this._a[b],this._a[a]];a=b}return a};Object.defineProperty(n.prototype,"top",{get(){return this._a[0]}});function r(){this._a=[]}Object.setPrototypeOf(r.prototype,f.prototype);r.prototype.out=function(){return this._a.shift()};function e(){b.apply(this,arguments)}Object.setPrototypeOf(e,b);Object.setPrototypeOf(e.prototype,b.prototype);Object.defineProperty(e.prototype,
"len",{get(a){return Math.max(0,this.y-this.x)}});e.prototype.valueOf=function(){return Math.max(0,this.y-this.x)};e.prototype.intersect=function(){let a=[...arguments];this.x=Math.max(this.x,...a.map((a)=>{return a.x}));this.y=Math.min(this.y,...a.map((a)=>{return a.y}));return this};e.prototype.newIntersect=function(){let a=[...arguments];return new e(Math.max(this.x,...a.map((a)=>{return a.x})),Math.min(this.y,...a.map((a)=>{return a.y})))};function m(){b.apply(this,arguments)}Object.setPrototypeOf(m,
b);Object.setPrototypeOf(m.prototype,b.prototype);m.prototype.ip=function(a){return this.x*a.x+this.y*a.y};Object.defineProperty(m.prototype,"len",{get(a){return this.ip(this)**.5}});m.prototype.valueOf=function(){return this.ip(this)**.5};export default{Container:h,DirectedGraph:g,NumberPair:b,PriorityQueue:n,Range:e,Stack:q,Queue:r,Vector2:m,array:{difference:function d(c){for(let b=c.length-1;0<b;b--)c[b]=c[b]-c[b-1];return c},prefixSum:function l(d){for(let b=1;b<d.length;b++)d[b]=d[b]+d[b-1];
return d}}};
