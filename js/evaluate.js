var EVALUATE = {
    runtime: {

    },

    init: function () {
        EVALUATE.showBreadcrumbNavbar();
        EVALUATE.breadcrumbEvents();
    },

    showBreadcrumbNavbar: function () {
        var html = "";
        html += '<li id="bread-evaluate"><a href="evaluate.html">Evaluate</a></li>';
        html += '<li id="bread-feedback"><a href="#">Feedback</a></li>';
        $("#design-bread").html(html);
    },

    breadcrumbEvents: function () {
        $("#bread-feedback").on("click", function () {
            EVALUATE.html.feedback();
        });
    },

    html: {
        feedback: function () {

            var html = "";
            html += '<div class="row">';

            html += '<div class="col-sm-6">';
            html += '<h4 style="letter-spacing: 2px; margin-top: 0px;"><strong>Feedback</strong></h4>';
            html += '<p>The Interaction Design Foundation suggests the <a href="https://www.interaction-design.org/literature/article/test-your-prototypes-how-to-gather-feedback-and-maximise-learning" target="_blank">following' +
                ' tips</a> (Dam & Siang,' +
                ' 2018) to gather' +
                ' feedback:</p>';
            html += '<ol>';
            html += '<li>Solicit feedback from a variety of users using a variety of protoypes/mockups</li>';
            html += '<li>Test on the right people</li>';
            html += '<li>Ask the right questions</li>';
            html += '<li>Be neutral when presenting ideas</li>';
            html += '<li>Adapt while testing</li>';
            html += '<li>Allow the user to contribute ideas</li>';
            html += '</ol>';
            html += '<p>Feedback is equally as important as all of the other phases. After all, this is <i>user' +
                ' centered design.</i></p>';
            html += '</div>';

            html += '<div class="col-sm-4 col-sm-offset-1">';
            html += '<figure>';
            html += '<img class="img-responsive" src="images/feedback.png" alt="">';
            html += '</figure>';
            html += '</div>';

            html += '</div>';


            $("#evaluate-main-content").html(html);
        },
        software: function () {
            var html = "";

            html += '<div class="row row-bottom15">';

            html += '<div class="col-sm-6">';
            html += '<figure>';
            html += '<img class="img-responsive" src="images/sketchui.png" alt="">';
            html += '<figcaption class="text-left"><small><i>Sketch App Screenshot</i></small></figcaption>';
            html += '</figure>';
            html += '</div>';

            html += '<div class="col-sm-6">';
            html += '<h4 style="letter-spacing: 2px; margin-top: 0px;"><strong>Additional Design' +
                ' Resources</strong></h4>';
            html += '<p>Here are some excellent resources for the design portion of the process. There are many free' +
                ' resources and also discounts for educators/students.</p>';

            html += '<ul>';
            html += '<li><a target="_blank" href="https://www.sketchapp.com/">Sketch App</a></li>';
            html += '<li><a target="_blank" href="https://www.invisionapp.com/">Invision</a></li>';
            html += '<li><a target="_blank" href="https://balsamiq.com/">Balsamiq</a></li>';
            html += '<li><a target="_blank" href="http://sneakpeekit.com/">Sneakpeekit</a></li>';
            html += '</ul>';

            html += '</div>'; // end right col

            html += '</div>'; //end row 1
            html += '<hr>';

            html += '<div class="row row-top15">';
            html += '<div class="col-sm-6">';
            html += '<h4><strong>Activity 2A</strong><br>';
            html += '<small>Please complete the questions before continuing.</small></h4>';
            html += '<ol>';
            html += '<li>Create a few rough wireframes for your site</li>';
            html += '<li>Feel free to try out one of the listed resources or use pen & paper! </li>';
            html += '<li><a href="files/wireframe-4-grid.pdf" download>Downloadable Mini Browser Wireframe</a></li>';
            html += '</ol>';
            html += '</div>';
            html += '</div>';

            html += '</div>';

            $("#design-main-content").html(html);
        }
    }
};