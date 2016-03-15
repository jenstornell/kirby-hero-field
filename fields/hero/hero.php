<?php

class HeroField extends SelectField {

  public $extension;

   static public $assets = array(
    'js' => array(
      'hero.js',
    ),
    'css' => array(
      'image.css',
    )
  );

  public function element() {
    $element = parent::element();
    $element->addClass('field-with-hero');
    $element->data('field', 'herofield');
    return $element;
  }

  public function image() {
    return $this->page->image($this->value());
  }

  public function preview() {

    $figure = new Brick('figure');

    if($image = $this->image()) {
      $image_url = $image->url();
      $url = $image->url('edit');
    } else {
      $image_url = $this->value();
      $url = '';
    }

    return '<a href="' . $url . '" class="input-preview"><img src="' . $image_url . '"></a>';

  }

  public function input() {
    return parent::input() . $this->preview();
  }

  public function option($filename, $image, $selected = false) {

    if($image == '') {
      return new Brick('option', '', array(
        'value'    => '',
        'selected' => $selected
      ));
    } else {      
      return new Brick('option', $image->filename(), array(
        'value'      => $filename,
        'selected'   => $selected,
        'data-url'   => $image->url('edit'),
        'data-thumb' => $image->url()
      ));
    }

  }

  public function options() {

    $options = [];

    foreach($this->images() as $image) {
      $options[$image->filename()] = $image;
    }

    return $options;

  }

  public function images() {

    $images = $this->page->images();

    if(!empty($this->extension)) {

      if(!is_array($this->extension)) {
        $extensions = [$this->extension];
      } else {
        $extensions = $this->extension;
      }
      
      $images = $images->filter(function($image) use($extensions) {
        return in_array(strtolower($image->extension()), $extensions);
      });        
    
    }

    return $images;

  }

}
