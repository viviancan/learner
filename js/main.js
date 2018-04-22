var MAIN = {
    runtime: {
        preferredStyle: '',
        preferredStyle1: ''

    },
    init: function () {
        MAIN.getCookies();

    },
    getCookies: function(){
        MAIN.runtime.preferredStyle = Cookies.get('preferredStyle');
        MAIN.runtime.preferredStyle1 = Cookies.get('preferredStyle1');
        MAIN.updateNavbar();

    },
    updateNavbar:function () {
        if(MAIN.runtime.preferredStyle){
            var preferredStyle = MAIN.runtime.preferredStyle;
            console.log("exists");
        }

        if(MAIN.runtime.preferredStyle1){
            var preferredStyle1 = MAIN.runtime.preferredStyle1;
        }

        var html = "";
        html += '<nav class="navbar navbar-default">';
        html += '<div class="container-fluid">';
        html += '<div class="navbar-header">';
        html += '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse"';
        html += 'data-target="#bs-example-navbar-collapse-1" aria-expanded="false">';
        html += '<span class="sr-only">Toggle navigation</span>';
        html += '<span class="icon-bar"></span>';
        html += '<span class="icon-bar"></span>';
        html += '<span class="icon-bar"></span>';
        html += '</button>';
        html += '<a class="navbar-brand" href="#">Brand</a>';
        html += '</div>';
        html += '<ul class="nav navbar-nav navbar-right">';
        html += '<li><a href="index.html">Home</a></li>';
        html += '<li class="dropdown">';
        html += '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"';
        html += 'aria-expanded="false">VARK <span class="caret"></span></a>';
        html += '<ul class="dropdown-menu">';
        html += '<li><a href="vark.html">VARK Information</a></li>';

        if(preferredStyle || preferredStyle1){
            console.log("exists");
            html += '<li><a href="varkquiz.html">VARK Results</a></li>';
        }

        html += '<li><a href="#">Something else here</a></li>';
        html += '<li role="separator" class="divider"></li>';
        html += '<li><a href="#">Separated link</a></li>';
        html += '</ul>';
        html += '</li>';
        html += '<li class="dropdown">';
        html += '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">UCD <span class="caret"></span></a>';
        html += '<ul class="dropdown-menu">';
        html += '<li><a href="what-is-ucd.html">What is UCD</a></li>';
        html += '<li><a href="foundations.html">Foundations of LCD</a></li>';
        html += '<li role="separator" class="divider"></li>';
        html += '<li><a href="#">Separated link</a></li>';
        html += '</ul>';
        html += '</li>';
        // html += '<li><a href="#">Link</a></li>';
        // html += '<li><a href="#">Link</a></li>';
        html += '<li><a href="resources.html">Resources</a></li>';
        html += '</ul>';
        html += '</div><!-- /.navbar-collapse -->';
        html += '</div><!-- /.container-fluid -->';
        html += '</nav>';

        $("#navbar").html(html);


    }
};