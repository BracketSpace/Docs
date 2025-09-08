---
id: programmatic-notifications
title: Programmatic Notifications
sidebar_label: Programmatic Notifications
sidebar_position: 3
---

# Programmatic Notifications

You can create and send notifications programmatically using PHP code.

## Creating notifications via code

```php
// Create a new notification
$notification = new \BracketSpace\Notification\Defaults\Notification();
$notification->set_title('My Custom Notification');
$notification->set_trigger('post_published');

// Add email carrier
$email_carrier = new \BracketSpace\Notification\Defaults\Carrier\Email();
$email_carrier->set_field('recipients', ['admin@example.com']);
$email_carrier->set_field('subject', 'New post published');
$email_carrier->set_field('body', 'Post {post_title} has been published');

$notification->add_carrier($email_carrier);
```

## Sending notifications manually

You can also trigger notifications manually for specific events:

```php
// Trigger a notification
do_action('notification/trigger', 'post_published', $post);
```