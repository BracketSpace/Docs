---
id: automatic-trigger-testing
title: Automatic Trigger testing
sidebar_label: Automatic Trigger testing
sidebar_position: 2
---

# Automatic Trigger Testing

Enable automatic testing of triggers during development.

```php
// Enable trigger testing mode
add_filter('notification/debug', '__return_true');

// Log all trigger executions
add_action('notification/trigger/registered', function($trigger) {
    error_log('Trigger executed: ' . $trigger->get_slug());
});
```