---
title: "MemberPress WordPress Notification Integration"
sidebar_label: "MemberPress"
sidebar_position: 2
description: "Integrate MemberPress with WordPress notifications. Handle membership notifications, avoid duplicate emails and optimize membership workflows."
keywords: ["MemberPress integration", "WordPress membership notifications", "membership plugin integration", "subscription notifications", "membership automation", "MemberPress emails", "membership triggers", "subscription management"]
---

# MemberPress WordPress Notification Integration

**MemberPress WordPress notification integration** provides enhanced control over membership-related emails and notifications. This guide shows how to prevent duplicate emails and customize notification behavior when using MemberPress with the Notification plugin.

## Avoid unwanted password reset mail from MemberPress

```php
add_filter( 'mepr-wp-mail-recipients', function( $recipients, $subject, $message, $headers ) {
  if ( strpos( $subject, 'Password Reset') !== false ) {
    $recipients = []; // Remove all recipients.
  }
  return $recipients;
}, 11, 4 );
```