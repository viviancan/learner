
var VARK = {

    runtime: {
        vScore: 0,
        aScore: 0,
        rScore: 0,
        kScore: 0,
        preferredStyle: '',
        preferredStyle1: '',
        preferredStyle2: '',
        preferredStyle3: '',
        preferredStyle4: '',
        moreThanOneStyle: false,
        firstName: '',
        preferredStyleList: '',
        highestScore: 0,

        preferredStyleIncluded:false,
        preferredStyle1Included: false

    },

    init: function () {
        console.log("main js initiatied");

        $('#get-started-btn').on("click", function () {
            console.log("get-started-btn clicked");
        });

        var preferredStyleIncluded = Cookies.get('preferredStyle');
        var preferredStyle1Included = Cookies.get('preferredStyle1');

        if(preferredStyleIncluded || preferredStyle1Included){
            VARK.runtime.preferredStyle1Included = true;
            VARK.runtime.preferredStyleIncluded = true;
            VARK.html.showVarkResults();
        } else {
            VARK.html.showVarkQuiz();

        }



    },

    showVarkInformationDiv: function () {
        var preferredStyleIncluded = Cookies.get('preferredStyle');
        var preferredStyle1Included = Cookies.get('preferredStyle1');

        console.log(preferredStyleIncluded);
        console.log(preferredStyle1Included);

        if(preferredStyleIncluded || preferredStyle1Included){
            console.log("this is true!!");
            VARK.runtime.preferredStyle1Included = true;
            VARK.runtime.preferredStyleIncluded = true;
        }

        VARK.html.showVarkInformation();
    },

    clearVarkValuesAndCookies: function () {
        VARK.runtime.preferredStyle = '';
        VARK.runtime.preferredStyle1 = '';
        VARK.runtime.preferredStyle2 = '';
        VARK.runtime.preferredStyle3 = '';
        VARK.runtime.preferredStyle4 = '';
        VARK.runtime.moreThanOneStyle = false;
        VARK.runtime.highestScore = 0;

        Cookies.remove('preferredStyle');
        Cookies.remove('preferredStyle1');
        Cookies.remove('preferredStyle2');
        Cookies.remove('preferredStyle3');
        Cookies.remove('preferredStyle4');
    },

    calculateVarkResults:function () {
        console.log("calculating vark results");

        var firstName = Cookies.get('first-name');
        if(firstName){
            VARK.runtime.firstName = firstName;
            console.log(firstName);
        }

        VARK.clearVarkValuesAndCookies();

        var resultsArray = [];
        var highestScoreArray = [];
        var vScore = 0;
        var aScore = 0;
        var rScore = 0;
        var kScore = 0;

        $("input:checkbox[name=vark]:checked").each(function(){
            resultsArray.push($(this).val());
        });

        console.log(resultsArray);
        console.log(resultsArray.length);

        if(resultsArray.length < 10){
            VARK.html.showErrorMessage("Please select 10 or more answers for accurate results");
        } else {
            for (var i = 0; i < resultsArray.length; i++) {
                if (resultsArray[i] == "v") {
                    vScore += 1;
                } else if (resultsArray[i] == "a") {
                    aScore += 1;
                } else if (resultsArray[i] == "r") {
                    rScore += 1;
                } else {
                    kScore += 1;
                }
            }

            var learningStyles = {
                Visual: vScore,
                Aural: aScore,
                Read: rScore,
                Kinesthetic: kScore
            };

            VARK.runtime.vScore = vScore;
            VARK.runtime.aScore = aScore;
            VARK.runtime.rScore = rScore;
            VARK.runtime.kScore = kScore;

            console.log("learning styles");
            console.log(learningStyles);

            var highestScore = Math.max(vScore, aScore, kScore, rScore);
            VARK.runtime.highestScore = highestScore;
            console.log("highest score " + highestScore);

            Object.keys(learningStyles).forEach(function eachKey(key) {
                if (learningStyles[key] == highestScore) {
                    highestScoreArray.push(key);
                }
            });

            console.log(highestScoreArray);
            console.log(highestScoreArray[0]);

            var preferredStyles = [];

            if (highestScoreArray.length > 1) {
                console.log("more than one high score");
                VARK.runtime.moreThanOneStyle = true;
                for (var x = 0; x < highestScoreArray.length; x++) {
                    preferredStyles.push(highestScoreArray[x]);
                }
            } else {
                console.log("only one style");
                preferredStyles.push(highestScoreArray[0]);
                VARK.runtime.preferredStyle = highestScoreArray[0];
            }

            if (preferredStyles.length > 1) {
                console.log("preffered style length greater than 1")
                VARK.runtime.preferredStyleList = preferredStyles;
                if (preferredStyles[0]) {
                    VARK.runtime.preferredStyle1 = preferredStyles[0];
                }
                if (preferredStyles[1]) {
                    VARK.runtime.preferredStyle2 = preferredStyles[1];
                }
                if (preferredStyles[2]) {
                    VARK.runtime.preferredStyle3 = preferredStyles[2];
                }
                if (preferredStyles[3]) {
                    VARK.runtime.preferredStyle4 = preferredStyles[3];
                }
            } else {
                VARK.runtime.preferredStyleList = preferredStyles;
                VARK.runtime.preferredStyle = preferredStyles[0];
                console.log("preferred style");
                console.log(VARK.runtime.preferredStyle);
            }

            VARK.saveVarkCookie();
            VARK.html.showVarkResultsModal();
        }

    },

    saveVarkCookie: function () {
        console.log("saving vark cookie");
        Cookies.set("Visual", VARK.runtime.vScore, { expires: 60 });
        Cookies.set("Aural / Auditory", VARK.runtime.aScore, { expires: 60 });
        Cookies.set("Read / Write", VARK.runtime.rScore, { expires: 60 });
        Cookies.set("Kinesthetic", VARK.runtime.kScore, { expires: 60 });

        console.log(VARK.runtime.moreThanOneStyle);
        console.log(VARK.runtime.preferredStyle);
        console.log(VARK.runtime.preferredStyle1);
        console.log(VARK.runtime.preferredStyle2);
        console.log(VARK.runtime.preferredStyle3);
        console.log(VARK.runtime.preferredStyle4);

        if(VARK.runtime.moreThanOneStyle){
            console.log("trying to save cookies for more than one style ");
            if(VARK.runtime.preferredStyle1) {
                Cookies.set("preferredStyle1", VARK.runtime.preferredStyle1, { expires: 60 });
            }

            if(VARK.runtime.preferredStyle2) {
                Cookies.set("preferredStyle2", VARK.runtime.preferredStyle2, { expires: 60 });
            }

            if(VARK.runtime.preferredStyle3) {
                Cookies.set("preferredStyle3", VARK.runtime.preferredStyle3, { expires: 60 });
            }

            if(VARK.runtime.preferredStyle4) {
                Cookies.set("preferredStyle4", VARK.runtime.preferredStyle4, { expires: 60 });
            }
        } else {
            if(VARK.runtime.preferredStyle) {
                Cookies.set("preferredStyle", VARK.runtime.preferredStyle, { expires: 60 });
            }
        }
    },

    html: {
        showVarkResults: function(){
            var html = '';

            html+='<div class="row">';
            html+='<div class="col-sm-10">';
            html+='<h2><strong>VARK Results</strong></h2>';
            html+='</div>';
            html+='</div>';

            html+='<div class="col-sm-9">';
            html += '</div>';

            $("#vark-quiz-content").html(html);
        },

        showVarkInformation: function () {
            var html = '';

            if(VARK.runtime.preferredStyleIncluded || VARK.runtime.preferredStyle1Included) {
                html += '<div class="row">';
                html += '<p>You have already taken the quiz! <a href="varkquiz.html"> View your results here</a></p>';
                html += '</div>';
                html += '</div>';
            } else {
                html += '<div class="row">';
                html += '<p>Your results will be given to you at the end of the questionnaire. Click the button to' +
                    ' get started.</p>';
                html += '<div class="form-group">';
                html += '<label for="first-name">Please enter your first name</label>';
                html += '<input type="text" class="form-control" id="first-name" aria-describedby="first-name"placeholder="First' +
                    ' name">';
                html += '<small style="color: red; display: none;" id="error-name"> *First name required</small>';
                html += '</div>';
                html += '<button type="button" class="btn btn-primary" id="start-quiz-btn">Start Questionnaire</button>';
                html += '</div>';
            }

            $("#vark-information-div").html(html);

            $("#first-name").on("keydown", function () {
                $("#error-name").hide();
                $("#first-name").css({"background-color": ""});
            });

            $("#start-quiz-btn").on("click", function (e) {
                e.preventDefault();
                console.log("quiz button clicked");
                var firstName = $("#first-name").val();

                if(firstName == "" || !firstName){
                    console.log("No first name");
                    $("#first-name").css({"background-color": "#ffe8e7"});
                    $("#error-name").show();
                } else {
                    console.log(firstName);
                    Cookies.set("first-name", firstName, { expires: 60 });
                    window.location = "http://localhost:63342/learner/varkquiz.html";
                }

            });

        },

        showVarkResultsModal: function () {
            console.log("showing vark results modal");

            var html = "";

            html += '<div id="vark-results-modal" class="modal fade" role="dialog">';
            html += '<div class="modal-dialog" style="z-index: 1080;">';
            html += '<div class="modal-content">';

            html += '<div class="modal-header">';
            html += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
            html += '<h4 class="modal-title">'+ VARK.runtime.firstName +', here are your VARK results </h4>';
            html += '</div>';

            html += '<div class="modal-body">'; // start modal body

            html += '<div class="row">';
                if(VARK.runtime.moreThanOneStyle){
                    html += '<h4>You are considered <i><strong>multimodal.</strong></i></h4>';
                    html += '<p>According to the VARK guide, you do not have one area that is stronger than the' +
                        ' others. There are two types of multimodal preferences: (1) Individuals who are able to' +
                        ' switch from mode to mode depending on the environment and (2) Individuals who will not feel' +
                        ' satisfied until each of their learning preferences have been utilized.</p>';
                    html += '<p>Your preferred methods are:</p>';
                    html += '<ul>';
                    html += '<li>'+ VARK.runtime.preferredStyle1  +'</li>';
                    html += '<li>'+ VARK.runtime.preferredStyle2 +'</li>';
                    if(VARK.runtime.preferredStyle3){
                        html += '<li>'+ VARK.runtime.preferredStyle3 +'</li>';
                    }
                    if(VARK.runtime.preferredStyle4){
                        html += '<li>'+ VARK.runtime.preferredStyle4 +'</li>';
                    }
                    html += '</ul>';
                } else {
                    html += '<h4>Your preferred style is '+ VARK.runtime.preferredStyle +' with a score of '+ VARK.runtime.highestScore+'</h4>';
                }

            html += '</div>';


            html += '<div class="row">';
            html += '<p><strong>(V) Visual: </strong>'+ VARK.runtime.vScore +'</p>';
            html += '</div>';

            html += '<div class="row">';
            html += '<p><strong>(A) Aural / Auditory: </strong>'+ VARK.runtime.aScore +'</p>';
            html += '</div>';

            html += '<div class="row">';
            html += '<p><strong>(R) Read / Write: </strong>'+ VARK.runtime.rScore +'</p>';
            html += '</div>';

            html += '<div class="row">';
            html += '<p><strong>(K) Kinesthetic: </strong>'+ VARK.runtime.kScore +'</p>';
            html += '</div>';

            html += '</div>'; // end modal body

            html += '<div class="modal-footer">';
            html += '</div>'; // end modal footer


            html += '</div>';
            html += '</div>';
            html += '</div>';

            $("#modal-div").html(html);
            $("#vark-results-modal").modal("show");

        },

        showVarkQuiz: function () {
            var html = '';

            html+='<div class="row">';
            html+='<div class="col-sm-10">';
            html+='<h2><strong>VARK Questionnaire</strong></h2>';
            html+='<p>Choose all answers that you feel apply to you. You may choose more than one answer for each question.' +
                ' Leave any questions that do not apply to you blank. </p>';
            html+='</div>';
            html+='</div>';

            html+='<div class="col-sm-9">';

            html+='<div class="row">';
            html+='<div class="form-group">';
            html+='<h5><strong>1. You are helping someone who wants to go to your airport, the center of town or' +
                ' railway  station. You would:</strong></h5>';
            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="k" id="1-1"> go with her';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="a" id="1-2"> tell her the directions';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="r" id="1-3"> write down the directions';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="v" id="1-4"> draw, or show her a map, or give her a map';
            html+='</label>';
            html+='</div>';
            html+='</div>';
            html+='</div> <!--end row-->';

            html+='<div class="row">';
            html+='<div class="form-group">';
            html+='<h5><strong>2. A website has a video showing how to make a special graph. There is a person speaking, some lists and words describing what to do and some diagrams. You would learn most from: </strong></h5>';
            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="v" id="2-1"> seeing the diagrams';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="a" id="2-2"> listening';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="r" id="2-3"> reading the words';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="k" id="2-4"> watching the actions';
            html+='</label>';
            html+='</div>';
            html+='</div>';
            html+='</div> <!--end row-->';

            html+='<div class="row">';
            html+='<div class="form-group">';
            html+='<h5><strong>3. You are planning a vacation for a group. You want some feedback from them about the plan. You' +
                ' would:</strong></h5>';
            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="k" id="3-1"> describe some of the highlights they will experience';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="v" id="3-2"> use a map to show them the places';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="r" id="3-3"> give them a copy of the printed itinerary';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="a" id="3-4"> phone, text, or email them';
            html+='</label>';
            html+='</div>';
            html+='</div>';
            html+='</div> <!--end row-->';

            html+='<div class="row">';
            html+='<div class="form-group">';
            html+='<h5><strong>4. You are going to cook something as a special treat. You would:</strong></h5>';
            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="k" id="4-1"> cook something you know without the need for' +
                ' instructions';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="a" id="4-2"> ask friends for suggestions';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="v" id="4-3"> look on the Internet or in some cookbooks for ideas' +
                ' from pictures';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="r" id="4-4"> use a good recipe';
            html+='</label>';
            html+='</div>';
            html+='</div>';
            html+='</div> <!--end row-->';

            html+='<div class="row">';
            html+='<div class="form-group">';
            html+='<h5><strong>5. A group of tourists want to learn about the parks or wildlife reserves in your area. You' +
                ' would:</strong></h5>';
            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="a" id="5-1"> talk about, or arrange a talk for them about parks or' +
                ' wildlife reserves';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="v" id="5-2"> show them maps and internet pictures';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="k" id="5-3"> take them to a park or wildlife reserve and walk with' +
                ' them';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="r" id="5-4"> give them a book or pamphlets about the parks or' +
                ' wildlife reserves';
            html+='</label>';
            html+='</div>';
            html+='</div>';
            html+='</div> <!--end row-->';

            html+='<div class="row">';
            html+='<div class="form-group">';
            html+='<h5><strong>6. You are about to purchase a digital camera or mobile phone. Other than price, what would most' +
                ' influence your decision?</strong></h5>';
            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="k" id="6-1"> Trying or testing it';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="r" id="6-2"> Reading the details or checking its features online';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="v" id="6-3"> It is a modern design and looks good reserve and walk' +
                ' with them';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="a" id="6-4"> The salesperson telling me about its features';
            html+='</label>';
            html+='</div>';
            html+='</div>';
            html+='</div> <!--end row-->';

            html+='<div class="row">';
            html+='<div class="form-group">';
            html+='<h5><strong>7. Remember a time when you learned how to do something new. Avoid choosing a physical skill,' +
                ' eg.riding a bike. You learned best by:</strong></h5>';
            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="k" id="7-1"> watching a demonstration';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="a" id="7-2"> listening to somebody explaining it and asking questions';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="v" id="7-3"> diagrams, maps, and charts - visual clues';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="r" id="7-4"> written instructions – e.g. a manual or book';
            html+='</label>';
            html+='</div>';
            html+='</div>';
            html+='</div> <!--end row-->';

            html+='<div class="row">';
            html+='<div class="form-group">';
            html+='<h5><strong>8. You have a problem with your heart. You would prefer that the doctor:</strong></h5>';
            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="r" id="8-1"> gave you a something to read to explain what was wrong';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="a" id="8-2"> used a plastic model to show what was wrong';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="k" id="8-3"> describe what was wrong';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="v" id="8-4"> showed you a diagram of what was wrong';
            html+='</label>';
            html+='</div>';
            html+='</div>';
            html+='</div> <!--end row-->';

            html+='<div class="row">';
            html+='<div class="form-group">';
            html+='<h5><strong>9. You want to learn a new program, skill or game on a computer. You would:</strong></h5>';
            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="r" id="9-1"> read the written instructions that came with the' +
                ' program.';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="a" id="9-2"> talk with people who know about the program';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="k" id="9-3"> use the  controls or keyboard';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="v" id="9-4"> follow the diagrams in the book that came with it';
            html+='</label>';
            html+='</div>';
            html+='</div>';
            html+='</div> <!--end row-->';

            html+='<div class="row">';
            html+='<div class="form-group">';
            html+='<h5><strong>10. I like websites that have:</strong></h5>';
            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="k" id="10-1"> things I can click on, shift, or try';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="v" id="10-2"> interesting design and visual features';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="r" id="10-3"> interesting written descriptions,lists, and' +
                ' explanations';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="a" id="10-4"> audio channels where I can hear music, radio programs,' +
                ' or interviews';
            html+='</label>';
            html+='</div>';
            html+='</div>';
            html+='</div> <!--end row-->';

            html+='<div class="row">';
            html+='<div class="form-group">';
            html+='<h5><strong>11. Other than price, what would most influence your decision to buy a new non-fiction' +
                ' book?</strong></h5>';
            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="v" id="11-1"> The way it looks is appealing';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="r" id="11-2"> Quickly reading parts of it';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="a" id="11-3"> A friend talks about it and recommends it';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="k" id="11-4"> It has real-life stories, experiences, and examples';
            html+='</label>';
            html+='</div>';
            html+='</div>';
            html+='</div> <!--end row-->';

            html+='<div class="row">';
            html+='<div class="form-group">';
            html+='<h5><strong>12. You are using a book, CD or website to learn how to take photos with your new digital camera.' +
                ' You would like to have:</strong></h5>';
            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="a" id="12-1"> a chance to ask questions and talk about the camera' +
                ' and its features';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="r" id="12-2"> clear written instructions with lists and bullet' +
                ' points about what to do';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="v" id="12-3"> diagrams showing the camera and what each part does';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="k" id="12-4"> many examples of good and poor photos and how to' +
                ' improve them';
            html+='</label>';
            html+='</div>';
            html+='</div>';
            html+='</div> <!--end row-->';

            html+='<div class="row">';
            html+='<div class="form-group">';
            html+='<h5><strong>13. Do you prefer a teacher or presenter who uses: </strong></h5>';
            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="k" id="13-1"> demonstrations, models or practical sessions';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="a" id="13-2"> question and answer, talk, group discussion, or guest' +
                ' speakers';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="r" id="13-3"> handouts, books, or readings';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="v" id="13-4"> diagrams, charts or graphs';
            html+='</label>';
            html+='</div>';
            html+='</div>';
            html+='</div> <!--end row-->';

            html+='<div class="row">';
            html+='<div class="form-group">';
            html+='<h5><strong>14. You have finished a competition or test and would like some feedback. You would like to have' +
                ' feedback: </strong></h5>';
            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="k" id="14-1"> using examples from what you have done';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="r" id="14-2"> using a written description of your results';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="a" id="14-3"> from somebody who talks it through with you';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="v" id="14-4"> using graphs showing what you had achieved';
            html+='</label>';
            html+='</div>';
            html+='</div>';
            html+='</div> <!--end row-->';

            html+='<div class="row">';
            html+='<div class="form-group">';
            html+='<h5><strong>15. You are going to choose food at a restaurant or cafe. You would: </strong></h5>';
            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="k" id="15-1"> choose something that you have had there before';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="a" id="15-2"> listen to the waiter or ask friends to recommend' +
                ' choices';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="r" id="15-3"> choose from the descriptions in the menu';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="v" id="15-4"> look at what others are eating or look at pictures of' +
                ' each dish';
            html+='</label>';
            html+='</div>';
            html+='</div>';
            html+='</div> <!--end row-->';


            html+='<div class="row">';
            html+='<div class="form-group">';
            html+='<h5><strong>16. You have to make an important speech at a conference or special occasion. You' +
                '  would:</strong></h5>';
            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="v" id="16-1"> make diagrams or get graphs to help explain things';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="a" id="16-2"> write a few key words and practice saying your speech' +
                ' over and over';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="r" id="16-3"> write out your speech and learn from reading it over' +
                ' several times';
            html+='</label>';
            html+='</div>';

            html+='<div class="checkbox">';
            html+='<label>';
            html+='<input type="checkbox" name="vark" value="k" id="16-4"> gather many examples and stories to make the talk' +
                ' real and practical';
            html+='</label>';
            html+='</div>';
            html+='</div>';
            html+='</div> <!--end row-->';

            // html+='</div><!-- end vark form -->';

            html+='<div class="row">';
            html+='<button type="button" class="btn btn-primary" id="get-results-btn">Get Results</button>';
            html+='</div>';

            $("#vark-quiz-content").html(html);

            $("#get-results-btn").on("click", function () {
                console.log(" get results btn clicked");
                VARK.calculateVarkResults();
            });
        },

        showErrorMessage: function (message) {
            var html ='';
            html += '<div class="alert alert-warning alert-dismissible" id="danger-warning">';
            html += '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>';
            html += message;
            html += '</div>';

            $("#message").show();
            $("#message").html(html);
            $(window).scrollTop(0);

        }

    }

};

