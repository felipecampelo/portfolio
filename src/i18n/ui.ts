import type { Locale } from './config';

const ui = {
	pt: {
		siteTitle: 'Felipe Campelo',
		siteDescription: 'Site pessoal de Felipe Campelo',
		navHome: 'Home',
		navWork: 'Projetos',
		navAbout: 'Sobre mim',
		navMenu: 'Menu',
		localeShortPt: 'PT',
		localeShortEn: 'EN',
		localeSwitchToPt: 'Ver em português',
		localeSwitchToEn: 'View in English',
		themeToggleSr: 'Alternar entre tema claro e escuro',
		footerCopyright: 'Felipe Campelo',

		homeMetaTitle: 'Felipe Campelo',
		homeMetaDescription: 'Site pessoal de Felipe Campelo',
		heroTitle: 'Olá, meu nome é Felipe Campelo',
		heroTagline:
			'Engenheiro de dados sênior com vasta experiência nas mais variadas tecnologias do mundo moderno.',
		certificationsHeading: 'Certificações',
		certificationsIntro:
			'Aqui estão as principais certificações que obtive durante meu desenvolvimento.',
		dataStackHeading: 'Stack de Dados',
		dataStackIntro:
			'Aqui estão todas as ferramentas que tive contato na minha jornada como Data Engineer, atuando tanto em consultoria como em empresa de produto próprio.',
		stackCloud: 'Cloud & Infra',
		stackDataEng: 'Data Engineering',
		stackAnalytics: 'Analytics & BI',
		stackMlops: 'MLOps & Machine Learning',
		stackDevops: 'DevOps & Observabilidade',
		featuredHeading: 'Projetos em Destaque',
		featuredIntro:
			'Abaixo estão alguns dos projetos mais relevantes que desenvolvi nos últimos anos, atuando em diferentes contextos e desafios.',
		viewAll: 'Ver Todos',
		portraitAlt: 'Felipe Campelo sorrindo com camisa xadrez vermelha e óculos tartaruga',

		workMetaTitle: 'Projetos e Soluções | Felipe Campelo',
		workMetaDescription: 'Projetos recentes de Felipe Campelo',
		workHeroTitle: 'Projetos e Soluções',
		workHeroTagline:
			'Aqui estão alguns dos projetos que desenvolvi ao longo da minha trajetória, atuando em diferentes desafios e contextos de negócio.',
		workBackLink: 'Projetos',

		aboutMetaTitle: 'Sobre mim | Felipe Campelo',
		aboutMetaDescription: 'Trajetória profissional e experiência em dados',
		aboutHeroTitle: 'Sobre mim',
		aboutHeroTagline:
			'Aqui compartilho um pouco da minha trajetória profissional, experiência em dados e os caminhos que me trouxeram até aqui.',
		aboutPortraitAlt: 'Felipe Campelo em contexto de trabalho',

		contactHeading: 'Vamos fazer network?',
		contactCta: 'Mande-me uma mensagem',

		skillsBlock1Title: 'Maturidade Comprovada',
		skillsBlock1Body:
			'Experiência sólida em engenharia de dados, analytics, DevOps e MLOps, atuando em ambientes produtivos de alta complexidade.',
		skillsBlock2Title: 'Liderança Técnica',
		skillsBlock2Body:
			'Experiência como Team Lead técnico, apoiando times, definindo padrões e tomando decisões arquiteturais com visão de longo prazo.',
		skillsBlock3Title: 'Foco em impacto',
		skillsBlock3Body:
			'Foco em gerar valor real para o negócio, transformando dados em soluções práticas, escaláveis e mensuráveis.',

		notFoundTitle: 'Página não encontrada | Felipe Campelo',
		notFoundDescription: 'Erro 404 — esta página não existe',
		notFoundHero: 'Página não encontrada',
		notFoundTagline: 'O conteúdo que você procura não está disponível.',
	},
	en: {
		siteTitle: 'Felipe Campelo',
		siteDescription: 'The personal site of Felipe Campelo',
		navHome: 'Home',
		navWork: 'Projects',
		navAbout: 'About',
		navMenu: 'Menu',
		localeShortPt: 'PT',
		localeShortEn: 'EN',
		localeSwitchToPt: 'View in Portuguese',
		localeSwitchToEn: 'View in English',
		themeToggleSr: 'Toggle light and dark color theme',
		footerCopyright: 'Felipe Campelo',

		homeMetaTitle: 'Felipe Campelo',
		homeMetaDescription: 'The personal site of Felipe Campelo',
		heroTitle: 'Hi, my name is Felipe Campelo',
		heroTagline:
			'Senior data engineer with broad hands-on experience across modern data, analytics, and platform technologies.',
		certificationsHeading: 'Certifications',
		certificationsIntro: 'Key certifications I have earned along the way.',
		dataStackHeading: 'Data stack',
		dataStackIntro:
			'Tools I have used in production as a data engineer, across consulting and product companies.',
		stackCloud: 'Cloud & infra',
		stackDataEng: 'Data engineering',
		stackAnalytics: 'Analytics & BI',
		stackMlops: 'MLOps & machine learning',
		stackDevops: 'DevOps & observability',
		featuredHeading: 'Featured projects',
		featuredIntro:
			'A selection of recent work across different contexts and business challenges.',
		viewAll: 'View all',
		portraitAlt: 'Felipe Campelo smiling in a red plaid shirt and tortoise shell glasses',

		workMetaTitle: 'Projects | Felipe Campelo',
		workMetaDescription: "Felipe Campelo's recent data and platform projects",
		workHeroTitle: 'Projects',
		workHeroTagline:
			'Projects I have delivered throughout my career, across different challenges and business contexts.',
		workBackLink: 'Projects',

		aboutMetaTitle: 'About | Felipe Campelo',
		aboutMetaDescription: 'Professional background and data engineering experience',
		aboutHeroTitle: 'About me',
		aboutHeroTagline:
			'A concise view of my path in data engineering, leadership, and the experiences that shaped my work.',
		aboutPortraitAlt: 'Felipe Campelo at work',

		contactHeading: 'Let’s connect',
		contactCta: 'Message me on LinkedIn',

		skillsBlock1Title: 'Proven depth',
		skillsBlock1Body:
			'Solid experience in data engineering, analytics, DevOps, and MLOps in complex production environments.',
		skillsBlock2Title: 'Technical leadership',
		skillsBlock2Body:
			'Hands-on team lead experience: mentoring, standards, and architecture decisions with a long-term view.',
		skillsBlock3Title: 'Impact first',
		skillsBlock3Body:
			'Focused on real business outcomes—practical, scalable, and measurable data solutions.',

		notFoundTitle: 'Not found | Felipe Campelo',
		notFoundDescription: '404 — this page was not found',
		notFoundHero: 'Page not found',
		notFoundTagline: 'The page you are looking for is not available.',
	},
} as const satisfies Record<Locale, Record<string, string>>;

export type UiKey = keyof typeof ui.pt;

export function useUi(locale: Locale) {
	return ui[locale];
}
