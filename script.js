/**
 * JITR V0.3
 **/


// Set Variables
// These are preferences, that should later be stored in a cookie or elsewhere

var JC_debug = false;
if (JC_debug) {console.log("Debugging AN");}

var linkbreak 		= "<br />";
var JC_justimages = false;
var ref_page_resetonload = true; // Setzt die Suchbox zurück und spring in die Box

// var linktemplate 	= "<img src=\"resources/%file\" width=\"%px\" height=\"%px\" onclick=\"javascript: JLClickAndSearch(%num);\" title=\"%cap\" id=\"icons\">";
var linktemplate   = "<div id=\"JC_roundsquare\" onclick=\"javascript: JLClickAndSearch(%num);\" title=\"%hint\">";
	if (!JC_justimages) {linktemplate   += "<div id=\"JC_iconbox\"><img id=\"JC_largeicon\" src=\"resources/%file\"></div>";} else {linktemplate   += "<div id=\"JC_iconbox_nt\"><img id=\"JC_largeicon\" src=\"resources/%file\"></div>";};
	
	linktemplate   += "<div id=\"JC_addonimage1box\">%subicon1</div>"; // <img id=\"JC_addonicon\"src=\"resources/+excel-addon.png\">
	linktemplate   += "<div id=\"JC_addonimage2box\">%subicon2</div>";
	if (!JC_justimages) { linktemplate   += "<div id=\"JC_iconsubtitle\">%cap</div>";};
	linktemplate   += "</div>";
	


// Data 

// import * as data from './data.json'; || // const word = data.name; || // console.log(word); // output 'testing'
var JC_DataObj = myJSON; // Currently a crutch
if (JC_debug) {console.log(Object.keys(JC_DataObj.RCitemlist).length+" Objekte");} // https://stackoverflow.com/questions/5223/length-of-a-javascript-object
if (JC_debug) {console.log("Remember JSON is not completed");}


// Type and search - lands on first [0] link of the array
function JL_default_submit() { JLClickAndSearch(0); }

// Clicked with or without typing	
function JLClickAndSearch(JL_ID) {
	
    var search_term = document.forms["JLSmartForm"]["JCTextTypeBox"].value; // fetch whats has been typed 
    
    if (search_term == "") { // If empty = easy. Just go there
		
		var query_base ="";
		query_base += "https://";
	    query_base += JC_DataObj.RCitemlist[JL_ID]["RCitem"]["URL"]; // BASE
	    var query_link ="";
	    var query_link = query_base;
	    
		}
	
	else { // NOT empty, so figure out what to do (currently just follow a link)
		
		query_base ="";
		query_base += "https://";
	    query_base += JC_DataObj.RCitemlist[JL_ID]["RCitem"]["SearchURL"]; // SPECIAL						
  	    var search_term = document.forms["JLSmartForm"]["JCTextTypeBox"].value; // fetch whats has been typed  TODO Validate / Sanetize
	   	var query_link ="";
        query_link = query_base.replace("%s", search_term ); // replace %s with search_term
	  
	   	}
	
		if (document.forms["JLSmartForm"]["JLnewpage"].checked == true) { // NewPage
		if (JC_debug) {console.log("Show in New Windows");}; sleep(500);
   		window.open(query_link,'_blank');
		return false;     
	
		}
	
		else { // SamePage
	
		if (JC_debug) {console.log("Show in same Window");}; sleep(500);
		window.location = query_link; window.location.assign(query_link) // whatever works TODO Test, Cleanup Isle 3
   		return false;     	
	
		}
}

// Write stuff on the page
function JLPageCreateIcons() {
var output = "";
var simple = "";

// Loop

var JC_total = Object.keys(JC_DataObj.RCitemlist).length;
// (JC_DataObj.RCitemlist[NR]["RCitem"]["ITEMNAME"]);

for (var i = 0; i < JC_total; i++)
 {

/** // Test for Break
    if ( JournoLinks[i][0] == "BREAK" ) { output += linkbreak; } else {
**/	 // belongs to Test for Break

    // In loop construct HTML
/*    alert(Object.keys(JC_DataObj.RCitemlist[i]["RCitem"])); */
    var JC_iconfilename = JC_DataObj.RCitemlist[i]["RCitem"]["Icon"];
    var JC_caption = JC_DataObj.RCitemlist[i]["RCitem"]["Name"];
    var JC_mouseoverhint = JC_DataObj.RCitemlist[i]["RCitem"]["Hint"];
    var JC_subicon1 = "&nbsp;"; 
    if ( JC_DataObj.RCitemlist[i]["RCitem"]["ContextIcon1"] == "") {JC_subicon1 = "&nbsp;"; } else {JC_subicon1 = "<img id=\"JC_addonicon\"src=\"resources/" + JC_DataObj.RCitemlist[i]["RCitem"]["ContextIcon1"] + "\">";}
    var JC_subicon2 = "&nbsp;";
    if ( JC_DataObj.RCitemlist[i]["RCitem"]["ContextIcon2"] == "") {JC_subicon2 = "&nbsp;"; } else {JC_subicon2 = "<img id=\"JC_addonicon\"src=\"resources/" + JC_DataObj.RCitemlist[i]["RCitem"]["ContextIcon2"] + "\">";}
    
	simple = linktemplate;
	simple = simple.replace("%file", JC_iconfilename);
	simple = simple.replace("%num", i);
	simple = simple.replace("%subicon1", JC_subicon1);
	simple = simple.replace("%subicon2", JC_subicon2);
	simple = simple.replace("%cap", JC_caption);
	simple = simple.replace("%hint", JC_mouseoverhint);
	
		
	output += simple;
	
 //   } // belongs to Test for Break
     
	
 }



// output =  "<img src=\"resources/google-logo.png\" width=\"64\" height=\"64\" onclick=\"javascript: JLClickAndSearch(0);\" title=\"Goog\">";
// AfterLoop WriteToDoc
document.getElementById("JLiconlinkset").innerHTML = output;
}


// TODO Error handling if ever


/* Found on https://stackoverflow.com/questions/3383429/setting-focus-on-an-html-input-box-on-page-load
function focusOnInput() {
    document.forms["JLSmartForm"]["JCTextTypeBox"].focus();
}
*/
// Found on https://stackoverflow.com/questions/16873323/javascript-sleep-wait-before-continuing
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

// And compatibility *yuck

 