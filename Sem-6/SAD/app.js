// ── CANVAS APP SHARED UTILITIES ──

// Simple session store (in-memory, simulated)
const Canvas = {
  // Auth
  login(user) {
    localStorage.setItem('canvas_user', JSON.stringify(user));
  },
  logout() {
    localStorage.removeItem('canvas_user');
    localStorage.removeItem('canvas_booking_draft');
    window.location.href = 'login.html';
  },
  getUser() {
    try { return JSON.parse(localStorage.getItem('canvas_user')); }
    catch { return null; }
  },
  isLoggedIn() { return !!this.getUser(); },
  requireAuth() {
    if (!this.isLoggedIn()) window.location.href = 'login.html';
  },

  // Booking draft
  saveDraft(data) {
    localStorage.setItem('canvas_booking_draft', JSON.stringify(data));
  },
  getDraft() {
    try { return JSON.parse(localStorage.getItem('canvas_booking_draft')); }
    catch { return null; }
  },

  // Saved bookings
  saveBooking(booking) {
    const all = this.getBookings();
    all.unshift(booking);
    localStorage.setItem('canvas_bookings', JSON.stringify(all));
  },
  getBookings() {
    try { return JSON.parse(localStorage.getItem('canvas_bookings')) || []; }
    catch { return []; }
  },

  // Toast notification
  toast(msg, type = 'info', duration = 3000) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.innerHTML = `<span>${msg}</span>`;
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.3s'; setTimeout(() => t.remove(), 300); }, duration);
  },

  // Format currency
  formatINR(n) { return `₹${Number(n).toLocaleString('en-IN')}`; },

  // Generate booking ref
  genRef() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    return 'CVS-' + Array.from({length: 8}, () => chars[Math.floor(Math.random()*chars.length)]).join('');
  },

  // Format date
  formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  }
};

// Rooms data
const ROOMS = [
  {
    id: 'traditional',
    name: 'Traditional Room',
    theme: 'Ethnic & Heritage',
    desc: 'Ethnic décor, jharokha arches, warm amber lighting. Perfect for cultural shoots, pre-wedding, and heritage campaigns.',
    price: 800,
    capacity: 8,
    tags: ['Shoots', 'Events'],
    color: '#8B5E3C',
    gradient: 'linear-gradient(135deg, #3d2010, #8B5E3C)',
    includes: ['Jharokha Props', 'Warm Lighting', 'WiFi', 'Ethnic Décor'],
    icon: '🏺',
    emoji: '🕌',
    available: true
  },
  {
    id: 'disco',
    name: 'Disco / Neon Room',
    theme: 'LED & Mirror',
    desc: 'LED walls, mirror panels, RGB lighting, mirror ball. Ideal for reels, music videos, dance shoots, and birthday parties.',
    price: 900,
    capacity: 12,
    tags: ['Shoots', 'Events', 'Recording'],
    color: '#7B2FBE',
    gradient: 'linear-gradient(135deg, #1a0533, #7B2FBE)',
    includes: ['LED Wall', 'Mirror Panels', 'RGB Lights', 'Mirror Ball'],
    icon: '🪩',
    emoji: '💫',
    available: true
  },
  {
    id: 'podcast',
    name: 'Podcast Studio',
    theme: 'Professional Studio',
    desc: 'Soundproofed, lavish aesthetic, professional mics & lighting. For podcasts, YouTube, brand interviews, corporate content.',
    price: 1200,
    capacity: 4,
    tags: ['Recording'],
    color: '#1a5276',
    gradient: 'linear-gradient(135deg, #0a1f33, #1a5276)',
    includes: ['Pro Mics', 'Soundproofing', 'Studio Lighting', 'Acoustic Panels'],
    icon: '🎙️',
    emoji: '🎧',
    available: true
  },
  {
    id: 'workshop',
    name: 'Workshop / Rehearsal',
    theme: 'Open & Versatile',
    desc: 'Open floor, mirrors, neutral walls, good acoustics. Great for dance workshops, art classes, fitness, pop-up galleries.',
    price: 600,
    capacity: 20,
    tags: ['Shoots', 'Events'],
    color: '#2d6a4f',
    gradient: 'linear-gradient(135deg, #0d2318, #2d6a4f)',
    includes: ['Full-Length Mirrors', 'Open Floor', 'Good Acoustics', 'Natural Light'],
    icon: '🎭',
    emoji: '🪞',
    available: true
  },
  {
    id: 'convertible',
    name: 'Convertible Room',
    theme: 'Fully Customisable',
    desc: 'Fully customisable setup for themed events. Birthdays, brand activations, themed events — built around your vision.',
    price: null,
    capacity: 30,
    tags: ['Events'],
    color: '#8B5E3C',
    gradient: 'linear-gradient(135deg, #1a1208, #c9a84c)',
    includes: ['Custom Setup', 'Flexible Layout', 'Event Lighting', 'Decor Included'],
    icon: '✨',
    emoji: '🎪',
    available: true
  }
];

const TIME_SLOTS = [
  '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
  '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'
];
