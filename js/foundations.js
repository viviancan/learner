var FOUNDATIONS = {
    runtime: {
        preferredStyle: '',
        preferredStyle1: '',
        firstName: ''

    },

    init: function () {
        FOUNDATIONS.showBreadcrumbNavbar();
        FOUNDATIONS.breadcrumbEvents();
        FOUNDATIONS.learnerTag();

        FOUNDATIONS.runtime.preferredStyle = MAIN.runtime.preferredStyle;
        FOUNDATIONS.runtime.preferredStyle1 = MAIN.runtime.preferredStyle1;
        FOUNDATIONS.runtime.firstName = MAIN.runtime.firstName;
    },

    learnerTag: function () {
        $("#learner-tag").html(FOUNDATIONS.runtime.firstName);


    },

    showBreadcrumbNavbar: function () {
        var html = "";
        html += '<li id="bread-plan"><a href="foundations.html">Planning</a></li>';
        html += '<li id="bread-evaluate"><a href="#">Evaluate Current Site</a></li>';
        html += '<li id="bread-analyze"><a href="#">Analyze Users</a></li>';
        html += '<li id="bread-task"><a href="#">Task Analysis</a></li>';
        html += '<li id="bread-personas"><a href="#">Personas & User Stories</a></li>';
        html += '<li id="bread-goals"><a href="#">Set Goals</a></li>';
        $("#foundation-bread").html(html);
    },

    breadcrumbEvents: function () {
        $("#bread-plan").on("click", function () {

        });

        $("#bread-evaluate").on("click", function () {
            FOUNDATIONS.html.evaluateCurrentSite();
        });

        $("#bread-analyze").on("click", function () {
            FOUNDATIONS.html.analyzeUsers();
        });

        $("#bread-task").on("click", function () {
            FOUNDATIONS.html.taskAnalysis();
        });

        $("#bread-personas").on("click", function () {
            FOUNDATIONS.html.personas();
        });

        $("#bread-goals").on("click", function () {
            FOUNDATIONS.html.setGoals();
        });

    },

    html: {
        evaluateCurrentSite: function () {
            var html = "";
            html += '<div class="row">';
            html += '<div class="col-sm-12">';
            html += '<h4 style="letter-spacing: 2px; margin-top: 0px;"><strong>Evaluate Current Site</strong></h4>';

            html += '<p>After determining what kind of site you envision, evaluate your current site. This step is crucial in order to identify areas that are user-centered and areas that need to be revamped. If you do not have a current site, you can search a few sites and identify characteristics that you like. Looking for some inspiration, check out <a' +
                ' href="https://www.awwwards.com/" TARGET="_blank">AWWWARDS.COM</a></p>';
            html += '</div>';
            html += '</div>';

            html += '<div class="row row-top15 row-bottom15">';

            html += '<div class="col-sm-12">';
            html += '<h4><strong>Case 1: Suzanne Collins</strong></h4>';
            html += '</div>';

            html += '<div class="col-sm-6">';
            html += '<figure>';
            html += '<img class="img-responsive" src="images/suzanne-site.png" alt="">';
            html += '<figcaption class="pull-right"><a href="http://www.suzannecollinsbooks.com/" target="_blank">http://www.suzannecollinsbooks.com/</a></figcaption>';
            html += '</figure>';
            html += '</div>';

            html += '<div class="col-sm-6">';
            html += '<p><a href="http://www.suzannecollinsbooks.com/">This is the site</a> for award winning author, Suzanne Collins. There is no clear structure, all the sections are out of place, and if you take a look at the source code, the site is built on bad industry practices.</p>';
            html += '</div>';

            html += '</div>'; //end row 1

            html += '<div class="row  row-top15 row-bottom15">';

            html += '<div class="col-sm-12">';
            html += '<h4><strong>Case 2: Lings Cars</strong></h4>';
            html += '</div>';

            html += '<div class="col-sm-6">';
            html += '<figure>';
            html += '<img class="img-responsive" src="images/lings-site.png" alt="">';
            html += '<figcaption class="pull-right"><a href="https://www.lingscars.com/" target="_blank">https://www.lingscars.com/</a></figcaption>';
            html += '</figure>';
            html += '</div>';

            html += '<div class="col-sm-6">';
            html += '<p><a href="https://www.lingscars.com/">Lings cars</a> has a lot going on. It is not really clear exactly what the site is for. The colors clash, the images are confusing, and overall the site can be overwhelming when' +
                ' visiting.</p>';
            html += '</div>';
            html += '</div>'; //end row 2
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

            if(FOUNDATIONS.runtime.preferredStyle || FOUNDATIONS.runtime.preferredStyle1){
                html += '<div class="col-sm-4 text-right">';

                if(FOUNDATIONS.runtime.preferredStyle1){
                    html += '<h4><strong>Multi Modal</strong><br>';
                    html += 'You are multi modal, check out strategies for the different modalities.';
                    html += 'Here\'s a Visual strategy: images, graphics, and diagrams will help you retain' +
                        ' more information!!';
                }

                if(FOUNDATIONS.runtime.preferredStyle == "Aural"){
                    html += '<h4><strong>Aural Learning Strategy</strong><br>';
                    html += 'Try discussing the main ideas with a classmate! This will help you retain more information!';

                } else if(FOUNDATIONS.runtime.preferredStyle == "Kinesthetic" ){
                    html += '<h4><strong>Kinesthetic Learning Strategy</strong><br>';
                    html += 'You will benefit from writing, mapping, and diagramming! Motion will help reinforce the' +
                        ' information!';

                } else if(FOUNDATIONS.runtime.preferredStyle == "Visual") {
                    html += '<h4><strong>Visual Learning Strategy</strong><br>';
                    html += 'Images, graphics, and diagrams will help you retain more information!';

                } else {
                    html += '<h4><strong>Read/Write Learning Strategy</strong><br>';
                    html += 'Try rewriting the main ideas in your own words!';
                }

                    html += '</div>';

            }


            html += '</div>';

            html += '</div>';

            $("#foundations-main-content").html(html);

            $("#learner-tag").html(FOUNDATIONS.runtime.firstName);
        },
        analyzeUsers: function () {
            var html = "";
            html += '<div class="row row-bottom15">';

            html += '<div class="col-sm-6">';
            html += '<figure>';
            html += '<img class="img-responsive" src="images/user-experience.png" alt="">';
            html += '<figcaption class="text-left"><small><i>Art by <a href="http://www.clairemurray.co.uk/"' +
                ' target="_blank">Claire Murray</a></i></small></figcaption>';
            html += '</figure>';
            html += '</div>';

            html += '<div class="col-sm-6">';
            html += '<h4 style="letter-spacing: 2px; margin-top: 0px;"><strong>Analyze Your Users</strong></h4>';
            html += '<p>In this step of the UCD, you will analyze the users that will be using your site. This is' +
                ' a crucial step in the UCD process. By identifying your users early on, you will be able to quickly' +
                ' and efficiently design the site properly.</p>';

            html += '<h5><strong>Industry Practices:</strong></h5>';
            html += '<ul>';
            html += '<li><a target="_blank" href="https://bit.ly/2ln0EMa">Card Sorting</a></li>';
            html += '<li><a target="_blank" href="https://bit.ly/2HI1Ljf">Contextual Interviews</a></li>';
            html += '<li><a target="_blank" href="https://bit.ly/2cqf1Yo">Individual Interviews</a></li>';
            html += '<li><a target="_blank" href="https://bit.ly/2K6M57J">Surveys</a></li>';
            html += '</ul>';

            html += '<h5><strong>Example:</strong></h5>';
            html += '<p>If you are creating a portfolio site to showcase all of your IST work, potential users of' +
                ' your site are: Employers, Educators, Classmates, Students, and Professors</p>';


            html += '</div>'; // end right col

            html += '</div>'; //end row 1
            html += '<hr>';

            html += '<div class="row row-top15">';
            html += '<div class="col-sm-6">';
            html += '<h4><strong>Activity 1C</strong><br>';
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

            $("#foundations-main-content").html(html);
        },
        taskAnalysis: function () {
            var html = "";
            html += '<div class="row row-bottom15">';

            html += '<div class="col-sm-4">';
            html += '<figure>';
            html += '<img class="img-responsive" src="images/analysis.png" alt="">';

            html += '</div>';

            html += '<div class="col-sm-8">';
            html += '<h4 style="letter-spacing: 2px; margin-top: 0px;"><strong>Task Analysis</strong></h4>';
            html += '<p><a href="https://www.usability.gov/how-to-and-tools/methods/task-analysis.html">Usability.gov</a> states a task analysis helps to understand the user\'s motivations and goals. Additionally, by' +
                ' analyzing the user in a more intentional way, you will begin to craft an image of the user and' +
                ' how they will use your site to achieve their goals. Within the task analysis you will aim to' +
                ' answer questions such as: <ul><li>What experiences (personal, social, and cultural) users bring to' +
                ' the tasks</li><li>How users are influenced by their physical environment</li><li>How users’ previous knowledge and experience influence (1) how they think about their work and (2) their specific workflow.</li></ul></p>';

            html += '</div>'; // end right col

            html += '</div>'; //end row 1
            html += '<hr>';

            html += '<div class="row row-top15">';
            html += '<div class="col-sm-6">';
            html += '<h4><strong>Activity 1D</strong><br>';
            html += '<small>Please complete the questions before continuing.</small></h4>';
            html += '<ol>';
            html += '<li>For each user type you identified in 1C, identify the following: ' +
                '<ul><li>What overall tasks is that user trying to complete?</li> <li>How is that task being' +
                ' completed?</li></ul></li>';
            html += '</ol>';
            html += '</div>';
            html += '</div>';

            html += '</div>';

            $("#foundations-main-content").html(html);
        },
        personas: function () {
            var html = "";
            html += '<div class="row row-bottom15">';

            html += '<div class="col-sm-5">';
            html += '<h4 style="letter-spacing: 2px; margin-top: 0px;"><strong>Personas & User Stories</strong></h4>';
            html += '<p><strong>Personas</strong> and user stories will help to solidify your understanding of your users.' +
                ' There' +
                ' are different methods in creating a persona, but ultimately, they are only as good as your' +
                ' background research. <a href="https://www.usability.gov/how-to-and-tools/methods/personas.html">Usability.gov</a> provides a great outline in developing your' +
                ' user persona. You can create personas from scratch or utilize software such as, <a' +
                ' href="https://xtensio.com/user-persona/">Xtensio</a>. For the' +
                ' sake of this course, however, we will not be developing completed user' +
                ' profiles.</p>';

            html += '<p><strong>User stories</strong> help you outline and understand the user flow of the site.' +
                ' For example, you may begin your user story by stating: <ul> <li>As a [user​ ​type]​ when I' +
                ' [perform​ ​an​ ​action]​ I expect/want​ ​[an​ ​outcome]</li><li>As a visitor​ when I complete​' +
                ' ​the​ ​registration​ ​form​ I expect/want to​ ​be​ ​told​ ​that​ ​I​ ​have\n' +
                'successfully​ ​registered​ ​and​ ​be​ ​directed​ ​to​ ​a​ ​welcome​ ​screen.</li></ul></p>';

            html += '</div>'; // end right col

            html += '<div class="col-sm-7">';
            html += '<figure>';
            html += '<figcaption class="text-right"><small><i><a' +
                ' href="https://usabilitygeek.com/improving-persona-usability-goal-oriented-ux/"' +
                ' target="_blank">(Usability Geek)</a></i></small></figcaption>';
            html += '<img class="img-responsive" src="images/sample-persona.png" alt="">';

            html += '</figure>';

            html += '</div>';

            html += '</div>'; //end row 1
            html += '<hr>';

            html += '<div class="row row-top15">';
            html += '<div class="col-sm-8">';
            html += '<h4><strong>Activity 1E</strong><br>';
            html += '<small>Please complete the questions before continuing.</small></h4>';
            html += '<ol>';
            html += '<li>Practice completing a few user stories</li>';
            html += '</ol>';
            html += '</div>';

            if(FOUNDATIONS.runtime.preferredStyle || FOUNDATIONS.runtime.preferredStyle1 ){
                html += '<div class="col-sm-4 text-right">';

                if(FOUNDATIONS.runtime.preferredStyle1){
                    html += '<h4><strong>Multi Modal</strong><br>';
                    html += 'You are multi modal, check out strategies for the different modalities.';
                    html += 'Here\'s an aural strategy: Ask your instructor if you can record lessons. You can listen the audio when reviewing your notes.';
                }

                if(FOUNDATIONS.runtime.preferredStyle == "Aural"){
                    html += '<h4><strong>Aural Learning Strategy</strong><br>';
                    html += 'Ask your instructor if you can record lessons. You can listen the audio when reviewing' +
                        ' your notes. ';

                } else if(FOUNDATIONS.runtime.preferredStyle == "Kinesthetic" ){
                    html += '<h4><strong>Kinesthetic Learning Strategy</strong><br>';
                    html += 'It\'s a good idea to take frequent breaks and to change your seating environment!';

                } else if(FOUNDATIONS.runtime.preferredStyle == "Visual") {
                    html += '<h4><strong>Visual Learning Strategy</strong><br>';
                    html += 'Try annotating your notes with purposeful doodles!';

                } else {
                    html += '<h4><strong>Read/Write Learning Strategy</strong><br>';
                    html += 'Organize your notes into flow charts or diagrams!';
                }

                html += '</div>';

            }


            html += '</div>';

            html += '</div>';

            $("#foundations-main-content").html(html);
        },
        setGoals: function () {
            var html = "";
            html += '<div class="row row-bottom15">';

            html += '<div class="col-sm-6">';
            html += '<figure>';
            html += '<img class="img-responsive" src="images/goal.png" alt="">';
            html += '</figure>';
            html += '</div>';

            html += '<div class="col-sm-6">';
            html += '<h4 style="letter-spacing: 2px; margin-top: 0px;"><strong>Set Measurable Goals</strong></h4>';
            html += '<p>For this final step in the planning & analysis stage, focus on setting measurable goals.</p>';

            html += '</div>'; // end right col

            html += '</div>'; //end row 1
            html += '<hr>';

            html += '<div class="row row-top15">';
            html += '<div class="col-sm-6">';
            html += '<h4><strong>Activity 1F</strong><br>';
            html += '<small>Please complete the questions before continuing.</small></h4>';
            html += '<ol>';
            html += '<li>Identify 3 measurable goals for your site</li>';
            html += '<li>For Example: <ul><li>Set a deadline for site completion</li> <li>Determine the' +
                ' type of feedback you hope to receive</li></ul></li>';
            html += '</ol>';
            html += '</div>';
            html += '</div>';

            html += '</div>';

            $("#foundations-main-content").html(html);
        }
    }

};