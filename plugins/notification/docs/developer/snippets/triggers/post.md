---
title: "WordPress Post Notification Code Snippets"
sidebar_label: "Post triggers"
sidebar_position: 1
description: "WordPress post notification code examples. Learn how to extend post triggers with private posts, custom statuses and advanced functionality."
keywords: ["WordPress post notifications", "post trigger snippets", "private post notifications", "custom post statuses", "post published notifications", "post updated notifications", "WordPress hooks", "notification examples"]
---

# WordPress Post Notification Code Snippets

**WordPress post notification code examples** demonstrate how to extend default post triggers with custom functionality. These snippets show you how to include private posts, add custom post statuses, and enhance post-related notification triggers.

## Post published - include private posts

```php
add_action(
    'notification/trigger/registered',
    function($trigger) {
        if ($trigger->getSlug() !== 'post/post/published') {
            return;
        }

        $trigger->addAction('new_to_private', 10);
        $trigger->addAction('auto-draft_to_private', 10);
        $trigger->addAction('draft_to_private', 10);
        $trigger->addAction('pending_to_private', 10);
        $trigger->addAction('future_to_private', 10);
    }
);
```

## Post updated - add other post statuses

```php
add_filter(
    'notification/trigger/wordpress/post/updated/statuses',
    function($statuses, $postType) {
        if ($postType === 'my-post-type') {
            $statuses[] = 'on-hold';
        } 
        
        return $statuses;
    },
    10,
    2 
);
```