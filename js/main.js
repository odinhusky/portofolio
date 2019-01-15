function ajaxme(filename) {
    var dom = $('.p_cont');
    $.ajax({
        method: 'post',
        url: 'ajax/' + filename,
        dataType: 'html',
        success: function (call) {
            console.log('success');
            $(dom).html(call);
        },
        error: function () {
            console.log('error');
        },
        complete: function () {
            console.log('complete');
        }
    });
}

$(document).ready(function () {
    ajaxme('ajax1.html');
    $('.obtn').on('click', function () {
        var _filename = $(this).attr('data-file');
        console.log(_filename);
        ajaxme(_filename);
    });
});