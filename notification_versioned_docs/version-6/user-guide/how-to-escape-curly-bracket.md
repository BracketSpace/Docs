---
id: how-to-escape-curly-bracket
title: How to escape curly bracket character
sidebar_label: How to escape curly bracket character
sidebar_position: 5
---

# How to escape curly bracket character

In some cases, you may need to use the `{` character in your notification content without it being interpreted as a merge tag.

To escape the `{` character, use a backslash before it: `\{`

## Examples

- To display `{literal text}`, write `\{literal text}`
- To display `{price}` without merge tag processing, write `\{price}`

This ensures that the curly brackets are treated as literal text rather than merge tag syntax.