
const KEY="backend-learning-path-v2";
const S=()=>JSON.parse(localStorage.getItem(KEY)||"{}");
const save=s=>localStorage.setItem(KEY,JSON.stringify(s));
const topics=ROADMAP.flatMap(p=>p.topics);
const total=topics.reduce((a,t)=>a+t.weight,0);
const done=(state,list=topics)=>list.reduce((a,t)=>a+(state[t.id]?t.weight:0),0);
const pct=(a,b)=>b?Math.min(100,a/b*100):0;
const bar=p=>`<div class="progress"><div style="width:${p}%"></div></div>`;
const nav=active=>`<header class="top"><a class="brand" href="index.html">.NET <span>Learning Path</span></a><nav class="nav"><a class="${active==='home'?'active':''}" href="index.html">Dashboard</a><a class="${active==='path'?'active':''}" href="roadmap.html">Learning Path</a><a class="${active==='resources'?'active':''}" href="resources.html">Resources</a></nav></header>`;
const priority=p=>({must:"🔴 MUST",should:"🟠 SHOULD",good:"🔵 GOOD",advanced:"⚪ ADVANCED"}[p]);
function nextTopic(s){return topics.find(t=>!s[t.id]);}
function dashboard(){
 const s=S(),d=done(s),p=pct(d,total),next=nextTopic(s),completed=topics.filter(t=>s[t.id]).length;
 document.querySelector("#app").innerHTML=`${nav('home')}<section class="hero"><div class="eyebrow">Your strict learning sequence</div><h1>Learn in order.<br><span class="muted">No random jumping around.</span></h1><p>Follow topic <b>1 → 2 → 3</b>. Priority tells you how deeply to learn it, but the sequence tells you what to learn next.</p>${next?`<a class="continue" href="roadmap.html#${next.id}">Continue: ${String(next.number).padStart(3,'0')} — ${next.title} →</a>`:`<div class="continue">🎉 Entire roadmap completed!</div>`}</section>
 <div class="grid"><section class="card overall"><div class="row"><div><div class="eyebrow">Overall progress</div><h2 style="margin:7px 0">${p.toFixed(1)}%</h2></div><b>${d.toFixed(1)} / ${total.toFixed(1)} points</b></div>${bar(p)}<div class="muted">Weighted progress across ${topics.length} topics.</div></section>
 <section class="card stat"><div class="eyebrow">Completed</div><h2>${completed}</h2><div class="muted">topics checked</div></section><section class="card stat"><div class="eyebrow">Next topic</div><h2>${next?String(next.number).padStart(3,'0'):"Done"}</h2><div class="muted">${next?next.title:"All finished 🎉"}</div></section><section class="card stat"><div class="eyebrow">Priority system</div><div class="muted">🔴 Must → 🟠 Should → 🔵 Good → ⚪ Advanced</div></section>
 ${ROADMAP.map(x=>{let pd=pct(done(s,x.topics),x.weight);return `<a class="card phase-card" href="roadmap.html#${x.id}"><div class="eyebrow">${x.phase}</div><h3>${x.icon} ${x.title}</h3><div class="row"><span class="muted">${x.topics.length} steps</span><b>${pd.toFixed(0)}%</b></div>${bar(pd)}</a>`}).join("")}</div><div class="footer">Saved automatically in this browser using localStorage.</div>`;
}
function roadmap(){
 const s=S(),next=nextTopic(s);
 document.querySelector("#app").innerHTML=`${nav('path')}<section class="hero"><div class="eyebrow">Follow the numbers</div><h1>Your complete backend path 🧭</h1><p>Start at <b>001</b> and move forward. Don't skip around unless a real project specifically requires it. The colored label shows importance, not learning order.</p></section><div class="actions"><button class="btn danger" id="reset">Reset all progress</button></div>
 ${ROADMAP.map(p=>{let pd=pct(done(s,p.topics),p.weight);return `<section class="phase" id="${p.id}"><div class="phase-head"><div class="row"><div><div class="eyebrow">${p.phase}</div><h2 style="margin:5px 0">${p.icon} ${p.title}</h2></div><b>${pd.toFixed(1)}%</b></div>${bar(pd)}</div><div class="topic-list">${p.topics.map(t=>`<label id="${t.id}" class="topic ${s[t.id]?'done':''} ${next&&next.id===t.id?'next':''}"><input type="checkbox" data-id="${t.id}" ${s[t.id]?'checked':''}><div class="topic-main">${next&&next.id===t.id?'<div class="next-label">🎯 YOUR NEXT STEP</div>':''}<div class="row"><div class="topic-title"><span class="number">${String(t.number).padStart(3,'0')}</span> — ${t.title}</div><span class="priority ${t.priority}">${priority(t.priority)}</span></div><div class="topic-desc">${t.description}</div><div class="meta"><a class="resource" href="${t.url}" target="_blank" rel="noopener">📚 Learn / Study ↗</a><span class="weight">Progress weight: ${t.weight}</span></div></div></label>`).join("")}</div></section>`}).join("")}<div class="footer">One path. One sequence. Just keep moving forward. 🚀</div>`;
 document.querySelectorAll("[data-id]").forEach(c=>c.addEventListener("change",()=>{let s=S();s[c.dataset.id]=c.checked;save(s);roadmap();}));
 document.querySelector("#reset").onclick=()=>{if(confirm("Reset all progress?")){localStorage.removeItem(KEY);roadmap();}};
 if(location.hash){setTimeout(()=>document.querySelector(location.hash)?.scrollIntoView({behavior:"smooth",block:"center"}),100);}
}
function resources(){
 document.querySelector("#app").innerHTML=`${nav('resources')}<section class="hero"><div class="eyebrow">Study resources</div><h1>One roadmap. Direct links. Less Googling. 😄</h1><p>Every numbered topic on the Learning Path has its own study link. Use this page to jump directly to the phase you are currently learning.</p></section><div class="grid">${ROADMAP.map(p=>`<section class="card phase-card"><div class="eyebrow">${p.phase}</div><h3>${p.icon} ${p.title}</h3>${p.topics.slice(0,4).map(t=>`<p><a class="resource" href="${t.url}" target="_blank">📚 ${String(t.number).padStart(3,'0')} — ${t.title} ↗</a></p>`).join("")}${p.topics.length>4?`<a class="continue" href="roadmap.html#${p.id}">View all ${p.topics.length} topics →</a>`:""}</section>`).join("")}</div>`;
}
({home:dashboard,path:roadmap,resources:resources}[document.body.dataset.page])();
