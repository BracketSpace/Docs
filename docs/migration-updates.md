# Updates & Migrations

BracketSpace plugin updates are distributed through the standard WordPress update mechanism to ensure seamless and secure updates.

## How Plugin Updates Work

### WordPress Dashboard Updates
All BracketSpace plugins receive updates through the standard WordPress Dashboard update system:

- **Free plugins**: Available directly through WordPress.org repository
- **Premium plugins**: Require valid licenses to receive updates
- **Automatic checks**: WordPress checks for updates automatically
- **One-click updates**: Install updates directly from the Dashboard

### Automatic Database Migrations
Plugin database migrations and schema updates happen automatically after plugin updates:

- **Schema updates**: Database structure changes are applied automatically
- **Data migrations**: Existing data is migrated to new formats when needed  
- **Version tracking**: Plugin versions are tracked to ensure proper migration sequences
- **Error handling**: Migration errors are logged for troubleshooting

:::warning Always Backup Before Updates
Database migrations are automatic but irreversible. Always create a complete backup of your website (files and database) before updating any plugin. This allows you to restore your site if any issues occur during the update process.
:::

## License Requirements

Premium BracketSpace plugins require active licenses to receive updates:

- **License validation**: Valid license key must be entered in plugin settings
- **Update notifications**: Only appear when license is active
- **Security updates**: Critical security patches require valid licenses
- **Feature updates**: New features and improvements need active licenses

## Development Migrations

For development-specific upgrade procedures, custom database migrations, or advanced integration scenarios, please refer to the specific plugin documentation:

- [Notification Plugin Documentation](/notification/)
- [Advanced Cron Manager Documentation](/advanced-cron-manager/)
- [Pretty Email Documentation](/pretty-email/)
- [Easy Watermark Documentation](/easy-watermark/)

Each plugin's documentation contains detailed information about:
- Custom hook implementations during updates
- Developer-specific migration procedures  
- API changes between versions
- Custom database modifications
- Integration considerations

For technical support with complex migrations or custom implementations, contact [BracketSpace Support](https://bracketspace.com/help-center/).