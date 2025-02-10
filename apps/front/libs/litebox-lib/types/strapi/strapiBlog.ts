import { StrapiDefaultAttributes, StrapiMedia, StrapiData, StrapiAttributes, StrapiAuthor, StrapiSeoComponent, StrapiParagraph, StrapiContentNavigation } from './strapi';

export interface StrapiArticle extends StrapiDefaultAttributes {
    id: number;
    slug: string;
    title: string;
    coverImage: StrapiMedia;
    seo: StrapiSeoComponent;
    authors: StrapiData<StrapiAttributes<StrapiAuthor>[]>;
    date: string;
    paragraph: StrapiData<StrapiAttributes<StrapiParagraph>[]>;
    contentNavigation: StrapiData<StrapiAttributes<StrapiContentNavigation>[]>;
}