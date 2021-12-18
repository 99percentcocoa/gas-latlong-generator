function latLongGenerator() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = SpreadsheetApp.getActiveRange();
  var rangeRow = range.getRow();
  var rangeCol = range.getColumn();
  var rangeValues = range.getValues();

  var geocoder = Maps.newGeocoder();
  var results = [];

  for (let row in rangeValues) {
    var address = rangeValues[row][0].toString();
    Logger.log(address);
    var result = geocoder.geocode(address).results[0];
    var latlong = [result.geometry.location.lat.toString(), result.geometry.location.lng.toString()];
    results.push(latlong);
  }

  sheet.getRange(rangeRow, rangeCol+1, results.length, 2).setValues(results);
  Logger.log(results);
}
