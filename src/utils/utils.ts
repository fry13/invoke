export const rarity = (score: number) => {
  if (score >= 100) return "text-amber-500";
  else if (score >= 50) return "text-purple-600";
  else if (score >= 25) return "text-blue-600";
  else if (score >= 5) return "text-green-600";
};
