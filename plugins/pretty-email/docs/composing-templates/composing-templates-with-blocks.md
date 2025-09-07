---
title: "Composing Templates with Blocks"
sidebar_label: "Composing Templates with Blocks"
sidebar_position: 3
---

# Composing Templates with Blocks

Composing Pretty Email Templates is very similar to setting up a post in the Gutenberg editor. You can add Blocks using the inserter icon (➕) and manage them using Document Overview.

![](./assets/obraz%20(28).png)

Each of the widgets:

1. Image
2. Button
3. Text - with widgets available inside:
   * Paragraph
   * Heading
   * List
4. Spacer
5. Email Body

must be contained inside a Section (which can be contained in the Wrapper widget), so you first need to select one of the two.

![](./assets/obraz%20(29).png)

Once you have a Section with Column(s), you can start adding other blocks inside.

### Blocks Settings

Each block has its own specific settings, available in the `Block` tab in the `Settings` sidebar.

![](./assets/obraz%20(30).png)

:::note
Settings are applied in a cascade, like in CSS, so the most nested block settings are most important, followed by the parent block settings. The [global template settings](./global-template-settings/) only apply to blocks without more specific settings.
:::

### Noteworthy information about some blocks

#### Image

While inserting image from URL

![](./assets/obraz%20(31).png)

It's important to provide the specific width of an image

![](./assets/obraz%20(32).png)

:::warning
Due to the differences in email template rendering in the WordPress editor and email clients, images inserted from the URL will appear to be sized correctly in the WP editor, even without providing a specific width.  However, in the real email, the image inserted from URL with Auto width will be full-width. This can be previewed for more control by [Sending Template Preview](creating-new-template.md#sending-template-preview)
:::

#### Email Body

This block displays a placeholder in the WP editor, which will be replaced by the real email content in the final email. Therefore it can only be used once in the specific email template. Otherwise, the email content would be duplicated.

Email content may be coming from various places in your WordPress. It can be the default WP email, but it may also come from other plugins, f.e.:

* [WooCommerce](../integrations/woocommerce.md) emails
* [Gravity Forms](../integrations/gravity-forms.md) notifications
* [Notification](../integrations/notification.md) plugin emails

#### Composing Dynamic Content

If you want your Email Body content to be dynamic and composed by yourself to your needs, you can achieve that using the Notification plugin ([Free](https://wordpress.org/plugins/notification/) or [Pro](https://bracketspace.com/downloads/notification-pro/) version).

All you need to do is add an email template containing Email Body in Pretty Email, and then set a custom notification using the Email carrier in the Notification plugin ([see Docs](https://docs.bracketspace.com/notification)). Then choose the previously set email template to use for this notification. See [Notification](../integrations/notification.md) integration docs for how that works.

You can find more on how to create an email template with dynamic content from WordPress in the article:
[How to Create an Email Template Featuring Blog Posts from WordPress?](https://bracketspace.com/blog/create-email-template-blog-with-pretty-email/)