---
title: "Add Custom Fields to WordPress Notification Carrier Forms"
sidebar_label: "Adding custom fields"
sidebar_position: 2
description: "Learn how to add custom form fields to WordPress notification carrier forms. Extend email carriers and other notification types with custom input fields."
keywords: ["WordPress carrier forms", "custom form fields", "notification carrier extension", "carrier form fields", "input fields", "form customization", "notification forms", "carrier development"]
---

# Add Custom Fields to WordPress Notification Carrier Forms

**WordPress notification carrier forms** can be extended with custom fields to capture additional user input and configuration options. This guide shows you how to add custom form fields to existing carriers like Email using WordPress hooks and the notification API.

```php
use BracketSpace\Notification\Repository\Carrier\Email;
use BracketSpace\Notification\Repository\Field\InputField;

add_action(
    'notification/carrier/registered',
    function($carrier)
    {
        if (! $carrier instanceof Email::class) {
            return;
        }

        $carrier->addFormField(
            new InputField(
                [
                    'label' => __('Example Field', 'textdomain'),
                    'name' => 'example',
                    'resolvable' => true,
                ]
            )
        );
    }
);
```

:::note
All the field data will be automatically stored and available in `$carrier->data` property in `send()` method.
:::