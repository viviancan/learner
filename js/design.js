var DESIGN = {
    runtime: {
        preferredStyle: '',
        preferredStyle1: '',
        firstName: ''

    },

    init: function () {
        DESIGN.runtime.preferredStyle = MAIN.runtime.preferredStyle;
        DESIGN.runtime.preferredStyle1 = MAIN.runtime.preferredStyle1;
        DESIGN.runtime.firstName = MAIN.runtime.firstName;

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
            html += '<div class="col-sm-8">';
            html += '<h4><strong>Activity 2A</strong><br>';
            html += '<small>Please complete the questions before continuing.</small></h4>';
            html += '<ol>';
            html += '<li>Create a few rough wireframes for your site</li>';
            html += '<li>Feel free to try out one of the listed resources or use pen & paper! </li>';
            html += '<li><a href="files/wireframe-4-grid.pdf" download>Downloadable Mini Browser Wireframe</a></li>';
            html += '</ol>';
            html += '</div>';

            if(DESIGN.runtime.preferredStyle || FOUNDATIONS.runtime.preferredStyle1 ){
                html += '<div class="col-sm-4 text-right">';

                if(DESIGN.runtime.preferredStyle1){
                    html += '<h4><strong>Multi Modal</strong><br>';
                    html += 'You are multi modal, check out strategies for the different modalities.';
                    html += 'Here\'s a kinesthetic strategy: Students who are kinesthetic learners may enjoy active problem solving, treasure hunts, or role play';
                } else {

                    if(DESIGN.runtime.preferredStyle == "Aural"){
                        html += '<h4><strong>Aural Learning Strategy</strong><br>';
                        html += 'Students who are aural learners may enjoy creating podcasts, participating in debates,' +
                            ' or reading aloud. ';

                    } else if(DESIGN.runtime.preferredStyle == "Kinesthetic" ){
                        html += '<h4><strong>Kinesthetic Learning Strategy</strong><br>';
                        html += 'Students who are kinesthetic learners may enjoy active problem solving, treasure hunts,' +
                            ' or role play.';

                    } else if(DESIGN.runtime.preferredStyle == "Visual") {
                        html += '<h4><strong>Visual Learning Strategy</strong><br>';
                        html += 'Students who are visual learners may enjoy painting/drawing, pictoral flash cards, or' +
                            ' creating flip books!';

                    } else {
                        html += '<h4><strong>Read/Write Learning Strategy</strong><br>';
                        html += 'Students who are read/write learners may enjoy creating lists and may benefit from' +
                            ' re-reading notes!';
                    }
                }


                html += '</div>';

            }


            html += '</div>';

            html += '</div>';

            $("#design-main-content").html(html);
        }
    }
};