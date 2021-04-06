//basics
//Loading screen
//Login
//0.Header
//0.1.Settings
//1.Search bar
//2.File icon
//3.Main window
//4.About
//5.Services
//6.Projects
//7.Contacts
//8.Media querys

$(document).ready(function() {
    $('#pw').fadeOut();
    $('.backDiv').hide();
    $('.optionsDiv').fadeOut();
    $('.featuredAppsRight').hide();
    $('.aboutDiv').hide();
    $('.updates').hide();
    $('.github').hide();
    $('.linkedin').hide();
    $('.skillsDiv').hide(); 
    $('.skillsDivSecond').hide();
    $('.projectsDiv').hide();
    $('.nextInner').hide();
    $('.nextInnerSecond').hide();
    $('.nextInnerThird').hide();
    $('.folderEmpty').hide();
    $('.contactsDiv').hide();
    $('.notGood').hide();
    //Loading screen
    setTimeout(function(){$(".loadingDiv").fadeOut("slow")}, 3000); 
    //0.
    $('.userPhoto').click(function(){
        $('.optionsDiv').fadeToggle(100);
    });
    $('.red').click(function(){
        $('.os').fadeOut(100);
    });
    $('.yellow').click(function(){
        $('.os').toggleClass("osAddedClass");
    });
    //LOGIN
    $(document).on('keypress',function(e) {
        if(e.which == 13) {
            if ($("#pw").val()== "yuCre5utra") {
                $('.loginScreen').fadeOut();
                $('.backDiv').hide();
                $('.firstUser').hide();
                $('.secondUser').hide();
                $('.firstUser').removeClass("firstUserAddedClass");
                $('.backDiv').removeClass("backDivAddedClass");
                $('.notGood').hide();      
                $('.userPhoto').removeClass("recruiterAddedClass");  
                $('.userPhoto').addClass("adminAddedClass"); 
                $('.recruiterName').hide();
                $('.adminName').show();     
            } else {
                $('.notGood').fadeIn();
                $('.firstUser').show();
                $('.secondUser').show();
                $('.backDiv').hide();
                $('#pw').fadeOut();
                $('.firstUser').removeClass("firstUserAddedClass");
                $('.secondUser').removeClass("secondUserAddedClass");
            }
        }
    });
    $('.firstUser').click(function(){
        $('.notGood').hide();
        $('.secondUser').hide();
        $('.firstUser').addClass("firstUserAddedClass");
        $('.backDiv').addClass("backDivAddedClass");
        $('#pw').fadeIn(300);
        $('.backDiv').fadeIn(300);
    });
    $('.secondUser').click(function(){
        $('.adminName').hide();
        $('.recruiterName').show();
        $('.notGood').hide();
        $('.firstUser').hide();
        $('.secondUser').addClass("secondUserAddedClass");
        $('.loginScreen').fadeOut(1200);
        $('.userPhoto').removeClass("adminAddedClass");  
        $('.userPhoto').addClass("recruiterAddedClass");  
    });
    //0.1.
    $('.secondallAppsDiv').click(function(){
        $('.optionsDiv').fadeOut(100);
        $('.apps').show();
        $('.updates').hide();
        $('.aboutDiv').hide();
        $('.skillsDiv').hide();
        $('.projectsDiv').hide();
        $('.skillsDivSecond').hide();
        $('.nextInner').hide();
        $('.nextInnerSecond').hide();
        $('.nextInnerThird').hide();
        $('.folderEmpty').hide();
        $('.contactsDiv').hide();
        $('.stcDiv').css("background-color", "rgba(0,0,0,0)");
        $('.next').css("background-color", "rgba(0,0,0,0)");
        $('.nextInner').css("background-color", "rgba(0,0,0,0)");
        $('.nextInnerSecond').css("background-color", "rgba(0,0,0,0)");
    });
    $('.secondupdatesDiv').click(function(){
        $('.optionsDiv').fadeOut(100);
        $('.updates').show();
        $('.apps').hide();
        $('.aboutDiv').hide();
        $('.skillsDiv').hide();
        $('.projectsDiv').hide();
        $('.skillsDivSecond').hide();
        $('.nextInner').hide();
        $('.nextInnerSecond').hide();
        $('.nextInnerThird').hide();
        $('.folderEmpty').hide();
        $('.contactsDiv').hide();
        $('.stcDiv').css("background-color", "rgba(0,0,0,0)");
        $('.next').css("background-color", "rgba(0,0,0,0)");
        $('.nextInner').css("background-color", "rgba(0,0,0,0)");
        $('.nextInnerSecond').css("background-color", "rgba(0,0,0,0)")
    });
    $('.callHimDiv').click(function(){
        $('.optionsDiv').fadeOut(100);
    });
    $('.writeHimDiv').click(function(){
        $('.optionsDiv').fadeOut(100);;
    });
    $('.logoutDiv').click(function(){
        $('#pw').hide();
        $('.optionsDiv').fadeOut(1200);
        $('.firstUser').show();
        $('.secondUser').show();
        $('.firstUser').removeClass("firstUserAddedClass");
        $('.secondUser').removeClass("secondUserAddedClass");
        $('.loginScreen').fadeIn(1200);
    });
    //1.
    $("#search").keyup(function() {
        searchHighlight($(this).val());
    })
    function replaceText() {
        $("body").find(".highlight").removeClass("highlight");
        var searchword = $("#searchtxt").val();
        var custfilter = new RegExp(searchword, "ig");
        var repstr = "<span class='highlight'>" + searchword + "</span>";
        if (searchword != "") {
            $('body').each(function() {
                $(this).html($(this).html().replace(custfilter, repstr));
            })
        }
    }
    //2.
    $(function () {
        $(".creativeCvDiv").draggable();
    });
    $('.firstFolder').mouseenter(function(){
        $('.firstFolder').addClass("folderAddedClass");
    });
    $('.firstFolder').mouseleave(function(){
        $('.firstFolder').removeClass("folderAddedClass");
    });
    $('.firstFolder').dblclick(function(){
        $('.os').fadeIn(100);
    });
    //3.
    $('.allAppsDiv').click(function(){
        $('.apps').show();
        $('.updates').hide();
        $('.aboutDiv').hide();
        $('.skillsDiv').hide();
        $('.projectsDiv').hide();
        $('.skillsDivSecond').hide();
        $('.nextInner').hide();
        $('.nextInnerSecond').hide();
        $('.nextInnerThird').hide();
        $('.folderEmpty').hide();
        $('.contactsDiv').hide();
        $('.stcDiv').css("background-color", "rgba(0,0,0,0)");
        $('.next').css("background-color", "rgba(0,0,0,0)");
        $('.nextInner').css("background-color", "rgba(0,0,0,0)");
        $('.nextInnerSecond').css("background-color", "rgba(0,0,0,0)");
    });
    $(function () {
        $(".firstfeaturedApps").draggable();
    });
    $(function () {
        $(".secondFeaturedApps").draggable();
    });
    $(function () {
        $(".ThirdFeaturedApps").draggable();
    });
    $('.updatesDiv').click(function(){
        $('.updates').show();
        $('.apps').hide();
        $('.aboutDiv').hide();
        $('.skillsDiv').hide();
        $('.projectsDiv').hide();
        $('.skillsDivSecond').hide();
        $('.nextInner').hide();
        $('.nextInnerSecond').hide();
        $('.nextInnerThird').hide();
        $('.folderEmpty').hide();
        $('.contactsDiv').hide();
        $('.stcDiv').css("background-color", "rgba(0,0,0,0)");
        $('.next').css("background-color", "rgba(0,0,0,0)");
        $('.nextInner').css("background-color", "rgba(0,0,0,0)");
        $('.nextInnerSecond').css("background-color", "rgba(0,0,0,0)")
    });
    $('.installGit').click(function(){
        $('.featuredAppsRight').show();   
        $('.github').show(200); 
        $('.installGit').hide();
    });
    $('.installLinkedin').click(function(){
        $('.featuredAppsRight').show();   
        $('.linkedin').show(200); 
        $('.installLinkedin').hide();
    });
    //4.About
    $('.about').click(function(){
        $('.aboutDiv').show();
        $('.updates').hide();
        $('.apps').hide();
        $('.skillsDiv').hide();
        $('.projectsDiv').hide();
        $('.skillsDivSecond').hide();
        $('.nextInner').hide();
        $('.nextInnerSecond').hide();
        $('.nextInnerThird').hide();
        $('.folderEmpty').hide();
        $('.contactsDiv').hide();
        $('.stcDiv').css("background-color", "rgba(0,0,0,0)");
        $('.next').css("background-color", "rgba(0,0,0,0)");
        $('.nextInner').css("background-color", "rgba(0,0,0,0)");
        $('.nextInnerSecond').css("background-color", "rgba(0,0,0,0)");
        $('.nextInnerThird').css("background-color", "rgba(0,0,0,0)");
    });
    //5.Servies
    $('.skills').click(function(){
        $('.skillsDiv').show();
        $('.aboutDiv').hide();
        $('.updates').hide();
        $('.apps').hide();
        $('.projectsDiv').hide();
        $('.skillsDivSecond').hide();
        $('.nextInner').hide();
        $('.nextInnerSecond').hide(); 
        $('.nextInnerThird').hide();
        $('.folderEmpty').hide();
        $('.contactsDiv').hide();
        $('.stcDiv').css("background-color", "rgba(0,0,0,0)");
        $('.next').css("background-color", "rgba(0,0,0,0)");
        $('.nextInner').css("background-color", "rgba(0,0,0,0)");
        $('.nextInnerSecond').css("background-color", "rgba(0,0,0,0)");
        $('.nextInnerThird').css("background-color", "rgba(0,0,0,0)");
    });
    $('.nextPage').click(function(){
        $('.skillsDiv').hide();
        $('.skillsDivSecond').show();
    });
    //6.Projects
    $('.projects').click(function(){
        $('.projectsDiv').show();
        $('.stcDiv').show();
        $('.next').show();
        $('.skillsDiv').hide();
        $('.aboutDiv').hide();
        $('.updates').hide();
        $('.apps').hide();
        $('.skillsDivSecond').hide();
        $('.nextInner').hide();
        $('.nextInnerSecond').hide();
        $('.nextInnerThird').hide();
        $('.folderEmpty').hide();
        $('.contactsDiv').hide();
        $('.stcDiv').css("background-color", "rgba(0,0,0,0)");
        $('.next').css("background-color", "rgba(0,0,0,0)");
        $('.nextInner').css("background-color", "rgba(0,0,0,0)");
        $('.nextInnerSecond').css("background-color", "rgba(0,0,0,0)");
        $('.nextInnerThird').css("background-color", "rgba(0,0,0,0)");
    });
    $(function () {
        $(".stcDiv").draggable();
    });
    $(function () {
        $(".next").draggable();
    });
    $(function () {
        $(".nextInner").draggable();
    });
    $(function () {
        $(".nextInnerSecond").draggable();
    });
    $(function () {
        $(".nextInnerThird").draggable();
    });
    $('.stcDiv').click(function(){
        $('.next').css("background-color", "rgba(0,0,0,0)");
        $('.stcDiv').css("background-color", "rgba(255,255,255,.1)");
        $('.nextInner').css("background-color", "rgba(0,0,0,0)");
        $('.nextInnerSecond').css("background-color", "rgba(0,0,0,0)");
        $('.nextInnerThird').css("background-color", "rgba(0,0,0,0)");
    });
    $('.next').click(function(){
        $('.stcDiv').css("background-color", "rgba(0,0,0,0)");
        $('.next').css("background-color", "rgba(255,255,255,.1)");
        $('.nextInner').css("background-color", "rgba(0,0,0,0)");
        $('.nextInnerSecond').css("background-color", "rgba(0,0,0,0)");
        $('.nextInnerThird').css("background-color", "rgba(0,0,0,0)");
    });
    $('.stcDiv').dblclick(function(){
        $('.stcDiv').hide();
        $('.next').hide();
        $('.nextInner').show();
        $('.nextInnerSecond').show();
        $('.nextInnerThird').show();
        $('.nextInner').click(function(){
            $('.nextInnerSecond').css("background-color", "rgba(0,0,0,0)");
            $('.nextInnerThird').css("background-color", "rgba(0,0,0,0)");
            $('.nextInner').css("background-color", "rgba(255,255,255,.1)");
        });
        $('.nextInner').dblclick(function(){
            window.location.replace("http://www.savariatc.hu");
        });
        $('.nextInnerSecond').click(function(){
            $('.nextInner').css("background-color", "rgba(0,0,0,0)");
            $('.nextInnerThird').css("background-color", "rgba(0,0,0,0)");
            $('.nextInnerSecond').css("background-color", "rgba(255,255,255,.1)");
        });
        $('.nextInnerThird').click(function(){
            $('.nextInner').css("background-color", "rgba(0,0,0,0)");
            $('.nextInnerSecond').css("background-color", "rgba(0,0,0,0)");
            $('.nextInnerThird').css("background-color", "rgba(255,255,255,.1)");
        });
    });
    $('.next').dblclick(function(){
        $('.stcDiv').css("background-color", "rgba(0,0,0,0)");
        $('.next').css("background-color", "rgba(0,0,0,0)");
        $('.nextInner').css("background-color", "rgba(0,0,0,0)");
        $('.nextInnerSecond').css("background-color", "rgba(0,0,0,0)");
        $('.nextInnerThird').css("background-color", "rgba(0,0,0,0)");
        $('.nextInner').hide();
        $('.nextInnerSecond').hide();
        $('.nextInnerThird').hide();
        $('.stcDiv').hide();
        $('.next').hide();
        $('.folderEmpty').show();
    });
    //7.Contacts
    $('.contacts').click(function(){
        $('.projectsDiv').hide();
        $('.stcDiv').hide();
        $('.next').hide();
        $('.skillsDiv').hide();
        $('.aboutDiv').hide();
        $('.updates').hide();
        $('.apps').hide();
        $('.skillsDivSecond').hide();
        $('.nextInner').hide();
        $('.nextInnerSecond').hide();
        $('.nextInnerThird').hide();
        $('.folderEmpty').hide();
        $('.contactsDiv').hide();
        $('.contactsDiv').show();
        $('.stcDiv').css("background-color", "rgba(0,0,0,0)");
        $('.next').css("background-color", "rgba(0,0,0,0)");
        $('.nextInner').css("background-color", "rgba(0,0,0,0)");
        $('.nextInnerSecond').css("background-color", "rgba(0,0,0,0)");
        $('.nextInnerThird').css("background-color", "rgba(0,0,0,0)");
    });
    //8.Media queries
    function mediaSize() { 
        if (window.matchMedia('(min-width: 1300px)').matches) {
            //BASICS
            $('.os').fadeOut();
        }
        if (window.matchMedia('(max-width: 1300px)').matches) {
            //BASICS
            $('.os').fadeIn();
        }
        if (window.matchMedia('(max-width: 1000px)').matches) {
            $('.firstFolder').click(function(){
                $('.os').fadeIn(100);
            });
            //Login
            $('.firstUser').click(function(){
                $('.secondUser').hide();
                $('.firstUser').addClass("firstUserAddedClassSmall");
                $('.backDiv').addClass(".backDivAddedClassSmall");
                $('#pw').fadeIn(300);
                $('.backDiv').fadeIn(300);
            });     
            $('.secondUser').click(function(){
                $('.firstUser').hide();
                $('.secondUser').addClass("secondUserAddedClassSmall");
                $('.loginScreen').fadeOut(1200);
                $('.userPhoto').addClass("recruiterAddedClass");  
            });
            $('.stcDiv').click(function(){
                $('.stcDiv').hide();
                $('.next').hide();
                $('.nextInner').show();
                $('.nextInnerSecond').show();
                $('.nextInnerThird').show();
                $('.nextInner').click(function(){
                    $('.nextInnerSecond').css("background-color", "rgba(0,0,0,0)");
                    $('.nextInnerThird').css("background-color", "rgba(0,0,0,0)");
                    $('.nextInner').css("background-color", "rgba(255,255,255,.1)");
                });
                $('.nextInner').click(function(){
                    window.location.replace("http://www.savariatc.hu");
                });
                $('.nextInnerSecond').click(function(){
                    $('.nextInner').css("background-color", "rgba(0,0,0,0)");
                    $('.nextInnerThird').css("background-color", "rgba(0,0,0,0)");
                    $('.nextInnerSecond').css("background-color", "rgba(255,255,255,.1)");
                });
                $('.nextInnerThird').click(function(){
                    $('.nextInner').css("background-color", "rgba(0,0,0,0)");
                    $('.nextInnerSecond').css("background-color", "rgba(0,0,0,0)");
                    $('.nextInnerThird').css("background-color", "rgba(255,255,255,.1)");
                });
            });
            $('.next').click(function(){
                $('.stcDiv').css("background-color", "rgba(0,0,0,0)");
                $('.next').css("background-color", "rgba(0,0,0,0)");
                $('.nextInner').css("background-color", "rgba(0,0,0,0)");
                $('.nextInnerSecond').css("background-color", "rgba(0,0,0,0)");
                $('.nextInnerThird').css("background-color", "rgba(0,0,0,0)");
                $('.nextInner').hide();
                $('.nextInnerSecond').hide();
                $('.nextInnerThird').hide();
                $('.stcDiv').hide();
                $('.next').hide();
                $('.folderEmpty').show();
            });
        } 
        if (window.matchMedia('(max-width: 500px)').matches) {
            $('.logoutDiv').click(function(){
                $('#pw').hide();
                $('.optionsDiv').fadeOut(1200);
                $('.firstUser').show();
                $('.secondUser').show();
                $('.firstUser').removeClass("firstUserAddedClassSmall");
                $('.secondUser').removeClass("secondUserAddedClassSmall");
                $('.loginScreen').fadeIn(1200);
            });
        };
    }
    /* Call the function */
    mediaSize();
    /* Attach the function to the resize event listener */
	window.addEventListener('resize', mediaSize, false);  
});