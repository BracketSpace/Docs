---
title: "Enable Non-Public Custom Post Types in WordPress Notifications"
sidebar_label: "Non-public post types"
sidebar_position: 3
description: "Learn how to enable non-public custom post types in WordPress notifications. Add support for private post types using filters and understand limitations."
keywords: ["WordPress custom post types", "non-public post types", "private post types", "notification settings", "post type filters", "custom post type support", "WordPress notifications", "post type registration"]
---

# Enable Non-Public Custom Post Types in WordPress Notifications

**WordPress non-public custom post types** require special configuration to work with the Notification plugin. By default, only public post types appear in notification settings, but developers can enable private post types using built-in filters.

```php
add_filter(
    'notification/settings/triggers/valid_post_types',
    function($postTypes)
    {
        // Slug is the key and Singular name is the value.
        $postTypes['non_public_post_type_slug'] = __('Non Public Post Type');
        return $postTypes;
    },
    10,
    2
);
```

:::warning
Not all Merge Tags will be working properly for the private post type, ie. the permalink tag.
:::