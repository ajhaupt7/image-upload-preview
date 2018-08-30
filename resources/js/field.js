Nova.booting((Vue, router) => {
    Vue.component('index-image-upload-preview', require('./components/IndexField'));
    Vue.component('detail-image-upload-preview', require('./components/DetailField'));
    Vue.component('form-image-upload-preview', require('./components/FormField'));
})
