# Second Mountain Internal Medicine - Deployment Checklist

Use this checklist to ensure everything is ready before going live.

## Pre-Deployment Content Review

### Critical Content (Required Before Launch)

- [ ] **Dr. Matulis's photo** added to replace placeholder
- [ ] **Personal statement** from Dr. Matulis added (About section)
- [ ] **After-hours protocol** confirmed and updated in FAQ
- [ ] **Medicare Advantage policy** confirmed (accepted or not)
- [ ] **Fax number** added (if available)
- [ ] **Email address** added (if using for contact)
- [ ] **Physical address** added (if applicable)
- [ ] **Service area** confirmed accurate

### Optional Enhancements

- [ ] Patient testimonials (if available and HIPAA-compliant)
- [ ] Additional photos of Dr. Matulis in home visit settings
- [ ] Video introduction from Dr. Matulis
- [ ] Downloadable patient information PDF

## HIPAA Compliance (CRITICAL)

### Before Accepting Patient Information

- [ ] **HIPAA-compliant form service** selected and integrated
  - Options: Jotform HIPAA, Formstack, Cognito Forms, or custom backend
- [ ] **Business Associate Agreement (BAA)** signed with form provider
- [ ] **SSL/TLS certificate** enabled (automatic with Netlify)
- [ ] **Privacy Policy** page created and linked in footer
- [ ] **Notice of Privacy Practices** available for patients
- [ ] **Terms of Service** page created
- [ ] **Cookie consent** banner added (if using analytics/tracking)

### Form Integration

- [ ] Patient inquiry form connected to secure endpoint
- [ ] Provider referral form connected to secure endpoint
- [ ] Test form submissions with real data
- [ ] Verify email notifications are working
- [ ] Confirm data encryption in transit and at rest

## Technical Setup

### Domain & Hosting

- [ ] Netlify account created
- [ ] Website deployed to Netlify
- [ ] Custom domain purchased (if not already owned)
- [ ] DNS records configured
- [ ] HTTPS/SSL enabled (should be automatic)
- [ ] Test website on live domain

### SEO & Analytics

- [ ] **Google Analytics 4** property created
- [ ] GA4 tracking code added to website (script.js)
- [ ] **Google Search Console** account created
- [ ] Website ownership verified in Search Console
- [ ] **Google Business Profile** created/claimed
  - Business name: Second Mountain Internal Medicine, P.C.
  - Category: Medical practice / Home health care
  - Service area: Turner, Oxford Hills, Maine
  - Phone: 207-492-4642
  - Website link added
  - Photos uploaded
  - Description added
- [ ] Bing Webmaster Tools (optional but recommended)

### Email Setup

- [ ] Professional email address configured (e.g., info@secondmountainmed.com)
- [ ] Email forwarding set up for form submissions
- [ ] SPF and DKIM records configured for email security
- [ ] Test email delivery

## Testing

### Device Testing

- [ ] **Desktop** - Chrome, Firefox, Safari, Edge
- [ ] **Tablet** - iPad, Android tablet
- [ ] **Mobile** - iPhone Safari, Android Chrome
- [ ] **Older devices** - Test on 3-4 year old devices

### Functionality Testing

- [ ] All navigation links work correctly
- [ ] Phone number click-to-call works on mobile
- [ ] Forms validate required fields
- [ ] Form submission confirmation messages appear
- [ ] Mobile menu opens and closes properly
- [ ] Back to top button appears and functions
- [ ] Smooth scrolling works for all anchor links
- [ ] All buttons and CTAs are clickable

### Content Testing

- [ ] All text is readable (no typos)
- [ ] All headings are properly formatted
- [ ] Contact information is accurate throughout
- [ ] Service area list is complete
- [ ] FAQ answers are comprehensive
- [ ] No placeholder text remains (search for "[" or "TBD")

### Accessibility Testing

- [ ] **Keyboard navigation** - Tab through entire site
- [ ] **Screen reader** test (NVDA on Windows, VoiceOver on Mac)
- [ ] **Color contrast** check (use WebAIM Contrast Checker)
- [ ] **Text scaling** - Test at 200% zoom
- [ ] **Focus indicators** visible on all interactive elements
- [ ] **Alt text** for all images (when added)
- [ ] **ARIA labels** on all buttons and links

### Performance Testing

- [ ] **Page load speed** test (Google PageSpeed Insights)
- [ ] **Mobile performance** score (aim for 90+)
- [ ] Test on slow 3G connection
- [ ] Check total page size (should be under 2MB)

### SEO Testing

- [ ] **Meta descriptions** present and accurate
- [ ] **Title tags** optimized with keywords
- [ ] **Heading hierarchy** correct (H1 → H2 → H3)
- [ ] **Local keywords** included naturally
- [ ] **Schema markup** for local business (optional enhancement)
- [ ] **Sitemap** generated (Netlify can do this automatically)
- [ ] **Robots.txt** file present

## Legal & Compliance

- [ ] **Privacy Policy** reviewed by legal counsel
- [ ] **HIPAA policies** reviewed and implemented
- [ ] **Disclaimer** present on website
- [ ] **Copyright notice** in footer
- [ ] **Terms of Service** reviewed
- [ ] State medical board requirements checked (Maine)

## Marketing Preparation

### Launch Announcement

- [ ] Press release drafted (optional)
- [ ] Social media accounts created (if desired)
  - Facebook Business Page
  - LinkedIn Company Page
- [ ] Email announcement to existing patients
- [ ] Notification to referring providers and hospitals
- [ ] Business cards printed with website URL

### Online Listings

- [ ] Google Business Profile live
- [ ] Healthgrades profile updated
- [ ] Vitals.com listing claimed
- [ ] WebMD physician directory
- [ ] Medicare Physician Compare
- [ ] Local chamber of commerce listing
- [ ] MaineHealth provider directory (if applicable)

### Print Materials

- [ ] Business cards include website URL
- [ ] Brochures include website URL
- [ ] Patient handouts reference website for FAQs

## Post-Launch Monitoring

### Week 1 After Launch

- [ ] Monitor form submissions daily
- [ ] Check Google Analytics for traffic
- [ ] Test all contact methods (phone, forms)
- [ ] Monitor for any error reports
- [ ] Check Search Console for indexing issues

### Month 1 After Launch

- [ ] Review analytics data
- [ ] Check which pages are most visited
- [ ] Monitor search rankings for key terms
- [ ] Collect feedback from users
- [ ] Make updates based on user behavior

### Ongoing Maintenance

- [ ] Update content quarterly (add FAQs, testimonials, etc.)
- [ ] Check for broken links monthly
- [ ] Review and respond to Google reviews
- [ ] Update Medicare/insurance information as needed
- [ ] Renew domain and hosting annually

## Emergency Contacts

**Technical Issues**:
- Netlify Support: https://www.netlify.com/support/
- DNS Provider Support: [Your DNS provider]

**HIPAA/Legal Issues**:
- HIPAA Compliance Officer: [Name and contact]
- Legal Counsel: [Name and contact]

**Content Updates**:
- Dr. Matulis: 207-492-4642
- Practice Administrator: [Name and contact]

## Quick Reference

### Key URLs After Deployment
- Live Website: https://[your-domain].com
- Netlify Dashboard: https://app.netlify.com
- Google Analytics: https://analytics.google.com
- Search Console: https://search.google.com/search-console
- Google Business: https://business.google.com

### Important Files
- `index.html` - Main content
- `styles.css` - All styling
- `script.js` - Interactive features
- `.htaccess` - Server configuration (if needed)

### Local SEO Keywords to Monitor
- "home doctor Turner Maine"
- "house call doctor Oxford Hills"
- "homebound primary care Maine"
- "Medicare home visits Oxford County"
- "doctor who makes house calls near me"

---

## Final Launch Checklist

**Right Before Going Live**:

1. [ ] All critical content reviewed and approved
2. [ ] HIPAA compliance measures in place
3. [ ] All forms tested and working
4. [ ] Contact information verified
5. [ ] Mobile responsiveness confirmed
6. [ ] Analytics tracking installed
7. [ ] SSL certificate active
8. [ ] DNS properly configured
9. [ ] 404 error page created (Netlify default is fine)
10. [ ] Backup of website files created

**Launch Day**:

1. [ ] Make website live on custom domain
2. [ ] Test all functionality on live site
3. [ ] Submit sitemap to Google Search Console
4. [ ] Post launch announcement (if planned)
5. [ ] Monitor for any issues

**Congratulations! Your website is live!**

---

**Questions or Issues?**

Refer to the main README.md file or contact your technical support provider.

**Practice Contact**: 207-492-4642
