# Second Mountain Internal Medicine, P.C. - Website

A professional, modern, and accessible website for Second Mountain Internal Medicine, providing home-based primary care for homebound seniors in the Turner-Oxford Hills area of Maine.

## Features

- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Accessible**: WCAG 2.1 compliant with screen reader support, keyboard navigation, and high contrast modes
- **Performance Optimized**: Fast loading times for older devices and rural internet connections
- **SEO Optimized**: Local SEO keywords and proper meta tags for search visibility
- **HIPAA-Ready**: Forms are placeholders for HIPAA-compliant integration
- **No Framework Dependencies**: Pure HTML, CSS, and vanilla JavaScript for maximum compatibility

## Technology Stack

- **HTML5**: Semantic markup for accessibility and SEO
- **CSS3**: Modern styling with CSS custom properties (variables)
- **Vanilla JavaScript**: No frameworks or dependencies for fast loading
- **Google Fonts**: Inter (body) and Playfair Display (headings)

## File Structure

```
second-mountain-website/
├── index.html          # Main HTML file with all content
├── styles.css          # Complete styling including responsive design
├── script.js           # Interactive functionality
└── README.md           # This file
```

## Quick Start - Netlify Deployment

### Option 1: Drag & Drop (Easiest)

1. Visit [Netlify Drop](https://app.netlify.com/drop)
2. Drag the entire `second-mountain-website` folder onto the page
3. Your site will be live immediately with a Netlify URL
4. You can then configure a custom domain in Netlify settings

### Option 2: Git Deployment (Recommended for Updates)

1. Create a Git repository:
   ```bash
   cd second-mountain-website
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Push to GitHub/GitLab:
   ```bash
   git remote add origin [your-repo-url]
   git push -u origin main
   ```

3. Connect to Netlify:
   - Log in to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Deploy settings are automatic (no build command needed)
   - Click "Deploy site"

### Option 3: Netlify CLI

```bash
npm install -g netlify-cli
cd second-mountain-website
netlify deploy --prod
```

## Custom Domain Setup

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS configuration instructions
4. Enable HTTPS (automatic with Let's Encrypt)

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)
- Android Chrome (last 2 versions)
- Internet Explorer 11 (basic functionality)

## Important Notes & Next Steps

### HIPAA Compliance

The forms on this website are **placeholders only**. Before accepting real patient information, you MUST:

1. **Integrate HIPAA-compliant form handling**:
   - Recommended services: Jotform HIPAA, Formstack, or Cognito Forms
   - Alternative: Build custom backend with proper encryption and BAA

2. **Update form actions** in `index.html`:
   - Currently forms use JavaScript preventDefault()
   - Replace with secure form submission endpoints

3. **Add SSL/TLS**: Netlify provides this automatically

4. **Add privacy policy and terms of service pages**

### Content Updates Needed

Review the following sections in `index.html` and update with Dr. Matulis's input:

1. **Line 140**: Add Dr. Matulis's personal paragraph about why he chose home-based care
2. **Line 355**: Confirm after-hours protocol
3. **Line 363**: Confirm Medicare Advantage acceptance policy
4. **Line 206**: Add fax number if available
5. **Line 391**: Add email address if applicable
6. **Line 404**: Add physical office address if applicable
7. **Doctor's photo**: Replace placeholder with actual photo

### SEO & Marketing Setup

1. **Google Business Profile**:
   - Create/claim listing
   - Add accurate service area
   - Link to website

2. **Google Analytics**:
   - Create GA4 property
   - Add tracking code to `script.js` (line 400+)

3. **Google Search Console**:
   - Verify site ownership
   - Submit sitemap

4. **Social Media Meta Tags**:
   - Add og:image with practice logo/photo
   - Update meta descriptions as needed

### Performance Optimization

The site is already optimized, but for further improvements:

1. **Images**: When adding doctor's photo:
   - Optimize to WebP format
   - Maximum 800px width recommended
   - Use lazy loading: `<img loading="lazy">`

2. **Critical CSS**: Already inline, no action needed

3. **Caching**: Netlify handles this automatically

### Accessibility Testing

Test with:
- Screen readers (NVDA, JAWS, VoiceOver)
- Keyboard-only navigation (Tab, Enter, Esc)
- Color contrast checkers
- Mobile device testing (real devices preferred)

### Local Development

To test locally, you can use any local server:

**Python 3**:
```bash
cd second-mountain-website
python -m http.server 8000
# Visit http://localhost:8000
```

**Node.js**:
```bash
npx serve second-mountain-website
```

**VS Code Live Server**:
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

## Color Scheme

The website uses a calming, trustworthy healthcare color palette:

- **Primary Blue**: `#2563eb` - Trust, professionalism, calm
- **Secondary Green**: `#059669` - Health, growth, vitality
- **Neutral Grays**: Professional backgrounds and text
- **Accent Tints**: Light blues and greens for backgrounds

## Typography

- **Headings**: Playfair Display (serif) - Classic, trustworthy
- **Body**: Inter (sans-serif) - Modern, highly readable

## Contact Information

All instances of contact information:
- **Phone**: 207-492-4642 (click-to-call enabled)
- **Service Area**: Turner-Oxford Hills, Maine
- **Practice Type**: Home-based primary care

## Support & Maintenance

### Common Updates

**Update phone number**: Search and replace `207-492-4642` in `index.html`

**Update service area**: Edit the "Service Area" section starting at line 321

**Add new FAQ**: Copy an existing `.faq-item-full` div and update content

**Change colors**: Update CSS variables in `styles.css` lines 12-27

### Troubleshooting

**Mobile menu not working**: Check JavaScript console for errors

**Forms not submitting**: Check console logs (forms currently log data only)

**Styles not loading**: Verify `styles.css` is in the same directory as `index.html`

## License & Usage

This website was created specifically for Second Mountain Internal Medicine, P.C.

## Version History

- **v1.0.0** (January 2026): Initial launch
  - Complete website with all content sections
  - Responsive design for all devices
  - Placeholder forms for HIPAA integration
  - SEO optimization
  - Accessibility features

## Credits

- **Design & Development**: Claude Code by Anthropic
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Icons**: Inline SVG (no dependencies)

## Contact for Technical Support

For technical issues with the website, refer to this README or contact your web developer.

For practice information, call: **207-492-4642**

---

**Ready to Deploy!** Simply drag the folder to Netlify or follow the deployment steps above.
