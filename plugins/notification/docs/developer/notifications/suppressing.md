---
title: "How to Suppress WordPress Notifications Conditionally"
sidebar_label: "Suppressing"
description: "Learn how to suppress WordPress notifications conditionally. Disable entire notifications with filters and conditional logic for testing and control."
sidebar_position: 1
keywords: ["WordPress notification suppression", "disable notifications", "conditional notifications", "notification filters", "suppress carriers", "notification control", "notification testing", "notification logic"]
---

# How to Suppress WordPress Notifications Conditionally

**WordPress notification suppression** enables developers to conditionally disable entire notifications using filters and custom logic. This approach is ideal for testing specific notifications or implementing complex conditional notification delivery based on user data, settings, or environmental factors.

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