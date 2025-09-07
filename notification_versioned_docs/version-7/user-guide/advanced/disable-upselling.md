---
id: disable-upselling
title: Disable upselling
sidebar_label: Disable upselling
sidebar_position: 5
---

# Disable upselling

To disable the plugin upselling (free and paid extension promo messages), simply use the following filter:

```php
add_filter( 'notification/upselling', '__return_false' );
```

You can use this filter in your child theme's function.php or within your custom plugin.

Upselling is automatically disabled when White label mode is active. Read more:

[White label mode](../../developer/general/white-label-mode)