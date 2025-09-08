---
title: "How to Create Custom WordPress Notification Carriers"
sidebar_label: "Custom Carrier"
sidebar_position: 1
description: "Learn how to create custom WordPress notification carriers for APIs and delivery services. Complete guide to carrier classes, form fields and integration."
keywords: ["WordPress notification carriers", "custom carrier development", "notification API integration", "PHP carrier class", "webhook carriers", "delivery services", "notification plugin", "carrier registration"]
---

# How to Create Custom WordPress Notification Carriers

**WordPress notification carriers** are essential components that connect WordPress actions with external services and delivery methods. While Email and Webhook carriers are included by default, developers can create custom carriers to integrate with any API or delivery service.

If you want to connect with API or other delivery services, you should create a custom Carrier.

Carriers very often need the [Recipients](../recipients/custom-recipient.md), so you may want to add a custom one as well.

## Carrier class

```php
use BracketSpace\Notification\Interfaces\Triggerable;
use BracketSpace\Notification\Repository\Carrier\BaseCarrier;
use BracketSpace\Notification\Repository\Field;

/**
 * ExampleCarrier Carrier
 */
class ExampleCarrier extends BaseCarrier
{
    /**
     * Carrier icon, optional
     *
     * @var string SVG
     */
    public $icon = '<svg>...</svg>';

    /**
     * Carrier constructor
     */
    public function __construct()
    {
        // Provide the slug and translatable name.
        parent::__construct(
            'example-carrier',
            __('Example Carrier', 'textdomain')
        );
    }

    /**
     * Used to register Carrier form fields
     * Uses $this->addFormField();
     *
     * @return void
     */
    public function formFields()
    {
        $this->addFormField(new Field\InputField([
            'label' => __('Example field', 'notification'),
            'name' => 'fieldslug',
        ]));

        // Special field which renders all Carrier's recipients.
        // You may override name, slug and description here.
        $this->addRecipientsField([
            'name' => 'Items',
            'slug' => 'items',
        ]);

    }

    /**
     * Sends the notification
     *
     * @param  Triggerable $trigger trigger object.
     * @return void
     */
    public function send(Triggerable $trigger)
    {
        // Data contains the user data with rendered Merge Tags.
        $data = $this->data;

        // Parsed recipients are also available.
        $data['parsed_recipients'];

        // This is where you should connect with your service to send out the Notifiation.
    }
}
```

## Registering the Carrier

To get the Carrier registered you must create an instance of your class and pass it to the Notification plugin. The best action to do that is `notification/init`.

```php
use BracketSpace\Notification\Register;

add_action('notification/init', function() {
    Register::carrier(new ExampleCarrier());
});
```