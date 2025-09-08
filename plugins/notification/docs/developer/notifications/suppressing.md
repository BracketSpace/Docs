---
title: Suppressing the Notification
description: Disable all the Carriers at once
sidebar_position: 1
---

# Suppressing the Notification

This is the best approach if you have to test the specific Notification, instead of a single Carrier.

To do this, you should use the filter:

```php
add_filter(
    'notification/should_send',
    function($shouldSend, $notification, $trigger) {
        if ($something) {
            $should_send = false;
        }

        return $should_send;
    },
    10,
    3
);    
```

:::danger
At this point, the Trigger doesn't execute the context() method so you cannot use the Merge Tags. If you rely on Merge Tags, [suppress the Carrier](../carriers/suppressing.md) instead.
:::