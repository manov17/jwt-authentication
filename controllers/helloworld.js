module.exports = function(router) {
  router.get('/hello-world', function(req,res) {
    res.json({date: 'Hello World!'});
  });
  return router;
}