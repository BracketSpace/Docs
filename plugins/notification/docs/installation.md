# Installation

Get started with the Notification plugin by following these simple installation steps and initial setup guide.

## Installation Methods

### Method 1: WordPress Admin Dashboard (Recommended)

The easiest way to install the Notification plugin:a

1. **Access Plugin Installation**
   - Log in to your WordPress admin dashboard
   - Navigate to **Plugins → Add New**
   - Search for "Notification BracketSpace"

2. **Install the Plugin**
   - Click **Install Now** on the Notification plugin
   - Wait for the installation to complete
   - Click **Activate** to enable the plugin

3. **Verify Installation**
   - You should see "Notification" in your admin menu
   - A welcome message will appear confirming successful activation

### Method 2: Manual Upload

If you have the plugin files downloaded:

1. **Upload Plugin Files**
   - Download the plugin ZIP file from BracketSpace
   - Go to **Plugins → Add New → Upload Plugin**
   - Choose the ZIP file and click **Install Now**
   - Click **Activate Plugin**

### Method 3: FTP Installation

For advanced users with FTP access:

1. **Extract and Upload**
   - Extract the plugin ZIP file on your computer
   - Upload the `notification` folder to `/wp-content/plugins/`
   - Login to WordPress admin and go to **Plugins**
   - Find "Notification" and click **Activate**

## System Requirements

Before installing, ensure your system meets these requirements:

### WordPress Requirements
- **WordPress Version**: 5.0 or higher (6.0+ recommended)
- **PHP Version**: 7.4 or higher (8.0+ recommended)
- **MySQL**: 5.6+ or MariaDB 10.1+
- **Memory Limit**: 256MB minimum (512MB+ recommended)

### Server Requirements
- **Execution Time**: 30 seconds minimum for imports
- **File Permissions**: WordPress must be able to create/modify files
- **cURL Extension**: Required for external API integrations
- **JSON Extension**: Required for data processing

### Compatibility Check
The plugin is compatible with:
- ✅ WordPress Multisite
- ✅ Popular themes (Astra, OceanWP, GeneratePress)
- ✅ Page builders (Elementor, Gutenberg, Divi)
- ✅ Caching plugins (WP Rocket, W3 Total Cache)
- ✅ Security plugins (Wordfence, Sucuri)

## Initial Setup

### First-Time Configuration

After activation, you'll see a setup wizard:

1. **Welcome Screen**
   - Review plugin features and capabilities
   - Click **Get Started** to begin setup

2. **Basic Settings**
   - **Site Name**: Confirm your site name for notifications
   - **Admin Email**: Verify admin email address
   - **Timezone**: Set your preferred timezone

3. **Default Triggers**
   - Choose which WordPress events to monitor
   - Recommended: User registration, post publishing, comments
   - You can modify these later

### Essential Configuration Steps

#### 1. Configure Email Settings
```
Navigate to: Notification → Settings → General
- From Name: Your site name or organization
- From Email: noreply@yoursite.com (valid email address)
- Email Template: Choose default template style
```

#### 2. Set Up Basic Notifications
```
Go to: Notification → Add New
- Title: "Welcome New Users"
- Trigger: User registration
- Recipient: New user
- Template: Welcome email template
```

#### 3. Test Email Delivery
- Send a test notification to verify email functionality
- Check spam folders if emails don't arrive
- Configure SMTP if needed for better delivery

### Quick Start Templates

The plugin includes ready-to-use templates:

#### User Notifications
- **Welcome Email**: Sent to new users upon registration
- **Password Reset**: Custom password reset notifications
- **Profile Update**: Confirmation of profile changes

#### Admin Notifications  
- **New User**: Alert admins of new registrations
- **New Post**: Notify when content is published
- **New Comment**: Alert for comment moderation

#### Content Notifications
- **Post Published**: Notify subscribers of new content
- **Comment Reply**: Notify users of comment responses
- **Newsletter**: Regular updates to subscribers

## Post-Installation Steps

### 1. Verify Functionality
- [ ] Plugin appears in admin menu
- [ ] Settings page is accessible
- [ ] No PHP errors in debug log
- [ ] Email test successful

### 2. Configure Triggers
- [ ] Enable relevant WordPress triggers
- [ ] Set up custom triggers if needed
- [ ] Test trigger functionality
- [ ] Configure trigger priorities

### 3. Design Templates
- [ ] Customize email templates
- [ ] Add your branding/logo
- [ ] Set up responsive templates
- [ ] Test across email clients

### 4. Set Up Recipients
- [ ] Configure user roles and recipients
- [ ] Set up mailing lists
- [ ] Import existing subscribers
- [ ] Test recipient targeting

## Common Installation Issues

### Plugin Activation Errors

**Error: "Plugin could not be activated"**
- **Cause**: PHP version incompatibility
- **Solution**: Update PHP to 7.4 or higher
- **Alternative**: Contact hosting provider

**Error: "Fatal error: Cannot redeclare function"**
- **Cause**: Plugin conflict or duplicate installation
- **Solution**: Deactivate conflicting plugins, remove duplicate files

### Email Delivery Issues

**Emails not sending**
- Check WordPress email functionality
- Install SMTP plugin (WP Mail SMTP recommended)
- Verify server email configuration
- Check firewall/hosting restrictions

**Emails in spam folder**
- Configure SPF/DKIM records
- Use authenticated SMTP service
- Improve email content and templates
- Warm up sender reputation

### Performance Issues

**Slow admin dashboard**
- Increase PHP memory limit
- Optimize database queries
- Check for plugin conflicts
- Consider caching solutions

## Getting Help

### Documentation Resources
- [Notification Documentation](/notification) - Complete guides
- [Video Tutorials](https://bracketspace.com/tutorials) - Visual walkthroughs
- [Knowledge Base](https://bracketspace.com/docs) - Common solutions

### Support Channels
- **Plugin Support**: [WordPress.org forums](https://wordpress.org/support/plugin/notification/)
- **Premium Support**: support@bracketspace.com
- **Community**: [BracketSpace Facebook Group](https://facebook.com/groups/bracketspace)

### Before Contacting Support
Please provide:
- WordPress version
- Plugin version
- PHP version
- Active theme and plugins list
- Error messages or screenshots
- Steps to reproduce the issue

## Next Steps

After successful installation:

1. **Basic Configuration** - Set up core settings
2. **Creating Triggers** - Define when notifications send  
3. **Template Design** - Customize notification appearance
4. **Advanced Features** - Explore powerful options

Ready to create your first notification? The documentation for these features is coming soon.