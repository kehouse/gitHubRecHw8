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

  var navBarMain = $('li').find('a');
  navBarMain.click(function(event){
    event.preventDefault();
    var selectedPage = "." + $(this).attr('rel');

    $(selectedPage).siblings('nav').removeClass('active');
    $(selectedPage).addClass('active');
  });

// Main Section Blog Information

// var reposPost = "";
// repositories.forEach(function(element, idx){
//   reposPost +=
//     "<h1>"
//     + repos.name
//     + "</h1>"
//     + "<h3>"
//     + repos.updated_at
//     + "</h3>"
// });

  var gitHub = repos.map(function(post){
    return {
      title: post.name,
      date: post.updated_at
    }
  });

  appendStrToElement(constructReposHtml(),$('section'));

  function getReposPosts(existingReposPosts) {
    return existingReposPosts;
  }

  function constructReposHtml() {
    var posts = getReposPosts(gitHub);
    var giantStr = "";
    giantStr = posts.map(createReposPostStr);
    return giantStr;
  }

  function createReposPostStr(post,idx) {
    var postsHtmlStr = "";
    postsHtmlStr += "<ul><li><h3>" + post.title + "</h3></li>";
    postsHtmlStr += "<li><h6>" + post.date + "</h6></li>";
    postsHtmlStr += "</ul>"
    return postsHtmlStr;
  }

  function appendStrToElement(htmlStr, $element) {
    return $element.append(htmlStr);
  };
})
