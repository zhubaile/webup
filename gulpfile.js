var gulp = require('gulp'),
    fileinclude = require('gulp-file-include');

gulp.task('fileinclude', function () {
    //找到src目录下所有的html文件
    gulp.src(['./_html/*.html'])
        //每个文件经过fileinclude插件方法的执行
        .pipe(fileinclude({
            prefix: '@@',//变量前缀 @@include
            basepath: './_html',//引用文件路径
            indent: true//保留文件的缩进
        }))
        //最后生成新的文件放在dist目录下
        .pipe(gulp.dest('./html'));//输出文件路径
});
gulp.task('watch', function () {
    //这个意思是src目录下的html发生改动就触动fileinclude任务
    gulp.watch('./_html/*.html', ['fileinclude']);
});