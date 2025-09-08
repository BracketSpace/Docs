---
id: faq
title: "Easy Watermark FAQ - WordPress Watermarking Questions Answered"
sidebar_label: FAQ
sidebar_position: 3
description: "Find answers to common Easy Watermark questions. Learn about watermark removal, backup restoration, bulk watermarking, text customization, and more."
keywords: ["easy watermark faq", "watermark plugin questions", "remove watermark wordpress", "watermark backup restore", "bulk watermark wordpress", "text watermark settings", "watermark scaling options", "wordpress image protection faq"]
---

# Frequently Asked Questions

**Easy Watermark FAQ** answers the most common questions about WordPress watermarking. Whether you're wondering about watermark removal, backup options, or customization features, find comprehensive answers to help you protect your images effectively.

## Can I remove the watermark after it was added?

Yes, as long as you had the backup feature enabled. (It is enabled by default, but can be disabled on the "Tools -> Easy Watermark" screen.)

To restore the original image just go to the Attachment edit page. In the "Easy Watermark" meta box you can find the "Restore original image" button. You can do this also via Media Page's Bulk actions, or using the Easy Watermark's Tools.

Only the full-size image is stored in a backup, thumbnails need to be regenerated during the restoring process.

## Are the watermarks automatically removed from images on the plugin uninstall?

No, the plugin doesn't restore your images on deactivation/removal. You should restore your images before plugin deletion if you want to have your original images back.

If you already removed the plugin, please consider installing the plugin again to restore your images. You can also try to restore your images manually.

## How to manually restore images?

If you don't have the possibility to restore your images using the plugin's feature, you can manually restore your images.

Just go to wp-content/ew-backup in your WordPress main directory. You will see there are folders in the same order as in uploads, images are stored as /year/month/imagename.jpg|png. What you need is to copy all the files from ew-backup to uploads dir (it will ask you if you want to override the existing files, click YES).

As mentioned before, this will restore only the full-size images so you need to use some other plugin to generate the thumbnails again (see Force Regenerate Thumbnails by Pedro Elsner).

## How can I add a watermark to all previously uploaded images?

You can go to the "Tools -> Easy Watermark -> Tools" screen and use the Bulk Watermark option.

## Can I adjust the watermark image position?

Yes, the watermark position can be adjusted vertically and horizontally in the Alignment box on the watermark edit page. You can also define horizontal and vertical offset.

## Can I add both, text and image watermark at once?

Yes, there is a possibility to add an image and a text watermark and apply them both to the same image.

## Can I add two images or two text watermarks?

Not yet, this feature will be provided in the upcoming PRO version of the Easy Watermark plugin.

## How Can I adjust the text watermark?

You can choose a font from the list of ten fonts included in this plugin. You can also set font size, color, angle, and opacity. The position of the text watermark can be adjusted exactly like the image watermark position.

## Can I use my font for the text watermark?

Unfortunately no. In the upcoming PRO version, you'll be able to use more fonts.

## How the scaling of the watermark image works?

On the watermark image settings page you can see 'Scaling Mode' selection which has 5 options:

* `None` – watermark scaling is off
* `Cover` – watermark will fill the entire image
* `Contain` – watermark width or height will be adjusted to image width or height in such a way that it will be all visible
* `Fit to Width` – watermark width will always be adjusted to image width
*   `Fit to Height` – watermark height will always be adjusted to image height

    If the 'Scale down only' checkbox is checked, any scaling will be done only for images smaller than the watermark image.

    The watermark ratio is always preserved, so it can go beyond the image when the 'Scaling Mode' is set to 'Fill'.

    With 'Fit to Width' or 'Fit to Height' options watermark dimensions can be set as a percentage in relation to the image dimensions.

## What placeholders can I use in the text watermark?

All available placeholders are listed in a box titled `Placeholders` displayed while creating the Text Watermark.