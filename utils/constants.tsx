// /utils/constants.ts
export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};
