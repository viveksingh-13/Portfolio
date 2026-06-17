import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const lines = [
  "Vivek Singh",
  "Frontend Engineer",
  "",
  "Email: viveks0444@gmail.com",
  "Phone: +91 88946-19995",
  "Location: Chandigarh, India",
  "LinkedIn: linkedin.com/in/vivek-singh13",
  "GitHub: github.com/viveks0444",
  "",
  "SUMMARY",
  "Frontend Engineer with 3.5+ years building scalable, high-performance",
  "web apps using React, Next.js, TypeScript, and Node.js.",
  "",
  "EXPERIENCE",
  "Antier Solutions - Software Developer, Frontend (Nov 2025 - Present)",
  "Matrix Marketers - Software Developer, Frontend (May 2024 - Jul 2025)",
  "SoftRadix Technologies - Frontend Developer (Aug 2022 - May 2024)",
  "",
  "Replace public/resume.pdf with your full resume PDF.",
];

function escapePdfText(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function buildPdf(textLines) {
  const streamContent = textLines
    .map((line, index) => {
      const y = 760 - index * 14;
      return `BT /F1 10 Tf 48 ${y} Td (${escapePdfText(line)}) Tj ET`;
    })
    .join("\n");

  const streamLength = Buffer.byteLength(streamContent, "utf8");

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>",
    `<< /Length ${streamLength} >>\nstream\n${streamContent}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  objects.forEach((obj, index) => {
    offsets.push(Buffer.byteLength(pdf, "utf8"));
    pdf += `${index + 1} 0 obj\n${obj}\nendobj\n`;
  });

  const xrefOffset = Buffer.byteLength(pdf, "utf8");
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
  pdf += `startxref\n${xrefOffset}\n%%EOF\n`;

  return pdf;
}

const outputPath = path.join(__dirname, "../public/resume.pdf");
fs.writeFileSync(outputPath, buildPdf(lines), "utf8");
console.log(`Wrote ${outputPath}`);
