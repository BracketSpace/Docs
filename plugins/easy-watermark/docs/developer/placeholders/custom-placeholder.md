---
id: custom-placeholder
title: Custom Placeholder
sidebar_label: Custom Placeholder
sidebar_position: 2
---

# Custom Placeholder

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