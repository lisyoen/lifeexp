requirejs.config({
    baseUrl: 'js',
    paths: {
        'handlebars': '../bower_components/handlebars/handlebars.min'
    },
});

requirejs(['handlebars'], function (Handlebars) {
    //    $('#myModal').modal({
    //        keyboard: true
    //    });
    $(function () {
        function scrollToQuestion(number) {
            $('body').delay(200).animate({
                scrollTop: number * 500
            }, 400);
        }

        function setButton(number, set) {
            switch (set) {
            case 1:
                {
                    console.log(number, 1);
                    $('.question-panel button.answer-yes[data-number=' + number + ']').removeClass(
                        'btn-default').addClass('btn-primary');
                    $('.question-panel button.answer-nocomment[data-number=' + number + ']').removeClass(
                        'btn-warning').addClass('btn-default');
                    $('.question-panel button.answer-no[data-number=' + number + ']').removeClass(
                        'btn-danger').addClass('btn-default');
                    break;
                }
            case 2:
                {
                    console.log(number, 2);
                    $('.question-panel button.answer-yes[data-number=' + number + ']').removeClass(
                        'btn-primary').addClass('btn-default');
                    $('.question-panel button.answer-nocomment[data-number=' + number + ']').removeClass(
                        'btn-default').addClass('btn-warning');
                    $('.question-panel button.answer-no[data-number=' + number + ']').removeClass(
                        'btn-danger').addClass('btn-default');
                    break;
                }
            case 3:
                {
                    console.log(number, 3);
                    $('.question-panel button.answer-yes[data-number=' + number + ']').removeClass(
                        'btn-primary').addClass('btn-default');
                    $('.question-panel button.answer-nocomment[data-number=' + number + ']').removeClass(
                        'btn-warning').addClass('btn-default');
                    $('.question-panel button.answer-no[data-number=' + number + ']').removeClass(
                        'btn-default').addClass('btn-danger');
                    break;
                }
            default:
                {
                    break;
                }
            }
        }

        $.getJSON('./js/question.json', function (data) {
            console.log(data);
            var questionTemplate = Handlebars.compile($('#question-template').html());
            var questionList = data.questionList;
            data.questionCount = questionList.length;
            for (var q in questionList) {
                questionList[q].number = Number(q) + 1;
                if (questionList[q].comment === '') {
                    questionList[q].comment = '-';
                }
            }
            window.data = data;

            $('#question-container').html(questionTemplate(data));

            $('#question-container').delegate("button.answer-yes", "click", function (e) {
                var btn = $(this);
                var number = Number(btn.data('number'));
                //var total = Number(data.questionCount);
                setButton(number, 1);
                scrollToQuestion(number);
            });

            $('#question-container').delegate("button.answer-no", "click", function (e) {
                var btn = $(this);
                var number = Number(btn.data('number'));
                //var total = Number(data.questionCount);
                setButton(number, 3);
                scrollToQuestion(number);
            });

            $('#question-container').delegate("button.answer-nocomment", "click", function (e) {
                var btn = $(this);
                var number = Number(btn.data('number'));
                //var total = Number(data.questionCount);
                setButton(number, 2);
                scrollToQuestion(number);
            });
        });
    });
});
