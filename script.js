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
        'ach2-desc':           'Built production-ready agentic AI systems from scratch.',
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
        'footer':              '© 2025 Devi Faustine. All rights reserved.',
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
        'footer':              '© 2025 Devi Faustine. Alle Rechte vorbehalten.',
    }
};

// ════════════════════════════════════════
// LANGUAGE SWITCHER
// ════════════════════════════════════════

// Priority: URL param → localStorage → default 'en'
// This ensures language persists across page navigations even on file:// protocol.
function getLangFromURL() {
    return new URLSearchParams(window.location.search).get('lang');
}

let currentLang = getLangFromURL() || localStorage.getItem('lang') || 'en';

function setLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang] && i18n[lang][key] !== undefined) {
            el.textContent = i18n[lang][key];
        }
    });
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Rewrite all nav links to carry ?lang= so it survives page navigation
    document.querySelectorAll('nav a').forEach(a => {
        try {
            const url = new URL(a.getAttribute('href'), window.location.href);
            url.searchParams.set('lang', lang);
            a.href = url.pathname + url.search;
        } catch (e) { /* skip external links */ }
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
document.addEventListener('DOMContentLoaded', function () {
    setLang(currentLang);

    // Skill chips (only on skills.html)
    const skills = document.querySelectorAll('.skill-item');
    const info   = document.getElementById('skill-info');
    if (!skills.length || !info) return;

    function showDetail(el) {
        skills.forEach(s => s.setAttribute('aria-pressed', s === el ? 'true' : 'false'));
        info.textContent = el.getAttribute('data-detail') || '';
        info.hidden = false;
        info.classList.add('visible');
    }

    skills.forEach(el => {
        el.addEventListener('click', () => showDetail(el));
        el.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showDetail(el); }
            if (e.key === 'Escape') {
                el.setAttribute('aria-pressed', 'false');
                info.hidden = true;
                info.classList.remove('visible');
            }
        });
    });
});
