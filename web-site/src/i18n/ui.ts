export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.cv': 'View CV',
    'nav.home': 'Home',
    'page.underConstruction.title': 'Under Construction',
    'page.underConstruction.description': 'This page is currently being built. Please check back later.',
    'cv.skills': 'Skills',
    'cv.experience': 'Experience',
    'cv.education': 'Education',
    'cv.certifications': 'Certifications',
    'cv.languages': 'Languages',
    'cv.contact': 'Contact',
    'cv.summary': 'Professional Summary',
    'cv.tech': 'Tech:',
    'cv.exportPdf': 'Export to PDF'
  },
  es: {
    'nav.cv': 'Ver CV',
    'nav.home': 'Inicio',
    'page.underConstruction.title': 'En Construcción',
    'page.underConstruction.description': 'Esta página está en construcción. Vuelve pronto.',
    'cv.skills': 'Habilidades',
    'cv.experience': 'Experiencia',
    'cv.education': 'Educación',
    'cv.certifications': 'Certificaciones',
    'cv.languages': 'Idiomas',
    'cv.contact': 'Contacto',
    'cv.summary': 'Resumen Profesional',
    'cv.tech': 'Tecnologías:',
    'cv.exportPdf': 'Exportar a PDF'
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return `/${l}${path}`
  }
}
