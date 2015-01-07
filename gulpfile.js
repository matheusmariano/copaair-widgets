var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
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
        .pipe(sass())

        .pipe(postcss([
            require('autoprefixer-core')({
                browsers: ['last 2 versions', 'Explorer 9'],
            }),
            require('css-mqpacker')
        ]))
        .pipe(gulp.dest(path.srcCss))

        .pipe(postcss([ require('csswring') ]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(path.distCss))

});

// Uglify task
gulp.task('uglify', function() {

    gulp.src([path.srcJs + '/**/*.js'])
        .pipe(plumber())

        .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))

        .pipe(gulp.dest(path.distJs))

});

// Watch task
gulp.task('watch', function() {

    gulp.watch(path.sass + '/**/*.scss', ['styles']);

});

// Build task
gulp.task('build', ['styles', 'uglify']);
