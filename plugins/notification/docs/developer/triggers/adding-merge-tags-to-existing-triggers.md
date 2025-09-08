---
title: "How to Add Custom Merge Tags to WordPress Notification Triggers"
sidebar_label: "Adding merge tags"
sidebar_position: 4
description: "Learn how to add custom merge tags to existing WordPress notification triggers. Extend default triggers with custom meta, global tags and dynamic content."
keywords: ["WordPress merge tags", "custom merge tags", "notification triggers", "trigger extension", "post meta merge tags", "global merge tags", "dynamic content", "trigger customization"]
---

# How to Add Custom Merge Tags to WordPress Notification Triggers

**WordPress notification merge tags** enable developers to add dynamic, personalized content to existing triggers. This guide shows you how to extend default triggers like Post Published with custom meta fields, create global merge tags, and implement dynamic content across all notification types.

To do this simply hook into the action and add your Merge Tag:

```php
use BracketSpace\Notification\Repository\MergeTag;
use BracketSpace\Notification\Repository\Trigger\Post\PostPublished;

// Hook into an action when Merge Tags are attached to Trigger.
add_action(
    'notification/trigger/merge_tags',
    function($trigger)
    {
        // Check if registered Trigger is the one you need.
        if (! $trigger instanceof PostPublished::class) {
            return;
        }

        // Pay attention to the Tag type you are defining.
        // If you want to output an HTML, use HtmlTag instead.
        $trigger->addMergeTag(
            new MergeTag\StringTag(
                [
                    'slug' => 'new_merge_tag',
                    'name' => __('New Merge Tag', 'textdomain'),
                    'resolver' => function($trigger) {
                        return get_post_meta($trigger->post->ID, '_my_meta_key', true);
                    },
                ]
            )
        );
    }
);
```

:::warning
Since v9, dynamic property `$trigger->{$post_type}` has been replaced with a static prop `$trigger->post`.
:::

## Targeting all Post Type Triggers

You can target all the Post Type Triggers like this:

```php
add_action(
    'notification/trigger/merge_tags',
    function($trigger)
    {
        if (! preg_match(
                '/post\/(.*)\/\(updated|trashed|published|drafted|added|pending|scheduled\)/',
                $trigger->getSlug()
        ) {
            return;
        }

        // Add your Tag.
    }
);
```

## Global Merge Tags

The Notification plugin also supports global Merge Tags which are added to all Triggers. You can use this nifty function to create one:

```php
use BracketSpace\Notification\Defaults\MergeTag\StringTag;
use BracketSpace\Notification\Register;

Register::globalMergeTag(new StringTag([
	'slug' => 'option_value',
	'name'=> __('Site option', 'textdomain'),
	'resolver' => function($trigger) {
		return get_option('your_option_name', 'Default');
	},
]));
```

:::warning
Before using any property of the Trigger make sure it's available. Global Merge Tags are intended to be loosely connected with any Trigger.
:::