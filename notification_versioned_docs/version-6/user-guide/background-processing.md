---
id: background-processing
title: Background processing
sidebar_label: Background processing
sidebar_position: 6
---

# Background processing

The Notification plugin supports background processing to improve performance when sending notifications.

## How it works

When background processing is enabled, notifications are queued and processed in the background rather than being sent immediately when triggered. This prevents delays on your website when notifications are sent.

## Benefits

- Improved website performance
- Prevents timeouts for large notification batches
- Better handling of external API calls (for carriers like Slack, Discord, etc.)

## Configuration

Background processing settings can be configured in the Notification plugin settings under the Advanced tab.