---
title: "WordPress Notification Plugin Runtime API Reference"
sidebar_label: "Runtime"
sidebar_position: 2
description: "Learn WordPress Notification plugin runtime architecture and API. Access plugin components, settings, and services through PHP runtime methods and singleton patterns."
keywords: ["WordPress plugin runtime", "notification plugin API", "PHP singleton pattern", "plugin architecture", "WordPress init hook", "runtime components", "plugin development", "API reference"]
---

# WordPress Notification Plugin Runtime API Reference

**WordPress Notification plugin runtime system** is the core architecture that manages plugin initialization, component access, and service management. The plugin initializes on WordPress `init` hook with priority 5, providing developers with comprehensive runtime API access for building custom extensions and integrations.

To get the Runtime object:

```php
$runtime = \Notification::runtime();
```

To get the Settings component:

```php
// via the component
use BracketSpace\Notification\Core\Settings;

$settings = \Notification::component(Settings::class);

// or via the alias
$settings = \Notification::settings()
```

To get the plugin version:

```php
$version = \Notification::version();
```

To get the plugin filesystem:

```php
$fs= \Notification::fs();
```

:::note
Please note the `Notification` class lives in the global namespace.
:::