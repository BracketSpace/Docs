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

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run typecheck` - Run TypeScript checks
- `npm run lint` - Run linting

## Deployment
- Hosted on Cloudflare Pages
- Auto-deploy from main branch

## Implementation Plan

### Phase 1: Initial Setup
- [x] Set up Docusaurus v3 project with TypeScript configuration
- [ ] Remove the blog feature
- [ ] Configure multi-doc setup with main site and 4 plugin subsites
- [ ] Create URL routing to maintain existing SEO structure

### Phase 2: Infrastructure
- [ ] Set up Cloudflare Pages deployment with custom domain
- [ ] Design main documentation site with plugin references
- [ ] Create base theme and BracketSpace branding

### Phase 3: Content Migration
- [ ] Process Gitbook markdown files for compatibility
- [ ] Migrate Notification plugin docs with addon pages
- [ ] Migrate Advanced Cron Manager docs with addon pages
- [ ] Migrate Pretty Email docs with addon pages
- [ ] Migrate Easy Watermark docs with addon pages

### Phase 4: SEO & Features
- [ ] Set up redirects from old URLs to preserve SEO
- [ ] Implement versioning for plugin documentation
- [ ] Configure search across main site and all subsites
- [ ] Set up SEO optimization with existing meta tags

### Phase 5: Deployment & Testing
- [ ] Create automated build and deployment pipeline
- [ ] Test all plugin documentation migrations
- [ ] Validate SEO preservation and URL structure
- [ ] Set up analytics and monitoring
- [ ] Perform final testing and launch
