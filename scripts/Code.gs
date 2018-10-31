/** intended to be run in a google sites page
 * this looks up popularity data generated from analytics
 * and adds it to your page using htmlservice & html5 canvas
 **/
function doGet(e) {
  var page,site;
  e =  e || {parameter:{}};
  e.parameter.page = e.parameter.page || 'https://sites.google.com/a/mcpher.com/share/Home/excelquirks/dbabstraction/driverdbabstraction';

        
  if (e.parameter.page) {
    // running standalone
    page = SitesApp.getPageByUrl(e.parameter.page);
  }
  else {
    // running within a site
    page = SitesApp.getActivePage();
  }
  siteCode = e.parameter.sitecode || 'ramblings';
  // now we shoud have found the page on the site
  if (page) {
    // The basic template comes from a filr, but I then append a call to the function that executes
    // passing the data as arguments. This seemed the best way to send the data over to the client
    // and avoid a call back to the server    
    var htmlPage = cSiteStats.getInstrumentationCode() + "\n" +
      "<script>\n" + 
      "doIt( " +
        JSON.stringify(siteStats(page.getUrl(),siteCode)) +
      ");\n</script>";
    
    // create the page
    return HtmlService
      .createTemplate(htmlPage)
      .evaluate();
  }
  else {
    throw "could not find page - try running within a site or providing page=url as a parameter";
  }
}

/**
 * get the stats associated with this page
 * @param {string} url the url of the page
 * @param {string} siteCode the code to look up the stats
 * @return {object} the data for this page
 **/
function siteStats (url,siteCode) {

  // find the data for this url in the analytics summary
  return cSiteStats.siteStats (url,siteCode);

}