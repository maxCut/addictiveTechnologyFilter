var getUrl = window.location;
if(getUrl.host=="www.youtube.com")
{
    require("./youtubeRecomenededVideoFilter.js")
}
else if(getUrl.host=="www.facebook.com")
{
    require("./facebookFeedFilter.js")
}

