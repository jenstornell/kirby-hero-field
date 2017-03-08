<?php
class HeroField extends ImageField {

	public function __construct() {
		$this->type    = 'select';
		$this->options = array();
		$this->icon    = 'image';
	}

	static public $fieldname = 'hero';
	static public $assets = array(
		'js' => array(
			'script.js',
		),
		'css' => array(
			'style.css',
		)
	);

	public function element() {
		$element = parent::element();
		$element->data('field', self::$fieldname);
		return $element;
	}

	public function content() {
		$content = parent::content();

		$div = brick('div');
		$div->addClass('hero-image');
		$div->append(function() {
			return brick('img')->attr('data-root', $this->page->contentURL() . '/');
		});

		return $content . $div;
	}
}