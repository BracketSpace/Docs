---
title: Suppressing the Carrier
description: How to disable the Carrier process on the fly
sidebar_position: 3
---

# Suppressing the Carrier

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