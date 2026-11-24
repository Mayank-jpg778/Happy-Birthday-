/**
 * Happy Birthday Shruti ✨
 * Premium Red Velvet, Black & Gold Interactive Experience
 * Created with love from Krish
 */

// ==========================================================================
// 1. DATA: PHOTOS & VIDEOS MEMORIES REEL
// ==========================================================================
const MEMORIES = [
  {
    type: 'photo',
    src: 'assets/photo1_couple.jpg',
    thumb: 'assets/photo1_couple.jpg',
    title: 'Two Hearts, One Smile',
    caption: 'Our favourite candid moment — two souls side by side. Forever my best view in this world. With you, every single second turns into a celebration.',
    tag: '#CutestCouple'
  },
  {
    type: 'photo',
    src: 'assets/photo2_glowing.jpg',
    thumb: 'assets/photo2_glowing.jpg',
    title: 'The Celestial Glow',
    caption: 'That enchanting smile, sparkling eyes, and traditional earrings that effortlessly brighten even the cloudiest day. Pure goddess vibes!',
    tag: '#PurePrettiness'
  },
  {
    type: 'photo',
    src: 'assets/photo3_collage.jpg',
    thumb: 'assets/photo3_collage.jpg',
    title: 'Collage of Pure Joy',
    caption: 'Four snapshots of giggles, playful banter, silly faces, and 1000 reasons why I cherish you every single day.',
    tag: '#SweetMoments'
  },
  {
    type: 'photo',
    src: 'assets/photo4_cute_hearts.jpg',
    thumb: 'assets/photo4_cute_hearts.jpg',
    title: 'Queen of Cutest Pouts',
    caption: 'Innocent, cozy, and impossibly sweet. It should genuinely be illegal to look this adorable doing absolutely nothing!',
    tag: '#LoveliestGirl'
  },
  {
    type: 'photo',
    src: 'assets/photo5_red_saree.jpg',
    thumb: 'assets/photo5_red_saree.jpg',
    title: 'Royal Red Velvet Elegance',
    caption: 'Absolute perfection in red and gold. Nobody carries Indian grace, poise, and royal charm like you, Shruti.',
    tag: '#RedVelvetQueen'
  },
  {
    type: 'photo',
    src: 'assets/photo6_traditional.jpg',
    thumb: 'assets/photo6_traditional.jpg',
    title: 'Timeless Grace & Jhumkas',
    caption: 'Traditional elegance meets timeless beauty. My heart skips a beat every time I look at this picture.',
    tag: '#TraditionalBeauty'
  },
  {
    type: 'photo',
    src: 'assets/photo7_car_smile.jpg',
    thumb: 'assets/photo7_car_smile.jpg',
    title: 'Sunlight & Sweet Smiles',
    caption: 'Every journey is a celebration when you are there. That effortless, heartwarming smile lights up the road ahead.',
    tag: '#EverydayMagic'
  },
  {
    type: 'video',
    src: 'assets/video1.mp4',
    thumb: 'assets/photo2_glowing.jpg',
    title: 'Laughter in Motion',
    caption: 'Capturing your natural charm, infectious laughter, and that radiant spark in real time.',
    tag: '#CandidJoy'
  },
  {
    type: 'video',
    src: 'assets/video2.mp4',
    thumb: 'assets/photo4_cute_hearts.jpg',
    title: 'Playful Giggles',
    caption: 'A little glimpse of how much fun and cheerful warmth you bring into every conversation and memory.',
    tag: '#CuteMoments'
  },
  {
    type: 'video',
    src: 'assets/video3.mp4',
    thumb: 'assets/photo6_traditional.jpg',
    title: 'Precious Expressions',
    caption: 'Every movement, every smile, frozen into an unforgettable memory that I will treasure forever.',
    tag: '#ForeverTreasured'
  },
  {
    type: 'video',
    src: 'assets/video4.mp4',
    thumb: 'assets/photo5_red_saree.jpg',
    title: 'Her Beauty & Grace',
    caption: 'A cinematic compilation celebrating everything that makes Shruti so deeply special, gorgeous, and one-of-a-kind.',
    tag: '#QueenShruti'
  }
];

// ==========================================================================
// 2. WEB AUDIO API SYNTHESIZER (100% Offline, Reliable & Rich)
// ==========================================================================
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isPlayingBGM = false;
    this.bgmTimer = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a musical tone with envelope and optional harmonic warmth
  playTone(freq, type = 'sine', duration = 0.5, timeOffset = 0, gainLevel = 0.25) {
    if (this.isMuted) return;
    this.init();
    const startTime = this.ctx.currentTime + timeOffset;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.exponentialRampToValueAtTime(gainLevel, startTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.1);
  }

  // Play "Happy Birthday" melody (Music Box / Chime style)
  playHappyBirthdaySong(speed = 1.0) {
    this.init();
    // Notes: C4, C4, D4, C4, F4, E4 ...
    const NOTES = {
      C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00,
      A4: 440.00, B4: 493.88, C5: 523.25, D5: 587.33, Bb4: 466.16
    };

    const melody = [
      { note: 'C4', d: 0.35, pause: 0.1 },
      { note: 'C4', d: 0.25, pause: 0.08 },
      { note: 'D4', d: 0.55, pause: 0.1 },
      { note: 'C4', d: 0.55, pause: 0.1 },
      { note: 'F4', d: 0.55, pause: 0.1 },
      { note: 'E4', d: 0.9, pause: 0.2 },

      { note: 'C4', d: 0.35, pause: 0.1 },
      { note: 'C4', d: 0.25, pause: 0.08 },
      { note: 'D4', d: 0.55, pause: 0.1 },
      { note: 'C4', d: 0.55, pause: 0.1 },
      { note: 'G4', d: 0.55, pause: 0.1 },
      { note: 'F4', d: 0.9, pause: 0.2 },

      { note: 'C4', d: 0.35, pause: 0.1 },
      { note: 'C4', d: 0.25, pause: 0.08 },
      { note: 'C5', d: 0.6, pause: 0.1 },
      { note: 'A4', d: 0.6, pause: 0.1 },
      { note: 'F4', d: 0.6, pause: 0.1 },
      { note: 'E4', d: 0.6, pause: 0.1 },
      { note: 'D4', d: 0.9, pause: 0.2 },

      { note: 'Bb4', d: 0.35, pause: 0.1 },
      { note: 'Bb4', d: 0.25, pause: 0.08 },
      { note: 'A4', d: 0.6, pause: 0.1 },
      { note: 'F4', d: 0.6, pause: 0.1 },
      { note: 'G4', d: 0.6, pause: 0.1 },
      { note: 'F4', d: 1.2, pause: 0.4 }
    ];

    let t = 0;
    melody.forEach(item => {
      const dur = item.d * speed;
      const freq = NOTES[item.note];
      // Lead chime note
      this.playTone(freq, 'triangle', dur, t, 0.28);
      // Soft sparkle overtone
      this.playTone(freq * 2, 'sine', dur * 0.7, t, 0.1);
      t += dur + (item.pause * speed);
    });

    return t;
  }

  // Cracker / Firework explosion sound
  playCrackerSound() {
    this.init();
    if (this.isMuted) return;

    const bufferSize = this.ctx.sampleRate * 0.4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.08));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, this.ctx.currentTime);
    filter.frequency.linearRampToValueAtTime(120, this.ctx.currentTime + 0.35);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.38);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start();
  }

  // Gift unbox sparkle chime
  playSparkleChime() {
    this.init();
    const chords = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    chords.forEach((freq, idx) => {
      this.playTone(freq, 'sine', 0.6, idx * 0.07, 0.2);
    });
  }

  // Cake cutting celebratory fanfare
  playCakeCelebration() {
    this.init();
    const notes = [
      { f: 392.00, d: 0.2, t: 0 },
      { f: 523.25, d: 0.3, t: 0.18 },
      { f: 659.25, d: 0.3, t: 0.38 },
      { f: 783.99, d: 0.7, t: 0.60 }
    ];
    notes.forEach(n => {
      this.playTone(n.f, 'triangle', n.d, n.t, 0.35);
      this.playTone(n.f * 1.5, 'sine', n.d * 0.8, n.t, 0.15);
    });

    // Followed by the birthday song!
    setTimeout(() => {
      this.playHappyBirthdaySong(0.95);
    }, 900);
  }

  // Toggle ambient BGM loop
  toggleBGM(btn) {
    this.init();
    if (this.isPlayingBGM) {
      this.isPlayingBGM = false;
      clearTimeout(this.bgmTimer);
      if (btn) {
        btn.classList.remove('playing');
        document.getElementById('bgm-label').textContent = 'Play Music 🎵';
      }
    } else {
      this.isPlayingBGM = true;
      if (btn) {
        btn.classList.add('playing');
        document.getElementById('bgm-label').textContent = 'Playing 🎶';
      }
      this.loopBGM();
    }
  }

  loopBGM() {
    if (!this.isPlayingBGM) return;
    const songDuration = this.playHappyBirthdaySong(1.1);
    this.bgmTimer = setTimeout(() => {
      if (this.isPlayingBGM) this.loopBGM();
    }, (songDuration + 2.5) * 1000);
  }
}

const sounds = new SoundEngine();

// ==========================================================================
// 3. FULLSCREEN CANVAS: FIREWORKS, CRACKERS, HEARTS & CONFETTI
// ==========================================================================
class FXEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.fireworks = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  // Golden fireworks rocket burst
  burstFirework(x = Math.random() * this.canvas.width, y = Math.random() * (this.canvas.height * 0.5) + 100) {
    sounds.playCrackerSound();
    const colors = ['#ffd86b', '#d4af37', '#ffffff', '#ff3366', '#ff99aa', '#ffe699'];
    const particleCount = 65;

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 / particleCount) * i + (Math.random() * 0.2);
      const speed = Math.random() * 6 + 2;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: colors[Math.floor(Math.random() * colors.length)],
        radius: Math.random() * 3 + 1.5,
        alpha: 1,
        decay: Math.random() * 0.02 + 0.012,
        gravity: 0.08,
        type: 'spark'
      });
    }
  }

  // Confetti burst for cake cutting and celebrations
  burstConfetti(originX = this.canvas.width / 2, originY = this.canvas.height / 2, count = 120) {
    const palette = ['#ffd86b', '#d4af37', '#aa142d', '#720918', '#ffffff', '#ff94a5', '#ffe082'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 4;
      this.particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        color: palette[Math.floor(Math.random() * palette.length)],
        width: Math.random() * 12 + 6,
        height: Math.random() * 6 + 4,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        alpha: 1,
        decay: Math.random() * 0.009 + 0.006,
        gravity: 0.14,
        type: 'confetti'
      });
    }
  }

  // Floating heart burst
  burstHearts(x, y, count = 15) {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: x + (Math.random() - 0.5) * 40,
        y: y + (Math.random() - 0.5) * 40,
        vx: (Math.random() - 0.5) * 3,
        vy: -Math.random() * 4 - 2,
        emoji: ['💖', '❤️', '🌹', '✨', '👑'][Math.floor(Math.random() * 5)],
        size: Math.random() * 18 + 14,
        alpha: 1,
        decay: Math.random() * 0.018 + 0.01,
        type: 'emoji'
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];

      if (p.type === 'spark') {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          this.particles.splice(i, 1);
          continue;
        }

        this.ctx.save();
        this.ctx.globalAlpha = p.alpha;
        this.ctx.fillStyle = p.color;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();

      } else if (p.type === 'confetti') {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.rotSpeed;
        p.alpha -= p.decay;

        if (p.alpha <= 0 || p.y > this.canvas.height + 50) {
          this.particles.splice(i, 1);
          continue;
        }

        this.ctx.save();
        this.ctx.globalAlpha = p.alpha;
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
        this.ctx.restore();

      } else if (p.type === 'emoji') {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          this.particles.splice(i, 1);
          continue;
        }

        this.ctx.save();
        this.ctx.globalAlpha = p.alpha;
        this.ctx.font = `${p.size}px sans-serif`;
        this.ctx.fillText(p.emoji, p.x, p.y);
        this.ctx.restore();
      }
    }

    requestAnimationFrame(this.animate);
  }
}

// ==========================================================================
// 4. FLOATING BIRTHDAY BALLOONS GENERATOR (Black & Gold)
// ==========================================================================
function initFloatingBalloons() {
  const container = document.getElementById('balloons-container');
  if (!container) return;

  const totalBalloons = 18;
  const types = ['balloon-gold', 'balloon-black', 'balloon-velvet', 'balloon-gold'];

  for (let i = 0; i < totalBalloons; i++) {
    const balloon = document.createElement('div');
    const type = types[i % types.length];
    balloon.className = `balloon ${type}`;

    const size = Math.floor(Math.random() * 35) + 50; // 50px - 85px
    const left = Math.floor(Math.random() * 95); // 0% - 95%
    const delay = Math.random() * 16; // staggered delays
    const duration = Math.random() * 8 + 14; // 14s - 22s

    balloon.style.width = `${size}px`;
    balloon.style.height = `${Math.floor(size * 1.25)}px`;
    balloon.style.left = `${left}vw`;
    balloon.style.animationDelay = `${delay}s`;
    balloon.style.animationDuration = `${duration}s`;

    container.appendChild(balloon);
  }
}

// ==========================================================================
// 5. SURPRISE 1: GIFTS UNBOXING CONTROLLER
// ==========================================================================
function initGiftBoxes(fx) {
  const giftWraps = document.querySelectorAll('.gift-card-wrap');

  giftWraps.forEach(wrap => {
    const box = wrap.querySelector('.gift-box-3d');
    const reveal = wrap.querySelector('.gift-card-reveal');

    box.addEventListener('click', () => {
      if (box.classList.contains('opened')) return;

      sounds.playSparkleChime();
      box.classList.add('opened');

      const rect = box.getBoundingClientRect();
      const originX = rect.left + rect.width / 2;
      const originY = rect.top + rect.height / 2;

      fx.burstFirework(originX, originY);
      fx.burstHearts(originX, originY, 12);

      setTimeout(() => {
        reveal.classList.remove('hidden');
      }, 350);
    });
  });
}

// ==========================================================================
// 6. SURPRISE 2: 3D ENVELOPE & HEARTFELT LETTER CONTROLLER
// ==========================================================================
function initBirthdayLetter(fx) {
  const envelope = document.getElementById('envelope');
  const waxSeal = document.getElementById('wax-seal');
  const dateDisplay = document.getElementById('current-date-display');

  if (dateDisplay) {
    const now = new Date();
    dateDisplay.textContent = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }

  let isLetterOpened = false;

  const openLetter = () => {
    if (isLetterOpened) return;
    isLetterOpened = true;

    envelope.classList.add('opened');

    // Birthday crackers burst sequence!
    const rect = envelope.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 3;

    // Series of 4 cracker bursts
    fx.burstFirework(cx, cy);
    setTimeout(() => fx.burstFirework(cx - 140, cy - 80), 300);
    setTimeout(() => fx.burstFirework(cx + 140, cy - 80), 600);
    setTimeout(() => fx.burstConfetti(cx, cy, 80), 900);

    // Play birthday song as requested!
    setTimeout(() => {
      sounds.playHappyBirthdaySong(1.0);
    }, 500);

    const hint = document.getElementById('envelope-hint');
    if (hint) {
      hint.innerHTML = '✨ Letter from Krish opened for Shruti! ✨';
    }
  };

  envelope.addEventListener('click', openLetter);
  if (waxSeal) waxSeal.addEventListener('click', openLetter);
}

// ==========================================================================
// 7. SURPRISE 3: REALISTIC RED VELVET CAKE CUTTING CEREMONY
// ==========================================================================
function initCakeCeremony(fx) {
  const cutBtn = document.getElementById('btn-cut-cake');
  const blowBtn = document.getElementById('btn-blow-candles');
  const confettiBtn = document.getElementById('btn-more-confetti');
  const cake = document.getElementById('birthday-cake');
  const knife = document.getElementById('cutting-knife');
  const status = document.getElementById('cake-status');
  const banner = document.getElementById('celebration-banner');
  const flames = document.querySelectorAll('.flame');

  let isCut = false;
  let areCandlesBlown = false;

  const blowOutCandles = () => {
    areCandlesBlown = true;
    flames.forEach(f => f.classList.add('blown-out'));
    if (status) {
      status.innerHTML = '✨ Candlewish made! May all your heartfelt dreams come true, <strong>Shruti</strong>! ✨';
    }
  };

  const cutTheCake = () => {
    if (isCut) {
      fx.burstConfetti(window.innerWidth / 2, window.innerHeight * 0.6, 120);
      fx.burstFirework(window.innerWidth / 2, window.innerHeight * 0.35);
      return;
    }

    isCut = true;
    blowOutCandles();

    // Knife slicing animation
    knife.classList.add('animating');

    setTimeout(() => {
      cake.classList.add('cut');
      sounds.playCakeCelebration();

      // Golden fireworks & burst confetti shower!
      const rect = cake.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      fx.burstConfetti(cx, cy, 160);
      fx.burstFirework(cx - 180, cy - 100);
      fx.burstFirework(cx + 180, cy - 100);
      fx.burstHearts(cx, cy, 25);

      if (status) {
        status.innerHTML = '🎉 <strong>Shruti</strong> cut the birthday cake! Let the celebrations begin! 🎂✨';
      }

      if (banner) {
        banner.classList.remove('hidden');
      }

      if (cutBtn) {
        cutBtn.innerHTML = '<span>🎉 Slice Shared! Tap for More Confetti! 🎂</span>';
      }
    }, 700);
  };

  if (cutBtn) cutBtn.addEventListener('click', cutTheCake);
  if (cake) cake.addEventListener('click', cutTheCake);
  if (blowBtn) blowBtn.addEventListener('click', blowOutCandles);

  if (confettiBtn) {
    confettiBtn.addEventListener('click', (e) => {
      const x = e.clientX || window.innerWidth / 2;
      const y = e.clientY || window.innerHeight / 2;
      fx.burstConfetti(x, y, 100);
      fx.burstFirework(x, y - 100);
      sounds.playSparkleChime();
    });
  }
}

// ==========================================================================
// 8. MEMORY SLIDESHOW CONTROLLER
// ==========================================================================
class Slideshow {
  constructor(memories, fx) {
    this.memories = memories;
    this.fx = fx;
    this.currentIndex = 0;
    this.isPlaying = true;
    this.interval = null;
    this.progressInterval = null;
    this.progressTime = 0;
    this.duration = 5000; // 5 seconds per slide

    this.container = document.getElementById('slide-media-container');
    this.titleEl = document.getElementById('slide-caption-title');
    this.descEl = document.getElementById('slide-caption-desc');
    this.counterEl = document.getElementById('slide-counter');
    this.progressBar = document.getElementById('slide-progress-bar');
    this.thumbsContainer = document.getElementById('slideshow-thumbs');
    this.playPauseBtn = document.getElementById('slide-play-pause-btn');

    this.init();
  }

  init() {
    if (!this.container) return;

    // Build slides DOM
    this.container.innerHTML = '';
    this.thumbsContainer.innerHTML = '';

    this.memories.forEach((item, index) => {
      const slide = document.createElement('div');
      slide.className = `slide-item ${index === 0 ? 'active' : ''}`;
      slide.id = `slide-${index}`;

      if (item.type === 'photo') {
        slide.innerHTML = `<img src="${item.src}" alt="${item.title}" loading="lazy" />`;
      } else {
        slide.innerHTML = `<video src="${item.src}" muted loop playsinline controls></video>`;
      }
      this.container.appendChild(slide);

      // Thumbnail
      const thumb = document.createElement('div');
      thumb.className = `thumb-item ${index === 0 ? 'active' : ''}`;
      thumb.innerHTML = `<img src="${item.thumb}" alt="thumb ${index + 1}" />`;
      thumb.addEventListener('click', () => {
        this.goTo(index);
        this.resetTimer();
      });
      this.thumbsContainer.appendChild(thumb);
    });

    // Navigation buttons
    const prevBtn = document.getElementById('slide-prev-btn');
    const nextBtn = document.getElementById('slide-next-btn');
    if (prevBtn) prevBtn.addEventListener('click', () => { this.prev(); this.resetTimer(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { this.next(); this.resetTimer(); });

    if (this.playPauseBtn) {
      this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
    }

    const fsBtn = document.getElementById('slide-fullscreen-btn');
    if (fsBtn) {
      fsBtn.addEventListener('click', () => {
        const viewport = document.querySelector('.slideshow-viewport');
        if (!document.fullscreenElement) {
          viewport.requestFullscreen().catch(err => console.log(err));
        } else {
          document.exitFullscreen();
        }
      });
    }

    this.updateInfo();
    this.startTimer();
  }

  goTo(index) {
    const slides = this.container.querySelectorAll('.slide-item');
    const thumbs = this.thumbsContainer.querySelectorAll('.thumb-item');

    slides[this.currentIndex].classList.remove('active');
    // Pause any playing video on slide out
    const prevVideo = slides[this.currentIndex].querySelector('video');
    if (prevVideo) prevVideo.pause();

    thumbs[this.currentIndex].classList.remove('active');

    this.currentIndex = (index + this.memories.length) % this.memories.length;

    slides[this.currentIndex].classList.add('active');
    thumbs[this.currentIndex].classList.add('active');

    // Scroll active thumbnail into view
    thumbs[this.currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

    // Auto-play video if active
    const curVideo = slides[this.currentIndex].querySelector('video');
    if (curVideo) curVideo.play().catch(() => {});

    this.updateInfo();
  }

  next() {
    this.goTo(this.currentIndex + 1);
  }

  prev() {
    this.goTo(this.currentIndex - 1);
  }

  updateInfo() {
    const item = this.memories[this.currentIndex];
    if (this.titleEl) this.titleEl.textContent = item.title;
    if (this.descEl) this.descEl.textContent = item.caption;
    if (this.counterEl) this.counterEl.textContent = `${this.currentIndex + 1} / ${this.memories.length}`;
  }

  startTimer() {
    this.progressTime = 0;
    this.progressInterval = setInterval(() => {
      if (!this.isPlaying) return;
      this.progressTime += 50;
      const pct = Math.min((this.progressTime / this.duration) * 100, 100);
      if (this.progressBar) this.progressBar.style.width = `${pct}%`;

      if (this.progressTime >= this.duration) {
        this.progressTime = 0;
        this.next();
      }
    }, 50);
  }

  resetTimer() {
    this.progressTime = 0;
    if (this.progressBar) this.progressBar.style.width = '0%';
  }

  togglePlayPause() {
    this.isPlaying = !this.isPlaying;
    if (this.playPauseBtn) {
      this.playPauseBtn.textContent = this.isPlaying ? '⏸ Pause' : '▶ Play';
    }
  }
}

// ==========================================================================
// 9. FULLSCREEN LIGHTBOX MODAL & GALLERY FILTERS
// ==========================================================================
class LightboxGallery {
  constructor(memories, fx) {
    this.memories = memories;
    this.fx = fx;
    this.currentIndex = 0;

    this.modal = document.getElementById('lightbox-modal');
    this.backdrop = document.getElementById('lightbox-backdrop');
    this.closeBtn = document.getElementById('lightbox-close');
    this.prevBtn = document.getElementById('lightbox-prev');
    this.nextBtn = document.getElementById('lightbox-next');
    this.mediaContainer = document.getElementById('lightbox-media-container');
    this.titleEl = document.getElementById('lightbox-title');
    this.captionEl = document.getElementById('lightbox-caption');
    this.badgeEl = document.getElementById('lightbox-badge');
    this.counterEl = document.getElementById('lightbox-counter');
    this.reactionArea = document.getElementById('reaction-float-area');

    this.init();
  }

  init() {
    // Gallery card clicks
    const cards = document.querySelectorAll('.gallery-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const index = parseInt(card.getAttribute('data-index'), 10);
        this.open(index);
      });
    });

    // Close actions
    if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());
    if (this.backdrop) this.backdrop.addEventListener('click', () => this.close());

    // Navigation
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());

    // Keyboard support
    window.addEventListener('keydown', (e) => {
      if (!this.modal.classList.contains('active')) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });

    // Reactions
    const reactionBtns = document.querySelectorAll('.reaction-btn');
    reactionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const emoji = btn.getAttribute('data-emoji') || '❤️';
        this.triggerReaction(emoji);
      });
    });

    // Gallery Filters
    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const filter = pill.getAttribute('data-filter');

        cards.forEach(card => {
          const type = card.getAttribute('data-type');
          if (filter === 'all' || type === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  open(index) {
    this.currentIndex = index;
    this.render();
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
    // Stop video if playing
    const video = this.mediaContainer.querySelector('video');
    if (video) video.pause();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.memories.length;
    this.render();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.memories.length) % this.memories.length;
    this.render();
  }

  render() {
    const item = this.memories[this.currentIndex];
    this.mediaContainer.innerHTML = '';

    if (item.type === 'photo') {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.title;
      this.mediaContainer.appendChild(img);
    } else {
      const video = document.createElement('video');
      video.src = item.src;
      video.controls = true;
      video.autoplay = true;
      video.loop = true;
      this.mediaContainer.appendChild(video);
    }

    if (this.titleEl) this.titleEl.textContent = item.title;
    if (this.captionEl) this.captionEl.textContent = item.caption;
    if (this.badgeEl) this.badgeEl.textContent = item.tag;
    if (this.counterEl) this.counterEl.textContent = `${this.currentIndex + 1} of ${this.memories.length}`;
  }

  triggerReaction(emoji) {
    sounds.playSparkleChime();
    const heart = document.createElement('div');
    heart.className = 'floating-heart-anim';
    heart.textContent = emoji;
    heart.style.left = `${Math.random() * 80 + 10}%`;
    this.reactionArea.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1200);

    // Also canvas burst
    this.fx.burstHearts(window.innerWidth / 2, window.innerHeight / 2, 8);
  }
}

// ==========================================================================
// 10. APP BOOTSTRAP
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('fx-canvas');
  const fx = new FXEngine(canvas);

  // Floating background balloons
  initFloatingBalloons();

  // Surprises
  initGiftBoxes(fx);
  initBirthdayLetter(fx);
  initCakeCeremony(fx);

  // Slideshow
  new Slideshow(MEMORIES, fx);

  // Lightbox & Gallery
  new LightboxGallery(MEMORIES, fx);

  // BGM Button
  const bgmBtn = document.getElementById('bgm-toggle-btn');
  if (bgmBtn) {
    bgmBtn.addEventListener('click', () => {
      sounds.toggleBGM(bgmBtn);
    });
  }

  // First user interaction anywhere unlocks AudioContext
  const unlockAudio = () => {
    sounds.init();
    window.removeEventListener('click', unlockAudio);
    window.removeEventListener('touchstart', unlockAudio);
  };
  window.addEventListener('click', unlockAudio);
  window.addEventListener('touchstart', unlockAudio);

  // Welcome fireworks burst on page load
  setTimeout(() => {
    fx.burstFirework(window.innerWidth * 0.75, window.innerHeight * 0.35);
  }, 900);
});
