---
title: "WP All Import WordPress Notification Integration"
sidebar_label: "WP All Import"
sidebar_position: 1
description: "Integrate WP All Import with WordPress notifications. Handle post import triggers, avoid duplicate notifications and optimize import workflows."
keywords: ["WP All Import integration", "WordPress import notifications", "post import triggers", "import automation", "bulk import notifications", "CSV import notifications", "XML import triggers", "import workflow"]
---

# WP All Import WordPress Notification Integration

**WP All Import WordPress notification integration** requires special handling to avoid duplicate triggers and ensure proper notification delivery during bulk import operations. This integration guide provides code examples for handling post imports with the Notification plugin.

## Importing posts

By default, WP All Import plugin will trigger the actions twice for each post imported.

:::warning
This guide assumes that you have the option "**Increase speed by disabling do\_action calls in wp\_insert\_post during import.**" checked, in the Import settings in Advanced Options tab.
:::

:::warning
You must use `Post added` trigger for this integration (or other `Custom Post Type added` trigger) or `Post updated` trigger.
:::

```php
// Add our proxy action to the trigger.
add_action('notification/trigger/registered', function($trigger) {
    if (preg_match('/post\/(.*)\/added/', $trigger->getSlug())) {
        $trigger->addAction( 'notification_pmxi_added_post', 10, 3 );
    }

    if (preg_match( '/post\/(.*)\/updated/', $trigger->getSlug())) {
        $trigger->addAction( 'notification_pmxi_updated_post', 10, 3 );
    }
} );

// Proxy action.
add_action( 'pmxi_saved_post', function( $post_id, $node, $is_update ) {
    if ( ! $is_update ) {
        do_action( 'notification_pmxi_added_post', $post_id, get_post( $post_id ), false );
    } else {
        do_action( 'notification_pmxi_updated_post', $post_id, get_post( $post_id ), get_post( $post_id ) );
    }
}, 10, 3 );

// Disable postponing.
add_filter( 'notification/integration/gutenberg', function( $initial ) {
    if ( defined( 'WP_IMPORTING' ) && WP_IMPORTING ) {
        return false;
    }
    return $initial;
} );

add_filter( 'notification/integration/custom_fields/should_postpone_save_post', function( $initial ) {
    if ( defined( 'WP_IMPORTING' ) && WP_IMPORTING ) {
        return false;
    }
    return $initial;
} );
```