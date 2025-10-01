// Game Data
const games = [
  {
    id: 'numbee',
    title: 'Numbee',
    description: 'A fun and challenging number puzzle game to test your skills. Arrange numbers in order while racing against time! Perfect for all ages who enjoy brain-teasing puzzles.',
    summary: 'Arrange numbers in order while racing against time!',
    features: [
      'Multiple difficulty levels (3x3, 4x4, 5x5, 6x6)',
      'Built-in timer to track your best scores',
      'Play offline anytime – no internet required',
      'Clean & modern design'
    ],
    screenshots: [
      'images/numbee/screenshot1.png',
      'images/numbee/screenshot2.png',
      'images/numbee/screenshot3.png',
      'images/numbee/screenshot4.png'
    ],
    icon: 'images/numbee/icon.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.rags&hl=en_IN',
    emoji: '🔢'
  },
  {
    id: 'magic-square',
    title: 'Magic Square',
    description: 'Solve magical square puzzles with increasing difficulty levels. Challenge your logic and problem-solving skills with this classic number arrangement game that gets progressively harder.',
    summary: 'Test your logic with the classic magic square challenge!',
    features: [
      'Multiple grid sizes (3x3, 4x4, 5x5)',
      'Clear, simple design focused on the puzzle',
      'No time limits or distractions',
      'No internet needed, play anytime, anywhere'
      
    ],
    screenshots: [
      'images/magic-square/screenshot1.png',
      'images/magic-square/screenshot2.png',
      'images/magic-square/screenshot3.png',
      'images/magic-square/screenshot4.png',
      'images/magic-square/screenshot5.png'
    ],
    icon: 'images/magic-square/icon.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.rags.magicsquare&hl=en_IN',
    emoji: '✨'
  }
];

// Sample winners data with dates for current date and past few days
const winners = [
  // Current Date (2025-09-25)
  { name: 'Alex Chen', score: 1250, game: 'Numbee', date: '2025-09-25' },
  { name: 'Sarah Kim', score: 1180, game: 'Numbee', date: '2025-09-25' },
  { name: 'Mike Johnson', score: 1100, game: 'Numbee', date: '2025-09-25' },
  { name: 'David Lee', score: 980, game: 'Magic Square', date: '2025-09-25' },
  { name: 'Anna Garcia', score: 920, game: 'Magic Square', date: '2025-09-25' },
  { name: 'Tom Anderson', score: 890, game: 'Magic Square', date: '2025-09-25' },

  // Yesterday (2025-09-24)
  { name: 'Emma Davis', score: 1350, game: 'Numbee', date: '2025-09-24' },
  { name: 'Ryan Wilson', score: 1200, game: 'Numbee', date: '2025-09-24' },
  { name: 'Lisa Brown', score: 1150, game: 'Numbee', date: '2025-09-24' },
  { name: 'Jessica Martinez', score: 1050, game: 'Magic Square', date: '2025-09-24' },
  { name: 'Chris Taylor', score: 950, game: 'Magic Square', date: '2025-09-24' },
  { name: 'Rachel White', score: 900, game: 'Magic Square', date: '2025-09-24' },

  // 2 days ago (2025-09-23)
  { name: 'James Wilson', score: 1400, game: 'Numbee', date: '2025-09-23' },
  { name: 'Maria Rodriguez', score: 1280, game: 'Numbee', date: '2025-09-23' },
  { name: 'Kevin Brown', score: 1220, game: 'Numbee', date: '2025-09-23' },
  { name: 'Sophie Chen', score: 1100, game: 'Magic Square', date: '2025-09-23' },
  { name: 'Daniel Kim', score: 1020, game: 'Magic Square', date: '2025-09-23' },
  { name: 'Olivia Davis', score: 950, game: 'Magic Square', date: '2025-09-23' },

  // 3 days ago (2025-09-22)
  { name: 'Robert Taylor', score: 1320, game: 'Numbee', date: '2025-09-22' },
  { name: 'Emily Johnson', score: 1250, game: 'Numbee', date: '2025-09-22' },
  { name: 'Michael Lee', score: 1180, game: 'Numbee', date: '2025-09-22' },
  { name: 'Isabella Garcia', score: 1080, game: 'Magic Square', date: '2025-09-22' },
  { name: 'William Anderson', score: 980, game: 'Magic Square', date: '2025-09-22' },
  { name: 'Ava Martinez', score: 920, game: 'Magic Square', date: '2025-09-22' },

  // 4 days ago (2025-09-21)
  { name: 'John Smith', score: 1380, game: 'Numbee', date: '2025-09-21' },
  { name: 'Jennifer Wilson', score: 1300, game: 'Numbee', date: '2025-09-21' },
  { name: 'David Brown', score: 1240, game: 'Numbee', date: '2025-09-21' },
  { name: 'Samantha Lee', score: 1150, game: 'Magic Square', date: '2025-09-21' },
  { name: 'Christopher Taylor', score: 1050, game: 'Magic Square', date: '2025-09-21' },
  { name: 'Madison Davis', score: 980, game: 'Magic Square', date: '2025-09-21' }
];

// DOM Elements
let navMenu, navToggle, gameContainer, gameDetails, aboutSection, winnersList,
    datePicker, tabBtns, numbeeWinnersContainer, magicSquareWinnersContainer;

// Initialize the application
function init() {
  console.log('Initializing application...');

  // Get DOM elements
  navMenu = document.querySelector('.nav-menu');
  navToggle = document.querySelector('.nav-toggle');
  gameContainer = document.getElementById('game-container');
  gameDetails = document.getElementById('game-details');
  aboutSection = document.getElementById('about');
  winnersList = document.querySelector('.winners-list');
  datePicker = document.getElementById('winner-date');
  tabBtns = document.querySelectorAll('.tab-btn');
  numbeeWinnersContainer = document.getElementById('numbee-winners-by-date');
  magicSquareWinnersContainer = document.getElementById('magic-square-winners-by-date');

  console.log('DOM elements found:', {
    navMenu,
    navToggle,
    gameContainer,
    gameDetails,
    aboutSection,
    winnersList
  });

  // Initialize UI elements
  if (gameDetails) {
    gameDetails.style.display = 'none';
    gameDetails.style.opacity = '0';
    console.log('Game details hidden');
  } else {
    console.error('Game details element not found');
  }

  if (aboutSection) {
    aboutSection.style.display = 'none';
    console.log('About section hidden');
  } else {
    console.error('About section element not found');
  }

  renderGameList();
  renderWinners();
  renderCurrentDateWinners();
  setupWinnersEventListeners();
  setupEventListeners();

  // Show games showcase by default (home page content)
  const gamesShowcase = document.getElementById('games-showcase');
  if (gamesShowcase) {
    gamesShowcase.style.display = 'block';
    console.log('Games showcase shown');
  }

  // Load content based on current URL hash
  loadGameFromHash();
}

// Start the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded, starting initialization...');
  init();
});

// Render the list of games - Disabled as cards are not required
function renderGameList() {
  if (!gameContainer) return;

  gameContainer.innerHTML = '';
}

// Show game details
function showGameDetails(gameId) {
  console.log('showGameDetails called with:', gameId);

  // Check if games array is available
  if (!games || games.length === 0) {
    console.error('Games array not available');
    return;
  }

  const game = games.find(g => g.id === gameId);
  if (!game) {
    console.error('Game not found:', gameId);
    return;
  }

  console.log('Game found:', game.title);

  // Update URL without adding to history if it's the same game
  if (window.location.hash !== `#${gameId}`) {
    window.location.hash = gameId;
  }

  // Hide games showcase
  const gamesShowcase = document.getElementById('games-showcase');
  if (gamesShowcase) {
    gamesShowcase.style.display = 'none';
    console.log('Games showcase hidden');
  }

  // Hide About section
  if (aboutSection) {
    aboutSection.style.display = 'none';
    console.log('About section hidden');
  }

  // Ensure game details container is visible
  if (!gameDetails) {
    gameDetails = document.getElementById('game-details');
    console.log('Game details element found:', gameDetails);
  }

  if (gameDetails) {
    gameDetails.style.display = 'block';
    gameDetails.style.opacity = '1';
    gameDetails.style.visibility = 'visible';
    gameDetails.style.position = 'relative';
    gameDetails.style.zIndex = '1';
    console.log('Game details container shown');

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${gameId}` || (href === '#' && gameId === games[0].id)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Render game details
    gameDetails.innerHTML = `
      <div class="game-details">
        <div class="game-header">
          <!--<img src="${game.icon}" alt="${game.title} icon" class="game-icon-large" onerror="this.style.display='none'"> -->
          <div class="game-info">
            <h1>${game.emoji} ${game.title}</h1>
            <p class="game-description">${game.description}</p>
            <div class="game-meta">
              <a href="${game.playStoreUrl}" target="_blank" class="google-play-btn">
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" class="google-play-badge">
              </a>
              <div class="rating">
                <span class="stars">★★★★★</span>
                <span class="rating-text">4.5/5.0</span>
              </div>
            </div>
          </div>
        </div>

        <div class="game-content">
          <section class="features-section">
            <h2>Features</h2>
            <ul class="features-list">
              ${game.features.map(feature => `
                <li><i class="fas fa-check"></i> ${feature}</li>
              `).join('')}
            </ul>
          </section>

          <section class="screenshots-section">
            <h2>Screenshots</h2>
            <div class="screenshots-gallery">
              ${game.screenshots.map((screenshot, index) => `
                <div class="screenshot">
                  <img
                    src="${screenshot}"
                    alt="${game.title} Screenshot ${index + 1}"
                    onerror="this.src='https://via.placeholder.com/300x600/4a6bff/ffffff?text=${encodeURIComponent(game.title + ' ' + (index + 1))}'"
                  >
                </div>
              `).join('')}
            </div>
          </section>
        </div>

        <div class="winners-section">
          <h2><i class="fas fa-trophy"></i> Today's Winners</h2>
          <ul class="winners-list">
            ${(() => {
              const today = new Date().toISOString().split('T')[0];
              const todayWinners = winners.filter(winner =>
                winner.game.toLowerCase() === game.title.toLowerCase() &&
                winner.date === today
              );

              if (todayWinners.length === 0) {
                return '<li class="winner-item">No winners today yet! Be the first to play and win!</li>';
              }

              // Sort by score (highest first)
              todayWinners.sort((a, b) => b.score - a.score);

              return todayWinners.map((winner, index) => `
                <li class="winner-item">
                  <span class="winner-name">${index + 1}. ${winner.name}</span>
                  <span class="winner-score">${winner.score} pts</span>
                </li>
              `).join('');
            })()}
          </ul>
        </div>
      </div>
    `;

    // Scroll to game details
    gameDetails.scrollIntoView({ behavior: 'smooth' });
    console.log('Game details rendered and scrolled to');
  } else {
    console.error('Game details element not found');
  }
}

// Load game from URL hash
function loadGameFromHash() {
  console.log('Loading from hash:', window.location.hash);
  const gameId = window.location.hash.substring(1);

  if (gameId === 'about') {
    console.log('Loading About section');
    showAboutSection();
  } else if (gameId && games.find(g => g.id === gameId)) {
    console.log('Loading game details for:', gameId);
    showGameDetails(gameId);
  } else {
    console.log('No valid hash, showing games showcase');
    // If no valid hash, show the games showcase (home page)
    const gamesShowcase = document.getElementById('games-showcase');
    if (gamesShowcase) {
      gamesShowcase.style.display = 'block';
      console.log('Games showcase shown as default');
    }
    // Also hide game details and about sections
    if (gameDetails) {
      gameDetails.style.display = 'none';
    }
    if (aboutSection) {
      aboutSection.style.display = 'none';
    }
  }
}

// Render winners list
function renderWinners() {
  if (!winnersList) {
    console.warn('Winners list element not found');
    return;
  }
  
  try {
    winnersList.innerHTML = winners.map(winner => `
      <li class="winner-item">
        <span>${winner.name}</span>
        <span>${winner.score} pts (${winner.game})</span>
      </li>
    `).join('');
  } catch (error) {
    console.error('Error rendering winners:', error);
  }
}

// Setup event listeners
function setupEventListeners() {
  console.log('Setting up event listeners');

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
      console.log('Mobile menu toggled');
    });
    console.log('Mobile menu event listener set up');
  }

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-menu') && !e.target.closest('.nav-toggle')) {
      if (navMenu) {
        navMenu.classList.remove('active');
      }
    }
  });

  // Handle navigation clicks
  const navLinks = document.querySelectorAll('.nav-link');
  console.log('Found navigation links:', navLinks.length);

  navLinks.forEach((link, index) => {
    console.log(`Setting up event listener for link ${index}:`, link.textContent, link.getAttribute('href'));

    link.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const targetId = link.getAttribute('href').substring(1);
      console.log('Navigation link clicked:', targetId);

      if (targetId === 'about') {
        // Update URL
        window.location.hash = 'about';
        // Show About section
        showAboutSection();
      } else if (targetId === '' || targetId === '#') {
        // Home link - show games showcase
        console.log('Home link clicked, showing games showcase');
        const gamesShowcase = document.getElementById('games-showcase');
        if (gamesShowcase) {
          // Hide other sections
          if (gameDetails) gameDetails.style.display = 'none';
          if (aboutSection) aboutSection.style.display = 'none';
          // Show games showcase
          gamesShowcase.style.display = 'block';
          // Update URL to remove hash
          window.history.replaceState({}, '', window.location.pathname);
          // Update active nav link
          document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href === '#' || href === '#') {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      } else {
        // Show game details
        console.log('Game link clicked:', targetId);
        showGameDetails(targetId);
      }

      // Close mobile menu if open
      if (navMenu) {
        navMenu.classList.remove('active');
      }
    });
  });

  // Handle back/forward navigation
  window.addEventListener('popstate', () => {
    console.log('Browser back/forward navigation detected');
    loadGameFromHash();
  });

  console.log('Event listeners set up complete');
}

// Show About section
function showAboutSection() {
  console.log('showAboutSection called');

  // Hide games showcase
  const gamesShowcase = document.getElementById('games-showcase');
  if (gamesShowcase) {
    gamesShowcase.style.display = 'none';
    console.log('Games showcase hidden');
  }

  // Hide game details
  if (gameDetails) {
    gameDetails.style.display = 'none';
    gameDetails.style.opacity = '0';
    console.log('Game details hidden');
  }

  // Show About section
  if (aboutSection) {
    aboutSection.style.display = 'block';
    aboutSection.style.opacity = '1';
    console.log('About section shown');

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === '#about') {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

  } else {
    console.error('About section element not found');
  }
}

// Render winners for current date (both games)
function renderCurrentDateWinners() {
  console.log('Rendering current date winners for both games');

  const today = new Date().toISOString().split('T')[0];
  console.log('Current date:', today);

  // Render winners for both games for current date
  if (numbeeWinnersContainer) {
    renderWinnersByDateGroup(numbeeWinnersContainer, 'Numbee', [today]);
  }

  if (magicSquareWinnersContainer) {
    renderWinnersByDateGroup(magicSquareWinnersContainer, 'Magic Square', [today]);
  }
}

// Render winners grouped by date for a specific game
function renderWinnersByDateGroup(container, gameName, dates) {
  if (!container) return;

  let html = '';

  dates.forEach(date => {
    const dayWinners = winners.filter(winner =>
      winner.game === gameName && winner.date === date
    );

    if (dayWinners.length > 0) {
      // Sort winners by score (highest first)
      dayWinners.sort((a, b) => b.score - a.score);

      // Format date for display
      const displayDate = new Date(date + 'T00:00:00');
      const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      const formattedDate = displayDate.toLocaleDateString('en-US', dateOptions);

      html += `
        <div class="date-group">
          <div class="date-header">${formattedDate}</div>
          <ul class="winners-list">
            ${dayWinners.map((winner, index) => `
              <li class="winner-item">
                <span class="winner-name">${index + 1}. ${winner.name}</span>
                <span class="winner-score">${winner.score} pts</span>
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }
  });

  container.innerHTML = html;
}

// Setup winners event listeners
function setupWinnersEventListeners() {
  console.log('Setting up winners event listeners');

  // Date picker change event
  if (datePicker) {
    datePicker.addEventListener('change', (e) => {
      console.log('Date changed:', e.target.value);
      renderWinnersByDate(e.target.value);
    });

    // Set default date to today
    const today = new Date().toISOString().split('T')[0];
    datePicker.value = today;
    console.log('Date picker initialized with:', today);
  }

  // Tab button click events
  if (tabBtns && tabBtns.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const app = e.target.dataset.app;
        console.log('Tab clicked:', app);
        switchTab(app);
      });
    });
    console.log('Tab event listeners set up');
  }
}

// Switch between app tabs
function switchTab(app) {
  console.log('Switching to tab:', app);

  // Remove active class from all tabs
  tabBtns.forEach(btn => btn.classList.remove('active'));

  // Hide all app winners sections
  document.querySelectorAll('.app-winners').forEach(section => {
    section.classList.remove('active');
  });

  // Add active class to clicked tab
  const activeTab = document.querySelector(`[data-app="${app}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
  }

  // Show corresponding winners section
  const winnersSection = document.getElementById(`${app}-winners`);
  if (winnersSection) {
    winnersSection.classList.add('active');
  }

  // Render current date winners for the selected app
  const today = new Date().toISOString().split('T')[0];
  const container = app === 'numbee' ? numbeeWinnersContainer : magicSquareWinnersContainer;
  if (container) {
    renderWinnersByDateGroup(container, app === 'numbee' ? 'Numbee' : 'Magic Square', [today]);
  }
}

// Render winners by date and optionally by app (for single date view)
function renderWinnersByDate(date, app = null) {
  console.log('Rendering winners for date:', date, 'app:', app);

  // Get today's date
  const today = new Date();
  const pastWeekDates = [];

  // Generate dates for past 7 days
  for (let i = 0; i < 7; i++) {
    const dateObj = new Date(today);
    dateObj.setDate(today.getDate() - i);
    pastWeekDates.push(dateObj.toISOString().split('T')[0]);
  }

  // Check if the selected date is within the past week
  if (!pastWeekDates.includes(date)) {
    console.log('Selected date is not in past week, showing current date data');
    renderCurrentDateWinners();
    return;
  }

  // If a specific app is selected, show only that app's winners for the selected date
  if (app) {
    const container = app === 'numbee' ? numbeeWinnersContainer : magicSquareWinnersContainer;
    if (container) {
      renderWinnersByDateGroup(container, app === 'numbee' ? 'Numbee' : 'Magic Square', [date]);
    }
  } else {
    // Show both apps for the selected date
    if (numbeeWinnersContainer) {
      renderWinnersByDateGroup(numbeeWinnersContainer, 'Numbee', [date]);
    }
    if (magicSquareWinnersContainer) {
      renderWinnersByDateGroup(magicSquareWinnersContainer, 'Magic Square', [date]);
    }
  }
}

// Helper function to render winners list
function renderWinnersList(container, winners) {
  if (!container) return;

  if (winners.length === 0) {
    container.innerHTML = '<li class="winner-item">No winners for this date yet!</li>';
    return;
  }

  container.innerHTML = winners.map((winner, index) => `
    <li class="winner-item">
      <span class="winner-name">${index + 1}. ${winner.name}</span>
      <span class="winner-score">${winner.score} pts</span>
    </li>
  `).join('');
}

// Make functions available globally
window.showGameDetails = showGameDetails;
window.showAboutSection = showAboutSection;
window.switchTab = switchTab;
