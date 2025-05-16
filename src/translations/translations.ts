// src/utils/translations.ts
export type LanguageCode = 'en' | 'hi' | 'ta' | 'bn';

export type TranslationKeys = {
  dashboard: string;
  welcome: string;
  compliance: string;
  projectManagement: string;
  greenBuilding: string;
  reporting: string;
};

export const translations: Record<LanguageCode, TranslationKeys> = {
  en: {
    dashboard: 'Dashboard',
    welcome: 'Welcome to ArchiVerse AI - Government Project Module',
    compliance: 'Compliance',
    projectManagement: 'COA Project Management',
    greenBuilding: 'Green Building Certification',
    reporting: 'Reporting & Documentation'
  },
  hi: {
    dashboard: 'डैशबोर्ड',
    welcome: 'आर्किवर्स एआई में आपका स्वागत है - सरकारी परियोजना मॉड्यूल',
    compliance: 'अनुपालन',
    projectManagement: 'सीओए परियोजना प्रबंधन',
    greenBuilding: 'हरित भवन प्रमाणन',
    reporting: 'रिपोर्टिंग और दस्तावेज़ीकरण'
  },
  ta: {
    dashboard: 'முகப்பு பலகை',
    welcome: 'ஆர்கிவெர்ஸ் AI வரவேற்கிறது - அரசு திட்ட தொகுதி',
    compliance: 'இணக்கம்',
    projectManagement: 'COA திட்ட நிர்வாகம்',
    greenBuilding: 'பசுமை கட்டிட சான்றிதழ்',
    reporting: 'அறிக்கையிடல் மற்றும் ஆவணமாக்கல்'
  },
  bn: {
    dashboard: 'ড্যাশবোর্ড',
    welcome: 'আর্কিভার্স এআই এ স্বাগতম - সরকারি প্রকল্প মডিউল',
    compliance: 'সম্মতি',
    projectManagement: 'COA প্রকল্প ব্যবস্থাপনা',
    greenBuilding: 'সবুজ ভবন সনদপত্র',
    reporting: 'রিপোর্টিং এবং ডকুমেন্টেশন'
  }
};