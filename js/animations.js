//Page Transitions
const pageList = {home:"#home", pricing:"#pricing", host_an_event:"#host-an-event", gallery:"#gallery"};
const pages = Object.values(pageList)
function closePages(){
for (var num = 0; num <= 5; num++){
    if ($(pages[num]).hasClass("open")) {
        const pageClose = gsap.timeline({ defaults: { ease: "power1.out" } });
        pageClose.to(
            ".open", { 
            opacity: "0", 
            duration: 0.5
        });
        pageClose.to(
            ".open", { 
            height: "0", 
            duration: 0.1
        });
        pageClose.to(
            ".open", { 
            zIndex: "-1", 
            duration: 0.1
        });
        $(".open").removeClass("open");
    }}
}

$(".page-open-btn").on("click",function(){
    const toActive = $(this).attr("data-active"); 
    if ($(toActive).attr("class") != "open") {
        closePages()
        $(toActive).addClass("open");
        const pageOpen = gsap.timeline({ defaults: {ease: "expo.inOut"} });
        pageOpen.to(
            ".open", { 
            zIndex: "2", 
            duration: 0.1
        });
        pageOpen.to(
            ".open", { 
            height: "100vh", 
            duration: 0.1
        });
        pageOpen.to(
            ".open", { 
            opacity: "1", 
            duration: 0.5
        });
    }
});