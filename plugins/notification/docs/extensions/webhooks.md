---
title: Webhooks
sidebar_position: 11
---

# Webhooks

:::note
Webhooks were supported in the main Notification plugin up to version 8.

Due to further plans to develop the extension, from version 9 onwards, Webhooks are available as a paid add-on [Notification : Webhooks](https://bracketspace.com/downloads/notification-webhooks/).

If you wish to continue using a basic, free version of Webhooks, please stick to the Notification v8.

If you are our client and used Webhooks before the upgrade, please contact us at [support@bracketspace.com](mailto:support@bracketspace.com).
:::

## Outgoing webhooks

There are two carriers available in this extension: 

1. **Webhooks**
2. **Webhooks JSON**

In both of them you can add multiple webhook URLs.

### Webhook

In plain Webhook, you can define arguments using merge tags for a Key or Value.

You can also send these arguments in JSON format if you check that option.

### Webhook JSON

In the Webhook JSON carrier, you can add your Webhook data directly in the JSON format.

Here you can use merge tags as well, f.e.:

```json
{
    "data": "{post_ID}"
}
```

## Incoming webhooks

The extension also comes with an Incoming Webhook trigger.

After selecting the trigger, the Webhook URL will be generated. You can modify the last part of it if you want, and then easily copy the whole URL to set it up in your application.

Choose accepted methods to make sure your webhooks will get through.

### Authentication

We strongly recommend keeping authentication on to prevent unwanted spam coming to your endpoint.

Notification's Webhooks use authentication based on [Application Passwords](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/).