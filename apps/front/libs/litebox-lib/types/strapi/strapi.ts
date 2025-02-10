/**
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/strapi-1-0-0-4c774d4bdb3b43a69e2fa42a79d8a2de
 */

export interface StrapiDefaultAttributes {
	createdAt: string;
	publishedAt: string;
	updatedAt: string;
}

export interface StrapiData<T> {
	data: T;
}

export interface StrapiAttributes<TAttributes extends object> {
	id: number;
	attributes: TAttributes;
}

export interface StrapiBaseMedia extends StrapiDefaultAttributes {
	name: string;
	alternativeText: string;
	caption: string;
	width: number;
	height: number;
	formats: {
		[k in 'large' | 'medium' | 'small' | 'thumbnail']: {
			ext: string;
			url: string;
			hash: string;
			mime: string;
			name: string;
			path: string | null;
			size: number;
			width: number;
			height: number;
		};
	};
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string | null;
	provider: string;
	provider_metadata: string | null;
	placeholder: string | null;
}

export type StrapiAttributesMedia = StrapiAttributes<StrapiBaseMedia>;
export type StrapiMedia = StrapiData<StrapiAttributesMedia>;
export type StrapiMultipleMedia = StrapiData<StrapiAttributesMedia[]>;

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

export interface StrapiParagraph extends StrapiDefaultAttributes {
	content: string;
	tag: string;
}

export interface StrapiContentNavigation extends StrapiDefaultAttributes {
	content: string;
	tag: string;
}
