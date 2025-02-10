import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsBottomSlides extends Struct.ComponentSchema {
  collectionName: 'components_about_us_bottom_slides';
  info: {
    displayName: 'bottom_slides';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface AboutUsCompanies extends Struct.ComponentSchema {
  collectionName: 'components_about_us_companies';
  info: {
    description: '';
    displayName: 'companies';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
    partner: Schema.Attribute.String;
    partner_link: Schema.Attribute.String;
  };
}

export interface AboutUsFounders extends Struct.ComponentSchema {
  collectionName: 'components_about_us_founders';
  info: {
    description: '';
    displayName: 'founders';
  };
  attributes: {
    description: Schema.Attribute.Text;
    picture: Schema.Attribute.Media<'images'>;
    picture_text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsGeneralApplication extends Struct.ComponentSchema {
  collectionName: 'components_about_us_general_applications';
  info: {
    description: '';
    displayName: 'general_application';
  };
  attributes: {
    CTA_link: Schema.Attribute.String;
    CTA_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    show_on_website: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsHero extends Struct.ComponentSchema {
  collectionName: 'components_about_us_heroes';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    button_CTA_text: Schema.Attribute.String;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
    video_poster: Schema.Attribute.Media<'images'>;
  };
}

export interface AboutUsIndividualInvestors extends Struct.ComponentSchema {
  collectionName: 'components_about_us_individual_investors';
  info: {
    displayName: 'individual_investors';
  };
  attributes: {
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
  };
}

export interface AboutUsInvestors extends Struct.ComponentSchema {
  collectionName: 'components_about_us_investors';
  info: {
    description: '';
    displayName: 'investors';
  };
  attributes: {
    companies: Schema.Attribute.Component<'about-us.companies', true>;
    individual_investors: Schema.Attribute.Component<'about-us.individual-investors', true>;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsMediaKitBanner extends Struct.ComponentSchema {
  collectionName: 'components_about_us_media_kit_banners';
  info: {
    description: '';
    displayName: 'media_kit_banner';
  };
  attributes: {
    button_CTA_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    media_kit_files: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsOpenPositions extends Struct.ComponentSchema {
  collectionName: 'components_about_us_open_positions';
  info: {
    description: '';
    displayName: 'open_positions';
  };
  attributes: {
    empty_state: Schema.Attribute.Component<'open-positions.empty-state', false>;
    general_application: Schema.Attribute.Component<'about-us.general-application', false>;
    more_details_text_link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsOurCulture extends Struct.ComponentSchema {
  collectionName: 'components_about_us_our_cultures';
  info: {
    description: '';
    displayName: 'our_culture';
  };
  attributes: {
    bottom_slides: Schema.Attribute.Component<'about-us.bottom-slides', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 4;
        },
        number
      >;
    first_paragraph: Schema.Attribute.Text;
    second_paragraph: Schema.Attribute.Text;
    slider_tag_1: Schema.Attribute.String;
    slider_tag_2: Schema.Attribute.String;
    slider_tag_3: Schema.Attribute.String;
    title: Schema.Attribute.String;
    top_slides: Schema.Attribute.Component<'about-us.top-slides', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 4;
        },
        number
      >;
  };
}

export interface AboutUsOurResolve extends Struct.ComponentSchema {
  collectionName: 'components_about_us_our_resolves';
  info: {
    description: '';
    displayName: 'our_resolve';
  };
  attributes: {
    first_description_text: Schema.Attribute.Text;
    fourth_description_text: Schema.Attribute.Text;
    main_text: Schema.Attribute.Text;
    second_description_text: Schema.Attribute.Text;
    third_description_text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsPostalAddress extends Struct.ComponentSchema {
  collectionName: 'components_about_us_postal_addresses';
  info: {
    displayName: 'postal_address';
  };
  attributes: {
    addressCountry: Schema.Attribute.String;
    addressLocality: Schema.Attribute.String;
    addressRegion: Schema.Attribute.String;
  };
}

export interface AboutUsSlides extends Struct.ComponentSchema {
  collectionName: 'components_about_us_slides';
  info: {
    displayName: 'slides';
  };
  attributes: {
    first_text: Schema.Attribute.String;
    lead_title: Schema.Attribute.String;
    second_text: Schema.Attribute.String;
  };
}

export interface AboutUsStructuredDataMarkup extends Struct.ComponentSchema {
  collectionName: 'components_about_us_structured_data_markups';
  info: {
    description: '';
    displayName: 'structured_data_markup';
  };
  attributes: {
    description: Schema.Attribute.Text;
    foundingDate: Schema.Attribute.String;
    logo: Schema.Attribute.String;
    name: Schema.Attribute.String;
    postal_address: Schema.Attribute.Component<'about-us.postal-address', false>;
    url: Schema.Attribute.String;
  };
}

export interface AboutUsTopSlides extends Struct.ComponentSchema {
  collectionName: 'components_about_us_top_slides';
  info: {
    displayName: 'top_slides';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface BookADemoLogoImages extends Struct.ComponentSchema {
  collectionName: 'components_book_a_demo_logo_images';
  info: {
    description: '';
    displayName: 'logo_images';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

export interface BookADemoLogos extends Struct.ComponentSchema {
  collectionName: 'components_book_a_demo_logos';
  info: {
    displayName: 'logos';
  };
  attributes: {
    logos_images: Schema.Attribute.Component<'book-a-demo.logo-images', true>;
    title: Schema.Attribute.String;
  };
}

export interface BookADemoQuote extends Struct.ComponentSchema {
  collectionName: 'components_book_a_demo_quotes';
  info: {
    displayName: 'quote';
  };
  attributes: {
    author: Schema.Attribute.String;
    author_company: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
  };
}

export interface CommonChildrenLinks extends Struct.ComponentSchema {
  collectionName: 'components_common_children_links';
  info: {
    displayName: 'children_links';
  };
  attributes: {
    href: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CommonLink extends Struct.ComponentSchema {
  collectionName: 'components_common_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface CommonSeo extends Struct.ComponentSchema {
  collectionName: 'components_common_seos';
  info: {
    description: '';
    displayName: 'SEO';
  };
  attributes: {
    canonical: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    openGraphImages: Schema.Attribute.Media<'images', true>;
    openGraphSiteName: Schema.Attribute.String;
    openGraphUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
    twitterCardType: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'summary_large_image'>;
    twitterCreatorId: Schema.Attribute.String;
    twitterSiteId: Schema.Attribute.String;
  };
}

export interface CommonSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_common_social_links';
  info: {
    displayName: 'social_links';
    icon: 'bulletList';
  };
  attributes: {
    social_medias: Schema.Attribute.Relation<'oneToMany', 'api::social-media.social-media'>;
    title: Schema.Attribute.String;
  };
}

export interface CommonSubscribeTo extends Struct.ComponentSchema {
  collectionName: 'components_common_subscribe_tos';
  info: {
    displayName: 'SubscribeTo';
  };
  attributes: {
    bottomClarification: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    inputPlaceholder: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CustomerPostFeaturing extends Struct.ComponentSchema {
  collectionName: 'components_customer_post_featurings';
  info: {
    description: '';
    displayName: 'featuring';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String;
  };
}

export interface CustomerPostHighlights extends Struct.ComponentSchema {
  collectionName: 'components_customer_post_highlights';
  info: {
    description: '';
    displayName: 'highlights';
  };
  attributes: {
    description: Schema.Attribute.String;
    iconType: Schema.Attribute.Enumeration<['none', 'arrowUp', 'arrowDown']> & Schema.Attribute.DefaultTo<'none'>;
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface CustomerBookADemoBanner extends Struct.ComponentSchema {
  collectionName: 'components_customer_book_a_demo_banners';
  info: {
    description: '';
    displayName: 'book_a_demo_banner';
  };
  attributes: {
    button_CTA_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 15;
      }>;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 55;
      }>;
  };
}

export interface CustomerHero extends Struct.ComponentSchema {
  collectionName: 'components_customer_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CustomerStructuredDataMarkup extends Struct.ComponentSchema {
  collectionName: 'components_customer_structured_data_markups';
  info: {
    displayName: 'structured_data_markup';
  };
  attributes: {
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface FooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface HeaderLogo extends Struct.ComponentSchema {
  collectionName: 'components_header_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    logo: Schema.Attribute.Component<'common.link', false>;
  };
}

export interface HeaderPagesLinks extends Struct.ComponentSchema {
  collectionName: 'components_header_pages_links';
  info: {
    description: '';
    displayName: 'pages_links';
  };
  attributes: {
    links: Schema.Attribute.Component<'common.link', true>;
  };
}

export interface HomepageAgenticAi extends Struct.ComponentSchema {
  collectionName: 'components_homepage_agentic_ais';
  info: {
    description: '';
    displayName: 'agentic_ai';
  };
  attributes: {
    items: Schema.Attribute.Component<'homepage.items', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageCards extends Struct.ComponentSchema {
  collectionName: 'components_homepage_cards';
  info: {
    description: '';
    displayName: 'cards';
  };
  attributes: {
    button_CTA_link: Schema.Attribute.String & Schema.Attribute.Required;
    button_CTA_text: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface HomepageCommonIssues extends Struct.ComponentSchema {
  collectionName: 'components_homepage_common_issues';
  info: {
    description: '';
    displayName: 'common_issues';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageCommonProductionIssues extends Struct.ComponentSchema {
  collectionName: 'components_homepage_common_production_issues';
  info: {
    description: '';
    displayName: 'Common Production Issues';
  };
  attributes: {
    product_slides: Schema.Attribute.Component<'product.product-slides', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_heroes';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    button_CTA_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 15;
      }>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 270;
      }>;
    logos: Schema.Attribute.Component<'homepage.logo', true>;
    logos_title: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    video: Schema.Attribute.Component<'homepage.video', false>;
  };
}

export interface HomepageHowDoesResolveWorks extends Struct.ComponentSchema {
  collectionName: 'components_homepage_how_does_resolve_works';
  info: {
    description: '';
    displayName: 'how_does_resolve_works';
  };
  attributes: {
    cards: Schema.Attribute.Component<'homepage.cards', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 2;
        },
        number
      >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface HomepageItems extends Struct.ComponentSchema {
  collectionName: 'components_homepage_items';
  info: {
    description: '';
    displayName: 'items';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface HomepageLogo extends Struct.ComponentSchema {
  collectionName: 'components_homepage_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

export interface HomepageMarquee extends Struct.ComponentSchema {
  collectionName: 'components_homepage_marquees';
  info: {
    description: '';
    displayName: 'marquee';
  };
  attributes: {
    first_text: Schema.Attribute.String;
    fourth_text: Schema.Attribute.String;
    second_text: Schema.Attribute.String;
    third_text: Schema.Attribute.String;
  };
}

export interface HomepageOurBlog extends Struct.ComponentSchema {
  collectionName: 'components_homepage_our_blogs';
  info: {
    description: '';
    displayName: 'Our Blog';
  };
  attributes: {
    button_CTA_text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageOurCommunity extends Struct.ComponentSchema {
  collectionName: 'components_homepage_our_communities';
  info: {
    description: '';
    displayName: 'our_community';
  };
  attributes: {
    social_medias: Schema.Attribute.Relation<'oneToMany', 'api::social-media.social-media'>;
    title: Schema.Attribute.String;
  };
}

export interface HomepagePost extends Struct.ComponentSchema {
  collectionName: 'components_homepage_posts';
  info: {
    displayName: 'post';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    url: Schema.Attribute.String;
    user: Schema.Attribute.String;
    username: Schema.Attribute.String;
  };
}

export interface HomepageProductSlides extends Struct.ComponentSchema {
  collectionName: 'components_homepage_product_slides';
  info: {
    description: '';
    displayName: 'product_slides';
  };
  attributes: {
    lottie: Schema.Attribute.Media<'files'>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageProductView extends Struct.ComponentSchema {
  collectionName: 'components_homepage_product_views';
  info: {
    description: '';
    displayName: 'product_view';
  };
  attributes: {
    product_slides: Schema.Attribute.Component<'product.product-slides', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageQuotation extends Struct.ComponentSchema {
  collectionName: 'components_homepage_quotations';
  info: {
    description: '';
    displayName: 'quotation';
  };
  attributes: {
    author: Schema.Attribute.String;
    author_link: Schema.Attribute.String;
    company_logo: Schema.Attribute.Media<'images'>;
    job: Schema.Attribute.String;
    picture: Schema.Attribute.Media<'images'>;
    quote: Schema.Attribute.Text;
  };
}

export interface HomepageQuotationsSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_quotations_sections';
  info: {
    displayName: 'quotations_section';
  };
  attributes: {
    slider: Schema.Attribute.Component<'homepage.quotation', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageSlide extends Struct.ComponentSchema {
  collectionName: 'components_homepage_slides';
  info: {
    description: '';
    displayName: 'slide';
  };
  attributes: {
    lottie: Schema.Attribute.Media<'files'>;
    text: Schema.Attribute.String;
  };
}

export interface HomepageSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_homepage_social_links';
  info: {
    displayName: 'social_links';
  };
  attributes: {
    social_medias: Schema.Attribute.Relation<'oneToMany', 'api::social-media.social-media'>;
  };
}

export interface HomepageStructuredDataMarkup extends Struct.ComponentSchema {
  collectionName: 'components_homepage_structured_data_markups';
  info: {
    description: '';
    displayName: 'structured_data_markup';
  };
  attributes: {
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HomepageToilsSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_toils_sections';
  info: {
    description: '';
    displayName: 'toils_section';
  };
  attributes: {
    lottie: Schema.Attribute.Media<'files'>;
    show_on_website: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface HomepageVideo extends Struct.ComponentSchema {
  collectionName: 'components_homepage_videos';
  info: {
    description: '';
    displayName: 'video';
  };
  attributes: {
    play_button_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 15;
      }>;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
    video_poster: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface HomepageWhatIsResolved extends Struct.ComponentSchema {
  collectionName: 'components_homepage_what_is_resolveds';
  info: {
    description: '';
    displayName: 'what_is_resolved';
  };
  attributes: {
    first_main_text: Schema.Attribute.String;
    second_main_text: Schema.Attribute.String;
    show_on_website: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    small_description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomepageWhyUs extends Struct.ComponentSchema {
  collectionName: 'components_homepage_why_uses';
  info: {
    description: '';
    displayName: 'why_us';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 90;
      }>;
    why_us_cards: Schema.Attribute.Component<'homepage.why-us-card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 3;
        },
        number
      >;
  };
}

export interface HomepageWhyUsCard extends Struct.ComponentSchema {
  collectionName: 'components_homepage_why_us_cards';
  info: {
    description: '';
    displayName: 'why_us_card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 350;
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface HomepageWorkWithUsBanner extends Struct.ComponentSchema {
  collectionName: 'components_homepage_work_with_us_banners';
  info: {
    description: '';
    displayName: 'work_with_us_banner';
  };
  attributes: {
    button_CTA_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 55;
      }>;
  };
}

export interface OpenPositionsEmptyState extends Struct.ComponentSchema {
  collectionName: 'components_open_positions_empty_states';
  info: {
    displayName: 'empty_state';
  };
  attributes: {
    description: Schema.Attribute.Text;
    illustration: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface OurAgenticAiHero extends Struct.ComponentSchema {
  collectionName: 'components_our_agentic_ai_heroes';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    button_CTA_text: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 270;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface OurAgenticAiSlides extends Struct.ComponentSchema {
  collectionName: 'components_our_agentic_ai_slides';
  info: {
    description: '';
    displayName: 'slides';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 420;
      }>;
    diamond_color: Schema.Attribute.Enumeration<['gray-50', 'orange-500', 'orange-900', 'green-500', 'green-900']>;
    lottie: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 55;
      }>;
  };
}

export interface OurAgenticAiStructuredDataMarkup extends Struct.ComponentSchema {
  collectionName: 'components_our_agentic_ai_structured_data_markups';
  info: {
    displayName: 'structured_data_markup';
  };
  attributes: {
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ProductBookADemoBanner extends Struct.ComponentSchema {
  collectionName: 'components_product_book_a_demo_banners';
  info: {
    description: '';
    displayName: 'book_a_demo_banner';
  };
  attributes: {
    button_CTA_text: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 15;
      }>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 55;
      }>;
  };
}

export interface ProductHero extends Struct.ComponentSchema {
  collectionName: 'components_product_heroes';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    button_CTA_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface ProductIssuesList extends Struct.ComponentSchema {
  collectionName: 'components_product_issues_lists';
  info: {
    description: '';
    displayName: 'issues_list';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface ProductProductSlides extends Struct.ComponentSchema {
  collectionName: 'components_product_product_slides';
  info: {
    description: '';
    displayName: 'product_slides';
  };
  attributes: {
    background_color: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    lottie: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductProductionIssues extends Struct.ComponentSchema {
  collectionName: 'components_product_production_issues';
  info: {
    displayName: 'production_issues';
  };
  attributes: {
    issues_list: Schema.Attribute.Component<'product.issues-list', true>;
    title: Schema.Attribute.String;
  };
}

export interface ProductStructuredDataMarkup extends Struct.ComponentSchema {
  collectionName: 'components_product_structured_data_markups';
  info: {
    description: '';
    displayName: 'structured_data_markup';
  };
  attributes: {
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SecurityCard extends Struct.ComponentSchema {
  collectionName: 'components_security_cards';
  info: {
    description: '';
    displayName: 'card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    items: Schema.Attribute.JSON;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 55;
      }>;
  };
}

export interface SecurityEnterpriseControl extends Struct.ComponentSchema {
  collectionName: 'components_security_enterprise_controls';
  info: {
    description: '';
    displayName: 'Enterprise Control';
  };
  attributes: {
    tiles: Schema.Attribute.Component<'security.tiles', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
  };
}

export interface SecurityHero extends Struct.ComponentSchema {
  collectionName: 'components_security_heroes';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    button_CTA_text: Schema.Attribute.String;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 270;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface SecurityOrganizationData extends Struct.ComponentSchema {
  collectionName: 'components_security_organization_data';
  info: {
    description: '';
    displayName: 'Organization Data';
  };
  attributes: {
    cards: Schema.Attribute.Component<'security.card', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 2;
        },
        number
      >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 55;
      }>;
  };
}

export interface SecurityStructuredDataMarkup extends Struct.ComponentSchema {
  collectionName: 'components_security_structured_data_markups';
  info: {
    displayName: 'structured_data_markup';
  };
  attributes: {
    description: Schema.Attribute.String;
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SecurityTiles extends Struct.ComponentSchema {
  collectionName: 'components_security_tiles';
  info: {
    description: '';
    displayName: 'tiles';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 270;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface SecurityTrustBanner extends Struct.ComponentSchema {
  collectionName: 'components_security_trust_banners';
  info: {
    description: '';
    displayName: 'trust_banner';
  };
  attributes: {
    button_CTA_link: Schema.Attribute.String;
    button_CTA_text: Schema.Attribute.String;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 270;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
  };
}

export interface SeoMetadata extends Struct.ComponentSchema {
  collectionName: 'components_seo_metadata';
  info: {
    description: '';
    displayName: 'metadata';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    og_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required & Schema.Attribute.DefaultTo<'Resolve.ai'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.bottom-slides': AboutUsBottomSlides;
      'about-us.companies': AboutUsCompanies;
      'about-us.founders': AboutUsFounders;
      'about-us.general-application': AboutUsGeneralApplication;
      'about-us.hero': AboutUsHero;
      'about-us.individual-investors': AboutUsIndividualInvestors;
      'about-us.investors': AboutUsInvestors;
      'about-us.media-kit-banner': AboutUsMediaKitBanner;
      'about-us.open-positions': AboutUsOpenPositions;
      'about-us.our-culture': AboutUsOurCulture;
      'about-us.our-resolve': AboutUsOurResolve;
      'about-us.postal-address': AboutUsPostalAddress;
      'about-us.slides': AboutUsSlides;
      'about-us.structured-data-markup': AboutUsStructuredDataMarkup;
      'about-us.top-slides': AboutUsTopSlides;
      'book-a-demo.logo-images': BookADemoLogoImages;
      'book-a-demo.logos': BookADemoLogos;
      'book-a-demo.quote': BookADemoQuote;
      'common.children-links': CommonChildrenLinks;
      'common.link': CommonLink;
      'common.seo': CommonSeo;
      'common.social-links': CommonSocialLinks;
      'common.subscribe-to': CommonSubscribeTo;
      'customer-post.featuring': CustomerPostFeaturing;
      'customer-post.highlights': CustomerPostHighlights;
      'customer.book-a-demo-banner': CustomerBookADemoBanner;
      'customer.hero': CustomerHero;
      'customer.structured-data-markup': CustomerStructuredDataMarkup;
      'footer.links': FooterLinks;
      'header.logo': HeaderLogo;
      'header.pages-links': HeaderPagesLinks;
      'homepage.agentic-ai': HomepageAgenticAi;
      'homepage.cards': HomepageCards;
      'homepage.common-issues': HomepageCommonIssues;
      'homepage.common-production-issues': HomepageCommonProductionIssues;
      'homepage.hero': HomepageHero;
      'homepage.how-does-resolve-works': HomepageHowDoesResolveWorks;
      'homepage.items': HomepageItems;
      'homepage.logo': HomepageLogo;
      'homepage.marquee': HomepageMarquee;
      'homepage.our-blog': HomepageOurBlog;
      'homepage.our-community': HomepageOurCommunity;
      'homepage.post': HomepagePost;
      'homepage.product-slides': HomepageProductSlides;
      'homepage.product-view': HomepageProductView;
      'homepage.quotation': HomepageQuotation;
      'homepage.quotations-section': HomepageQuotationsSection;
      'homepage.slide': HomepageSlide;
      'homepage.social-links': HomepageSocialLinks;
      'homepage.structured-data-markup': HomepageStructuredDataMarkup;
      'homepage.toils-section': HomepageToilsSection;
      'homepage.video': HomepageVideo;
      'homepage.what-is-resolved': HomepageWhatIsResolved;
      'homepage.why-us': HomepageWhyUs;
      'homepage.why-us-card': HomepageWhyUsCard;
      'homepage.work-with-us-banner': HomepageWorkWithUsBanner;
      'open-positions.empty-state': OpenPositionsEmptyState;
      'our-agentic-ai.hero': OurAgenticAiHero;
      'our-agentic-ai.slides': OurAgenticAiSlides;
      'our-agentic-ai.structured-data-markup': OurAgenticAiStructuredDataMarkup;
      'product.book-a-demo-banner': ProductBookADemoBanner;
      'product.hero': ProductHero;
      'product.issues-list': ProductIssuesList;
      'product.product-slides': ProductProductSlides;
      'product.production-issues': ProductProductionIssues;
      'product.structured-data-markup': ProductStructuredDataMarkup;
      'security.card': SecurityCard;
      'security.enterprise-control': SecurityEnterpriseControl;
      'security.hero': SecurityHero;
      'security.organization-data': SecurityOrganizationData;
      'security.structured-data-markup': SecurityStructuredDataMarkup;
      'security.tiles': SecurityTiles;
      'security.trust-banner': SecurityTrustBanner;
      'seo.metadata': SeoMetadata;
    }
  }
}
