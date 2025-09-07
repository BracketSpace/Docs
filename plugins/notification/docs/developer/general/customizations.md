---
title: Customizations
description: How to add customizations from a plugin or child theme.
sidebar_position: 5
---

# Customizations

Whether you want to customize the Notification plugin from a child theme or a plugin the workflow stays the same for both of the approaches.

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

See [Creating an Extension](./creating-an-extension) for more details.