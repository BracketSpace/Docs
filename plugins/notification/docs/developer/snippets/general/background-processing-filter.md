---
title: "WordPress Notification Background Processing Control"
sidebar_label: "Background processing"
sidebar_position: 4
description: "Control WordPress notification background processing with filters. Enable or disable background processing for specific triggers with conditional logic."
keywords: ["WordPress background processing", "notification performance", "trigger processing", "async notifications", "notification filters", "performance optimization", "background tasks", "notification control"]
---

# WordPress Notification Background Processing Control

**WordPress notification background processing** can be controlled on a per-trigger basis using filters, allowing developers to optimize performance by enabling or disabling asynchronous processing for specific notification triggers based on requirements and server capabilities.

Regardless of the [setting in Dashboard](../../../../user-guide/advanced/background-processing) you can enable or disable background processing for a particular Trigger with a simple filter. You can reference [default Triggers](../../triggers/default-triggers.md) here.

## Disable Triggers

```php
add_filter(
    'notification/trigger/process_in_background',
    function($enabled, $trigger) {
        $disabledSlugs = [
            'user/registered',
            'user/login',
        ];

        if (in_array($trigger->getSlug(), $disabledSlugs, true)) {
            return false;
        }

        return $enabled;
    },
    10,
    2
);
```

## Enable Triggers

```php
add_filter(
    'notification/trigger/process_in_background',
    function($enabled, $trigger) {
        $enabledSlugs = [
            'user/registered',
            'user/login',
        ];

        if (in_array($trigger->getSlug(), $enabledSlugs, true)) {
            return true;
        }

        return $enabled;
    },
    10,
    2
);
```

:::warning
This filter was added in version 7.2.3.
:::