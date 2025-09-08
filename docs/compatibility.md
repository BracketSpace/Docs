# Plugin Compatibility

Our plugins are designed to work with most WordPress themes and plugins. Specific requirements for WordPress and PHP versions are included within each plugin's documentation.

## General Compatibility

All BracketSpace plugins work with properly coded WordPress themes and plugins that:
- Follow WordPress coding standards
- Use standard WordPress hooks and filters
- Don't override core WordPress functionality

## Common Issues

Some plugin types may require special attention:

**Caching Plugins**: May need to exclude our plugin files from optimization or clear cache after updates.

**Security Plugins**: Aggressive firewalls might block AJAX requests - add exceptions if needed.

**Performance Plugins**: File minification can break JavaScript functionality - exclude our plugin files if issues occur.

## Troubleshooting Conflicts

### Plugin Conflict Detection
1. **Deactivate all plugins** except ours
2. **Test functionality** - does it work now?
3. **Reactivate one by one** to find the culprit
4. **Find alternative** or contact plugin author

### Theme Conflict Detection  
1. **Switch to default theme** (Twenty Twenty-Four)
2. **Test plugin features** - working now?
3. **Contact theme developer** about compatibility

### Getting Help
When reporting conflicts, provide:
- WordPress and PHP versions
- Active theme name/version
- List of active plugins
- Specific error messages
- Steps to reproduce the issue

**Support Channels:**
- [Contact our support team](/docs/support)
- Plugin-specific documentation
- WordPress.org support forums

## Best Practices

- Always backup before installing new plugins
- Test new plugins in staging environment first
- Keep WordPress, PHP, and plugins updated
- Monitor error logs after making changes
- Research plugin compatibility before installation