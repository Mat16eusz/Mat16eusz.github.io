function loadLanguage(lang) {
    $.each(lang, function (id, txt) {
        $(".text-" + id).html(txt);
    });
}

function loadPolish() {
    $.getJSON("../src/strings/pl.json", function (json) {
        loadLanguage(json);
        $("html").attr('lang', 'pl');
    }).fail(function (x) {
        console.log(x);
        alert("Nie można załadować języka polskiego.");
    });
}

function loadEnglish() {
    $.getJSON("../src/strings/en.json", function (json) {
        loadLanguage(json);
        $("html").attr('lang', 'en');
    }).fail(function () {
        console.log(x);
        alert("Can not load english language.");
    });
}

$('#polish-btn').on('click', loadPolish);
$('#english-btn').on('click', loadEnglish);