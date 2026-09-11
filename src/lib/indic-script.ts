// Zero-dependency Brahmic Unicode transliteration engine
// Maps Devanagari Unicode code points directly to Gujarati, Bengali, and Telugu blocks

export type SupportedScript = 'hindi' | 'english' | 'gujarati' | 'bengali' | 'telugu';

export function transliterateDevanagari(text: string, targetScript: SupportedScript): string {
  if (targetScript === 'hindi') return text;

  // Gujarati mapping: 0x0900 -> 0x0A80
  if (targetScript === 'gujarati') {
    return text
      .split('')
      .map((c) => {
        const code = c.charCodeAt(0);
        if ((code >= 0x0901 && code <= 0x0963) || (code >= 0x0966 && code <= 0x096f)) {
          return String.fromCharCode(code - 0x0900 + 0x0a80);
        }
        return c;
      })
      .join('');
  }

  // Bengali mapping: 0x0900 -> 0x0980
  if (targetScript === 'bengali') {
    return text
      .split('')
      .map((c) => {
        const code = c.charCodeAt(0);
        if ((code >= 0x0901 && code <= 0x0963) || (code >= 0x0966 && code <= 0x096f)) {
          const bCode = code - 0x0900 + 0x0980;
          return String.fromCharCode(bCode);
        }
        return c;
      })
      .join('');
  }

  // Telugu mapping: 0x0900 -> 0x0C00
  if (targetScript === 'telugu') {
    return text
      .split('')
      .map((c) => {
        const code = c.charCodeAt(0);
        if ((code >= 0x0901 && code <= 0x0963) || (code >= 0x0966 && code <= 0x096f)) {
          const tCode = code - 0x0900 + 0x0c00;
          return String.fromCharCode(tCode);
        }
        return c;
      })
      .join('');
  }

  return text;
}
