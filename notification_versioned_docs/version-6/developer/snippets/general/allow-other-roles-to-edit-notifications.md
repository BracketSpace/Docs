---
id: allow-other-roles-to-edit-notifications
title: Allow other roles to edit Notifications
sidebar_label: Allow other roles to edit Notifications
sidebar_position: 3
---

# Allow Other Roles to Edit Notifications

By default, only administrators can edit notifications. You can allow other roles to manage notifications.

```php
// Allow editors to manage notifications
add_filter('notification/capability', function($capability) {
    return 'edit_posts';
});

// Or allow specific roles
add_action('init', function() {
    $role = get_role('editor');
    $role->add_cap('manage_notifications');
});

add_filter('notification/capability', function($capability) {
    return 'manage_notifications';
});
```