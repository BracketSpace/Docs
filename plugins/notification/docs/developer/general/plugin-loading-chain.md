---
title: "WordPress Notification Plugin Loading Chain & Hooks"
sidebar_label: "Plugin loading chain"
sidebar_position: 1
description: "Understand WordPress Notification plugin initialization sequence, loading hooks, and proper integration timing for WordPress plugin development."
keywords: ["WordPress plugin loading", "plugin initialization", "WordPress hooks", "init hook", "plugin loading chain", "WordPress integration", "plugin development", "hook priority"]
---

# WordPress Notification Plugin Loading Chain & Hooks

**WordPress Notification plugin loading chain** defines the initialization sequence and hook priorities for proper plugin integration. Understanding this loading process is essential for developers building extensions or integrating with the notification system.

1. Plugin loaded by WordPress (or theme/plugin if it's bundled)
2. On `init 5` Notification plugin is initialized - all the classes and functions are loaded
3. `do_action( 'notification/init' )` - Plugin is initialized. Safe for extending