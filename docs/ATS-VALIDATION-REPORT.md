# ATS Validation Report

Validation date: 2026-10-06

The four ATS PDFs were tested with programmatic text extraction using `pypdf`.
The extracted text was inspected for order, required sections, contact details,
URLs, project names and broken characters. The four DOCX files were inspected
with `python-docx` and their underlying WordprocessingML.

## Swedish CV

| Check | Result | Actual finding |
|---|---|---|
| PDF selectable/searchable text | PASS | 3,448 characters extracted across two non-empty pages |
| Reading order | PASS | Name, title, contact, profile, skills, projects, education, certification, additional experience and languages appear top-to-bottom |
| Single-column layout | PASS | No tables, columns, floating anchors or text boxes |
| Standard headings | PASS | PROFIL, TEKNISKA KUNSKAPER, UTVALDA PROJEKT, UTBILDNING, CERTIFIERING, ÖVRIG ERFARENHET and SPRÅK extracted |
| Contact information readable | PASS | Location, phone and email extracted in the body |
| URLs readable | PASS | LinkedIn, GitHub and portfolio URLs extracted as text |
| Project names | PASS | Aurora, VPN classification, ns-3, TAM400, serial bus and ESP32 entries extracted |
| No important information in images | PASS | DOCX contains zero inline shapes; PDF pages contain extractable text |
| Swedish characters | PASS | Kungälv, Högskolan Väst, nätverk, språk and other Swedish characters extracted correctly; no replacement characters found |

## English CV

| Check | Result | Actual finding |
|---|---|---|
| PDF selectable/searchable text | PASS | 3,549 characters extracted across two non-empty pages |
| Reading order | PASS | Name, title, contact, summary, skills, projects, education, certification, additional experience and languages appear top-to-bottom |
| Single-column layout | PASS | No tables, columns, floating anchors or text boxes |
| Standard headings | PASS | PROFESSIONAL SUMMARY, TECHNICAL SKILLS, SELECTED PROJECTS, EDUCATION, CERTIFICATION, ADDITIONAL EXPERIENCE and LANGUAGES extracted |
| Contact information readable | PASS | Location, phone and email extracted in the body |
| URLs readable | PASS | LinkedIn, GitHub and portfolio URLs extracted as text |
| Project names | PASS | Aurora, VPN classification, ns-3, TAM400, serial bus and ESP32 entries extracted |
| No important information in images | PASS | DOCX contains zero inline shapes; PDF pages contain extractable text |
| Special characters | PASS | Punctuation and technical names extracted correctly; no replacement characters found |

## Swedish Cover Letter

| Check | Result | Actual finding |
|---|---|---|
| PDF selectable/searchable text | PASS | 1,710 characters extracted from one non-empty page |
| Reading order | PASS | Name, title, contact, heading, greeting, body, closing and name appear top-to-bottom |
| Single-column layout | PASS | No tables, columns, floating anchors or text boxes |
| Standard heading | PASS | PERSONLIGT BREV extracted |
| Contact information readable | PASS | Location, phone and email extracted in the body |
| URLs readable | PASS | LinkedIn, GitHub and portfolio URLs extracted as text |
| Project references | PASS | Aurora, VPN/NonVPN and ns-3 references extracted |
| No important information in images | PASS | DOCX contains zero inline shapes |
| Swedish characters | PASS | Swedish characters extracted correctly; no replacement characters found |

## English Cover Letter

| Check | Result | Actual finding |
|---|---|---|
| PDF selectable/searchable text | PASS | 1,749 characters extracted from one non-empty page |
| Reading order | PASS | Name, title, contact, heading, greeting, body, closing and name appear top-to-bottom |
| Single-column layout | PASS | No tables, columns, floating anchors or text boxes |
| Standard heading | PASS | COVER LETTER extracted |
| Contact information readable | PASS | Location, phone and email extracted in the body |
| URLs readable | PASS | LinkedIn, GitHub and portfolio URLs extracted as text |
| Project references | PASS | Aurora, VPN/NonVPN and ns-3 references extracted |
| No important information in images | PASS | DOCX contains zero inline shapes |
| Special characters | PASS | No broken or replacement characters found |

## DOCX Validation

| File | Result | Findings |
|---|---|---|
| Shucayb-Ahmed-CV-SV.docx | PASS | 50 ordered paragraphs; semantic heading styles; readable bullet paragraphs; Arial; 0 tables; 0 images; 0 floating text boxes; 0 forced page breaks; margins 0.55/0.65/0.50/0.65 inches |
| Shucayb-Ahmed-CV-EN.docx | PASS | 50 ordered paragraphs; semantic heading styles; readable bullet paragraphs; Arial; 0 tables; 0 images; 0 floating text boxes; 0 forced page breaks; margins 0.55/0.65/0.50/0.65 inches |
| Shucayb-Ahmed-Personligt-Brev-SV.docx | PASS | 11 ordered paragraphs; heading style present; Arial; 0 tables; 0 images; 0 floating text boxes; 0 forced page breaks; margins 0.55/0.65/0.50/0.65 inches |
| Shucayb-Ahmed-Cover-Letter-EN.docx | PASS | 11 ordered paragraphs; heading style present; Arial; 0 tables; 0 images; 0 floating text boxes; 0 forced page breaks; margins 0.55/0.65/0.50/0.65 inches |

The contact URLs are written as visible plain text rather than hidden behind icons.
The Word package contains no external hyperlink relationships; this does not
remove the URLs from ATS parsing because the complete addresses appear in the
document text and in the extracted PDFs.

## Language-specific download test

The site was served locally and tested in the browser.

- Swedish mode: hero/contact CV links resolved to
  `assets/documents/ats/Shucayb-Ahmed-CV-SV.pdf` and the cover-letter link
  resolved to `assets/documents/ats/Shucayb-Ahmed-Personligt-Brev-SV.pdf`.
- English mode: after activating EN, both visible text and document URLs changed.
  The CV links resolved to `assets/documents/ats/Shucayb-Ahmed-CV-EN.pdf` and
  the cover-letter link resolved to
  `assets/documents/ats/Shucayb-Ahmed-Cover-Letter-EN.pdf`.

Result: PASS.

## ATS-risk elements intentionally excluded

- Profile photographs
- Sidebars and multiple columns
- Layout tables
- Floating text boxes
- Skill percentages and graphical ratings
- Icons as replacements for contact text
- Image-only text
- Decorative timelines

This validation confirms structural and text-extraction compatibility. It does
not claim guaranteed acceptance by every employer's ATS.
