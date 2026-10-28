// Pure lookup ranking: a typed function name must not be buried in prose matches.
export function searchReferences(entries,query='',category=''){
 const q=query.trim().toLowerCase();
 const rank=r=>{const name=r.name.toLowerCase(),aliases=(r.aliases||[]).map(a=>a.toLowerCase());if(!q)return 0;if(name===q)return 0;if(aliases.includes(q))return 1;if(name.startsWith(q))return 2;if(aliases.some(a=>a.startsWith(q)))return 3;if(name.includes(q)||aliases.some(a=>a.includes(q)))return 4;return 5};
 return entries.filter(r=>(!category||r.category===category)&&(!q||JSON.stringify(r).toLowerCase().includes(q))).sort((a,b)=>rank(a)-rank(b)||a.name.localeCompare(b.name));
}
