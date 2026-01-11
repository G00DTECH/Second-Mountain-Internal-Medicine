# Second Mountain Internal Medicine - Complete File Index

## Core Website Files (Required for Deployment)

### index.html (54 KB, 846 lines)
**Purpose**: Complete website with all content
**Contains**:
- Hero section with call-to-action
- All 17 major content sections
- Patient and provider inquiry forms
- Navigation and footer
- SEO meta tags
- Accessibility features

**Key Sections**:
1. Navigation with mobile menu
2. Hero with trust bar
3. Problem/Solution presentation
4. Who We Serve (3 audiences)
5. Why Second Mountain
6. Quick FAQ
7. About & Second Mountain concept
8. Model of care comparison
9. Dr. Matulis profile
10. Detailed audience sections
11. Services (8 categories)
12. Medicare & eligibility
13. Service area
14. How to get started
15. First visit expectations
16. Complete FAQ (11 questions)
17. Contact with forms
18. Footer

**Editing Tips**:
- Update phone number: Search/replace `207-492-4642`
- Add doctor photo: Replace placeholder at line ~129
- Update service area: Edit lines ~321-338

---

### styles.css (28 KB, 1,460 lines)
**Purpose**: Complete styling and responsive design
**Contains**:
- CSS custom properties (color scheme)
- Mobile-first responsive design
- Typography system
- Component styles
- Layout grids
- Animations and transitions
- Print styles
- Accessibility features

**Key Features**:
- 3 responsive breakpoints (mobile, tablet, desktop)
- Healthcare color palette (blues & greens)
- WCAG 2.1 compliant contrast ratios
- Smooth animations
- High contrast mode support
- Print-friendly styles

**Customization Points**:
- Colors: Lines 12-27 (CSS variables)
- Fonts: Lines 32-33
- Spacing: Lines 35-37
- Breakpoints: Lines 1204+ (media queries)

---

### script.js (16 KB, 483 lines)
**Purpose**: Interactive functionality
**Contains**:
- Mobile menu toggle
- Smooth scrolling
- Form validation
- Phone number formatting
- Back-to-top button
- Scroll animations
- Notification system

**Key Functions**:
- `showNotification()` - Display user feedback
- `isValidEmail()` - Email validation
- Form submission handlers
- Intersection observer for animations
- Real-time input validation

**Integration Points**:
- Line 400+: Google Analytics placeholder
- Form submission: Lines 75-195 (replace with HIPAA backend)

---

## Configuration Files

### netlify.toml (1.4 KB)
**Purpose**: Netlify deployment configuration
**Contains**:
- Build settings
- Security headers
- Cache control rules
- Redirect rules
- 404 handling

**Why Important**: Ensures optimal security and performance on Netlify

---

### robots.txt (444 bytes)
**Purpose**: Search engine crawling instructions
**Contains**:
- Allow all search engines
- Sitemap location
- Block admin paths

**Action Required**: Update sitemap URL after deployment

---

### sitemap.xml (1.7 KB)
**Purpose**: SEO sitemap for search engines
**Contains**:
- All major sections
- Update frequency
- Priority ratings

**Action Required**: Update domain name after deployment (currently uses placeholder)

---

### .gitignore (595 bytes)
**Purpose**: Git version control exclusions
**Contains**:
- System files to ignore
- Editor files
- Temporary files
- Environment variables

**Why Important**: Keeps repository clean if using Git

---

## Documentation Files

### README.md (7.2 KB)
**Best For**: Technical team, developers, detailed deployment
**Contains**:
- Complete feature list
- Technology stack details
- Deployment instructions (3 methods)
- Browser support matrix
- HIPAA compliance requirements
- SEO setup guide
- Troubleshooting section
- Local development instructions

**Start Here If**: You want comprehensive technical documentation

---

### QUICK-START.md (4.9 KB)
**Best For**: Non-technical users, fast deployment
**Contains**:
- 5-minute Netlify deployment guide
- What you get overview
- HIPAA warnings
- Next steps timeline
- Quick edit instructions
- Common questions

**Start Here If**: You just want to get the site online fast

---

### DEPLOYMENT-CHECKLIST.md (8.2 KB)
**Best For**: Pre-launch preparation, ensuring nothing is missed
**Contains**:
- Content review checklist
- HIPAA compliance checklist
- Technical setup tasks
- Testing checklist (device, functionality, content)
- Legal and compliance items
- Marketing preparation
- Post-launch monitoring guide

**Start Here If**: You're preparing for official launch

---

### PROJECT-SUMMARY.md (12 KB)
**Best For**: Overview, project statistics, management
**Contains**:
- Complete project overview
- Technical specifications
- Feature list with details
- Performance metrics
- SEO keyword list
- Color palette and typography
- Success metrics
- Maintenance schedule

**Start Here If**: You want a high-level understanding of the project

---

### FILE-INDEX.md (This File)
**Best For**: Finding specific files and understanding structure
**Contains**:
- Description of every file
- File sizes and line counts
- Key sections and features
- Editing tips
- Integration points

**Start Here If**: You need to find a specific file or feature

---

## Helper Scripts (Windows)

### START-LOCAL-SERVER.bat (1.4 KB)
**Purpose**: Launch local test server
**How It Works**:
- Checks for Python installation
- Starts HTTP server on port 8000
- Provides clear instructions

**How to Use**:
1. Double-click the file
2. Visit http://localhost:8000 in your browser
3. Press Ctrl+C to stop

**Requirements**: Python 2.7+ or Python 3.x

---

### OPEN-WEBSITE.bat (356 bytes)
**Purpose**: Quick preview in browser
**How It Works**:
- Opens index.html in default browser
- Shows reminder about deployment

**How to Use**:
1. Double-click the file
2. Website opens in your browser

**Note**: Some features work better when deployed to a server

---

## Quick Reference Guide

### File Size Summary
```
Total Website Package: ~157 KB
├── Core Files: ~98 KB
│   ├── index.html: 54 KB
│   ├── styles.css: 28 KB
│   └── script.js: 16 KB
├── Configuration: ~4 KB
│   ├── netlify.toml: 1.4 KB
│   ├── robots.txt: 444 bytes
│   ├── sitemap.xml: 1.7 KB
│   └── .gitignore: 595 bytes
├── Documentation: ~40 KB
│   ├── README.md: 7.2 KB
│   ├── QUICK-START.md: 4.9 KB
│   ├── DEPLOYMENT-CHECKLIST.md: 8.2 KB
│   ├── PROJECT-SUMMARY.md: 12 KB
│   └── FILE-INDEX.md: ~8 KB
└── Helper Scripts: ~2 KB
    ├── START-LOCAL-SERVER.bat: 1.4 KB
    └── OPEN-WEBSITE.bat: 356 bytes
```

### Which File to Edit For...

**Change phone number**: `index.html` (search/replace `207-492-4642`)

**Change colors**: `styles.css` (lines 12-27, CSS variables)

**Update service area**: `index.html` (lines ~321-338)

**Add FAQ**: `index.html` (lines ~775+, copy existing FAQ item)

**Change navigation**: `index.html` (lines ~28-41)

**Update footer**: `index.html` (lines ~825-870)

**Modify forms**: `index.html` (lines ~704-810) & `script.js` (lines 75-195)

**Add analytics**: `script.js` (line 400+)

**Change fonts**: `styles.css` (lines 32-33) & `index.html` (line 12, Google Fonts link)

**Update meta tags**: `index.html` (lines 4-13)

---

## Deployment Checklist (Ultra-Quick)

### Minimum to Deploy
- [ ] All 12 files in one folder
- [ ] Drag to Netlify Drop (app.netlify.com/drop)
- [ ] Done! Site is live

### Before Accepting Patient Data
- [ ] Integrate HIPAA-compliant forms
- [ ] Add Privacy Policy
- [ ] Verify HTTPS is active

### For Best Results
- [ ] Add Dr. Matulis's photo
- [ ] Update any placeholder content
- [ ] Set up custom domain
- [ ] Configure Google Analytics
- [ ] Create Google Business Profile

---

## Common Tasks

### Local Testing
1. Method 1: Double-click `START-LOCAL-SERVER.bat`
2. Method 2: Double-click `OPEN-WEBSITE.bat`
3. Method 3: Right-click `index.html` > Open with > Browser

### Deploying Updates
1. Edit the file(s) needed
2. Save changes
3. Re-deploy to Netlify (drag folder again or use Git)
4. Changes appear in seconds

### Adding Content
1. Open `index.html` in any text editor
2. Find the section to edit (use Ctrl+F to search)
3. Edit the HTML
4. Save and re-deploy

### Changing Styles
1. Open `styles.css` in any text editor
2. Find the CSS class (use Ctrl+F to search)
3. Edit the styles
4. Save and re-deploy

---

## Support Resources

### Quick Links
- **Netlify Drop**: https://app.netlify.com/drop
- **Netlify Docs**: https://docs.netlify.com
- **Google Fonts**: https://fonts.google.com
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/

### HIPAA Form Services
- **Jotform HIPAA**: https://www.jotform.com/hipaa/
- **Formstack**: https://www.formstack.com/healthcare
- **Cognito Forms**: https://www.cognitoforms.com/healthcare

### Testing Tools
- **PageSpeed Insights**: https://pagespeed.web.dev
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **Contrast Checker**: https://webaim.org/resources/contrastchecker/

---

## File Dependencies

```
index.html
├── Requires: styles.css (linked at line 12)
├── Requires: script.js (linked at line 879)
└── Loads: Google Fonts (lines 10-12)

styles.css
└── Standalone (no dependencies)

script.js
└── Standalone (vanilla JavaScript)

netlify.toml
└── Optional (Netlify-specific configuration)

robots.txt
└── Optional (SEO enhancement)

sitemap.xml
└── Optional (SEO enhancement)

Documentation files
└── Optional (human reference only)

Helper scripts
└── Optional (Windows convenience only)
```

---

## What Files Are Absolutely Required?

### For Basic Website (Minimum)
1. `index.html` - The website
2. `styles.css` - The design
3. `script.js` - The interactivity

**That's it!** These 3 files make a complete, functional website.

### Recommended for Deployment
1. `index.html`
2. `styles.css`
3. `script.js`
4. `netlify.toml` (security & performance)
5. `robots.txt` (SEO)
6. `sitemap.xml` (SEO)

### Keep for Reference
- All documentation files (README, QUICK-START, etc.)
- Helper scripts (if on Windows)
- `.gitignore` (if using Git)

---

## Version Control

If using Git:
```bash
git init
git add .
git commit -m "Initial website for Second Mountain Internal Medicine"
git remote add origin [your-repo-url]
git push -u origin main
```

All necessary files are included. The `.gitignore` will handle exclusions.

---

## Final Notes

**Total Files**: 12 (+ documentation)
**Total Size**: ~157 KB (incredibly lightweight!)
**Deployment Time**: 5 minutes
**Maintenance**: Minimal (update content as needed)

**All files are in**: `C:\Users\justin.harvey\second-mountain-website\`

**Ready to deploy!** See QUICK-START.md for the fastest path to launch.

---

*Last Updated: January 11, 2026*
