// ════════════════════════════════════════
// DATA
// ════════════════════════════════════════

const WORLD_WIDTH = 4200;
const GROUND_Y    = 64;   // px from bottom of viewport to walking surface
const SPEED       = 6;    // px per frame
const GRAVITY     = -0.65;
const JUMP_V      = 13;

const STATIONS = [
    { x: 80,   icon: '🏡', title: 'INDONESIA',            period: '► Origin',                    body: 'Made in Indonesia :D — home base, level 1.', item: null },
    { x: 620,  icon: '📜', title: 'GEMA SPRACHENZENTRUM', period: '► Language Prep',             body: 'Studied German to prepare for life abroad.', item: 'B2 ZERTIFIKAT +1' },
    { x: 1160, icon: '🛂', title: 'DEUTSCHE BOTSCHAFT',   period: '► Visa Process',              body: 'Applied for a student visa at the German Embassy in Indonesia.', item: 'VISA +1' },
    { x: 1700, icon: '✈️', title: 'FLIGHT TO GERMANY',    period: '► Indonesia → Germany',       body: 'Boarded the flight — unlocked international career.', item: null, isFlight: true },
    { x: 2240, icon: '🎓', title: 'UNI SAARLAND',         period: '► 2020 – 2024',               body: "Bachelor's Degree in Cybersecurity — Network Security, Cryptography, Secure Software Development.", item: "BACHELOR'S DEGREE +1" },
    { x: 2780, icon: '🧪', title: 'ILC GMBH',             period: '► 2023 – 2024 · Part-time',   body: 'Test Engineer — E2E testing + Cypress automation, documenting bugs in Redmine.', item: 'QA BADGE +1' },
    { x: 3320, icon: '💻', title: 'MONA AI GMBH',         period: '► 2024 – 2026',               body: 'Software Developer — AI-powered apps, agents with Langchain + Langgraph on GCP.', item: 'PYTHON +2 · GCP +2' },
    { x: 3860, icon: '⚔️', title: 'HEAD OF AI TEAM',      period: '► March 2026 – Present',      body: 'Promoted to lead the AI team — strategy, structure, driving innovation.', item: 'LEADERSHIP +1' },
];

const OBSTACLES = [
    { x: 350,  size: 30 }, { x: 890,  size: 32 }, { x: 1430, size: 34 },
    { x: 2510, size: 32 }, { x: 3050, size: 30 }, { x: 3590, size: 34 },
];

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

// ════════════════════════════════════════
// STATIC SECTION RENDERING
// ════════════════════════════════════════

function renderSkillBars(container) {
    container.innerHTML = SKILL_BARS.map(({ name, level }, i) => {
        const blocks = Array.from({ length: 5 }, (_, b) =>
            `<div class="skill-bar-block${b < level ? ' filled' : ''}"></div>`
        ).join('');
        return `<div class="skill-bar-row" style="--i:${i}">
            <span class="skill-bar-name">${name}</span>
            <div class="skill-bar-track">${blocks}</div>
            <span class="skill-bar-lvl">LVL ${level}</span>
        </div>`;
    }).join('\n');
}

function renderInventory(container, infoPanel, infoText) {
    container.innerHTML = INVENTORY.map(({ name }, i) =>
        `<div class="inv-item" style="--i:${i}" role="button" tabindex="0" aria-pressed="false">${name}</div>`
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

// ════════════════════════════════════════
// JOURNEY GAME
// ════════════════════════════════════════

function buildWorld(world) {
    // Twinkling stars
    for (let i = 0; i < 26; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = ((i * 163 + 20) % WORLD_WIDTH) + 'px';
        star.style.top = (8 + ((i * 53) % 40)) + '%';
        star.style.animationDuration = (1.6 + (i % 5) * 0.3) + 's';
        star.style.animationDelay = ((i % 7) * 0.25) + 's';
        world.appendChild(star);
    }

    // Ground
    const groundLine = document.createElement('div');
    groundLine.className = 'ground-line';
    const groundFill = document.createElement('div');
    groundFill.className = 'ground-fill';
    world.appendChild(groundLine);
    world.appendChild(groundFill);

    // Bug obstacles
    OBSTACLES.forEach(ob => {
        const bug = document.createElement('div');
        bug.className = 'obstacle';
        bug.style.left = ob.x + 'px';
        bug.style.fontSize = ob.size + 'px';
        bug.textContent = '🐛';
        world.appendChild(bug);
    });

    // Stations (dot + card) and their coins
    STATIONS.forEach((st, i) => {
        const station = document.createElement('div');
        station.className = 'station';
        station.dataset.index = i;

        const dot = document.createElement('div');
        dot.className = 'station-dot';
        dot.style.left = st.x + 'px';

        const cardWrap = document.createElement('div');
        cardWrap.className = 'station-card-wrap';
        cardWrap.style.left = st.x + 'px';
        cardWrap.innerHTML = `<div class="station-card">
            <div class="station-card-head">
                <span class="station-icon">${st.icon}</span>
                <span class="station-title">${st.title}</span>
            </div>
            <div class="station-period">${st.period}</div>
            <div class="station-body">${st.body}</div>
            ${st.item ? `<div class="station-item">${st.item}</div>` : ''}
        </div>`;

        station.appendChild(dot);
        station.appendChild(cardWrap);
        world.appendChild(station);

        const coin = document.createElement('div');
        coin.className = 'coin';
        coin.dataset.index = i;
        coin.style.left = (st.x - 40) + 'px';
        coin.style.transform = 'translateX(-50%)';
        coin.textContent = '🪙';
        world.appendChild(coin);
    });

    // Player
    const player = document.createElement('div');
    player.id = 'player';
    player.innerHTML = `<div id="player-flip">
        <img src="char.png" alt="">
        <div id="player-plane">✈️</div>
    </div>`;
    world.appendChild(player);
}

function initGame() {
    const viewport = document.getElementById('game-viewport');
    const world    = document.getElementById('game-world');
    const hint     = document.getElementById('game-hint');
    const progress = document.getElementById('journey-progress');
    if (!viewport || !world) return;

    world.style.width = WORLD_WIDTH + 'px';
    buildWorld(world);

    const player     = document.getElementById('player');
    const playerFlip = document.getElementById('player-flip');
    const flightX    = (STATIONS.find(s => s.isFlight) || {}).x;

    const keysDown   = new Set();
    const coinsTaken = new Set();
    let playerX = 80, playerY = 0, vy = 0, onGround = true, faceDir = 1;
    let viewportWidth = viewport.clientWidth;

    function updateProgress() {
        progress.textContent = coinsTaken.size + ' / ' + STATIONS.length + ' coins';
    }

    function tryJump() {
        if (onGround) { vy = JUMP_V; onGround = false; }
    }

    function collectCoin(i) {
        coinsTaken.add(i);
        world.querySelector(`.coin[data-index="${i}"]`).classList.add('taken');
        world.querySelector(`.station[data-index="${i}"]`).classList.add('unlocked');
        updateProgress();
    }

    function loop() {
        let dx = 0;
        if (keysDown.has('ArrowRight') || keysDown.has('KeyD') || keysDown.has('TouchRight')) dx += SPEED;
        if (keysDown.has('ArrowLeft')  || keysDown.has('KeyA') || keysDown.has('TouchLeft'))  dx -= SPEED;
        if (keysDown.has('KeyW') || keysDown.has('ArrowUp') || keysDown.has('Space')) tryJump();

        let nextX = Math.max(30, Math.min(WORLD_WIDTH - 30, playerX + dx));

        // Bugs block the path unless the player is above them
        const halfW = 16;
        for (const ob of OBSTACLES) {
            const clearance = ob.size * 0.62;
            if (playerY < clearance - 6) {
                const obLeft = ob.x - ob.size / 2, obRight = ob.x + ob.size / 2;
                if (dx > 0 && playerX <= obLeft + halfW && nextX + halfW > obLeft) nextX = obLeft - halfW;
                if (dx < 0 && playerX >= obRight - halfW && nextX - halfW < obRight) nextX = obRight + halfW;
            }
        }

        vy += GRAVITY;
        playerY += vy;
        if (playerY <= 0) { playerY = 0; vy = 0; onGround = true; }
        else onGround = false;

        // Coins hover above each station marker — jump to grab
        STATIONS.forEach((st, i) => {
            if (coinsTaken.has(i)) return;
            const coinX = st.x - 40, coinY = 90;
            if (Math.abs(nextX - coinX) < 30 && Math.abs((playerY + 24) - coinY) < 34) collectCoin(i);
        });

        playerX = nextX;
        if (dx < 0) faceDir = -1;
        else if (dx > 0) faceDir = 1;

        const camX = Math.max(0, Math.min(WORLD_WIDTH - viewportWidth, playerX - viewportWidth / 2));
        world.style.transform = 'translateX(' + (-camX) + 'px)';

        player.style.left = playerX + 'px';
        player.style.bottom = (GROUND_Y + playerY) + 'px';
        playerFlip.style.transform = 'translateX(-50%) scaleX(' + faceDir + ')';
        player.classList.toggle('walking', dx !== 0);
        player.classList.toggle('flying', flightX !== undefined && Math.abs(playerX - flightX) < 200);

        requestAnimationFrame(loop);
    }

    const GAME_KEYS = ['ArrowLeft', 'ArrowRight', 'KeyA', 'KeyD', 'KeyW', 'ArrowUp', 'Space'];
    viewport.addEventListener('keydown', e => {
        if (GAME_KEYS.includes(e.code)) { e.preventDefault(); keysDown.add(e.code); }
    });
    viewport.addEventListener('keyup', e => keysDown.delete(e.code));
    viewport.addEventListener('focus', () => hint.classList.add('hidden'));
    viewport.addEventListener('blur', () => { keysDown.clear(); hint.classList.remove('hidden'); });
    viewport.addEventListener('click', () => viewport.focus());

    // Touch controls
    const btnLeft = document.getElementById('btn-left');
    const btnRight = document.getElementById('btn-right');
    const btnJump = document.getElementById('btn-jump');
    const releaseWalk = () => { keysDown.delete('TouchLeft'); keysDown.delete('TouchRight'); };

    btnLeft.addEventListener('pointerdown', e => { e.preventDefault(); viewport.focus(); keysDown.add('TouchLeft'); });
    btnRight.addEventListener('pointerdown', e => { e.preventDefault(); viewport.focus(); keysDown.add('TouchRight'); });
    [btnLeft, btnRight].forEach(b => {
        b.addEventListener('pointerup', releaseWalk);
        b.addEventListener('pointerleave', releaseWalk);
    });
    btnJump.addEventListener('pointerdown', e => { e.preventDefault(); viewport.focus(); tryJump(); });

    window.addEventListener('resize', () => { viewportWidth = viewport.clientWidth; });

    updateProgress();
    requestAnimationFrame(loop);
}

// ════════════════════════════════════════
// INIT
// ════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    renderSkillBars(document.getElementById('skill-bars'));
    renderInventory(
        document.getElementById('inventory'),
        document.getElementById('skill-info'),
        document.getElementById('skill-info-text')
    );
    initGame();
});
