var http =  require('http')
var url = 'http://www.imooc.com/course/list?c=nodejs'
var cheerio = require('cheerio')
function filterChappters(html){
    var $ = cheerio.load(html);
    var chapters = $('.course-card-container');
//   console.log(chapters)
    var courseData = [];
    chapters.each(function(item){
        var chapters = $(this);
        var chapterTitle = chapters.find(".course-card-name").text();
        var chapterUrl = chapters.find(".course-card").attr("href");   
        courseData.push({chapterTitle:chapterTitle,chapterUrl:chapterUrl})
    })
   
    return courseData
};
function printCourseInfo (courseData){
    courseData.forEach(function(item){
        console.log(item.chapterTitle);
        console.log(item.chapterUrl)
    })
}
http.get(url,function(res){
    var html = ''
    res.on('data',function(data){
        html +=data
    })
    res.on('end',function(){
   
        var courseDta = filterChappters(html)
        printCourseInfo(courseDta)
    })
}).on('error',function(){
    console.log("出错了")
})