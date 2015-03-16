var gulp = require('gulp'),
		gutil = require('gulp-util'),
		source = require('vinyl-source-stream'),
		browserify = require('browserify'),
		watchify = require('watchify'),
		reactify = require('reactify');

var bundler = watchify(browserify('./client/client.jsx', watchify.args));
bundler.transform('reactify');
bundler.on('update', bundle);

gulp.task('default', function() {
	gutil.log('Starting bundle task');
	bundle();
});

function bundle() {
	return bundler.bundle()
		.on('error', gutil.log.bind(gutil, 'Browserfy error'))
		.on('end', gutil.log.bind(gutil, 'Compile complete!'))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist'));
}