import { StrapiDefaultAttributes, StrapiMedia, StrapiMultipleMedia } from './strapi';

export interface StrapiAuthor {
	name: string;
	role?: string;
	profileImage: StrapiMedia;
	description?: string;
	youtube_link?: string;
	linkedin_link?: string;
	instagram_link?: string;
}

export interface StrapiSeoComponent {
	title?: string;
	description?: string;
	canonical?: string;
	openGraphUrl?: string;
	openGraphImages?: StrapiMultipleMedia;
	openGraphSiteName?: string;
	twitterSiteId?: string;
	twitterCardType?: 'summary' | 'summary_large_image' | 'player' | 'app';
	twitterCreatorId?: string;
}

export interface StrapiParagraphContentChildren {
	type: string;
	text: string;
}

export interface StrapiParagraphContent {
	type: string;
	children: StrapiParagraphContentChildren[];
}

export interface StrapiParagraph {
	id: number;
	content: StrapiParagraphContent[];
	tag: string;
	alternativeStyle: boolean;
}

export interface StrapiContentNavigation {
	content: string;
	tag: string;
}

export interface StrapiTag {
    id: string;
    name: string;
}
export interface StrapiArticle extends StrapiDefaultAttributes {
    id: number;
    slug: string;
    title: string;
    coverImage: StrapiMedia;
    seo: StrapiSeoComponent;
    authors: StrapiAuthor[];
    date: string;
    paragraphs: StrapiParagraph[];
    contentNavigation: StrapiContentNavigation[];
    tags: StrapiTag[];
	relatedArticles?: StrapiArticle[];
}

export interface StrapiBlogDataFeaturedArticle {
	id: number;
}
export interface StrapiBlogData {
	featuredArticle: StrapiBlogDataFeaturedArticle;
}