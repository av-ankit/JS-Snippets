  var reformatResponse = function (data) {
    // function to capture data and transform it into required format
    return data.map(function (datas) {
      var newObj = {};
      // create a new object to store partial/full data.
      newObj["id"] = datas.id.toString();
      newObj["type"] = datas.type;
      newObj["data"] = { label: datas.label };
      newObj["position"] = { x: datas.x, y: datas.y };
      newObj["style"] = { border: `3px solid ${datas.color}` };

      // return our new object.
      return newObj;
    });
  };
  function transform() {
    // function bound to an event and calling reformatResponse function
    var finalRes = reformatResponse(response);
    console.log(finalRes);
  }
