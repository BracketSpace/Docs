---
title: "How to Suppress WordPress Notification Carriers"
sidebar_label: "Suppressing"
description: "Learn how to disable WordPress notification carriers on the fly. Control carrier execution with conditional logic and suppression filters."
sidebar_position: 3
keywords: ["WordPress notification suppression", "disable carriers", "conditional notifications", "carrier control", "notification filters", "suppress notifications", "carrier management", "notification logic"]
---

# How to Suppress WordPress Notification Carriers

**WordPress notification carrier suppression** enables developers to conditionally disable specific carriers or entire notifications based on custom logic. This powerful feature provides fine-grained control over when and how notifications are delivered.

:::note
To disable the whole Notification (all Carriers) it's better to use the `notification/should_send` filter.
:::

If you want to suppress a specific Carrier you can do it like this:

```php
use BracketSpace\Notification\Repository\Carrier\Email;

add_action(
    'notification/carrier/pre-send',
    function($carrier, $trigger, $notification)
    {
        if ($carrier instanceof Email::class) {
            $carrier->suppress();
        }
    },
    10,
    3
);
```

:::note
You can target any Carrier or Trigger property in this action to test your conditions.
:::