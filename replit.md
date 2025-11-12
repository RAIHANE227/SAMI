# Royal Optique Médicale

## Overview

Royal Optique Médicale is a luxury e-commerce website for high-end optical products. This is a **100% static, front-end only** website built with HTML, CSS, and JavaScript. The site showcases luxury eyewear products including glasses (lunettes), medical lenses (verres médicaux), and contact lenses (lentilles). The site is designed to provide a premium, animated user experience inspired by luxury brands like Dior, Chanel, and Cartier, with no backend functionality or actual e-commerce transactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Static Multi-Page Application**
- The application uses a traditional multi-page architecture with separate HTML files for each section
- No build process or bundling - direct HTML/CSS/JS served via simple HTTP server
- Pages include: index.html (home), lunettes.html (glasses), verres.html (medical lenses), lentilles.html (contact lenses), commande.html (order form), login.html (authentication UI)
- Rationale: Simplicity and ease of deployment without requiring Node.js or build tools. Suitable for a presentation/portfolio site with no dynamic data requirements

**Styling Approach**
- Single, monolithic CSS file (style.css) with CSS custom properties for theming
- CSS variables define brand colors (noir-profond, blanc-pur, beige-dore) and fonts (Playfair Display for headings, Poppins for body text)
- Responsive design using media queries
- Pros: Simple to maintain for small projects, no CSS preprocessor needed
- Cons: May become difficult to maintain as the site grows

**JavaScript Architecture**
- Vanilla JavaScript with no frameworks or libraries
- Event-driven architecture using DOM manipulation and event listeners
- Features include: responsive navigation menu, image slider/carousel, scroll animations, cart counter simulation
- Rationale: Keeps dependencies minimal and load times fast. Suitable for simple animations and interactions
- Limitation: No client-side routing, state management, or data binding - all interactions are purely visual

**Animation Strategy**
- CSS transitions and animations for hover effects, scroll animations, and micro-interactions
- JavaScript-triggered class additions for scroll-based reveals and slider transitions
- Parallax effects and fade/zoom animations on hero sections
- Pros: Smooth, hardware-accelerated animations; no animation library overhead
- Cons: More complex animations may require manual implementation

### Data Storage

**No Persistent Storage**
- This is a purely static website with no database or backend
- All product information, images, and content are hardcoded in HTML
- Shopping cart count and user interactions exist only in browser memory (lost on refresh)
- Rationale: Project requirement specifies front-end only, no functional logic or backend
- Implication: Any future e-commerce functionality would require significant architectural changes

### Authentication

**UI-Only Authentication**
- Login and registration forms exist (login.html) but perform no actual authentication
- Forms are purely presentational with tab switching between login/register views
- No validation, no session management, no user accounts
- Rationale: Matches project scope as a visual presentation only
- Future consideration: Would need backend API and session management for real authentication

### Navigation and Routing

**Traditional Multi-Page Navigation**
- Standard anchor links navigate between HTML pages with full page reloads
- Active page indicated via CSS class on nav links
- Fixed/sticky navigation bar with scroll effects
- Mobile-responsive hamburger menu with JavaScript toggle
- Pros: Browser-native navigation, works without JavaScript for basic functionality
- Cons: No SPA-style transitions, full page reloads

### Local Development Server

**Python HTTP Server**
- Simple Python 3 HTTP server (server.py) serves static files on port 5000
- Cache-control headers prevent caching during development
- Rationale: Zero-dependency local server, Python typically pre-installed on most systems
- Alternative considered: Could use any static file server (http-server, Live Server, etc.)

## External Dependencies

### Fonts
- **Google Fonts**: Playfair Display and Poppins font families
- Loaded via CDN links in HTML head
- Used for typography hierarchy (Playfair for headings, Poppins for body text)

### Assets
- **Stock Images**: Hero images and product photos stored in `attached_assets/stock_images/` directory
- Images referenced via relative paths in HTML/CSS
- No CDN or external image hosting

### No Third-Party Libraries
- No JavaScript frameworks (React, Vue, Angular)
- No CSS frameworks (Bootstrap, Tailwind)
- No animation libraries (GSAP, Anime.js)
- No state management libraries
- Rationale: Project specifically requires vanilla HTML/CSS/JS only

### Browser APIs Used
- DOM API for element manipulation
- Events API for user interactions
- No localStorage or sessionStorage currently implemented
- No fetch/AJAX calls (no backend to communicate with)

### Deployment
- Can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)
- No server-side rendering or API routes required
- Python server.py is for local development only