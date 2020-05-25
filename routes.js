const routes =  require("next-routes")();

//TODO routes kaam nhi kr rhe h
routes
    .add('/', '/index')
    .add('/user', '/user/profile')
    .add('/explore', '/user/explore')
    .add('/explore/:surveyId', '/user/explore/')
    .add('/property', '/user/property')
    .add('/requested', '/user/requested');

module.exports = routes;
