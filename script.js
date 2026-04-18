// ════════════════════════════════════════
// DATA
// ════════════════════════════════════════

const NAV_LINKS = [
    { page: 'about',        href: 'index.html',        key: 'nav-about',        label: 'About' },
    { page: 'skills',       href: 'skills.html',       key: 'nav-skills',       label: 'Skills' },
    { page: 'quests',       href: 'quests.html',       key: 'nav-quests',       label: 'Quests' },
    { page: 'education',    href: 'education.html',    key: 'nav-education',    label: 'Education' },
    { page: 'achievements', href: 'achievements.html', key: 'nav-achievements', label: 'Achievements' },
    { page: 'contact',      href: 'contact.html',      key: 'nav-contact',      label: 'Contact' },
];

const SKILL_BARS = [
    { name: 'Python',       level: 5 },
    { name: 'REST APIs',    level: 4 },
    { name: 'Google Cloud', level: 4 },
    { name: 'Langchain',    level: 4 },
    { name: 'Agentic AI',   level: 4 },
    { name: 'Flask',        level: 4 },
    { name: 'Firebase',     level: 3 },
    { name: 'Docker',       level: 3 },
    { name: 'Git',          level: 3 },
    { name: 'NoSQL',        level: 3 },
    { name: 'Cypress',      level: 3 },
    { name: 'Java',         level: 2 },
];

// ════════════════════════════════════════
// TRANSLATIONS
// ════════════════════════════════════════
const i18n = {
    en: {
        'char-class':          'CLASS: BACKEND SORCERER',
        'char-subtitle':       'Software Developer | Cybersecurity & AI Enthusiast',
        'char-location':       '► Germany (made in Indonesia)',
        'nav-about':           'About',
        'nav-skills':          'Skills',
        'nav-quests':          'Quests',
        'nav-education':       'Education',
        'nav-achievements':    'Achievements',
        'nav-contact':         'Contact',
        'h2-about':            'About Me',
        'h2-skills':           'Skills',
        'h2-quests':           'Quest Log',
        'h2-education':        'Education',
        'h2-achievements':     'Achievements',
        'h2-contact':          'Contact',
        'about-p1':            "Hi! I'm a software developer with expertise in Python, GCP, Firebase, REST API, and Langchain. I'm based in Germany but made in Indonesia :D, studied at University of Saarland majoring in Cybersecurity.",
        'about-p2':            'Happy to give you some insights on my personal projects and get to know me.',
        'bio-header':          '▶ CHARACTER BIO',
        'bio-gaming-name':     'GAMING',
        'bio-gaming-desc':     'Avid gamer — probably why pixel UIs feel like home.',
        'bio-cooking-name':    'COOKING',
        'bio-cooking-desc':    'Enjoys experimenting in the kitchen — debugging recipes one dish at a time.',
        'bio-baking-name':     'BAKING',
        'bio-baking-desc':     'Dedicated baker who treats it like precision engineering.',
        'bio-reading-name':    'READING',
        'bio-reading-desc':    'Loves a good book — fiction or non-fiction, both welcome.',
        'bio-listening-label': 'CURRENTLY LISTENING',
        'bio-listening-text':  'Founders & Acquired Podcast — fascinated by the stories behind companies and the people who build them.',
        'bio-lore':            "Bakes for everyone else. Does not eat sweets. The most selfless chaotic neutral you'll ever meet.",
        'skill-divider':       '— INVENTORY —',
        'quest1-status':       '[ ACTIVE ]',
        'quest1-title':        'Head of AI Team at Mona AI GmbH',
        'quest1-period':       '► March 2026 - Present',
        'quest1-p1':           'Leading the AI team in developing innovative solutions using cutting-edge technologies, different AI models for different use cases, and implementation of AI Agents for various applications such as interview scheduling between candidates and recruiters with Twilio and Outlook & Google Calendar integration, matching candidates to given user prompts or criteria.',
        'quest1-p2':           "Developing AI strategies and driving innovation in the company's AI initiatives.",
        'quest1-p3':           'Structuring AI projects and ensuring alignment with business objectives.',
        'quest2-status':       '[ DONE ]',
        'quest2-title':        'Software Developer at Mona AI GmbH',
        'quest2-period':       '► August 2024 - February 2026',
        'quest2-p1':           'Developing AI-powered applications, focusing on backend development using Python and cloud services.',
        'quest2-p2':           'Developing AI Agents and tools with context cache and memory management utilising Langchain and Langgraph packages.',
        'quest3-status':       '[ DONE ]',
        'quest3-title':        'Testengineer at ILC GmbH',
        'quest3-period':       '► August 2023 - July 2024',
        'quest3-p1':           'Assisted in testing web applications and developing test automation using Cypress.',
        'quest3-p2':           'Creating automated test suites and cases for the web application incl. documenting bugs and tickets in Redmine.',
        'quest-rewards-label': 'REWARDS:',
        'edu1-title':          'University of Saarland',
        'edu1-period':         '► 2020 - 2024',
        'edu1-p':              "Bachelor's Degree in Cybersecurity with focus on digital signatures and automation. Relevant coursework includes Network Security, Cryptography, and Secure Software Development.",
        'edu2-title':          'Studienkolleg in Hochschule Kaiserslautern',
        'edu2-period':         '► 2019 - 2020',
        'edu2-p':              'College of Applied Sciences for T-Kurs in Kaiserslautern, Germany. Focused on preparing for university studies in Computer Science.',
        'ach1-name':           'TEAM LEADER',
        'ach1-desc':           'Promoted to Head of AI Team — leading the charge.',
        'ach2-name':           'AI PIONEER',
        'ach2-desc':           'Built AI Chat system.',
        'ach3-name':           'CLOUD MAGE',
        'ach3-desc':           'Deployed and managed full GCP backend infrastructure.',
        'ach4-name':           'CYBERSEC SCHOLAR',
        'ach4-desc':           "Bachelor's in Cybersecurity — University of Saarland.",
        'ach5-name':           'WORLD TRAVELER',
        'ach5-desc':           'Indonesia → Germany. Unlocked international career.',
        'ach6-name':           'QA GUARDIAN',
        'ach6-desc':           'Mastered E2E testing and CI automation with Cypress.',
        'contact-email':       'Email:',
        'contact-github':      'GitHub:',
        'contact-linkedin':    'LinkedIn:',
        'footer':              '© 2026 Devi Faustine. All rights reserved.',
    },
    de: {
        'char-class':          'KLASSE: BACKEND-ZAUBERIN',
        'char-subtitle':       'Softwareentwicklerin | Cybersicherheit & KI',
        'char-location':       '► Deutschland (made in Indonesien)',
        'nav-about':           'Über mich',
        'nav-skills':          'Fähigkeiten',
        'nav-quests':          'Aufgaben',
        'nav-education':       'Ausbildung',
        'nav-achievements':    'Erfolge',
        'nav-contact':         'Kontakt',
        'h2-about':            'Über mich',
        'h2-skills':           'Fähigkeiten',
        'h2-quests':           'Aufgabenlog',
        'h2-education':        'Ausbildung',
        'h2-achievements':     'Erfolge',
        'h2-contact':          'Kontakt',
        'about-p1':            'Hallo! Ich bin eine Softwareentwicklerin mit Expertise in Python, GCP, Firebase, REST API und Langchain. Ich wohne in Saarbrücken, komme aber aus Indonesien :D — ich habe an der Universität des Saarlandes Cybersicherheit studiert.',
        'about-p2':            'Hier findest du Einblicke in meine Projekte und kannst mich besser kennenlernen.',
        'bio-header':          '▶ CHARAKTER-BIO',
        'bio-gaming-name':     'GAMING',
        'bio-gaming-desc':     'Leidenschaftliche Gamerin — kein Wunder, dass Pixel-UIs sich wie zuhause anfühlen.',
        'bio-cooking-name':    'KOCHEN',
        'bio-cooking-desc':    'Experimentiert gerne in der Küche — Rezepte debuggen, einen Teller nach dem anderen.',
        'bio-baking-name':     'BACKEN',
        'bio-baking-desc':     'Engagierte Bäckerin, die Backen wie Präzisionsarbeit behandelt.',
        'bio-reading-name':    'LESEN',
        'bio-reading-desc':    'Liest gerne — ob Fiktion oder Non-Fiktion, beides ist willkommen.',
        'bio-listening-label': 'AKTUELL IM OHRWURM',
        'bio-listening-text':  'Founders & Acquired — fasziniert von den Geschichten hinter Unternehmen und den Menschen, die sie aufbauen.',
        'bio-lore':            'Backt für alle anderen. Isst selbst keine Süßigkeiten. Der selbstloseste chaotisch-neutrale Mensch, den du je treffen wirst.',
        'skill-divider':       '— INVENTAR —',
        'quest1-status':       '[ AKTIV ]',
        'quest1-title':        'Head of AI Team bei Mona AI GmbH',
        'quest1-period':       '► März 2026 - Heute',
        'quest1-p1':           'Leitung des KI-Teams bei der Entwicklung innovativer Lösungen mit modernsten Technologien vor allem mit KI z.B. Interview Terminierung zwischen Kandidaten und Recruitern mit Twilio und Outlook & Google Kalender Integration, Matching zwischen Kandidaten und gegebenem User Prompt bzw. Kriterien.',
        'quest1-p2':           'Entwicklung von KI-Strategien und Vorantreiben von Innovationen in den KI-Initiativen des Unternehmens.',
        'quest1-p3':           'Strukturierung von KI-Projekten und Sicherstellung der Ausrichtung an Unternehmenszielen.',
        'quest2-status':       '[ ERLEDIGT ]',
        'quest2-title':        'Softwareentwicklerin bei Mona AI GmbH',
        'quest2-period':       '► August 2024 - Februar 2026',
        'quest2-p1':           'Entwicklung KI-gestützter Anwendungen mit Schwerpunkt auf Backend-Entwicklung in Python und Cloud-Diensten.',
        'quest2-p2':           'Entwicklung von KI-Agenten und Tools mit Kontext-Cache und Speicherverwaltung mithilfe von Langchain und Langgraph.',
        'quest3-status':       '[ ERLEDIGT ]',
        'quest3-title':        'Testingenieurin bei ILC GmbH',
        'quest3-period':       '► August 2023 - Juli 2024',
        'quest3-p1':           'Unterstützung beim Testen von Webanwendungen und Entwicklung von Testautomatisierung mit Cypress.',
        'quest3-p2':           'Erstellung automatisierter Test-Suites und Testfälle für die Webanwendung inkl. Dokumentation von Bugs und Tickets in Redmine.',
        'quest-rewards-label': 'BELOHNUNGEN:',
        'edu1-title':          'Universität des Saarlandes',
        'edu1-period':         '► 2020 - 2024',
        'edu1-p':              'Bachelor-Abschluss in Cybersicherheit mit Schwerpunkt auf digitalen Signaturen und Automatisierung. Relevante Kurse: Netzwerksicherheit, Kryptographie und sichere Softwareentwicklung.',
        'edu2-title':          'Studienkolleg der Hochschule Kaiserslautern',
        'edu2-period':         '► 2019 - 2020',
        'edu2-p':              'Studienkolleg (T-Kurs) an der Hochschule Kaiserslautern, Deutschland. Vorbereitung auf das Informatikstudium an einer deutschen Hochschule.',
        'ach1-name':           'TEAMANFÜHRERIN',
        'ach1-desc':           'Zur Head of AI Team befördert — führt die Truppe an.',
        'ach2-name':           'KI-PIONIERIN',
        'ach2-desc':           'Hat produktionsreife agentische KI-Systeme von Grund auf entwickelt.',
        'ach3-name':           'CLOUD-ZAUBERIN',
        'ach3-desc':           'Vollständige GCP-Backend-Infrastruktur bereitgestellt und verwaltet.',
        'ach4-name':           'CYBERSEC-GELEHRTE',
        'ach4-desc':           'Bachelor in Cybersicherheit — Universität des Saarlandes.',
        'ach5-name':           'WELTENBUMMLERIN',
        'ach5-desc':           'Indonesien → Deutschland. Internationale Karriere freigeschaltet.',
        'ach6-name':           'QA-WÄCHTERIN',
        'ach6-desc':           'E2E-Tests und CI-Automatisierung mit Cypress gemeistert.',
        'contact-email':       'E-Mail:',
        'contact-github':      'GitHub:',
        'contact-linkedin':    'LinkedIn:',
        'footer':              '© 2026 Devi Faustine. Alle Rechte vorbehalten.',
    }
};

// ════════════════════════════════════════
// SHARED SHELL (header + nav)
// ════════════════════════════════════════

function buildShell(activePage) {
    const navItems = NAV_LINKS.map(({ page, href, key, label }) =>
        `<li><a href="${href}"${page === activePage ? ' class="active"' : ''} data-i18n="${key}">${label}</a></li>`
    ).join('\n        ');

    return `<button id="lang-toggle" onclick="toggleLang()">DE</button>
<header>
    <div class="character-sheet">
        <div class="sprite-container">
            <div class="sprite-frame">
                <img src="char.png" class="character-sprite" alt="Pixel art character of Devi Faustine">
            </div>
            <div class="sprite-name-tag">PLAYER 1</div>
        </div>
        <div class="char-main">
            <div class="character-name">Devi Faustine</div>
            <div class="character-class" data-i18n="char-class">CLASS: BACKEND SORCERER</div>
            <div class="stat-row">
                <span class="stat-label">LVL</span>
                <span class="stat-value">3</span>
                <span class="stat-stars">★★★</span>
            </div>
            <div class="stat-bar-row">
                <span class="stat-label">HP</span>
                <div class="stat-bar"><div class="stat-fill hp" style="width:82%"></div></div>
                <span class="stat-num">82/100</span>
            </div>
            <div class="stat-bar-row">
                <span class="stat-label">MP</span>
                <div class="stat-bar"><div class="stat-fill mp" style="width:95%"></div></div>
                <span class="stat-num">95/100</span>
            </div>
        </div>
        <div class="char-side">
            <div class="mini-stats">
                <div class="mini-stat"><span class="mini-stat-label">STR</span><span class="mini-stat-value">★★★</span></div>
                <div class="mini-stat"><span class="mini-stat-label">INT</span><span class="mini-stat-value">★★★★★</span></div>
                <div class="mini-stat"><span class="mini-stat-label">DEX</span><span class="mini-stat-value">★★★★</span></div>
            </div>
            <div class="character-subtitle">
                <span data-i18n="char-subtitle">Software Developer | Cybersecurity &amp; AI Enthusiast</span><br>
                <span data-i18n="char-location">► Germany (made in Indonesia)</span>
            </div>
        </div>
    </div>
</header>
<nav>
    <ul>
        ${navItems}
    </ul>
</nav>`;
}

// ════════════════════════════════════════
// SKILL BARS
// ════════════════════════════════════════

function renderSkillBars(container) {
    const MAX = 5;
    container.innerHTML = SKILL_BARS.map(({ name, level }) => {
        const blocks = Array.from({ length: MAX }, (_, i) =>
            `<div class="skill-bar-block${i < level ? ' filled' : ''}"></div>`
        ).join('');
        return `<div class="skill-bar-row">
            <span class="skill-bar-name">${name}</span>
            <div class="skill-bar-track">${blocks}</div>
            <span class="skill-bar-lvl">LVL ${level}</span>
        </div>`;
    }).join('\n');
}

// ════════════════════════════════════════
// LANGUAGE SWITCHER
// ════════════════════════════════════════

// Priority: URL param → localStorage → default 'en'
function getLangFromURL() {
    return new URLSearchParams(window.location.search).get('lang');
}

let currentLang = getLangFromURL() || localStorage.getItem('lang') || 'en';

function setLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang]?.[key] !== undefined) el.textContent = i18n[lang][key];
    });
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Rewrite nav links to carry ?lang= across page navigations
    document.querySelectorAll('nav a').forEach(a => {
        try {
            const url = new URL(a.getAttribute('href'), window.location.href);
            url.searchParams.set('lang', lang);
            a.href = url.pathname + url.search;
        } catch { /* skip external links */ }
    });

    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'en' ? 'DE' : 'EN';
    document.documentElement.lang = lang;
}

function toggleLang() {
    setLang(currentLang === 'en' ? 'de' : 'en');
}

// ════════════════════════════════════════
// INIT
// ════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page || 'about';
    document.body.insertAdjacentHTML('afterbegin', buildShell(page));

    setLang(currentLang);

    const skillBarsEl = document.querySelector('.skill-bars');
    if (skillBarsEl) renderSkillBars(skillBarsEl);

    // Skill chips (skills page only)
    const skillItems = document.querySelectorAll('.skill-item');
    const skillInfo  = document.getElementById('skill-info');
    if (!skillItems.length || !skillInfo) return;

    function showDetail(el) {
        skillItems.forEach(s => s.setAttribute('aria-pressed', s === el ? 'true' : 'false'));
        skillInfo.textContent = el.getAttribute('data-detail') || '';
        skillInfo.hidden = false;
        skillInfo.classList.add('visible');
    }

    skillItems.forEach(el => {
        el.addEventListener('click', () => showDetail(el));
        el.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showDetail(el); }
            if (e.key === 'Escape') {
                el.setAttribute('aria-pressed', 'false');
                skillInfo.hidden = true;
                skillInfo.classList.remove('visible');
            }
        });
    });
});
