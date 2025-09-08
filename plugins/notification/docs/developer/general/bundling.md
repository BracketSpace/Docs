---
title: "How to Bundle WordPress Notification Plugin as Library"
sidebar_label: "Bundling"
sidebar_position: 6
description: "Learn how to bundle WordPress Notification plugin as a library in your themes and plugins. Simple integration guide for developers using plugin as dependency."
keywords: ["WordPress plugin bundling", "plugin library", "notification plugin integration", "plugin dependency", "WordPress development", "ACF-style bundling", "plugin embedding", "library integration"]
---

# How to Bundle WordPress Notification Plugin as Library

**WordPress Notification plugin bundling** enables developers to include the notification system as a library within custom themes and plugins, similar to Advanced Custom Fields. This integration approach provides seamless notification functionality without requiring users to install a separate plugin.

One difference is that you don't have to define anything. Just include the plugin's _load.php_ file like this:

```php
require_once( 'path/to/plugin/notification/load.php' );
```

Notification will figure out its paths and URLs.

:::note
When bundled, the Notification initializes on `init 4` to make sure it gets the priority. Notification plugin instantinated as a normal plugin is ignored.
:::