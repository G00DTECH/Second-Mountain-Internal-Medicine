# Statement of Work
## Second Mountain Internal Medicine, P.C. — Web Optimization & Architecture

**Prepared by:** Justin Harvey  
**Prepared for:** Dr. John C. Matulis, DO, MPH  
**Date:** July 7, 2026  
**Project Rate:** Friends & Family — $400.00 flat  

---

## Scope of Work

This Statement of Work covers web development, visual redesign, SEO architecture, and structured data implementation performed on the Second Mountain Internal Medicine website. Work was delivered across three phases: aesthetic redesign, search engine optimization, and multi-page site architecture.

---

## Phase 1: Aesthetic Redesign & Global Style Engine

*Migration from generic healthcare styling to a targeted "Warm Maine Editorial" design system tailored to the practice's voice, geography, and patient audience.*

| Deliverable | Description | Est. Hours | Billable Hours |
|---|---|---|---|
| Global Theme & CSS Tokens | Configured new design tokens site-wide: Primary Slate Lake Blue (`#2d5a7b`), Secondary Sage Forest Green (`#5c7a67`), Warm Cream backgrounds (`#f0ece4`, `#faf9f6`), and Warm Dark text (`#1a1612`), replacing generic cool-gray/electric-blue palette | 3.0 | 0.5 |
| Component Layout & Spacing | Standardized border radius to a tighter, clinical 3–12px spectrum across all UI containers; audited global typography tracking and line heights for readability on older devices and rural mobile connections | 2.5 | 0.5 |

**Phase 1 Subtotal: 5.5 est. hours / 1.0 billable hours**

---

## Phase 2: SEO, Analytics & Structured Data Engine

*Deploying enterprise-grade metadata, behavioral analytics, and localized search signal architecture consistent with healthcare best practices.*

| Deliverable | Description | Est. Hours | Billable Hours |
|---|---|---|---|
| Google Analytics 4 Integration | Provisioned and deployed GA4 property (`G-EKMLD6KN39`) globally across all active pages for behavioral tracking and conversion monitoring | 1.0 | 0.25 |
| Schema.org @graph Structured Data | Scripted and injected a full JSON-LD `@graph` schema on every page mapping interrelated medical entities: `MedicalBusiness`, `MedicalClinic`, `LocalBusiness`, and `Physician` — including National Provider Identifier (NPI), geo-coordinates, operating hours, and verified `sameAs` authority links to Google Maps and Healthgrades | 5.0 | 0.75 |
| Canonical & Open Graph Metadata | Configured self-referencing canonical URLs on every unique route; built individual Open Graph tags (title, description, image, URL) per page for accurate social sharing previews | 2.5 | 0.5 |
| On-Page & Keyword Optimization | Authored unique, keyword-rich `<title>` and `<meta name="description">` strings per page targeting local geography (Oxford Hills, Lewiston, Auburn, Turner) and condition-specific terms (dementia, Alzheimer's, COPD, CHF, Parkinson's) | 4.0 | 0.5 |

**Phase 2 Subtotal: 12.5 est. hours / 2.0 billable hours**

---

## Phase 3: Multi-Page Routing Architecture

*Restructuring the original single-page site into a scalable multi-page environment with SEO-optimized routes, proper internal linking, and purpose-built layouts per audience.*

| Deliverable | Description | Est. Hours | Billable Hours |
|---|---|---|---|
| Core Profile Pages (`about.html`, `services.html`) | Restructured into distinct routes; standalone bio layout for Dr. Matulis and a granular multi-tier services directory with condition/service groupings | 4.0 | 0.5 |
| Content Pages (`faq.html`, `contact.html`) | Dedicated FAQ page and secure contact form interface, each with full SEO metadata and schema | 3.0 | 0.25 |
| B2B Referral Engine (`referrals.html`) | Net-new page architected specifically for outside clinic and provider referral pipelines — not present in the original site | 3.0 | 0.5 |
| Compliance & Territory Pages (`service-area.html`, `privacy-policy.html`) | Geo-targeted service territory page and HIPAA-aware privacy policy, both legally required before accepting patient inquiries | 2.0 | 0.25 |
| Homepage & Navigation (`index.html`) | Updated core homepage header, footer, and contextual links to connect across all newly provisioned pages; navigation updated site-wide | 2.0 | 0.25 |

**Phase 3 Subtotal: 14.0 est. hours / 1.75 billable hours**

---

## Financial Summary

| | |
|---|---|
| Total Estimated Commercial Effort | 32 hours |
| Standard Market Value | $3,200 – $4,000 |
| Friends & Family Billable Hours | 4.75 hours |
| Effective Rate | $84.21 / hour |
| **Total Invoice Amount** | **$400.00** |

---

## Deliverables Checklist

- [x] Warm Maine Editorial design system applied globally (`styles.css`)
- [x] Google Analytics 4 installed on all pages
- [x] Schema.org `@graph` (MedicalBusiness + Physician + LocalBusiness) on all pages
- [x] Canonical URLs and Open Graph tags on all pages
- [x] Unique localized title/meta description per page
- [x] `about.html` — Dr. Matulis profile
- [x] `services.html` — services detail
- [x] `faq.html` — full FAQ
- [x] `contact.html` — contact & inquiry form
- [x] `referrals.html` — provider referral intake (net-new)
- [x] `service-area.html` — service territory
- [x] `privacy-policy.html` — legal/compliance
- [x] `index.html` — homepage updated with multi-page navigation

---

## Remaining Items (Not Included in This SOW)

The following items are out of scope for this engagement and remain for the client to action:

- HIPAA-compliant form backend integration (Jotform HIPAA, Formstack, or Cognito Forms)
- Business Associate Agreement (BAA) with form provider
- Real headshot and family photo integration
- Google Business Profile setup and verification
- Google Search Console submission
- Custom domain configuration
- Blog / long-form content (optional future phase)

---

*All work delivered as static HTML/CSS/JS — no framework dependencies, no recurring hosting fees beyond Netlify (free tier). Site is deployment-ready.*
