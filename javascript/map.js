var map = AmCharts.makeChart("mapdiv",{
type: "map",
theme: "dark",
projection: "mercator",
panEventsEnabled : true,
backgroundColor : "#2A1B38",
backgroundAlpha : 1,
zoomControl: {
zoomControlEnabled : true
},
dataProvider : {
map : "worldHigh",
getAreasFromMap : true,
areas :
[
  {
    "id": "AT",
    "showAsSelected": true
  },
  {
    "id": "CZ",
    "showAsSelected": true
  },
  {
    "id": "FR",
    "showAsSelected": true
  },
  {
    "id": "GR",
    "showAsSelected": true
  },
  {
    "id": "HU",
    "showAsSelected": true
  },
  {
    "id": "IT",
    "showAsSelected": true
  },
  {
    "id": "MT",
    "showAsSelected": true
  },
  {
    "id": "MC",
    "showAsSelected": true
  },
  {
    "id": "PL",
    "showAsSelected": true
  },
  {
    "id": "ES",
    "showAsSelected": true
  },
  {
    "id": "VA",
    "showAsSelected": true
  },
  {
    "id": "AG",
    "showAsSelected": true
  },
  {
    "id": "BS",
    "showAsSelected": true
  },
  {
    "id": "BM",
    "showAsSelected": true
  },
  {
    "id": "CA",
    "showAsSelected": true
  },
  {
    "id": "DO",
    "showAsSelected": true
  },
  {
    "id": "MX",
    "showAsSelected": true
  },
  {
    "id": "PR",
    "showAsSelected": true
  },
  {
    "id": "KN",
    "showAsSelected": true
  },
  {
    "id": "LC",
    "showAsSelected": true
  },
  {
    "id": "US",
    "showAsSelected": true
  },
  {
    "id": "VI",
    "showAsSelected": true
  },
  {
    "id": "IL",
    "showAsSelected": true
  }
]
},
areasSettings : {
autoZoom : true,
color : "#d9c8e8",
colorSolid : "#D83F87",
selectedColor : "#D83F87",
outlineColor : "#666666",
rollOverColor : "#de92b6",
rollOverOutlineColor : "#000000"
}
});
