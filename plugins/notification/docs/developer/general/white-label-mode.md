---
title: "WordPress Notification Plugin White Label Mode Setup"
sidebar_label: "White label mode"
sidebar_position: 7
description: "Configure WordPress Notification plugin white label mode for custom branding. Remove default triggers, customize admin interface, and control user access."
keywords: ["WordPress white label", "plugin branding", "custom admin interface", "notification customization", "plugin white labeling", "developer tools", "admin customization", "plugin configuration"]
---

# WordPress Notification Plugin White Label Mode Setup

**WordPress Notification plugin white label mode** is a powerful branding feature that allows developers to customize the plugin interface, remove default elements, and create a tailored notification experience for clients. This mode provides complete control over plugin presentation and functionality.

```php
use BracketSpace\Notification\Core\Whitelabel;

add_action( 'notification/init', function() {
	Whitelabel::enable();
} );
```

What it does is just remove all the [default triggers](../triggers/default-triggers.md) and [the upselling](../../user-guide/advanced/disable-upselling.md). The fun part starts with the parameters you can use. See below:

```php
Whitelabel::enable( [
	// admin page hook under which you want the Notifications to be displayed.
	'page_hook' => 'edit.php?post_type=page',
	// if display extensions.
	'extensions' => false,
	// if display settings.
	'settings' => false,
	// control settings access, provided user IDs will have access.
	// this works only if settings are enabled.
	'settings_access' => [123, 456],
] );
```

:::note
If the Notifications page is moved to a submenu of another page, the settings and extensions are added as a separate submenu.
:::

## Adjusting Notification post type labels and capabilities

As easy as using two filters.

### Labels

```php
add_filter( 'notification/whitelabel/cpt/labels', function( $labels ) {

	// These are the defaults.
	return [
		'name'                => __( 'Notifications', 'notification' ),
		'singular_name'       => __( 'Notification', 'notification' ),
		'add_new'             => _x( 'Add New Notification', 'notification', 'notification' ),
		'add_new_item'        => __( 'Add New Notification', 'notification' ),
		'edit_item'           => __( 'Edit Notification', 'notification' ),
		'new_item'            => __( 'New Notification', 'notification' ),
		'view_item'           => __( 'View Notification', 'notification' ),
		'search_items'        => __( 'Search Notifications', 'notification' ),
		'not_found'           => __( 'No Notifications found', 'notification' ),
		'not_found_in_trash'  => __( 'No Notifications found in Trash', 'notification' ),
		'parent_item_colon'   => __( 'Parent Notification:', 'notification' ),
		'menu_name'           => __( 'Notifications', 'notification' ),
	];

} );
```

### Capabilities

```php
add_filter( 'notification/post_type/capabilities', function( $capabilities ) {

	// These are the defaults.
	return [
		'edit_post'          => 'manage_options',
		'read_post'          => 'manage_options',
		'delete_post'        => 'manage_options',
		'edit_posts'         => 'manage_options',
		'edit_others_posts'  => 'manage_options',
		'delete_posts'       => 'manage_options',
		'publish_posts'      => 'manage_options',
		'read_private_posts' => 'manage_options'
	];

} );
```