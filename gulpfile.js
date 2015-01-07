var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    postcss    = require('gulp-postcss'),
    plumber    = require('gulp-plumber'),
    rename     = require('gulp-rename')
;

// Stylesheets task
gulp.task('styles', function() {

    gulp.src(['scss/**/*.scss'])
        .pipe(plumber())
        .pipe(sass())

        .pipe(postcss([
            require('autoprefixer-core')({
                browsers: ['last 2 versions', 'Explorer 9'],
            }),
            require('css-mqpacker')
        ]))
        .pipe(gulp.dest('css'))

        .pipe(postcss([ require('csswring') ]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('css'))

});

// Watch task
gulp.task('watch', function() {

    gulp.watch('scss/**/*.scss', ['styles']);

});

// Build task
gulp.task('build', ['styles']);
