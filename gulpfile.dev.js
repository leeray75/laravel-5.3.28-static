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
var uglify = require('gulp-uglify');

var jspm = require('gulp-jspm');
var webpack = require('gulp-webpack');
var _webpack = require('webpack');
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
	
gulp.task('sass', function() {
    return gulp.src(_scssFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/dev/css'));
});

gulp.task('typescript', function() {
	var scriptsPath = './src/_ts/apps';
	var folders = getFolders(scriptsPath);
	
	var tasks = folders.map(function(folder) {
		var tsProject = ts.createProject('tsconfig.json',{
			//outFile: folder+".combo.js"
		});
		var src = path.join(scriptsPath, folder, '/**/*.ts');
		  return gulp.src(src)
			.pipe(tsProject())
			.pipe(gulp.dest('build/dev/js/apps/'+folder));    
	});
	
	tsProject = ts.createProject('tsconfig.json');
    var tsTask = gulp.src(_tsFiles )
        .pipe(tsProject())
        .pipe(gulp.dest('build/dev/js'));
	return merge(tasks, tsTask);
});

function debounce(){
	let timeout;
	return function(cb){
		clearTimeout(timeout);
		timeout = setTimeout(()=>{
			cb();
		},100)
	}
}

//Watch task
gulp.task('watch', function() {
	let _debounce = debounce();
    watch(_scssFiles, function () {
        gulp.start("sass");
    });	
	watch(_tsFiles, function () {		 
        gulp.start("typescript",function(){
        	gulp.start('bundle',function(){});
        });
    });	

	watch('src/templates/**/*',function(){
		gulp.start('copy-templates');
	})
/*
	watch('build/dev/js/globals/*.js',function(){
		gulp.start('bundle');
	})
	*/
});

gulp.task('clean-dev', function(cb) {
	return gulp.src('./build/dev/*', { read: false }) // much faster
	  .pipe(rimraf());
});


gulp.task('copy-fonts', function(cb) {
  return gulp.src('./src/fonts/**/*')
	.pipe(gulp.dest('./build/dev/fonts'))
 
});

gulp.task('copy-templates', function(cb) {
  return gulp.src('./src/templates/**/*')
	.pipe(gulp.dest('./build/dev/templates'))
});

gulp.task('bundle',function(cb){
	/*
	return gulp.src('build/dev/js/globals/main.js')
		.pipe(jspm({
			fileName: 'global'
		}))
		.pipe(gulp.dest('build/dev/js/'));
	*/
	/*
	return gulp.src('build/dev/js/globals/main.js')
		.pipe(webpack({
			output: {
		        filename: 'global.js',
		      }
		}))
		.pipe(gulp.dest('build/dev/js/'));
	*/
	var scriptsPath = './build/dev/js/apps';
	var folders = getFolders(scriptsPath);
	var webpackConfig = require('./webpack.config.js');
	//var tasks = folders.map(function(folder) {
	//	var src = path.join(scriptsPath, folder, '/**/main.js');
	//	  return gulp.src(src)
	//		.pipe(webpack(webpackConfig))
			//.pipe(rename(folder+'.combo.js'))
			//.pipe(rename('bundle.js'))
	//		.pipe(gulp.dest(path.join(scriptsPath, folder)));
			
	//});
	
    var task2 = gulp.src('build/dev/js/globals/main.js')
		.pipe(webpack(webpackConfig))
		//.pipe(rename('global.js'))
		.pipe(gulp.dest('build/dev/js/bundles/'));
		
	//return merge(tasks, task2);
	return task2;

/*

	return gulp.src('build/dev/js/globals/main.js')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(rename('global.js'))
		.pipe(gulp.dest('build/dev/js/'));
*/	
});

gulp.task('init',['sass', 'typescript', 'copy-templates','copy-fonts'],function(){	
	gulp.start("bundle");
	gulp.start("watch");
});

gulp.task('default', ['clean-dev'],function(){
	gulp.start('init');
});
