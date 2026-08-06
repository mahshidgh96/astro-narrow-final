import type { Locale } from './i18n';

export const siteConfig = {
  name: 'InsightHunter in DancingData',
  shortName: 'Dancing Data',
  description: 'A content-focused Astro theme inspired by Hugo Narrow.',
  author: {
    name: 'Mahshid Ghazanfari',
    title: {
      en: 'A life-long learner',
      'fa': 'در حال یادگیری چگونه زیستن'
    },
    description: {
      en: 'Writing, projects, and notes — a compact space for ideas that keep their shape.',
      'fa': 'ای دل مباش یک دم خالی ز عشق و مستی'
    },
    avatar: '/favicon.svg',
    social: [
      { name: 'GitHub', url: 'https://github.com/mahshidgh96', icon: 'simple-icons:github' },
      { name: 'Email', url: 'mailto:mahaiwork6@gmail.com.com', icon: 'lucide:mail' }
    ]
  },
  contentWidth: '56rem',
  ui: {
    navbar: {
      sticky: true
    },
    dock: {
      enabled: true
    }
  },
  nav: ['posts', 'projects','archives','resume'],
  footerNav: ['archives', 'tags','resume'],
  comments: {
    enabled: false,
    provider: 'giscus',
    giscus: {
      repo: '',
      repoId: '',
      category: '',
      categoryId: '',
      mapping: 'pathname',
      strict: '0',
      reactionsEnabled: '1',
      emitMetadata: '0',
      inputPosition: 'bottom',
      theme: 'preferred_color_scheme'
    }
  },
  analytics: {
    enabled: false,
    provider: 'umami',
    umami: {
      src: '',
      websiteId: '',
      domains: ''
    }
  },
  gallery: {
    enabled: true,
    defaultLayout: 'justified',
    gap: 10,
    targetRowHeight: 220,
    lastRowBehavior: 'center',
    columnWidth: 220,
    columns: 'auto'
  },
  lightbox: {
    enabled: true
  },
  post: {
    relatedCount: 3,
    license: {
      enabled: true,
      name: 'CC BY-NC-SA 4.0',
      url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
      description: 'This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.'
    }
  }
} satisfies {
  name: string;
  shortName: string;
  description: string;
  author: {
    name: string;
    title: Record<Locale, string>;
    description: Record<Locale, string>;
    avatar: string;
    social: Array<{ name: string; url: string; icon: string }>;
  };
  contentWidth: string;
  ui: {
    navbar: {
      sticky: boolean;
    };
    dock: {
      enabled: boolean;
    };
  };
  nav: Array<string | { label: Record<Locale, string>; href: string; icon: string }>;
  footerNav: Array<string | { label: Record<Locale, string>; href: string; icon: string }>;
  comments: Record<string, any>;
  analytics: Record<string, any>;
  gallery: Record<string, any>;
  lightbox: Record<string, any>;
  post: Record<string, any>;
};
