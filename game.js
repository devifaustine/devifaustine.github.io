// ════════════════════════════════════════
// Easter egg: walk around the page and collect cupcakes.
// Open with G, the Konami code, or the footer button. Esc closes.
// Sprite: Cast & Company player layers (16x32 frames, 13 columns x 4 rows).
//   row 0 = down, 1 = right, 2 = left, 3 = up · col 0 = stand, cols 1..8 = walk
// ════════════════════════════════════════

(() => {
    const FRAME_W = 16, FRAME_H = 32, WALK_FRAMES = 8, FRAME_MS = 90;
    const SCALE = 3, SPEED = 220;              // px per second
    const ROW = { down: 0, right: 1, left: 2, up: 3 };
    const CUPCAKES = 5;

    // 9x9 cupcake; '.' is transparent
    const CUPCAKE = [
        '....r....',
        '...www...',
        '..wwwww..',
        '.wwpwwpw.',
        '.ppppppp.',
        '..bbbbb..',
        '..bdbdb..',
        '..bdbdb..',
        '...bbb...',
    ];
    const CUPCAKE_COLORS = { r: '#FE9000', w: '#F4A9B8', p: '#FFFFFF', b: '#B87A45', d: '#8A5530' };
    const CUPCAKE_PX = 4;
    const CUPCAKE_SIZE = 9 * CUPCAKE_PX;

    const MESSAGES = [
        'Fresh out of the oven.',
        'She baked it. She barely eats sweets.',
        'Still warm.',
        'One more for the team.',
    ];

    let canvas, ctx, hud, sheet, running = false, last = 0, raf = 0;
    let player, cupcakes, keys, target, found, toastTimer;

    function build() {
        canvas = document.createElement('canvas');
        canvas.className = 'egg-canvas';
        canvas.setAttribute('aria-hidden', 'true');

        hud = document.createElement('div');
        hud.className = 'egg-hud';
        hud.innerHTML = `
            <span class="egg-count"></span>
            <span class="egg-toast" aria-live="polite"></span>
            <button type="button" class="egg-close">Esc · close</button>`;
        hud.querySelector('.egg-close').addEventListener('click', stop);

        sheet = new Image();
        sheet.src = 'assets/game/devi_sheet.png';

        canvas.addEventListener('pointerdown', e => { target = { x: e.clientX, y: e.clientY }; });
    }

    function resize() {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = innerWidth * dpr;
        canvas.height = innerHeight * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.imageSmoothingEnabled = false;
    }

    function spawnCupcakes() {
        const pad = 60, w = FRAME_W * SCALE, h = FRAME_H * SCALE;
        cupcakes = [];
        while (cupcakes.length < CUPCAKES) {
            const c = {
                x: pad + Math.random() * (innerWidth - pad * 2 - CUPCAKE_SIZE),
                y: pad + 40 + Math.random() * (innerHeight - pad * 2 - CUPCAKE_SIZE - 40),
                bob: Math.random() * Math.PI * 2,
            };
            const nearPlayer = Math.abs(c.x - player.x) < w * 2 && Math.abs(c.y - player.y) < h;
            const nearOther = cupcakes.some(o => Math.hypot(o.x - c.x, o.y - c.y) < 90);
            if (!nearPlayer && !nearOther) cupcakes.push(c);
        }
    }

    function start() {
        if (running) return;
        if (!canvas) build();
        running = true;
        document.body.append(canvas, hud);
        document.documentElement.classList.add('egg-on');
        ctx = canvas.getContext('2d');
        resize();

        player = {
            x: innerWidth / 2 - (FRAME_W * SCALE) / 2,
            y: innerHeight / 2 - (FRAME_H * SCALE) / 2,
            dir: 'down', walking: false, t: 0,
        };
        keys = new Set();
        target = null;
        found = 0;
        spawnCupcakes();
        updateCount();
        toast('Arrow keys / WASD, or tap to walk. Find the cupcakes.');

        last = performance.now();
        raf = requestAnimationFrame(loop);
    }

    function stop() {
        if (!running) return;
        running = false;
        cancelAnimationFrame(raf);
        canvas.remove();
        hud.remove();
        document.documentElement.classList.remove('egg-on');
    }

    function updateCount() {
        hud.querySelector('.egg-count').textContent = `Cupcakes ${found}/${CUPCAKES}`;
    }

    function toast(text, ms = 2600) {
        const el = hud.querySelector('.egg-toast');
        el.textContent = text;
        clearTimeout(toastTimer);
        if (ms) toastTimer = setTimeout(() => { el.textContent = ''; }, ms);
    }

    function step(dt) {
        let dx = 0, dy = 0;
        if (keys.has('left'))  dx -= 1;
        if (keys.has('right')) dx += 1;
        if (keys.has('up'))    dy -= 1;
        if (keys.has('down'))  dy += 1;

        const w = FRAME_W * SCALE, h = FRAME_H * SCALE;
        if (dx || dy) {
            target = null;
        } else if (target) {
            // walk so the feet land on the tapped point
            const tx = target.x - w / 2 - player.x, ty = target.y - h + 6 - player.y;
            const dist = Math.hypot(tx, ty);
            if (dist < 4) target = null;
            else { dx = tx / dist; dy = ty / dist; }
        }

        player.walking = !!(dx || dy);
        if (player.walking) {
            const len = Math.hypot(dx, dy);
            player.x += (dx / len) * SPEED * dt;
            player.y += (dy / len) * SPEED * dt;
            player.dir = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up');
            player.t += dt * 1000;
        } else {
            player.t = 0;
        }
        player.x = Math.max(0, Math.min(innerWidth - w, player.x));
        player.y = Math.max(0, Math.min(innerHeight - h, player.y));

        // pick up cupcakes touching the lower half of the sprite
        const px = player.x + w / 2, py = player.y + h * 0.75;
        cupcakes = cupcakes.filter(c => {
            const hit = Math.hypot(c.x + CUPCAKE_SIZE / 2 - px, c.y + CUPCAKE_SIZE / 2 - py) < 40;
            if (hit) {
                found++;
                updateCount();
                if (found === CUPCAKES) toast('All cupcakes found. You clearly pay attention to detail - let\'s work together.', 0);
                else toast(MESSAGES[(found - 1) % MESSAGES.length]);
            }
            return !hit;
        });
    }

    function draw(now) {
        ctx.clearRect(0, 0, innerWidth, innerHeight);

        cupcakes.forEach(c => {
            const y = c.y + Math.sin(now / 300 + c.bob) * 3;
            CUPCAKE.forEach((row, ry) => [...row].forEach((ch, rx) => {
                if (ch === '.') return;
                ctx.fillStyle = CUPCAKE_COLORS[ch];
                ctx.fillRect(c.x + rx * CUPCAKE_PX, y + ry * CUPCAKE_PX, CUPCAKE_PX, CUPCAKE_PX);
            }));
        });

        if (!sheet.complete) return;
        const col = player.walking ? 1 + Math.floor(player.t / FRAME_MS) % WALK_FRAMES : 0;
        const w = FRAME_W * SCALE, h = FRAME_H * SCALE;
        ctx.fillStyle = 'rgba(0,0,0,0.12)';
        ctx.beginPath();
        ctx.ellipse(player.x + w / 2, player.y + h - 4, w * 0.32, 5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.drawImage(sheet, col * FRAME_W, ROW[player.dir] * FRAME_H, FRAME_W, FRAME_H,
                      Math.round(player.x), Math.round(player.y), w, h);
    }

    function loop(now) {
        if (!running) return;
        step(Math.min(0.1, (now - last) / 1000));
        last = now;
        draw(now);
        raf = requestAnimationFrame(loop);
    }

    // ── input ──
    const KEYMAP = {
        ArrowLeft: 'left', a: 'left', ArrowRight: 'right', d: 'right',
        ArrowUp: 'up', w: 'up', ArrowDown: 'down', s: 'down',
    };
    const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let konami = 0;

    function typing(e) {
        const t = e.target;
        return t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName);
    }

    window.addEventListener('keydown', e => {
        if (typing(e) || e.ctrlKey || e.metaKey || e.altKey) return;
        const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

        if (running) {
            if (key === 'Escape') { stop(); return; }
            if (KEYMAP[key]) { keys.add(KEYMAP[key]); e.preventDefault(); }
            return;
        }
        konami = key === KONAMI[konami] ? konami + 1 : (key === KONAMI[0] ? 1 : 0);
        if (konami === KONAMI.length || key === 'g') { konami = 0; start(); }
    });
    window.addEventListener('keyup', e => {
        if (!running) return;
        const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
        if (KEYMAP[key]) keys.delete(KEYMAP[key]);
    });
    window.addEventListener('blur', () => keys && keys.clear());
    window.addEventListener('resize', () => { if (running) resize(); });

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('[data-egg]').forEach(b => b.addEventListener('click', start));
    });
})();
