---
id: background-processing-filter
title: Background Processing filter
---

# Background Processing filter

Regardless of the [setting in Dashboard](../../../user-guide/advanced/background-processing.md) you can enable or disable background processing for a particular Trigger with a simple filter. You can reference [default Triggers](../../triggers/default-triggers.md) here.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="disable" label="Disable Triggers">

```php
add_filter( 'notification/trigger/process_in_background', function( $enabled, $trigger ) {
	$disabled_trigger_slugs = [
		'user/registered',
		'user/login',
	];

	if ( in_array( $trigger->get_slug(), $disabled_trigger_slugs, true ) ) {
		return false;
	}

	return $enabled;
}, 10, 2 );
```

</TabItem>
<TabItem value="enable" label="Enable Triggers">

```php
add_filter( 'notification/trigger/process_in_background', function( $enabled, $trigger ) {
	$enabled_trigger_slugs = [
		'user/registered',
		'user/login',
	];

	if ( in_array( $trigger->get_slug(), $enabled_trigger_slugs, true ) ) {
		return true;
	}

	return $enabled;
}, 10, 2 );
```

</TabItem>
</Tabs>

:::warning
This filter was added in version 7.2.3.
:::
