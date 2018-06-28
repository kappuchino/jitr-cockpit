/**
 * JITR V0.3
 **/
 
var myJSON = {
  "RCitemlist": [
    {
      "RCitem": {
        "ID": "001",
        "MagicNumber": "xxxx",
        "Name": "Google",
        "SSL": true,
        "URL": "google.com",
        "SearchURL": "www.google.com/search?q=%s&num=100",
        "Icon": "google-logo.png",
        "ContextIcon1": "",
        "ContextIcon2": "",
        "Hint": "Standard-Suche von Google ohne Änderungen"
      }
    },
    {
      "RCitem": {
        "ID": "002",
        "MagicNumber": "xxxx",
        "Name": "DuckDuckGo",
        "SSL": true,
        "URL": "duckduckgo.com/",
        "SearchURL": "duckduckgo.com/?q=%s&kp=-2&kl=de-de",
        "Icon": "duckduckgo.png",
        "ContextIcon1": "",
        "ContextIcon2": "",
        "Hint": "Anonymere Suche auf deutsche Quellen/Sprache und ungefiltert"
      }
    },
    {
      "RCitem": {
        "ID": "003",
        "MagicNumber": "xxxx",
        "Name": "Google Image",
        "SSL": true,
        "URL": "images.google.com/",
        "SearchURL": "www.google.com/search?tbm=isch&q=%s",
        "Icon": "google-image.png",
        "ContextIcon1": "",
        "ContextIcon2": "",
        "Hint": "Google Standard-Bildersuche"
      }
    },
    {
      "RCitem": {
        "ID": "004",
        "MagicNumber": "xxxx",
        "Name": "Google News",
        "SSL": true,
        "URL": "news.google.com/",
        "SearchURL": "news.google.com/search?q=%s&hl=de&gl=DE&ceid=DE%3Ade",
        "Icon": "google-news.png",
        "ContextIcon1": "",
        "ContextIcon2": "",
        "Hint": "Google Standard-Nachrichten-Suche"
      }
    },
    {
      "RCitem": {
        "ID": "005",
        "MagicNumber": "xxxx",
        "Name": "Google Transl.",
        "SSL": true,
        "URL": "translate.google.com",
        "SearchURL": "translate.google.com/#auto/en/%s",
        "Icon": "google-translate.png",
        "ContextIcon1": "",
        "ContextIcon2": "",
        "Hint": "Google Translate Übersetzungen"
      }
    },
    {
      "RCitem": {
        "ID": "006",
        "MagicNumber": "xxxx",
        "Name": "Google Transl.",
        "SSL": true,
        "URL": "translate.google.com/translate?hl=de&sl=auto&tl=de&u=",
        "SearchURL": "translate.google.com/translate?hl=de&sl=auto&tl=de&u=%s&sandbox=1",
        "Icon": "google-translate-url.png",
        "ContextIcon": "",
        "Validate": "URL",
        "ContextIcon1": "",
        "ContextIcon2": "",
        "Hint": "Google Translate Site Übersetzungen (needs URL)"
      }
    },
    {
      "RCitem": {
        "ID": "007",
        "MagicNumber": "xxxx",
        "Name": "Google Maps",
        "SSL": true,
        "URL": "www.google.com/maps/",
        "SearchURL": "www.google.com/maps/search/%s/",
        "Icon": "google-maps.png",
        "ContextIcon1": "",
        "ContextIcon2": "",
        "Hint": "Google Maps Standard-Suche"
      }
    },
    {
      "RCitem": {
        "ID": "008",
        "MagicNumber": "xxxx",
        "Name": "YouTube",
        "SSL": true,
        "URL": "www.youtube.com",
        "SearchURL": "www.youtube.com/results?search_query=%s",
        "Icon": "youtube.png",
        "ContextIcon1": "",
        "ContextIcon2": "",
        "Hint": "Suche im Text der Youtube-Videos"
      }
    },
    {
      "RCitem": {
        "ID": "009",
        "MagicNumber": "xxxx",
        "Name": "MetaGer",
        "SSL": true,
        "URL": "metager.de/",
        "SearchURL": "metager.de/meta/meta.ger3?focus=web&eingabe=%s",
        "Icon": "metager.png",
        "ContextIcon1": "",
        "ContextIcon2": "",
        "Hint": "Metager - Suche mit deutscher Suchemaschine"
      }
    },
    {
      "RCitem": {
        "ID": "010",
        "MagicNumber": "xxxx",
        "Name": "SpOn",
        "SSL": false,
        "URL": "www.spiegel.de/",
        "SearchURL": "www.spiegel.de/suche/index.html?suchbegriff=%s",
        "Icon": "spiegel-online.png",
        "ContextIcon1": "",
        "ContextIcon2": "",
        "Hint": "Spiegel und Spiegel-Online Suche im Archiv (unverschlüsselt)"
      }
    },
    {
      "RCitem": {
        "ID": "011",
        "MagicNumber": "xxxx",
        "Name": "Die ZEIT",
        "SSL": true,
        "URL": "www.zeit.de",
        "SearchURL": "www.zeit.de/suche/index?q=%s",
        "Icon": "diezeit.png",
        "ContextIcon1": "",
        "ContextIcon2": "",
        "Hint": "Die ZEIT - Suche im Archiv"
      }
    },
    {
      "RCitem": {
        "ID": "012",
        "MagicNumber": "xxxx",
        "Name": "LinkedIn",
        "SSL": true,
        "URL": "www.linkedin.com/",
        "SearchURL": "www.linkedin.com/search/results/index/?keywords=%s",
        "Icon": "linkedin.png",
        "ContextIcon": "",
        "NeedsLogin": true,
        "ContextIcon1": "",
        "ContextIcon2": "+login-addon.png",
        "Hint": "LinkeIN Netzwerk-Suche (mit Login)"
      }
    },
    {
      "RCitem": {
        "ID": "013",
        "MagicNumber": "xxxx",
        "Name": "Xing",
        "SSL": true,
        "URL": "www.xing.com/",
        "SearchURL": "www.xing.com/search/members?hdr=1&keywords=%s",
        "Icon": "xing.png",
        "ContextIcon": "",
        "NeedsLogin": true,
        "ContextIcon1": "",
        "ContextIcon2": "+login-addon.png",
        "Hint": "XING Netzwerksuche (mit Login)"
      }
    },
    {
      "RCitem": {
        "ID": "014",
        "MagicNumber": "xxxx",
        "Name": "Wikipedia.DE",
        "SSL": true,
        "URL": "de.wikipedia.org/",
        "SearchURL": "de.wikipedia.org/w/index.php?search=%s",
        "Icon": "wikipedia.png",
        "ContextIcon1": "+german-addon.png",
        "ContextIcon2": "",
        "Hint": "Wikipedia Suche auf deutschen Wikipedia-Seiten"
      }
    },
    {
      "RCitem": {
        "ID": "015",
        "MagicNumber": "xxxx",
        "Name": "Wikipedia.EN",
        "SSL": true,
        "URL": "en.wikipedia.org/",
        "SearchURL": "en.wikipedia.org/w/index.php?search=%s",
        "Icon": "wikipedia.png",
        "ContextIcon1": "+brits-addon.png",
        "ContextIcon2": "",
        "Hint": "Wikipedia Suche auf englischen Wikipedia-Seiten"
      }
    },
    {
      "RCitem": {
        "ID": "016",
        "MagicNumber": "xxxx",
        "Name": "DomainTools",
        "SSL": true,
        "URL": "whois.domaintools.com/",
        "SearchURL": "whois.domaintools.com/%s",
        "Icon": "domaintools.png",
        "ContextIcon": "",
        "Validate": "URL",
        "ContextIcon1": "",
        "ContextIcon2": "",
        "Hint": "Domaintools Domaininhaber Suche (Needs URL)"
      }
    },
    {
      "RCitem": {
        "ID": "017",
        "MagicNumber": "xxxx",
        "Name": "Der Standard",
        "SSL": true,
        "URL": "derstandard.at/",
        "SearchURL": "derstandard.at/suche/?query=%s&ressortId=0&status=AktivArchiv&period=Year&sortOrder=Date",
        "Icon": "derstandard.png",
        "ContextIcon1": "",
        "ContextIcon2": "",
        "Hint": "Der Standard.at - Tageszeitung in Österreich durchsuchen"
      }
    },
    {
      "RCitem": {
        "ID": "018",
        "MagicNumber": "xxxx",
        "Name": "Vimeo",
        "SSL": true,
        "URL": "vimeo.com/search",
        "SearchURL": "vimeo.com/search?q=funny",
        "Icon": "vimeo.png",
        "ContextIcon1": "",
        "ContextIcon2": "",
        "Hint": "Suche im Text von Vimeo Videos"
      }
    },
    {
      "RCitem": {
        "ID": "019",
        "MagicNumber": "xxxx",
        "Name": "Bing",
        "SSL": true,
        "URL": "www.bing.com/",
        "SearchURL": "www.bing.com/search?q=%s",
        "Icon": "bing.png",
        "ContextIcon1": "",
        "ContextIcon2": "",
        "Hint": "Standard BING Suche"
      }
    },
    {
      "RCitem": {
        "ID": "020",
        "MagicNumber": "xxxx",
        "Name": "NZZ",
        "SSL": true,
        "URL": "www.nzz.ch/",
        "SearchURL": "www.nzz.ch/suche?form%5Bq%5D=%s",
        "Icon": "nzz.png",
        "ContextIcon1": "",
        "ContextIcon2": "",
        "Hint": "Suche im NZZ Archiv"
      }
    },
    {
      "RCitem": {
        "ID": "021",
        "MagicNumber": "xxxx",
        "Name": "Reddit",
        "SSL": true,
        "URL": "www.reddit.com/",
        "SearchURL": "www.reddit.com/search?q=%s",
        "Icon": "reddit.png",
        "ContextIcon1": "",
        "ContextIcon2": "",
        "Hint": "Reddit Suche (alle Reddits, alle Zeiten)"
      }
    },
    {
      "RCitem": {
        "ID": "022",
        "MagicNumber": "xxxx",
        "Name": "eBay INT",
        "SSL": true,
        "URL": "www.ebay.com",
        "SearchURL": "www.ebay.com/sch/i.html?_nkw=%s",
        "Icon": "ebay.png",
        "ContextIcon1": "+brits-addon.png",
        "ContextIcon2": "",
        "Hint": "Ebay International durchsuchen"
      }
    },
    {
      "RCitem": {
        "ID": "023",
        "MagicNumber": "xxxx",
        "Name": "eBay.de",
        "SSL": true,
        "URL": "www.ebay.de",
        "SearchURL": "www.ebay.de/sch/i.html?_nkw=%s",
        "Icon": "ebay.png",
        "ContextIcon1": "+german-addon.png",
        "ContextIcon2": "",
        "Hint": "Ebay Deutschland durchsuchen"
      }
    },
        {
      "RCitem": {
        "ID": "024",
        "MagicNumber": "xxxx",
        "Name": "Google XLS",
        "SSL": true,
        "URL": "google.com",
        "SearchURL": "www.google.com/search?q=filetype%3Axls+%s",
        "Icon": "google-logo.png",
        "ContextIcon1": "+excel-addon.png",
        "ContextIcon2": "",
        "Hint": "Spezial-Suche von Google nur nach Excel-Daten"
      }
    },
        {
      "RCitem": {
        "ID": "025",
        "MagicNumber": "xxxx",
        "Name": "Google DOC",
        "SSL": true,
        "URL": "google.com",
        "SearchURL": "www.google.com/search?q=filetype%3Adoc+%s",
        "Icon": "google-logo.png",
        "ContextIcon1": "+word-addon.png",
        "ContextIcon2": "",
        "Hint": "Spezial-Suche von Google nur nach Word-Dokumenten"
      }
    },
        {
      "RCitem": {
        "ID": "026",
        "MagicNumber": "xxxx",
        "Name": "Google PPT",
        "SSL": true,
        "URL": "google.com",
        "SearchURL": "www.google.com/search?q=filetype%3Appt+%s",
        "Icon": "google-logo.png",
        "ContextIcon1": "+powerpoint-addon.png",
        "ContextIcon2": "",
        "Hint": "Spezial-Suche von Google nur nach Powerpoints"
      }
    },
        {
      "RCitem": {
        "ID": "027",
        "MagicNumber": "xxxx",
        "Name": "Google CSV",
        "SSL": true,
        "URL": "google.com",
        "SearchURL": "www.google.com/search?q=filetype%3Acsv+%s",
        "Icon": "google-logo.png",
        "ContextIcon1": "+csv-addon.png",
        "ContextIcon2": "",
        "Hint": "Spezial-Suche von Google nur nach CSV"
      }
    },
        {
      "RCitem": {
        "ID": "028",
        "MagicNumber": "xxxx",
        "Name": "Google PDF",
        "SSL": true,
        "URL": "google.com",
        "SearchURL": "www.google.com/search?q=filetype%3Apdf+%s",
        "Icon": "google-logo.png",
        "ContextIcon1": "+pdf-addon.png",
        "ContextIcon2": "",
        "Hint": "Spezial-Suche von Google nur nach PDFs"
      }
    },
            {
      "RCitem": {
        "ID": "029",
        "MagicNumber": "xxxx",
        "Name": "ZDF Suche",
        "SSL": true,
        "URL": "zdf.de",
        "SearchURL": "www.zdf.de/suche?q=%s&synth=true&sender=Gesamtes+Angebot&from=&to=&attrs=",
        "Icon": "zdf.png",
        "ContextIcon1": "",
        "ContextIcon2": "",
        "Hint": "ZDF Suche"
      }
    },
                {
      "RCitem": {
        "ID": "030",
        "MagicNumber": "xxxx",
        "Name": "ARD News",
        "SSL": true,
        "URL": "ard.de",
        "SearchURL": "www.ard.de/home/ard/23116/index.html?q=%s",
        "Icon": "ard.png",
        "ContextIcon1": "",
        "ContextIcon2": "",
        "Hint": "ARD-Suche"
      }
    },
    {
        "RCitem": {
        "ID": "031",
        "MagicNumber": "xxxx",
        "Name": "Twitter",
        "SSL": true,
        "URL": "twitter.com",
        "SearchURL": "twitter.com/search?q=%s&src=typd&lang=de",
        "Icon": "twitter.png",
        "ContextIcon1": "",
        "ContextIcon2": "+login-addon-grey.png",
        "Hint": "ARD-Suche"
      }
    },
    {
        "RCitem": {
        "ID": "031",
        "MagicNumber": "xxxx",
        "Name": "Facebook",
        "SSL": true,
        "URL": "facebook.com",
        "SearchURL": "www.facebook.com/search/str/%s/keywords_search",
        "Icon": "facebook.png",
        "ContextIcon1": "",
        "ContextIcon2": "+login-addon.png",
        "Hint": "ARD-Suche"
      }
 },
 {
     "RCitem": {
     "ID": "032",
     "MagicNumber": "xxxx",
     "Name": "GPG Lookup",
     "SSL": true,
     "URL": "pgp.surfnet.nl/",
     "SearchURL": "pgp.surfnet.nl/pks/lookup?search=%s&fingerprint=on&op=index",
     "Icon": "gnupg.png",
     "ContextIcon1": "",
     "ContextIcon2": "",
     "Hint": "GPG Keysuche"
   }
 },
{
    "RCitem": {
    "ID": "033",
    "MagicNumber": "xxxx",
    "Name": "Archive.Org",
    "SSL": true,
    "URL": "https://web.archive.org/web/",
    "SearchURL": "https://web.archive.org/web/*/%s",
    "Icon": "archiveorg.png",
    "ContextIcon1": "",
    "ContextIcon2": "",
    "Hint": "Internet Archiv"
  }
}
	     
		 
		 
   
  ]
}
/*
	 },
    {
        "RCitem": {
        "ID": "",
        "MagicNumber": "xxxx",
        "Name": "",
        "SSL": true,
        "URL": "",
        "SearchURL": "%s",
        "Icon": "empty.png",
        "ContextIcon1": "",
        "ContextIcon2": "",
        "Hint": ""
      }
    }

*/
