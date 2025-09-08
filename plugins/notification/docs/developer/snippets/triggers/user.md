---
title: "WordPress User Notification Code Snippets"
sidebar_label: "User triggers"
sidebar_position: 2
description: "WordPress user notification code examples. Learn how to extend user triggers with additional merge tags and user-related functionality."
keywords: ["WordPress user notifications", "user trigger snippets", "user registered notifications", "user merge tags", "WordPress user hooks", "notification examples", "user registration", "user profile notifications"]
---

# WordPress User Notification Code Snippets

**WordPress user notification code examples** show how to enhance default user triggers with additional merge tags and functionality. These snippets demonstrate extending user registration notifications with profile information and custom user data.

## Adding default Merge Tags to "User registered" Trigger

```php
use BracketSpace\Notification\Defaults\MergeTag;

add_action(
    'notification/trigger/merge_tags',
    function($trigger) {
        if ($trigger->getSlug() !== 'user/registered') {
            return;
        }

        $trigger->addMergeTag(new MergeTag\User\UserNicename());
        $trigger->addMergeTag(new MergeTag\User\UserDisplayName());
        $trigger->addMergeTag(new MergeTag\User\UserFirstName());
        $trigger->addMergeTag(new MergeTag\User\UserLastName());
        $trigger->addMergeTag(new MergeTag\User\UserBio());
    }
);
```