<?php

namespace Ajhaupt7\ImageUploadPreview;

use Laravel\Nova\Fields\Image;

class ImageUploadPreview extends Image
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'image-upload-preview';
}
