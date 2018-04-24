var app=getApp()
Page({
  data: {
    latitude: 39.90923,
    longitude: 116.397428,
    markers: [],
    wcs: [],
    mapCtx:null
  },
  onReady: function (e) {
    var that = this
    var latitude, longitude
    var b=wx.createMapContext('wc')
    
    console.log(b)
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        latitude = res.latitude
        longitude = res.longitude
        that.setData({
          "latitude": latitude,
          "longitude": longitude

        })
        var url = "https://restapi.amap.com/v3/place/around?key=323ba8b856a9ec89a81102d971a0e7e8&location="
          + longitude + "," + latitude + "&output=json&radius=3000&types=&keywords=厕所&page=1&extensions=base"
        //console.log(url)

        wx.request({
          url: url,
          success: function (res) {
            if (res.statusCode == 200) {

              var arr = res.data.pois
              if (arr.length > 0) {
                var wcs = new Array()
                for (var j = 0, len = arr.length; j < len; j++) {
                  var wc = {}
                  var str = arr[j].location
                  var lon = str.split(",")[0]
                  var lat = str.split(",")[1]
                  wc.latitude = lat
                  wc.longitude = lon
                  wc.name = arr[j].name
                  wc.distance = arr[j].distance
                  wc.address = arr[j].address
                  wcs.push(wc)

                }
                //console.log(wcs)
                that.setData({
                  "markers": wcs

                })

              }


            }

            // console.log(res)
          }
        })

      }
    })
  },
  onShow:function(e){
    console.log(this.wcs)
  },
  openLocation: function (e) {
    //console.log(e)
    console.log(e.target.dataset.wc)
    var wc = e.target.dataset.wc

    wx.openLocation({

      latitude: parseFloat(wc.latitude),
      longitude: parseFloat(wc.longitude),
      scale: 17,
      name: wc.name,
      address: wc.address
    })

  }

})
