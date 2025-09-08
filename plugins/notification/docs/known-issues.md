---
id: known-issues
title: "WordPress Notification Plugin Issues & Troubleshooting Guide"
sidebar_label: "Known issues"
sidebar_position: 3
description: "Common WordPress Notification plugin issues and solutions. Fix webhook errors, Gutenberg conflicts, and Pods custom field problems with expert troubleshooting."
keywords: ["notification plugin errors", "WordPress notification issues", "webhook troubleshooting", "Gutenberg conflicts", "Pods custom fields", "notification plugin fix", "WordPress debugging"]
slug: /known-issues
---

# WordPress Notification Plugin Issues & Troubleshooting

**WordPress Notification plugin known issues are common problems** that can affect notification delivery, webhook functionality, and custom field integration. This troubleshooting guide provides solutions for the most frequently encountered issues with WordPress notifications.

## Webhook Carrier Not Available Error

Please upgrade to the [Webhooks add-on](https://bracketspace.com/downloads/notification-webhooks/). Read more about this change in [upgrading to v9 section](../updating-to-v9#webhook-integration-changes).

## Gutenberg Editor Custom Field Conflicts

When using Gutenberg it's not possible to get every post information AND custom fields at the same time. Everything is saved separately in separate AJAX requests and there's no way we can access all the updated data at once.

You should enable the [Background processing](../user-guide/advanced/background-processing) to get rid of this issue.

## Pods Framework Custom Field Issues

Custom fields saved via Pods framework doesn't get recognized by the Notification plugin thus cannot be used with the Custom Fields extension.

You can try to enable the [Background processing](../user-guide/advanced/background-processing) to get rid of this issue.