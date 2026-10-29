'use client';
import {useState} from 'react';
import Link from 'next/link';
import {Search, ArrowRight} from 'lucide-react';
import {companies} from '@/lib/data';
export function CompanySearch(){const [q,setQ]=useState('');return <div className="hero-search-wrap"><form className="hero-search" action="/companies"><Search size={22}/><input name="q" aria-label="Search companies" placeholder="Search a company, sector, or business…" value={q} onChange={e=>setQ(e.target.value)}/><button aria-label="Find companies"><ArrowRight size={20}/></button></form>{q&&<div className="search-results">{companies.filter(c=>(c.name+' '+c.symbol+' '+c.sector).toLowerCase().includes(q.toLowerCase())).map(c=><Link key={c.symbol} href={c.available?'/companies/adani-ports':`/companies?q=${encodeURIComponent(c.name)}`}><span>{c.name}</span><small>{c.available?'Read research →':'Example listing'}</small></Link>)}{!companies.some(c=>(c.name+' '+c.symbol+' '+c.sector).toLowerCase().includes(q.toLowerCase()))&&<p>No matches. Try “Adani” or “Banking”.</p>}</div>}</div>}
