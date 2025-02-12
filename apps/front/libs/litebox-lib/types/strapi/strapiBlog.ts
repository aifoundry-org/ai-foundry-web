import { StrapiDefaultAttributes, StrapiMedia, StrapiMultipleMedia } from './strapi';

export interface StrapiAuthor extends StrapiDefaultAttributes {
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

export interface StrapiParagraph {
	content: string;
	tag: string;
}

export interface StrapiContentNavigation {
	content: string;
	tag: string;
}

export interface StrapiTag extends StrapiDefaultAttributes {
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
    paragraph: StrapiParagraph[];
    contentNavigation: StrapiContentNavigation[];
    tags: StrapiTag[];
}

export interface StrapiBlogDataDeaturedArticle {
	id: number;
}
export interface StrapiBlogData {
	featuredArticle: StrapiBlogDataDeaturedArticle;
}