const routes =  require("next-routes")();

//TODO routes kaam nhi kr rhe h
routes
    .add('/', '/index')
    .add('/user', '/user/profile')
    .add('/explore', '/user/explore')
    .add('/explore/:surveyId', '/user/explore/');


module.exports = routes;
