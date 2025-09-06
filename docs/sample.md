---
title: Sample Documentation Page
description: A comprehensive sample page showcasing all Docusaurus markdown and MDX features for testing styling and functionality
sidebar_position: 99
tags:
  - sample
  - testing
  - reference
keywords: [markdown, mdx, docusaurus, sample, reference]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Sample Documentation Page

This page contains examples of all available Docusaurus markdown and MDX features to test styling and functionality.

## Headings

All heading levels from H2 to H6:

## Heading Level 2
### Heading Level 3
#### Heading Level 4
##### Heading Level 5
###### Heading Level 6

## Text Formatting

This paragraph demonstrates various text formatting options. You can make text **bold**, *italic*, ***bold and italic***, ~~strikethrough~~, or use `inline code`. You can also create [links to external sites](https://bracketspace.com) or [internal links](./troubleshooting.md).

### Subscript and Superscript

Water is H<sub>2</sub>O and Einstein's famous equation is E=mc<sup>2</sup>.

## Lists

### Unordered Lists

- First item
- Second item
  - Nested item
  - Another nested item
    - Double nested item
- Third item

### Ordered Lists

1. First numbered item
2. Second numbered item
   1. Nested numbered item
   2. Another nested item
      1. Double nested numbered item
3. Third numbered item

### Task Lists

- [x] Completed task
- [ ] Incomplete task
- [ ] Another incomplete task
  - [x] Nested completed task
  - [ ] Nested incomplete task

## Blockquotes

> This is a simple blockquote.

> This is a longer blockquote that spans multiple lines to demonstrate how the styling works with longer content. It should wrap nicely and maintain proper formatting.
>
> This is a second paragraph within the same blockquote.

### Nested Blockquotes

> This is the first level of quoting.
>
> > This is a nested blockquote.
>
> Back to the first level.

## Horizontal Rules

Content above the horizontal rule.

---

Content below the horizontal rule.

## Tables

| Feature | Status | Notes |
|---------|--------|--------|
| Basic Table | ✅ Complete | Works great |
| Column Alignment | ✅ Complete | Left, center, right |
| Complex Content | ✅ Complete | **Bold**, *italic*, `code` |

### Table with Alignment

| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Left | Center | Right |
| This is a longer text | Center | Right |
| Short | Center content here | Right |

## Images

### Basic Image
![Docusaurus Logo](/img/docusaurus.png)

### Image with Title
![Docusaurus Logo](/img/docusaurus.png "Docusaurus Official Logo")

### Linked Image
[![Docusaurus Logo](/img/docusaurus.png)](https://docusaurus.io)

## Code Blocks

### Simple Code Block

```
This is a simple code block without syntax highlighting.
```

### JavaScript with Syntax Highlighting

```javascript
function greetUser(name) {
    console.log(`Hello, ${name}!`);
    return `Welcome to BracketSpace, ${name}`;
}

greetUser('Developer');
```

### Code Block with Title

```php title="includes/functions.php"
<?php
/**
 * Add custom notification trigger
 */
add_action('init', function() {
    notification_register_trigger(new CustomTrigger());
});
```

### Code Block with Line Highlighting

```jsx {2,4-6}
import React from 'react';

function Component() {
    const message = 'This line is highlighted';
    const anotherMessage = 'This line too';
    const thirdMessage = 'And this one';
    
    return <div>{message}</div>;
}
```

### Code Block with Line Numbers

```python showLineNumbers
def calculate_tax(amount, rate=0.1):
    """
    Calculate tax for a given amount
    """
    tax = amount * rate
    total = amount + tax
    return {
        'original': amount,
        'tax': tax,
        'total': total
    }

# Usage example
result = calculate_tax(100, 0.15)
printf("Total: ${result['total']}")
```

### Multi-Language Code Tabs

<Tabs>
  <TabItem value="php" label="PHP" default>

```php
<?php
$notification = new Notification([
    'title' => 'Welcome!',
    'message' => 'Thank you for joining us.'
]);
$notification->send();
```

  </TabItem>
  <TabItem value="js" label="JavaScript">

```javascript
const notification = {
    title: 'Welcome!',
    message: 'Thank you for joining us.'
};
sendNotification(notification);
```

  </TabItem>
  <TabItem value="python" label="Python">

```python
notification = {
    'title': 'Welcome!',
    'message': 'Thank you for joining us.'
}
send_notification(notification)
```

  </TabItem>
</Tabs>

## Admonitions

### Note Admonition

:::note
This is a note admonition. Use it for general information that users should be aware of.
:::

:::note[Custom Note Title]
This is a note with a custom title. You can include **markdown** formatting inside admonitions.
:::

### Tip Admonition

:::tip
This is a tip admonition. Use it for helpful suggestions and best practices.
:::

### Info Admonition

:::info
This is an info admonition. Use it for informational content that provides context.
:::

### Warning Admonition

:::warning
This is a warning admonition. Use it to highlight potential issues or important considerations.
:::

### Danger Admonition

:::danger
This is a danger admonition. Use it for critical warnings about potential problems or breaking changes.
:::

## Collapsible Sections

<details>
<summary>Click to expand this section</summary>

This content is hidden by default and only shown when the user clicks the summary. This is great for:

- FAQ sections
- Optional advanced configuration
- Detailed explanations
- Long code examples

```bash
# This code is hidden until expanded
npm install @bracketspace/notification
```

</details>

<details>
<summary>Nested Collapsible Content</summary>

You can also nest collapsible sections:

<details>
<summary>Inner collapsible section</summary>

This is content within a nested collapsible section. You can include any markdown content here:

- Lists
- Code blocks
- Images
- More collapsible sections!

</details>

</details>

## Advanced Tabs Usage

### Grouped Tabs

Here's an example with operating system specific instructions:

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">

```bash
# Windows installation
npm install -g @bracketspace/notification-cli
```

  </TabItem>
  <TabItem value="mac" label="macOS">

```bash
# macOS installation
brew install bracketspace-notification
```

  </TabItem>
  <TabItem value="linux" label="Linux">

```bash
# Linux installation
sudo apt-get install bracketspace-notification
```

  </TabItem>
</Tabs>

And here's another set of tabs with the same group ID - they'll sync:

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">

To run on Windows:

```bash
notification-cli.exe --version
```

  </TabItem>
  <TabItem value="mac" label="macOS">

To run on macOS:

```bash
notification --version
```

  </TabItem>
  <TabItem value="linux" label="Linux">

To run on Linux:

```bash
notification --version
```

  </TabItem>
</Tabs>

## Definition Lists

HTML definition lists are also supported:

<dl>
  <dt>Notification</dt>
  <dd>A system for sending automated messages to users based on WordPress events.</dd>
  
  <dt>Trigger</dt>
  <dd>An event that initiates the sending of a notification.</dd>
  
  <dt>Carrier</dt>
  <dd>The method used to deliver notifications (email, SMS, webhooks, etc.).</dd>
</dl>

## Complex Content Combinations

You can combine different elements for rich documentation:

:::tip[Pro Tip: Advanced Configuration]

When setting up complex notification workflows, consider using tabs to organize different approaches:

<Tabs>
  <TabItem value="simple" label="Simple Setup" default>

For basic notifications, use this configuration:

```php
add_action('user_register', function($user_id) {
    notification([
        'title' => 'Welcome!',
        'user_id' => $user_id
    ])->trigger('user/registered');
});
```

  </TabItem>
  <TabItem value="advanced" label="Advanced Setup">

For complex scenarios with multiple carriers:

<details>
<summary>View advanced configuration</summary>

```php
add_action('user_register', function($user_id) {
    $notification = notification([
        'title' => 'Welcome!',
        'user_id' => $user_id,
        'carriers' => ['email', 'sms', 'webhook']
    ]);
    
    // Add conditional logic
    if (user_has_role($user_id, 'premium')) {
        $notification->add_merge_tag('premium_benefits', get_premium_benefits());
    }
    
    $notification->trigger('user/registered');
});
```

</details>

  </TabItem>
</Tabs>

:::

## Footnotes

Here's some text with a footnote reference[^1]. You can also have multiple footnotes[^2].

[^1]: This is the first footnote with some explanation.
[^2]: This is the second footnote with additional information.

## HTML Elements

You can also use HTML elements when needed:

<div style={{backgroundColor: 'var(--bs-bg-secondary)', padding: '1rem', borderRadius: '8px'}}>
  This is a custom styled div using inline styles with CSS variables from our design system.
</div>

<kbd>Ctrl</kbd> + <kbd>C</kbd> to copy, <kbd>Ctrl</kbd> + <kbd>V</kbd> to paste.

## Summary

This sample page demonstrates the full range of Docusaurus markdown and MDX capabilities:

1. ✅ All heading levels (H1-H6)
2. ✅ Text formatting (bold, italic, strikethrough, code)
3. ✅ Links (internal, external)
4. ✅ Lists (ordered, unordered, nested, tasks)
5. ✅ Blockquotes (simple, nested)
6. ✅ Tables (basic, aligned)
7. ✅ Images (basic, titled, linked)
8. ✅ Code blocks (simple, highlighted, titled, numbered)
9. ✅ All admonition types (note, tip, info, warning, danger)
10. ✅ Tabs (basic, grouped, with code)
11. ✅ Collapsible sections
12. ✅ Definition lists
13. ✅ HTML elements
14. ✅ Footnotes
15. ✅ Complex combinations

This page serves as both a reference for content creators and a testing ground for styling consistency across the documentation site.