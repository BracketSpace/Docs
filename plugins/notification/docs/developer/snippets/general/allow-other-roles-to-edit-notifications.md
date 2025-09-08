---
title: "Allow WordPress User Roles to Edit Notifications"
sidebar_label: "User roles permissions"
sidebar_position: 2
description: "Learn how to allow different WordPress user roles to edit notifications. Configure capabilities for editors and other roles to manage notifications."
keywords: ["WordPress user roles", "notification permissions", "user capabilities", "editor role", "WordPress permissions", "post type capabilities", "notification access", "role management"]
---

# Allow WordPress User Roles to Edit Notifications

**WordPress notification user roles** can be configured to allow editors and other user roles to manage notifications beyond administrators. This code example shows how to modify post type capabilities to grant notification management permissions to different user roles.

In the example below, you are allowing everyone with an editor role or greater to manage the notifications.

```php
add_filter(
    'notification/post_type/capabilities',
    function($capabilities) {
        return [
            'edit_post' => 'publish_posts',
            'read_post' => 'publish_posts',
            'delete_post' => 'publish_posts',
            'edit_posts' => 'publish_posts',
            'edit_others_posts' => 'publish_posts',
            'delete_posts' => 'publish_posts',
            'publish_posts' => 'publish_posts',
            'read_private_posts' => 'publish_posts',
        ];
    }
);
```

:::danger
Please note that the capability the user has to have is `unfiltered_html`. Otherwise, the notification configuration won't be saved properly.
:::