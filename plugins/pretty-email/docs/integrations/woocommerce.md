---
id: woocommerce
title: WooCommerce
sidebar_label: WooCommerce
sidebar_position: 4
---

# WooCommerce

Turning on Pretty Email for WooCommerce emails:

1.  Go to `Appearance` -> `Pretty Email`

    ![](./assets/wordpress-appearance-pretty-email-menu.png)

2.  Navigate to `Settings` tab

    ![](./assets/woocommerce-pretty-email-settings-tab.png)

3.  Enable WooCommerce integration:

    ![](./assets/woocommerce-integration-enable-checkbox.png)

4.  Select default template for WooCommerce emails:

    ![](./assets/woocommerce-default-template-selection.png)

5.  Then go to `WooCommerce` -> `Settings` -> `Emails`

    ![](./assets/woocommerce-settings-emails-menu.png)

6.  Manage chosen emails to turn on Pretty Emails email type for them:

    ![](./assets/woocommerce-email-template-configuration.png)

7.  You can leave the default WooCommerce email template, or choose a specific one for each email separately:

    ![](./assets/woocommerce-specific-template-selection.png)

:::danger
All `plain-text` emails are wrapped in Pretty Email templates, while HTML emails are not.
:::

So, if you change the WC email type to `plain-text` , expect the PE template to be applied to this email as well. However, the email content will be formatted better when you use proper PE integration outlined above.