import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 Size: 595 x 842 pt
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Color Palette
  const primaryColor = rgb(0.06, 0.45, 0.42); // Deep Teal (#0f766e)
  const textColor = rgb(0.12, 0.16, 0.22); // Slate-900 (#1e293b)
  const subtleColor = rgb(0.38, 0.44, 0.52); // Slate-500 (#64748b)
  const lineColor = rgb(0.85, 0.88, 0.92);

  let y = height - 42;
  const leftMargin = 45;
  const contentWidth = width - leftMargin * 2;

  // --- HEADER ---
  page.drawText('HARSH SINGH', {
    x: leftMargin,
    y: y,
    size: 22,
    font: fontBold,
    color: primaryColor,
  });

  y -= 18;
  page.drawText('Java Full Stack Developer | Backend & Microservices Architect', {
    x: leftMargin,
    y: y,
    size: 11,
    font: fontBold,
    color: textColor,
  });

  y -= 15;
  page.drawText('Email: contact@harshsingh.dev  |  Location: India  |  Portfolio: harsh-portfolio.dev', {
    x: leftMargin,
    y: y,
    size: 9.5,
    font: fontRegular,
    color: subtleColor,
  });

  y -= 13;
  page.drawText('GitHub: github.com  |  LinkedIn: linkedin.com', {
    x: leftMargin,
    y: y,
    size: 9.5,
    font: fontRegular,
    color: subtleColor,
  });

  y -= 12;
  page.drawLine({
    start: { x: leftMargin, y: y },
    end: { x: width - leftMargin, y: y },
    thickness: 1,
    color: lineColor,
  });

  // Helper for Section Headers
  function drawSectionHeader(title) {
    y -= 18;
    page.drawText(title.toUpperCase(), {
      x: leftMargin,
      y: y,
      size: 11.5,
      font: fontBold,
      color: primaryColor,
    });
    y -= 4;
    page.drawLine({
      start: { x: leftMargin, y: y },
      end: { x: width - leftMargin, y: y },
      thickness: 0.75,
      color: primaryColor,
    });
    y -= 12;
  }

  // --- PROFESSIONAL SUMMARY ---
  drawSectionHeader('Professional Summary');
  const summaryText =
    'Java Full Stack Developer with strong expertise in architecting scalable distributed systems using Java 17+, Spring Boot, Microservices, and React.js. Demonstrated experience in optimizing database queries, implementing Redis caching layers for ~35% latency reduction, and deploying resilient AWS cloud infrastructure.';
  
  page.drawText(summaryText, {
    x: leftMargin,
    y: y,
    size: 9.5,
    font: fontRegular,
    color: textColor,
    maxWidth: contentWidth,
    lineHeight: 13.5,
  });
  y -= 32;

  // --- TECHNICAL SKILLS ---
  drawSectionHeader('Technical Skills');
  
  const skillCategories = [
    { cat: 'Backend & Architecture:', list: 'Java (17/21+), Spring Boot, Microservices, RESTful APIs, Spring Security, JWT, Hibernate / JPA' },
    { cat: 'Frontend & UI:', list: 'React.js, JavaScript (ES6+), React Hooks, Tailwind CSS, HTML5, Responsive Web Design' },
    { cat: 'Databases & Caching:', list: 'MySQL, PostgreSQL, Redis (In-Memory Caching & Session Management)' },
    { cat: 'Cloud & DevOps:', list: 'AWS (EC2, S3), Docker, Git, GitHub, Maven, Postman, CI/CD Pipelines' },
  ];

  for (const item of skillCategories) {
    page.drawText(item.cat, {
      x: leftMargin,
      y: y,
      size: 9.5,
      font: fontBold,
      color: textColor,
    });
    page.drawText(item.list, {
      x: leftMargin + 140,
      y: y,
      size: 9.5,
      font: fontRegular,
      color: textColor,
    });
    y -= 13.5;
  }
  y -= 6;

  // --- WORK EXPERIENCE ---
  drawSectionHeader('Engineering Experience');

  // Farthur Grow (NO DATES)
  page.drawText('Farthur Grow', {
    x: leftMargin,
    y: y,
    size: 11,
    font: fontBold,
    color: textColor,
  });
  page.drawText('Java Full Stack Developer', {
    x: leftMargin + 110,
    y: y,
    size: 10,
    font: fontOblique,
    color: subtleColor,
  });
  y -= 14;

  const expBullets = [
    'Fixed slow backend endpoints by rewriting SQL queries and indexing schemas; response times improved by ~35%.',
    'Decomposed legacy monolithic services into modular Spring Boot microservices communicating over resilient REST APIs.',
    'Integrated distributed Redis caching layer for read-heavy endpoints, significantly reducing database query loads.',
    'Engineered secure authentication workflows utilizing Spring Security, JWT tokens, and granular Role-Based Access Control (RBAC).',
    'Containerized services using Docker and configured automated deployments across AWS EC2 with AWS S3 asset storage.',
  ];

  for (const bullet of expBullets) {
    page.drawText('•', { x: leftMargin + 6, y: y, size: 10, font: fontBold, color: primaryColor });
    page.drawText(bullet, {
      x: leftMargin + 18,
      y: y,
      size: 9,
      font: fontRegular,
      color: textColor,
      maxWidth: contentWidth - 20,
      lineHeight: 12.5,
    });
    y -= 13.5;
  }
  y -= 6;

  // --- FEATURED PROJECTS ---
  drawSectionHeader('Featured Projects');

  const projects = [
    {
      title: 'CareerSneaker (careersneakers.com)',
      tech: 'Spring Boot, React.js, JWT, AI Integration, MySQL',
      desc: 'Engineered an AI-powered resume platform with instant PDF rendering, ATS keyword score analyzer, and authenticated multi-user dashboards.',
    },
    {
      title: 'FlowSpace (flowspace.co.in)',
      tech: 'Java / Spring Boot, React.js, Redis, Docker, RESTful APIs',
      desc: 'Built an enterprise workforce and task coordination system supporting geo-verification logs, team scheduling, and automated operational audit reports.',
    },
    {
      title: 'CloudBillBox (cloudbillbox.com)',
      tech: 'Spring Boot, React.js, PostgreSQL, RBAC, AWS S3',
      desc: 'Architected a multi-tenant SaaS billing, POS, and inventory platform with granular user permissions, automated invoice generation, and secure document storage.',
    },
    {
      title: 'Agrinexus (agrinexus.app)',
      tech: 'React.js, Spring Boot, WebSockets, PostgreSQL',
      desc: 'Specialized digital marketplace connecting agricultural producers directly with commercial buyers with real-time produce cataloging and price tracking.',
    },
  ];

  for (const proj of projects) {
    page.drawText(proj.title, { x: leftMargin, y: y, size: 10, font: fontBold, color: textColor });
    page.drawText(`[ ${proj.tech} ]`, {
      x: leftMargin + fontBold.widthOfTextAtSize(proj.title, 10) + 8,
      y: y,
      size: 8.5,
      font: fontOblique,
      color: subtleColor,
    });
    y -= 11.5;

    page.drawText(proj.desc, {
      x: leftMargin + 10,
      y: y,
      size: 8.8,
      font: fontRegular,
      color: textColor,
      maxWidth: contentWidth - 10,
      lineHeight: 12,
    });
    y -= 13.5;
  }
  y -= 6;

  // --- EDUCATION ---
  drawSectionHeader('Education');
  page.drawText('Bachelor of Technology (B.Tech) in Computer Science Engineering (CSE)', {
    x: leftMargin,
    y: y,
    size: 10,
    font: fontBold,
    color: textColor,
  });
  y -= 13;
  page.drawText('Core Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering.', {
    x: leftMargin,
    y: y,
    size: 8.8,
    font: fontRegular,
    color: subtleColor,
    maxWidth: contentWidth,
    lineHeight: 12,
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(path.resolve('public/Harsh_Singh_Resume.pdf'), pdfBytes);
  console.log('Resume PDF successfully created at public/Harsh_Singh_Resume.pdf');
}

createResume().catch(console.error);
