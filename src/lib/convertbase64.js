export function base64ToImageSrc(base64Data, mimeType) {
    return `data:${mimeType};base64,${base64Data}`;
  }