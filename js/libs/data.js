define('data', ['zepto'], function($){
  function foo(){
    return $.say('hello grunt, send me to requirejs world please.');
  }

  return { foo: foo};
});
