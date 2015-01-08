var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    minifyCSS  = require('gulp-minify-css'),
    postcss    = require('gulp-postcss'),
    plumber    = require('gulp-plumber'),
    rename     = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify     = require('gulp-uglify')
;

// Paths
var path = {};
    path.src = 'src';
    path.srcJs = path.src + '/js';
    path.sass = path.src + '/sass';
    path.srcCss = path.src + '/css';
    path.dist = 'dist';
    path.distJs = path.dist + '/js';
    path.distCss = path.dist + '/css';



// Stylesheets task
gulp.task('styles', function() {

    gulp.src([path.sass + '/**/*.scss'])
        .pipe(plumber())

        .pipe(sourcemaps.init())
            .pipe(sass())
        .pipe(sourcemaps.write({ includeContent: false, sourceRoot: '/' + path.srcSass }))

        .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(postcss([
                require('autoprefixer-core')({
                    browsers: ['last 2 versions', 'Explorer 9'],
                }),
                require('css-mqpacker'),
            ]))
        .pipe(sourcemaps.write({ includeContent: false, sourceRoot: '/' + path.srcCss }))
        .pipe(gulp.dest(path.srcCss))

        .pipe(minifyCSS({
            keepSpecialComments: 0
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(path.distCss));

});

// Uglify task
gulp.task('uglify', function() {

    gulp.src([path.srcJs + '/**/*.js'])
        .pipe(plumber())

        .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./maps'))

        .pipe(gulp.dest(path.distJs));

});

// Watch task
gulp.task('watch', function() {

    gulp.watch(path.sass + '/**/*.scss', ['styles']);

});

// Build task
gulp.task('build', ['styles', 'uglify']);
