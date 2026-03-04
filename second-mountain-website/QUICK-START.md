# Quick Start Guide - Second Mountain Internal Medicine Website

## Get Your Website Online in 5 Minutes

### Option 1: Netlify Drop (Fastest - No Account Needed)

1. Open your browser and go to: **https://app.netlify.com/drop**

2. Drag the entire `second-mountain-website` folder onto the page

3. Your website is now LIVE with a URL like: `https://random-name-12345.netlify.app`

4. That's it! Share the URL or continue to setup a custom domain.

---

### Option 2: Netlify Account (For Custom Domain)

1. Go to **https://www.netlify.com** and create a free account

2. Click **"Add new site"** → **"Deploy manually"**

3. Drag the `second-mountain-website` folder to deploy

4. Your site is live! Now add a custom domain:
   - Click **"Domain settings"** in Netlify
   - Click **"Add custom domain"**
   - Enter your domain (e.g., `secondmountainmed.com`)
   - Follow the DNS setup instructions
   - HTTPS is automatic!

---

## What You Get

Your website includes:

- **Professional Design**: Modern, clean, healthcare-focused
- **Fully Responsive**: Works on phones, tablets, computers
- **Call-to-Action**: Phone number click-to-call on mobile
- **Complete Content**: All sections from the markdown document
- **SEO Optimized**: Local search keywords included
- **Accessible**: Works with screen readers and keyboard navigation
- **Fast Loading**: Optimized for rural internet and older devices

---

## Important: Before Accepting Patient Data

The contact forms are **placeholders only**. Before you start receiving actual patient information:

1. **Integrate HIPAA-compliant forms**:
   - Use Jotform HIPAA (https://www.jotform.com/hipaa/)
   - Or Formstack (https://www.formstack.com/healthcare)
   - Or Cognito Forms (https://www.cognitoforms.com/healthcare)

2. **Sign a Business Associate Agreement (BAA)** with your form provider

3. **Add Privacy Policy and Terms pages**

**Until then**: Direct people to call **207-492-4642** for inquiries.

---

## Next Steps After Deployment

### Immediate (First Day)
1. Test the website on your phone and computer
2. Click all the links to make sure they work
3. Try the phone number to confirm click-to-call works
4. Share the URL with Dr. Matulis for review

### First Week
1. Set up Google Analytics (see DEPLOYMENT-CHECKLIST.md)
2. Create/claim Google Business Profile
3. Add Dr. Matulis's photo (replace placeholder)
4. Get feedback from 3-5 trusted people

### First Month
1. Integrate HIPAA-compliant forms
2. Set up custom domain (if not done yet)
3. Add Privacy Policy page
4. Submit to Google Search Console
5. Update any content based on feedback

---

## Quick Edits

### Change Phone Number
1. Open `index.html` in any text editor
2. Find and replace `207-492-4642` with new number
3. Save and re-deploy

### Update Service Area
1. Open `index.html`
2. Find the "Service Area" section (around line 321)
3. Edit the community names
4. Save and re-deploy

### Change Colors
1. Open `styles.css`
2. Find the `:root` section at the top (lines 12-27)
3. Change the color values
4. Save and re-deploy

---

## Getting Help

### Website Issues
- Check README.md for detailed documentation
- Check DEPLOYMENT-CHECKLIST.md for complete setup guide

### Technical Problems
- Netlify Support: https://www.netlify.com/support/
- Netlify Community: https://answers.netlify.com/

### Practice Information
- Call: 207-492-4642

---

## File Overview

| File | Purpose |
|------|---------|
| `index.html` | Main website content - all pages in one file |
| `styles.css` | All styling and design |
| `script.js` | Interactive features (menu, forms, etc.) |
| `netlify.toml` | Netlify configuration (security, caching) |
| `robots.txt` | SEO - tells search engines what to crawl |
| `sitemap.xml` | SEO - helps search engines find all pages |
| `README.md` | Complete documentation |
| `DEPLOYMENT-CHECKLIST.md` | Step-by-step launch guide |
| `QUICK-START.md` | This file! |

---

## Common Questions

**Q: How much does Netlify cost?**
A: Free for this website! Netlify's free tier is perfect for small business sites.

**Q: Can I edit the website after it's live?**
A: Yes! Edit the files and re-deploy. Changes appear in seconds.

**Q: Do I need to know how to code?**
A: No! The website is complete. You can make simple text edits in any text editor.

**Q: Will this work on old phones?**
A: Yes! The site is tested on older devices and works great.

**Q: Is the website secure?**
A: Yes! Netlify provides automatic HTTPS/SSL certificates.

**Q: Can I use my own domain name?**
A: Yes! Follow Option 2 above to add a custom domain.

---

## Success Checklist

- [ ] Website deployed to Netlify
- [ ] Tested on mobile phone
- [ ] Tested on computer
- [ ] Phone number works (click-to-call)
- [ ] All sections reviewed for accuracy
- [ ] Dr. Matulis has reviewed and approved
- [ ] URL shared with relevant people

---

**Ready to launch? Just drag and drop to Netlify and you're live!**

Need more help? See README.md for complete documentation.
