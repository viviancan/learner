var DEPLOY = {
    runtime: {

    },

    init: function () {
        DEPLOY.showBreadcrumbNavbar();
        DEPLOY.breadcrumbEvents();
    },

    showBreadcrumbNavbar: function () {
        var html = "";
        html += '<li id="bread-deploy"><a href="deployment.html">Deployment</a></li>';
        // html += '<li id="bread-feedback"><a href="#">Feedback</a></li>';
        $("#deployment-bread").html(html);
    },

    breadcrumbEvents: function () {
        $("#bread-feedback").on("click", function () {
            DEPLOY.html.feedback();
        });
    },

    html: {
        feedback: function () {
            // html += '<div class="row row-bottom15">';
            //
            // html += '<div class="col-sm-6">';
            // html += '<figure>';
            // html += '<img class="img-responsive" src="images/sketchui.png" alt="">';
            // html += '<figcaption class="text-left"><small><i>Sketch App Screenshot</i></small></figcaption>';
            // html += '</figure>';
            // html += '</div>';
            //
            var html = "";
            html += '<div class="row">';
            html += '<div class="col-sm-12">';
            html += '<h4 style="letter-spacing: 2px; margin-top: 0px;"><strong>Feedback</strong></h4>';

            html += '<p>Wireframes are a necessity during the design phase. Similar to a physical outline, they' +
                ' provide a rough sketch of the flow of the site. There will usually be many iterations of' +
                ' these sketches. You can make digital wireframes, using software like Balsamiq or Sketch, or old' +
                ' fashioned pen and paper work just fine! <a href="files/samplewireframe.pdf" download>Here </a> are some wireframes my team completed for a project.' +
                '</p>';
            html += '</div>';
            html += '</div>';

            html += '<div class="row row-top15 row-bottom15 text-center">';

            html += '<iframe width="560" height="315" src="https://www.youtube.com/embed/8-vTd7GRk-w"' +
                ' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
            html += '<br><i><small>(UX Mastery, 2015)</small></i>';
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