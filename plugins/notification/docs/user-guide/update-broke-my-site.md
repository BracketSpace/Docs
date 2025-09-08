---
id: update-broke-my-site
title: "Fix WordPress Site After Notification Plugin Update - Recovery Guide"
sidebar_label: "Update broke my site"
sidebar_position: 1
description: "Emergency fix for WordPress sites broken by Notification plugin v9 update. Learn how to restore your site, downgrade safely, and resolve compatibility issues."
keywords: ["WordPress site broken", "notification plugin fix", "website recovery", "plugin downgrade", "WordPress recovery mode", "site restore", "update compatibility"]
slug: /user-guide/update-broke-my-site
---

# Fix WordPress Site After Notification Plugin Update

**WordPress site broken after Notification plugin update is a common issue** when upgrading to version 9 without updating compatible extensions. This emergency recovery guide helps you quickly restore your website and resolve compatibility problems with the updated notification system.

It's very important to update the Notification plugin in a safe environment and with all the extensions **at the same time.** 

## WordPress Website Down After Update

Sorry that it happened! Please make sure to always check the update notes before upgrading the plugin and backup your site before making any major changes like updates.

Your website is down because the new Notification version is not compatible with most of the extensions. We needed to upgrade our internal API for better performance and to reduce the tech-debt.

:::tip
To quickly restore your website please enable recovery mode (link was sent to the website admin email) and disable Notification plugin(s) or restore the website backup.
:::

From here, you have two options to proceed.

### Upgrade All Extensions (Recommended Fix)

The new Notification version has also security patches, so we advise to upgrade everything as soon as possible.

If your website is up already, just upgrade all the extensions and reactivate the plugins. You can also find the latest plugin packages [on your store account](https://bracketspace.com/dashboard/).

### Downgrade to Previous Notification Version

If you cannot update all the extensions or you don't want to do that, you can download the [Notification v8.0.15 package](https://downloads.wordpress.org/plugin/notification.8.0.15.zip) and downgrade it by going to Plugins -> Add New -> Upload Plugin.

## Custom Code Compatibility Issues

If you extended the plugin with custom Triggers, Carriers, Recipients, or anything else, you need to update your code to the latest version.

Please refer to the changelog in readme.txt and the developer documentation here on how to use the new internal API.