// Festival data for 2026 — pan-India + regional.
// month: 1-12, day: date of month.
// type: "gazetted" (public holiday, shown in red) | "optional"
// states: ["all"] for national festivals, or an array of specific states.
// Lunar/Islamic dates are approximate pending moon sighting confirmation.
const festivals = [
  { month: 1, day: 1, name: "New Year's Day", emoji: "🎉", type: "optional", states: ["all"], message: "Wishing you a fresh start filled with joy and success!" },
  { month: 1, day: 13, name: "Lohri", emoji: "🔥", type: "optional", states: ["Punjab", "Haryana", "Himachal Pradesh", "Delhi", "Chandigarh"], message: "May this Lohri bring warmth, prosperity, and happiness to your home." },
  { month: 1, day: 14, name: "Makar Sankranti / Pongal", emoji: "🪁", type: "optional", states: ["all"], message: "May this harvest festival bring warmth, prosperity, and good health." },
  { month: 1, day: 23, name: "Basant Panchami", emoji: "🌼", type: "optional", states: ["all"], message: "May Goddess Saraswati bless you with wisdom and creativity." },
  { month: 1, day: 26, name: "Republic Day", emoji: "🇮🇳", type: "gazetted", states: ["all"], message: "Happy Republic Day! Celebrating unity and pride today." },
  { month: 2, day: 15, name: "Maha Shivaratri", emoji: "🔱", type: "gazetted", states: ["all"], message: "May Lord Shiva bless you with strength and inner peace." },
  { month: 2, day: 19, name: "Shivaji Jayanti", emoji: "⚔️", type: "optional", states: ["Maharashtra"], message: "Honoring the courage and vision of Chhatrapati Shivaji Maharaj." },
  { month: 3, day: 3, name: "Holika Dahan", emoji: "🔥", type: "optional", states: ["all"], message: "May the burning of Holika mark the victory of good over evil in your life." },
  { month: 3, day: 4, name: "Holi", emoji: "🎨", type: "gazetted", states: ["all"], message: "May your life be as colorful and joyful as the festival of colors!" },
  { month: 3, day: 19, name: "Ugadi / Gudi Padwa", emoji: "🌸", type: "optional", states: ["Telangana", "Andhra Pradesh", "Karnataka", "Maharashtra", "Goa"], message: "Wishing you a bright and prosperous new year!" },
  { month: 3, day: 21, name: "Eid-ul-Fitr", emoji: "🌙", type: "gazetted", states: ["all"], message: "Eid Mubarak! May this day bring peace and happiness to you and your family." },
  { month: 3, day: 26, name: "Ram Navami", emoji: "🙏", type: "gazetted", states: ["all"], message: "May Lord Ram's blessings bring strength and righteousness to your life." },
  { month: 3, day: 31, name: "Mahavir Jayanti", emoji: "☸️", type: "gazetted", states: ["all"], message: "May the teachings of Lord Mahavir guide you towards peace and truth." },
  { month: 4, day: 2, name: "Hanuman Jayanti", emoji: "🚩", type: "optional", states: ["all"], message: "May Lord Hanuman bless you with courage and strength." },
  { month: 4, day: 14, name: "Vaisakhi / Vishu / Tamil New Year", emoji: "🌾", type: "optional", states: ["Punjab", "Haryana", "Kerala", "Tamil Nadu"], message: "Wishing you a joyful new year full of prosperity and good harvest." },
  { month: 4, day: 19, name: "Akshaya Tritiya", emoji: "✨", type: "optional", states: ["all"], message: "May this auspicious day bring endless prosperity into your life." },
  { month: 5, day: 1, name: "Buddha Purnima", emoji: "🪷", type: "optional", states: ["all"], message: "May the teachings of Lord Buddha bring you peace and enlightenment." },
  { month: 5, day: 28, name: "Eid-ul-Adha (Bakrid)", emoji: "🐐", type: "gazetted", states: ["all"], message: "Eid Mubarak! Wishing you and your loved ones peace and blessings." },
  { month: 6, day: 21, name: "International Yoga Day", emoji: "🧘", type: "optional", states: ["all"], message: "Wishing you balance, strength, and peace of mind." },
  { month: 7, day: 16, name: "Jagannath Rath Yatra", emoji: "🛞", type: "optional", states: ["Odisha"], message: "May Lord Jagannath's blessings guide your journey." },
  { month: 7, day: 29, name: "Guru Purnima", emoji: "📿", type: "optional", states: ["all"], message: "Honoring the teachers and gurus who guide our path." },
  { month: 8, day: 15, name: "Independence Day", emoji: "🇮🇳", type: "gazetted", states: ["all"], message: "Happy Independence Day! Celebrating freedom and pride." },
  { month: 8, day: 28, name: "Raksha Bandhan", emoji: "🎀", type: "optional", states: ["all"], message: "Celebrating the beautiful bond of love and protection today!" },
  { month: 9, day: 4, name: "Janmashtami", emoji: "🪈", type: "gazetted", states: ["all"], message: "May Lord Krishna's blessings fill your life with happiness." },
  { month: 9, day: 14, name: "Ganesh Chaturthi", emoji: "🐘", type: "optional", states: ["Telangana", "Andhra Pradesh", "Maharashtra", "Karnataka", "Goa"], message: "Ganpati Bappa Morya! May this festival bring joy and prosperity." },
  { month: 10, day: 2, name: "Gandhi Jayanti", emoji: "🕊️", type: "gazetted", states: ["all"], message: "Honoring the life and legacy of Mahatma Gandhi." },
  { month: 10, day: 11, name: "Navratri Begins", emoji: "💃", type: "optional", states: ["all"], message: "May the nine nights of Navratri bring joy and divine blessings." },
  { month: 10, day: 19, name: "Durga Ashtami", emoji: "🌺", type: "optional", states: ["all"], message: "May Goddess Durga bless you with strength and courage." },
  { month: 10, day: 20, name: "Dussehra", emoji: "🏹", type: "gazetted", states: ["all"], message: "May good triumph over evil in your life today and always." },
  { month: 10, day: 29, name: "Karwa Chauth", emoji: "🌕", type: "optional", states: ["Punjab", "Haryana", "Uttar Pradesh", "Rajasthan", "Madhya Pradesh", "Delhi"], message: "Wishing you a beautiful day filled with love and devotion." },
  { month: 11, day: 6, name: "Dhanteras", emoji: "🪙", type: "optional", states: ["all"], message: "May this Dhanteras bring wealth and prosperity to your home." },
  { month: 11, day: 8, name: "Diwali", emoji: "🪔", type: "gazetted", states: ["all"], message: "Wishing you a Diwali as bright as a thousand lamps lit for joy!" },
  { month: 11, day: 10, name: "Govardhan Puja", emoji: "⛰️", type: "optional", states: ["all"], message: "May Lord Krishna's blessings protect and guide you." },
  { month: 11, day: 11, name: "Bhai Dooj", emoji: "🎁", type: "optional", states: ["all"], message: "Celebrating the special bond between siblings today!" },
  { month: 11, day: 15, name: "Chhath Puja", emoji: "🌅", type: "optional", states: ["Bihar", "Jharkhand", "Uttar Pradesh", "West Bengal"], message: "May the Sun God bless you with health and prosperity." },
  { month: 12, day: 25, name: "Christmas", emoji: "🎄", type: "gazetted", states: ["all"], message: "Merry Christmas! Wishing you peace, joy, and good cheer." },
];

export default festivals;