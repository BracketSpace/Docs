---
title: Runtime
sidebar_position: 2
---

# Runtime

The plugin initializes itself on action `init` with priority `5` (see the [loading chain](./plugin-loading-chain)) so after this hook, you can access the whole Runtime object with a simple wrapper class. Within the Runtime, we invoke certain singletons, accessible by their class names.

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