# AI FOUNDRY

## Overview

This is the marketing site for AIFoundry, there are two apps implemented:

1. **Marketing site**: The frontend for the AIFoundry.org web site
2. **Strapi**: Here, you'll find the content management system (CMS) that powers our marketing site, making it easy for us to create and manage content (blog articles).

## Development Environment Variables

### Environment Variables for `front`

```
NEXT_PUBLIC_STRAPI_BASE_URL=
NEXT_PUBLIC_STRAPI_API_TOKEN=
NEXT_PUBLIC_HIDE_SECTIONS=
```

### Environment Variables for `strapi`

```
HOST=0.0.0.0
PORT=1337
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified
JWT_SECRET=tobemodified
```

## Project Folder Structure

```
├── README.md
├── apps
│   ├── front
│   │   ├── README.md
│   │   ├── app
│   │   │   ├── (default_site)
│   │   │   │   ├── blog
│   │   │   │   │   ├── [slug]
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   ├── layout.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   └── terms-and-conditions
│   │   │   │       └── page.tsx
│   │   │   ├── [...not-found]
│   │   │   │   ├── layout.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── favicon.ico
│   │   │   ├── globals.css
│   │   │   ├── robots.ts
│   │   │   └── sitemap.ts
│   │   ├── backend
│   │   │   └── blog
│   │   │       ├── actions.ts
│   │   │       └── queries.ts
│   │   ├── components
│   │   │   ├── blog
│   │   │   │   ├── desktop
│   │   │   │   │   ├── Article.tsx
│   │   │   │   │   ├── ArticleThumbnail.tsx
│   │   │   │   │   ├── ArticlesList.tsx
│   │   │   │   │   ├── Filters.tsx
│   │   │   │   │   └── Main.tsx
│   │   │   │   ├── mobile
│   │   │   │   │   ├── Article.tsx
│   │   │   │   │   ├── ArticleThumbnail.tsx
│   │   │   │   │   ├── ArticlesList.tsx
│   │   │   │   │   ├── Filters.tsx
│   │   │   │   │   └── Main.tsx
│   │   │   │   └── universal
│   │   │   │       ├── ArticlesContainer.tsx
│   │   │   │       ├── ArticlesContainerType.tsx
│   │   │   │       ├── ArticlesListPropsType.tsx
│   │   │   │       ├── ArticlesMainContainer.tsx
│   │   │   │       ├── ArticlesMainContainerType.tsx
│   │   │   │       ├── FiltersType.tsx
│   │   │   │       ├── Input.tsx
│   │   │   │       └── SearchInput.tsx
│   │   │   ├── blogSlug
│   │   │   │   ├── desktop
│   │   │   │   │   ├── Author.tsx
│   │   │   │   │   ├── Content.tsx
│   │   │   │   │   ├── Headline.tsx
│   │   │   │   │   ├── Main.tsx
│   │   │   │   │   └── RelatedArticles.tsx
│   │   │   │   ├── mobile
│   │   │   │   │   ├── Author.tsx
│   │   │   │   │   ├── Content.tsx
│   │   │   │   │   ├── Headline.tsx
│   │   │   │   │   ├── Main.tsx
│   │   │   │   │   └── RelatedArticles.tsx
│   │   │   │   └── universal
│   │   │   │       └── SocialLink.tsx
│   │   │   ├── common
│   │   │   │   ├── desktop
│   │   │   │   │   ├── Announcement.tsx
│   │   │   │   │   ├── ArticleTag.tsx
│   │   │   │   │   ├── Footer.tsx
│   │   │   │   │   ├── Header.tsx
│   │   │   │   │   ├── NavBar.tsx
│   │   │   │   │   └── RelatedArticleTag.tsx
│   │   │   │   ├── mobile
│   │   │   │   │   ├── Announcement.tsx
│   │   │   │   │   ├── ArticleTag.tsx
│   │   │   │   │   ├── Footer.tsx
│   │   │   │   │   ├── Header.tsx
│   │   │   │   │   └── NavBar.tsx
│   │   │   │   └── universal
│   │   │   │       ├── FadeDown.tsx
│   │   │   │       ├── FadeIn.tsx
│   │   │   │       ├── FadeUp.tsx
│   │   │   │       ├── ImageWrapper.tsx
│   │   │   │       ├── LazyAnimation.tsx
│   │   │   │       ├── LottiePlayer.tsx
│   │   │   │       └── Spinner.tsx
│   │   │   ├── home
│   │   │   │   ├── desktop
│   │   │   │   │   ├── Community.tsx
│   │   │   │   │   ├── CommunityCard.tsx
│   │   │   │   │   ├── Faqs.tsx
│   │   │   │   │   ├── FaqsModal.tsx
│   │   │   │   │   ├── FindOutMore.tsx
│   │   │   │   │   ├── Hero.tsx
│   │   │   │   │   ├── InTheNews.tsx
│   │   │   │   │   ├── JoinTheAiRevolution.tsx
│   │   │   │   │   ├── LatestInsights.tsx
│   │   │   │   │   ├── OpenSourceProjects.tsx
│   │   │   │   │   ├── OpenSourceProjectsCard.tsx
│   │   │   │   │   ├── OurCompanyDivider.tsx
│   │   │   │   │   ├── Testimonials.tsx
│   │   │   │   │   ├── VisionMission.tsx
│   │   │   │   │   └── VisionMissionCard.tsx
│   │   │   │   └── mobile
│   │   │   │       ├── Community.tsx
│   │   │   │       ├── CommunityCard.tsx
│   │   │   │       ├── Faqs.tsx
│   │   │   │       ├── FaqsModal.tsx
│   │   │   │       ├── FindOutMore.tsx
│   │   │   │       ├── Hero.tsx
│   │   │   │       ├── InTheNews.tsx
│   │   │   │       ├── JoinTheAiRevolution.tsx
│   │   │   │       ├── LatestInsights.tsx
│   │   │   │       ├── OpenSourceProjects.tsx
│   │   │   │       ├── OurCompanyDivider.tsx
│   │   │   │       ├── Testimonials.tsx
│   │   │   │       ├── VisionMission.tsx
│   │   │   │       └── VisionMissionCard.tsx
│   │   │   ├── notFound
│   │   │   │   ├── desktop
│   │   │   │   │   └── Header.tsx
│   │   │   │   ├── mobile
│   │   │   │   │   └── Header.tsx
│   │   │   │   └── universal
│   │   │   │       └── Content.tsx
│   │   │   └── termsAndConditions
│   │   │       ├── desktop
│   │   │       │   └── Main.tsx
│   │   │       └── mobile
│   │   │           └── Main.tsx
│   │   ├── eslint.config.mjs
│   │   ├── hooks
│   │   │   ├── useDebounce.tsx
│   │   │   ├── useOnEnterView.tsx
│   │   │   ├── useQueryString.tsx
│   │   │   └── useScrollToElement.tsx
│   │   ├── libs
│   │   │   └── litebox-lib
│   │   │       ├── hooks
│   │   │       │   └── useScrollLock.ts
│   │   │       ├── types
│   │   │       │   └── strapi
│   │   │       │       ├── strapi.ts
│   │   │       │       └── strapiBlog.ts
│   │   │       ├── ui
│   │   │       │   ├── Accordion
│   │   │       │   │   └── Accordion.tsx
│   │   │       │   ├── Button
│   │   │       │   │   └── Button.tsx
│   │   │       │   ├── Input
│   │   │       │   │   └── Input.tsx
│   │   │       │   ├── Modal
│   │   │       │   │   └── Modal.tsx
│   │   │       │   └── Spinner
│   │   │       │       └── Spinner.tsx
│   │   │       └── utils
│   │   │           ├── cn.ts
│   │   │           └── fetchStrapi.ts
│   │   ├── mock
│   │   │   └── home
│   │   │       ├── community
│   │   │       │   └── data.json
│   │   │       ├── faqs
│   │   │       │   └── data.json
│   │   │       ├── inTheNews
│   │   │       │   └── data.json
│   │   │       ├── openSourceProjects
│   │   │       │   └── data.json
│   │   │       ├── testimonials
│   │   │       │   └── data.json
│   │   │       └── visionMission
│   │   │           └── data.json
│   │   ├── next-env.d.ts
│   │   ├── next.config.ts
│   │   ├── package.json
│   │   ├── postcss.config.mjs
│   │   ├── public
│   │   │   ├── fonts
│   │   │   │   └── HostGrotesk-VariableFont_wght.ttf
│   │   │   ├── imgs
│   │   │   │   ├── blog
│   │   │   │   │   ├── background.webp
│   │   │   │   │   ├── backgroundMobile.webp
│   │   │   │   │   ├── computer.webp
│   │   │   │   │   ├── computerMobile.webp
│   │   │   │   │   ├── titleErrors.webp
│   │   │   │   │   └── titleErrorsMobile.webp
│   │   │   │   ├── blogSlug
│   │   │   │   │   ├── arrowLeft.webp
│   │   │   │   │   ├── arrows.webp
│   │   │   │   │   ├── backgroundDecorations.webp
│   │   │   │   │   ├── backgroundRelatedPosts.webp
│   │   │   │   │   ├── backgroundRelatedPostsMobile.webp
│   │   │   │   │   ├── error.webp
│   │   │   │   │   ├── errorMobile.webp
│   │   │   │   │   ├── graffiti.webp
│   │   │   │   │   ├── graffitiMobile.webp
│   │   │   │   │   ├── instagramIcon.webp
│   │   │   │   │   ├── linkedinIcon.webp
│   │   │   │   │   ├── paper.webp
│   │   │   │   │   └── xIcon.webp
│   │   │   │   ├── footer
│   │   │   │   │   ├── arrowsMobile.webp
│   │   │   │   │   ├── bucket.webp
│   │   │   │   │   ├── bucketMobile.webp
│   │   │   │   │   ├── code.webp
│   │   │   │   │   ├── codeMobile.webp
│   │   │   │   │   ├── dots.webp
│   │   │   │   │   ├── errors.webp
│   │   │   │   │   ├── errorsMobile.webp
│   │   │   │   │   ├── graffiti.webp
│   │   │   │   │   ├── graffitiMobile.webp
│   │   │   │   │   ├── logo.webp
│   │   │   │   │   └── logoMobile.webp
│   │   │   │   ├── header
│   │   │   │   │   ├── hamburger.webp
│   │   │   │   │   └── headerArrowUpRight.webp
│   │   │   │   ├── home
│   │   │   │   │   ├── community
│   │   │   │   │   │   ├── backgroundMobile.webp
│   │   │   │   │   │   ├── calendar.webp
│   │   │   │   │   │   ├── cam.webp
│   │   │   │   │   │   ├── circle.webp
│   │   │   │   │   │   ├── error.webp
│   │   │   │   │   │   └── position.webp
│   │   │   │   │   ├── faqs
│   │   │   │   │   │   ├── banner.webp
│   │   │   │   │   │   ├── bannerMobile.webp
│   │   │   │   │   │   └── chevron.webp
│   │   │   │   │   ├── findOutMore
│   │   │   │   │   │   ├── background.webp
│   │   │   │   │   │   ├── backgroundMobile.webp
│   │   │   │   │   │   ├── badge.webp
│   │   │   │   │   │   ├── badgeMobile.webp
│   │   │   │   │   │   ├── bottomGraffitiMobile.webp
│   │   │   │   │   │   ├── code.webp
│   │   │   │   │   │   ├── codeMobile.webp
│   │   │   │   │   │   ├── cursorDown.webp
│   │   │   │   │   │   ├── cursorDownMobile.webp
│   │   │   │   │   │   ├── cursorUp.webp
│   │   │   │   │   │   ├── cursorUpMobile.webp
│   │   │   │   │   │   ├── errors.webp
│   │   │   │   │   │   ├── errorsMobile.webp
│   │   │   │   │   │   ├── iconsMobile.webp
│   │   │   │   │   │   ├── maraAvatar.webp
│   │   │   │   │   │   ├── starMobile.webp
│   │   │   │   │   │   ├── susanAvatar.webp
│   │   │   │   │   │   └── topGraffitiMobile.webp
│   │   │   │   │   ├── hero
│   │   │   │   │   │   ├── arrow.webp
│   │   │   │   │   │   ├── arrowMobile.webp
│   │   │   │   │   │   ├── backgroundMobile.webp
│   │   │   │   │   │   ├── circle.webp
│   │   │   │   │   │   ├── circleMobile.webp
│   │   │   │   │   │   ├── errors.webp
│   │   │   │   │   │   ├── joinString.webp
│   │   │   │   │   │   ├── pluses.webp
│   │   │   │   │   │   ├── plusesMobile.webp
│   │   │   │   │   │   ├── punchCard.webp
│   │   │   │   │   │   ├── punchCardMobile.webp
│   │   │   │   │   │   └── theNetworkString.webp
│   │   │   │   │   ├── inTheNews
│   │   │   │   │   │   └── logoCnn.webp
│   │   │   │   │   ├── joinTheAiRevolution
│   │   │   │   │   │   ├── arrows.webp
│   │   │   │   │   │   ├── arrowsMobile.webp
│   │   │   │   │   │   ├── background.webp
│   │   │   │   │   │   ├── backgroundMobile.webp
│   │   │   │   │   │   ├── computer.webp
│   │   │   │   │   │   ├── verticalText.webp
│   │   │   │   │   │   └── verticalTextMobile.webp
│   │   │   │   │   ├── latestInsights
│   │   │   │   │   │   ├── backgroundMobile.webp
│   │   │   │   │   │   ├── backgroundTitle.webp
│   │   │   │   │   │   ├── graffitiBottom.webp
│   │   │   │   │   │   ├── graffitiMobile.webp
│   │   │   │   │   │   ├── graffitiTop.webp
│   │   │   │   │   │   ├── llamaEvent.webp
│   │   │   │   │   │   ├── podcast.webp
│   │   │   │   │   │   └── productionStack.webp
│   │   │   │   │   ├── navbar
│   │   │   │   │   │   └── backgroundMobile.webp
│   │   │   │   │   ├── openSourceProjects
│   │   │   │   │   │   ├── arrowUpRight.webp
│   │   │   │   │   │   ├── arrowUpRightMobile.webp
│   │   │   │   │   │   └── background.webp
│   │   │   │   │   ├── testimonials
│   │   │   │   │   │   ├── backgroundBottom.webp
│   │   │   │   │   │   ├── backgroundBottomMobile.webp
│   │   │   │   │   │   ├── backgroundTop.webp
│   │   │   │   │   │   ├── backgroundTopMobile.webp
│   │   │   │   │   │   ├── companyWebflow.webp
│   │   │   │   │   │   ├── developer1.webp
│   │   │   │   │   │   ├── doodle.webp
│   │   │   │   │   │   ├── doodleMobile.webp
│   │   │   │   │   │   ├── starEmpty.webp
│   │   │   │   │   │   ├── starFull.webp
│   │   │   │   │   │   ├── whatPeopleSayMobile.webp
│   │   │   │   │   │   └── whatPeopleSaying.webp
│   │   │   │   │   └── visionMission
│   │   │   │   │       ├── circle.webp
│   │   │   │   │       ├── circleMobile.webp
│   │   │   │   │       ├── error.webp
│   │   │   │   │       ├── errorMobile.webp
│   │   │   │   │       ├── graffiti.webp
│   │   │   │   │       └── graffitiMobile.webp
│   │   │   │   ├── notFound
│   │   │   │   │   ├── error.webp
│   │   │   │   │   ├── errorMobile.webp
│   │   │   │   │   ├── graffiti.webp
│   │   │   │   │   ├── graffitiMobile.webp
│   │   │   │   │   ├── numbers.webp
│   │   │   │   │   ├── numbersMobile.webp
│   │   │   │   │   ├── paper.webp
│   │   │   │   │   ├── paperMobile.webp
│   │   │   │   │   ├── pluses.webp
│   │   │   │   │   ├── plusesMobile.webp
│   │   │   │   │   ├── vertical_404.webp
│   │   │   │   │   └── vertical_notFound.webp
│   │   │   │   ├── og
│   │   │   │   │   ├── og_blog.png
│   │   │   │   │   └── og_home.png
│   │   │   │   ├── sideMenu
│   │   │   │   │   ├── AIFoundryLogoMobile.webp
│   │   │   │   │   └── closeButton.webp
│   │   │   │   └── termsAndConditions
│   │   │   │       ├── background.webp
│   │   │   │       └── backgroundMobile.webp
│   │   │   ├── lotties
│   │   │   │   ├── googles.lottie
│   │   │   │   ├── marquee.lottie
│   │   │   │   ├── marqueeMobile.lottie
│   │   │   │   └── navbarLogo.lottie
│   │   │   ├── next.svg
│   │   │   ├── svgs
│   │   │   │   ├── common
│   │   │   │   │   ├── ArrowUpRight.tsx
│   │   │   │   │   ├── ArrowUpRightMobile.tsx
│   │   │   │   │   ├── Discord.tsx
│   │   │   │   │   ├── Github.tsx
│   │   │   │   │   ├── Instagram.tsx
│   │   │   │   │   ├── Linkedin.tsx
│   │   │   │   │   ├── Plus.tsx
│   │   │   │   │   ├── ScrollArrowLeftMobile.tsx
│   │   │   │   │   ├── ScrollArrowRightMobile.tsx
│   │   │   │   │   └── Youtube.tsx
│   │   │   │   ├── findOutMore
│   │   │   │   │   ├── ArrowDown.tsx
│   │   │   │   │   ├── ArrowRight.tsx
│   │   │   │   │   └── ProjectArrowDown.tsx
│   │   │   │   ├── home
│   │   │   │   │   └── testimonials
│   │   │   │   │       ├── companyWebflow.svg
│   │   │   │   │       └── companyWebflow.tsx
│   │   │   │   └── ourCoreValues
│   │   │   │       ├── cooperation.tsx
│   │   │   │       ├── empathy.tsx
│   │   │   │       ├── integrity.tsx
│   │   │   │       └── openness.tsx
│   │   │   └── vercel.svg
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   └── utils
│   │       ├── getReadTime.tsx
│   │       └── getStrapiMediaUrl.ts
│   └── strapi
│       ├── README.md
│       ├── config
│       │   ├── admin.ts
│       │   ├── api.ts
│       │   ├── database.ts
│       │   ├── middlewares.ts
│       │   ├── plugins.ts
│       │   └── server.ts
│       ├── database
│       │   └── migrations
│       ├── favicon.png
│       ├── package.json
│       ├── public
│       │   ├── robots.txt
│       │   └── uploads
│       │       ├── Tanya_Dadasheva_3c4e48d905.png
│       │       ├── ai_Event_b2ab9a9c4c.png
│       │       ├── llama_Event_ad44dccb84.png
│       │       ├── low_Level_Event_96e1a78fb2.png
│       │       ├── medium_ai_Event_b2ab9a9c4c.png
│       │       ├── medium_llama_Event_ad44dccb84.png
│       │       ├── medium_low_Level_Event_96e1a78fb2.png
│       │       ├── small_ai_Event_b2ab9a9c4c.png
│       │       ├── small_llama_Event_ad44dccb84.png
│       │       ├── small_low_Level_Event_96e1a78fb2.png
│       │       ├── thumbnail_ai_Event_b2ab9a9c4c.png
│       │       ├── thumbnail_llama_Event_ad44dccb84.png
│       │       └── thumbnail_low_Level_Event_96e1a78fb2.png
│       ├── src
│       │   ├── admin
│       │   │   ├── app.example.tsx
│       │   │   ├── tsconfig.json
│       │   │   └── vite.config.example.ts
│       │   ├── api
│       │   │   ├── article
│       │   │   │   ├── content-types
│       │   │   │   │   └── article
│       │   │   │   │       └── schema.json
│       │   │   │   ├── controllers
│       │   │   │   │   └── article.ts
│       │   │   │   ├── routes
│       │   │   │   │   └── article.ts
│       │   │   │   └── services
│       │   │   │       └── article.ts
│       │   │   ├── author
│       │   │   │   ├── content-types
│       │   │   │   │   └── author
│       │   │   │   │       └── schema.json
│       │   │   │   ├── controllers
│       │   │   │   │   └── author.ts
│       │   │   │   ├── routes
│       │   │   │   │   └── author.ts
│       │   │   │   └── services
│       │   │   │       └── author.ts
│       │   │   ├── blog
│       │   │   │   ├── content-types
│       │   │   │   │   └── blog
│       │   │   │   │       └── schema.json
│       │   │   │   ├── controllers
│       │   │   │   │   └── blog.ts
│       │   │   │   ├── routes
│       │   │   │   │   └── blog.ts
│       │   │   │   └── services
│       │   │   │       └── blog.ts
│       │   │   └── tag
│       │   │       ├── content-types
│       │   │       │   └── tag
│       │   │       │       └── schema.json
│       │   │       ├── controllers
│       │   │       │   └── tag.ts
│       │   │       ├── routes
│       │   │       │   └── tag.ts
│       │   │       └── services
│       │   │           └── tag.ts
│       │   ├── components
│       │   │   ├── article
│       │   │   │   ├── content-navigation.json
│       │   │   │   └── paragraphs.json
│       │   │   ├── common
│       │   │   │   └── seo.json
│       │   │   └── seo
│       │   │       └── metadata.json
│       │   ├── extensions
│       │   └── index.ts
│       ├── tsconfig.json
│       └── types
│           └── generated
│               ├── components.d.ts
│               └── contentTypes.d.ts
├── commitlint.config.js
├── package-lock.json
├── package.json
├── packages
│   └── eslint-config-custom
│       ├── index.js
│       └── package.json
├── turbo.json
└── yarn.lock

```

## Running the Marketing Site

To run the marketing site, follow these steps:

1. Navigate to the marketing site directory with: `cd apps/front`
2. Populate the `.env` file with the correct values based on the `.env.example` file
3. Modify the `next.config.ts` file as shown below:
```
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ["<strapi_url_domain>"],
    },
};

export default nextConfig;

```
to enable the images to be loaded correctly from strapi. The url <strapi_url_domain> does not
need the https:// part (i.e. "strapi.ai-foundry.litebox.dev").
4. Install the necessary dependencies with: `yarn install`
5. Start the development server with: `yarn dev`

## Running Strapi

To run Strapi, follow these steps:

1. Populate the `.env` file with the correct values based on the `.env.example` file.
2. Navigate to the Strapi directory with: `cd apps/strapi`.
3. Install the necessary dependencies with: `yarn install`.
4. Start the development server with: `yarn develop`.