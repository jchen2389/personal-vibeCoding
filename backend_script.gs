function doGet(e) {
  // 1. Get the active spreadsheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  // 2. Get the sheet named "商家" (Merchants)
  var sheet = ss.getSheetByName("商家");
  
  // If sheet doesn't exist, return error
  if (!sheet) {
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "error", 
      message: "Sheet '商家' not found" 
    })).setMimeType(ContentService.MimeType.JSON);
  }

  // 3. Get all data range
  var data = sheet.getDataRange().getValues();
  
  // 4. Parse headers (first row) to map keys
  // Columns expected: 
  // A: Name (0)
  // B: Price (1)
  // C: Time (2)
  // D: MapUrl (3)
  // E: ImageUrl (4)
  // F: Tags (5)
  // G: Rating (6) **NEW**
  
  var restaurants = [];
  
  // Start from row 1 (skipping header row 0)
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    // Simple validation: must have a name
    if (row[0]) {
      restaurants.push({
        id: i,
        name: row[0],
        price: row[1],
        time: row[2],
        mapUrl: row[3],
        imageUrl: row[4],
        tags: row[5],
        rating: row[6] // Added Rating
      });
    }
  }

  // 5. Return JSON
  var result = {
    status: "success",
    data: restaurants
  };

  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}
