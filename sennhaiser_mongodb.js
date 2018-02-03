"use strict";

let products=[
    {
        "productId":1,
        "familyId":1,
        "familyImage":"images/products_images/urbanite_xl/details_images/long.jpg",
        "productTitle":"URBANITE XL Wireless Black 无线蓝牙通讯新品耳机",
        "price":2199.00,
        "connection":"蓝牙",
        "wear":"头戴式",
        "color":"黑色",        
        "microphone":"带麦克风",
        "foldable":"非折叠",
        "priceRange":"2000-3000",
        "saleCount":5757,
        "images":[
            "images/products_images/urbanite_xl/urbanite_xl_wireless_black/urbanite_xl_wireless_black_01.png",
            "images/products_images/urbanite_xl/urbanite_xl_wireless_black/urbanite_xl_wireless_black_02.png",
            "images/products_images/urbanite_xl/urbanite_xl_wireless_black/urbanite_xl_wireless_black_03.png"
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":2,
        "familyId":1,
        "familyImage":"images/products_images/urbanite_xl/details_images/long.jpg",
        "productTitle":"URBANITE XL 黑色 i 苹果专用",
        "price":1699.00,
        "connection":"有线苹果接口",
        "wear":"头戴式",
        "color":"黑色",
        "microphone":"带麦克风",
        "foldable":"非折叠",
        "priceRange":"1000-2000",
        "saleCount":8976,
        "images":[
            "images/products_images/urbanite_xl/urbanite_xl_apple/urbanite_xl_apple_01.png",
            "images/products_images/urbanite_xl/urbanite_xl_apple/urbanite_xl_apple_02.png",
            "images/products_images/urbanite_xl/urbanite_xl_apple/urbanite_xl_apple_03.png",
            "images/products_images/urbanite_xl/urbanite_xl_apple/urbanite_xl_apple_04.png"            
        ],        
        "checked":"",
        "cartCount":0
    },
    {
        "productId":3,        
        "familyId":1,
        "familyImage":"images/products_images/urbanite_xl/details_images/long.jpg",
        "productTitle":"URBANITE XL Denim 牛仔蓝i 苹果专用",
        "price":1699.00,
        "connection":"有线苹果接口",
        "wear":"头戴式",
        "color":"蓝色",
        "microphone":"带麦克风",
        "foldable":"非折叠",
        "priceRange":"1000-2000",
        "saleCount":1313,
        "images":[
            "images/products_images/urbanite_xl/urbanite_xl_denim/urbanite_xl_denim_01.png",
            "images/products_images/urbanite_xl/urbanite_xl_denim/urbanite_xl_denim_02.png",
            "images/products_images/urbanite_xl/urbanite_xl_denim/urbanite_xl_denim_03.png",
            "images/products_images/urbanite_xl/urbanite_xl_denim/urbanite_xl_denim_04.png"            
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":4,       
        "familyId":2,
        "familyImage":"images/products_images/hd/details_images/long.jpg",
        "productTitle":"HD 600 高保真质量、Hi—Fi专业立体声耳机",
        "price":2299.00,
        "connection":"有线通用接口",
        "wear":"头戴式",
        "color":"蓝色",
        "microphone":"带麦克风",
        "foldable":"非折叠",
        "priceRange":"2000-3000",
        "saleCount":5752,
        "images":[
            "images/products_images/hd/hd600/hd600_01.png",
            "images/products_images/hd/hd600/hd600_02.png",
            "images/products_images/hd/hd600/hd600_03.png"                      
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":5,        
        "familyId":2,
        "familyImage":"images/products_images/hd/details_images/long.jpg",
        "productTitle":"HD 650 开放式结构，带来绝佳的听音感受",
        "price":2659.00,
        "connection":"有线通用接口",
        "wear":"头戴式",
        "color":"黑色",
        "microphone":"带麦克风",
        "foldable":"非折叠",
        "priceRange":"2000-3000",
        "saleCount":6768,
        "images":[
            "images/products_images/hd/hd650/hd650_01.png",
            "images/products_images/hd/hd650/hd650_02.png",
            "images/products_images/hd/hd650/hd650_03.png",
            "images/products_images/hd/hd650/hd650_04.png"                  
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":6,        
        "familyId":3,
        "familyImage":"images/products_images/momentum/details_images/long.jpg",
        "productTitle":"MOMENTUM Wireless Ivory (M2 AEBT Ivory) 新品无线蓝牙降噪耳机",
        "price":2399.00,
        "connection":"蓝牙",
        "wear":"头戴式",
        "color":"白色",
        "microphone":"带麦克风",
        "foldable":"可折叠",
        "priceRange":"2000-3000",
        "saleCount":1231,
        "images":[
            "images/products_images/momentum/momentum_wirless_ivory_m2_aebt_ivory_white/momentum_wirless_ivory_m2_aebt_ivory_01.png",
            "images/products_images/momentum/momentum_wirless_ivory_m2_aebt_ivory_white/momentum_wirless_ivory_m2_aebt_ivory_02.png",
            "images/products_images/momentum/momentum_wirless_ivory_m2_aebt_ivory_white/momentum_wirless_ivory_m2_aebt_ivory_03.png",
            "images/products_images/momentum/momentum_wirless_ivory_m2_aebt_ivory_white/momentum_wirless_ivory_m2_aebt_ivory_04.png"           
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":7,        
        "familyId":3,
        "familyImage":"images/products_images/momentum/details_images/long.jpg",
        "productTitle":"MOMENTUM Wireless Black (M2 AEBT Black) 新品无线蓝牙降噪耳机",
        "price":2399.00,
        "connection":"蓝牙",
        "wear":"头戴式",
        "color":"黑色",
        "microphone":"带麦克风",
        "foldable":"可折叠",
        "priceRange":"2000-3000",
        "saleCount":3216,
        "images":[
            "images/products_images/momentum/momentum_wirless_ivory_m2_aebt_ivory_black/momentum_wirless_ivory_m2_aebt_ivory_black_01.png",
            "images/products_images/momentum/momentum_wirless_ivory_m2_aebt_ivory_black/momentum_wirless_ivory_m2_aebt_ivory_black_02.png",
            "images/products_images/momentum/momentum_wirless_ivory_m2_aebt_ivory_black/momentum_wirless_ivory_m2_aebt_ivory_black_03.png",
            "images/products_images/momentum/momentum_wirless_ivory_m2_aebt_ivory_black/momentum_wirless_ivory_m2_aebt_ivory_black_04.png"          
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":8,        
        "familyId":4,
        "familyImage":"images/products_images/cx3/details_images/long.jpg",
        "productTitle":"CX3.00 White",
        "price":399.00,
        "connection":"有线通用接口",
        "wear":"入耳式",
        "color":"白色",
        "microphone":"带麦克风",
        "foldable":"可折叠",
        "priceRange":"0-500",
        "saleCount":7598,
        "images":[
            "images/products_images/cx3/cx3_white/cx3_white.png"           
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":9,        
        "familyId":4,
        "familyImage":"images/products_images/cx3/details_images/long.jpg",
        "productTitle":"CX3.00 Black",
        "price":399.00,
        "connection":"有线通用接口",
        "wear":"入耳式",
        "color":"黑色",
        "microphone":"带麦克风",
        "foldable":"可折叠",
        "priceRange":"0-500",
        "saleCount":6312,
        "images":[
            "images/products_images/cx3/cx3_black/cx3_black.png"           
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":10,        
        "familyId":4,
        "familyImage":"images/products_images/cx3/details_images/long.jpg",
        "productTitle":"CX3.00 Red",
        "price":399.00,
        "connection":"有线通用接口",
        "wear":"入耳式",
        "color":"红色",
        "microphone":"带麦克风",
        "foldable":"可折叠",
        "priceRange":"0-500",
        "saleCount":3215,
        "images":[
            "images/products_images/cx3/cx3_red/cx3_red.png"           
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":11,        
        "familyId":5,
        "familyImage":"images/products_images/ambeo/details_images/long.jpg",
        "productTitle":"Sennheiser AMBEO 3D录音耳机",
        "price":2199.00,
        "connection":"有线通用接口",
        "wear":"耳塞式",
        "color":"白色",
        "microphone":"带麦克风",
        "foldable":"可折叠",
        "priceRange":"2000-3000",
        "saleCount":3131,
        "images":[
            "images/products_images/ambeo/ambeo/ambeo_01.png",           
            "images/products_images/ambeo/ambeo/ambeo_02.png",           
            "images/products_images/ambeo/ambeo/ambeo_03.png",           
            "images/products_images/ambeo/ambeo/ambeo_04.png"           
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":12,        
        "familyId":2,
        "familyImage":"images/products_images/hd/details_images/long.jpg",
        "productTitle":"Sennheiser 森海塞尔 HD4.30G White 新品折叠耳机",
        "price":799.00,
        "connection":"有线通用接口",
        "wear":"头戴式",
        "color":"白色",
        "microphone":"带麦克风",
        "foldable":"可折叠",
        "priceRange":"500-1000",
        "saleCount":5630,
        "images":[
            "images/products_images/hd/hd4_30/hd4_30_01.png",           
            "images/products_images/hd/hd4_30/hd4_30_02.png",           
            "images/products_images/hd/hd4_30/hd4_30_03.png",           
            "images/products_images/hd/hd4_30/hd4_30_04.png"                     
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":13,        
        "familyId":2,
        "familyImage":"images/products_images/hd/details_images/long.jpg",
        "productTitle":"Sennheiser 森海塞尔 HD2.10 新品音乐耳机",
        "price":399.00,
        "connection":"有线通用接口",
        "wear":"头戴式",
        "color":"黑色",
        "microphone":"无麦克风",
        "foldable":"非折叠",
        "priceRange":"0-500",
        "saleCount":3650,
        "images":[
            "images/products_images/hd/hd210/hd210_01.png",           
            "images/products_images/hd/hd210/hd210_02.png",           
            "images/products_images/hd/hd210/hd210_03.png"                    
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":14,        
        "familyId":6,
        "familyImage":"images/products_images/ie/details_images/long.jpg",
        "productTitle":"IE60 监听耳塞，入耳设计 噪声隔离",
        "price":1649.00,
        "connection":"有线通用接口",
        "wear":"耳塞式",
        "color":"黑色",
        "microphone":"无麦克风",
        "foldable":"可折叠",
        "priceRange":"1000-2000",
        "saleCount":5321,
        "images":[
            "images/products_images/ie/ie60/ie60_01.png",           
            "images/products_images/ie/ie60/ie60_02.png",           
            "images/products_images/ie/ie60/ie60_03.png",           
            "images/products_images/ie/ie60/ie60_04.png"                    
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":15,        
        "familyId":6,
        "familyImage":"images/products_images/ie/details_images/long.jpg",
        "productTitle":"IE80 监听耳塞 可更换耳机线",
        "price":2699.00,
        "connection":"有线通用接口",
        "wear":"耳塞式",
        "color":"黑色",
        "microphone":"无麦克风",
        "foldable":"可折叠",
        "priceRange":"2000-3000",
        "saleCount":5689,
        "images":[
            "images/products_images/ie/ie80/ie80_01.png",           
            "images/products_images/ie/ie80/ie80_02.png"                   
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":16,        
        "familyId":6,
        "familyImage":"images/products_images/ie/details_images/long.jpg",
        "productTitle":"IE 800 旗舰入耳式耳塞",
        "price":4699.00,
        "connection":"有线通用接口",
        "wear":"耳塞式",
        "color":"黑色",
        "microphone":"无麦克风",
        "foldable":"可折叠",
        "priceRange":"3000以上",
        "saleCount":5631,
        "images":[
            "images/products_images/ie/ie800/ie800_01.png"                   
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":17,        
        "familyId":3,
        "familyImage":"images/products_images/momentum/details_images/long.jpg",
        "productTitle":"MOMENTUM In-Ear",
        "price":749.00,
        "connection":"有线通用接口",
        "wear":"耳塞式",
        "color":"红色",
        "microphone":"带麦克风",
        "foldable":"可折叠",
        "priceRange":"500-1000",
        "saleCount":5631,
        "images":[
            "images/products_images/momentum/momentum_black_red/momentum_black_red_01.png",                   
            "images/products_images/momentum/momentum_black_red/momentum_black_red_02.png"                   
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":18,        
        "familyId":7,
        "familyImage":"images/products_images/momentum_in_ear/details_images/long.jpg",
        "productTitle":"Sennheiser MOMENTUM In-Ear Wireless Black",
        "price":1499.00,
        "connection":"蓝牙",
        "wear":"耳塞式",
        "color":"黑色",
        "microphone":"带麦克风",
        "foldable":"非折叠",
        "priceRange":"1000-2000",
        "saleCount":5321,
        "images":[
            "images/products_images/momentum_in_ear/momentum_in_ear_black/momentum_in_ear_black_01.png",                   
            "images/products_images/momentum_in_ear/momentum_in_ear_black/momentum_in_ear_black_02.png",                   
            "images/products_images/momentum_in_ear/momentum_in_ear_black/momentum_in_ear_black_03.png",                   
            "images/products_images/momentum_in_ear/momentum_in_ear_black/momentum_in_ear_black_04.png"            
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":19,        
        "familyId":8,
        "familyImage":"images/products_images/mx/details_images/long.jpg",
        "productTitle":"MX 365 White 动圈驱动 多色选择",
        "price":189.00,
        "connection":"有线通用接口",
        "wear":"耳塞式",
        "color":"白色",
        "microphone":"无麦克风",
        "foldable":"可折叠",
        "priceRange":"0-500",
        "saleCount":5536,
        "images":[
            "images/products_images/mx/mx_365/mx_365.png"            
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":20,        
        "familyId":8,
        "familyImage":"images/products_images/mx/details_images/long.jpg",
        "productTitle":"MX 375 耳机 时尚外形 动感低音",
        "price":189.00,
        "connection":"有线通用接口",
        "wear":"耳塞式",
        "color":"黑色",
        "microphone":"无麦克风",
        "foldable":"可折叠",
        "priceRange":"0-500",
        "saleCount":3562,
        "images":[
            "images/products_images/mx/mx_375/mx_375.png"            
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":21,        
        "familyId":8,
        "familyImage":"images/products_images/mx/details_images/long.jpg",
        "productTitle":"MX 400 II Black 新款经典系列耳塞",
        "price":189.00,
        "connection":"有线通用接口",
        "wear":"耳塞式",
        "color":"黑色",
        "microphone":"无麦克风",
        "foldable":"可折叠",
        "priceRange":"0-500",
        "saleCount":3165,
        "images":[
            "images/products_images/mx/mx_400/mx_400.png"            
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":22,        
        "familyId":9,
        "familyImage":"images/products_images/pxc/details_images/long.jpg",
        "productTitle":"Sennheiser PXC 550新品无线蓝牙降噪耳机 您的世界将成为声音的世界",
        "price":2899.00,
        "connection":"蓝牙",
        "wear":"头戴式",
        "color":"黑色",
        "microphone":"带麦克风",
        "foldable":"可折叠",
        "priceRange":"2000-3000",
        "saleCount":5781,
        "images":[
            "images/products_images/pxc/pxc550/pxc550_01.png",            
            "images/products_images/pxc/pxc550/pxc550_02.png",            
            "images/products_images/pxc/pxc550/pxc550_03.png",            
            "images/products_images/pxc/pxc550/pxc550_04.png"            
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":23,        
        "familyId":9,
        "familyImage":"images/products_images/pxc/details_images/long.jpg",
        "productTitle":"Sennheiser 森海塞尔 PXC 480 新品旅行降噪耳机",
        "price":2199.00,
        "connection":"蓝牙",
        "wear":"头戴式",
        "color":"黑色",
        "microphone":"带麦克风",
        "foldable":"可折叠",
        "priceRange":"2000-3000",
        "saleCount":2369,
        "images":[
            "images/products_images/pxc/pxc480/pxc480_01.png",            
            "images/products_images/pxc/pxc480/pxc480_02.png",            
            "images/products_images/pxc/pxc480/pxc480_03.png",            
            "images/products_images/pxc/pxc480/pxc480_04.png"           
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":24,        
        "familyId":10,
        "familyImage":"images/products_images/sports/details_images/long.jpg",
        "productTitle":"Sennheise CX 686G 新品运动耳塞",
        "price":459.00,
        "connection":"有线通用接口",
        "wear":"入耳式",
        "color":"绿色",
        "microphone":"带麦克风",
        "foldable":"可折叠",
        "priceRange":"0-500",
        "saleCount":2789,
        "images":[
            "images/products_images/sports/cx_686g/cx_686g_01.png",            
            "images/products_images/sports/cx_686g/cx_686g_02.png",            
            "images/products_images/sports/cx_686g/cx_686g_03.png"           
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":25,        
        "familyId":10,
        "familyImage":"images/products_images/sports/details_images/long.jpg",
        "productTitle":"MX 686G 新品运动耳塞",
        "price":429.00,
        "connection":"有线通用接口",
        "wear":"耳塞式",
        "color":"绿色",
        "microphone":"带麦克风",
        "foldable":"可折叠",
        "priceRange":"0-500",
        "saleCount":3987,
        "images":[
            "images/products_images/sports/mx_686g/mx_686g_01.png",           
            "images/products_images/sports/mx_686g/mx_686g_02.png"           
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":26,        
        "familyId":10,
        "familyImage":"images/products_images/sports/details_images/long.jpg",
        "productTitle":"OCX 686 I Sports 新品运动耳机",
        "price":649.00,
        "connection":"有线通用接口",
        "wear":"入耳式",
        "color":"绿色",
        "microphone":"带麦克风",
        "foldable":"可折叠",
        "priceRange":"500-1000",
        "saleCount":3627,
        "images":[
            "images/products_images/sports/ocx_686/ocx_686_01.png",           
            "images/products_images/sports/ocx_686/ocx_686_02.png",          
            "images/products_images/sports/ocx_686/ocx_686_03.png"          
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":27,        
        "familyId":10,
        "familyImage":"images/products_images/sports/details_images/long.jpg",
        "productTitle":"Sennheise PMX 686 I SPORTS 新品运动耳机",
        "price":649.00,
        "connection":"有线通用接口",
        "wear":"头戴式",
        "color":"绿色",
        "microphone":"带麦克风",
        "foldable":"可折叠",
        "priceRange":"500-1000",
        "saleCount":1269,
        "images":[
            "images/products_images/sports/pmx_686/pmx_686_01.png",           
            "images/products_images/sports/pmx_686/pmx_686_02.png"          
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":28,        
        "familyId":1,
        "familyImage":"images/products_images/urbanite_xl/details_images/long.jpg",
        "productTitle":"URBANITE Nation 民族色 i",
        "price":999.00,
        "connection":"有线苹果接口",
        "wear":"头戴式",
        "color":"红色",
        "microphone":"带麦克风",
        "foldable":"非折叠",
        "priceRange":"500-1000",
        "saleCount":5631,
        "images":[
            "images/products_images/urbanite_xl/urbanite_nation/urbanite_nation_01.png",           
            "images/products_images/urbanite_xl/urbanite_nation/urbanite_nation_02.png",           
            "images/products_images/urbanite_xl/urbanite_nation/urbanite_nation_03.png",           
            "images/products_images/urbanite_xl/urbanite_nation/urbanite_nation_04.png"
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":29,        
        "familyId":11,
        "familyImage":"images/products_images/hd800s/details_images/long.jpg",
        "productTitle":"Sennheiser森海塞尔HD800s原装进口，工程技艺制作的旗舰动圈耳机",
        "price":9999.00,
        "connection":"有线通用接口",
        "wear":"头戴式",
        "color":"黑色",
        "microphone":"带麦克风",
        "foldable":"非折叠",
        "priceRange":"3000以上",
        "saleCount":6897,
        "images":[
            "images/products_images/hd800s/hd800s/hd800s_01.png",
            "images/products_images/hd800s/hd800s/hd800s_02.png",
            "images/products_images/hd800s/hd800s/hd800s_03.png",
            "images/products_images/hd800s/hd800s/hd800s_04.png"
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":30,        
        "familyId":7,
        "familyImage":"images/products_images/momentum_in_ear/details_images/long.jpg",
        "productTitle":"Sennheiser 森海塞尔 CX7.00BT Wireless",
        "price":1249.00,
        "connection":"蓝牙",
        "wear":"头戴式",
        "color":"黑色",
        "microphone":"带麦克风",
        "foldable":"非折叠",
        "priceRange":"1000-2000",
        "saleCount":3621,
        "images":[
            "images/products_images/momentum_in_ear/momentum_in_ear_cx/momentum_in_ear_cx_01.png",
            "images/products_images/momentum_in_ear/momentum_in_ear_cx/momentum_in_ear_cx_02.png",
            "images/products_images/momentum_in_ear/momentum_in_ear_cx/momentum_in_ear_cx_03.png",
            "images/products_images/momentum_in_ear/momentum_in_ear_cx/momentum_in_ear_cx_04.png"
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":31,        
        "familyId":12,
        "familyImage":"images/products_images/hd450/details_images/long.jpg",
        "productTitle":"Sennheiser 森海塞尔 HD 4.50 BTNC 新品蓝牙降噪耳机",
        "price":1599.00,
        "connection":"蓝牙",
        "wear":"头戴式",
        "color":"黑色",
        "microphone":"带麦克风",
        "foldable":"可折叠",
        "priceRange":"1000-2000",
        "saleCount":3266,
        "images":[
            "images/products_images/hd450/hd450/hd450_01.png",
            "images/products_images/hd450/hd450/hd450_02.png",
            "images/products_images/hd450/hd450/hd450_03.png",
            "images/products_images/hd450/hd450/hd450_04.png"
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":32,        
        "familyId":4,
        "familyImage":"images/products_images/cx3/details_images/long.jpg",
        "productTitle":"CX5.00i White",
        "price":469.00,
        "connection":"有线通用接口",
        "wear":"入耳式",
        "color":"白色",
        "microphone":"带麦克风",
        "foldable":"可折叠",
        "priceRange":"0-500",
        "saleCount":6897,
        "images":[
            "images/products_images/cx3/cx3_white/cx3_white.png"
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":33,        
        "familyId":13,
        "familyImage":"images/products_images/pc373d/details_images/long.jpg",
        "productTitle":"Sennheiser 森海塞尔 PC373D 高端游戏耳机",
        "price":2199.00,
        "connection":"有线通用接口",
        "wear":"头戴式",
        "color":"黑色",
        "microphone":"带麦克风",
        "foldable":"非折叠",
        "priceRange":"2000-3000",
        "saleCount":2178,
        "images":[
            "images/products_images/pc373d/pc373d/pc373d_01.png",
            "images/products_images/pc373d/pc373d/pc373d_02.png",
            "images/products_images/pc373d/pc373d/pc373d_03.png"
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":34,        
        "familyId":15,
        "familyImage":"images/products_images/game/details_images/long.jpg",
        "productTitle":"GAME ONE black 高品质游戏耳麦",
        "price":1499.00,
        "connection":"有线通用接口",
        "wear":"头戴式",
        "color":"黑色",
        "microphone":"带麦克风",
        "foldable":"非折叠",
        "priceRange":"1000-2000",
        "saleCount":2369,
        "images":[
            "images/products_images/game/game_one/game_one_01.png",
            "images/products_images/game/game_one/game_one_02.png",
            "images/products_images/game/game_one/game_one_03.png",
            "images/products_images/game/game_one/game_one_04.png"
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":35,        
        "familyId":15,
        "familyImage":"images/products_images/game/details_images/long.jpg",
        "productTitle":"GAME ZERO white 高品质游戏耳麦",
        "price":1699.00,
        "connection":"有线通用接口",
        "wear":"头戴式",
        "color":"白色",
        "microphone":"带麦克风",
        "foldable":"非折叠",
        "priceRange":"1000-2000",
        "saleCount":3766,
        "images":[
            "images/products_images/game/game_one/game_one_01.png",
            "images/products_images/game/game_one/game_one_02.png",
            "images/products_images/game/game_one/game_one_03.png",
            "images/products_images/game/game_one/game_one_04.png"
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":36,        
        "familyId":16,
        "familyImage":"images/products_images/gsp/details_images/long.jpg",
        "productTitle":"Sennheiser 森海塞尔 GSP350 新品游戏耳机",
        "price":999.00,
        "connection":"有线通用接口",
        "wear":"头戴式",
        "color":"红色",
        "microphone":"带麦克风",
        "foldable":"非折叠",
        "priceRange":"500-1000",
        "saleCount":2897,
        "images":[
            "images/products_images/game/gsp350/gsp350_01.png",
            "images/products_images/game/gsp350/gsp350_02.png",
            "images/products_images/game/gsp350/gsp350_03.png",
            "images/products_images/game/gsp350/gsp350_04.png"
        ],
        "checked":"",
        "cartCount":0
    },
    {
        "productId":37,        
        "familyId":16,
        "familyImage":"images/products_images/gsp/details_images/long.jpg",
        "productTitle":"Sennheiser GSP 300 专业封闭式游戏耳机",
        "price":699.00,
        "connection":"有线通用接口",
        "wear":"头戴式",
        "color":"蓝色",
        "microphone":"带麦克风",
        "foldable":"非折叠",
        "priceRange":"500-1000",
        "saleCount":3689,
        "images":[
            "images/products_images/game/gsp300/gsp300.png"
        ],
        "checked":"",
        "cartCount":0
    }        
]


for(let v of products){
	v.kw=v.productTitle+' '+v.connection+' '+v.wear+' '+v.color+' '+v.foldable+' '+v.priceRange
}
//console.log(products);
db.products.drop()
db.products.insert(products)
