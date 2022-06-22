<<<<<<< HEAD
function doGet(e) {
  var htmlOutput =  HtmlService.createTemplateFromFile('Tampil');
  return htmlOutput.evaluate();
}

function getSheetData()  { 
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName('DATA_SISWA'); 
  var dataRange = dataSheet.getDataRange();
  var dataValues = dataRange.getValues();  
  return dataValues;
=======
function doGet(e) {
  var htmlOutput =  HtmlService.createTemplateFromFile('Tampil');
  return htmlOutput.evaluate();
}

function getSheetData()  { 
  var ss= SpreadsheetApp.getActiveSpreadsheet();
  var dataSheet = ss.getSheetByName('DATA_SISWA'); 
  var dataRange = dataSheet.getDataRange();
  var dataValues = dataRange.getValues();  
  return dataValues;
>>>>>>> 43aa2c8b7c0ba5bc588116b2015e85210b27f37d
}