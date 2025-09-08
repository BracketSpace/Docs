---
title: "Create Manual WordPress Notification Triggers"
sidebar_label: "Manual triggers"
sidebar_position: 3
description: "Learn how to create manual WordPress notification triggers with programmatic notifications. Send notifications from code without dashboard configuration."
keywords: ["WordPress manual triggers", "programmatic notifications", "custom notification triggers", "notification automation", "code-based notifications", "manual notification", "WordPress automation", "notification API"]
---

# Create Manual WordPress Notification Triggers

**WordPress manual notification triggers** enable developers to send notifications programmatically from code without requiring dashboard configuration. This approach provides complete control over when and how notifications are triggered, perfect for custom automation and integration scenarios.

To make it work you'll need:

* Custom Manual Trigger
* Notification definition
* Action to trigger the Notification

## Trigger

Let's define a simple Trigger without any Merge Tags.

```php
use BracketSpace\Notification\Repository\Trigger\BaseTrigger;

/**
 * Manual trigger class
 * 
 * This needs to be defined at `notification/init` action.
 */
class ManualTrigger extends BaseTrigger
{
    /**
     * Constructor
     */
    public function __construct()
    {
        parent::__construct(
            'support/manual_trigger',
            'Manual Trigger'
        );

        $this->addAction('notification_manual_trigger_348m7t5', 10);

        $this->setGroup('Support');

        $this->setDescription('Triggered with notification_manual_trigger_348m7t5 action.');
    }

    /**
     * Action callback
     *
     * @return void
     */
    public function context()
    {
        // This trigger should always process.
    }

    /**
     * Merge Tags
     *
     * @return void
     */
    public function merge_tags()
    {
        // This trigger doesn't include any Merge Tags.
    }
}
```

You need to wrap the class definition with `notification/init` action, because [this is the earliest the abstract classes are accessible](../../general/plugin-loading-chain.md).

:::note
Read more about [Custom Triggers](../../triggers/custom-trigger.md)
:::

## Notification

The notification is just a function call with a configuration array. We'll register the Notification along with the Trigger.

```php
use BracketSpace\Notification\Register;

add_action(
    'notification/init',
    function() {
        $manual_trigger = new ManualTrigger;

        Register::trigger($manual_trigger);

        Register::notificationFromArray(
            [
                'hash' => 'notification_manual_trigger_348m7t5',
                'title' => 'Notification manual trigger',
                'trigger' => $manual_trigger,
                'carriers' => [
                    'email' => [
                        'activated' => true,
                        'enabled' => true,
                        'subject' => 'Manual trigger test',
                        'body' => 'Hello from the other side!',
                        'recipients' => [
                            [
                                'type' => 'administrator',
                                'recipient' => '',
                            ],
                        ],
                    ],
                ],
                'enabled' => true,
                'extras' => [],
                'version' => time(),
            ]
        );
    }
);
```

In this example, we use a simple email Carrier, but you are free to use any other Carrier registered within the Notification plugin. The easiest way to get the Carrier configuration is to set it up in the WordPress Dashboard and just export the Notification to JSON. The JSON file will have all the keys you need to configure here.

:::note
Read more about [Programmatic Notifications](../../notifications/programmatic-notifications.md)
:::

## Action

Our Trigger uses `notification_manual_trigger_348m7t5` action hook, so the only one thing left is to call it somewhere. The simplest would be:

```php
do_action('notification_manual_trigger_348m7t5');
```

It can be convenient to wrap this with a simple `$_GET` param check.

```php
add_action('init', function() {
    if (isset($_GET['i3m84ty'])) {
        do_action('notification_manual_trigger_348m7t5');
    }
});
```

And call it like this: `example.com?i3m84ty`