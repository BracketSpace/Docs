---
id: how-to-setup-different-from-address-for-different-notifications
title: How to setup different FROM address for different Notifications
sidebar_label: Different FROM addresses
sidebar_position: 8
---

# How to setup different FROM address for different Notifications

By default, all email notifications use the same FROM address configured in your WordPress settings. However, you can configure different FROM addresses for different notifications.

## Method 1: Using the Email Carrier settings

1. Edit your notification
2. Go to the Email carrier settings
3. Enable "Override FROM address"
4. Enter the desired FROM email address
5. Optionally, set a custom FROM name

## Method 2: Using merge tags

You can use merge tags in the FROM address field to dynamically set the sender based on the trigger context.

## Method 3: Using code

For advanced users, you can use the `notification/email/from` filter to programmatically set different FROM addresses based on the notification or trigger type.