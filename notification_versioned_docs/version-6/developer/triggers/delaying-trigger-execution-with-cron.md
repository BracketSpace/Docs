---
id: delaying-trigger-execution-with-cron
title: Delaying Trigger execution with Cron
sidebar_label: Delaying with Cron
sidebar_position: 6
---

# Delaying Trigger execution with Cron

You can delay trigger execution using WordPress Cron to send notifications at a specific time or after a delay.

## Using wp_schedule_event

```php
// Schedule a notification to be sent in 1 hour
wp_schedule_single_event(time() + HOUR_IN_SECONDS, 'notification_delayed_hook', [$post_id]);

// Hook into the scheduled event
add_action('notification_delayed_hook', 'send_delayed_notification');

function send_delayed_notification($post_id) {
    $post = get_post($post_id);
    do_action('notification/trigger', 'post_published', $post);
}
```

## Benefits

- Send notifications at optimal times
- Batch process multiple notifications
- Reduce server load during peak times
- Schedule reminders and follow-up notifications