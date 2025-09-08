---
id: suppressing-carrier
title: Suppressing the Carrier
sidebar_label: Suppressing Carrier
sidebar_position: 2
---

# Suppressing the Carrier

You can suppress carriers from executing under certain conditions using filters and actions.

## Using the suppressing filter

```php
add_filter('notification/carrier/suppress', function($suppress, $carrier, $trigger) {
    // Suppress email carrier for specific post types
    if ($carrier->get_slug() === 'email' && $trigger->get_slug() === 'post_published') {
        $post = $trigger->get_subject();
        if ($post->post_type === 'private_post_type') {
            return true;
        }
    }
    
    return $suppress;
}, 10, 3);
```

## Conditional suppression

You can suppress carriers based on:
- User roles and capabilities  
- Post meta values
- Custom field values
- Time-based conditions
- External API responses