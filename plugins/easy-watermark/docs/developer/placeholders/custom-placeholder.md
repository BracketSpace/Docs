---
id: custom-placeholder
title: "Create Custom Watermark Placeholders - Easy Watermark Developer Guide"
sidebar_label: Custom Placeholder
sidebar_position: 2
description: "Learn how to create custom watermark placeholders for Easy Watermark plugin. PHP development guide with code examples for dynamic text watermarks."
keywords: ["custom watermark placeholders", "easy watermark development", "php watermark placeholders", "wordpress watermark coding", "custom placeholder class", "watermark plugin development", "placeholder resolver", "dynamic watermark php"]
---

# Create Custom Watermark Placeholders

**Creating custom watermark placeholders** extends Easy Watermark's functionality with personalized dynamic content for your WordPress watermarks. This developer guide shows how to build PHP classes that generate custom placeholder values for advanced watermarking scenarios.

Each placeholder is defined with a class responsible for replacing a specific string tag with a dynamic value. Placeholder class needs to extend `EasyWatermark\Placeholders\Abstracts\Placeholder` and should implement the following methods:

1. `resolve` - returning the value of the placeholder
2. `validate` - checking if the value is correct
3. `sanitize` - sanitizing the value

There are also 4 abstract placeholders available that implement the `validate` and `sanitize` methods for a given value type:

1. `EasyWatermark\Placeholders\Abstracts\EmailPlaceholder`
2. `EasyWatermark\Placeholders\Abstracts\IntegerPlaceholder`
3. `EasyWatermark\Placeholders\Abstracts\StringPlaceholder`
4. `EasyWatermark\Placeholders\Abstracts\UrlPlaceholder`

### Placeholder class

```php
use EasyWatermark\Placeholders\Abstracts\StringPlaceholder;

/**
 * Abstract placeholder
 */
class FavoriteColorPlaceholder extends StringPlaceholder {

	/**
	 * Constructor
	 *
	 * @return void
	 */
	public function __construct() {

		$this->slug    = 'favorite_color';
		$this->name    = __( 'Favorite color', 'textdomain' );
		$this->example = __( 'blue', 'textdomain' );

	}

	/**
	 * Resolves placeholder
	 *
	 * @param  EasyWatermark\Placeholders\Resolver $resolver Placeholders resolver instance.
	 * @return string
	 */
	public function resolve( $resolver ) {

		$user = wp_get_current_user();
		return get_user_meta( 'favorite_color', $user->ID );

	}
}

```

The above class will replace a `%favorite_color%` string in the watermark text with the value of a `favorite_color` meta for logged-in user.

### Registering the Placeholder

```php
/**
 * @param EasyWatermark\Placeholders\Resolver $resolver Placeholders resolver instance.
 */
add_action( 'easy-watermark/placeholders/load', function ( $resolver ) {
    // Add custom placeholder instance to the resolver.
    $resolver->add_placeholder( new FavoriteColorPlaceholder() );
} );
```