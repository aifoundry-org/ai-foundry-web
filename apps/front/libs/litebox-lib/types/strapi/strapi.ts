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
	meta: {
		pagination: {
			start: number,
			limit: number,
			total: number
		}
	}
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

export type StrapiAttributesMedia = StrapiBaseMedia;
export type StrapiMedia = StrapiAttributesMedia;
export type StrapiMultipleMedia = StrapiAttributesMedia[];
