---
id: how-notification-plugin-works
title: "How WordPress Notification Plugin Works - Triggers & Carriers Guide"
sidebar_label: How Notification plugin works
sidebar_position: 2
description: "Learn how WordPress Notification plugin works with triggers, carriers, and merge tags. Understand the architecture behind automated WordPress notifications and email alerts."
keywords: ["wordpress notification plugin", "how notifications work", "wordpress triggers", "notification carriers", "merge tags", "automated wordpress notifications", "wordpress event system", "notification architecture"]
---

# How WordPress Notification Plugin Works

**WordPress Notification plugin is an automation system** that connects WordPress events with external services through triggers, carriers, and merge tags. Originally designed for email notifications, it now supports webhooks, Slack integration, SMS, and countless third-party service connections.

The plugin leverages WordPress's built-in action system to monitor site activity and automatically send notifications when specific events occur. This makes it possible to create sophisticated notification workflows without custom coding.

The plugin is built on top of WordPress' actions system which means it can listen to any action defined in WordPress. And it has a thousand of them. Also, every properly created plugin should use them as well.

:::note
Examples:

* Send an email to WordPress administrator when user logs in
* Send a webhook to your accounting software when someone purchases a product
:::

## WordPress Notification System Components

The Notification plugin architecture consists of three core components that work together to create automated WordPress notifications. Understanding these components helps you build effective notification workflows.

### WordPress Event Triggers

The Trigger is a WordPress action(s) which are observed by the plugin. Examples:

* User registration
* Post publication
* Plugin update

It allows the plugin to listen to what is happening in the background.

:::note
The Notification is highly extensible. Developers can register own Triggers based on any WordPress actions.
:::

### Notification Carriers

The Carrier is the delivery method that sends your WordPress notifications. Available notification carriers include:

* Email
* Webhook
* Slack message
* File Logger

All the Carriers works with all the Triggers out of the box, even the custom ones.

### Dynamic Merge Tags

Merge tags are dynamic placeholders that insert real-time data into your WordPress notifications. Common merge tag examples:

* `{user_email}`
* `{plugin_name}`
* `{post_title}`

You can compose the Notification out of them when you don't really know what's going to be rendered. For example when you create the "User registered" Notification and use the `{user_email}` Merge Tag it's going to be rendered to `your@email.com` when you register and to `bracketspace@email.com` when I register.

## How WordPress Notification Components Work Together

WordPress notification triggers, carriers, and merge tags combine to create powerful automated communication workflows.

A WordPress notification follows a simple "when this, then that" logic: when a specific trigger event occurs, the system executes the configured carriers using dynamic merge tag data. For example, when a user registers (trigger), send a welcome email and webhook notification (carriers) with the user's details (merge tags).

Each Trigger has a set of it's Merge Tags. Having the `{plugin_name}` Tag in context of a User registration would be rather silly 😉

You can use these Marge Tags in any Carrier. Ie. use the `{user_email}` as the Email recipient but also send it in a `user.email` field in the Webhook.

The rule of thumb is - if you cannot see the Merge Tag in the sidebar, you cannot use it.