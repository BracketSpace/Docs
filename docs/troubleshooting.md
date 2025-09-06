# How to Diagnose Errors

Having trouble with one of our plugins? This guide will help you identify and resolve common issues quickly.

## Common Error Types

### Plugin Not Activating
If a plugin won't activate, check:
- **WordPress Version**: Ensure you're running a supported WordPress version
- **PHP Version**: Check that your server meets minimum PHP requirements
- **Memory Limits**: Increase PHP memory limit if needed
- **Plugin Conflicts**: Deactivate other plugins temporarily to test

### Features Not Working
When plugin features aren't working as expected:
- Clear any caching plugins
- Check for theme conflicts by switching to a default theme
- Verify plugin settings are configured correctly
- Look for JavaScript errors in browser console

## Enable Debug Mode

To get detailed error information, enable WordPress debug mode:

```php
// Add to wp-config.php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

## Error Log Locations

Check these locations for error logs:
- `/wp-content/debug.log` - WordPress debug log
- Server error logs (location varies by hosting provider)

## Step-by-Step Troubleshooting

### 1. Plugin Conflict Test
1. Deactivate all other plugins
2. Test if the issue persists
3. If resolved, reactivate plugins one by one to identify conflicts

### 2. Theme Conflict Test
1. Switch to a default WordPress theme (Twenty Twenty-Four)
2. Test the functionality
3. If it works, the issue is theme-related

### 3. Clear Caches
- Clear any caching plugin caches
- Clear browser cache
- Clear any CDN caches

### 4. Check Server Requirements
- PHP version: 7.4 or higher recommended
- Memory limit: 256MB or higher
- MySQL version: 5.6 or higher

## Still Need Help?

If you've followed these steps and still experience issues:
1. Document the exact error message
2. Note when the problem started
3. List steps to reproduce the issue
4. [Contact our support team](/docs/support) with these details

Remember to include your WordPress version, plugin version, and active theme when reporting issues.

## Diagnosing Specific Error Types

Should you encounter any error while using the plugin, please try to find the exact error you can report to our team in the support thread message. This will help us recognize the essence of the problem and then solve the problem faster.

### Diagnose JavaScript Errors in the Browser

To diagnose errors through the browser, you just need to follow a few simple steps which are listed and explained in the [WordPress support article](https://wordpress.org/support/article/using-your-browser-to-diagnose-javascript-errors/).

### Diagnose Server Errors

All the PHP-related errors like notices, warnings, and fatal errors are logged by the server. The best way to access them is to ask your hosting provider for the `error_log` file or try to search for that in your hosting panel or in FTP.

The other possible way to get the errors is to **temporarily** enable WP DEBUG mode like [described in this article](https://blog.hubspot.com/website/how-to-set-up-wordpress-error-logs-in-wp-config).

:::warning
Please remember to disable the WP DEBUG mode as soon as you finish debugging as this might create a security breach and affect your website performance.
:::