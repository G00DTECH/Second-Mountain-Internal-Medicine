# Maine Beacon Survival Kit Website

A static website for the Maine Winter Survival Initiative, providing information about our mission to preserve lives and dignity by providing survival equipment and nourishment to homeless individuals in Maine's harshest conditions.

## Project Overview

This website was built based on the comprehensive branding guidelines and business plan for the Maine Winter Survival Initiative (Maine Beacon Kits). It features:

- **Homepage**: Hero section with mission statement and key statistics
- **About Us**: Mission, vision, core values, and founding team information
- **Programs & Services**: Detailed information about Winter Survival Kits, MRE Distribution, Street Outreach, and Housing Connections
- **Impact**: Projected three-year impact metrics and success measures
- **Get Involved**: Partnership opportunities for funders, volunteers, corporate partners, and service providers
- **Contact**: Contact form and leadership team information

## Branding

The website follows the Maine Beacon branding guidelines:

### Colors
- **Stormy Navy**: #003D5B (Primary)
- **Beacon Blue**: #2196F3 (Secondary)
- **Lifeline Red**: #E53935 (Accent)
- **Winter Gray**: #757575
- **Light Gray**: #F5F5F5

### Typography
- **Headings**: Martel (Bold, Google Fonts)
- **Body**: Montserrat (Google Fonts)

## File Structure

```
maine-beacon-website/
├── index.html           # Homepage
├── about.html           # About Us page
├── programs.html        # Programs & Services
├── impact.html          # Impact metrics and stories
├── get-involved.html    # Partnership opportunities
├── contact.html         # Contact form and information
├── css/
│   └── style.css        # Main stylesheet with responsive design
├── js/
│   └── main.js          # JavaScript for mobile menu, animations, form handling
├── images/              # Placeholder for images
├── netlify.toml         # Netlify deployment configuration
└── README.md            # This file
```

## Deployment to Netlify

### Option 1: Netlify CLI (Recommended)

1. Install Netlify CLI if not already installed:
   ```bash
   npm install -g netlify-cli
   ```

2. Navigate to the project directory:
   ```bash
   cd maine-beacon-website
   ```

3. Deploy to Netlify:
   ```bash
   netlify deploy --prod
   ```

4. Follow the prompts:
   - Authorize with your Netlify account
   - Create a new site or link to existing
   - Publish directory: `.` (current directory)

### Option 2: Netlify Web Interface

1. Create a ZIP file of the entire `maine-beacon-website` folder

2. Go to [Netlify](https://www.netlify.com/)

3. Sign up or log in to your account

4. Click "Add new site" → "Deploy manually"

5. Drag and drop the folder or ZIP file

6. Your site will be deployed with a random Netlify subdomain (e.g., `random-name-123.netlify.app`)

7. You can customize the subdomain in Site Settings → Domain Management

### Option 3: Git-based Deployment

1. Initialize a Git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Maine Beacon website"
   ```

2. Push to GitHub, GitLab, or Bitbucket

3. In Netlify, click "Add new site" → "Import an existing project"

4. Connect to your Git provider and select the repository

5. Netlify will automatically deploy on every push to the main branch

## Custom Domain Setup

Once deployed, you can connect a custom domain:

1. Purchase a domain (recommended: `mainebeacon.org` or `mainewintersurvival.org`)

2. In Netlify, go to Site Settings → Domain Management → Add custom domain

3. Follow the DNS configuration instructions provided by Netlify

## Features

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile devices
- Flexible grid layouts that adapt to screen sizes

### Animations
- Fade-in animations on scroll
- Counter animations for statistics
- Smooth scrolling for anchor links
- Header shadow on scroll

### Accessibility
- Semantic HTML structure
- ARIA labels for icons and links
- High contrast color combinations
- Keyboard navigation support

### Performance
- Optimized CSS with modern layout techniques
- Minimal JavaScript for core functionality
- Fast loading times
- Caching headers configured in netlify.toml

## Customization

### Adding Images

Replace the placeholder Unsplash images with real photos:

1. Add images to the `images/` folder
2. Update image `src` attributes in the HTML files
3. Recommended sizes:
   - Hero images: 1920x800px minimum
   - Card images: 1200x800px (3:2 ratio)
   - Team photos: 500x500px (square)

### Updating Content

All content is in the HTML files. Key sections to customize:

- Team member bios in `about.html`
- Contact email addresses throughout
- Social media links in footers
- Statistics and metrics

### Form Integration

The contact form currently shows a JavaScript alert on submission. To connect it to a real backend:

1. Use Netlify Forms (easiest):
   - Add `netlify` attribute to the `<form>` tag
   - Netlify will automatically handle form submissions

2. Use a third-party service:
   - Formspree
   - EmailJS
   - SendGrid

3. Build a custom backend:
   - Create an API endpoint
   - Update the form submission handler in `js/main.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Copyright 2025 Maine Winter Survival Initiative. All rights reserved.

## Contact

For questions about this website:
- Email: info@mainebeacon.org
- Location: Portland, Maine

---

Built with care for Maine's unsheltered population. 🗼❄️
