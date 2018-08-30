# Image Upload Preview Field

This field extends the existing Laravel Nova image field, but displays the form as a drag and drop box, which will display a preview of the added image immediately. All options that are available with the regular
Nova image field are available here.

## Installation
`composer require ajhaupt7/image-upload-preview`

## Usage
```
use Ajhaupt7\ImageUploadPreview\ImageUploadPreview;

ImageUploadPreview::make('Image')->disk('s3')
```