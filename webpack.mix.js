let mix = require('laravel-mix');
mix.js('src/js/app.js', 'js');

mix.sass('src/sass/main.scss', 'css')
    .options({
        processCssUrls: false,
        autoprefixer: false
    });


mix.copy('src/fonts/*', 'dist/fonts')

mix.copy('src/img/*', 'dist/img/');
mix.copy('src/img/works/*', 'dist/img/works/');
mix.copy('src/img/behind/*', 'dist/img/behind/');
mix.copy('src/img/behind/process/*', 'dist/img/behind/process/');
mix.copy('src/img/behind/share/*', 'dist/img/behind/share/');
mix.copy('src/img/behind/blog/*', 'dist/img/behind/blog/');
mix.version();


mix.setPublicPath('dist');
