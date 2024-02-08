export function extractHeaders(markdownText: string): { label: string; order: number }[] {
  const lines = markdownText.split('\n');
  const headers: { label: string; order: number }[] = [];
  let inCodeBlock = false;

  // eslint-disable-next-line no-restricted-syntax
  for (const line of lines) {
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!inCodeBlock) {
      const match = line.match(/^#+\s(.*)/);
      if (match) {
        const level = line.match(/^#+/)?.[0].length ?? 0;
        headers.push({ label: match[1], order: level });
      }
    }
  }

  return headers;
}
