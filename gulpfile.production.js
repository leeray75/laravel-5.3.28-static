var git = require('git-rev')
var gulp = require('gulp');
var gulpif = require('gulp-if');
var map  = require('map-stream');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var rename = require("gulp-rename");
var debug = require('gulp-debug');
var rimraf = require('gulp-rimraf');
var minify = require('gulp-minify');
var nano = require('gulp-cssnano');
var replace = require('gulp-replace');

var fs = require('fs');
var path = require('path');
var merge = require('merge-stream');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jspm = require('gulp-jspm');

var htmlmin = require('gulp-html-minifier');
var _scssFiles = 'src/_scss/**/*.scss';
var _tsFiles = 'src/_ts/**/*.ts';

var tsProject = ts.createProject('tsconfig.json');

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(searchString, position) {
      var subjectString = this.toString();
      if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
  };
}
var renameMinJsFile = function(path){
	if(path.basename.endsWith("-min")){			
		path.basename = path.basename.replace(/-min([^-min]*)$/,'$1');
		path.extname = ".min.js";
	}		
}

function getFolders(dir) {
	return fs.readdirSync(dir)
	  .filter(function(file) {
		return fs.statSync(path.join(dir, file)).isDirectory();
	  });
}
	

(function(){
	var jsFiles = './build/dev/js/**/*', 
    jsDest = './build/Release/js';
	
	gulp.task('minify-js', function(cb) {
		console.log("minify-js");
	  return gulp.src('./build/dev/js/**/*.js')
		//.pipe(debug())
		.pipe(minify({
			/* exclude: ['tasks'], */
			ignoreFiles: ['.min.js','-min.js']
		}))
		.pipe(rename(renameMinJsFile))
		//.pipe(debug())
		.pipe(gulp.dest('./build/Release/js'));
	});
	
})();


gulp.task('minify-css', function(cb) {
	console.log('minify css');
    return gulp.src('./build/dev/css/**/*.css')
        .pipe(nano())
        .pipe(gulp.dest('./build/Release/css'));
});


gulp.task('copy-fonts', function(cb) {
	console.log("copy fonts");
  return gulp.src('./build/dev/fonts/**/*')
    .pipe(gulp.dest('./build/Release/fonts'));
});

gulp.task('copy-templates', function(cb) {
	console.log("copy templates");
  return gulp.src('./build/dev/templates/**/*')
    .pipe(gulp.dest('./build/Release/templates'));
});

gulp.task('copy-js', function(cb) {
	console.log("copy javascripts");
  return gulp.src('./build/dev/js/**/*')
    .pipe(gulp.dest('./build/Release/js'));
});
gulp.task('copy-css', function(cb) {
	console.log("copy css");
  return gulp.src('./build/dev/css/**/*')
    .pipe(gulp.dest('./build/Release/css'));
});

gulp.task('bundle',function(cb){
	console.log('jspm: bundling');
	return gulp.src('build/Release/js/globals/main.js')
		.pipe(jspm({
			fileName: 'global.min',
			minify: true
		}))
		.pipe(gulp.dest('build/Release/js/'));
});

gulp.task('compress-images',function(cb){
	var smushit = require('gulp-smushit');
    return gulp.src('_images/**/*.{jpg,png}')
        .pipe(smushit())
        .pipe(gulp.dest('images'));
})
gulp.task('build',['minify-css','minify-js','copy-fonts','copy-templates'],function(){
	// use the last GIT commit hash as cache buster
	gulp.start('bundle');
	git.long(function(str){
		gulp.src(['./src/CacheBuster.php'])
		.pipe(replace("$cacheVersion = '';","$cacheVersion = '"+str+"';"))
		.pipe(gulp.dest('./build'));
	})
});

gulp.task('clean-release', function(cb) {
	return gulp.src('./build/Release/*', { read: false }) // much faster
	  .pipe(rimraf());
});


gulp.task('default', ['clean-release'],function(){
	console.log("Start Build");
	gulp.start('build');
	gulp.start('compress-images');
});
