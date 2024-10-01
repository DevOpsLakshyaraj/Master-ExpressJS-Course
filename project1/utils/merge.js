import PDFMerger from "pdf-merger-js";

const merger = new PDFMerger();

export default async function merge (pdfs) {
    const filename = crypto.randomUUID();
    for (let i = 0; i < pdfs.length; i++) {
        const pdf = pdfs[i];
        await merger.add(pdf.path);
    }

    await merger.save(`public\\pdfs\\${filename}.pdf`);
    return filename;
}