var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    postcss    = require('gulp-postcss'),
    plumber    = require('gulp-plumber'),
    rename     = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify     = require('gulp-uglify')
;

// Stylesheets task
gulp.task('styles', function() {

    gulp.src(['src/sass/**/*.scss'])
        .pipe(plumber())
        .pipe(sass())

        .pipe(postcss([
            require('autoprefixer-core')({
                browsers: ['last 2 versions', 'Explorer 9'],
            }),
            require('css-mqpacker')
        ]))
        .pipe(gulp.dest('src/css'))

        .pipe(postcss([ require('csswring') ]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))

});

// Uglify task
gulp.task('uglify', function() {

    gulp.src(['src/js/**/*.js'])
        .pipe(plumber())

        .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))

        .pipe(gulp.dest('dist/js'))

});

// Watch task
gulp.task('watch', function() {

    gulp.watch('src/sass/**/*.scss', ['styles']);

});

// Build task
gulp.task('build', ['styles', 'uglify']);
