"use client";
import { FormEvent, useState } from "react";
export default function AdminLogin() {
  const [error,setError]=useState("");
  async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();const password=new FormData(e.currentTarget).get("password");const r=await fetch("/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password})});if(r.ok) location.href="/admin"; else setError("Incorrect admin password.");}
  return <main className="admin-wrap"><form className="admin-card login" onSubmit={submit}><span className="eyebrow">AGNELY&apos;S VENTURE</span><h1>Admin Access</h1><input name="password" type="password" placeholder="Admin password" required autoFocus/><button className="button wide">Enter Dashboard</button>{error&&<p className="error">{error}</p>}</form></main>;
}
