---
id: runtime
title: Runtime
sidebar_position: 6
---

# Runtime

The plugin initializes itself on action `init` with priority `5` (see the [loading chain](./plugin-loading-chain.md)) so after this hook you can access the whole Runtime object with a simple wrapper class.

To get the Runtime object:

```php
$runtime = \Notification::runtime();
```

To get the Runtime component:

```php
$cache = \Notification::component( 'core_cache' );
```

::: note
Please note the `Notification` class lives in the global namespace.
:::



