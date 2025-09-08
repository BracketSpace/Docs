---
title: "WordPress Notification JSON Synchronization Guide"
sidebar_label: "JSON synchronization"
description: "Learn WordPress notification JSON synchronization. Save notifications as files in themes/plugins, sync between environments like ACF."
sidebar_position: 2
keywords: ["WordPress notification sync", "JSON synchronization", "notification export import", "ACF-style sync", "notification files", "version control", "deployment automation", "notification backup"]
---

# WordPress Notification JSON Synchronization Guide

**WordPress notification JSON synchronization** works similarly to Advanced Custom Fields' sync system, allowing developers to save notifications as JSON files within themes or plugins. This enables version control, deployment automation, and seamless synchronization between development, staging, and production environments.

This is very similar to how Advanced Custom Fields JSON synchronization works. Whenever you save the notification in wp-admin the JSON file with all the config is saved within the directory you specified. It works the other way around as well - if you don't have the notification in your WordPress database, you can pull it from the file.

The notification is sent even if it's just in the file and not in the database, so you can import it just for editing purposes.

### Default usage

```php
use BracketSpace\Notification\Core\Sync;

add_action('notification/init', function () {
	Sync::enable();
}, 5);
```

You can put this code in your custom plugin or your child theme's functions.php file.

By default, all the notifications will be saved within the `wp-content/themes/$theme/notifications/` directory.

### Custom notifications directory

You can put the notifications in a custom directory if you like, just pass the **full path** in the parameter.

To put the notifications within the `wp-content/uploads` directory do it like this:

```php
use BracketSpace\Notification\Core\Sync;

add_action('notification/init', function () {
    $uploadsDir = wp_upload_dir();
    Sync::enable($uploadsDir['basedir']);
}, 5);
```

:::note
The Notification plugin supports only one synchronization directory
:::