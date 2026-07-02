# -*- coding: utf-8 -*-
"""
gen-cv.py — Gera o currículo em PDF (public/curriculo-augusto-silva.pdf).

Uso:  python scripts/gen-cv.py   (ou: npm run gen:cv)
Requer: pip install reportlab

Conteúdo espelha src/data.ts e src/portfolio.ts — ao atualizar experiência/
projetos no site, atualize aqui também e regenere o PDF.

Decisões: nome profissional (Augusto Silva), sem endereço residencial
(PDF é público no site), 1 página, single-column (ATS-friendly).
"""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable,
)
import os

# ---- Paleta (marca do portfólio) -------------------------------------------
PETROL = HexColor("#0e1c20")
INK = HexColor("#1f2a2e")
MUTED = HexColor("#4a575c")
FAINT = HexColor("#6d7a7f")
SAND = HexColor("#b3a15e")   # areia escurecida p/ contraste em fundo branco
LINE = HexColor("#d8d4c4")

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "curriculo-augusto-silva.pdf")

# ---- Estilos ----------------------------------------------------------------
def st(name, **kw):
    base = dict(fontName="Helvetica", fontSize=9, leading=12.5, textColor=INK, alignment=TA_LEFT)
    base.update(kw)
    return ParagraphStyle(name, **base)

S = {
    "name":     st("name", fontName="Helvetica-Bold", fontSize=23, leading=26, textColor=PETROL),
    "role":     st("role", fontName="Helvetica-Bold", fontSize=11.5, leading=15, textColor=SAND),
    "contact":  st("contact", fontSize=8.4, leading=12, textColor=MUTED),
    "h":        st("h", fontName="Helvetica-Bold", fontSize=10.2, leading=13, textColor=PETROL, spaceBefore=0),
    "job":      st("job", fontName="Helvetica-Bold", fontSize=9.6, leading=12.5, textColor=INK),
    "jobmeta":  st("jobmeta", fontSize=8.2, leading=11, textColor=FAINT),
    "body":     st("body"),
    "bullet":   st("bullet", leftIndent=9, bulletIndent=0, spaceAfter=1.5),
    "proj":     st("proj", spaceAfter=2.5),
    "skill":    st("skill", spaceAfter=2),
}

def H(text):
    return [
        Paragraph(text.upper(), S["h"]),
        HRFlowable(width="100%", thickness=1.4, color=SAND, spaceBefore=1.5, spaceAfter=5),
    ]

def B(text):
    return Paragraph(text, S["bullet"], bulletText="•")

# ---- Conteúdo ----------------------------------------------------------------
story = []

# Cabeçalho
story.append(Paragraph("Augusto Silva", S["name"]))
story.append(Paragraph("Desenvolvedor Full Stack — Frontend · Backend · Automação de Sistemas", S["role"]))
story.append(Spacer(1, 4))
story.append(Paragraph(
    "Santo Estêvão, BA · +55 75 98883-9535 · augustopxsilva@gmail.com",
    S["contact"]))
story.append(Paragraph(
    'portfolioaugusto.vercel.app · linkedin.com/in/augusto-px-silva · github.com/GuguPx',
    S["contact"]))
story.append(Spacer(1, 8))

# Resumo
story += H("Resumo profissional")
story.append(Paragraph(
    "Desenvolvedor Full Stack na Power Telecom. Construo sistemas internos, automações e integrações que "
    "sustentam a operação — de gestão de contratos e controle de estoque a relatórios de inadimplência e "
    "disparo automatizado de mensagens. Atuo com React, TypeScript e Node.js, integrando plataformas como "
    "IXC Soft, OPA Suite, Google Sheets e WhatsApp. Uso IA (Claude Code, ChatGPT) como ferramenta de "
    "produtividade, com revisão humana e validação técnica.", S["body"]))
story.append(Spacer(1, 8))

# Experiência
story += H("Experiência")
story.append(Paragraph("Desenvolvedor Júnior — Power Telecom", S["job"]))
story.append(Paragraph("fev 2026 — atual · Santo Estêvão, BA · Tempo integral", S["jobmeta"]))
story.append(Spacer(1, 2.5))
story.append(B("Desenvolvimento de aplicações web com React e Node.js e de sistemas internos que automatizam processos das áreas comercial, financeira e de RH."))
story.append(B("Sistema web de gestão de contratos (cancelamento, renovação e contratos padrão) e sistema de gerenciamento de estoque da matriz."))
story.append(B("Plataforma interna estilo SaaS para gestão de colaboradores; ferramentas de relatórios de inadimplência, controle de instalações e disparo automatizado de mensagens."))
story.append(B("Integração e suporte com plataformas externas (IXC Soft e OPA Suite); gerenciamento básico de servidores e infraestrutura."))
story.append(Spacer(1, 6))

story.append(Paragraph("Suporte Técnico N1 (Estágio) — Power Telecom", S["job"]))
story.append(Paragraph("nov 2025 — fev 2026 · Santo Estêvão, BA", S["jobmeta"]))
story.append(Spacer(1, 2.5))
story.append(B("Atendimento e assistência técnica a clientes; resolução de problemas de contas, conectividade e uso de sistemas."))
story.append(B("Escalonamento de casos complexos e treinamento básico de usuários em sistemas e aplicativos."))
story.append(Spacer(1, 6))

story.append(Paragraph("Recepcionista / Auxiliar geral — Point dos Churros", S["job"]))
story.append(Paragraph("abr 2022 — mar 2025 · Santo Estêvão, BA", S["jobmeta"]))
story.append(Spacer(1, 2.5))
story.append(B("Atendimento ao cliente ponta a ponta, vendas via WhatsApp e organização de inventário/estoque."))
story.append(Spacer(1, 8))

# Projetos em destaque
story += H("Projetos e sistemas em destaque (Power Telecom)")
story.append(Paragraph("<b>Power Leads (CRM comercial)</b> — frontend React/TypeScript de CRM interno com funil de leads e integração IXC.", S["proj"]))
story.append(Paragraph("<b>Gestão de Contratos</b> — sistema web para cancelamento, renovação e emissão de contratos padrão, com assinatura digital.", S["proj"]))
story.append(Paragraph("<b>Bots de automação</b> — rotinas Node.js (node-cron/PM2) que reduzem tarefas manuais de cobrança e comercial, com integração IXC, Google Sheets e WhatsApp.", S["proj"]))
story.append(Paragraph("<b>Controle de Estoque (matriz)</b> — sistema interno de gerenciamento de estoque com relatórios.", S["proj"]))
story.append(Spacer(1, 8))

# Habilidades
story += H("Habilidades técnicas")
skills = [
    ("Frontend", "React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Bootstrap, responsividade"),
    ("Backend & APIs", "Node.js, Express, APIs REST, autenticação JWT, automação de processos"),
    ("Banco de dados", "SQL, MySQL, modelagem de dados, relatórios"),
    ("Automação & Integrações", "node-cron, PM2, Winston, Axios, IXC Soft, OPA Suite, Google Sheets, WhatsApp, ZapSign"),
    ("Ferramentas & IA", "Git, GitHub, Docker, VS Code, servidores/infra; Claude Code e ChatGPT com revisão humana"),
]
for k, v in skills:
    story.append(Paragraph(f"<b>{k}:</b> {v}", S["skill"]))
story.append(Spacer(1, 8))

# Formação + Idiomas lado a lado (tabela 2 colunas p/ economizar altura)
left = [
    Paragraph("FORMAÇÃO", S["h"]),
    HRFlowable(width="100%", thickness=1.4, color=SAND, spaceBefore=1.5, spaceAfter=5),
    Paragraph("<b>Bacharelado em Engenharia de Software</b> — Estácio", S["body"]),
    Paragraph("jul 2025 — jul 2029 (em andamento)", S["jobmeta"]),
    Spacer(1, 4),
    Paragraph("<b>Formação Front-End (DevQuest)</b> — Dev em Dobro", S["body"]),
    Paragraph("dez 2024 — dez 2025 (concluído)", S["jobmeta"]),
]
right = [
    Paragraph("IDIOMAS", S["h"]),
    HRFlowable(width="100%", thickness=1.4, color=SAND, spaceBefore=1.5, spaceAfter=5),
    Paragraph("<b>Português</b> — nativo", S["body"]),
    Spacer(1, 2),
    Paragraph("<b>Inglês</b> — avançado (C2)", S["body"]),
]
t = Table([[left, right]], colWidths=[None, 62 * mm])
t.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (0, 0), 0),
    ("RIGHTPADDING", (1, 0), (1, 0), 0),
]))
story.append(t)

# ---- Build -------------------------------------------------------------------
doc = BaseDocTemplate(
    OUT, pagesize=A4,
    leftMargin=16 * mm, rightMargin=16 * mm, topMargin=14 * mm, bottomMargin=12 * mm,
    title="Currículo — Augusto Silva · Desenvolvedor Full Stack",
    author="Augusto Silva",
)
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
doc.addPageTemplates([PageTemplate(id="cv", frames=[frame])])
doc.build(story)
print(f"CV gerado: {os.path.abspath(OUT)}")
