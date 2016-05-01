'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixerSettings = require('./gulp/autoprefixer');
var autoprefixer = require('gulp-autoprefixer')(autoprefixerSettings);

gulp.task('sass', function () {
  return gulp.src('./scss/griflex.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer)
    .pipe(gulp.dest('./dist/css'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename(function(path) {
        path.basename += ".min";
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});
