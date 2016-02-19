$(document).ready(function(){

// Profile Aside Section

  $(".profilePic").append('<img src="' + users[0].avatar_url + '"/>');
  $(".profilePic").append(
      "<h1>"
      + users[0].name
      + "</h1>"
      + "<h4>"
      + users[0].login
      + "</h4>"
    );
  $(".createdDate").append('<span class="octicon octicon-clock"></span>' + " " + "Joined on" + " " + moment(users[0].created_at).format('LL'));
  $(".followersBar").append(
    "<h1>"
    + users[0].followers
    + "</h1>"
    + "<p>"
    + "Followers"
    + "</p>"
  );
  $(".followingBar").append(
     "<h1>"
    + users[0].following.toString()
    + "</h1>"
    + "<p>"
    + "Following"
    + "</p>"
  );

  // Nav Bar Main Section

var navItem = $('li').find('a');
navItem.click(function(event){
  event.preventDefault();
  var selectedPage = "." + $(this).attr('rel');

  $(selectedPage).siblings('section').addClass('inactive');
  $(selectedPage).removeClass('inactive');
});

// Main Section Blog Information

  var reposNames = "";

  repos.forEach(function (element, idx){
    reposNames +=
    "<h2>"
    + element.name
    + "</h2>"
    + "<h6>"
    + "Updated at"
    + " "
    + moment(element.updated_at).startOf('day').fromNow()
    + "</h6>";
  })

  $('.repos').append(reposNames);

});
