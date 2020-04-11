$(document).ready(function () {
    //增加其他筆記---
    $('body').append('<div class="others"></div>');
    $('.others').append('<nav></nav>');
    $('nav').append('<ul></ul><ul></ul>');
    $('nav').children('ul').eq(0).append('<li><a href="#" class="more-btn" data-name="more">更多筆記</a></li>');
    //各筆記欄位 排序 資料名稱 連結位置 連結名稱
    function NotesLink(ListNumber ,DataName, Href, LinkName){
        $('nav').children('ul').eq(1).append('<li><a></a></li>')
        $('nav').children('ul').eq(1).children('li').children('a').eq(ListNumber).data('name', DataName).attr('href', Href).text(LinkName);
    }    
    /*產生所有筆記內容*/
    NotesLink(0, 'Git', '../notes/git.html', 'Git');
    NotesLink(1, 'Css', '../notes/css.html', 'Css');
    NotesLink(2, 'Html', '../notes/html.html', 'Html');
    NotesLink(3, 'SCSS', '../notes/scss.html', 'SCSS');
    NotesLink(4, 'Sketch', '../notes/sketch.html', 'Sketch');
    NotesLink(5, 'JQuery', '../notes/jquery.html', 'JQuery');
    NotesLink(6, 'Visual Studio Code', '../notes/vscode.html', 'VS Code');
    NotesLink(7, 'Javascript', '../notes/javascript.html', 'Javascript');

    //判定資料類型
    var TitleName = $('h3').text();
    //判定筆記數量
    var NotesList = $('a').length;
    //撈出所有筆記的資料內容
    for (let i = 0; i < NotesList; i++) {
        var NotesName = $('a').eq(i).data('name');
        if ($('a').eq(i).data('name') == TitleName) {
            $('a').eq(i).parent('li').remove();
        }
    }

    //展開其他筆記---
    $('.more-btn').click(function (e) { 
        var BtnStatus = $(this).text();
        if (BtnStatus == '更多筆記') {
            $(this).text('隱藏內容');
            $('.others').css('right', '0');
        } else {
            $(this).text('更多筆記');
            $('.others').css('right', '-90%');
        }
        return false;
    });
});