"use client";

import Link from "next/link";
import Shell from "@/components/eden/Shell";
import { WA_SUPORTE } from "@/components/eden/site";
import s from "@/components/eden/eden.module.css";

export default function NotFound() {
  return (
    <Shell>
      <section className={s.final} data-scene={JSON.stringify({ shape: "chaos", align: "center" })}>
        <div className={s.finalInner}>
          <p className={s.chapterLabel}>404</p>
          <h1 className={s.finalVerse} data-hero-title>Você saiu do jardim.</h1>
          <p className={s.body} data-hero-fade>Esta página não existe ou mudou de lugar. Escolha um caminho de volta:</p>
          <div className={`${s.ctaRow} ${s.center}`} data-hero-fade>
            <Link href="/" className={s.btnPrimary}>Início</Link>
            <Link href="/produtos" className={s.btnGhost}>Produto</Link>
            <Link href="/planos" className={s.btnGhost}>Planos</Link>
            <a href={`https://wa.me/${WA_SUPORTE}`} target="_blank" rel="noopener noreferrer" className={s.btnGhost}>Suporte</a>
          </div>
        </div>
      </section>
    </Shell>
  );
}
