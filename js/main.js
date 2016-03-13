$(function() {
    $('#index').show();
    $('#link').hide();
    $('#work').hide();

    $('#button-index').click(function (){
        $('#specific').attr('href', 'css/hanaba.css');
        $('#index').show();
        $('#link').hide();
        $('#work').hide();
    });
    $('#button-link').click(function (){
        $('#specific').attr('href', 'css/hiwamoegi.css');
        $('#index').hide();
        $('#link').show();
        $('#work').hide();
    });
    $('#button-work').click(function (){
        $('#specific').attr('href', 'css/sangosyu.css');
        $('#index').hide();
        $('#link').hide();
        $('#work').show();
    });
});
