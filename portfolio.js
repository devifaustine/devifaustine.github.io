// ════════════════════════════════════════
// DATA
// ════════════════════════════════════════

const SKILL_BARS = [
    { name: 'Python',       level: 5 }, { name: 'REST APIs', level: 4 }, { name: 'Google Cloud', level: 4 },
    { name: 'Langchain',    level: 4 }, { name: 'Agentic AI', level: 4 }, { name: 'Flask',       level: 4 },
    { name: 'Firebase',     level: 3 }, { name: 'Docker',    level: 3 }, { name: 'Git',          level: 3 },
    { name: 'NoSQL',        level: 3 }, { name: 'Cypress',   level: 3 }, { name: 'Java',         level: 2 },
];

const INVENTORY = [
    { name: 'Python',                detail: 'Experience writing scripts, web services (Flask/FastAPI), main language for most projects.' },
    { name: 'Google Cloud',          detail: 'Backend with GCP + deployment: IAM, Cloud Run, Functions, Secret Manager, Firestore, Cloud Storage.' },
    { name: 'Langgraph & Langchain', detail: 'Building agents with LLM utilising Vertex & Gen AI via Langchain/Langgraph.' },
    { name: 'Agentic AI',            detail: 'Agents that interact with tools and APIs, using cache + memory for state.' },
    { name: 'Flask',                 detail: 'Flask & FastAPI — web apps and REST APIs with auth, DB, and deployment.' },
    { name: 'Firebase',              detail: 'Firestore for real-time DB, Firebase Auth, Firebase Hosting.' },
    { name: 'Docker',                detail: 'Containerising apps for Cloud Run + basic image builds.' },
    { name: 'Git',                   detail: 'GitHub Actions, CI/CD basics.' },
    { name: 'Cypress',               detail: 'E2E testing for web apps with test automation + CI integration.' },
    { name: 'Java',                  detail: 'University projects — board game Dead of Winter + tic tac toe.' },
];

const STACK_WORDS = ['Python','GCP','LangChain','Firebase','REST API','Cybersecurity','LangGraph','Cypress','CI/CD','Docker'];

const TERMINAL_LINES = [
    ['$ whoami', 'prompt'],
    ['devi.faustine — backend + ai', 'val'],
    ['$ cat traits.txt', 'prompt'],
    ['gaming, cooking, baking, reading', 'val'],
    ['$ status', 'prompt'],
    ['currently: shipping agents at Mona AI', 'val'],
];

// ════════════════════════════════════════
// SECTION RENDERING
// ════════════════════════════════════════

function renderSkillBars(container) {
    if (!container) return;
    container.innerHTML = SKILL_BARS.map(({ name, level }) => {
        const blocks = Array.from({ length: 5 }, (_, b) =>
            `<div class="skill-bar-block${b < level ? ' filled' : ''}"></div>`
        ).join('');
        return `<div class="skill-bar-row">
            <span class="skill-bar-name">${name}</span>
            <div class="skill-bar-track">${blocks}</div>
            <span class="skill-bar-lvl">LVL ${level}</span>
        </div>`;
    }).join('\n');
}

function renderInventory(container, infoPanel, infoText) {
    if (!container) return;
    container.innerHTML = INVENTORY.map(({ name }, i) =>
        `<div class="inv-item" role="button" tabindex="0" aria-pressed="false">${name}</div>`
    ).join('\n');

    const items = container.querySelectorAll('.inv-item');

    function select(el, idx) {
        const wasSelected = el.classList.contains('selected');
        items.forEach(it => { it.classList.remove('selected'); it.setAttribute('aria-pressed', 'false'); });
        if (wasSelected) {
            infoPanel.hidden = true;
        } else {
            el.classList.add('selected');
            el.setAttribute('aria-pressed', 'true');
            infoText.textContent = INVENTORY[idx].detail;
            infoPanel.hidden = false;
        }
    }

    items.forEach((el, idx) => {
        el.addEventListener('click', () => select(el, idx));
        el.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(el, idx); }
        });
    });
}

function renderMarquee(track) {
    if (!track) return;
    let html = '';
    for (let r = 0; r < 2; r++) {
        STACK_WORDS.forEach(w => { html += `<span>${w}</span>`; });
    }
    track.innerHTML = html;
}

function initRoleTicker(track, reduce) {
    if (!track || reduce) return;
    const items = track.children.length;
    let i = 0;
    setInterval(() => {
        i = (i + 1) % items;
        track.style.transform = `translateY(-${i * 1.9}em)`;
        track.style.transition = 'transform 500ms cubic-bezier(.2,.8,.2,1)';
    }, 2200);
}

function initTerminal(el, reduce) {
    if (!el) return;
    if (reduce) {
        el.innerHTML = TERMINAL_LINES.map(([text, cls]) => `<span class="${cls}">${text}</span>`).join('\n');
        return;
    }
    let li = 0, ci = 0, buf = '';
    function typeNext() {
        if (li >= TERMINAL_LINES.length) return;
        const [line, cls] = TERMINAL_LINES[li];
        if (ci === 0) buf += `<span class="${cls}">`;
        if (ci < line.length) {
            buf += line[ci];
            ci++;
            el.innerHTML = buf + '</span>';
            setTimeout(typeNext, 22);
        } else {
            buf += '</span>\n';
            el.innerHTML = buf;
            li++; ci = 0;
            setTimeout(typeNext, 260);
        }
    }
    setTimeout(typeNext, 500);
}

function initSpotlight(reduce) {
    if (reduce) return;
    const root = document.documentElement;
    window.addEventListener('pointermove', e => {
        root.style.setProperty('--sx', e.clientX + 'px');
        root.style.setProperty('--sy', e.clientY + 'px');
    }, { passive: true });
}

function initReveal(reduce) {
    const targets = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || reduce) {
        targets.forEach(el => el.classList.add('in'));
        return;
    }
    const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
            if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
    }, { threshold: 0.2 });
    targets.forEach(el => io.observe(el));
}

// ════════════════════════════════════════
// INIT
// ════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    renderSkillBars(document.getElementById('skill-bars'));
    renderInventory(
        document.getElementById('inventory'),
        document.getElementById('skill-info'),
        document.getElementById('skill-info-text')
    );
    renderMarquee(document.getElementById('marquee-track'));
    initRoleTicker(document.getElementById('role-track'), reduce);
    initTerminal(document.getElementById('typed'), reduce);
    initSpotlight(reduce);
    initReveal(reduce);
});
