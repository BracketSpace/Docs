---
title: "Automatic WordPress Notification Trigger Testing"
sidebar_label: "Automatic testing"
sidebar_position: 1
description: "Learn how to automatically test WordPress notification triggers without wp-admin setup. Create programmatic test notifications with merge tags."
keywords: ["WordPress trigger testing", "automatic notification testing", "programmatic notifications", "trigger automation", "merge tag testing", "notification debugging", "developer testing", "WordPress automation"]
---

# Automatic WordPress Notification Trigger Testing

**WordPress notification trigger testing** can be automated programmatically without manual wp-admin configuration. This powerful technique creates test notifications automatically for every registered trigger, including all merge tags in the content for comprehensive testing and debugging.

If you ever wondered how you can automatically test your Triggers without setup them up via wp-admin, this guide is for you.

Use below snippet to create an email notification in background, with one Administrator recipient and all the merge tags in the content. The subject is Trigger name.

```php
add_action(
	'notification/trigger/registered',
	function($trigger) {
		$content = '';
		foreach ($trigger->getMergeTags( 'visible' ) as $merge_tag) {
			$content .= $merge_tag->getName() . ': {' . $merge_tag->getSlug() . '}' . "\r\n\r\n";
		}

		$config = [
			'hash' => 'notification_' . uniqid(),
			'title' => $trigger->getName(),
			'trigger' => $trigger,
			'carriers' => [
				'email' => [
					'activated' => true,
					'enabled' => true,
					'subject' => $trigger->getName(),
					'body' => $content,
					'recipients' => [
						[
							'type' => 'administrator',
							'recipient' => '',
						],
					],
				],
			],
			'enabled' => true,
			'extras' => [],
			'version' => time(),
		];

		\BracketSpace\Notification\Register::notificationFromArray($config);
	}
);
```