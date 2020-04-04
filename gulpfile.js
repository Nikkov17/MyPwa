var gulp = require('gulp');
var swPrecache = require('sw-precache');
var browserSync = require('browser-sync');

gulp.task('generate-sw', function () {
    var swOptions = {
        staticFileGlobs: [
        './index.html',
        './images/icons/*',
        './index.js',
        './style.css',
        ],
        stripPrefix: '.'
    };
    return swPrecache.write('./sw.js', swOptions);
});

gulp.task('default', function() {
    browserSync({
        notify: false,
        logPrefix: 'MyPwa',
        server: ['.'],
        open: false,
    });
    gulp.watch(
        [
            './index.html',
            './images/icons/*',
            './index.js',
            './style.css',
            './images/icons/*'
        ],
        gulp.parallel(['generate-sw']),
        gulp.parallel(browserSync.reload)
    )
});