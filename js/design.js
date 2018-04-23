var DESIGN = {
    runtime: {

    },

    init: function () {
        DESIGN.showBreadcrumbNavbar();
        DESIGN.breadcrumbEvents();
    },

    showBreadcrumbNavbar: function () {
        var html = "";
        html += '<li id="bread-mood"><a href="design.html">Mood Board</a></li>';
        html += '<li id="bread-wireframe"><a href="#">Wireframes</a></li>';
        html += '<li id="bread-software"><a href="#">Software Resources</a></li>';
        $("#design-bread").html(html);
    },

    breadcrumbEvents: function () {
        $("#bread-mood").on("click", function () {

        });

        $("#bread-wireframe").on("click", function () {
            DESIGN.html.wireframe();
        });

        $("#bread-software").on("click", function () {
            DESIGN.html.software();
        });


    },

    html: {
        wireframe: function () {
            var html = "";
            html += '<div class="row">';
            html += '<div class="col-sm-12">';
            html += '<h4 style="letter-spacing: 2px; margin-top: 0px;"><strong>Wireframing</strong></h4>';

            html += '<p>After determining what kind of site you envision, evaluate your current site. This step is crucial in order to identify areas that are user-centered and areas that need to be revamped. If you do not have a current site, you can search a few sites and identify characteristics that you like. Looking for some inspiration, check out <a' +
                ' href="https://www.awwwards.com/" TARGET="_blank">AWWWARDS.COM</a></p>';
            html += '</div>';
            html += '</div>';

            html += '<div class="row row-top15 row-bottom15 text-center">';

            html += '<iframe width="560" height="315" src="https://www.youtube.com/embed/8-vTd7GRk-w"' +
                ' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
            html += '</div>';
            html += '<hr>';

            html += '<div class="row row-top15">';
            html += '<div class="col-sm-8">';
            html += '<h4><strong>Activity 1B</strong><br>';
            html += '<small>Please complete the questions before continuing.</small></h4>';
            html += '<ol>';
            html += '<li>Visit each of the sites from above. <ul><li>What are your initial thoughts on each' +
                ' of hte sites?</li> <li>What would you do to improve them?</li> <li>Would you be likely to' +
                ' visit these sites in the future?</li></ul> </li>';
            html += '<li>Do you have a current site?</li>';
            html += '<li>If yes, <ul><li>What are some characteristics that you like? Why do you like' +
                ' them?</li><li>What are' +
                ' some areas that need to be improved?</li></ul></li>';
            html += '<li>If no, <ul><li>What are some sites that you admire?</li> <li>Why do you like' +
                ' these sites?</li></ul></li>';
            html += '</ol>';
            html += '</div>';
            html += '</div>';

            html += '</div>';

            $("#design-main-content").html(html);
        },
        software: function () {
            var html = "";

            html += '<div class="row row-bottom15">';

            html += '<div class="col-sm-6">';
            html += '<figure>';
            html += '<img class="img-responsive" src="images/sketchui.png" alt="">';
            html += '<figcaption class="text-left"><small><i>Sketch </i></small></figcaption>';
            html += '</figure>';
            html += '</div>';

            html += '<div class="col-sm-6">';
            html += '<h4 style="letter-spacing: 2px; margin-top: 0px;"><strong>Software Resources</strong></h4>';
            html += '<p>OVERVIEW HERE</p>';

            html += '<ul>';
            html += '<li><a target="_blank" href="https://www.sketchapp.com/">Sketch App</a></li>';
            html += '<li><a target="_blank" href="https://www.invisionapp.com/">Invision</a></li>';
            html += '<li><a target="_blank" href="https://balsamiq.com/">Balsamiq</a></li>';
            html += '</ul>';

            html += '</div>'; // end right col

            html += '</div>'; //end row 1
            html += '<hr>';

            html += '<div class="row row-top15">';
            html += '<div class="col-sm-6">';
            html += '<h4><strong>Activity 2A</strong><br>';
            html += '<small>Please complete the questions before continuing.</small></h4>';
            html += '<ol>';
            html += '<li>Create a list of all potential users.</li>';
            html += '<li>For each user type, identify the following: ' +
                '<ul><li>Age, gender, ethnicity</li> <li>Education</li> <li>Physical ability</li>' +
                ' <li>General computer experience</li> <li>Relationship to You</li></ul></li>';
            html += '</ol>';
            html += '</div>';
            html += '</div>';

            html += '</div>';

            $("#design-main-content").html(html);
        }
    }
};