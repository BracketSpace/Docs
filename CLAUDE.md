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
- Commit each change to git with below guidelines

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
- Images, should live close to the markdown files

## Deployment
- Hosted on Cloudflare Pages
- Auto-deploy from main branch

## Implementation Plan

### Phase 1: Initial Setup
- [x] Set up Docusaurus v3 project with TypeScript configuration
- [x] Remove the blog feature
- [x] Configure multi-doc setup with main site and 4 plugin subsites

### Phase 2: Infrastructure
- [x] Set up Cloudflare Pages deployment with custom domain
- [x] Design main documentation site with plugin references
- [ ] Create base theme and BracketSpace branding

### Phase 3: Content Migration
- [ ] Process Gitbook markdown files for compatibility
- [ ] Migrate Notification plugin docs with addon pages
- [ ] Migrate Advanced Cron Manager docs with addon pages
- [ ] Migrate Pretty Email docs with addon pages
- [ ] Migrate Easy Watermark docs with addon pages
- [ ] Ensure URL routing is the same as existing SEO structure
- [ ] Common docs copy

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
