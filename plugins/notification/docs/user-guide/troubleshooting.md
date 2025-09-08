---
id: troubleshooting
title: "WordPress Notification Plugin Troubleshooting - Fix Common Issues"
sidebar_label: Troubleshooting
sidebar_position: 5
description: "Fix WordPress notification plugin issues: emails not sending, empty recipients, multiple notifications, encoding problems. Complete troubleshooting guide with solutions."
keywords: ["wordpress notification troubleshooting", "notification plugin not working", "wordpress emails not sending", "notification debug", "fix notification issues", "wordpress notification problems", "email notification errors", "notification plugin errors"]
---

# WordPress Notification Plugin Troubleshooting Guide

**WordPress notification troubleshooting** helps you identify and resolve common issues with automated notifications, email delivery, and plugin functionality. This comprehensive guide covers the most frequent problems and their solutions.

:::danger
Always ensure the Notification plugin and all extensions are updated to the latest versions before troubleshooting!
:::

## Fix: Empty Recipients Field in WordPress Notifications

Notification plugin, since v7 uses WordPress' REST API to render the recipients field. You must ensure the `/notification` endpoint is accessible and the API is accessible. 

## Fix: WordPress Notifications Not Sending

To debug the missing message (Carrier execution) please enable the Notification log in **Notification > Settings > Debugging**. All the executions will be caught there.

:::warning
Please make sure the notification suppressing checkbox is turned off if you wish to send the message to the public. 
:::

If the notification gets caught, you can inspect the details (ie. if the recipient is set correctly) and if they seem to be ok, check if your WordPress is sending the emails (SMTP is set correctly?) or it can connect to the API (depends on the selected Carrier).

If the notification is not there, you probably found a bug. Please [report it on Github](https://github.com/BracketSpace/Notification/issues/new?assignees=&labels=bug&template=bug-report.md&title=).

## Fix: Duplicate WordPress Notifications Being Sent

Most of the time this is caused by the post editor saving the content multiple times. Ie. Gutenberg saves the main content in one request, taxonomy terms in another request, ACF saves the fields in another request, and so on.

Please activate the [Background Processing](advanced/background-processing.md) feature to prevent this from happening.

## Fix: Email Character Encoding Issues in WordPress Notifications

This might be related to the content encoding. You can try to define the email header (activate that in Notification -> Settings -> Carriers -> Email) as follows:

| Key          |                          |
| ------------ | ------------------------ |
| Content-Type | text/html; charset=UTF-8 |

## Fix: WordPress Notification Plugin License Errors

If you experience this issue and you have a valid license, most likely you can see an empty license field on the Notification -> Extensions screen. In this case, simply deactivate the license and activate it again.

:::note
If you have an expired Notification license you'd like to renew, contact us at support@bracketspace.com for a 20% discount.
:::

## Fix: Custom Post Types Missing from WordPress Notification Triggers

See:

[Custom Post Type support](advanced/custom-post-type-support.md)

## Storage templates base path: .../wp-content/plugins/notification/src/templates must exist and be a directory

This error will most likely occur in tandem with: `Warning: ftp_nlist() expects parameter 1 to be resource, null given`

To make sure the plugin works, please add the following to your `wp-config.php`:

```php
if (!defined('FS_METHOD')) define('FS_METHOD', 'direct');
```