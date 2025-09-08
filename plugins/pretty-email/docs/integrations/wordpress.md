---
id: wordpress
title: "WordPress Email Integration - Pretty Email Setup Guide"
sidebar_label: WordPress
sidebar_position: 1
description: "Enable Pretty Email templates for WordPress default emails. Step-by-step guide to integrate beautiful email templates with WordPress notifications and system emails."
keywords: ["WordPress email templates", "WordPress email integration", "Pretty Email WordPress", "WordPress email customization", "default WordPress emails", "WordPress email styling"]
---

# WordPress

**WordPress email integration with Pretty Email** transforms your default WordPress system emails with beautiful, branded templates. This guide shows you how to enable and configure Pretty Email for all WordPress notifications.

To turn on Pretty Email for WordPress emails:

1.  Go to `Appearance` -> `Pretty Email`

    ![](../../assets/wordpress-appearance-pretty-email-menu.png)

2.  Navigate to `Settings` tab

    ![](../../assets/wordpress-pretty-email-settings-tab.png)

3.  Select the default email template (it will be applied for all emails unless otherwise specified)

    ![](../../assets/wordpress-default-template-selection.png)

4.  Turn on WordPress Emails in `Integrations` box

    ![](../../assets/wordpress-emails-integration-toggle.png)

:::note
The chosen email template will be used for all WordPress default emails, so to keep their email content in it, an Email Body block must be placed in the chosen template.
:::

:::note
All `plain-text emails` are wrapped in Pretty Email templates, while HTML emails are not.
:::

:::warning
If the WordPress Emails option is turned on, `plain-text` emails sent by other plugins may also have a Pretty Email template applied.
:::