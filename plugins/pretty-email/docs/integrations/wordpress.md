---
id: wordpress
title: WordPress
sidebar_label: WordPress
sidebar_position: 1
---

# WordPress

To turn on Pretty Email for WordPress emails:

1.  Go to `Appearance` -> `Pretty Email`

    ![](./assets/wordpress-appearance-pretty-email-menu.png)

2.  Navigate to `Settings` tab

    ![](./assets/wordpress-pretty-email-settings-tab.png)

3.  Select the default email template (it will be applied for all emails unless otherwise specified)

    ![](./assets/wordpress-default-template-selection.png)

4.  Turn on WordPress Emails in `Integrations` box

    ![](./assets/wordpress-emails-integration-toggle.png)

:::note
The chosen email template will be used for all WordPress default emails, so to keep their email content in it, an Email Body block must be placed in the chosen template.
:::

:::note
All `plain-text emails` are wrapped in Pretty Email templates, while HTML emails are not.
:::

:::warning
If the WordPress Emails option is turned on, `plain-text` emails sent by other plugins may also have a Pretty Email template applied.
:::