---
sidebar_position: 3
title: Custom Logging
---

# Custom Logging

Advanced Cron Manager PRO provides a powerful custom logging system that allows you to add your own log entries directly from within your cron actions. This feature enables detailed tracking and debugging of your custom cron events.

## Overview

The custom logging feature uses WordPress actions to capture log messages from within your cron functions. These logs are then displayed in the specific cron event logs table, giving you granular insight into what happens during cron execution.

## Basic Usage

To use custom logging, add the `advanced-cron-manager/log` action inside your cron action:

```php
add_action('advanced-cron-manager/log', function($logger) {
    $logger->log('Your custom log message here');
});
```

The `log()` method can accept any type of data - strings, arrays, objects, or any other PHP variable. The results will be automatically formatted and displayed in the cron event logs table.

## Implementation Example

Here's a complete example showing how to implement custom logging within a cron action:

```php
function my_custom_cron_task() {
    // Trigger the logging action
    add_action('advanced-cron-manager/log', function($logger) {
        $logger->log('Starting my custom cron task');
    });
    
    try {
        // Your cron task logic here
        $result = perform_some_operation();
        
        // Log the result
        add_action('advanced-cron-manager/log', function($logger) use ($result) {
            $logger->log('Operation completed successfully');
            $logger->log(['result' => $result, 'timestamp' => time()]);
        });
        
    } catch (Exception $e) {
        // Log errors
        add_action('advanced-cron-manager/log', function($logger) use ($e) {
            $logger->log('Error occurred: ' . $e->getMessage());
            $logger->log(['error_code' => $e->getCode(), 'trace' => $e->getTraceAsString()]);
        });
    }
    
    // Final completion log
    add_action('advanced-cron-manager/log', function($logger) {
        $logger->log('Custom cron task finished');
    });
}

// Register your cron action
add_action('my_custom_cron_hook', 'my_custom_cron_task');
```

## Advanced Logging Examples

### Logging Arrays and Objects

```php
add_action('advanced-cron-manager/log', function($logger) {
    // Log an array
    $data = [
        'processed_items' => 25,
        'failed_items' => 2,
        'total_time' => '2.3 seconds'
    ];
    $logger->log($data);
    
    // Log an object
    $status = new stdClass();
    $status->success = true;
    $status->message = 'Batch processing complete';
    $logger->log($status);
});
```

### Conditional Logging

```php
add_action('advanced-cron-manager/log', function($logger) {
    $debug_mode = get_option('my_plugin_debug', false);
    
    if ($debug_mode) {
        $logger->log('Debug mode is enabled - detailed logging active');
        $logger->log($_SERVER); // Log server environment
    } else {
        $logger->log('Standard logging mode');
    }
});
```

### Progress Tracking

```php
function process_large_dataset() {
    $items = get_items_to_process();
    $total = count($items);
    
    foreach ($items as $index => $item) {
        // Process the item
        process_item($item);
        
        // Log progress every 10 items
        if (($index + 1) % 10 === 0) {
            add_action('advanced-cron-manager/log', function($logger) use ($index, $total) {
                $processed = $index + 1;
                $percentage = round(($processed / $total) * 100, 2);
                $logger->log("Progress: {$processed}/{$total} items ({$percentage}%)");
            });
        }
    }
    
    add_action('advanced-cron-manager/log', function($logger) use ($total) {
        $logger->log("Completed processing {$total} items");
    });
}
```

## Where Logs Appear

All custom log entries created using this system will appear in:

1. **Cron Event Logs Table** - Accessible through the Advanced Cron Manager PRO interface
2. **Event-Specific Logs** - Each cron event has its own dedicated log section

## Best Practices

### 1. Use Descriptive Messages
```php
// Good
$logger->log('User notification emails sent successfully - 150 emails processed');

// Less helpful
$logger->log('Done');
```

### 2. Include Context
```php
add_action('advanced-cron-manager/log', function($logger) {
    $logger->log([
        'action' => 'database_cleanup',
        'deleted_records' => 1250,
        'execution_time' => microtime(true) - $start_time,
        'memory_usage' => memory_get_peak_usage(true)
    ]);
});
```

### 3. Log Both Success and Failure States
```php
if ($operation_successful) {
    add_action('advanced-cron-manager/log', function($logger) {
        $logger->log('Operation completed successfully');
    });
} else {
    add_action('advanced-cron-manager/log', function($logger) {
        $logger->log('Operation failed - check error logs for details');
    });
}
```

## Use Cases

### E-commerce Order Processing
```php
function process_pending_orders() {
    add_action('advanced-cron-manager/log', function($logger) {
        $pending_orders = get_pending_orders_count();
        $logger->log("Processing {$pending_orders} pending orders");
    });
    
    // Process orders and log results
}
```

### Data Synchronization
```php
function sync_external_data() {
    add_action('advanced-cron-manager/log', function($logger) {
        $logger->log('Starting external API synchronization');
        $logger->log(['api_endpoint' => 'https://api.example.com/data']);
    });
    
    // Sync logic with progress logging
}
```

### Maintenance Tasks
```php
function cleanup_temporary_files() {
    add_action('advanced-cron-manager/log', function($logger) {
        $temp_dir = wp_upload_dir()['basedir'] . '/temp/';
        $file_count = count(glob($temp_dir . '*'));
        $logger->log("Found {$file_count} temporary files to clean up");
    });
    
    // Cleanup logic
}
```

## Performance Considerations

- Log messages are stored efficiently in the database
- Excessive logging may impact cron performance - use judiciously
- Consider using conditional logging for detailed debug information
- Large objects or arrays will be serialized - monitor log table size

## Troubleshooting

If custom logs aren't appearing:

1. **Verify PRO License** - Custom logging requires Advanced Cron Manager PRO
2. **Check Hook Placement** - Ensure logging actions are inside your cron function
3. **Test Cron Execution** - Verify your cron is actually running
4. **Review Permissions** - Ensure database write permissions are correct

---

Ready to implement detailed logging in your cron tasks? This powerful feature provides the visibility you need to monitor and debug complex WordPress cron operations.