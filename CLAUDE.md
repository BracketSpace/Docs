# BracketSpace Documentation Website

## Project Overview
Documentation website for BracketSpace plugins at docs.bracketspace.com

## Tech Stack
- **Framework**: Docusaurus v3
- **Language**: TypeScript
- **Hosting**: Cloudflare Pages
- **Content Migration**: From existing Gitbook documentation

## Architecture
- Multi-doc setup with separate subsites for each plugin
- Plugin subsites:
  - Notification
  - Advanced Cron Manager
  - Pretty Email
  - Easy Watermark

## Development

- Ensure the `npm run dev` works in the background and website compiles without the errors
- Perform typecheck and linting before commiting anything
- Commit each change to git with below guidelines (or using a global commit agent, if available)

### Commits

**Change Type Detection:**
- New functionality/features → `feat`
- Bug fixes → `fix`
- Code restructuring without behavior changes → `refactor`
- Performance improvements → `perf`
- Documentation updates → `docs`
- Test additions/updates → `test`
- Build process, dependencies, tooling → `chore`
- Code formatting, whitespace → `style`

**Breaking Changes:**
- API signature changes → `feat!` or `fix!`
- Removed functionality → `feat!`
- Major dependency updates → `chore!`

**Commit Message Generation**

Follow Conventional Commits format:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

**Guidelines:**
- Keep description under 50 characters
- Use imperative mood ("add", "fix", "update", not "added", "fixed", "updated")
- No period at the end of the description
- Include scope when it adds clarity (e.g., `feat(auth)`, `fix(api)`)
- Add body for complex changes explaining the reasoning

### Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run typecheck` - Run TypeScript checks
- `npm run lint` - Run linting

### Content Guidelines

#### Link Structure Rules
- **Internal Navigation**: Use relative links for all internal documentation references
- **Same Directory**: Link directly to `.md` files: `[Link Text](filename.md)`
- **Subdirectories**: Use relative paths: `[Link Text](subdirectory/filename.md)`
- **Parent Directories**: Navigate up with `../`: `[Link Text](../parent/filename.md)`
- **Cross-Section Links**: Maintain directory structure: `[Link Text](../../other-section/filename.md)`
- **Avoid Absolute URLs**: Never use full URLs for internal site navigation
- **Link Verification**: Always verify target files exist before creating links

#### Asset Management Rules
- **Image Storage**: Store all images in `assets/` folder at plugin documentation root level
- **File Naming**: Use descriptive, SEO-friendly filenames (e.g., `email-template-settings-panel.png`)
- **Avoid Generic Names**: Never use generic names like `image-1.png`, `obraz-9.png`, `screenshot.png`
- **Relative References**: Reference images with relative paths from markdown files
- **Organization**: Group related assets logically within the assets directory

#### Documentation Structure
- **Directory Hierarchy**: Keep related content in logical directory structures
- **Index Pages**: Use `index.md` files for section landing pages
- **Consistent Naming**: Follow kebab-case for file and directory names
- **Version Consistency**: Maintain identical link structures across versioned documentation

### SEO Guidelines

All documentation pages must follow these SEO optimization rules to improve search engine visibility and user discoverability across all BracketSpace plugins.

#### Meta Headers Requirements

Every markdown page MUST include optimized frontmatter metadata:

```yaml
---
title: "Descriptive, Keyword-Rich Title (50-60 characters)"
sidebar_label: "Concise Navigation Label"
sidebar_position: 1
description: "Compelling meta description that includes primary keywords and describes user benefits (150-160 characters)"
keywords: ["primary keyword", "secondary keyword", "related term", "plugin name", "feature variant", "search intent term"]
# Never modify existing slug values to preserve URLs
slug: /existing-path
---
```

**Title Optimization Patterns:**
- **Plugin Homepage**: `"[Plugin Name] - WordPress [Main Function] Plugin"`
- **Installation Pages**: `"How to Install [Plugin Name] - Setup & License Guide"`
- **Feature Pages**: `"[Feature Name] in WordPress - [Plugin Name] Guide"`
- **Integration Pages**: `"[Integration Name] [Integration Type] - [Primary Benefit]"`
- **Settings Pages**: `"[Setting Type] Settings - [Purpose/Benefit]"`

#### Content Optimization Rules

**Opening Paragraph Standards:**
- First paragraph MUST contain primary keywords naturally
- Begin with bold definition sentence: `**[Feature/Plugin] is a [description]** that [benefit]`
- Include secondary keywords within first 100 words
- Focus on user benefits, not just technical features
- Use "What is...", "How to...", or "Why use..." formats for better search intent

**Content Structure Requirements:**
- H1 heading should include primary keyword
- H2 subheadings should contain related keywords when natural
- Use keyword-rich but natural language throughout
- All images MUST include alt tags, that should contain related keywords
- Include FAQ-style questions for voice search optimization
- Add "Learn more about..." or "See also..." sections for internal linking

#### Keyword Strategy Framework

**Primary Keyword Categories:**
- **Core Function**: What the plugin/feature does (`email template builder`, `cron manager`, `notification system`)
- **Platform Context**: WordPress-specific terms (`WordPress email templates`, `WordPress notifications`)
- **User Intent**: How users search (`how to create`, `customize`, `setup guide`)
- **Integration Terms**: Plugin compatibility (`WooCommerce integration`, `Gravity Forms templates`)

**Keyword Implementation:**
- **Title**: 1-2 primary keywords
- **Description**: Primary keyword + benefit-focused language
- **Keywords Array**: 6-8 terms including synonyms, plurals, and related searches
- **Content**: Natural keyword density (~1-2%), focus on semantic relevance
- **Image Alt Text**: Descriptive with relevant keywords when appropriate

#### Technical SEO Standards

**URL Structure:**
- NEVER modify existing slug values to preserve SEO and user bookmarks
- All internal links must use relative paths
- Verify all internal links point to existing files

**Image Optimization:**
- Use descriptive, SEO-friendly filenames (not generic names like `image-1.png`)
- All images MUST include alt text
- Alt text must be descriptive and include keywords when relevant
- Organize images in plugin-specific `assets/` folders

**Internal Linking:**
- Use keyword-rich anchor text for internal links
- Link between related topics and integrations
- Create logical content hierarchies with proper breadcrumbs

#### Quality Assurance

Before publishing any documentation:
- Run `npm run build` and `npm run typecheck` to ensure no errors
- Verify all internal links work correctly
- Check that keywords appear naturally in content
- Ensure titles and descriptions fit character limits
- Confirm no existing URLs have been changed

#### Plugin-Specific Applications

**For Existing Plugins:**
- **Notification**: Focus on automation, WordPress events, email notifications
- **Advanced Cron Manager**: Target cron jobs, task scheduling, WordPress automation
- **Pretty Email**: Emphasize email templates, Gutenberg editor, email design
- **Easy Watermark**: Target image protection, watermarking, WordPress media

**For Future Plugins:**
- Research competitor keywords and search volumes
- Identify user search patterns for the plugin category
- Create keyword clusters around main features and use cases
- Plan content hierarchy that supports SEO goals from launch

These guidelines ensure consistent, high-quality SEO implementation across all documentation while maintaining excellent user experience and content quality.

## Deployment
- Hosted on Cloudflare Pages
- Auto-deploy from main branch
