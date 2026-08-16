"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/types";

const WA = "2348129284013";

const money = (value: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(value);

export default function Storefront({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))].sort(),
    [products]
  );

  const visible = products.filter((p) => {
    const q = query.toLowerCase();
    return (
      (!q ||
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.description ?? "").toLowerCase().includes(q)) &&
      (!category || p.category === category)
    );
  });

  return (
    <>
      <header className="nav">
        <a className="logo" href="#">
          AGNELY&apos;s VENTURE
          <small>FASHION • FABRICS • ACCESSORIES</small>
        </a>
        <nav>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a className="button" href={`https://wa.me/${WA}`} target="_blank">
            WhatsApp
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div>
            <span className="eyebrow">STYLE • QUALITY • CONFIDENCE</span>
            <h1>Everything Her Style Needs.</h1>
            <p>
              Beautiful fabrics, elegant gowns, handbags, shoes, accessories
              and complete women&apos;s outfits — all in one place.
            </p>
            <div className="actions">
              <a className="button" href="#shop">Explore Collection</a>
              <a className="button outline" href={`https://wa.me/${WA}`} target="_blank">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="shop">
          <span className="eyebrow">OUR COLLECTION</span>
          <h2>Available Stock</h2>
          <p className="muted">
            Browse current stock and message us directly to confirm availability.
          </p>

          <div className="filters">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">All Categories</option>
              {categories.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>

          <div className="products">
            {visible.map((p) => {
              const stockClass = p.stock === 0 ? "out" : p.stock <= 3 ? "low" : "";
              const label = p.stock === 0 ? "Sold Out" : p.stock <= 3 ? `Only ${p.stock} left` : `${p.stock} available`;
              const message = `Hello AGNELY's VENTURE, I am interested in "${p.title}" priced at ${money(p.price)}. Please confirm availability.`;

              return (
                <article className="card" key={p.id}>
                  <div className="card-image">
                    <img src={p.image_url} alt={p.title} loading="lazy" />
                    <span className={`stock ${stockClass}`}>{label}</span>
                  </div>
                  <div className="card-body">
                    <span className="category">{p.category}</span>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <strong className="price">{money(p.price)}</strong>
                    {p.stock > 0 ? (
                      <a className="button wide" href={`https://wa.me/${WA}?text=${encodeURIComponent(message)}`} target="_blank">
                        Order on WhatsApp
                      </a>
                    ) : (
                      <button className="button wide disabled" disabled>Currently Sold Out</button>
                    )}
                  </div>
                </article>
              );
            })}
            {!visible.length && <div className="empty">No products match your search.</div>}
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-grid">
            <div>
              <span className="eyebrow">THE WOMAN BEHIND THE VENTURE</span>
              <h2>Built on experience, service and trust.</h2>
              <p className="muted">
                AGNELY&apos;s VENTURE is owned by Mrs. Agnes Nwoke Agwu, a retired
                teacher and mother of three adult children with over eight years
                of experience in fashion retail.
              </p>
            </div>
            <div className="story">
              <h3>Mrs. Agnes Nwoke Agwu</h3>
              <p>
                From Ankara and George fabrics to gowns, handbags, shoes,
                hair accessories and other women&apos;s fashion essentials,
                AGNELY&apos;s VENTURE brings variety together under one roof.
              </p>
              <div className="values">
                <div><b>8+ Years</b><span>Business experience</span></div>
                <div><b>Complete Style</b><span>Outfits & accessories</span></div>
                <div><b>Personal Service</b><span>Helping customers choose</span></div>
                <div><b>Trusted Business</b><span>Built around service</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <span className="eyebrow">LET&apos;S TALK</span>
          <h2>Looking for something beautiful?</h2>
          <p>Ask about fabrics, sizes, prices, accessories or complete outfits.</p>
          <strong>08129284013</strong>
          <a className="button" href={`https://wa.me/${WA}`} target="_blank">Chat With AGNELY&apos;s VENTURE</a>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} AGNELY&apos;s VENTURE. All rights reserved.</footer>
    </>
  );
}