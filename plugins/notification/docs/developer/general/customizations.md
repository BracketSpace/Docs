---
title: "WordPress Notification Plugin Customization Guide"
sidebar_label: "Customizations"
description: "Learn how to customize WordPress Notification plugin from child themes and plugins. Follow best practices for plugin extensions and theme integrations."
sidebar_position: 5
keywords: ["WordPress plugin customization", "notification plugin hooks", "child theme integration", "plugin extension", "WordPress development", "custom triggers", "notification API", "plugin modification"]
---

# WordPress Notification Plugin Customization Guide

**WordPress Notification plugin customization** provides developers with flexible integration options for both child themes and custom plugins. The workflow remains consistent across both approaches, allowing you to extend notification functionality while maintaining update compatibility.

All you need to do is create a file somewhere within your codebase and include it when the Notification plugin is ready.

```php
add_action( 'notification/init', function() {
	require_once __DIR__ . '/includes/notification.php'
} );
```

From this file, you are free to use all the classes Notification provides and register any custom elements like Triggers or Carriers.

:::warning
Always use a [child theme](https://developer.wordpress.org/themes/advanced-topics/child-themes/) when customizing your theme, otherwise, all your changes will be overwritten by an update.
:::

For bigger customizations, we suggest creating a full extension plugin.

See [Creating an Extension](creating-an-extension.md) for more details.