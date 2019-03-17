//Buscar como crear tabs de navegacion

// $(document).ready(function() {

// 	//When page loads...
// 	$(".tab_content").hide(); //Hide all content
// 	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
// 	$(".tab_content:first").show(); //Show first tab content

// 	//On Click Event
// 	$("ul.tabs li").click(function() {

// 		$("ul.tabs li").removeClass("active"); //Remove any "active" class
// 		$(this).addClass("active"); //Add "active" class to selected tab
// 		$(".tab_content").hide(); //Hide all tab content

// 		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to
//                 identify the active tab + content
// 		$(activeTab).fadeIn(); //Fade in the active ID content
// 		return false;
// 	});
// });

(function(d){
    let links = Array.from(d.querySelectorAll('.link-item'));
    let articles = Array.from(d.querySelectorAll('.panel'));
    d.querySelector('#menu-links').addEventListener('click', e => {
        if(e.target.classList.contains('link-item')){
            let i = links.indexOf(e.target);
            links.map(link => link.classList.remove('active'));
            links[i].classList.add('active');
            articles.map(panel => panel.classList.remove('active'));
            articles[i].classList.add('active');
        }
    })
})(document);