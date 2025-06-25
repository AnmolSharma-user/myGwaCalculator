
export const generateGWAResultsText = (
  subjects: Array<{ name: string; grade: string; units: string }>,
  gwa: number
): string => {
  const validSubjects = subjects.filter(s => s.name && s.grade && s.units);
  
  let text = "🎓 My GWA Calculation Results\n\n";
  text += "📚 Subjects:\n";
  
  validSubjects.forEach((subject, index) => {
    text += `${index + 1}. ${subject.name} - Grade: ${subject.grade}, Units: ${subject.units}\n`;
  });
  
  text += `\n📊 Calculated GWA: ${gwa.toFixed(2)}\n\n`;
  
  if (gwa >= 90) text += "🌟 Excellent! Keep up the great work!\n";
  else if (gwa >= 80) text += "👍 Good job! You're doing well!\n";
  else if (gwa >= 70) text += "📈 Fair performance. There's room for improvement!\n";
  else text += "💪 Keep working hard. You can do better!\n";
  
  text += "\n📱 Calculate your GWA at: https://mygwacalculator.com";
  
  return text;
};

export const getShareUrls = (text: string) => {
  const encodedText = encodeURIComponent(text);
  
  return {
    whatsapp: `https://wa.me/?text=${encodedText}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=https://mygwacalculator.com&quote=${encodedText}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedText}`,
    telegram: `https://t.me/share/url?url=https://mygwacalculator.com&text=${encodedText}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=https://mygwacalculator.com&summary=${encodedText}`
  };
};
