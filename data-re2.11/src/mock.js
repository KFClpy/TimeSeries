//  const Mock =require('mockjs')

//  const Random = Mock.Random

// let Result = {
//     state:2000,
//     msg:'',
//     data:null
// }

// // Mock.mock('/captcha','get',()=>{
// //     Result.data ={
// //         token:Random.string(32),
// //         captchaImg:Random.dataImage('120x40', 'p7n5w')
// //     }
// //     return Result
// // })

// Mock.mock('/api/users/reg','post',() =>{
//     Result.state=2000
//     Result.msg="注册错误"
//     return Result
// })

// Mock.mock('/api/users/login','post',() =>{
//     Result.state=2000
//     Result.msg="登录失败"
//     return Result
// })

// Mock.mock('/api/users/userInfo','get',() =>{
//     Result.data ={
//         avatar: "",
//         name: "",
//         tel: "",
//         sex: "",
//         other: "",
//         email: "",
//     }
//     return Result
// })

// Mock.mock('/api/data/repair','post',() =>{
//     Result.code=200
//     Result.msg=""
//     return Result
// })
// // Mock.mock('/logout','post',() =>{
// //     //退出测试
// //     return Result
// // })



// //  import Mock from 'mock.js'

// // Mock.mock('/index',{

// // })


// Mock.mock('/api/data/upload','post',() =>{
//     Result.data ={
        
//     "timeSeries": {
//         "timeseries": [
//             {
//                 "timestamp": 1,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 2,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 3,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 4,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 5,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 6,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 7,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 8,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 9,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 10,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 11,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 12,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 13,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 14,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 15,
//                 "val": 18.7
//             },
//             {
//                 "timestamp": 16,
//                 "val": 21.70084967
//             },
//             {
//                 "timestamp": 17,
//                 "val": 21.66563585
//             },
//             {
//                 "timestamp": 18,
//                 "val": 21.59432565
//             },
//             {
//                 "timestamp": 19,
//                 "val": 21.75791387
//             },
//             {
//                 "timestamp": 20,
//                 "val": 21.69214715
//             },
//             {
//                 "timestamp": 21,
//                 "val": 21.73771975
//             },
//             {
//                 "timestamp": 22,
//                 "val": 21.69151214
//             },
//             {
//                 "timestamp": 23,
//                 "val": 21.63378765
//             },
//             {
//                 "timestamp": 24,
//                 "val": 21.62984654
//             },
//             {
//                 "timestamp": 25,
//                 "val": 21.72088098
//             },
//             {
//                 "timestamp": 26,
//                 "val": 21.50467978
//             },
//             {
//                 "timestamp": 27,
//                 "val": 21.57059439
//             },
//             {
//                 "timestamp": 28,
//                 "val": 21.46486197
//             },
//             {
//                 "timestamp": 29,
//                 "val": 21.70083677
//             },
//             {
//                 "timestamp": 30,
//                 "val": 21.50032505
//             },
//             {
//                 "timestamp": 31,
//                 "val": 21.6024505
//             },
//             {
//                 "timestamp": 32,
//                 "val": 21.60407676
//             },
//             {
//                 "timestamp": 33,
//                 "val": 21.58752091
//             },
//             {
//                 "timestamp": 34,
//                 "val": 21.34838021
//             },
//             {
//                 "timestamp": 35,
//                 "val": 21.52258403
//             },
//             {
//                 "timestamp": 36,
//                 "val": 21.24899788
//             },
//             {
//                 "timestamp": 37,
//                 "val": 21.6151459
//             },
//             {
//                 "timestamp": 38,
//                 "val": 21.50265356
//             },
//             {
//                 "timestamp": 39,
//                 "val": 21.52708551
//             },
//             {
//                 "timestamp": 40,
//                 "val": 21.43012515
//             },
//             {
//                 "timestamp": 41,
//                 "val": 21.50442884
//             },
//             {
//                 "timestamp": 42,
//                 "val": 21.48156022
//             },
//             {
//                 "timestamp": 43,
//                 "val": 21.44736381
//             },
//             {
//                 "timestamp": 44,
//                 "val": 21.40403251
//             },
//             {
//                 "timestamp": 45,
//                 "val": 21.36698607
//             },
//             {
//                 "timestamp": 46,
//                 "val": 21.32421741
//             },
//             {
//                 "timestamp": 47,
//                 "val": 21.27753168
//             },
//             {
//                 "timestamp": 48,
//                 "val": 21.42710383
//             },
//             {
//                 "timestamp": 49,
//                 "val": 21.33051607
//             },
//             {
//                 "timestamp": 50,
//                 "val": 21.18232425
//             },
//             {
//                 "timestamp": 51,
//                 "val": 21.22637417
//             },
//             {
//                 "timestamp": 52,
//                 "val": 21.4589722
//             },
//             {
//                 "timestamp": 53,
//                 "val": 21.20499805
//             },
//             {
//                 "timestamp": 54,
//                 "val": 21.45851711
//             },
//             {
//                 "timestamp": 55,
//                 "val": 21.27031065
//             },
//             {
//                 "timestamp": 56,
//                 "val": 21.07205187
//             },
//             {
//                 "timestamp": 57,
//                 "val": 21.38828506
//             },
//             {
//                 "timestamp": 58,
//                 "val": 21.46549755
//             },
//             {
//                 "timestamp": 59,
//                 "val": 21.61911083
//             },
//             {
//                 "timestamp": 60,
//                 "val": 21.2577384
//             },
//             {
//                 "timestamp": 61,
//                 "val": 21.53607196
//             },
//             {
//                 "timestamp": 62,
//                 "val": 21.2883885
//             },
//             {
//                 "timestamp": 63,
//                 "val": 21.32182708
//             },
//             {
//                 "timestamp": 64,
//                 "val": 21.54391776
//             },
//             {
//                 "timestamp": 65,
//                 "val": 21.32894591
//             },
//             {
//                 "timestamp": 66,
//                 "val": 21.32587627
//             },
//             {
//                 "timestamp": 67,
//                 "val": 21.3619814
//             },
//             {
//                 "timestamp": 68,
//                 "val": 21.27363365
//             },
//             {
//                 "timestamp": 69,
//                 "val": 21.30446975
//             },
//             {
//                 "timestamp": 70,
//                 "val": 21.39148095
//             },
//             {
//                 "timestamp": 71,
//                 "val": 21.50502515
//             },
//             {
//                 "timestamp": 72,
//                 "val": 21.32553011
//             },
//             {
//                 "timestamp": 73,
//                 "val": 21.1985993
//             },
//             {
//                 "timestamp": 74,
//                 "val": 21.26061863
//             },
//             {
//                 "timestamp": 75,
//                 "val": 21.39602078
//             },
//             {
//                 "timestamp": 76,
//                 "val": 21.4129173
//             },
//             {
//                 "timestamp": 77,
//                 "val": 21.14962391
//             },
//             {
//                 "timestamp": 78,
//                 "val": 21.32651
//             },
//             {
//                 "timestamp": 79,
//                 "val": 21.31568018
//             },
//             {
//                 "timestamp": 80,
//                 "val": 21.02044231
//             },
//             {
//                 "timestamp": 81,
//                 "val": 21.12619674
//             },
//             {
//                 "timestamp": 82,
//                 "val": 21.47103615
//             },
//             {
//                 "timestamp": 83,
//                 "val": 21.0544537
//             },
//             {
//                 "timestamp": 84,
//                 "val": 21.18088562
//             },
//             {
//                 "timestamp": 85,
//                 "val": 21.20376526
//             },
//             {
//                 "timestamp": 86,
//                 "val": 21.23260439
//             },
//             {
//                 "timestamp": 87,
//                 "val": 21.25008738
//             },
//             {
//                 "timestamp": 88,
//                 "val": 21.24981183
//             },
//             {
//                 "timestamp": 89,
//                 "val": 21.19388622
//             },
//             {
//                 "timestamp": 90,
//                 "val": 21.27507992
//             },
//             {
//                 "timestamp": 91,
//                 "val": 21.1042365
//             },
//             {
//                 "timestamp": 92,
//                 "val": 21.14202146
//             },
//             {
//                 "timestamp": 93,
//                 "val": 21.11510698
//             },
//             {
//                 "timestamp": 94,
//                 "val": 21.09936826
//             },
//             {
//                 "timestamp": 95,
//                 "val": 21.19701664
//             },
//             {
//                 "timestamp": 96,
//                 "val": 21.16252006
//             },
//             {
//                 "timestamp": 97,
//                 "val": 21.24926767
//             },
//             {
//                 "timestamp": 98,
//                 "val": 21.03334956
//             },
//             {
//                 "timestamp": 99,
//                 "val": 21.09298148
//             },
//             {
//                 "timestamp": 100,
//                 "val": 21.08131914
//             },
//             {
//                 "timestamp": 101,
//                 "val": 20.88183108
//             },
//             {
//                 "timestamp": 102,
//                 "val": 21.02971914
//             },
//             {
//                 "timestamp": 103,
//                 "val": 21.00579699
//             },
//             {
//                 "timestamp": 104,
//                 "val": 21.07759587
//             },
//             {
//                 "timestamp": 105,
//                 "val": 20.88140961
//             },
//             {
//                 "timestamp": 106,
//                 "val": 21.07552227
//             },
//             {
//                 "timestamp": 107,
//                 "val": 21.1165007
//             },
//             {
//                 "timestamp": 108,
//                 "val": 21.09826153
//             },
//             {
//                 "timestamp": 109,
//                 "val": 20.99724638
//             },
//             {
//                 "timestamp": 110,
//                 "val": 21.10316635
//             },
//             {
//                 "timestamp": 111,
//                 "val": 21.03316352
//             },
//             {
//                 "timestamp": 112,
//                 "val": 21.27864755
//             },
//             {
//                 "timestamp": 113,
//                 "val": 20.90096448
//             },
//             {
//                 "timestamp": 114,
//                 "val": 20.78347056
//             },
//             {
//                 "timestamp": 115,
//                 "val": 20.93157751
//             },
//             {
//                 "timestamp": 116,
//                 "val": 20.90639671
//             },
//             {
//                 "timestamp": 117,
//                 "val": 20.80594738
//             },
//             {
//                 "timestamp": 118,
//                 "val": 21.05181702
//             },
//             {
//                 "timestamp": 119,
//                 "val": 20.92530238
//             },
//             {
//                 "timestamp": 120,
//                 "val": 20.97087883
//             },
//             {
//                 "timestamp": 121,
//                 "val": 20.8515808
//             },
//             {
//                 "timestamp": 122,
//                 "val": 20.94700846
//             },
//             {
//                 "timestamp": 123,
//                 "val": 20.88220524
//             },
//             {
//                 "timestamp": 124,
//                 "val": 20.85799589
//             },
//             {
//                 "timestamp": 125,
//                 "val": 20.95463593
//             },
//             {
//                 "timestamp": 126,
//                 "val": 20.7245602
//             },
//             {
//                 "timestamp": 127,
//                 "val": 20.96244507
//             },
//             {
//                 "timestamp": 128,
//                 "val": 20.88500193
//             },
//             {
//                 "timestamp": 129,
//                 "val": 20.83363999
//             },
//             {
//                 "timestamp": 130,
//                 "val": 20.92446596
//             },
//             {
//                 "timestamp": 131,
//                 "val": 20.8741134
//             },
//             {
//                 "timestamp": 132,
//                 "val": 20.88896059
//             },
//             {
//                 "timestamp": 133,
//                 "val": 20.72485959
//             },
//             {
//                 "timestamp": 134,
//                 "val": 20.89202769
//             },
//             {
//                 "timestamp": 135,
//                 "val": 20.87409162
//             },
//             {
//                 "timestamp": 136,
//                 "val": 20.91042587
//             },
//             {
//                 "timestamp": 137,
//                 "val": 20.96211108
//             },
//             {
//                 "timestamp": 138,
//                 "val": 20.71817296
//             },
//             {
//                 "timestamp": 139,
//                 "val": 20.83950422
//             },
//             {
//                 "timestamp": 140,
//                 "val": 20.87507304
//             },
//             {
//                 "timestamp": 141,
//                 "val": 20.77843353
//             },
//             {
//                 "timestamp": 142,
//                 "val": 20.63962881
//             },
//             {
//                 "timestamp": 143,
//                 "val": 20.94795155
//             },
//             {
//                 "timestamp": 144,
//                 "val": 20.85847173
//             },
//             {
//                 "timestamp": 145,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 146,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 147,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 148,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 149,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 150,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 151,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 152,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 153,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 154,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 155,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 156,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 157,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 158,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 159,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 160,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 161,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 162,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 163,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 164,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 165,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 166,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 167,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 168,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 169,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 170,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 171,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 172,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 173,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 174,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 175,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 176,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 177,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 178,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 179,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 180,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 181,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 182,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 183,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 184,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 185,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 186,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 187,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 188,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 189,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 190,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 191,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 192,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 193,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 194,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 195,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 196,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 197,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 198,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 199,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 200,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 201,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 202,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 203,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 204,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 205,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 206,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 207,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 208,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 209,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 210,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 211,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 212,
//                 "val": 17.6
//             },
//             {
//                 "timestamp": 213,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 214,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 215,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 216,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 217,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 218,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 219,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 220,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 221,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 222,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 223,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 224,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 225,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 226,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 227,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 228,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 229,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 230,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 231,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 232,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 233,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 234,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 235,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 236,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 237,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 238,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 239,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 240,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 241,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 242,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 243,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 244,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 245,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 246,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 247,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 248,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 249,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 250,
//                 "val": 19.0
//             },
//             {
//                 "timestamp": 251,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 252,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 253,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 254,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 255,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 256,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 257,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 258,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 259,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 260,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 261,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 262,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 263,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 264,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 265,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 266,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 267,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 268,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 269,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 270,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 271,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 272,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 273,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 274,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 275,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 276,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 277,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 278,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 279,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 280,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 281,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 282,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 283,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 284,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 285,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 286,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 287,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 288,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 289,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 290,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 291,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 292,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 293,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 294,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 295,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 296,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 297,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 298,
//                 "val": 21.7
//             },
//             {
//                 "timestamp": 299,
//                 "val": 21.7
//             },
//             {
//                 "timestamp": 300,
//                 "val": 21.7
//             },
//             {
//                 "timestamp": 301,
//                 "val": 21.8
//             },
//             {
//                 "timestamp": 302,
//                 "val": 21.8
//             },
//             {
//                 "timestamp": 303,
//                 "val": 21.8
//             },
//             {
//                 "timestamp": 304,
//                 "val": 21.9
//             },
//             {
//                 "timestamp": 305,
//                 "val": 21.9
//             },
//             {
//                 "timestamp": 306,
//                 "val": 21.9
//             },
//             {
//                 "timestamp": 307,
//                 "val": 22.0
//             },
//             {
//                 "timestamp": 308,
//                 "val": 22.0
//             },
//             {
//                 "timestamp": 309,
//                 "val": 22.1
//             },
//             {
//                 "timestamp": 310,
//                 "val": 22.1
//             },
//             {
//                 "timestamp": 311,
//                 "val": 22.1
//             },
//             {
//                 "timestamp": 312,
//                 "val": 22.1
//             },
//             {
//                 "timestamp": 313,
//                 "val": 22.1
//             },
//             {
//                 "timestamp": 314,
//                 "val": 22.1
//             },
//             {
//                 "timestamp": 315,
//                 "val": 22.1
//             },
//             {
//                 "timestamp": 316,
//                 "val": 22.2
//             },
//             {
//                 "timestamp": 317,
//                 "val": 22.2
//             },
//             {
//                 "timestamp": 318,
//                 "val": 22.2
//             },
//             {
//                 "timestamp": 319,
//                 "val": 22.3
//             },
//             {
//                 "timestamp": 320,
//                 "val": 22.4
//             },
//             {
//                 "timestamp": 321,
//                 "val": 22.5
//             },
//             {
//                 "timestamp": 322,
//                 "val": 22.5
//             },
//             {
//                 "timestamp": 323,
//                 "val": 22.5
//             },
//             {
//                 "timestamp": 324,
//                 "val": 22.5
//             },
//             {
//                 "timestamp": 325,
//                 "val": 22.6
//             },
//             {
//                 "timestamp": 326,
//                 "val": 22.7
//             },
//             {
//                 "timestamp": 327,
//                 "val": 22.7
//             },
//             {
//                 "timestamp": 328,
//                 "val": 22.6
//             },
//             {
//                 "timestamp": 329,
//                 "val": 22.6
//             },
//             {
//                 "timestamp": 330,
//                 "val": 22.7
//             },
//             {
//                 "timestamp": 331,
//                 "val": 22.7
//             },
//             {
//                 "timestamp": 332,
//                 "val": 22.8
//             },
//             {
//                 "timestamp": 333,
//                 "val": 22.8
//             },
//             {
//                 "timestamp": 334,
//                 "val": 22.7
//             },
//             {
//                 "timestamp": 335,
//                 "val": 22.8
//             },
//             {
//                 "timestamp": 336,
//                 "val": 22.8
//             },
//             {
//                 "timestamp": 337,
//                 "val": 22.8
//             },
//             {
//                 "timestamp": 338,
//                 "val": 22.8
//             },
//             {
//                 "timestamp": 339,
//                 "val": 22.8
//             },
//             {
//                 "timestamp": 340,
//                 "val": 22.9
//             },
//             {
//                 "timestamp": 341,
//                 "val": 22.9
//             },
//             {
//                 "timestamp": 342,
//                 "val": 23.0
//             },
//             {
//                 "timestamp": 343,
//                 "val": 23.0
//             },
//             {
//                 "timestamp": 344,
//                 "val": 23.0
//             },
//             {
//                 "timestamp": 345,
//                 "val": 23.1
//             },
//             {
//                 "timestamp": 346,
//                 "val": 23.1
//             },
//             {
//                 "timestamp": 347,
//                 "val": 23.1
//             },
//             {
//                 "timestamp": 348,
//                 "val": 23.1
//             },
//             {
//                 "timestamp": 349,
//                 "val": 23.1
//             },
//             {
//                 "timestamp": 350,
//                 "val": 23.2
//             },
//             {
//                 "timestamp": 351,
//                 "val": 23.3
//             },
//             {
//                 "timestamp": 352,
//                 "val": 23.3
//             },
//             {
//                 "timestamp": 353,
//                 "val": 23.4
//             },
//             {
//                 "timestamp": 354,
//                 "val": 23.3
//             },
//             {
//                 "timestamp": 355,
//                 "val": 23.3
//             },
//             {
//                 "timestamp": 356,
//                 "val": 23.5
//             },
//             {
//                 "timestamp": 357,
//                 "val": 23.5
//             },
//             {
//                 "timestamp": 358,
//                 "val": 23.5
//             },
//             {
//                 "timestamp": 359,
//                 "val": 23.5
//             },
//             {
//                 "timestamp": 360,
//                 "val": 23.6
//             },
//             {
//                 "timestamp": 361,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 362,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 363,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 364,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 365,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 366,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 367,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 368,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 369,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 370,
//                 "val": 23.9
//             },
//             {
//                 "timestamp": 371,
//                 "val": 23.9
//             },
//             {
//                 "timestamp": 372,
//                 "val": 23.9
//             },
//             {
//                 "timestamp": 373,
//                 "val": 23.9
//             },
//             {
//                 "timestamp": 374,
//                 "val": 23.9
//             },
//             {
//                 "timestamp": 375,
//                 "val": 24.0
//             },
//             {
//                 "timestamp": 376,
//                 "val": 24.0
//             },
//             {
//                 "timestamp": 377,
//                 "val": 24.0
//             },
//             {
//                 "timestamp": 378,
//                 "val": 24.0
//             },
//             {
//                 "timestamp": 379,
//                 "val": 24.0
//             },
//             {
//                 "timestamp": 380,
//                 "val": 24.1
//             },
//             {
//                 "timestamp": 381,
//                 "val": 24.1
//             },
//             {
//                 "timestamp": 382,
//                 "val": 24.2
//             },
//             {
//                 "timestamp": 383,
//                 "val": 24.2
//             },
//             {
//                 "timestamp": 384,
//                 "val": 24.1
//             },
//             {
//                 "timestamp": 385,
//                 "val": 24.2
//             },
//             {
//                 "timestamp": 386,
//                 "val": 24.3
//             },
//             {
//                 "timestamp": 387,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 388,
//                 "val": 24.3
//             },
//             {
//                 "timestamp": 389,
//                 "val": 24.3
//             },
//             {
//                 "timestamp": 390,
//                 "val": 24.3
//             },
//             {
//                 "timestamp": 391,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 392,
//                 "val": 24.5
//             },
//             {
//                 "timestamp": 393,
//                 "val": 24.5
//             },
//             {
//                 "timestamp": 394,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 395,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 396,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 397,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 398,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 399,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 400,
//                 "val": 24.3
//             },
//             {
//                 "timestamp": 401,
//                 "val": 24.3
//             },
//             {
//                 "timestamp": 402,
//                 "val": 24.5
//             },
//             {
//                 "timestamp": 403,
//                 "val": 24.5
//             },
//             {
//                 "timestamp": 404,
//                 "val": 24.5
//             },
//             {
//                 "timestamp": 405,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 406,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 407,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 408,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 409,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 410,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 411,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 412,
//                 "val": 24.5
//             },
//             {
//                 "timestamp": 413,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 414,
//                 "val": 24.5
//             },
//             {
//                 "timestamp": 415,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 416,
//                 "val": 24.3
//             },
//             {
//                 "timestamp": 417,
//                 "val": 24.3
//             },
//             {
//                 "timestamp": 418,
//                 "val": 24.3
//             },
//             {
//                 "timestamp": 419,
//                 "val": 24.3
//             },
//             {
//                 "timestamp": 420,
//                 "val": 24.2
//             },
//             {
//                 "timestamp": 421,
//                 "val": 24.2
//             },
//             {
//                 "timestamp": 422,
//                 "val": 24.3
//             },
//             {
//                 "timestamp": 423,
//                 "val": 24.2
//             },
//             {
//                 "timestamp": 424,
//                 "val": 24.3
//             },
//             {
//                 "timestamp": 425,
//                 "val": 24.3
//             },
//             {
//                 "timestamp": 426,
//                 "val": 24.3
//             },
//             {
//                 "timestamp": 427,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 428,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 429,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 430,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 431,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 432,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 433,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 434,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 435,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 436,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 437,
//                 "val": 24.5
//             },
//             {
//                 "timestamp": 438,
//                 "val": 24.5
//             },
//             {
//                 "timestamp": 439,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 440,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 441,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 442,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 443,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 444,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 445,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 446,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 447,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 448,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 449,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 450,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 451,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 452,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 453,
//                 "val": 24.5
//             },
//             {
//                 "timestamp": 454,
//                 "val": 24.5
//             },
//             {
//                 "timestamp": 455,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 456,
//                 "val": 24.5
//             },
//             {
//                 "timestamp": 457,
//                 "val": 24.5
//             },
//             {
//                 "timestamp": 458,
//                 "val": 24.5
//             },
//             {
//                 "timestamp": 459,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 460,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 461,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 462,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 463,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 464,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 465,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 466,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 467,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 468,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 469,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 470,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 471,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 472,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 473,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 474,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 475,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 476,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 477,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 478,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 479,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 480,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 481,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 482,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 483,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 484,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 485,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 486,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 487,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 488,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 489,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 490,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 491,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 492,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 493,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 494,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 495,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 496,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 497,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 498,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 499,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 500,
//                 "val": 24.6
//             },
//             {
//                 "timestamp": 501,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 502,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 503,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 504,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 505,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 506,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 507,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 508,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 509,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 510,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 511,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 512,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 513,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 514,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 515,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 516,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 517,
//                 "val": 24.9
//             },
//             {
//                 "timestamp": 518,
//                 "val": 24.9
//             },
//             {
//                 "timestamp": 519,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 520,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 521,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 522,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 523,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 524,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 525,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 526,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 527,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 528,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 529,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 530,
//                 "val": 24.9
//             },
//             {
//                 "timestamp": 531,
//                 "val": 24.9
//             },
//             {
//                 "timestamp": 532,
//                 "val": 24.9
//             },
//             {
//                 "timestamp": 533,
//                 "val": 24.9
//             },
//             {
//                 "timestamp": 534,
//                 "val": 24.9
//             },
//             {
//                 "timestamp": 535,
//                 "val": 24.9
//             },
//             {
//                 "timestamp": 536,
//                 "val": 25.0
//             },
//             {
//                 "timestamp": 537,
//                 "val": 25.0
//             },
//             {
//                 "timestamp": 538,
//                 "val": 24.9
//             },
//             {
//                 "timestamp": 539,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 540,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 541,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 542,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 543,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 544,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 545,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 546,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 547,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 548,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 549,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 550,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 551,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 552,
//                 "val": 24.9
//             },
//             {
//                 "timestamp": 553,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 554,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 555,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 556,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 557,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 558,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 559,
//                 "val": 24.8
//             },
//             {
//                 "timestamp": 560,
//                 "val": 24.9
//             },
//             {
//                 "timestamp": 561,
//                 "val": 25.0
//             },
//             {
//                 "timestamp": 562,
//                 "val": 25.0
//             },
//             {
//                 "timestamp": 563,
//                 "val": 25.0
//             },
//             {
//                 "timestamp": 564,
//                 "val": 25.0
//             },
//             {
//                 "timestamp": 565,
//                 "val": 24.9
//             },
//             {
//                 "timestamp": 566,
//                 "val": 24.7
//             },
//             {
//                 "timestamp": 567,
//                 "val": 24.5
//             },
//             {
//                 "timestamp": 568,
//                 "val": 24.5
//             },
//             {
//                 "timestamp": 569,
//                 "val": 24.5
//             },
//             {
//                 "timestamp": 570,
//                 "val": 24.5
//             },
//             {
//                 "timestamp": 571,
//                 "val": 24.4
//             },
//             {
//                 "timestamp": 572,
//                 "val": 24.3
//             },
//             {
//                 "timestamp": 573,
//                 "val": 24.2
//             },
//             {
//                 "timestamp": 574,
//                 "val": 24.1
//             },
//             {
//                 "timestamp": 575,
//                 "val": 24.0
//             },
//             {
//                 "timestamp": 576,
//                 "val": 24.0
//             },
//             {
//                 "timestamp": 577,
//                 "val": 24.0
//             },
//             {
//                 "timestamp": 578,
//                 "val": 24.0
//             },
//             {
//                 "timestamp": 579,
//                 "val": 24.0
//             },
//             {
//                 "timestamp": 580,
//                 "val": 23.9
//             },
//             {
//                 "timestamp": 581,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 582,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 583,
//                 "val": 23.9
//             },
//             {
//                 "timestamp": 584,
//                 "val": 23.9
//             },
//             {
//                 "timestamp": 585,
//                 "val": 23.9
//             },
//             {
//                 "timestamp": 586,
//                 "val": 23.9
//             },
//             {
//                 "timestamp": 587,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 588,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 589,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 590,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 591,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 592,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 593,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 594,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 595,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 596,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 597,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 598,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 599,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 600,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 601,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 602,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 603,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 604,
//                 "val": 23.6
//             },
//             {
//                 "timestamp": 605,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 606,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 607,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 608,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 609,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 610,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 611,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 612,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 613,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 614,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 615,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 616,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 617,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 618,
//                 "val": 23.8
//             },
//             {
//                 "timestamp": 619,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 620,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 621,
//                 "val": 23.6
//             },
//             {
//                 "timestamp": 622,
//                 "val": 23.6
//             },
//             {
//                 "timestamp": 623,
//                 "val": 23.6
//             },
//             {
//                 "timestamp": 624,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 625,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 626,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 627,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 628,
//                 "val": 23.6
//             },
//             {
//                 "timestamp": 629,
//                 "val": 23.6
//             },
//             {
//                 "timestamp": 630,
//                 "val": 23.6
//             },
//             {
//                 "timestamp": 631,
//                 "val": 23.6
//             },
//             {
//                 "timestamp": 632,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 633,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 634,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 635,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 636,
//                 "val": 23.7
//             },
//             {
//                 "timestamp": 637,
//                 "val": 23.6
//             },
//             {
//                 "timestamp": 638,
//                 "val": 23.5
//             },
//             {
//                 "timestamp": 639,
//                 "val": 23.5
//             },
//             {
//                 "timestamp": 640,
//                 "val": 23.5
//             },
//             {
//                 "timestamp": 641,
//                 "val": 23.4
//             },
//             {
//                 "timestamp": 642,
//                 "val": 23.4
//             },
//             {
//                 "timestamp": 643,
//                 "val": 23.4
//             },
//             {
//                 "timestamp": 644,
//                 "val": 23.4
//             },
//             {
//                 "timestamp": 645,
//                 "val": 23.4
//             },
//             {
//                 "timestamp": 646,
//                 "val": 23.5
//             },
//             {
//                 "timestamp": 647,
//                 "val": 23.5
//             },
//             {
//                 "timestamp": 648,
//                 "val": 23.4
//             },
//             {
//                 "timestamp": 649,
//                 "val": 23.4
//             },
//             {
//                 "timestamp": 650,
//                 "val": 23.4
//             },
//             {
//                 "timestamp": 651,
//                 "val": 23.4
//             },
//             {
//                 "timestamp": 652,
//                 "val": 23.3
//             },
//             {
//                 "timestamp": 653,
//                 "val": 23.3
//             },
//             {
//                 "timestamp": 654,
//                 "val": 23.3
//             },
//             {
//                 "timestamp": 655,
//                 "val": 23.3
//             },
//             {
//                 "timestamp": 656,
//                 "val": 23.3
//             },
//             {
//                 "timestamp": 657,
//                 "val": 23.3
//             },
//             {
//                 "timestamp": 658,
//                 "val": 23.3
//             },
//             {
//                 "timestamp": 659,
//                 "val": 23.3
//             },
//             {
//                 "timestamp": 660,
//                 "val": 23.3
//             },
//             {
//                 "timestamp": 661,
//                 "val": 23.2
//             },
//             {
//                 "timestamp": 662,
//                 "val": 23.2
//             },
//             {
//                 "timestamp": 663,
//                 "val": 23.2
//             },
//             {
//                 "timestamp": 664,
//                 "val": 23.2
//             },
//             {
//                 "timestamp": 665,
//                 "val": 23.2
//             },
//             {
//                 "timestamp": 666,
//                 "val": 23.2
//             },
//             {
//                 "timestamp": 667,
//                 "val": 23.2
//             },
//             {
//                 "timestamp": 668,
//                 "val": 23.2
//             },
//             {
//                 "timestamp": 669,
//                 "val": 23.1
//             },
//             {
//                 "timestamp": 670,
//                 "val": 23.1
//             },
//             {
//                 "timestamp": 671,
//                 "val": 23.1
//             },
//             {
//                 "timestamp": 672,
//                 "val": 23.1
//             },
//             {
//                 "timestamp": 673,
//                 "val": 23.0
//             },
//             {
//                 "timestamp": 674,
//                 "val": 23.0
//             },
//             {
//                 "timestamp": 675,
//                 "val": 23.0
//             },
//             {
//                 "timestamp": 676,
//                 "val": 23.0
//             },
//             {
//                 "timestamp": 677,
//                 "val": 23.0
//             },
//             {
//                 "timestamp": 678,
//                 "val": 22.9
//             },
//             {
//                 "timestamp": 679,
//                 "val": 22.9
//             },
//             {
//                 "timestamp": 680,
//                 "val": 22.9
//             },
//             {
//                 "timestamp": 681,
//                 "val": 22.8
//             },
//             {
//                 "timestamp": 682,
//                 "val": 22.8
//             },
//             {
//                 "timestamp": 683,
//                 "val": 22.9
//             },
//             {
//                 "timestamp": 684,
//                 "val": 22.8
//             },
//             {
//                 "timestamp": 685,
//                 "val": 22.8
//             },
//             {
//                 "timestamp": 686,
//                 "val": 22.8
//             },
//             {
//                 "timestamp": 687,
//                 "val": 22.8
//             },
//             {
//                 "timestamp": 688,
//                 "val": 22.8
//             },
//             {
//                 "timestamp": 689,
//                 "val": 22.8
//             },
//             {
//                 "timestamp": 690,
//                 "val": 22.8
//             },
//             {
//                 "timestamp": 691,
//                 "val": 22.8
//             },
//             {
//                 "timestamp": 692,
//                 "val": 22.8
//             },
//             {
//                 "timestamp": 693,
//                 "val": 22.8
//             },
//             {
//                 "timestamp": 694,
//                 "val": 22.7
//             },
//             {
//                 "timestamp": 695,
//                 "val": 22.7
//             },
//             {
//                 "timestamp": 696,
//                 "val": 22.7
//             },
//             {
//                 "timestamp": 697,
//                 "val": 22.7
//             },
//             {
//                 "timestamp": 698,
//                 "val": 22.7
//             },
//             {
//                 "timestamp": 699,
//                 "val": 22.7
//             },
//             {
//                 "timestamp": 700,
//                 "val": 22.6
//             },
//             {
//                 "timestamp": 701,
//                 "val": 22.6
//             },
//             {
//                 "timestamp": 702,
//                 "val": 22.6
//             },
//             {
//                 "timestamp": 703,
//                 "val": 22.6
//             },
//             {
//                 "timestamp": 704,
//                 "val": 22.5
//             },
//             {
//                 "timestamp": 705,
//                 "val": 22.5
//             },
//             {
//                 "timestamp": 706,
//                 "val": 22.5
//             },
//             {
//                 "timestamp": 707,
//                 "val": 22.5
//             },
//             {
//                 "timestamp": 708,
//                 "val": 22.5
//             },
//             {
//                 "timestamp": 709,
//                 "val": 22.5
//             },
//             {
//                 "timestamp": 710,
//                 "val": 22.5
//             },
//             {
//                 "timestamp": 711,
//                 "val": 22.5
//             },
//             {
//                 "timestamp": 712,
//                 "val": 22.5
//             },
//             {
//                 "timestamp": 713,
//                 "val": 22.5
//             },
//             {
//                 "timestamp": 714,
//                 "val": 22.5
//             },
//             {
//                 "timestamp": 715,
//                 "val": 22.5
//             },
//             {
//                 "timestamp": 716,
//                 "val": 22.5
//             },
//             {
//                 "timestamp": 717,
//                 "val": 22.5
//             },
//             {
//                 "timestamp": 718,
//                 "val": 22.4
//             },
//             {
//                 "timestamp": 719,
//                 "val": 22.4
//             },
//             {
//                 "timestamp": 720,
//                 "val": 22.4
//             },
//             {
//                 "timestamp": 721,
//                 "val": 22.4
//             },
//             {
//                 "timestamp": 722,
//                 "val": 22.3
//             },
//             {
//                 "timestamp": 723,
//                 "val": 22.3
//             },
//             {
//                 "timestamp": 724,
//                 "val": 22.3
//             },
//             {
//                 "timestamp": 725,
//                 "val": 22.3
//             },
//             {
//                 "timestamp": 726,
//                 "val": 22.3
//             },
//             {
//                 "timestamp": 727,
//                 "val": 22.3
//             },
//             {
//                 "timestamp": 728,
//                 "val": 22.2
//             },
//             {
//                 "timestamp": 729,
//                 "val": 22.2
//             },
//             {
//                 "timestamp": 730,
//                 "val": 22.2
//             },
//             {
//                 "timestamp": 731,
//                 "val": 22.2
//             },
//             {
//                 "timestamp": 732,
//                 "val": 22.2
//             },
//             {
//                 "timestamp": 733,
//                 "val": 22.2
//             },
//             {
//                 "timestamp": 734,
//                 "val": 22.2
//             },
//             {
//                 "timestamp": 735,
//                 "val": 22.2
//             },
//             {
//                 "timestamp": 736,
//                 "val": 22.2
//             },
//             {
//                 "timestamp": 737,
//                 "val": 22.2
//             },
//             {
//                 "timestamp": 738,
//                 "val": 22.1
//             },
//             {
//                 "timestamp": 739,
//                 "val": 22.1
//             },
//             {
//                 "timestamp": 740,
//                 "val": 22.1
//             },
//             {
//                 "timestamp": 741,
//                 "val": 22.1
//             },
//             {
//                 "timestamp": 742,
//                 "val": 22.0
//             },
//             {
//                 "timestamp": 743,
//                 "val": 22.0
//             },
//             {
//                 "timestamp": 744,
//                 "val": 22.0
//             },
//             {
//                 "timestamp": 745,
//                 "val": 22.0
//             },
//             {
//                 "timestamp": 746,
//                 "val": 22.0
//             },
//             {
//                 "timestamp": 747,
//                 "val": 22.0
//             },
//             {
//                 "timestamp": 748,
//                 "val": 22.0
//             },
//             {
//                 "timestamp": 749,
//                 "val": 22.0
//             },
//             {
//                 "timestamp": 750,
//                 "val": 22.0
//             },
//             {
//                 "timestamp": 751,
//                 "val": 22.0
//             },
//             {
//                 "timestamp": 752,
//                 "val": 22.0
//             },
//             {
//                 "timestamp": 753,
//                 "val": 21.9
//             },
//             {
//                 "timestamp": 754,
//                 "val": 21.9
//             },
//             {
//                 "timestamp": 755,
//                 "val": 21.9
//             },
//             {
//                 "timestamp": 756,
//                 "val": 21.8
//             },
//             {
//                 "timestamp": 757,
//                 "val": 21.9
//             },
//             {
//                 "timestamp": 758,
//                 "val": 21.8
//             },
//             {
//                 "timestamp": 759,
//                 "val": 21.8
//             },
//             {
//                 "timestamp": 760,
//                 "val": 21.8
//             },
//             {
//                 "timestamp": 761,
//                 "val": 21.8
//             },
//             {
//                 "timestamp": 762,
//                 "val": 21.8
//             },
//             {
//                 "timestamp": 763,
//                 "val": 21.8
//             },
//             {
//                 "timestamp": 764,
//                 "val": 21.8
//             },
//             {
//                 "timestamp": 765,
//                 "val": 21.8
//             },
//             {
//                 "timestamp": 766,
//                 "val": 21.8
//             },
//             {
//                 "timestamp": 767,
//                 "val": 21.8
//             },
//             {
//                 "timestamp": 768,
//                 "val": 21.8
//             },
//             {
//                 "timestamp": 769,
//                 "val": 21.8
//             },
//             {
//                 "timestamp": 770,
//                 "val": 21.8
//             },
//             {
//                 "timestamp": 771,
//                 "val": 21.8
//             },
//             {
//                 "timestamp": 772,
//                 "val": 21.8
//             },
//             {
//                 "timestamp": 773,
//                 "val": 21.8
//             },
//             {
//                 "timestamp": 774,
//                 "val": 21.8
//             },
//             {
//                 "timestamp": 775,
//                 "val": 21.7
//             },
//             {
//                 "timestamp": 776,
//                 "val": 21.7
//             },
//             {
//                 "timestamp": 777,
//                 "val": 21.7
//             },
//             {
//                 "timestamp": 778,
//                 "val": 21.7
//             },
//             {
//                 "timestamp": 779,
//                 "val": 21.7
//             },
//             {
//                 "timestamp": 780,
//                 "val": 21.7
//             },
//             {
//                 "timestamp": 781,
//                 "val": 21.7
//             },
//             {
//                 "timestamp": 782,
//                 "val": 21.7
//             },
//             {
//                 "timestamp": 783,
//                 "val": 21.6
//             },
//             {
//                 "timestamp": 784,
//                 "val": 21.6
//             },
//             {
//                 "timestamp": 785,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 786,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 787,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 788,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 789,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 790,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 791,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 792,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 793,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 794,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 795,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 796,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 797,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 798,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 799,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 800,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 801,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 802,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 803,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 804,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 805,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 806,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 807,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 808,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 809,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 810,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 811,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 812,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 813,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 814,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 815,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 816,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 817,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 818,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 819,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 820,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 821,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 822,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 823,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 824,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 825,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 826,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 827,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 828,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 829,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 830,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 831,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 832,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 833,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 834,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 835,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 836,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 837,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 838,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 839,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 840,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 841,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 842,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 843,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 844,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 845,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 846,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 847,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 848,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 849,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 850,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 851,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 852,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 853,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 854,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 855,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 856,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 857,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 858,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 859,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 860,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 861,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 862,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 863,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 864,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 865,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 866,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 867,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 868,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 869,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 870,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 871,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 872,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 873,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 874,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 875,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 876,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 877,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 878,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 879,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 880,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 881,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 882,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 883,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 884,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 885,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 886,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 887,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 888,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 889,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 890,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 891,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 892,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 893,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 894,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 895,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 896,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 897,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 898,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 899,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 900,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 901,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 902,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 903,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 904,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 905,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 906,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 907,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 908,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 909,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 910,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 911,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 912,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 913,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 914,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 915,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 916,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 917,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 918,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 919,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 920,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 921,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 922,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 923,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 924,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 925,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 926,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 927,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 928,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 929,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 930,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 931,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 932,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 933,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 934,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 935,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 936,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 937,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 938,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 939,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 940,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 941,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 942,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 943,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 944,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 945,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 946,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 947,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 948,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 949,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 950,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 951,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 952,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 953,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 954,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 955,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 956,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 957,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 958,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 959,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 960,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 961,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 962,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 963,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 964,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 965,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 966,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 967,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 968,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 969,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 970,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 971,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 972,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 973,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 974,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 975,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 976,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 977,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 978,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 979,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 980,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 981,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 982,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 983,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 984,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 985,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 986,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 987,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 988,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 989,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 990,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 991,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 992,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 993,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 994,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 995,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 996,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 997,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 998,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 999,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1000,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1001,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1002,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1003,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1004,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1005,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1006,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1007,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1008,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1009,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1010,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1011,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1012,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1013,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1014,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1015,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1016,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1017,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1018,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1019,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1020,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1021,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1022,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1023,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1024,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1025,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1026,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1027,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1028,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1029,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1030,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1031,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1032,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1033,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1034,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1035,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1036,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1037,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1038,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1039,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1040,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1041,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1042,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1043,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1044,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1045,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1046,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1047,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1048,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1049,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1050,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1051,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1052,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1053,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1054,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1055,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1056,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1057,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1058,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1059,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1060,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1061,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1062,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1063,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1064,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1065,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1066,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1067,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1068,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1069,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1070,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1071,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1072,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1073,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1074,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1075,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1076,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1077,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1078,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1079,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1080,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1081,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1082,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1083,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1084,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1085,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1086,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1087,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1088,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1089,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1090,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1091,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1092,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1093,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1094,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1095,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1096,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1097,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1098,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1099,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1100,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1101,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1102,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1103,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1104,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1105,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1106,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1107,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1108,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1109,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1110,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1111,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1112,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1113,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1114,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1115,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1116,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1117,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1118,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1119,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1120,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1121,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1122,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1123,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1124,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1125,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1126,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1127,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1128,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 1129,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 1130,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1131,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1132,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 1133,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 1134,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 1135,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 1136,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 1137,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 1138,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 1139,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 1140,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 1141,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 1142,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 1143,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 1144,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 1145,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 1146,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 1147,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 1148,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 1149,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 1150,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1151,
//                 "val": 19.7
//             },
//             {
//                 "timestamp": 1152,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1153,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1154,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1155,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1156,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1157,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1158,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1159,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1160,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1161,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1162,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1163,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1164,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1165,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1166,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1167,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1168,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1169,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1170,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1171,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1172,
//                 "val": 19.6
//             },
//             {
//                 "timestamp": 1173,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1174,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1175,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1176,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1177,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1178,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1179,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1180,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1181,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1182,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1183,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1184,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1185,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1186,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1187,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1188,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1189,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1190,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1191,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1192,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1193,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1194,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1195,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1196,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1197,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1198,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1199,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1200,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1201,
//                 "val": 19.5
//             },
//             {
//                 "timestamp": 1202,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1203,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1204,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1205,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1206,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1207,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1208,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1209,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1210,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1211,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1212,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1213,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1214,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1215,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1216,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1217,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1218,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1219,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1220,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1221,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1222,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1223,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1224,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1225,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1226,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1227,
//                 "val": 19.4
//             },
//             {
//                 "timestamp": 1228,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1229,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1230,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1231,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1232,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1233,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1234,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1235,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1236,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1237,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1238,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1239,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1240,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1241,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1242,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1243,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1244,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1245,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1246,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1247,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1248,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1249,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1250,
//                 "val": 19.3
//             },
//             {
//                 "timestamp": 1251,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1252,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1253,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1254,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1255,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1256,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1257,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1258,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1259,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1260,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1261,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1262,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1263,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1264,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1265,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1266,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1267,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1268,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1269,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1270,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1271,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1272,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1273,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1274,
//                 "val": 19.2
//             },
//             {
//                 "timestamp": 1275,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1276,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1277,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1278,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1279,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1280,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1281,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1282,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1283,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1284,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1285,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1286,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1287,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1288,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1289,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1290,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1291,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1292,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1293,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1294,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1295,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1296,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1297,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1298,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1299,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1300,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1301,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1302,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1303,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1304,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1305,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1306,
//                 "val": 19.1
//             },
//             {
//                 "timestamp": 1307,
//                 "val": 19.0
//             },
//             {
//                 "timestamp": 1308,
//                 "val": 19.0
//             },
//             {
//                 "timestamp": 1309,
//                 "val": 19.0
//             },
//             {
//                 "timestamp": 1310,
//                 "val": 19.0
//             },
//             {
//                 "timestamp": 1311,
//                 "val": 19.0
//             },
//             {
//                 "timestamp": 1312,
//                 "val": 19.0
//             },
//             {
//                 "timestamp": 1313,
//                 "val": 19.0
//             },
//             {
//                 "timestamp": 1314,
//                 "val": 19.0
//             },
//             {
//                 "timestamp": 1315,
//                 "val": 19.0
//             },
//             {
//                 "timestamp": 1316,
//                 "val": 19.0
//             },
//             {
//                 "timestamp": 1317,
//                 "val": 19.0
//             },
//             {
//                 "timestamp": 1318,
//                 "val": 19.0
//             },
//             {
//                 "timestamp": 1319,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 1320,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 1321,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 1322,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 1323,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 1324,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 1325,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 1326,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 1327,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 1328,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 1329,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 1330,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 1331,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 1332,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 1333,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 1334,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 1335,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 1336,
//                 "val": 18.9
//             },
//             {
//                 "timestamp": 1337,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 1338,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 1339,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 1340,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 1341,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 1342,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 1343,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 1344,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 1345,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 1346,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 1347,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 1348,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 1349,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 1350,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 1351,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 1352,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 1353,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 1354,
//                 "val": 18.8
//             },
//             {
//                 "timestamp": 1355,
//                 "val": 18.7
//             },
//             {
//                 "timestamp": 1356,
//                 "val": 18.7
//             },
//             {
//                 "timestamp": 1357,
//                 "val": 18.7
//             },
//             {
//                 "timestamp": 1358,
//                 "val": 18.7
//             },
//             {
//                 "timestamp": 1359,
//                 "val": 18.7
//             },
//             {
//                 "timestamp": 1360,
//                 "val": 18.7
//             },
//             {
//                 "timestamp": 1361,
//                 "val": 18.7
//             },
//             {
//                 "timestamp": 1362,
//                 "val": 18.7
//             },
//             {
//                 "timestamp": 1363,
//                 "val": 18.7
//             },
//             {
//                 "timestamp": 1364,
//                 "val": 18.7
//             },
//             {
//                 "timestamp": 1365,
//                 "val": 18.7
//             },
//             {
//                 "timestamp": 1366,
//                 "val": 18.7
//             },
//             {
//                 "timestamp": 1367,
//                 "val": 18.7
//             },
//             {
//                 "timestamp": 1368,
//                 "val": 18.7
//             },
//             {
//                 "timestamp": 1369,
//                 "val": 18.7
//             },
//             {
//                 "timestamp": 1370,
//                 "val": 18.7
//             },
//             {
//                 "timestamp": 1371,
//                 "val": 18.7
//             },
//             {
//                 "timestamp": 1372,
//                 "val": 18.7
//             },
//             {
//                 "timestamp": 1373,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1374,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1375,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1376,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1377,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1378,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1379,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1380,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1381,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1382,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1383,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1384,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1385,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1386,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1387,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1388,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1389,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1390,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1391,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1392,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1393,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1394,
//                 "val": 18.6
//             },
//             {
//                 "timestamp": 1395,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1396,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1397,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1398,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1399,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1400,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1401,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1402,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1403,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1404,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1405,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1406,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1407,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1408,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1409,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1410,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1411,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1412,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1413,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1414,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1415,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1416,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1417,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1418,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1419,
//                 "val": 18.5
//             },
//             {
//                 "timestamp": 1420,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1421,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1422,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1423,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1424,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1425,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1426,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1427,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1428,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1429,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1430,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1431,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1432,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1433,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1434,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1435,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1436,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1437,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1438,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1439,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1440,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1441,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1442,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1443,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1444,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1445,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1446,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1447,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1448,
//                 "val": 18.4
//             },
//             {
//                 "timestamp": 1449,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1450,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1451,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1452,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1453,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1454,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1455,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1456,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1457,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1458,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1459,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1460,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1461,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1462,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1463,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1464,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1465,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1466,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1467,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1468,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1469,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1470,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1471,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1472,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1473,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1474,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1475,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1476,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1477,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1478,
//                 "val": 18.3
//             },
//             {
//                 "timestamp": 1479,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1480,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1481,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1482,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1483,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1484,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1485,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1486,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1487,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1488,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1489,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1490,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1491,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1492,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1493,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1494,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1495,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1496,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1497,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1498,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1499,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1500,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1501,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1502,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1503,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1504,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1505,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1506,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1507,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1508,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1509,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1510,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1511,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1512,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1513,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1514,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1515,
//                 "val": 18.2
//             },
//             {
//                 "timestamp": 1516,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1517,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1518,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1519,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1520,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1521,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1522,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1523,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1524,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1525,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1526,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1527,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1528,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1529,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1530,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1531,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1532,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1533,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1534,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1535,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1536,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1537,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1538,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1539,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1540,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1541,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1542,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1543,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1544,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1545,
//                 "val": 18.1
//             },
//             {
//                 "timestamp": 1546,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1547,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1548,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1549,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1550,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1551,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1552,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1553,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1554,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1555,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1556,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1557,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1558,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1559,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1560,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1561,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1562,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1563,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1564,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1565,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1566,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1567,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1568,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1569,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1570,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1571,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1572,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1573,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1574,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1575,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1576,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1577,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1578,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1579,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1580,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1581,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1582,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1583,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1584,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1585,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1586,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1587,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1588,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1589,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1590,
//                 "val": 18.0
//             },
//             {
//                 "timestamp": 1591,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1592,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1593,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1594,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1595,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1596,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1597,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1598,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1599,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1600,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1601,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1602,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1603,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1604,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1605,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1606,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1607,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1608,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1609,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1610,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1611,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1612,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1613,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1614,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1615,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1616,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1617,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1618,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1619,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1620,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1621,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1622,
//                 "val": 17.9
//             },
//             {
//                 "timestamp": 1623,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1624,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1625,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1626,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1627,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1628,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1629,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1630,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1631,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1632,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1633,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1634,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1635,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1636,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1637,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1638,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1639,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1640,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1641,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1642,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1643,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1644,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1645,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1646,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1647,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1648,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1649,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1650,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1651,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1652,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1653,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1654,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1655,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1656,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1657,
//                 "val": 17.8
//             },
//             {
//                 "timestamp": 1658,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 1659,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 1660,
//                 "val": 17.7
//             },
//             {
//                 "timestamp": 1661,
//                 "val": 20.62137136
//             },
//             {
//                 "timestamp": 1662,
//                 "val": 20.55976152
//             },
//             {
//                 "timestamp": 1663,
//                 "val": 20.73708934
//             },
//             {
//                 "timestamp": 1664,
//                 "val": 20.64347712
//             },
//             {
//                 "timestamp": 1665,
//                 "val": 20.76581059
//             },
//             {
//                 "timestamp": 1666,
//                 "val": 20.63461586
//             },
//             {
//                 "timestamp": 1667,
//                 "val": 20.79462987
//             },
//             {
//                 "timestamp": 1668,
//                 "val": 20.81722047
//             },
//             {
//                 "timestamp": 1669,
//                 "val": 20.72378031
//             },
//             {
//                 "timestamp": 1670,
//                 "val": 20.79772224
//             },
//             {
//                 "timestamp": 1671,
//                 "val": 20.86887629
//             },
//             {
//                 "timestamp": 1672,
//                 "val": 20.85210049
//             },
//             {
//                 "timestamp": 1673,
//                 "val": 20.52280223
//             },
//             {
//                 "timestamp": 1674,
//                 "val": 20.6086234
//             },
//             {
//                 "timestamp": 1675,
//                 "val": 20.85481915
//             },
//             {
//                 "timestamp": 1676,
//                 "val": 20.76789962
//             },
//             {
//                 "timestamp": 1677,
//                 "val": 20.57985242
//             },
//             {
//                 "timestamp": 1678,
//                 "val": 20.85623527
//             },
//             {
//                 "timestamp": 1679,
//                 "val": 20.78777883
//             },
//             {
//                 "timestamp": 1680,
//                 "val": 20.75767956
//             },
//             {
//                 "timestamp": 1681,
//                 "val": 20.63154699
//             },
//             {
//                 "timestamp": 1682,
//                 "val": 20.84976721
//             },
//             {
//                 "timestamp": 1683,
//                 "val": 20.66793073
//             },
//             {
//                 "timestamp": 1684,
//                 "val": 20.71647425
//             },
//             {
//                 "timestamp": 1685,
//                 "val": 20.62595849
//             },
//             {
//                 "timestamp": 1686,
//                 "val": 20.55949493
//             },
//             {
//                 "timestamp": 1687,
//                 "val": 20.70481599
//             },
//             {
//                 "timestamp": 1688,
//                 "val": 20.59341064
//             },
//             {
//                 "timestamp": 1689,
//                 "val": 20.67898235
//             },
//             {
//                 "timestamp": 1690,
//                 "val": 20.5007127
//             },
//             {
//                 "timestamp": 1691,
//                 "val": 20.70628865
//             },
//             {
//                 "timestamp": 1692,
//                 "val": 20.70529555
//             },
//             {
//                 "timestamp": 1693,
//                 "val": 20.63485149
//             },
//             {
//                 "timestamp": 1694,
//                 "val": 20.75393247
//             },
//             {
//                 "timestamp": 1695,
//                 "val": 20.68086005
//             },
//             {
//                 "timestamp": 1696,
//                 "val": 20.73650955
//             },
//             {
//                 "timestamp": 1697,
//                 "val": 20.49303974
//             },
//             {
//                 "timestamp": 1698,
//                 "val": 20.55513928
//             },
//             {
//                 "timestamp": 1699,
//                 "val": 20.56383709
//             },
//             {
//                 "timestamp": 1700,
//                 "val": 20.62603446
//             },
//             {
//                 "timestamp": 1701,
//                 "val": 20.63522925
//             },
//             {
//                 "timestamp": 1702,
//                 "val": 20.76244633
//             },
//             {
//                 "timestamp": 1703,
//                 "val": 20.46694309
//             },
//             {
//                 "timestamp": 1704,
//                 "val": 20.67890215
//             },
//             {
//                 "timestamp": 1705,
//                 "val": 20.59284689
//             },
//             {
//                 "timestamp": 1706,
//                 "val": 20.51938867
//             },
//             {
//                 "timestamp": 1707,
//                 "val": 20.6164276
//             },
//             {
//                 "timestamp": 1708,
//                 "val": 20.5009987
//             },
//             {
//                 "timestamp": 1709,
//                 "val": 20.58917511
//             },
//             {
//                 "timestamp": 1710,
//                 "val": 20.58063046
//             },
//             {
//                 "timestamp": 1711,
//                 "val": 20.59089219
//             },
//             {
//                 "timestamp": 1712,
//                 "val": 20.33162036
//             },
//             {
//                 "timestamp": 1713,
//                 "val": 20.48635516
//             },
//             {
//                 "timestamp": 1714,
//                 "val": 20.55061822
//             },
//             {
//                 "timestamp": 1715,
//                 "val": 20.40238365
//             },
//             {
//                 "timestamp": 1716,
//                 "val": 20.59380835
//             },
//             {
//                 "timestamp": 1717,
//                 "val": 20.43939786
//             },
//             {
//                 "timestamp": 1718,
//                 "val": 20.40999027
//             },
//             {
//                 "timestamp": 1719,
//                 "val": 20.3287509
//             },
//             {
//                 "timestamp": 1720,
//                 "val": 20.36804807
//             },
//             {
//                 "timestamp": 1721,
//                 "val": 20.35761365
//             },
//             {
//                 "timestamp": 1722,
//                 "val": 20.56002309
//             },
//             {
//                 "timestamp": 1723,
//                 "val": 20.44363947
//             },
//             {
//                 "timestamp": 1724,
//                 "val": 20.41622741
//             },
//             {
//                 "timestamp": 1725,
//                 "val": 20.47783219
//             },
//             {
//                 "timestamp": 1726,
//                 "val": 20.38997476
//             },
//             {
//                 "timestamp": 1727,
//                 "val": 20.46864382
//             },
//             {
//                 "timestamp": 1728,
//                 "val": 20.46909206
//             },
//             {
//                 "timestamp": 1729,
//                 "val": 20.51614033
//             },
//             {
//                 "timestamp": 1730,
//                 "val": 20.65675084
//             },
//             {
//                 "timestamp": 1731,
//                 "val": 20.59093833
//             },
//             {
//                 "timestamp": 1732,
//                 "val": 20.4763495
//             },
//             {
//                 "timestamp": 1733,
//                 "val": 20.62059445
//             },
//             {
//                 "timestamp": 1734,
//                 "val": 20.64023201
//             },
//             {
//                 "timestamp": 1735,
//                 "val": 20.37361496
//             },
//             {
//                 "timestamp": 1736,
//                 "val": 20.3767339
//             },
//             {
//                 "timestamp": 1737,
//                 "val": 20.44824336
//             },
//             {
//                 "timestamp": 1738,
//                 "val": 20.47805942
//             },
//             {
//                 "timestamp": 1739,
//                 "val": 20.46639243
//             },
//             {
//                 "timestamp": 1740,
//                 "val": 20.63267116
//             },
//             {
//                 "timestamp": 1741,
//                 "val": 20.38183445
//             },
//             {
//                 "timestamp": 1742,
//                 "val": 20.48169953
//             },
//             {
//                 "timestamp": 1743,
//                 "val": 20.32923565
//             },
//             {
//                 "timestamp": 1744,
//                 "val": 20.34807614
//             },
//             {
//                 "timestamp": 1745,
//                 "val": 20.46197781
//             },
//             {
//                 "timestamp": 1746,
//                 "val": 20.53512058
//             },
//             {
//                 "timestamp": 1747,
//                 "val": 20.54857839
//             },
//             {
//                 "timestamp": 1748,
//                 "val": 20.48405007
//             },
//             {
//                 "timestamp": 1749,
//                 "val": 20.40434647
//             },
//             {
//                 "timestamp": 1750,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1751,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1752,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1753,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1754,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1755,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1756,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1757,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1758,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1759,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1760,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1761,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1762,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1763,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1764,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1765,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1766,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1767,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1768,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1769,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1770,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1771,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1772,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1773,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1774,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1775,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1776,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1777,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1778,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1779,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1780,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1781,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1782,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1783,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1784,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1785,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1786,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1787,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1788,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1789,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1790,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1791,
//                 "val": 17.4
//             },
//             {
//                 "timestamp": 1792,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1793,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1794,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1795,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1796,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1797,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1798,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1799,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1800,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1801,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1802,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1803,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1804,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1805,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1806,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1807,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1808,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1809,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1810,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1811,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1812,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1813,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1814,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1815,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1816,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1817,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1818,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1819,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1820,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1821,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1822,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1823,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1824,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1825,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1826,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1827,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1828,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1829,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1830,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1831,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1832,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1833,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1834,
//                 "val": 17.5
//             },
//             {
//                 "timestamp": 1835,
//                 "val": 20.55631319
//             },
//             {
//                 "timestamp": 1836,
//                 "val": 20.35878481
//             },
//             {
//                 "timestamp": 1837,
//                 "val": 20.45901925
//             },
//             {
//                 "timestamp": 1838,
//                 "val": 20.49019488
//             },
//             {
//                 "timestamp": 1839,
//                 "val": 20.74980222
//             },
//             {
//                 "timestamp": 1840,
//                 "val": 20.67490143
//             },
//             {
//                 "timestamp": 1841,
//                 "val": 20.53505306
//             },
//             {
//                 "timestamp": 1842,
//                 "val": 20.64947058
//             },
//             {
//                 "timestamp": 1843,
//                 "val": 20.48929336
//             },
//             {
//                 "timestamp": 1844,
//                 "val": 20.58420224
//             },
//             {
//                 "timestamp": 1845,
//                 "val": 20.67031883
//             },
//             {
//                 "timestamp": 1846,
//                 "val": 20.50957405
//             },
//             {
//                 "timestamp": 1847,
//                 "val": 20.79522749
//             },
//             {
//                 "timestamp": 1848,
//                 "val": 20.60941396
//             },
//             {
//                 "timestamp": 1849,
//                 "val": 20.60121547
//             },
//             {
//                 "timestamp": 1850,
//                 "val": 20.68359428
//             },
//             {
//                 "timestamp": 1851,
//                 "val": 20.73065678
//             },
//             {
//                 "timestamp": 1852,
//                 "val": 20.69378482
//             },
//             {
//                 "timestamp": 1853,
//                 "val": 20.60033473
//             },
//             {
//                 "timestamp": 1854,
//                 "val": 20.70243023
//             },
//             {
//                 "timestamp": 1855,
//                 "val": 20.77908159
//             },
//             {
//                 "timestamp": 1856,
//                 "val": 20.80456918
//             },
//             {
//                 "timestamp": 1857,
//                 "val": 20.78582803
//             },
//             {
//                 "timestamp": 1858,
//                 "val": 20.87854055
//             },
//             {
//                 "timestamp": 1859,
//                 "val": 20.94403132
//             },
//             {
//                 "timestamp": 1860,
//                 "val": 20.77144314
//             },
//             {
//                 "timestamp": 1861,
//                 "val": 20.90390094
//             },
//             {
//                 "timestamp": 1862,
//                 "val": 20.96632531
//             },
//             {
//                 "timestamp": 1863,
//                 "val": 20.81963801
//             },
//             {
//                 "timestamp": 1864,
//                 "val": 20.93371682
//             },
//             {
//                 "timestamp": 1865,
//                 "val": 20.93721659
//             },
//             {
//                 "timestamp": 1866,
//                 "val": 21.02737281
//             },
//             {
//                 "timestamp": 1867,
//                 "val": 20.79599211
//             },
//             {
//                 "timestamp": 1868,
//                 "val": 21.04747381
//             },
//             {
//                 "timestamp": 1869,
//                 "val": 20.93548881
//             },
//             {
//                 "timestamp": 1870,
//                 "val": 21.25795677
//             },
//             {
//                 "timestamp": 1871,
//                 "val": 21.20319087
//             },
//             {
//                 "timestamp": 1872,
//                 "val": 20.89150944
//             },
//             {
//                 "timestamp": 1873,
//                 "val": 21.24512492
//             },
//             {
//                 "timestamp": 1874,
//                 "val": 21.23418539
//             },
//             {
//                 "timestamp": 1875,
//                 "val": 21.28486392
//             },
//             {
//                 "timestamp": 1876,
//                 "val": 21.15352914
//             },
//             {
//                 "timestamp": 1877,
//                 "val": 21.41834819
//             },
//             {
//                 "timestamp": 1878,
//                 "val": 21.44908789
//             },
//             {
//                 "timestamp": 1879,
//                 "val": 21.30566867
//             },
//             {
//                 "timestamp": 1880,
//                 "val": 21.35869343
//             },
//             {
//                 "timestamp": 1881,
//                 "val": 21.7003558
//             },
//             {
//                 "timestamp": 1882,
//                 "val": 21.49696788
//             },
//             {
//                 "timestamp": 1883,
//                 "val": 21.79501886
//             },
//             {
//                 "timestamp": 1884,
//                 "val": 21.76615249
//             },
//             {
//                 "timestamp": 1885,
//                 "val": 21.70472985
//             },
//             {
//                 "timestamp": 1886,
//                 "val": 21.67138984
//             },
//             {
//                 "timestamp": 1887,
//                 "val": 21.84575347
//             },
//             {
//                 "timestamp": 1888,
//                 "val": 22.03649718
//             },
//             {
//                 "timestamp": 1889,
//                 "val": 22.09391276
//             },
//             {
//                 "timestamp": 1890,
//                 "val": 22.09852482
//             },
//             {
//                 "timestamp": 1891,
//                 "val": 22.21162105
//             },
//             {
//                 "timestamp": 1892,
//                 "val": 22.1863094
//             },
//             {
//                 "timestamp": 1893,
//                 "val": 22.1508463
//             },
//             {
//                 "timestamp": 1894,
//                 "val": 22.21266023
//             },
//             {
//                 "timestamp": 1895,
//                 "val": 22.39059294
//             },
//             {
//                 "timestamp": 1896,
//                 "val": 22.20745057
//             },
//             {
//                 "timestamp": 1897,
//                 "val": 22.21154378
//             },
//             {
//                 "timestamp": 1898,
//                 "val": 22.46486783
//             },
//             {
//                 "timestamp": 1899,
//                 "val": 22.56337908
//             },
//             {
//                 "timestamp": 1900,
//                 "val": 22.52895526
//             },
//             {
//                 "timestamp": 1901,
//                 "val": 22.57328418
//             },
//             {
//                 "timestamp": 1902,
//                 "val": 22.52324065
//             },
//             {
//                 "timestamp": 1903,
//                 "val": 22.61337105
//             },
//             {
//                 "timestamp": 1904,
//                 "val": 22.49821465
//             },
//             {
//                 "timestamp": 1905,
//                 "val": 22.82073632
//             },
//             {
//                 "timestamp": 1906,
//                 "val": 22.50607719
//             },
//             {
//                 "timestamp": 1907,
//                 "val": 22.73451354
//             },
//             {
//                 "timestamp": 1908,
//                 "val": 22.83053822
//             },
//             {
//                 "timestamp": 1909,
//                 "val": 22.89318897
//             },
//             {
//                 "timestamp": 1910,
//                 "val": 22.83876152
//             },
//             {
//                 "timestamp": 1911,
//                 "val": 22.97186188
//             },
//             {
//                 "timestamp": 1912,
//                 "val": 22.96931394
//             },
//             {
//                 "timestamp": 1913,
//                 "val": 22.96227439
//             },
//             {
//                 "timestamp": 1914,
//                 "val": 23.06937236
//             },
//             {
//                 "timestamp": 1915,
//                 "val": 22.74581471
//             },
//             {
//                 "timestamp": 1916,
//                 "val": 23.06035839
//             },
//             {
//                 "timestamp": 1917,
//                 "val": 23.0032341
//             },
//             {
//                 "timestamp": 1918,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1919,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1920,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1921,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1922,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1923,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1924,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1925,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1926,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1927,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1928,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1929,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 1930,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 1931,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 1932,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 1933,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 1934,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 1935,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 1936,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 1937,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 1938,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 1939,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 1940,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 1941,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 1942,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 1943,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 1944,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 1945,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 1946,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 1947,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 1948,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 1949,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 1950,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 1951,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 1952,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 1953,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 1954,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 1955,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 1956,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 1957,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 1958,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 1959,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 1960,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1961,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1962,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1963,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1964,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1965,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1966,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1967,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1968,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1969,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1970,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1971,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1972,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1973,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1974,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1975,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1976,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1977,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1978,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1979,
//                 "val": 19.8
//             },
//             {
//                 "timestamp": 1980,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1981,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1982,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 1983,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1984,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1985,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1986,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1987,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 1988,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1989,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1990,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1991,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 1992,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1993,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1994,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1995,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 1996,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1997,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1998,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 1999,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 2000,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 2001,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 2002,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 2003,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 2004,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 2005,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 2006,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 2007,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 2008,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 2009,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 2010,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 2011,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 2012,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 2013,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2014,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2015,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2016,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2017,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2018,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2019,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2020,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2021,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2022,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2023,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2024,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2025,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2026,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2027,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2028,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2029,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2030,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2031,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2032,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2033,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2034,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2035,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2036,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2037,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2038,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2039,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2040,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2041,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2042,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2043,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2044,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2045,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2046,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2047,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2048,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2049,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2050,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2051,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2052,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2053,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2054,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2055,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2056,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2057,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2058,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2059,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2060,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2061,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2062,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2063,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2064,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2065,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2066,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2067,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2068,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2069,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2070,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2071,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2072,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2073,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2074,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2075,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2076,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2077,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2078,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2079,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2080,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2081,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2082,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2083,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2084,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2085,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2086,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2087,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2088,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2089,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2090,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2091,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2092,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2093,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2094,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2095,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2096,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2097,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2098,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2099,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2100,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2101,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2102,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2103,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2104,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2105,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2106,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2107,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2108,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2109,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2110,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2111,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2112,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2113,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2114,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2115,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2116,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2117,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2118,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2119,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2120,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2121,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2122,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2123,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2124,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2125,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2126,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2127,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2128,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2129,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2130,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2131,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2132,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2133,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2134,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2135,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2136,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2137,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2138,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2139,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2140,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2141,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2142,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2143,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2144,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2145,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2146,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2147,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2148,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2149,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2150,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2151,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2152,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2153,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2154,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2155,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2156,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2157,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2158,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2159,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2160,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2161,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2162,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2163,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2164,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2165,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2166,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2167,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2168,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2169,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2170,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2171,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2172,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2173,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2174,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2175,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2176,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2177,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2178,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2179,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2180,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2181,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2182,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2183,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2184,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2185,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2186,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2187,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2188,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2189,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2190,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2191,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2192,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2193,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2194,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2195,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2196,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2197,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2198,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2199,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2200,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2201,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2202,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2203,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2204,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2205,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2206,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2207,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2208,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2209,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2210,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2211,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2212,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2213,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2214,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2215,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2216,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2217,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2218,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2219,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2220,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2221,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2222,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2223,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2224,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2225,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2226,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2227,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2228,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2229,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2230,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2231,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2232,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2233,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2234,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2235,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2236,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2237,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2238,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2239,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2240,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2241,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2242,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2243,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2244,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2245,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2246,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2247,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2248,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 2249,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 2250,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 2251,
//                 "val": 21.6
//             },
//             {
//                 "timestamp": 2252,
//                 "val": 21.6
//             },
//             {
//                 "timestamp": 2253,
//                 "val": 21.6
//             },
//             {
//                 "timestamp": 2254,
//                 "val": 21.6
//             },
//             {
//                 "timestamp": 2255,
//                 "val": 21.6
//             },
//             {
//                 "timestamp": 2256,
//                 "val": 21.6
//             },
//             {
//                 "timestamp": 2257,
//                 "val": 21.6
//             },
//             {
//                 "timestamp": 2258,
//                 "val": 21.6
//             },
//             {
//                 "timestamp": 2259,
//                 "val": 21.6
//             },
//             {
//                 "timestamp": 2260,
//                 "val": 21.6
//             },
//             {
//                 "timestamp": 2261,
//                 "val": 21.6
//             },
//             {
//                 "timestamp": 2262,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 2263,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 2264,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 2265,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 2266,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 2267,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 2268,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 2269,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 2270,
//                 "val": 21.5
//             },
//             {
//                 "timestamp": 2271,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2272,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2273,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2274,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2275,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2276,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2277,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2278,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2279,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2280,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2281,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2282,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2283,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2284,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2285,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2286,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2287,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2288,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2289,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2290,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2291,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2292,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2293,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2294,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2295,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2296,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2297,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2298,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2299,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2300,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2301,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2302,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2303,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2304,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2305,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2306,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2307,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2308,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2309,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2310,
//                 "val": 21.4
//             },
//             {
//                 "timestamp": 2311,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2312,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2313,
//                 "val": 21.3
//             },
//             {
//                 "timestamp": 2314,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2315,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2316,
//                 "val": 21.2
//             },
//             {
//                 "timestamp": 2317,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2318,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2319,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2320,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2321,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2322,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2323,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2324,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2325,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2326,
//                 "val": 21.1
//             },
//             {
//                 "timestamp": 2327,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2328,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2329,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2330,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2331,
//                 "val": 21.0
//             },
//             {
//                 "timestamp": 2332,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2333,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2334,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2335,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2336,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2337,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2338,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2339,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2340,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2341,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2342,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2343,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2344,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2345,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2346,
//                 "val": 20.9
//             },
//             {
//                 "timestamp": 2347,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 2348,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 2349,
//                 "val": 20.8
//             },
//             {
//                 "timestamp": 2350,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 2351,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 2352,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 2353,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 2354,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 2355,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 2356,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 2357,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 2358,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 2359,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 2360,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 2361,
//                 "val": 20.7
//             },
//             {
//                 "timestamp": 2362,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 2363,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 2364,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 2365,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 2366,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 2367,
//                 "val": 20.6
//             },
//             {
//                 "timestamp": 2368,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 2369,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 2370,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 2371,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 2372,
//                 "val": 20.5
//             },
//             {
//                 "timestamp": 2373,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 2374,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 2375,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 2376,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 2377,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 2378,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 2379,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 2380,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 2381,
//                 "val": 20.4
//             },
//             {
//                 "timestamp": 2382,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 2383,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 2384,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 2385,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 2386,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 2387,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 2388,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 2389,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 2390,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 2391,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 2392,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 2393,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 2394,
//                 "val": 20.3
//             },
//             {
//                 "timestamp": 2395,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 2396,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 2397,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 2398,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 2399,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 2400,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 2401,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 2402,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 2403,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 2404,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 2405,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 2406,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 2407,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 2408,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 2409,
//                 "val": 20.2
//             },
//             {
//                 "timestamp": 2410,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 2411,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 2412,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 2413,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 2414,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 2415,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 2416,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 2417,
//                 "val": 20.1
//             },
//             {
//                 "timestamp": 2418,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2419,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2420,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2421,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2422,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2423,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2424,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2425,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2426,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2427,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2428,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2429,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2430,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2431,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2432,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2433,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2434,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2435,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2436,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2437,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2438,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2439,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2440,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2441,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2442,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2443,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2444,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2445,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2446,
//                 "val": 20.0
//             },
//             {
//                 "timestamp": 2447,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 2448,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 2449,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 2450,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 2451,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 2452,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 2453,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 2454,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 2455,
//                 "val": 19.9
//             },
//             {
//                 "timestamp": 2456,
//                 "val": 19.9
//             }
//         ],
//         "length": 2456
//     },
//     "state": 2000
//     }
//     return Result
// })

// Mock.mock('/api/data/repair','post',() =>{
//     Result.data ={
//         "timeSeries": {
//             "timeseries": [
//                 {
//                     "timestamp": 1,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 2,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 3,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 4,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 5,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 6,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 7,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 8,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 9,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 10,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 11,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 12,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 13,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 14,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 15,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 16,
//                     "val": 21.70084967
//                 },
//                 {
//                     "timestamp": 17,
//                     "val": 21.66563585
//                 },
//                 {
//                     "timestamp": 18,
//                     "val": 21.59432565
//                 },
//                 {
//                     "timestamp": 19,
//                     "val": 21.75791387
//                 },
//                 {
//                     "timestamp": 20,
//                     "val": 21.69214715
//                 },
//                 {
//                     "timestamp": 21,
//                     "val": 21.73771975
//                 },
//                 {
//                     "timestamp": 22,
//                     "val": 21.69151214
//                 },
//                 {
//                     "timestamp": 23,
//                     "val": 21.63378765
//                 },
//                 {
//                     "timestamp": 24,
//                     "val": 21.62984654
//                 },
//                 {
//                     "timestamp": 25,
//                     "val": 21.72088098
//                 },
//                 {
//                     "timestamp": 26,
//                     "val": 21.50467978
//                 },
//                 {
//                     "timestamp": 27,
//                     "val": 21.57059439
//                 },
//                 {
//                     "timestamp": 28,
//                     "val": 21.46486197
//                 },
//                 {
//                     "timestamp": 29,
//                     "val": 21.70083677
//                 },
//                 {
//                     "timestamp": 30,
//                     "val": 21.50032505
//                 },
//                 {
//                     "timestamp": 31,
//                     "val": 21.6024505
//                 },
//                 {
//                     "timestamp": 32,
//                     "val": 21.60407676
//                 },
//                 {
//                     "timestamp": 33,
//                     "val": 21.58752091
//                 },
//                 {
//                     "timestamp": 34,
//                     "val": 21.34838021
//                 },
//                 {
//                     "timestamp": 35,
//                     "val": 21.52258403
//                 },
//                 {
//                     "timestamp": 36,
//                     "val": 21.24899788
//                 },
//                 {
//                     "timestamp": 37,
//                     "val": 21.6151459
//                 },
//                 {
//                     "timestamp": 38,
//                     "val": 21.50265356
//                 },
//                 {
//                     "timestamp": 39,
//                     "val": 21.52708551
//                 },
//                 {
//                     "timestamp": 40,
//                     "val": 21.43012515
//                 },
//                 {
//                     "timestamp": 41,
//                     "val": 21.50442884
//                 },
//                 {
//                     "timestamp": 42,
//                     "val": 21.48156022
//                 },
//                 {
//                     "timestamp": 43,
//                     "val": 21.44736381
//                 },
//                 {
//                     "timestamp": 44,
//                     "val": 21.40403251
//                 },
//                 {
//                     "timestamp": 45,
//                     "val": 21.36698607
//                 },
//                 {
//                     "timestamp": 46,
//                     "val": 21.32421741
//                 },
//                 {
//                     "timestamp": 47,
//                     "val": 21.27753168
//                 },
//                 {
//                     "timestamp": 48,
//                     "val": 21.42710383
//                 },
//                 {
//                     "timestamp": 49,
//                     "val": 21.33051607
//                 },
//                 {
//                     "timestamp": 50,
//                     "val": 21.18232425
//                 },
//                 {
//                     "timestamp": 51,
//                     "val": 21.22637417
//                 },
//                 {
//                     "timestamp": 52,
//                     "val": 21.4589722
//                 },
//                 {
//                     "timestamp": 53,
//                     "val": 21.20499805
//                 },
//                 {
//                     "timestamp": 54,
//                     "val": 21.45851711
//                 },
//                 {
//                     "timestamp": 55,
//                     "val": 21.27031065
//                 },
//                 {
//                     "timestamp": 56,
//                     "val": 21.07205187
//                 },
//                 {
//                     "timestamp": 57,
//                     "val": 21.38828506
//                 },
//                 {
//                     "timestamp": 58,
//                     "val": 21.46549755
//                 },
//                 {
//                     "timestamp": 59,
//                     "val": 21.61911083
//                 },
//                 {
//                     "timestamp": 60,
//                     "val": 21.2577384
//                 },
//                 {
//                     "timestamp": 61,
//                     "val": 21.53607196
//                 },
//                 {
//                     "timestamp": 62,
//                     "val": 21.2883885
//                 },
//                 {
//                     "timestamp": 63,
//                     "val": 21.32182708
//                 },
//                 {
//                     "timestamp": 64,
//                     "val": 21.54391776
//                 },
//                 {
//                     "timestamp": 65,
//                     "val": 21.32894591
//                 },
//                 {
//                     "timestamp": 66,
//                     "val": 21.32587627
//                 },
//                 {
//                     "timestamp": 67,
//                     "val": 21.3619814
//                 },
//                 {
//                     "timestamp": 68,
//                     "val": 21.27363365
//                 },
//                 {
//                     "timestamp": 69,
//                     "val": 21.30446975
//                 },
//                 {
//                     "timestamp": 70,
//                     "val": 21.39148095
//                 },
//                 {
//                     "timestamp": 71,
//                     "val": 21.50502515
//                 },
//                 {
//                     "timestamp": 72,
//                     "val": 21.32553011
//                 },
//                 {
//                     "timestamp": 73,
//                     "val": 21.1985993
//                 },
//                 {
//                     "timestamp": 74,
//                     "val": 21.26061863
//                 },
//                 {
//                     "timestamp": 75,
//                     "val": 21.39602078
//                 },
//                 {
//                     "timestamp": 76,
//                     "val": 21.4129173
//                 },
//                 {
//                     "timestamp": 77,
//                     "val": 21.14962391
//                 },
//                 {
//                     "timestamp": 78,
//                     "val": 21.32651
//                 },
//                 {
//                     "timestamp": 79,
//                     "val": 21.31568018
//                 },
//                 {
//                     "timestamp": 80,
//                     "val": 21.02044231
//                 },
//                 {
//                     "timestamp": 81,
//                     "val": 21.12619674
//                 },
//                 {
//                     "timestamp": 82,
//                     "val": 21.47103615
//                 },
//                 {
//                     "timestamp": 83,
//                     "val": 21.0544537
//                 },
//                 {
//                     "timestamp": 84,
//                     "val": 21.18088562
//                 },
//                 {
//                     "timestamp": 85,
//                     "val": 21.20376526
//                 },
//                 {
//                     "timestamp": 86,
//                     "val": 21.23260439
//                 },
//                 {
//                     "timestamp": 87,
//                     "val": 21.25008738
//                 },
//                 {
//                     "timestamp": 88,
//                     "val": 21.24981183
//                 },
//                 {
//                     "timestamp": 89,
//                     "val": 21.19388622
//                 },
//                 {
//                     "timestamp": 90,
//                     "val": 21.27507992
//                 },
//                 {
//                     "timestamp": 91,
//                     "val": 21.1042365
//                 },
//                 {
//                     "timestamp": 92,
//                     "val": 21.14202146
//                 },
//                 {
//                     "timestamp": 93,
//                     "val": 21.11510698
//                 },
//                 {
//                     "timestamp": 94,
//                     "val": 21.09936826
//                 },
//                 {
//                     "timestamp": 95,
//                     "val": 21.19701664
//                 },
//                 {
//                     "timestamp": 96,
//                     "val": 21.16252006
//                 },
//                 {
//                     "timestamp": 97,
//                     "val": 21.24926767
//                 },
//                 {
//                     "timestamp": 98,
//                     "val": 21.03334956
//                 },
//                 {
//                     "timestamp": 99,
//                     "val": 21.09298148
//                 },
//                 {
//                     "timestamp": 100,
//                     "val": 21.08131914
//                 },
//                 {
//                     "timestamp": 101,
//                     "val": 20.88183108
//                 },
//                 {
//                     "timestamp": 102,
//                     "val": 21.02971914
//                 },
//                 {
//                     "timestamp": 103,
//                     "val": 21.00579699
//                 },
//                 {
//                     "timestamp": 104,
//                     "val": 21.07759587
//                 },
//                 {
//                     "timestamp": 105,
//                     "val": 20.88140961
//                 },
//                 {
//                     "timestamp": 106,
//                     "val": 21.07552227
//                 },
//                 {
//                     "timestamp": 107,
//                     "val": 21.1165007
//                 },
//                 {
//                     "timestamp": 108,
//                     "val": 21.09826153
//                 },
//                 {
//                     "timestamp": 109,
//                     "val": 20.99724638
//                 },
//                 {
//                     "timestamp": 110,
//                     "val": 21.10316635
//                 },
//                 {
//                     "timestamp": 111,
//                     "val": 21.03316352
//                 },
//                 {
//                     "timestamp": 112,
//                     "val": 21.27864755
//                 },
//                 {
//                     "timestamp": 113,
//                     "val": 20.90096448
//                 },
//                 {
//                     "timestamp": 114,
//                     "val": 20.78347056
//                 },
//                 {
//                     "timestamp": 115,
//                     "val": 20.93157751
//                 },
//                 {
//                     "timestamp": 116,
//                     "val": 20.90639671
//                 },
//                 {
//                     "timestamp": 117,
//                     "val": 20.80594738
//                 },
//                 {
//                     "timestamp": 118,
//                     "val": 21.05181702
//                 },
//                 {
//                     "timestamp": 119,
//                     "val": 20.92530238
//                 },
//                 {
//                     "timestamp": 120,
//                     "val": 20.97087883
//                 },
//                 {
//                     "timestamp": 121,
//                     "val": 20.8515808
//                 },
//                 {
//                     "timestamp": 122,
//                     "val": 20.94700846
//                 },
//                 {
//                     "timestamp": 123,
//                     "val": 20.88220524
//                 },
//                 {
//                     "timestamp": 124,
//                     "val": 20.85799589
//                 },
//                 {
//                     "timestamp": 125,
//                     "val": 20.95463593
//                 },
//                 {
//                     "timestamp": 126,
//                     "val": 20.7245602
//                 },
//                 {
//                     "timestamp": 127,
//                     "val": 20.96244507
//                 },
//                 {
//                     "timestamp": 128,
//                     "val": 20.88500193
//                 },
//                 {
//                     "timestamp": 129,
//                     "val": 20.83363999
//                 },
//                 {
//                     "timestamp": 130,
//                     "val": 20.92446596
//                 },
//                 {
//                     "timestamp": 131,
//                     "val": 20.8741134
//                 },
//                 {
//                     "timestamp": 132,
//                     "val": 20.88896059
//                 },
//                 {
//                     "timestamp": 133,
//                     "val": 20.72485959
//                 },
//                 {
//                     "timestamp": 134,
//                     "val": 20.89202769
//                 },
//                 {
//                     "timestamp": 135,
//                     "val": 20.87409162
//                 },
//                 {
//                     "timestamp": 136,
//                     "val": 20.91042587
//                 },
//                 {
//                     "timestamp": 137,
//                     "val": 20.96211108
//                 },
//                 {
//                     "timestamp": 138,
//                     "val": 20.71817296
//                 },
//                 {
//                     "timestamp": 139,
//                     "val": 20.83950422
//                 },
//                 {
//                     "timestamp": 140,
//                     "val": 20.87507304
//                 },
//                 {
//                     "timestamp": 141,
//                     "val": 20.77843353
//                 },
//                 {
//                     "timestamp": 142,
//                     "val": 20.63962881
//                 },
//                 {
//                     "timestamp": 143,
//                     "val": 20.94795155
//                 },
//                 {
//                     "timestamp": 144,
//                     "val": 20.85847173
//                 },
//                 {
//                     "timestamp": 145,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 146,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 147,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 148,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 149,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 150,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 151,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 152,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 153,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 154,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 155,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 156,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 157,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 158,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 159,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 160,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 161,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 162,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 163,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 164,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 165,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 166,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 167,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 168,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 169,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 170,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 171,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 172,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 173,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 174,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 175,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 176,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 177,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 178,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 179,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 180,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 181,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 182,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 183,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 184,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 185,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 186,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 187,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 188,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 189,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 190,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 191,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 192,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 193,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 194,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 195,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 196,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 197,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 198,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 199,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 200,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 201,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 202,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 203,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 204,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 205,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 206,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 207,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 208,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 209,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 210,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 211,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 212,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 213,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 214,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 215,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 216,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 217,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 218,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 219,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 220,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 221,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 222,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 223,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 224,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 225,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 226,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 227,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 228,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 229,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 230,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 231,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 232,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 233,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 234,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 235,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 236,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 237,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 238,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 239,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 240,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 241,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 242,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 243,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 244,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 245,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 246,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 247,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 248,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 249,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 250,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 251,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 252,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 253,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 254,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 255,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 256,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 257,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 258,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 259,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 260,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 261,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 262,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 263,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 264,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 265,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 266,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 267,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 268,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 269,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 270,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 271,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 272,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 273,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 274,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 275,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 276,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 277,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 278,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 279,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 280,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 281,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 282,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 283,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 284,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 285,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 286,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 287,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 288,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 289,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 290,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 291,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 292,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 293,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 294,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 295,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 296,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 297,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 298,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 299,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 300,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 301,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 302,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 303,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 304,
//                     "val": 21.9
//                 },
//                 {
//                     "timestamp": 305,
//                     "val": 21.9
//                 },
//                 {
//                     "timestamp": 306,
//                     "val": 21.9
//                 },
//                 {
//                     "timestamp": 307,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 308,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 309,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 310,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 311,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 312,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 313,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 314,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 315,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 316,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 317,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 318,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 319,
//                     "val": 22.3
//                 },
//                 {
//                     "timestamp": 320,
//                     "val": 22.4
//                 },
//                 {
//                     "timestamp": 321,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 322,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 323,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 324,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 325,
//                     "val": 22.6
//                 },
//                 {
//                     "timestamp": 326,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 327,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 328,
//                     "val": 22.6
//                 },
//                 {
//                     "timestamp": 329,
//                     "val": 22.6
//                 },
//                 {
//                     "timestamp": 330,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 331,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 332,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 333,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 334,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 335,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 336,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 337,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 338,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 339,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 340,
//                     "val": 22.9
//                 },
//                 {
//                     "timestamp": 341,
//                     "val": 22.9
//                 },
//                 {
//                     "timestamp": 342,
//                     "val": 23.0
//                 },
//                 {
//                     "timestamp": 343,
//                     "val": 23.0
//                 },
//                 {
//                     "timestamp": 344,
//                     "val": 23.0
//                 },
//                 {
//                     "timestamp": 345,
//                     "val": 23.1
//                 },
//                 {
//                     "timestamp": 346,
//                     "val": 23.1
//                 },
//                 {
//                     "timestamp": 347,
//                     "val": 23.1
//                 },
//                 {
//                     "timestamp": 348,
//                     "val": 23.1
//                 },
//                 {
//                     "timestamp": 349,
//                     "val": 23.1
//                 },
//                 {
//                     "timestamp": 350,
//                     "val": 23.2
//                 },
//                 {
//                     "timestamp": 351,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 352,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 353,
//                     "val": 23.4
//                 },
//                 {
//                     "timestamp": 354,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 355,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 356,
//                     "val": 23.5
//                 },
//                 {
//                     "timestamp": 357,
//                     "val": 23.5
//                 },
//                 {
//                     "timestamp": 358,
//                     "val": 23.5
//                 },
//                 {
//                     "timestamp": 359,
//                     "val": 23.5
//                 },
//                 {
//                     "timestamp": 360,
//                     "val": 23.6
//                 },
//                 {
//                     "timestamp": 361,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 362,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 363,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 364,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 365,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 366,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 367,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 368,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 369,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 370,
//                     "val": 23.9
//                 },
//                 {
//                     "timestamp": 371,
//                     "val": 23.9
//                 },
//                 {
//                     "timestamp": 372,
//                     "val": 23.9
//                 },
//                 {
//                     "timestamp": 373,
//                     "val": 23.9
//                 },
//                 {
//                     "timestamp": 374,
//                     "val": 23.9
//                 },
//                 {
//                     "timestamp": 375,
//                     "val": 24.0
//                 },
//                 {
//                     "timestamp": 376,
//                     "val": 24.0
//                 },
//                 {
//                     "timestamp": 377,
//                     "val": 24.0
//                 },
//                 {
//                     "timestamp": 378,
//                     "val": 24.0
//                 },
//                 {
//                     "timestamp": 379,
//                     "val": 24.0
//                 },
//                 {
//                     "timestamp": 380,
//                     "val": 24.1
//                 },
//                 {
//                     "timestamp": 381,
//                     "val": 24.1
//                 },
//                 {
//                     "timestamp": 382,
//                     "val": 24.2
//                 },
//                 {
//                     "timestamp": 383,
//                     "val": 24.2
//                 },
//                 {
//                     "timestamp": 384,
//                     "val": 24.1
//                 },
//                 {
//                     "timestamp": 385,
//                     "val": 24.2
//                 },
//                 {
//                     "timestamp": 386,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 387,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 388,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 389,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 390,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 391,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 392,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 393,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 394,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 395,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 396,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 397,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 398,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 399,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 400,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 401,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 402,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 403,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 404,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 405,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 406,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 407,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 408,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 409,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 410,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 411,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 412,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 413,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 414,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 415,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 416,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 417,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 418,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 419,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 420,
//                     "val": 24.2
//                 },
//                 {
//                     "timestamp": 421,
//                     "val": 24.2
//                 },
//                 {
//                     "timestamp": 422,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 423,
//                     "val": 24.2
//                 },
//                 {
//                     "timestamp": 424,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 425,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 426,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 427,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 428,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 429,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 430,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 431,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 432,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 433,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 434,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 435,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 436,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 437,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 438,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 439,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 440,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 441,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 442,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 443,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 444,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 445,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 446,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 447,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 448,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 449,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 450,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 451,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 452,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 453,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 454,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 455,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 456,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 457,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 458,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 459,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 460,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 461,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 462,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 463,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 464,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 465,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 466,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 467,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 468,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 469,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 470,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 471,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 472,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 473,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 474,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 475,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 476,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 477,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 478,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 479,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 480,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 481,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 482,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 483,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 484,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 485,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 486,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 487,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 488,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 489,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 490,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 491,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 492,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 493,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 494,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 495,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 496,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 497,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 498,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 499,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 500,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 501,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 502,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 503,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 504,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 505,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 506,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 507,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 508,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 509,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 510,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 511,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 512,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 513,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 514,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 515,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 516,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 517,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 518,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 519,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 520,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 521,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 522,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 523,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 524,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 525,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 526,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 527,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 528,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 529,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 530,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 531,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 532,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 533,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 534,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 535,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 536,
//                     "val": 25.0
//                 },
//                 {
//                     "timestamp": 537,
//                     "val": 25.0
//                 },
//                 {
//                     "timestamp": 538,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 539,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 540,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 541,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 542,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 543,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 544,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 545,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 546,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 547,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 548,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 549,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 550,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 551,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 552,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 553,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 554,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 555,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 556,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 557,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 558,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 559,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 560,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 561,
//                     "val": 25.0
//                 },
//                 {
//                     "timestamp": 562,
//                     "val": 25.0
//                 },
//                 {
//                     "timestamp": 563,
//                     "val": 25.0
//                 },
//                 {
//                     "timestamp": 564,
//                     "val": 25.0
//                 },
//                 {
//                     "timestamp": 565,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 566,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 567,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 568,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 569,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 570,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 571,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 572,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 573,
//                     "val": 24.2
//                 },
//                 {
//                     "timestamp": 574,
//                     "val": 24.1
//                 },
//                 {
//                     "timestamp": 575,
//                     "val": 24.0
//                 },
//                 {
//                     "timestamp": 576,
//                     "val": 24.0
//                 },
//                 {
//                     "timestamp": 577,
//                     "val": 24.0
//                 },
//                 {
//                     "timestamp": 578,
//                     "val": 24.0
//                 },
//                 {
//                     "timestamp": 579,
//                     "val": 24.0
//                 },
//                 {
//                     "timestamp": 580,
//                     "val": 23.9
//                 },
//                 {
//                     "timestamp": 581,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 582,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 583,
//                     "val": 23.9
//                 },
//                 {
//                     "timestamp": 584,
//                     "val": 23.9
//                 },
//                 {
//                     "timestamp": 585,
//                     "val": 23.9
//                 },
//                 {
//                     "timestamp": 586,
//                     "val": 23.9
//                 },
//                 {
//                     "timestamp": 587,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 588,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 589,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 590,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 591,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 592,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 593,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 594,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 595,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 596,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 597,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 598,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 599,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 600,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 601,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 602,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 603,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 604,
//                     "val": 23.6
//                 },
//                 {
//                     "timestamp": 605,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 606,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 607,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 608,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 609,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 610,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 611,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 612,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 613,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 614,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 615,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 616,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 617,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 618,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 619,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 620,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 621,
//                     "val": 23.6
//                 },
//                 {
//                     "timestamp": 622,
//                     "val": 23.6
//                 },
//                 {
//                     "timestamp": 623,
//                     "val": 23.6
//                 },
//                 {
//                     "timestamp": 624,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 625,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 626,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 627,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 628,
//                     "val": 23.6
//                 },
//                 {
//                     "timestamp": 629,
//                     "val": 23.6
//                 },
//                 {
//                     "timestamp": 630,
//                     "val": 23.6
//                 },
//                 {
//                     "timestamp": 631,
//                     "val": 23.6
//                 },
//                 {
//                     "timestamp": 632,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 633,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 634,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 635,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 636,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 637,
//                     "val": 23.6
//                 },
//                 {
//                     "timestamp": 638,
//                     "val": 23.5
//                 },
//                 {
//                     "timestamp": 639,
//                     "val": 23.5
//                 },
//                 {
//                     "timestamp": 640,
//                     "val": 23.5
//                 },
//                 {
//                     "timestamp": 641,
//                     "val": 23.4
//                 },
//                 {
//                     "timestamp": 642,
//                     "val": 23.4
//                 },
//                 {
//                     "timestamp": 643,
//                     "val": 23.4
//                 },
//                 {
//                     "timestamp": 644,
//                     "val": 23.4
//                 },
//                 {
//                     "timestamp": 645,
//                     "val": 23.4
//                 },
//                 {
//                     "timestamp": 646,
//                     "val": 23.5
//                 },
//                 {
//                     "timestamp": 647,
//                     "val": 23.5
//                 },
//                 {
//                     "timestamp": 648,
//                     "val": 23.4
//                 },
//                 {
//                     "timestamp": 649,
//                     "val": 23.4
//                 },
//                 {
//                     "timestamp": 650,
//                     "val": 23.4
//                 },
//                 {
//                     "timestamp": 651,
//                     "val": 23.4
//                 },
//                 {
//                     "timestamp": 652,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 653,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 654,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 655,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 656,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 657,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 658,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 659,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 660,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 661,
//                     "val": 23.2
//                 },
//                 {
//                     "timestamp": 662,
//                     "val": 23.2
//                 },
//                 {
//                     "timestamp": 663,
//                     "val": 23.2
//                 },
//                 {
//                     "timestamp": 664,
//                     "val": 23.2
//                 },
//                 {
//                     "timestamp": 665,
//                     "val": 23.2
//                 },
//                 {
//                     "timestamp": 666,
//                     "val": 23.2
//                 },
//                 {
//                     "timestamp": 667,
//                     "val": 23.2
//                 },
//                 {
//                     "timestamp": 668,
//                     "val": 23.2
//                 },
//                 {
//                     "timestamp": 669,
//                     "val": 23.1
//                 },
//                 {
//                     "timestamp": 670,
//                     "val": 23.1
//                 },
//                 {
//                     "timestamp": 671,
//                     "val": 23.1
//                 },
//                 {
//                     "timestamp": 672,
//                     "val": 23.1
//                 },
//                 {
//                     "timestamp": 673,
//                     "val": 23.0
//                 },
//                 {
//                     "timestamp": 674,
//                     "val": 23.0
//                 },
//                 {
//                     "timestamp": 675,
//                     "val": 23.0
//                 },
//                 {
//                     "timestamp": 676,
//                     "val": 23.0
//                 },
//                 {
//                     "timestamp": 677,
//                     "val": 23.0
//                 },
//                 {
//                     "timestamp": 678,
//                     "val": 22.9
//                 },
//                 {
//                     "timestamp": 679,
//                     "val": 22.9
//                 },
//                 {
//                     "timestamp": 680,
//                     "val": 22.9
//                 },
//                 {
//                     "timestamp": 681,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 682,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 683,
//                     "val": 22.9
//                 },
//                 {
//                     "timestamp": 684,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 685,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 686,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 687,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 688,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 689,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 690,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 691,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 692,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 693,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 694,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 695,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 696,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 697,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 698,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 699,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 700,
//                     "val": 22.6
//                 },
//                 {
//                     "timestamp": 701,
//                     "val": 22.6
//                 },
//                 {
//                     "timestamp": 702,
//                     "val": 22.6
//                 },
//                 {
//                     "timestamp": 703,
//                     "val": 22.6
//                 },
//                 {
//                     "timestamp": 704,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 705,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 706,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 707,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 708,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 709,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 710,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 711,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 712,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 713,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 714,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 715,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 716,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 717,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 718,
//                     "val": 22.4
//                 },
//                 {
//                     "timestamp": 719,
//                     "val": 22.4
//                 },
//                 {
//                     "timestamp": 720,
//                     "val": 22.4
//                 },
//                 {
//                     "timestamp": 721,
//                     "val": 22.4
//                 },
//                 {
//                     "timestamp": 722,
//                     "val": 22.3
//                 },
//                 {
//                     "timestamp": 723,
//                     "val": 22.3
//                 },
//                 {
//                     "timestamp": 724,
//                     "val": 22.3
//                 },
//                 {
//                     "timestamp": 725,
//                     "val": 22.3
//                 },
//                 {
//                     "timestamp": 726,
//                     "val": 22.3
//                 },
//                 {
//                     "timestamp": 727,
//                     "val": 22.3
//                 },
//                 {
//                     "timestamp": 728,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 729,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 730,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 731,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 732,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 733,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 734,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 735,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 736,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 737,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 738,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 739,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 740,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 741,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 742,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 743,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 744,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 745,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 746,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 747,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 748,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 749,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 750,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 751,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 752,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 753,
//                     "val": 21.9
//                 },
//                 {
//                     "timestamp": 754,
//                     "val": 21.9
//                 },
//                 {
//                     "timestamp": 755,
//                     "val": 21.9
//                 },
//                 {
//                     "timestamp": 756,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 757,
//                     "val": 21.9
//                 },
//                 {
//                     "timestamp": 758,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 759,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 760,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 761,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 762,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 763,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 764,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 765,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 766,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 767,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 768,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 769,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 770,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 771,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 772,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 773,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 774,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 775,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 776,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 777,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 778,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 779,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 780,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 781,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 782,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 783,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 784,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 785,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 786,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 787,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 788,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 789,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 790,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 791,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 792,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 793,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 794,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 795,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 796,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 797,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 798,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 799,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 800,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 801,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 802,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 803,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 804,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 805,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 806,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 807,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 808,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 809,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 810,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 811,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 812,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 813,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 814,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 815,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 816,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 817,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 818,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 819,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 820,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 821,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 822,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 823,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 824,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 825,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 826,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 827,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 828,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 829,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 830,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 831,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 832,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 833,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 834,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 835,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 836,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 837,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 838,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 839,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 840,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 841,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 842,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 843,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 844,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 845,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 846,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 847,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 848,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 849,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 850,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 851,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 852,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 853,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 854,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 855,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 856,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 857,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 858,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 859,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 860,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 861,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 862,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 863,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 864,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 865,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 866,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 867,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 868,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 869,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 870,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 871,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 872,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 873,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 874,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 875,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 876,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 877,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 878,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 879,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 880,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 881,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 882,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 883,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 884,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 885,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 886,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 887,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 888,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 889,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 890,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 891,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 892,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 893,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 894,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 895,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 896,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 897,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 898,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 899,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 900,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 901,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 902,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 903,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 904,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 905,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 906,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 907,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 908,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 909,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 910,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 911,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 912,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 913,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 914,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 915,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 916,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 917,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 918,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 919,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 920,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 921,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 922,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 923,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 924,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 925,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 926,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 927,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 928,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 929,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 930,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 931,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 932,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 933,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 934,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 935,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 936,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 937,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 938,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 939,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 940,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 941,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 942,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 943,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 944,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 945,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 946,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 947,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 948,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 949,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 950,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 951,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 952,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 953,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 954,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 955,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 956,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 957,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 958,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 959,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 960,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 961,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 962,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 963,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 964,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 965,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 966,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 967,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 968,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 969,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 970,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 971,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 972,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 973,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 974,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 975,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 976,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 977,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 978,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 979,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 980,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 981,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 982,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 983,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 984,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 985,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 986,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 987,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 988,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 989,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 990,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 991,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 992,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 993,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 994,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 995,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 996,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 997,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 998,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 999,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1000,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1001,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1002,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1003,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1004,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1005,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1006,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1007,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1008,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1009,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1010,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1011,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1012,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1013,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1014,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1015,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1016,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1017,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1018,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1019,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1020,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1021,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1022,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1023,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1024,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1025,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1026,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1027,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1028,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1029,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1030,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1031,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1032,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1033,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1034,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1035,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1036,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1037,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1038,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1039,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1040,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1041,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1042,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1043,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1044,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1045,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1046,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1047,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1048,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1049,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1050,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1051,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1052,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1053,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1054,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1055,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1056,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1057,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1058,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1059,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1060,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1061,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1062,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1063,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1064,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1065,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1066,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1067,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1068,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1069,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1070,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1071,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1072,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1073,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1074,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1075,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1076,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1077,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1078,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1079,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1080,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1081,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1082,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1083,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1084,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1085,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1086,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1087,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1088,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1089,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1090,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1091,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1092,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1093,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1094,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1095,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1096,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1097,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1098,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1099,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1100,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1101,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1102,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1103,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1104,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1105,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1106,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1107,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1108,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1109,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1110,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1111,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1112,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1113,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1114,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1115,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1116,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1117,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1118,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1119,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1120,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1121,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1122,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1123,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1124,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1125,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1126,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1127,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1128,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1129,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1130,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1131,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1132,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1133,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1134,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1135,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1136,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1137,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1138,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1139,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1140,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1141,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1142,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1143,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1144,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1145,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1146,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1147,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1148,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1149,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1150,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1151,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1152,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1153,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1154,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1155,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1156,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1157,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1158,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1159,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1160,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1161,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1162,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1163,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1164,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1165,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1166,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1167,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1168,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1169,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1170,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1171,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1172,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1173,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1174,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1175,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1176,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1177,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1178,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1179,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1180,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1181,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1182,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1183,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1184,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1185,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1186,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1187,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1188,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1189,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1190,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1191,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1192,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1193,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1194,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1195,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1196,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1197,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1198,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1199,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1200,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1201,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1202,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1203,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1204,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1205,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1206,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1207,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1208,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1209,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1210,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1211,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1212,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1213,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1214,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1215,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1216,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1217,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1218,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1219,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1220,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1221,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1222,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1223,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1224,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1225,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1226,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1227,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1228,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1229,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1230,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1231,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1232,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1233,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1234,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1235,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1236,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1237,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1238,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1239,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1240,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1241,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1242,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1243,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1244,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1245,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1246,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1247,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1248,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1249,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1250,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1251,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1252,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1253,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1254,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1255,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1256,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1257,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1258,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1259,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1260,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1261,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1262,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1263,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1264,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1265,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1266,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1267,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1268,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1269,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1270,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1271,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1272,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1273,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1274,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1275,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1276,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1277,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1278,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1279,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1280,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1281,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1282,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1283,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1284,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1285,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1286,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1287,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1288,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1289,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1290,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1291,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1292,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1293,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1294,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1295,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1296,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1297,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1298,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1299,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1300,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1301,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1302,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1303,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1304,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1305,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1306,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1307,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1308,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1309,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1310,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1311,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1312,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1313,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1314,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1315,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1316,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1317,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1318,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1319,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1320,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1321,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1322,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1323,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1324,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1325,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1326,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1327,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1328,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1329,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1330,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1331,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1332,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1333,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1334,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1335,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1336,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1337,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1338,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1339,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1340,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1341,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1342,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1343,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1344,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1345,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1346,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1347,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1348,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1349,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1350,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1351,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1352,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1353,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1354,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1355,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1356,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1357,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1358,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1359,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1360,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1361,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1362,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1363,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1364,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1365,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1366,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1367,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1368,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1369,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1370,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1371,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1372,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1373,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1374,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1375,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1376,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1377,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1378,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1379,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1380,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1381,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1382,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1383,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1384,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1385,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1386,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1387,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1388,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1389,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1390,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1391,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1392,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1393,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1394,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1395,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1396,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1397,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1398,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1399,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1400,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1401,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1402,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1403,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1404,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1405,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1406,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1407,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1408,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1409,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1410,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1411,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1412,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1413,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1414,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1415,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1416,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1417,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1418,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1419,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1420,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1421,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1422,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1423,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1424,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1425,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1426,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1427,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1428,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1429,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1430,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1431,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1432,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1433,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1434,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1435,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1436,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1437,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1438,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1439,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1440,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1441,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1442,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1443,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1444,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1445,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1446,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1447,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1448,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1449,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1450,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1451,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1452,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1453,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1454,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1455,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1456,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1457,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1458,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1459,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1460,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1461,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1462,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1463,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1464,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1465,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1466,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1467,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1468,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1469,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1470,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1471,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1472,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1473,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1474,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1475,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1476,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1477,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1478,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1479,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1480,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1481,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1482,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1483,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1484,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1485,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1486,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1487,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1488,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1489,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1490,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1491,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1492,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1493,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1494,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1495,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1496,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1497,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1498,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1499,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1500,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1501,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1502,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1503,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1504,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1505,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1506,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1507,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1508,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1509,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1510,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1511,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1512,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1513,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1514,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1515,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1516,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1517,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1518,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1519,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1520,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1521,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1522,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1523,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1524,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1525,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1526,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1527,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1528,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1529,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1530,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1531,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1532,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1533,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1534,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1535,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1536,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1537,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1538,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1539,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1540,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1541,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1542,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1543,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1544,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1545,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1546,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1547,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1548,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1549,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1550,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1551,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1552,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1553,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1554,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1555,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1556,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1557,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1558,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1559,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1560,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1561,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1562,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1563,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1564,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1565,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1566,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1567,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1568,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1569,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1570,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1571,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1572,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1573,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1574,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1575,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1576,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1577,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1578,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1579,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1580,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1581,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1582,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1583,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1584,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1585,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1586,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1587,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1588,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1589,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1590,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1591,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1592,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1593,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1594,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1595,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1596,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1597,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1598,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1599,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1600,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1601,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1602,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1603,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1604,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1605,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1606,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1607,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1608,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1609,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1610,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1611,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1612,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1613,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1614,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1615,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1616,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1617,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1618,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1619,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1620,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1621,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1622,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1623,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1624,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1625,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1626,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1627,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1628,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1629,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1630,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1631,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1632,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1633,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1634,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1635,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1636,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1637,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1638,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1639,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1640,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1641,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1642,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1643,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1644,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1645,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1646,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1647,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1648,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1649,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1650,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1651,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1652,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1653,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1654,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1655,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1656,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1657,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1658,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 1659,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 1660,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 1661,
//                     "val": 20.62137136
//                 },
//                 {
//                     "timestamp": 1662,
//                     "val": 20.55976152
//                 },
//                 {
//                     "timestamp": 1663,
//                     "val": 20.73708934
//                 },
//                 {
//                     "timestamp": 1664,
//                     "val": 20.64347712
//                 },
//                 {
//                     "timestamp": 1665,
//                     "val": 20.76581059
//                 },
//                 {
//                     "timestamp": 1666,
//                     "val": 20.63461586
//                 },
//                 {
//                     "timestamp": 1667,
//                     "val": 20.79462987
//                 },
//                 {
//                     "timestamp": 1668,
//                     "val": 20.81722047
//                 },
//                 {
//                     "timestamp": 1669,
//                     "val": 20.72378031
//                 },
//                 {
//                     "timestamp": 1670,
//                     "val": 20.79772224
//                 },
//                 {
//                     "timestamp": 1671,
//                     "val": 20.86887629
//                 },
//                 {
//                     "timestamp": 1672,
//                     "val": 20.85210049
//                 },
//                 {
//                     "timestamp": 1673,
//                     "val": 20.52280223
//                 },
//                 {
//                     "timestamp": 1674,
//                     "val": 20.6086234
//                 },
//                 {
//                     "timestamp": 1675,
//                     "val": 20.85481915
//                 },
//                 {
//                     "timestamp": 1676,
//                     "val": 20.76789962
//                 },
//                 {
//                     "timestamp": 1677,
//                     "val": 20.57985242
//                 },
//                 {
//                     "timestamp": 1678,
//                     "val": 20.85623527
//                 },
//                 {
//                     "timestamp": 1679,
//                     "val": 20.78777883
//                 },
//                 {
//                     "timestamp": 1680,
//                     "val": 20.75767956
//                 },
//                 {
//                     "timestamp": 1681,
//                     "val": 20.63154699
//                 },
//                 {
//                     "timestamp": 1682,
//                     "val": 20.84976721
//                 },
//                 {
//                     "timestamp": 1683,
//                     "val": 20.66793073
//                 },
//                 {
//                     "timestamp": 1684,
//                     "val": 20.71647425
//                 },
//                 {
//                     "timestamp": 1685,
//                     "val": 20.62595849
//                 },
//                 {
//                     "timestamp": 1686,
//                     "val": 20.55949493
//                 },
//                 {
//                     "timestamp": 1687,
//                     "val": 20.70481599
//                 },
//                 {
//                     "timestamp": 1688,
//                     "val": 20.59341064
//                 },
//                 {
//                     "timestamp": 1689,
//                     "val": 20.67898235
//                 },
//                 {
//                     "timestamp": 1690,
//                     "val": 20.5007127
//                 },
//                 {
//                     "timestamp": 1691,
//                     "val": 20.70628865
//                 },
//                 {
//                     "timestamp": 1692,
//                     "val": 20.70529555
//                 },
//                 {
//                     "timestamp": 1693,
//                     "val": 20.63485149
//                 },
//                 {
//                     "timestamp": 1694,
//                     "val": 20.75393247
//                 },
//                 {
//                     "timestamp": 1695,
//                     "val": 20.68086005
//                 },
//                 {
//                     "timestamp": 1696,
//                     "val": 20.73650955
//                 },
//                 {
//                     "timestamp": 1697,
//                     "val": 20.49303974
//                 },
//                 {
//                     "timestamp": 1698,
//                     "val": 20.55513928
//                 },
//                 {
//                     "timestamp": 1699,
//                     "val": 20.56383709
//                 },
//                 {
//                     "timestamp": 1700,
//                     "val": 20.62603446
//                 },
//                 {
//                     "timestamp": 1701,
//                     "val": 20.63522925
//                 },
//                 {
//                     "timestamp": 1702,
//                     "val": 20.76244633
//                 },
//                 {
//                     "timestamp": 1703,
//                     "val": 20.46694309
//                 },
//                 {
//                     "timestamp": 1704,
//                     "val": 20.67890215
//                 },
//                 {
//                     "timestamp": 1705,
//                     "val": 20.59284689
//                 },
//                 {
//                     "timestamp": 1706,
//                     "val": 20.51938867
//                 },
//                 {
//                     "timestamp": 1707,
//                     "val": 20.6164276
//                 },
//                 {
//                     "timestamp": 1708,
//                     "val": 20.5009987
//                 },
//                 {
//                     "timestamp": 1709,
//                     "val": 20.58917511
//                 },
//                 {
//                     "timestamp": 1710,
//                     "val": 20.58063046
//                 },
//                 {
//                     "timestamp": 1711,
//                     "val": 20.59089219
//                 },
//                 {
//                     "timestamp": 1712,
//                     "val": 20.33162036
//                 },
//                 {
//                     "timestamp": 1713,
//                     "val": 20.48635516
//                 },
//                 {
//                     "timestamp": 1714,
//                     "val": 20.55061822
//                 },
//                 {
//                     "timestamp": 1715,
//                     "val": 20.40238365
//                 },
//                 {
//                     "timestamp": 1716,
//                     "val": 20.59380835
//                 },
//                 {
//                     "timestamp": 1717,
//                     "val": 20.43939786
//                 },
//                 {
//                     "timestamp": 1718,
//                     "val": 20.40999027
//                 },
//                 {
//                     "timestamp": 1719,
//                     "val": 20.3287509
//                 },
//                 {
//                     "timestamp": 1720,
//                     "val": 20.36804807
//                 },
//                 {
//                     "timestamp": 1721,
//                     "val": 20.35761365
//                 },
//                 {
//                     "timestamp": 1722,
//                     "val": 20.56002309
//                 },
//                 {
//                     "timestamp": 1723,
//                     "val": 20.44363947
//                 },
//                 {
//                     "timestamp": 1724,
//                     "val": 20.41622741
//                 },
//                 {
//                     "timestamp": 1725,
//                     "val": 20.47783219
//                 },
//                 {
//                     "timestamp": 1726,
//                     "val": 20.38997476
//                 },
//                 {
//                     "timestamp": 1727,
//                     "val": 20.46864382
//                 },
//                 {
//                     "timestamp": 1728,
//                     "val": 20.46909206
//                 },
//                 {
//                     "timestamp": 1729,
//                     "val": 20.51614033
//                 },
//                 {
//                     "timestamp": 1730,
//                     "val": 20.65675084
//                 },
//                 {
//                     "timestamp": 1731,
//                     "val": 20.59093833
//                 },
//                 {
//                     "timestamp": 1732,
//                     "val": 20.4763495
//                 },
//                 {
//                     "timestamp": 1733,
//                     "val": 20.62059445
//                 },
//                 {
//                     "timestamp": 1734,
//                     "val": 20.64023201
//                 },
//                 {
//                     "timestamp": 1735,
//                     "val": 20.37361496
//                 },
//                 {
//                     "timestamp": 1736,
//                     "val": 20.3767339
//                 },
//                 {
//                     "timestamp": 1737,
//                     "val": 20.44824336
//                 },
//                 {
//                     "timestamp": 1738,
//                     "val": 20.47805942
//                 },
//                 {
//                     "timestamp": 1739,
//                     "val": 20.46639243
//                 },
//                 {
//                     "timestamp": 1740,
//                     "val": 20.63267116
//                 },
//                 {
//                     "timestamp": 1741,
//                     "val": 20.38183445
//                 },
//                 {
//                     "timestamp": 1742,
//                     "val": 20.48169953
//                 },
//                 {
//                     "timestamp": 1743,
//                     "val": 20.32923565
//                 },
//                 {
//                     "timestamp": 1744,
//                     "val": 20.34807614
//                 },
//                 {
//                     "timestamp": 1745,
//                     "val": 20.46197781
//                 },
//                 {
//                     "timestamp": 1746,
//                     "val": 20.53512058
//                 },
//                 {
//                     "timestamp": 1747,
//                     "val": 20.54857839
//                 },
//                 {
//                     "timestamp": 1748,
//                     "val": 20.48405007
//                 },
//                 {
//                     "timestamp": 1749,
//                     "val": 20.40434647
//                 },
//                 {
//                     "timestamp": 1750,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1751,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1752,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1753,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1754,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1755,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1756,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1757,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1758,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1759,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1760,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1761,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1762,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1763,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1764,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1765,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1766,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1767,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1768,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1769,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1770,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1771,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1772,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1773,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1774,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1775,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1776,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1777,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1778,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1779,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1780,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1781,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1782,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1783,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1784,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1785,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1786,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1787,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1788,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1789,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1790,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1791,
//                     "val": 17.4
//                 },
//                 {
//                     "timestamp": 1792,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1793,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1794,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1795,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1796,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1797,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1798,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1799,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1800,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1801,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1802,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1803,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1804,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1805,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1806,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1807,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1808,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1809,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1810,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1811,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1812,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1813,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1814,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1815,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1816,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1817,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1818,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1819,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1820,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1821,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1822,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1823,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1824,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1825,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1826,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1827,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1828,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1829,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1830,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1831,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1832,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1833,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1834,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1835,
//                     "val": 20.55631319
//                 },
//                 {
//                     "timestamp": 1836,
//                     "val": 20.35878481
//                 },
//                 {
//                     "timestamp": 1837,
//                     "val": 20.45901925
//                 },
//                 {
//                     "timestamp": 1838,
//                     "val": 20.49019488
//                 },
//                 {
//                     "timestamp": 1839,
//                     "val": 20.74980222
//                 },
//                 {
//                     "timestamp": 1840,
//                     "val": 20.67490143
//                 },
//                 {
//                     "timestamp": 1841,
//                     "val": 20.53505306
//                 },
//                 {
//                     "timestamp": 1842,
//                     "val": 20.64947058
//                 },
//                 {
//                     "timestamp": 1843,
//                     "val": 20.48929336
//                 },
//                 {
//                     "timestamp": 1844,
//                     "val": 20.58420224
//                 },
//                 {
//                     "timestamp": 1845,
//                     "val": 20.67031883
//                 },
//                 {
//                     "timestamp": 1846,
//                     "val": 20.50957405
//                 },
//                 {
//                     "timestamp": 1847,
//                     "val": 20.79522749
//                 },
//                 {
//                     "timestamp": 1848,
//                     "val": 20.60941396
//                 },
//                 {
//                     "timestamp": 1849,
//                     "val": 20.60121547
//                 },
//                 {
//                     "timestamp": 1850,
//                     "val": 20.68359428
//                 },
//                 {
//                     "timestamp": 1851,
//                     "val": 20.73065678
//                 },
//                 {
//                     "timestamp": 1852,
//                     "val": 20.69378482
//                 },
//                 {
//                     "timestamp": 1853,
//                     "val": 20.60033473
//                 },
//                 {
//                     "timestamp": 1854,
//                     "val": 20.70243023
//                 },
//                 {
//                     "timestamp": 1855,
//                     "val": 20.77908159
//                 },
//                 {
//                     "timestamp": 1856,
//                     "val": 20.80456918
//                 },
//                 {
//                     "timestamp": 1857,
//                     "val": 20.78582803
//                 },
//                 {
//                     "timestamp": 1858,
//                     "val": 20.87854055
//                 },
//                 {
//                     "timestamp": 1859,
//                     "val": 20.94403132
//                 },
//                 {
//                     "timestamp": 1860,
//                     "val": 20.77144314
//                 },
//                 {
//                     "timestamp": 1861,
//                     "val": 20.90390094
//                 },
//                 {
//                     "timestamp": 1862,
//                     "val": 20.96632531
//                 },
//                 {
//                     "timestamp": 1863,
//                     "val": 20.81963801
//                 },
//                 {
//                     "timestamp": 1864,
//                     "val": 20.93371682
//                 },
//                 {
//                     "timestamp": 1865,
//                     "val": 20.93721659
//                 },
//                 {
//                     "timestamp": 1866,
//                     "val": 21.02737281
//                 },
//                 {
//                     "timestamp": 1867,
//                     "val": 20.79599211
//                 },
//                 {
//                     "timestamp": 1868,
//                     "val": 21.04747381
//                 },
//                 {
//                     "timestamp": 1869,
//                     "val": 20.93548881
//                 },
//                 {
//                     "timestamp": 1870,
//                     "val": 21.25795677
//                 },
//                 {
//                     "timestamp": 1871,
//                     "val": 21.20319087
//                 },
//                 {
//                     "timestamp": 1872,
//                     "val": 20.89150944
//                 },
//                 {
//                     "timestamp": 1873,
//                     "val": 21.24512492
//                 },
//                 {
//                     "timestamp": 1874,
//                     "val": 21.23418539
//                 },
//                 {
//                     "timestamp": 1875,
//                     "val": 21.28486392
//                 },
//                 {
//                     "timestamp": 1876,
//                     "val": 21.15352914
//                 },
//                 {
//                     "timestamp": 1877,
//                     "val": 21.41834819
//                 },
//                 {
//                     "timestamp": 1878,
//                     "val": 21.44908789
//                 },
//                 {
//                     "timestamp": 1879,
//                     "val": 21.30566867
//                 },
//                 {
//                     "timestamp": 1880,
//                     "val": 21.35869343
//                 },
//                 {
//                     "timestamp": 1881,
//                     "val": 21.7003558
//                 },
//                 {
//                     "timestamp": 1882,
//                     "val": 21.49696788
//                 },
//                 {
//                     "timestamp": 1883,
//                     "val": 21.79501886
//                 },
//                 {
//                     "timestamp": 1884,
//                     "val": 21.76615249
//                 },
//                 {
//                     "timestamp": 1885,
//                     "val": 21.70472985
//                 },
//                 {
//                     "timestamp": 1886,
//                     "val": 21.67138984
//                 },
//                 {
//                     "timestamp": 1887,
//                     "val": 21.84575347
//                 },
//                 {
//                     "timestamp": 1888,
//                     "val": 22.03649718
//                 },
//                 {
//                     "timestamp": 1889,
//                     "val": 22.09391276
//                 },
//                 {
//                     "timestamp": 1890,
//                     "val": 22.09852482
//                 },
//                 {
//                     "timestamp": 1891,
//                     "val": 22.21162105
//                 },
//                 {
//                     "timestamp": 1892,
//                     "val": 22.1863094
//                 },
//                 {
//                     "timestamp": 1893,
//                     "val": 22.1508463
//                 },
//                 {
//                     "timestamp": 1894,
//                     "val": 22.21266023
//                 },
//                 {
//                     "timestamp": 1895,
//                     "val": 22.39059294
//                 },
//                 {
//                     "timestamp": 1896,
//                     "val": 22.20745057
//                 },
//                 {
//                     "timestamp": 1897,
//                     "val": 22.21154378
//                 },
//                 {
//                     "timestamp": 1898,
//                     "val": 22.46486783
//                 },
//                 {
//                     "timestamp": 1899,
//                     "val": 22.56337908
//                 },
//                 {
//                     "timestamp": 1900,
//                     "val": 22.52895526
//                 },
//                 {
//                     "timestamp": 1901,
//                     "val": 22.57328418
//                 },
//                 {
//                     "timestamp": 1902,
//                     "val": 22.52324065
//                 },
//                 {
//                     "timestamp": 1903,
//                     "val": 22.61337105
//                 },
//                 {
//                     "timestamp": 1904,
//                     "val": 22.49821465
//                 },
//                 {
//                     "timestamp": 1905,
//                     "val": 22.82073632
//                 },
//                 {
//                     "timestamp": 1906,
//                     "val": 22.50607719
//                 },
//                 {
//                     "timestamp": 1907,
//                     "val": 22.73451354
//                 },
//                 {
//                     "timestamp": 1908,
//                     "val": 22.83053822
//                 },
//                 {
//                     "timestamp": 1909,
//                     "val": 22.89318897
//                 },
//                 {
//                     "timestamp": 1910,
//                     "val": 22.83876152
//                 },
//                 {
//                     "timestamp": 1911,
//                     "val": 22.97186188
//                 },
//                 {
//                     "timestamp": 1912,
//                     "val": 22.96931394
//                 },
//                 {
//                     "timestamp": 1913,
//                     "val": 22.96227439
//                 },
//                 {
//                     "timestamp": 1914,
//                     "val": 23.06937236
//                 },
//                 {
//                     "timestamp": 1915,
//                     "val": 22.74581471
//                 },
//                 {
//                     "timestamp": 1916,
//                     "val": 23.06035839
//                 },
//                 {
//                     "timestamp": 1917,
//                     "val": 23.0032341
//                 },
//                 {
//                     "timestamp": 1918,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1919,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1920,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1921,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1922,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1923,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1924,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1925,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1926,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1927,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1928,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1929,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 1930,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 1931,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 1932,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 1933,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 1934,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1935,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1936,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1937,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1938,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1939,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1940,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1941,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1942,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1943,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1944,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1945,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1946,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1947,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1948,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1949,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1950,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1951,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1952,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1953,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1954,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 1955,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 1956,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 1957,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 1958,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 1959,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 1960,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1961,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1962,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1963,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1964,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1965,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1966,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1967,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1968,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1969,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1970,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1971,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1972,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1973,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1974,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1975,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1976,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1977,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1978,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1979,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1980,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1981,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1982,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1983,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1984,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1985,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1986,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1987,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1988,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1989,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1990,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1991,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1992,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1993,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1994,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1995,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1996,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1997,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1998,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1999,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 2000,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 2001,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 2002,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 2003,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2004,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2005,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2006,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2007,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2008,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2009,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2010,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2011,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 2012,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 2013,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2014,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2015,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2016,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2017,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2018,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2019,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2020,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2021,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2022,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2023,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2024,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2025,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2026,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2027,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2028,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2029,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2030,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2031,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2032,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2033,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2034,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2035,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2036,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2037,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2038,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2039,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2040,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2041,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2042,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2043,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2044,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2045,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2046,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2047,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2048,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2049,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2050,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2051,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2052,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2053,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2054,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2055,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2056,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2057,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2058,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2059,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2060,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2061,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2062,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2063,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2064,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2065,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2066,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2067,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2068,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2069,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2070,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2071,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2072,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2073,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2074,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2075,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2076,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2077,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2078,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2079,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2080,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2081,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2082,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2083,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2084,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2085,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2086,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2087,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2088,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2089,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2090,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2091,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2092,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2093,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2094,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2095,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2096,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2097,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2098,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2099,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2100,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2101,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2102,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2103,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2104,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2105,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2106,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2107,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2108,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2109,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2110,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2111,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2112,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2113,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2114,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2115,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2116,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2117,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2118,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2119,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2120,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2121,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2122,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2123,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2124,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2125,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2126,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2127,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2128,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2129,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2130,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2131,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2132,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2133,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2134,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2135,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2136,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2137,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2138,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2139,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2140,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2141,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2142,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2143,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2144,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2145,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2146,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2147,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2148,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2149,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2150,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2151,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2152,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2153,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2154,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2155,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2156,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2157,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2158,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2159,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2160,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2161,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2162,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2163,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2164,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2165,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2166,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2167,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2168,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2169,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2170,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2171,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2172,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2173,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2174,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2175,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2176,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2177,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2178,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2179,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2180,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2181,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2182,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2183,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2184,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2185,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2186,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2187,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2188,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2189,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2190,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2191,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2192,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2193,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2194,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2195,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2196,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2197,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2198,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2199,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2200,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2201,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2202,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2203,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2204,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2205,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2206,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2207,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2208,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2209,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2210,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2211,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2212,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2213,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2214,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2215,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2216,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2217,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2218,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2219,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2220,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2221,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2222,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2223,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2224,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2225,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2226,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2227,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2228,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2229,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2230,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2231,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2232,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2233,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2234,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2235,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2236,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2237,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2238,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2239,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2240,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2241,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2242,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2243,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2244,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2245,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2246,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2247,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2248,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2249,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2250,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2251,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2252,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2253,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2254,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2255,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2256,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2257,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2258,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2259,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2260,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2261,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2262,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2263,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2264,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2265,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2266,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2267,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2268,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2269,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2270,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2271,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2272,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2273,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2274,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2275,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2276,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2277,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2278,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2279,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2280,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2281,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2282,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2283,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2284,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2285,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2286,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2287,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2288,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2289,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2290,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2291,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2292,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2293,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2294,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2295,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2296,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2297,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2298,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2299,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2300,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2301,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2302,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2303,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2304,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2305,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2306,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2307,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2308,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2309,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2310,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2311,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2312,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2313,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2314,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2315,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2316,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2317,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2318,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2319,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2320,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2321,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2322,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2323,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2324,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2325,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2326,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2327,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2328,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2329,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2330,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2331,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2332,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2333,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2334,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2335,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2336,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2337,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2338,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2339,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2340,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2341,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2342,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2343,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2344,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2345,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2346,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2347,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 2348,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2349,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 2350,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2351,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2352,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2353,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2354,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2355,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2356,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2357,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2358,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2359,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2360,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2361,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2362,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2363,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2364,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2365,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2366,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2367,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2368,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 2369,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 2370,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 2371,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 2372,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 2373,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 2374,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 2375,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 2376,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 2377,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 2378,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 2379,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 2380,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2381,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 2382,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2383,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2384,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2385,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2386,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2387,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2388,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2389,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2390,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2391,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2392,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2393,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2394,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2395,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2396,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2397,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2398,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2399,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2400,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2401,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2402,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2403,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2404,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2405,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2406,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2407,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2408,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2409,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2410,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 2411,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 2412,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 2413,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 2414,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 2415,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 2416,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 2417,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 2418,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2419,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2420,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2421,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2422,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2423,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2424,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2425,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2426,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2427,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2428,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2429,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2430,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2431,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2432,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2433,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2434,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2435,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2436,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2437,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2438,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2439,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2440,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2441,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2442,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2443,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2444,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2445,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2446,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2447,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 2448,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 2449,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 2450,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 2451,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 2452,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 2453,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 2454,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 2455,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 2456,
//                     "val": 19.9
//                 }
//             ],
//             "length": 2456
//         },
//         "timeSeries1": {
//             "timeseries": [
//                 {
//                     "timestamp": 1,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 2,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 3,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 4,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 5,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 6,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 7,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 8,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 9,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 10,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 11,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 12,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 13,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 14,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 15,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 16,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 17,
//                     "val": 19.737273907655634
//                 },
//                 {
//                     "timestamp": 18,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 19,
//                     "val": 19.17878235618873
//                 },
//                 {
//                     "timestamp": 20,
//                     "val": 19.050560592595648
//                 },
//                 {
//                     "timestamp": 21,
//                     "val": 19.236813540966352
//                 },
//                 {
//                     "timestamp": 22,
//                     "val": 19.20301342494101
//                 },
//                 {
//                     "timestamp": 23,
//                     "val": 19.16534701466475
//                 },
//                 {
//                     "timestamp": 24,
//                     "val": 19.179338092972888
//                 },
//                 {
//                     "timestamp": 25,
//                     "val": 19.362539570756304
//                 },
//                 {
//                     "timestamp": 26,
//                     "val": 19.1724116688097
//                 },
//                 {
//                     "timestamp": 27,
//                     "val": 19.343429088617253
//                 },
//                 {
//                     "timestamp": 28,
//                     "val": 19.224924575369798
//                 },
//                 {
//                     "timestamp": 29,
//                     "val": 19.48411203089744
//                 },
//                 {
//                     "timestamp": 30,
//                     "val": 19.372600898774095
//                 },
//                 {
//                     "timestamp": 31,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 32,
//                     "val": 18.916866862264875
//                 },
//                 {
//                     "timestamp": 33,
//                     "val": 18.853341931337226
//                 },
//                 {
//                     "timestamp": 34,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 35,
//                     "val": 18.816766236880802
//                 },
//                 {
//                     "timestamp": 36,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 37,
//                     "val": 18.981781095280944
//                 },
//                 {
//                     "timestamp": 38,
//                     "val": 18.917866544265937
//                 },
//                 {
//                     "timestamp": 39,
//                     "val": 19.011377552537258
//                 },
//                 {
//                     "timestamp": 40,
//                     "val": 18.97509727121741
//                 },
//                 {
//                     "timestamp": 41,
//                     "val": 19.114930673880583
//                 },
//                 {
//                     "timestamp": 42,
//                     "val": 19.080870173800164
//                 },
//                 {
//                     "timestamp": 43,
//                     "val": 19.08225893859727
//                 },
//                 {
//                     "timestamp": 44,
//                     "val": 19.06504986549941
//                 },
//                 {
//                     "timestamp": 45,
//                     "val": 19.094687143783776
//                 },
//                 {
//                     "timestamp": 46,
//                     "val": 19.094290819775523
//                 },
//                 {
//                     "timestamp": 47,
//                     "val": 19.081899806643527
//                 },
//                 {
//                     "timestamp": 48,
//                     "val": 19.22723162680854
//                 },
//                 {
//                     "timestamp": 49,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 50,
//                     "val": 18.597726755908262
//                 },
//                 {
//                     "timestamp": 51,
//                     "val": 18.625346527529828
//                 },
//                 {
//                     "timestamp": 52,
//                     "val": 18.943165711395054
//                 },
//                 {
//                     "timestamp": 53,
//                     "val": 18.763487670079368
//                 },
//                 {
//                     "timestamp": 54,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 55,
//                     "val": 18.482926868887617
//                 },
//                 {
//                     "timestamp": 56,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 57,
//                     "val": 18.731131827679977
//                 },
//                 {
//                     "timestamp": 58,
//                     "val": 18.86321496794647
//                 },
//                 {
//                     "timestamp": 59,
//                     "val": 19.108885427463566
//                 },
//                 {
//                     "timestamp": 60,
//                     "val": 18.718885037160838
//                 },
//                 {
//                     "timestamp": 61,
//                     "val": 19.077361199508708
//                 },
//                 {
//                     "timestamp": 62,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 63,
//                     "val": 18.590920944886953
//                 },
//                 {
//                     "timestamp": 64,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 65,
//                     "val": 18.293744182374855
//                 },
//                 {
//                     "timestamp": 66,
//                     "val": 18.3612791748711
//                 },
//                 {
//                     "timestamp": 67,
//                     "val": 18.397787839259696
//                 },
//                 {
//                     "timestamp": 68,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 69,
//                     "val": 18.419907905117658
//                 },
//                 {
//                     "timestamp": 70,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 71,
//                     "val": 18.52183932116208
//                 },
//                 {
//                     "timestamp": 72,
//                     "val": 18.339550987621973
//                 },
//                 {
//                     "timestamp": 73,
//                     "val": 18.240670068738545
//                 },
//                 {
//                     "timestamp": 74,
//                     "val": 18.32249374539043
//                 },
//                 {
//                     "timestamp": 75,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 76,
//                     "val": 18.478318969264922
//                 },
//                 {
//                     "timestamp": 77,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 78,
//                     "val": 18.487011995510336
//                 },
//                 {
//                     "timestamp": 79,
//                     "val": 18.533383760672585
//                 },
//                 {
//                     "timestamp": 80,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 81,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 82,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 83,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 84,
//                     "val": 18.216954290619277
//                 },
//                 {
//                     "timestamp": 85,
//                     "val": 18.24527870510053
//                 },
//                 {
//                     "timestamp": 86,
//                     "val": 18.328859342907414
//                 },
//                 {
//                     "timestamp": 87,
//                     "val": 18.346697939177062
//                 },
//                 {
//                     "timestamp": 88,
//                     "val": 18.46551170631339
//                 },
//                 {
//                     "timestamp": 89,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 90,
//                     "val": 18.364326515543286
//                 },
//                 {
//                     "timestamp": 91,
//                     "val": 18.241847879719174
//                 },
//                 {
//                     "timestamp": 92,
//                     "val": 18.283669563480778
//                 },
//                 {
//                     "timestamp": 93,
//                     "val": 18.30205292333364
//                 },
//                 {
//                     "timestamp": 94,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 95,
//                     "val": 18.32644233383007
//                 },
//                 {
//                     "timestamp": 96,
//                     "val": 18.29308041112411
//                 },
//                 {
//                     "timestamp": 97,
//                     "val": 18.428283977247755
//                 },
//                 {
//                     "timestamp": 98,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 99,
//                     "val": 18.23201528197031
//                 },
//                 {
//                     "timestamp": 100,
//                     "val": 18.30957663898973
//                 },
//                 {
//                     "timestamp": 101,
//                     "val": 18.115345679855842
//                 },
//                 {
//                     "timestamp": 102,
//                     "val": 18.34030155462081
//                 },
//                 {
//                     "timestamp": 103,
//                     "val": 18.338338738346824
//                 },
//                 {
//                     "timestamp": 104,
//                     "val": 18.43441109668924
//                 },
//                 {
//                     "timestamp": 105,
//                     "val": 18.250904794655444
//                 },
//                 {
//                     "timestamp": 106,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 107,
//                     "val": 18.217418259861187
//                 },
//                 {
//                     "timestamp": 108,
//                     "val": 18.246166729078034
//                 },
//                 {
//                     "timestamp": 109,
//                     "val": 18.19714827241728
//                 },
//                 {
//                     "timestamp": 110,
//                     "val": 18.35813335826675
//                 },
//                 {
//                     "timestamp": 111,
//                     "val": 18.29115690173025
//                 },
//                 {
//                     "timestamp": 112,
//                     "val": 18.596621376795788
//                 },
//                 {
//                     "timestamp": 113,
//                     "val": 18.30544937348474
//                 },
//                 {
//                     "timestamp": 114,
//                     "val": 18.222937115813707
//                 },
//                 {
//                     "timestamp": 115,
//                     "val": 18.39058579250633
//                 },
//                 {
//                     "timestamp": 116,
//                     "val": 18.375584689761087
//                 },
//                 {
//                     "timestamp": 117,
//                     "val": 18.351579130816578
//                 },
//                 {
//                     "timestamp": 118,
//                     "val": 18.579950571885576
//                 },
//                 {
//                     "timestamp": 119,
//                     "val": 18.562981145078652
//                 },
//                 {
//                     "timestamp": 120,
//                     "val": 18.57742697210488
//                 },
//                 {
//                     "timestamp": 121,
//                     "val": 18.56695264971176
//                 },
//                 {
//                     "timestamp": 122,
//                     "val": 18.633725154306582
//                 },
//                 {
//                     "timestamp": 123,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 124,
//                     "val": 18.178171349925456
//                 },
//                 {
//                     "timestamp": 125,
//                     "val": 18.220080872429737
//                 },
//                 {
//                     "timestamp": 126,
//                     "val": 18.0724543913946
//                 },
//                 {
//                     "timestamp": 127,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 128,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 129,
//                     "val": 17.86733642161387
//                 },
//                 {
//                     "timestamp": 130,
//                     "val": 18.070782126719845
//                 },
//                 {
//                     "timestamp": 131,
//                     "val": 18.076394176976216
//                 },
//                 {
//                     "timestamp": 132,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 133,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 134,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 135,
//                     "val": 17.896798722790663
//                 },
//                 {
//                     "timestamp": 136,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 137,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 138,
//                     "val": 17.60872272677027
//                 },
//                 {
//                     "timestamp": 139,
//                     "val": 17.745126113136724
//                 },
//                 {
//                     "timestamp": 140,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 141,
//                     "val": 17.727536485592513
//                 },
//                 {
//                     "timestamp": 142,
//                     "val": 17.6115423692209
//                 },
//                 {
//                     "timestamp": 143,
//                     "val": 18.035464212725746
//                 },
//                 {
//                     "timestamp": 144,
//                     "val": 17.981218332394477
//                 },
//                 {
//                     "timestamp": 145,
//                     "val": 15.03481925708682
//                 },
//                 {
//                     "timestamp": 146,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 147,
//                     "val": 16.851266170039906
//                 },
//                 {
//                     "timestamp": 148,
//                     "val": 17.04540380853522
//                 },
//                 {
//                     "timestamp": 149,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 150,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 151,
//                     "val": 17.593319360032087
//                 },
//                 {
//                     "timestamp": 152,
//                     "val": 17.59759701335534
//                 },
//                 {
//                     "timestamp": 153,
//                     "val": 17.573211915592353
//                 },
//                 {
//                     "timestamp": 154,
//                     "val": 17.56735035902009
//                 },
//                 {
//                     "timestamp": 155,
//                     "val": 17.5758629294194
//                 },
//                 {
//                     "timestamp": 156,
//                     "val": 17.573598363315405
//                 },
//                 {
//                     "timestamp": 157,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 158,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 159,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 160,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 161,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 162,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 163,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 164,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 165,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 166,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 167,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 168,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 169,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 170,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 171,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 172,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 173,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 174,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 175,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 176,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 177,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 178,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 179,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 180,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 181,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 182,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 183,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 184,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 185,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 186,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 187,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 188,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 189,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 190,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 191,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 192,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 193,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 194,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 195,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 196,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 197,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 198,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 199,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 200,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 201,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 202,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 203,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 204,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 205,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 206,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 207,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 208,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 209,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 210,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 211,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 212,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 213,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 214,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 215,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 216,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 217,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 218,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 219,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 220,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 221,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 222,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 223,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 224,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 225,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 226,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 227,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 228,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 229,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 230,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 231,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 232,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 233,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 234,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 235,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 236,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 237,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 238,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 239,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 240,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 241,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 242,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 243,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 244,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 245,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 246,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 247,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 248,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 249,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 250,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 251,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 252,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 253,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 254,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 255,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 256,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 257,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 258,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 259,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 260,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 261,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 262,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 263,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 264,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 265,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 266,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 267,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 268,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 269,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 270,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 271,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 272,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 273,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 274,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 275,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 276,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 277,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 278,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 279,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 280,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 281,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 282,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 283,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 284,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 285,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 286,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 287,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 288,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 289,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 290,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 291,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 292,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 293,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 294,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 295,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 296,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 297,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 298,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 299,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 300,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 301,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 302,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 303,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 304,
//                     "val": 21.9
//                 },
//                 {
//                     "timestamp": 305,
//                     "val": 21.9
//                 },
//                 {
//                     "timestamp": 306,
//                     "val": 21.9
//                 },
//                 {
//                     "timestamp": 307,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 308,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 309,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 310,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 311,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 312,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 313,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 314,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 315,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 316,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 317,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 318,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 319,
//                     "val": 22.3
//                 },
//                 {
//                     "timestamp": 320,
//                     "val": 22.4
//                 },
//                 {
//                     "timestamp": 321,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 322,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 323,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 324,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 325,
//                     "val": 22.6
//                 },
//                 {
//                     "timestamp": 326,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 327,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 328,
//                     "val": 22.6
//                 },
//                 {
//                     "timestamp": 329,
//                     "val": 22.6
//                 },
//                 {
//                     "timestamp": 330,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 331,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 332,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 333,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 334,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 335,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 336,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 337,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 338,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 339,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 340,
//                     "val": 22.9
//                 },
//                 {
//                     "timestamp": 341,
//                     "val": 22.9
//                 },
//                 {
//                     "timestamp": 342,
//                     "val": 23.0
//                 },
//                 {
//                     "timestamp": 343,
//                     "val": 23.0
//                 },
//                 {
//                     "timestamp": 344,
//                     "val": 23.0
//                 },
//                 {
//                     "timestamp": 345,
//                     "val": 23.1
//                 },
//                 {
//                     "timestamp": 346,
//                     "val": 23.1
//                 },
//                 {
//                     "timestamp": 347,
//                     "val": 23.1
//                 },
//                 {
//                     "timestamp": 348,
//                     "val": 23.1
//                 },
//                 {
//                     "timestamp": 349,
//                     "val": 23.1
//                 },
//                 {
//                     "timestamp": 350,
//                     "val": 23.2
//                 },
//                 {
//                     "timestamp": 351,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 352,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 353,
//                     "val": 23.4
//                 },
//                 {
//                     "timestamp": 354,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 355,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 356,
//                     "val": 23.5
//                 },
//                 {
//                     "timestamp": 357,
//                     "val": 23.5
//                 },
//                 {
//                     "timestamp": 358,
//                     "val": 23.5
//                 },
//                 {
//                     "timestamp": 359,
//                     "val": 23.5
//                 },
//                 {
//                     "timestamp": 360,
//                     "val": 23.6
//                 },
//                 {
//                     "timestamp": 361,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 362,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 363,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 364,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 365,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 366,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 367,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 368,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 369,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 370,
//                     "val": 23.9
//                 },
//                 {
//                     "timestamp": 371,
//                     "val": 23.9
//                 },
//                 {
//                     "timestamp": 372,
//                     "val": 23.9
//                 },
//                 {
//                     "timestamp": 373,
//                     "val": 23.9
//                 },
//                 {
//                     "timestamp": 374,
//                     "val": 23.9
//                 },
//                 {
//                     "timestamp": 375,
//                     "val": 24.0
//                 },
//                 {
//                     "timestamp": 376,
//                     "val": 24.0
//                 },
//                 {
//                     "timestamp": 377,
//                     "val": 24.0
//                 },
//                 {
//                     "timestamp": 378,
//                     "val": 24.0
//                 },
//                 {
//                     "timestamp": 379,
//                     "val": 24.0
//                 },
//                 {
//                     "timestamp": 380,
//                     "val": 24.1
//                 },
//                 {
//                     "timestamp": 381,
//                     "val": 24.1
//                 },
//                 {
//                     "timestamp": 382,
//                     "val": 24.2
//                 },
//                 {
//                     "timestamp": 383,
//                     "val": 24.2
//                 },
//                 {
//                     "timestamp": 384,
//                     "val": 24.1
//                 },
//                 {
//                     "timestamp": 385,
//                     "val": 24.2
//                 },
//                 {
//                     "timestamp": 386,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 387,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 388,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 389,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 390,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 391,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 392,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 393,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 394,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 395,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 396,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 397,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 398,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 399,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 400,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 401,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 402,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 403,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 404,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 405,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 406,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 407,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 408,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 409,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 410,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 411,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 412,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 413,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 414,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 415,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 416,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 417,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 418,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 419,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 420,
//                     "val": 24.2
//                 },
//                 {
//                     "timestamp": 421,
//                     "val": 24.2
//                 },
//                 {
//                     "timestamp": 422,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 423,
//                     "val": 24.2
//                 },
//                 {
//                     "timestamp": 424,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 425,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 426,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 427,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 428,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 429,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 430,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 431,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 432,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 433,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 434,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 435,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 436,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 437,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 438,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 439,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 440,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 441,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 442,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 443,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 444,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 445,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 446,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 447,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 448,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 449,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 450,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 451,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 452,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 453,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 454,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 455,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 456,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 457,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 458,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 459,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 460,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 461,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 462,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 463,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 464,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 465,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 466,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 467,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 468,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 469,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 470,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 471,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 472,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 473,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 474,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 475,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 476,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 477,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 478,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 479,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 480,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 481,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 482,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 483,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 484,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 485,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 486,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 487,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 488,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 489,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 490,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 491,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 492,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 493,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 494,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 495,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 496,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 497,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 498,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 499,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 500,
//                     "val": 24.6
//                 },
//                 {
//                     "timestamp": 501,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 502,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 503,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 504,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 505,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 506,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 507,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 508,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 509,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 510,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 511,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 512,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 513,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 514,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 515,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 516,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 517,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 518,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 519,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 520,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 521,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 522,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 523,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 524,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 525,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 526,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 527,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 528,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 529,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 530,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 531,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 532,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 533,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 534,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 535,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 536,
//                     "val": 25.0
//                 },
//                 {
//                     "timestamp": 537,
//                     "val": 25.0
//                 },
//                 {
//                     "timestamp": 538,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 539,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 540,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 541,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 542,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 543,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 544,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 545,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 546,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 547,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 548,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 549,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 550,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 551,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 552,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 553,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 554,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 555,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 556,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 557,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 558,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 559,
//                     "val": 24.8
//                 },
//                 {
//                     "timestamp": 560,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 561,
//                     "val": 25.0
//                 },
//                 {
//                     "timestamp": 562,
//                     "val": 25.0
//                 },
//                 {
//                     "timestamp": 563,
//                     "val": 25.0
//                 },
//                 {
//                     "timestamp": 564,
//                     "val": 25.0
//                 },
//                 {
//                     "timestamp": 565,
//                     "val": 24.9
//                 },
//                 {
//                     "timestamp": 566,
//                     "val": 24.7
//                 },
//                 {
//                     "timestamp": 567,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 568,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 569,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 570,
//                     "val": 24.5
//                 },
//                 {
//                     "timestamp": 571,
//                     "val": 24.4
//                 },
//                 {
//                     "timestamp": 572,
//                     "val": 24.3
//                 },
//                 {
//                     "timestamp": 573,
//                     "val": 24.2
//                 },
//                 {
//                     "timestamp": 574,
//                     "val": 24.1
//                 },
//                 {
//                     "timestamp": 575,
//                     "val": 24.0
//                 },
//                 {
//                     "timestamp": 576,
//                     "val": 24.0
//                 },
//                 {
//                     "timestamp": 577,
//                     "val": 24.0
//                 },
//                 {
//                     "timestamp": 578,
//                     "val": 24.0
//                 },
//                 {
//                     "timestamp": 579,
//                     "val": 24.0
//                 },
//                 {
//                     "timestamp": 580,
//                     "val": 23.9
//                 },
//                 {
//                     "timestamp": 581,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 582,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 583,
//                     "val": 23.9
//                 },
//                 {
//                     "timestamp": 584,
//                     "val": 23.9
//                 },
//                 {
//                     "timestamp": 585,
//                     "val": 23.9
//                 },
//                 {
//                     "timestamp": 586,
//                     "val": 23.9
//                 },
//                 {
//                     "timestamp": 587,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 588,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 589,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 590,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 591,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 592,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 593,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 594,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 595,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 596,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 597,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 598,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 599,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 600,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 601,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 602,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 603,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 604,
//                     "val": 23.6
//                 },
//                 {
//                     "timestamp": 605,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 606,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 607,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 608,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 609,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 610,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 611,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 612,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 613,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 614,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 615,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 616,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 617,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 618,
//                     "val": 23.8
//                 },
//                 {
//                     "timestamp": 619,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 620,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 621,
//                     "val": 23.6
//                 },
//                 {
//                     "timestamp": 622,
//                     "val": 23.6
//                 },
//                 {
//                     "timestamp": 623,
//                     "val": 23.6
//                 },
//                 {
//                     "timestamp": 624,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 625,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 626,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 627,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 628,
//                     "val": 23.6
//                 },
//                 {
//                     "timestamp": 629,
//                     "val": 23.6
//                 },
//                 {
//                     "timestamp": 630,
//                     "val": 23.6
//                 },
//                 {
//                     "timestamp": 631,
//                     "val": 23.6
//                 },
//                 {
//                     "timestamp": 632,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 633,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 634,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 635,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 636,
//                     "val": 23.7
//                 },
//                 {
//                     "timestamp": 637,
//                     "val": 23.6
//                 },
//                 {
//                     "timestamp": 638,
//                     "val": 23.5
//                 },
//                 {
//                     "timestamp": 639,
//                     "val": 23.5
//                 },
//                 {
//                     "timestamp": 640,
//                     "val": 23.5
//                 },
//                 {
//                     "timestamp": 641,
//                     "val": 23.4
//                 },
//                 {
//                     "timestamp": 642,
//                     "val": 23.4
//                 },
//                 {
//                     "timestamp": 643,
//                     "val": 23.4
//                 },
//                 {
//                     "timestamp": 644,
//                     "val": 23.4
//                 },
//                 {
//                     "timestamp": 645,
//                     "val": 23.4
//                 },
//                 {
//                     "timestamp": 646,
//                     "val": 23.5
//                 },
//                 {
//                     "timestamp": 647,
//                     "val": 23.5
//                 },
//                 {
//                     "timestamp": 648,
//                     "val": 23.4
//                 },
//                 {
//                     "timestamp": 649,
//                     "val": 23.4
//                 },
//                 {
//                     "timestamp": 650,
//                     "val": 23.4
//                 },
//                 {
//                     "timestamp": 651,
//                     "val": 23.4
//                 },
//                 {
//                     "timestamp": 652,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 653,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 654,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 655,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 656,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 657,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 658,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 659,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 660,
//                     "val": 23.3
//                 },
//                 {
//                     "timestamp": 661,
//                     "val": 23.2
//                 },
//                 {
//                     "timestamp": 662,
//                     "val": 23.2
//                 },
//                 {
//                     "timestamp": 663,
//                     "val": 23.2
//                 },
//                 {
//                     "timestamp": 664,
//                     "val": 23.2
//                 },
//                 {
//                     "timestamp": 665,
//                     "val": 23.2
//                 },
//                 {
//                     "timestamp": 666,
//                     "val": 23.2
//                 },
//                 {
//                     "timestamp": 667,
//                     "val": 23.2
//                 },
//                 {
//                     "timestamp": 668,
//                     "val": 23.2
//                 },
//                 {
//                     "timestamp": 669,
//                     "val": 23.1
//                 },
//                 {
//                     "timestamp": 670,
//                     "val": 23.1
//                 },
//                 {
//                     "timestamp": 671,
//                     "val": 23.1
//                 },
//                 {
//                     "timestamp": 672,
//                     "val": 23.1
//                 },
//                 {
//                     "timestamp": 673,
//                     "val": 23.0
//                 },
//                 {
//                     "timestamp": 674,
//                     "val": 23.0
//                 },
//                 {
//                     "timestamp": 675,
//                     "val": 23.0
//                 },
//                 {
//                     "timestamp": 676,
//                     "val": 23.0
//                 },
//                 {
//                     "timestamp": 677,
//                     "val": 23.0
//                 },
//                 {
//                     "timestamp": 678,
//                     "val": 22.9
//                 },
//                 {
//                     "timestamp": 679,
//                     "val": 22.9
//                 },
//                 {
//                     "timestamp": 680,
//                     "val": 22.9
//                 },
//                 {
//                     "timestamp": 681,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 682,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 683,
//                     "val": 22.9
//                 },
//                 {
//                     "timestamp": 684,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 685,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 686,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 687,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 688,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 689,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 690,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 691,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 692,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 693,
//                     "val": 22.8
//                 },
//                 {
//                     "timestamp": 694,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 695,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 696,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 697,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 698,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 699,
//                     "val": 22.7
//                 },
//                 {
//                     "timestamp": 700,
//                     "val": 22.6
//                 },
//                 {
//                     "timestamp": 701,
//                     "val": 22.6
//                 },
//                 {
//                     "timestamp": 702,
//                     "val": 22.6
//                 },
//                 {
//                     "timestamp": 703,
//                     "val": 22.6
//                 },
//                 {
//                     "timestamp": 704,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 705,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 706,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 707,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 708,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 709,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 710,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 711,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 712,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 713,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 714,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 715,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 716,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 717,
//                     "val": 22.5
//                 },
//                 {
//                     "timestamp": 718,
//                     "val": 22.4
//                 },
//                 {
//                     "timestamp": 719,
//                     "val": 22.4
//                 },
//                 {
//                     "timestamp": 720,
//                     "val": 22.4
//                 },
//                 {
//                     "timestamp": 721,
//                     "val": 22.4
//                 },
//                 {
//                     "timestamp": 722,
//                     "val": 22.3
//                 },
//                 {
//                     "timestamp": 723,
//                     "val": 22.3
//                 },
//                 {
//                     "timestamp": 724,
//                     "val": 22.3
//                 },
//                 {
//                     "timestamp": 725,
//                     "val": 22.3
//                 },
//                 {
//                     "timestamp": 726,
//                     "val": 22.3
//                 },
//                 {
//                     "timestamp": 727,
//                     "val": 22.3
//                 },
//                 {
//                     "timestamp": 728,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 729,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 730,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 731,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 732,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 733,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 734,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 735,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 736,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 737,
//                     "val": 22.2
//                 },
//                 {
//                     "timestamp": 738,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 739,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 740,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 741,
//                     "val": 22.1
//                 },
//                 {
//                     "timestamp": 742,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 743,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 744,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 745,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 746,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 747,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 748,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 749,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 750,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 751,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 752,
//                     "val": 22.0
//                 },
//                 {
//                     "timestamp": 753,
//                     "val": 21.9
//                 },
//                 {
//                     "timestamp": 754,
//                     "val": 21.9
//                 },
//                 {
//                     "timestamp": 755,
//                     "val": 21.9
//                 },
//                 {
//                     "timestamp": 756,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 757,
//                     "val": 21.9
//                 },
//                 {
//                     "timestamp": 758,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 759,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 760,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 761,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 762,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 763,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 764,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 765,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 766,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 767,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 768,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 769,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 770,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 771,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 772,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 773,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 774,
//                     "val": 21.8
//                 },
//                 {
//                     "timestamp": 775,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 776,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 777,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 778,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 779,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 780,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 781,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 782,
//                     "val": 21.7
//                 },
//                 {
//                     "timestamp": 783,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 784,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 785,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 786,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 787,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 788,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 789,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 790,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 791,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 792,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 793,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 794,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 795,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 796,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 797,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 798,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 799,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 800,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 801,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 802,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 803,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 804,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 805,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 806,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 807,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 808,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 809,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 810,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 811,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 812,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 813,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 814,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 815,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 816,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 817,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 818,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 819,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 820,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 821,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 822,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 823,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 824,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 825,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 826,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 827,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 828,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 829,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 830,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 831,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 832,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 833,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 834,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 835,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 836,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 837,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 838,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 839,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 840,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 841,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 842,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 843,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 844,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 845,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 846,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 847,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 848,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 849,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 850,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 851,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 852,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 853,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 854,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 855,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 856,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 857,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 858,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 859,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 860,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 861,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 862,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 863,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 864,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 865,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 866,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 867,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 868,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 869,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 870,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 871,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 872,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 873,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 874,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 875,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 876,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 877,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 878,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 879,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 880,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 881,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 882,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 883,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 884,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 885,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 886,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 887,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 888,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 889,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 890,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 891,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 892,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 893,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 894,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 895,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 896,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 897,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 898,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 899,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 900,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 901,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 902,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 903,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 904,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 905,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 906,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 907,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 908,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 909,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 910,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 911,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 912,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 913,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 914,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 915,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 916,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 917,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 918,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 919,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 920,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 921,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 922,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 923,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 924,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 925,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 926,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 927,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 928,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 929,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 930,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 931,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 932,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 933,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 934,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 935,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 936,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 937,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 938,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 939,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 940,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 941,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 942,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 943,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 944,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 945,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 946,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 947,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 948,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 949,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 950,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 951,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 952,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 953,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 954,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 955,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 956,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 957,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 958,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 959,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 960,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 961,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 962,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 963,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 964,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 965,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 966,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 967,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 968,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 969,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 970,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 971,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 972,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 973,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 974,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 975,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 976,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 977,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 978,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 979,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 980,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 981,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 982,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 983,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 984,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 985,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 986,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 987,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 988,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 989,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 990,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 991,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 992,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 993,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 994,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 995,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 996,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 997,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 998,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 999,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1000,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1001,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1002,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1003,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1004,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1005,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1006,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1007,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1008,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1009,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1010,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1011,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1012,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1013,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1014,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1015,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1016,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1017,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1018,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1019,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1020,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1021,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1022,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1023,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1024,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1025,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1026,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1027,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1028,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1029,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1030,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1031,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1032,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1033,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1034,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1035,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1036,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1037,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1038,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1039,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1040,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1041,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1042,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1043,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1044,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1045,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1046,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1047,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1048,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1049,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1050,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1051,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1052,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1053,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1054,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1055,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1056,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1057,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1058,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1059,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1060,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1061,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1062,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1063,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1064,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1065,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1066,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1067,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1068,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1069,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1070,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1071,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1072,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1073,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1074,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1075,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1076,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1077,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1078,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1079,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1080,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1081,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1082,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1083,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1084,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1085,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1086,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1087,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1088,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1089,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1090,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1091,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1092,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1093,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1094,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1095,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1096,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1097,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1098,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1099,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1100,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1101,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1102,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1103,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1104,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1105,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1106,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1107,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1108,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1109,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1110,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1111,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1112,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1113,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1114,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1115,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1116,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1117,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1118,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1119,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1120,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1121,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1122,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1123,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1124,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1125,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1126,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1127,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1128,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1129,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1130,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1131,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1132,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1133,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1134,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1135,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1136,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1137,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1138,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1139,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1140,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1141,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1142,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1143,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1144,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1145,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1146,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1147,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1148,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1149,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1150,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1151,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1152,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1153,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1154,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1155,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1156,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1157,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1158,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1159,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1160,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1161,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1162,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1163,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1164,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1165,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1166,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1167,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1168,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1169,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1170,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1171,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1172,
//                     "val": 19.6
//                 },
//                 {
//                     "timestamp": 1173,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1174,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1175,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1176,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1177,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1178,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1179,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1180,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1181,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1182,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1183,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1184,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1185,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1186,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1187,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1188,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1189,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1190,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1191,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1192,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1193,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1194,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1195,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1196,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1197,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1198,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1199,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1200,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1201,
//                     "val": 19.5
//                 },
//                 {
//                     "timestamp": 1202,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1203,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1204,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1205,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1206,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1207,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1208,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1209,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1210,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1211,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1212,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1213,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1214,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1215,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1216,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1217,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1218,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1219,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1220,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1221,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1222,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1223,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1224,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1225,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1226,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1227,
//                     "val": 19.4
//                 },
//                 {
//                     "timestamp": 1228,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1229,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1230,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1231,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1232,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1233,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1234,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1235,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1236,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1237,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1238,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1239,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1240,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1241,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1242,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1243,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1244,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1245,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1246,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1247,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1248,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1249,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1250,
//                     "val": 19.3
//                 },
//                 {
//                     "timestamp": 1251,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1252,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1253,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1254,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1255,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1256,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1257,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1258,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1259,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1260,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1261,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1262,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1263,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1264,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1265,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1266,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1267,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1268,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1269,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1270,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1271,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1272,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1273,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1274,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1275,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1276,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1277,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1278,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1279,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1280,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1281,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1282,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1283,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1284,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1285,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1286,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1287,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1288,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1289,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1290,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1291,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1292,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1293,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1294,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1295,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1296,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1297,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1298,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1299,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1300,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1301,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1302,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1303,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1304,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1305,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1306,
//                     "val": 19.1
//                 },
//                 {
//                     "timestamp": 1307,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1308,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1309,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1310,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1311,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1312,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1313,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1314,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1315,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1316,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1317,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1318,
//                     "val": 19.0
//                 },
//                 {
//                     "timestamp": 1319,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1320,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1321,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1322,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1323,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1324,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1325,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1326,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1327,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1328,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1329,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1330,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1331,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1332,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1333,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1334,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1335,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1336,
//                     "val": 18.9
//                 },
//                 {
//                     "timestamp": 1337,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1338,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1339,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1340,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1341,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1342,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1343,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1344,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1345,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1346,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1347,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1348,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1349,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1350,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1351,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1352,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1353,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1354,
//                     "val": 18.8
//                 },
//                 {
//                     "timestamp": 1355,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1356,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1357,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1358,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1359,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1360,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1361,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1362,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1363,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1364,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1365,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1366,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1367,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1368,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1369,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1370,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1371,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1372,
//                     "val": 18.7
//                 },
//                 {
//                     "timestamp": 1373,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1374,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1375,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1376,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1377,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1378,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1379,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1380,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1381,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1382,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1383,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1384,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1385,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1386,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1387,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1388,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1389,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1390,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1391,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1392,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1393,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1394,
//                     "val": 18.6
//                 },
//                 {
//                     "timestamp": 1395,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1396,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1397,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1398,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1399,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1400,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1401,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1402,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1403,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1404,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1405,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1406,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1407,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1408,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1409,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1410,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1411,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1412,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1413,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1414,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1415,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1416,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1417,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1418,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1419,
//                     "val": 18.5
//                 },
//                 {
//                     "timestamp": 1420,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1421,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1422,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1423,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1424,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1425,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1426,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1427,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1428,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1429,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1430,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1431,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1432,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1433,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1434,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1435,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1436,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1437,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1438,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1439,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1440,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1441,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1442,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1443,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1444,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1445,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1446,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1447,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1448,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1449,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1450,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1451,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1452,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1453,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1454,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1455,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1456,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1457,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1458,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1459,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1460,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1461,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1462,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1463,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1464,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1465,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1466,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1467,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1468,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1469,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1470,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1471,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1472,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1473,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1474,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1475,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1476,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1477,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1478,
//                     "val": 18.3
//                 },
//                 {
//                     "timestamp": 1479,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1480,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1481,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1482,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1483,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1484,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1485,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1486,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1487,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1488,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1489,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1490,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1491,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1492,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1493,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1494,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1495,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1496,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1497,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1498,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1499,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1500,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1501,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1502,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1503,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1504,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1505,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1506,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1507,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1508,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1509,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1510,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1511,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1512,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1513,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1514,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1515,
//                     "val": 18.2
//                 },
//                 {
//                     "timestamp": 1516,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1517,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1518,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1519,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1520,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1521,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1522,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1523,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1524,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1525,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1526,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1527,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1528,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1529,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1530,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1531,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1532,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1533,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1534,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1535,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1536,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1537,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1538,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1539,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1540,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1541,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1542,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1543,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1544,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1545,
//                     "val": 18.1
//                 },
//                 {
//                     "timestamp": 1546,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1547,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1548,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1549,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1550,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1551,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1552,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1553,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1554,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1555,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1556,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1557,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1558,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1559,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1560,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1561,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1562,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1563,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1564,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1565,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1566,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1567,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1568,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1569,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1570,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1571,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1572,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1573,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1574,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1575,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1576,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1577,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1578,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1579,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1580,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1581,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1582,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1583,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1584,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1585,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1586,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1587,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1588,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1589,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1590,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1591,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1592,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1593,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1594,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1595,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1596,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1597,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1598,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1599,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1600,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1601,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1602,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1603,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1604,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1605,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1606,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1607,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1608,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1609,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1610,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1611,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1612,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1613,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1614,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1615,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1616,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1617,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1618,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1619,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1620,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1621,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1622,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1623,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1624,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1625,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1626,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1627,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1628,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1629,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1630,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1631,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1632,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1633,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1634,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1635,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1636,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1637,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1638,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1639,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1640,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1641,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1642,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1643,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1644,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1645,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1646,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1647,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1648,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1649,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1650,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1651,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1652,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1653,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1654,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1655,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1656,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1657,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1658,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 1659,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 1660,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 1661,
//                     "val": 20.62137136
//                 },
//                 {
//                     "timestamp": 1662,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 1663,
//                     "val": 18.880066060456112
//                 },
//                 {
//                     "timestamp": 1664,
//                     "val": 18.610150096059083
//                 },
//                 {
//                     "timestamp": 1665,
//                     "val": 18.82169779520511
//                 },
//                 {
//                     "timestamp": 1666,
//                     "val": 18.68770668465647
//                 },
//                 {
//                     "timestamp": 1667,
//                     "val": 18.954220756573854
//                 },
//                 {
//                     "timestamp": 1668,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 1669,
//                     "val": 18.100725759410487
//                 },
//                 {
//                     "timestamp": 1670,
//                     "val": 18.1550800810693
//                 },
//                 {
//                     "timestamp": 1671,
//                     "val": 18.28685557382488
//                 },
//                 {
//                     "timestamp": 1672,
//                     "val": 18.33525953196935
//                 },
//                 {
//                     "timestamp": 1673,
//                     "val": 18.00191770834353
//                 },
//                 {
//                     "timestamp": 1674,
//                     "val": 18.11120764395711
//                 },
//                 {
//                     "timestamp": 1675,
//                     "val": 18.437160421094134
//                 },
//                 {
//                     "timestamp": 1676,
//                     "val": 18.378954202294654
//                 },
//                 {
//                     "timestamp": 1677,
//                     "val": 18.205424301241422
//                 },
//                 {
//                     "timestamp": 1678,
//                     "val": 18.49859343537948
//                 },
//                 {
//                     "timestamp": 1679,
//                     "val": 18.44664901227288
//                 },
//                 {
//                     "timestamp": 1680,
//                     "val": 18.432870827096142
//                 },
//                 {
//                     "timestamp": 1681,
//                     "val": 18.322984182882752
//                 },
//                 {
//                     "timestamp": 1682,
//                     "val": 18.557327522101158
//                 },
//                 {
//                     "timestamp": 1683,
//                     "val": 18.391427530423545
//                 },
//                 {
//                     "timestamp": 1684,
//                     "val": 18.555251651357484
//                 },
//                 {
//                     "timestamp": 1685,
//                     "val": 18.439253210779707
//                 },
//                 {
//                     "timestamp": 1686,
//                     "val": 18.494176757097343
//                 },
//                 {
//                     "timestamp": 1687,
//                     "val": 18.612889472523257
//                 },
//                 {
//                     "timestamp": 1688,
//                     "val": 18.611584222353862
//                 },
//                 {
//                     "timestamp": 1689,
//                     "val": 18.71988441822705
//                 },
//                 {
//                     "timestamp": 1690,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 1691,
//                     "val": 18.21540664624908
//                 },
//                 {
//                     "timestamp": 1692,
//                     "val": 18.19834533878812
//                 },
//                 {
//                     "timestamp": 1693,
//                     "val": 18.135918326726802
//                 },
//                 {
//                     "timestamp": 1694,
//                     "val": 18.34799132815451
//                 },
//                 {
//                     "timestamp": 1695,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 1696,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 1697,
//                     "val": 17.428174807573676
//                 },
//                 {
//                     "timestamp": 1698,
//                     "val": 17.499654077235558
//                 },
//                 {
//                     "timestamp": 1699,
//                     "val": 17.53407469379433
//                 },
//                 {
//                     "timestamp": 1700,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 1701,
//                     "val": 17.637800191731607
//                 },
//                 {
//                     "timestamp": 1702,
//                     "val": 17.785861676263277
//                 },
//                 {
//                     "timestamp": 1703,
//                     "val": 17.610397725776362
//                 },
//                 {
//                     "timestamp": 1704,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 1705,
//                     "val": 17.63360807231907
//                 },
//                 {
//                     "timestamp": 1706,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 1707,
//                     "val": 17.78034131648714
//                 },
//                 {
//                     "timestamp": 1708,
//                     "val": 17.719618346441127
//                 },
//                 {
//                     "timestamp": 1709,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 1710,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 1711,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 1712,
//                     "val": 17.395097024941258
//                 },
//                 {
//                     "timestamp": 1713,
//                     "val": 17.565438651285362
//                 },
//                 {
//                     "timestamp": 1714,
//                     "val": 17.649399085211478
//                 },
//                 {
//                     "timestamp": 1715,
//                     "val": 17.527544462543272
//                 },
//                 {
//                     "timestamp": 1716,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1717,
//                     "val": 17.461708510574162
//                 },
//                 {
//                     "timestamp": 1718,
//                     "val": 17.50964117898136
//                 },
//                 {
//                     "timestamp": 1719,
//                     "val": 17.513466400016007
//                 },
//                 {
//                     "timestamp": 1720,
//                     "val": 17.552977118383602
//                 },
//                 {
//                     "timestamp": 1721,
//                     "val": 17.616481298068315
//                 },
//                 {
//                     "timestamp": 1722,
//                     "val": 17.81639790975641
//                 },
//                 {
//                     "timestamp": 1723,
//                     "val": 17.72218175782363
//                 },
//                 {
//                     "timestamp": 1724,
//                     "val": 17.7756000016906
//                 },
//                 {
//                     "timestamp": 1725,
//                     "val": 17.817380563109975
//                 },
//                 {
//                     "timestamp": 1726,
//                     "val": 17.753338114981883
//                 },
//                 {
//                     "timestamp": 1727,
//                     "val": 17.903751578181506
//                 },
//                 {
//                     "timestamp": 1728,
//                     "val": 17.980302663809784
//                 },
//                 {
//                     "timestamp": 1729,
//                     "val": 17.99708180013762
//                 },
//                 {
//                     "timestamp": 1730,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1731,
//                     "val": 17.723845315140597
//                 },
//                 {
//                     "timestamp": 1732,
//                     "val": 17.55581935753609
//                 },
//                 {
//                     "timestamp": 1733,
//                     "val": 17.73621681414687
//                 },
//                 {
//                     "timestamp": 1734,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1735,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1736,
//                     "val": 17.525802046533514
//                 },
//                 {
//                     "timestamp": 1737,
//                     "val": 17.616511120492127
//                 },
//                 {
//                     "timestamp": 1738,
//                     "val": 17.7200393171292
//                 },
//                 {
//                     "timestamp": 1739,
//                     "val": 17.73024582025127
//                 },
//                 {
//                     "timestamp": 1740,
//                     "val": 17.907197819831836
//                 },
//                 {
//                     "timestamp": 1741,
//                     "val": 17.67800015732021
//                 },
//                 {
//                     "timestamp": 1742,
//                     "val": 17.88758722865764
//                 },
//                 {
//                     "timestamp": 1743,
//                     "val": 17.698933240696054
//                 },
//                 {
//                     "timestamp": 1744,
//                     "val": 17.827197816738664
//                 },
//                 {
//                     "timestamp": 1745,
//                     "val": 17.917002703343456
//                 },
//                 {
//                     "timestamp": 1746,
//                     "val": 18.098923430482387
//                 },
//                 {
//                     "timestamp": 1747,
//                     "val": 18.13412224022352
//                 },
//                 {
//                     "timestamp": 1748,
//                     "val": 18.097582533390963
//                 },
//                 {
//                     "timestamp": 1749,
//                     "val": 18.02660229727151
//                 },
//                 {
//                     "timestamp": 1750,
//                     "val": 15.18801114385175
//                 },
//                 {
//                     "timestamp": 1751,
//                     "val": 15.215513023394122
//                 },
//                 {
//                     "timestamp": 1752,
//                     "val": 15.299927243203708
//                 },
//                 {
//                     "timestamp": 1753,
//                     "val": 15.274959898618828
//                 },
//                 {
//                     "timestamp": 1754,
//                     "val": 15.377379485530795
//                 },
//                 {
//                     "timestamp": 1755,
//                     "val": 15.352644082932796
//                 },
//                 {
//                     "timestamp": 1756,
//                     "val": 15.372049819266396
//                 },
//                 {
//                     "timestamp": 1757,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1758,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1759,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1760,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1761,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1762,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1763,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1764,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1765,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1766,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1767,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1768,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1769,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1770,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1771,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1772,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1773,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1774,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1775,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1776,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1777,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1778,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1779,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1780,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1781,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1782,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1783,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1784,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1785,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1786,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1787,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1788,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1789,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1790,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1791,
//                     "val": 17.4
//                 },
//                 {
//                     "timestamp": 1792,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1793,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1794,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1795,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1796,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1797,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1798,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1799,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1800,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1801,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1802,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1803,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1804,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1805,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1806,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1807,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1808,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1809,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1810,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1811,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1812,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1813,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1814,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1815,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1816,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1817,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1818,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1819,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1820,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1821,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1822,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1823,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1824,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1825,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1826,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1827,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1828,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1829,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1830,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1831,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1832,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1833,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1834,
//                     "val": 17.5
//                 },
//                 {
//                     "timestamp": 1835,
//                     "val": 20.55631319
//                 },
//                 {
//                     "timestamp": 1836,
//                     "val": 20.35878481
//                 },
//                 {
//                     "timestamp": 1837,
//                     "val": 20.45901925
//                 },
//                 {
//                     "timestamp": 1838,
//                     "val": 20.49019488
//                 },
//                 {
//                     "timestamp": 1839,
//                     "val": 20.74980222
//                 },
//                 {
//                     "timestamp": 1840,
//                     "val": 20.67490143
//                 },
//                 {
//                     "timestamp": 1841,
//                     "val": 20.53505306
//                 },
//                 {
//                     "timestamp": 1842,
//                     "val": 20.64947058
//                 },
//                 {
//                     "timestamp": 1843,
//                     "val": 20.48929336
//                 },
//                 {
//                     "timestamp": 1844,
//                     "val": 20.58420224
//                 },
//                 {
//                     "timestamp": 1845,
//                     "val": 20.67031883
//                 },
//                 {
//                     "timestamp": 1846,
//                     "val": 17.6
//                 },
//                 {
//                     "timestamp": 1847,
//                     "val": 18.89092744146672
//                 },
//                 {
//                     "timestamp": 1848,
//                     "val": 18.516757900234186
//                 },
//                 {
//                     "timestamp": 1849,
//                     "val": 18.607289100975386
//                 },
//                 {
//                     "timestamp": 1850,
//                     "val": 18.771149685495953
//                 },
//                 {
//                     "timestamp": 1851,
//                     "val": 18.804796737379565
//                 },
//                 {
//                     "timestamp": 1852,
//                     "val": 18.875230932760495
//                 },
//                 {
//                     "timestamp": 1853,
//                     "val": 17.7
//                 },
//                 {
//                     "timestamp": 1854,
//                     "val": 18.225962731032652
//                 },
//                 {
//                     "timestamp": 1855,
//                     "val": 18.292759648619445
//                 },
//                 {
//                     "timestamp": 1856,
//                     "val": 18.334977600651815
//                 },
//                 {
//                     "timestamp": 1857,
//                     "val": 18.33525736898676
//                 },
//                 {
//                     "timestamp": 1858,
//                     "val": 17.8
//                 },
//                 {
//                     "timestamp": 1859,
//                     "val": 18.12218149640236
//                 },
//                 {
//                     "timestamp": 1860,
//                     "val": 17.993250909725276
//                 },
//                 {
//                     "timestamp": 1861,
//                     "val": 18.16570518230222
//                 },
//                 {
//                     "timestamp": 1862,
//                     "val": 17.9
//                 },
//                 {
//                     "timestamp": 1863,
//                     "val": 17.912572738873035
//                 },
//                 {
//                     "timestamp": 1864,
//                     "val": 18.00899378869743
//                 },
//                 {
//                     "timestamp": 1865,
//                     "val": 18.04104351369063
//                 },
//                 {
//                     "timestamp": 1866,
//                     "val": 18.0
//                 },
//                 {
//                     "timestamp": 1867,
//                     "val": 17.899025789729983
//                 },
//                 {
//                     "timestamp": 1868,
//                     "val": 18.140898451313333
//                 },
//                 {
//                     "timestamp": 1869,
//                     "val": 18.05537102648329
//                 },
//                 {
//                     "timestamp": 1870,
//                     "val": 18.492413733928093
//                 },
//                 {
//                     "timestamp": 1871,
//                     "val": 18.47469113528127
//                 },
//                 {
//                     "timestamp": 1872,
//                     "val": 18.178339050437792
//                 },
//                 {
//                     "timestamp": 1873,
//                     "val": 18.551519119222128
//                 },
//                 {
//                     "timestamp": 1874,
//                     "val": 18.55933270811869
//                 },
//                 {
//                     "timestamp": 1875,
//                     "val": 18.718981614940283
//                 },
//                 {
//                     "timestamp": 1876,
//                     "val": 18.569369214444052
//                 },
//                 {
//                     "timestamp": 1877,
//                     "val": 18.861992064959978
//                 },
//                 {
//                     "timestamp": 1878,
//                     "val": 18.908438221340617
//                 },
//                 {
//                     "timestamp": 1879,
//                     "val": 18.4
//                 },
//                 {
//                     "timestamp": 1880,
//                     "val": 18.62689321070692
//                 },
//                 {
//                     "timestamp": 1881,
//                     "val": 18.94566786145687
//                 },
//                 {
//                     "timestamp": 1882,
//                     "val": 18.770575294099164
//                 },
//                 {
//                     "timestamp": 1883,
//                     "val": 19.086099432138525
//                 },
//                 {
//                     "timestamp": 1884,
//                     "val": 19.076249144380125
//                 },
//                 {
//                     "timestamp": 1885,
//                     "val": 19.033572923079465
//                 },
//                 {
//                     "timestamp": 1886,
//                     "val": 19.018661168076708
//                 },
//                 {
//                     "timestamp": 1887,
//                     "val": 19.294713835908563
//                 },
//                 {
//                     "timestamp": 1888,
//                     "val": 19.518632479533693
//                 },
//                 {
//                     "timestamp": 1889,
//                     "val": 19.59010737506711
//                 },
//                 {
//                     "timestamp": 1890,
//                     "val": 19.686543264221037
//                 },
//                 {
//                     "timestamp": 1891,
//                     "val": 19.78659537623798
//                 },
//                 {
//                     "timestamp": 1892,
//                     "val": 19.2
//                 },
//                 {
//                     "timestamp": 1893,
//                     "val": 19.397796781959272
//                 },
//                 {
//                     "timestamp": 1894,
//                     "val": 19.484017150273026
//                 },
//                 {
//                     "timestamp": 1895,
//                     "val": 19.67415725779461
//                 },
//                 {
//                     "timestamp": 1896,
//                     "val": 19.575527771214876
//                 },
//                 {
//                     "timestamp": 1897,
//                     "val": 19.608509448775834
//                 },
//                 {
//                     "timestamp": 1898,
//                     "val": 19.876848881538223
//                 },
//                 {
//                     "timestamp": 1899,
//                     "val": 20.06241557508989
//                 },
//                 {
//                     "timestamp": 1900,
//                     "val": 20.01465847416212
//                 },
//                 {
//                     "timestamp": 1901,
//                     "val": 20.08559647244044
//                 },
//                 {
//                     "timestamp": 1902,
//                     "val": 20.050033153203938
//                 },
//                 {
//                     "timestamp": 1903,
//                     "val": 20.15746261208974
//                 },
//                 {
//                     "timestamp": 1904,
//                     "val": 20.12478179141765
//                 },
//                 {
//                     "timestamp": 1905,
//                     "val": 19.7
//                 },
//                 {
//                     "timestamp": 1906,
//                     "val": 19.682715542322846
//                 },
//                 {
//                     "timestamp": 1907,
//                     "val": 19.9243600182264
//                 },
//                 {
//                     "timestamp": 1908,
//                     "val": 20.107238078516392
//                 },
//                 {
//                     "timestamp": 1909,
//                     "val": 20.22308035727577
//                 },
//                 {
//                     "timestamp": 1910,
//                     "val": 20.226053098174617
//                 },
//                 {
//                     "timestamp": 1911,
//                     "val": 20.382861832941916
//                 },
//                 {
//                     "timestamp": 1912,
//                     "val": 20.408621107657645
//                 },
//                 {
//                     "timestamp": 1913,
//                     "val": 20.40930834773716
//                 },
//                 {
//                     "timestamp": 1914,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1915,
//                     "val": 19.891819448000483
//                 },
//                 {
//                     "timestamp": 1916,
//                     "val": 20.17338779398828
//                 },
//                 {
//                     "timestamp": 1917,
//                     "val": 20.223496949031762
//                 },
//                 {
//                     "timestamp": 1918,
//                     "val": 17.376905817739548
//                 },
//                 {
//                     "timestamp": 1919,
//                     "val": 17.386633599421845
//                 },
//                 {
//                     "timestamp": 1920,
//                     "val": 17.499633910139213
//                 },
//                 {
//                     "timestamp": 1921,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1922,
//                     "val": 19.249052433659564
//                 },
//                 {
//                     "timestamp": 1923,
//                     "val": 19.454053987531573
//                 },
//                 {
//                     "timestamp": 1924,
//                     "val": 19.382416370339854
//                 },
//                 {
//                     "timestamp": 1925,
//                     "val": 19.506744204976734
//                 },
//                 {
//                     "timestamp": 1926,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1927,
//                     "val": 19.993749677081148
//                 },
//                 {
//                     "timestamp": 1928,
//                     "val": 19.998140422367477
//                 },
//                 {
//                     "timestamp": 1929,
//                     "val": 20.110690004116623
//                 },
//                 {
//                     "timestamp": 1930,
//                     "val": 20.03163026056337
//                 },
//                 {
//                     "timestamp": 1931,
//                     "val": 20.065169078526072
//                 },
//                 {
//                     "timestamp": 1932,
//                     "val": 20.137331036137894
//                 },
//                 {
//                     "timestamp": 1933,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 1934,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1935,
//                     "val": 20.590592846501508
//                 },
//                 {
//                     "timestamp": 1936,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1937,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1938,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1939,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1940,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1941,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1942,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1943,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1944,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1945,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1946,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1947,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1948,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1949,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1950,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1951,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1952,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1953,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 1954,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 1955,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 1956,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 1957,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 1958,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 1959,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 1960,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1961,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1962,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1963,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1964,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1965,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1966,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1967,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1968,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1969,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1970,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1971,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1972,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1973,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1974,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1975,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1976,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1977,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1978,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1979,
//                     "val": 19.8
//                 },
//                 {
//                     "timestamp": 1980,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1981,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1982,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 1983,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1984,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1985,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1986,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1987,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 1988,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1989,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1990,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1991,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 1992,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1993,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1994,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1995,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 1996,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1997,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1998,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 1999,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 2000,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 2001,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 2002,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 2003,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2004,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2005,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2006,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2007,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2008,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2009,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2010,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2011,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 2012,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 2013,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2014,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2015,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2016,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2017,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2018,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2019,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2020,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2021,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2022,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2023,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2024,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2025,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2026,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2027,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2028,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2029,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2030,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2031,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2032,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2033,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2034,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2035,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2036,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2037,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2038,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2039,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2040,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2041,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2042,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2043,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2044,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2045,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2046,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2047,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2048,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2049,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2050,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2051,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2052,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2053,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2054,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2055,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2056,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2057,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2058,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2059,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2060,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2061,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2062,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2063,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2064,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2065,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2066,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2067,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2068,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2069,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2070,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2071,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2072,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2073,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2074,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2075,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2076,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2077,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2078,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2079,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2080,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2081,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2082,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2083,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2084,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2085,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2086,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2087,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2088,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2089,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2090,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2091,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2092,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2093,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2094,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2095,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2096,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2097,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2098,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2099,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2100,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2101,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2102,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2103,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2104,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2105,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2106,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2107,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2108,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2109,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2110,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2111,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2112,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2113,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2114,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2115,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2116,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2117,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2118,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2119,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2120,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2121,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2122,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2123,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2124,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2125,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2126,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2127,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2128,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2129,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2130,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2131,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2132,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2133,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2134,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2135,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2136,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2137,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2138,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2139,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2140,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2141,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2142,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2143,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2144,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2145,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2146,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2147,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2148,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2149,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2150,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2151,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2152,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2153,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2154,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2155,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2156,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2157,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2158,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2159,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2160,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2161,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2162,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2163,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2164,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2165,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2166,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2167,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2168,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2169,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2170,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2171,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2172,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2173,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2174,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2175,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2176,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2177,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2178,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2179,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2180,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2181,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2182,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2183,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2184,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2185,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2186,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2187,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2188,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2189,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2190,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2191,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2192,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2193,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2194,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2195,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2196,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2197,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2198,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2199,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2200,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2201,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2202,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2203,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2204,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2205,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2206,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2207,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2208,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2209,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2210,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2211,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2212,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2213,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2214,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2215,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2216,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2217,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2218,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2219,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2220,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2221,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2222,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2223,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2224,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2225,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2226,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2227,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2228,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2229,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2230,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2231,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2232,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2233,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2234,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2235,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2236,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2237,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2238,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2239,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2240,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2241,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2242,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2243,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2244,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2245,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2246,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2247,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2248,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2249,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2250,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2251,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2252,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2253,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2254,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2255,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2256,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2257,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2258,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2259,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2260,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2261,
//                     "val": 21.6
//                 },
//                 {
//                     "timestamp": 2262,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2263,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2264,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2265,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2266,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2267,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2268,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2269,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2270,
//                     "val": 21.5
//                 },
//                 {
//                     "timestamp": 2271,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2272,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2273,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2274,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2275,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2276,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2277,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2278,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2279,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2280,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2281,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2282,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2283,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2284,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2285,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2286,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2287,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2288,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2289,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2290,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2291,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2292,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2293,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2294,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2295,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2296,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2297,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2298,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2299,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2300,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2301,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2302,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2303,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2304,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2305,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2306,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2307,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2308,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2309,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2310,
//                     "val": 21.4
//                 },
//                 {
//                     "timestamp": 2311,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2312,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2313,
//                     "val": 21.3
//                 },
//                 {
//                     "timestamp": 2314,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2315,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2316,
//                     "val": 21.2
//                 },
//                 {
//                     "timestamp": 2317,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2318,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2319,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2320,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2321,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2322,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2323,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2324,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2325,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2326,
//                     "val": 21.1
//                 },
//                 {
//                     "timestamp": 2327,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2328,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2329,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2330,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2331,
//                     "val": 21.0
//                 },
//                 {
//                     "timestamp": 2332,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2333,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2334,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2335,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2336,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2337,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2338,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2339,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2340,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2341,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2342,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2343,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2344,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2345,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2346,
//                     "val": 20.9
//                 },
//                 {
//                     "timestamp": 2347,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 2348,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2349,
//                     "val": 20.8
//                 },
//                 {
//                     "timestamp": 2350,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2351,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2352,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2353,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2354,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2355,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2356,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2357,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2358,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2359,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2360,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2361,
//                     "val": 20.7
//                 },
//                 {
//                     "timestamp": 2362,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2363,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2364,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2365,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2366,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2367,
//                     "val": 20.6
//                 },
//                 {
//                     "timestamp": 2368,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 2369,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 2370,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 2371,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 2372,
//                     "val": 20.5
//                 },
//                 {
//                     "timestamp": 2373,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 2374,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 2375,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 2376,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 2377,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 2378,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 2379,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 2380,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2381,
//                     "val": 20.4
//                 },
//                 {
//                     "timestamp": 2382,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2383,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2384,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2385,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2386,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2387,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2388,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2389,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2390,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2391,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2392,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2393,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2394,
//                     "val": 20.3
//                 },
//                 {
//                     "timestamp": 2395,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2396,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2397,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2398,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2399,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2400,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2401,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2402,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2403,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2404,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2405,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2406,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2407,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2408,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2409,
//                     "val": 20.2
//                 },
//                 {
//                     "timestamp": 2410,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 2411,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 2412,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 2413,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 2414,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 2415,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 2416,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 2417,
//                     "val": 20.1
//                 },
//                 {
//                     "timestamp": 2418,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2419,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2420,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2421,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2422,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2423,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2424,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2425,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2426,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2427,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2428,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2429,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2430,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2431,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2432,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2433,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2434,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2435,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2436,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2437,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2438,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2439,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2440,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2441,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2442,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2443,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2444,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2445,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2446,
//                     "val": 20.0
//                 },
//                 {
//                     "timestamp": 2447,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 2448,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 2449,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 2450,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 2451,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 2452,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 2453,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 2454,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 2455,
//                     "val": 19.9
//                 },
//                 {
//                     "timestamp": 2456,
//                     "val": 19.9
//                 }
//             ],
//             "wrongList": [
//                 112,
//                 111,
//                 110,
//                 109,
//                 108,
//                 107,
//                 106,
//                 105,
//                 104,
//                 103,
//                 102,
//                 101,
//                 100,
//                 99,
//                 98,
//                 97,
//                 96,
//                 95,
//                 94,
//                 93,
//                 92,
//                 91,
//                 90,
//                 89,
//                 88,
//                 88,
//                 89,
//                 88,
//                 88,
//                 87,
//                 88,
//                 88,
//                 88,
//                 87,
//                 86,
//                 87,
//                 86,
//                 86,
//                 85,
//                 87,
//                 86,
//                 85,
//                 85,
//                 84,
//                 86,
//                 85,
//                 84,
//                 83,
//                 84,
//                 84,
//                 83,
//                 82,
//                 82,
//                 81,
//                 83,
//                 82,
//                 81,
//                 80,
//                 79,
//                 80,
//                 80,
//                 79,
//                 78,
//                 79,
//                 78,
//                 77,
//                 78,
//                 77,
//                 76,
//                 77,
//                 76,
//                 75,
//                 76,
//                 75,
//                 74,
//                 75,
//                 74,
//                 73,
//                 75,
//                 74,
//                 73,
//                 73,
//                 72,
//                 73,
//                 72,
//                 71,
//                 70,
//                 73,
//                 72,
//                 71,
//                 70,
//                 69,
//                 69,
//                 69,
//                 68,
//                 69,
//                 68,
//                 68,
//                 68,
//                 67,
//                 66,
//                 67,
//                 66,
//                 66,
//                 66,
//                 68,
//                 67,
//                 66,
//                 66,
//                 65,
//                 66,
//                 65,
//                 65,
//                 65,
//                 64,
//                 66,
//                 65,
//                 64,
//                 63,
//                 65,
//                 64,
//                 66,
//                 65,
//                 65,
//                 64,
//                 63,
//                 65,
//                 64,
//                 66,
//                 65,
//                 64,
//                 63,
//                 64,
//                 63,
//                 63,
//                 62,
//                 64,
//                 64,
//                 62,
//                 61,
//                 61,
//                 61,
//                 60,
//                 62,
//                 61,
//                 61,
//                 60,
//                 60,
//                 59,
//                 59,
//                 59,
//                 58,
//                 62,
//                 61,
//                 61,
//                 60,
//                 59,
//                 62,
//                 61,
//                 60,
//                 60,
//                 59,
//                 59,
//                 59,
//                 58,
//                 58,
//                 57,
//                 56,
//                 58,
//                 57,
//                 57,
//                 56,
//                 58,
//                 57,
//                 57,
//                 56,
//                 55,
//                 56,
//                 55,
//                 55,
//                 54,
//                 53,
//                 53,
//                 52,
//                 55,
//                 55,
//                 55,
//                 54,
//                 53,
//                 52,
//                 56,
//                 55,
//                 55,
//                 54,
//                 53,
//                 52,
//                 51,
//                 54,
//                 53,
//                 54,
//                 54,
//                 53,
//                 52,
//                 51,
//                 52,
//                 51,
//                 50,
//                 53,
//                 52,
//                 51,
//                 50,
//                 50,
//                 50,
//                 49,
//                 50,
//                 49,
//                 48,
//                 50,
//                 50,
//                 50,
//                 49,
//                 48,
//                 50,
//                 50,
//                 49,
//                 50,
//                 49,
//                 48,
//                 47,
//                 51,
//                 50,
//                 49,
//                 48,
//                 48,
//                 49,
//                 49,
//                 49,
//                 48,
//                 49,
//                 49,
//                 48,
//                 47,
//                 51,
//                 50,
//                 49,
//                 49,
//                 49,
//                 48,
//                 52,
//                 52,
//                 51,
//                 51,
//                 50,
//                 49,
//                 48,
//                 48,
//                 47,
//                 46,
//                 48,
//                 48,
//                 47,
//                 47,
//                 47,
//                 47,
//                 46,
//                 45,
//                 49,
//                 49,
//                 48,
//                 47,
//                 46,
//                 46,
//                 46,
//                 46,
//                 45,
//                 47,
//                 48,
//                 47,
//                 47,
//                 46,
//                 46,
//                 45,
//                 45,
//                 44,
//                 48,
//                 48,
//                 47,
//                 47,
//                 47,
//                 46,
//                 48,
//                 47,
//                 46,
//                 49,
//                 47,
//                 48,
//                 48,
//                 47,
//                 46,
//                 45,
//                 47,
//                 46,
//                 45,
//                 44,
//                 45,
//                 44,
//                 44,
//                 43,
//                 49,
//                 48,
//                 47,
//                 47,
//                 47,
//                 46,
//                 46,
//                 45,
//                 46,
//                 45,
//                 45,
//                 46,
//                 46,
//                 45,
//                 44,
//                 44,
//                 43,
//                 47,
//                 47,
//                 47,
//                 46,
//                 46,
//                 46,
//                 45,
//                 46,
//                 45,
//                 44,
//                 43,
//                 46,
//                 46,
//                 46,
//                 45,
//                 44,
//                 46,
//                 45,
//                 44,
//                 44,
//                 43,
//                 42,
//                 47,
//                 47,
//                 46,
//                 45,
//                 45,
//                 45,
//                 44,
//                 44,
//                 44,
//                 44,
//                 43,
//                 42,
//                 41,
//                 41,
//                 40,
//                 41,
//                 41,
//                 40,
//                 39,
//                 41,
//                 41,
//                 40,
//                 38,
//                 44,
//                 43,
//                 43,
//                 42,
//                 41,
//                 41,
//                 41,
//                 42,
//                 42,
//                 41,
//                 40,
//                 42,
//                 41,
//                 44,
//                 45,
//                 44,
//                 43,
//                 42,
//                 42,
//                 41,
//                 42,
//                 42,
//                 42,
//                 41,
//                 41,
//                 42,
//                 42,
//                 41,
//                 40,
//                 39,
//                 39,
//                 38,
//                 43,
//                 43,
//                 43,
//                 42,
//                 41,
//                 41,
//                 40,
//                 41,
//                 40,
//                 39,
//                 39,
//                 43,
//                 40,
//                 39,
//                 40,
//                 39,
//                 38,
//                 38,
//                 37,
//                 36,
//                 38,
//                 40,
//                 40,
//                 40,
//                 39,
//                 38,
//                 38,
//                 37,
//                 36,
//                 36,
//                 36,
//                 38,
//                 38,
//                 37,
//                 36,
//                 35,
//                 42,
//                 42,
//                 42,
//                 41,
//                 41,
//                 44,
//                 44,
//                 42,
//                 41,
//                 40,
//                 40,
//                 40,
//                 39,
//                 38,
//                 39,
//                 38,
//                 39,
//                 40,
//                 39,
//                 39,
//                 39,
//                 38,
//                 37,
//                 36,
//                 35,
//                 37,
//                 39,
//                 38,
//                 38,
//                 37,
//                 36,
//                 35,
//                 45,
//                 45,
//                 44,
//                 44,
//                 44,
//                 43,
//                 42,
//                 41,
//                 40,
//                 43,
//                 44,
//                 44,
//                 44,
//                 43,
//                 43,
//                 42,
//                 42,
//                 44,
//                 44,
//                 43,
//                 43,
//                 43,
//                 42,
//                 43,
//                 42,
//                 41,
//                 40,
//                 39,
//                 38,
//                 39,
//                 39,
//                 40,
//                 40,
//                 40,
//                 40,
//                 39,
//                 38,
//                 40,
//                 40,
//                 40,
//                 40,
//                 40,
//                 40,
//                 39,
//                 40,
//                 40,
//                 39,
//                 39,
//                 38,
//                 38,
//                 39,
//                 39,
//                 38,
//                 37,
//                 36,
//                 38,
//                 37,
//                 36,
//                 37,
//                 37,
//                 36,
//                 35,
//                 37,
//                 36,
//                 36,
//                 36,
//                 35,
//                 36,
//                 36,
//                 35,
//                 36,
//                 36,
//                 35,
//                 35,
//                 35,
//                 34,
//                 35,
//                 35,
//                 36,
//                 35,
//                 34,
//                 34,
//                 37,
//                 36,
//                 35,
//                 35,
//                 34,
//                 34,
//                 34,
//                 33,
//                 33,
//                 34,
//                 34,
//                 33,
//                 32,
//                 38,
//                 38,
//                 37,
//                 37,
//                 37,
//                 37,
//                 37,
//                 36,
//                 36,
//                 35,
//                 36,
//                 35,
//                 34,
//                 33,
//                 46,
//                 45,
//                 45,
//                 45,
//                 45,
//                 45,
//                 44,
//                 44,
//                 43,
//                 42,
//                 43,
//                 42,
//                 42,
//                 42,
//                 42,
//                 41,
//                 42,
//                 43,
//                 43,
//                 42,
//                 41,
//                 42,
//                 41,
//                 45,
//                 45,
//                 44,
//                 44,
//                 43,
//                 43,
//                 43,
//                 44,
//                 43,
//                 44,
//                 44,
//                 46,
//                 45,
//                 44,
//                 43,
//                 41,
//                 41,
//                 43,
//                 41,
//                 42,
//                 42,
//                 42,
//                 44,
//                 43,
//                 43,
//                 44,
//                 45,
//                 46,
//                 48,
//                 47,
//                 47,
//                 46,
//                 46,
//                 45,
//                 45,
//                 44,
//                 43,
//                 43,
//                 43,
//                 42,
//                 41,
//                 40,
//                 41,
//                 40,
//                 40,
//                 40,
//                 39,
//                 41,
//                 41,
//                 43,
//                 43,
//                 40,
//                 41,
//                 41,
//                 40,
//                 40,
//                 40,
//                 39,
//                 40,
//                 39,
//                 39,
//                 38,
//                 40,
//                 39,
//                 39,
//                 39,
//                 40,
//                 40,
//                 39,
//                 38,
//                 37,
//                 38,
//                 37,
//                 36,
//                 37,
//                 36,
//                 36,
//                 36,
//                 36,
//                 36,
//                 36,
//                 35,
//                 35,
//                 36,
//                 37,
//                 36,
//                 35,
//                 35,
//                 34,
//                 34,
//                 33,
//                 44,
//                 43,
//                 43,
//                 43,
//                 43,
//                 42,
//                 41,
//                 41,
//                 41,
//                 40,
//                 42,
//                 42,
//                 42,
//                 41,
//                 41,
//                 41,
//                 40,
//                 40,
//                 40,
//                 40,
//                 39,
//                 38,
//                 39,
//                 39,
//                 39,
//                 38,
//                 38,
//                 37,
//                 40,
//                 39,
//                 41,
//                 43,
//                 44,
//                 43,
//                 42,
//                 40,
//                 39,
//                 40,
//                 39,
//                 39,
//                 39,
//                 38,
//                 38,
//                 38,
//                 38,
//                 38,
//                 38,
//                 38,
//                 39,
//                 38,
//                 37,
//                 38,
//                 38,
//                 37,
//                 36,
//                 36,
//                 36,
//                 35,
//                 35,
//                 34,
//                 34,
//                 33,
//                 33,
//                 33,
//                 35,
//                 35,
//                 34,
//                 34,
//                 33,
//                 34,
//                 34,
//                 33,
//                 33,
//                 33,
//                 32,
//                 31,
//                 30,
//                 31,
//                 31,
//                 32,
//                 32,
//                 32,
//                 32,
//                 32,
//                 32,
//                 32,
//                 31,
//                 32,
//                 31,
//                 30,
//                 29,
//                 34,
//                 35,
//                 34,
//                 34,
//                 33,
//                 33,
//                 33,
//                 33,
//                 33,
//                 33,
//                 32,
//                 31,
//                 31,
//                 33,
//                 32,
//                 31,
//                 30,
//                 30,
//                 30,
//                 29,
//                 29,
//                 28,
//                 27,
//                 38,
//                 38,
//                 36,
//                 38,
//                 38,
//                 38,
//                 39,
//                 38,
//                 38,
//                 38,
//                 37,
//                 38,
//                 37,
//                 36,
//                 36,
//                 36,
//                 36,
//                 35,
//                 35,
//                 35,
//                 34,
//                 33,
//                 34,
//                 34,
//                 35,
//                 33,
//                 34,
//                 34,
//                 33,
//                 33,
//                 35,
//                 35,
//                 35,
//                 36,
//                 35,
//                 35,
//                 34,
//                 37,
//                 36,
//                 36,
//                 37,
//                 38,
//                 37,
//                 36,
//                 40,
//                 38,
//                 38,
//                 39,
//                 39,
//                 39,
//                 38,
//                 36,
//                 35,
//                 34,
//                 34,
//                 34,
//                 33,
//                 52,
//                 53,
//                 52,
//                 51,
//                 50,
//                 52,
//                 52,
//                 52,
//                 51,
//                 51,
//                 50,
//                 49,
//                 47,
//                 48,
//                 49,
//                 48,
//                 48,
//                 47,
//                 47,
//                 47,
//                 48,
//                 48,
//                 48,
//                 47,
//                 47,
//                 46,
//                 46,
//                 46,
//                 46,
//                 46,
//                 46,
//                 45,
//                 47,
//                 46,
//                 46,
//                 46,
//                 45,
//                 44,
//                 45,
//                 45,
//                 46,
//                 47,
//                 47,
//                 46,
//                 47,
//                 47,
//                 48,
//                 47,
//                 47,
//                 46,
//                 45,
//                 44,
//                 44,
//                 47,
//                 46,
//                 48,
//                 48,
//                 49,
//                 49,
//                 50,
//                 49,
//                 48,
//                 47,
//                 48,
//                 48,
//                 47,
//                 48,
//                 47,
//                 46,
//                 47,
//                 46,
//                 45,
//                 44,
//                 45,
//                 46,
//                 46,
//                 45,
//                 46,
//                 46,
//                 46,
//                 45,
//                 45,
//                 45,
//                 45,
//                 44,
//                 44,
//                 44,
//                 46,
//                 45,
//                 45,
//                 45,
//                 45,
//                 46,
//                 45,
//                 44,
//                 43,
//                 42,
//                 46,
//                 45,
//                 45,
//                 44,
//                 43,
//                 42,
//                 43,
//                 43,
//                 43,
//                 42,
//                 42,
//                 42,
//                 41,
//                 40,
//                 40,
//                 39,
//                 38,
//                 37,
//                 36,
//                 38,
//                 38,
//                 38,
//                 39,
//                 39,
//                 40,
//                 39,
//                 39,
//                 39,
//                 39,
//                 40,
//                 39,
//                 38,
//                 39,
//                 39,
//                 39,
//                 38,
//                 37,
//                 37,
//                 37,
//                 36,
//                 35,
//                 34,
//                 36,
//                 35,
//                 34,
//                 35,
//                 34,
//                 34,
//                 33,
//                 34,
//                 35,
//                 34,
//                 34,
//                 33,
//                 33,
//                 33,
//                 33,
//                 34,
//                 33,
//                 33,
//                 33,
//                 32,
//                 39,
//                 38,
//                 39,
//                 39,
//                 39,
//                 38,
//                 37,
//                 39,
//                 38,
//                 37,
//                 37,
//                 37,
//                 38,
//                 37,
//                 37,
//                 37,
//                 38,
//                 37,
//                 37,
//                 37,
//                 36,
//                 36,
//                 35,
//                 35,
//                 35,
//                 36,
//                 36,
//                 35,
//                 34,
//                 34,
//                 33,
//                 32,
//                 32,
//                 32,
//                 31,
//                 30,
//                 50,
//                 50,
//                 50,
//                 49,
//                 49,
//                 49,
//                 50,
//                 48,
//                 47,
//                 48,
//                 49,
//                 47,
//                 48,
//                 46,
//                 47,
//                 47,
//                 47,
//                 48,
//                 49,
//                 48,
//                 48,
//                 46,
//                 49,
//                 48,
//                 48,
//                 48,
//                 48,
//                 48,
//                 48,
//                 49,
//                 47,
//                 47,
//                 48,
//                 47,
//                 48,
//                 45,
//                 44,
//                 47,
//                 47,
//                 47,
//                 46,
//                 46,
//                 47,
//                 46,
//                 47,
//                 47,
//                 46,
//                 45,
//                 46,
//                 46,
//                 46,
//                 47,
//                 47,
//                 48,
//                 48,
//                 47,
//                 48,
//                 48,
//                 48,
//                 48,
//                 49,
//                 48,
//                 48,
//                 48,
//                 48,
//                 48,
//                 48,
//                 51,
//                 50,
//                 48,
//                 48,
//                 50,
//                 50,
//                 49,
//                 49,
//                 48,
//                 47,
//                 48,
//                 48,
//                 49,
//                 49,
//                 48,
//                 47,
//                 50,
//                 49,
//                 48,
//                 49,
//                 48,
//                 49,
//                 48,
//                 52,
//                 52,
//                 53,
//                 53,
//                 53,
//                 53,
//                 53,
//                 51,
//                 50,
//                 52,
//                 51,
//                 50,
//                 50,
//                 50,
//                 50,
//                 50,
//                 49,
//                 48,
//                 49,
//                 48,
//                 48,
//                 48,
//                 48,
//                 48,
//                 48,
//                 48,
//                 49,
//                 48,
//                 47,
//                 47,
//                 47,
//                 47,
//                 47,
//                 47,
//                 46,
//                 45,
//                 44,
//                 44,
//                 45,
//                 47,
//                 46,
//                 46,
//                 47,
//                 47,
//                 45,
//                 46,
//                 45,
//                 45,
//                 45,
//                 46,
//                 46,
//                 47,
//                 47,
//                 47,
//                 46,
//                 46,
//                 47,
//                 47,
//                 47,
//                 46,
//                 46,
//                 46,
//                 45,
//                 45,
//                 44,
//                 43,
//                 42,
//                 42,
//                 41,
//                 40,
//                 42,
//                 42,
//                 42,
//                 41,
//                 40,
//                 39,
//                 39,
//                 38,
//                 38,
//                 38,
//                 39,
//                 39,
//                 40,
//                 40,
//                 40,
//                 40,
//                 39,
//                 39,
//                 38,
//                 38,
//                 37,
//                 37,
//                 36,
//                 38,
//                 37,
//                 37,
//                 37,
//                 38,
//                 38,
//                 38,
//                 38,
//                 38,
//                 40,
//                 40,
//                 39,
//                 39,
//                 39,
//                 38,
//                 38,
//                 38,
//                 37,
//                 38,
//                 37,
//                 36,
//                 35,
//                 34,
//                 34,
//                 33,
//                 32,
//                 31,
//                 32,
//                 32,
//                 32,
//                 32,
//                 31,
//                 30,
//                 32,
//                 32,
//                 32,
//                 32,
//                 33,
//                 32,
//                 32,
//                 31,
//                 31,
//                 30,
//                 30,
//                 29,
//                 34,
//                 33,
//                 34,
//                 34,
//                 33,
//                 33,
//                 34,
//                 34,
//                 35,
//                 35,
//                 35,
//                 35,
//                 35,
//                 35,
//                 35,
//                 36,
//                 35,
//                 34,
//                 34,
//                 33,
//                 32,
//                 33,
//                 34,
//                 34,
//                 33,
//                 34,
//                 33,
//                 33,
//                 33,
//                 34,
//                 33,
//                 32,
//                 32,
//                 31,
//                 31,
//                 30,
//                 30,
//                 30,
//                 31,
//                 30,
//                 30,
//                 30,
//                 31,
//                 31,
//                 30,
//                 29,
//                 29,
//                 29,
//                 29,
//                 30,
//                 30,
//                 31,
//                 30,
//                 29,
//                 29,
//                 28,
//                 30,
//                 29,
//                 30,
//                 29,
//                 29,
//                 30,
//                 31,
//                 30,
//                 30,
//                 31,
//                 31,
//                 30,
//                 30,
//                 29,
//                 29,
//                 28,
//                 27,
//                 28,
//                 28,
//                 29,
//                 29,
//                 28,
//                 29,
//                 28,
//                 27,
//                 27,
//                 26,
//                 33,
//                 31,
//                 30,
//                 30,
//                 31,
//                 32,
//                 32,
//                 31,
//                 31,
//                 31,
//                 31,
//                 31,
//                 31,
//                 32,
//                 33,
//                 32,
//                 33,
//                 32,
//                 31,
//                 30,
//                 29,
//                 29,
//                 30,
//                 29,
//                 29,
//                 29,
//                 28,
//                 27,
//                 26,
//                 26,
//                 26,
//                 26,
//                 26,
//                 25,
//                 26,
//                 26,
//                 27,
//                 26,
//                 26,
//                 26,
//                 28,
//                 28,
//                 28,
//                 30,
//                 29,
//                 29,
//                 28,
//                 27,
//                 27,
//                 26,
//                 26,
//                 25,
//                 26,
//                 26,
//                 26,
//                 26,
//                 25,
//                 26,
//                 26,
//                 26,
//                 25,
//                 25,
//                 26,
//                 26,
//                 26,
//                 26,
//                 27,
//                 28,
//                 28,
//                 27,
//                 26,
//                 25,
//                 27,
//                 26,
//                 25,
//                 25,
//                 24,
//                 25,
//                 25,
//                 25,
//                 26,
//                 27,
//                 27,
//                 25,
//                 24,
//                 24,
//                 24,
//                 25,
//                 25,
//                 25,
//                 25,
//                 25,
//                 26,
//                 25,
//                 24,
//                 24,
//                 23,
//                 24,
//                 24,
//                 23,
//                 22,
//                 29,
//                 30,
//                 30,
//                 30,
//                 29,
//                 30,
//                 29,
//                 29,
//                 29,
//                 28,
//                 28,
//                 27,
//                 26,
//                 25,
//                 25,
//                 25,
//                 24,
//                 30,
//                 32,
//                 33,
//                 33,
//                 31,
//                 31,
//                 32,
//                 32,
//                 32,
//                 32,
//                 32,
//                 33,
//                 32,
//                 32,
//                 31,
//                 38,
//                 36,
//                 35,
//                 35,
//                 34,
//                 33,
//                 34,
//                 34,
//                 33,
//                 33,
//                 33,
//                 32,
//                 33,
//                 32,
//                 31,
//                 30,
//                 30,
//                 30,
//                 29,
//                 28,
//                 28,
//                 28,
//                 27,
//                 27,
//                 28,
//                 30,
//                 30,
//                 29,
//                 30,
//                 29,
//                 29,
//                 30,
//                 31,
//                 31,
//                 31,
//                 32,
//                 31,
//                 31,
//                 32,
//                 31,
//                 31,
//                 30,
//                 30,
//                 29,
//                 29,
//                 28,
//                 28,
//                 27,
//                 28,
//                 27,
//                 26,
//                 27,
//                 26,
//                 26,
//                 25,
//                 24,
//                 57,
//                 57,
//                 57,
//                 57,
//                 57,
//                 56,
//                 56,
//                 56,
//                 55,
//                 55,
//                 55,
//                 54,
//                 53,
//                 53,
//                 53,
//                 52,
//                 52,
//                 52,
//                 52,
//                 51,
//                 51,
//                 52,
//                 51,
//                 50,
//                 48,
//                 49,
//                 48,
//                 47,
//                 46,
//                 45,
//                 46,
//                 45,
//                 46,
//                 47,
//                 46,
//                 46,
//                 45,
//                 47,
//                 46,
//                 46,
//                 46,
//                 45,
//                 46,
//                 45,
//                 44,
//                 44,
//                 45,
//                 45,
//                 46,
//                 44,
//                 45,
//                 46,
//                 47,
//                 46,
//                 45,
//                 45,
//                 47,
//                 47,
//                 47,
//                 48,
//                 47,
//                 47,
//                 48,
//                 48,
//                 48,
//                 47,
//                 47,
//                 47,
//                 46,
//                 46,
//                 46,
//                 46,
//                 46,
//                 47,
//                 48,
//                 47,
//                 47,
//                 47,
//                 47,
//                 47,
//                 47,
//                 48,
//                 49,
//                 48,
//                 49,
//                 48,
//                 47,
//                 46,
//                 45,
//                 44,
//                 45,
//                 44,
//                 43,
//                 42,
//                 43,
//                 43,
//                 43,
//                 43,
//                 45,
//                 44,
//                 42,
//                 44,
//                 43,
//                 42,
//                 42,
//                 42,
//                 42,
//                 42,
//                 41,
//                 41,
//                 40,
//                 41,
//                 40,
//                 40,
//                 41,
//                 41,
//                 40,
//                 40,
//                 41,
//                 40,
//                 40,
//                 39,
//                 41,
//                 42,
//                 41,
//                 41,
//                 41,
//                 41,
//                 42,
//                 41,
//                 40,
//                 39,
//                 39,
//                 39,
//                 38,
//                 37,
//                 38,
//                 38,
//                 38,
//                 39,
//                 39,
//                 41,
//                 40,
//                 39,
//                 38,
//                 37,
//                 38,
//                 40,
//                 39,
//                 40,
//                 40,
//                 39,
//                 37,
//                 40,
//                 39,
//                 37,
//                 37,
//                 36,
//                 35,
//                 36,
//                 38,
//                 40,
//                 41,
//                 40,
//                 40,
//                 41,
//                 41,
//                 40,
//                 40,
//                 39,
//                 38,
//                 37,
//                 36,
//                 35,
//                 35,
//                 34,
//                 33,
//                 35,
//                 36,
//                 36,
//                 35,
//                 35,
//                 35,
//                 35,
//                 34,
//                 33,
//                 34,
//                 34,
//                 34,
//                 35,
//                 34,
//                 34,
//                 35,
//                 34,
//                 34,
//                 33,
//                 39,
//                 38,
//                 37,
//                 38,
//                 37,
//                 40,
//                 39,
//                 39,
//                 40,
//                 40,
//                 40,
//                 40,
//                 40,
//                 39,
//                 39,
//                 38,
//                 39,
//                 38,
//                 38,
//                 37,
//                 36,
//                 37,
//                 37,
//                 36,
//                 35,
//                 35,
//                 34,
//                 35,
//                 35,
//                 36,
//                 36,
//                 35,
//                 35,
//                 34,
//                 34,
//                 34,
//                 33,
//                 35,
//                 34,
//                 33,
//                 32,
//                 33,
//                 32,
//                 32,
//                 33,
//                 32,
//                 32,
//                 33,
//                 33,
//                 33,
//                 34,
//                 33,
//                 33,
//                 34,
//                 34,
//                 34,
//                 33,
//                 35,
//                 35,
//                 35,
//                 34,
//                 34,
//                 33,
//                 31,
//                 32,
//                 31,
//                 30,
//                 32,
//                 33,
//                 32,
//                 31,
//                 30,
//                 31,
//                 32,
//                 32,
//                 31,
//                 31,
//                 32,
//                 32,
//                 32,
//                 31,
//                 32,
//                 32,
//                 32,
//                 31,
//                 33,
//                 34,
//                 36,
//                 37,
//                 36,
//                 36,
//                 37,
//                 36,
//                 36,
//                 36,
//                 35,
//                 34,
//                 33,
//                 32,
//                 31,
//                 31,
//                 30,
//                 31,
//                 31,
//                 32,
//                 33,
//                 32,
//                 32,
//                 32,
//                 32,
//                 32,
//                 32,
//                 33,
//                 34,
//                 33,
//                 34,
//                 33,
//                 32,
//                 31,
//                 30,
//                 30,
//                 29,
//                 34,
//                 34,
//                 31,
//                 33,
//                 33,
//                 33,
//                 35,
//                 34,
//                 33,
//                 34,
//                 34,
//                 34,
//                 34,
//                 33,
//                 32,
//                 32,
//                 32,
//                 31,
//                 32,
//                 32,
//                 32,
//                 32,
//                 32,
//                 31,
//                 31,
//                 30,
//                 29,
//                 29,
//                 29,
//                 30,
//                 29,
//                 29,
//                 29,
//                 31,
//                 31,
//                 29,
//                 31,
//                 33,
//                 32,
//                 32,
//                 33,
//                 32,
//                 31,
//                 32,
//                 32,
//                 31,
//                 30,
//                 29,
//                 28,
//                 30,
//                 31,
//                 30,
//                 30,
//                 30,
//                 30,
//                 31,
//                 30,
//                 30,
//                 31,
//                 30,
//                 30,
//                 30,
//                 32,
//                 34,
//                 36,
//                 37,
//                 36,
//                 36,
//                 37,
//                 38,
//                 36,
//                 36,
//                 35,
//                 36,
//                 35,
//                 34,
//                 33,
//                 34,
//                 34,
//                 34,
//                 34,
//                 34,
//                 33,
//                 32,
//                 32,
//                 32,
//                 31,
//                 30,
//                 30,
//                 30,
//                 31,
//                 31,
//                 30,
//                 30,
//                 29,
//                 28,
//                 27,
//                 31,
//                 32,
//                 31,
//                 30,
//                 30,
//                 30,
//                 31,
//                 30,
//                 30,
//                 30,
//                 32,
//                 31,
//                 32,
//                 31,
//                 31,
//                 32,
//                 31,
//                 31,
//                 30,
//                 30,
//                 29,
//                 29,
//                 29,
//                 28,
//                 29,
//                 29,
//                 29,
//                 30,
//                 30,
//                 31,
//                 31,
//                 30,
//                 30,
//                 31,
//                 31,
//                 32,
//                 30,
//                 31,
//                 31,
//                 31,
//                 30,
//                 29,
//                 29,
//                 30,
//                 30,
//                 30,
//                 30,
//                 29,
//                 29,
//                 29,
//                 30,
//                 29,
//                 28,
//                 27,
//                 26,
//                 26,
//                 26,
//                 25,
//                 25,
//                 25,
//                 25,
//                 24,
//                 38,
//                 39,
//                 38,
//                 38,
//                 39,
//                 39,
//                 38,
//                 38,
//                 37,
//                 37,
//                 37,
//                 37,
//                 37,
//                 36,
//                 36,
//                 35,
//                 35,
//                 35,
//                 36,
//                 38,
//                 39,
//                 39,
//                 39,
//                 39,
//                 39,
//                 39,
//                 39,
//                 38,
//                 37,
//                 38,
//                 36,
//                 37,
//                 36,
//                 35,
//                 34,
//                 36,
//                 35,
//                 37,
//                 37,
//                 37,
//                 36,
//                 35,
//                 34,
//                 33,
//                 33,
//                 33,
//                 32,
//                 32,
//                 33,
//                 32,
//                 34,
//                 33,
//                 33,
//                 34,
//                 33,
//                 33,
//                 32,
//                 31,
//                 31,
//                 30,
//                 29,
//                 28,
//                 28,
//                 29,
//                 29,
//                 30,
//                 29,
//                 30,
//                 31,
//                 31,
//                 32,
//                 31,
//                 31,
//                 32,
//                 31,
//                 31,
//                 30,
//                 29,
//                 29,
//                 29,
//                 28,
//                 27,
//                 26,
//                 28,
//                 29,
//                 28,
//                 27,
//                 27,
//                 27,
//                 26,
//                 25,
//                 24,
//                 24,
//                 23,
//                 22,
//                 23,
//                 22,
//                 21,
//                 32,
//                 31,
//                 32,
//                 31,
//                 31,
//                 31,
//                 31,
//                 31,
//                 31,
//                 32,
//                 33,
//                 32,
//                 33,
//                 32,
//                 31,
//                 30,
//                 32,
//                 33,
//                 32,
//                 32,
//                 32,
//                 31,
//                 30,
//                 30,
//                 30,
//                 29,
//                 29,
//                 29,
//                 30,
//                 29,
//                 28,
//                 27,
//                 26,
//                 26,
//                 27,
//                 27,
//                 26,
//                 25,
//                 25,
//                 25,
//                 24,
//                 25,
//                 25,
//                 26,
//                 26,
//                 26,
//                 26,
//                 25,
//                 23,
//                 24,
//                 22,
//                 21,
//                 22,
//                 22,
//                 22,
//                 23,
//                 22,
//                 22,
//                 21,
//                 23,
//                 23,
//                 23,
//                 22,
//                 22,
//                 21,
//                 21,
//                 21,
//                 22,
//                 23,
//                 22,
//                 22,
//                 22,
//                 21,
//                 20,
//                 24,
//                 23,
//                 25,
//                 26,
//                 27,
//                 26,
//                 25,
//                 25,
//                 24,
//                 23,
//                 22,
//                 24,
//                 25,
//                 25,
//                 25,
//                 26,
//                 25,
//                 24,
//                 25,
//                 25,
//                 25,
//                 26,
//                 27,
//                 27,
//                 27,
//                 26,
//                 27,
//                 27,
//                 26,
//                 25,
//                 26,
//                 26,
//                 28,
//                 28,
//                 26,
//                 26,
//                 26,
//                 27,
//                 27,
//                 26,
//                 26,
//                 27,
//                 26,
//                 26,
//                 27,
//                 28,
//                 28,
//                 27,
//                 26,
//                 25,
//                 25,
//                 24,
//                 23,
//                 22,
//                 24,
//                 25,
//                 24,
//                 24,
//                 24,
//                 24,
//                 24,
//                 23,
//                 22,
//                 24,
//                 24,
//                 24,
//                 23,
//                 22,
//                 22,
//                 22,
//                 23,
//                 23,
//                 22,
//                 22,
//                 22,
//                 22,
//                 23,
//                 23,
//                 23,
//                 22,
//                 23,
//                 22,
//                 24,
//                 23,
//                 23,
//                 23,
//                 25,
//                 25,
//                 23,
//                 23,
//                 24,
//                 24,
//                 25,
//                 24,
//                 23,
//                 22,
//                 22,
//                 22,
//                 22,
//                 22,
//                 21,
//                 30,
//                 30,
//                 29,
//                 29,
//                 29,
//                 31,
//                 32,
//                 31,
//                 30,
//                 31,
//                 31,
//                 31,
//                 32,
//                 31,
//                 32,
//                 31,
//                 31,
//                 31,
//                 30,
//                 28,
//                 27,
//                 27,
//                 26,
//                 25,
//                 24,
//                 24,
//                 24,
//                 24,
//                 24,
//                 24,
//                 24,
//                 23,
//                 23,
//                 23,
//                 23,
//                 23,
//                 23,
//                 24,
//                 23,
//                 22,
//                 22,
//                 21,
//                 21,
//                 21,
//                 22,
//                 21,
//                 21,
//                 20,
//                 21,
//                 22,
//                 22,
//                 22,
//                 22,
//                 22,
//                 22,
//                 22,
//                 23,
//                 21,
//                 22,
//                 23,
//                 24,
//                 23,
//                 22,
//                 22,
//                 22,
//                 23,
//                 22,
//                 22,
//                 24,
//                 24,
//                 24,
//                 23,
//                 23,
//                 22,
//                 21,
//                 21,
//                 21,
//                 20,
//                 22,
//                 23,
//                 22,
//                 21,
//                 21,
//                 20,
//                 21,
//                 21,
//                 21,
//                 20,
//                 21,
//                 21,
//                 20,
//                 19,
//                 19,
//                 27,
//                 27,
//                 27,
//                 26,
//                 25,
//                 25,
//                 25,
//                 25,
//                 25,
//                 26,
//                 25,
//                 24,
//                 23,
//                 22,
//                 22,
//                 24,
//                 24,
//                 25,
//                 24,
//                 24,
//                 24,
//                 23,
//                 23,
//                 23,
//                 22,
//                 22,
//                 21,
//                 23,
//                 23,
//                 24,
//                 24,
//                 25,
//                 24,
//                 23,
//                 23,
//                 22,
//                 22,
//                 22,
//                 22,
//                 22,
//                 23,
//                 23,
//                 23,
//                 23,
//                 24,
//                 24,
//                 23,
//                 22,
//                 22,
//                 22,
//                 23,
//                 22,
//                 21,
//                 20,
//                 19,
//                 24,
//                 23,
//                 22,
//                 23,
//                 22,
//                 22,
//                 21,
//                 29,
//                 28,
//                 27,
//                 27,
//                 26,
//                 26,
//                 26,
//                 25,
//                 24,
//                 23,
//                 22,
//                 21,
//                 23,
//                 23,
//                 23,
//                 23,
//                 23,
//                 23,
//                 24,
//                 24,
//                 23,
//                 23,
//                 22,
//                 21,
//                 21,
//                 21,
//                 22,
//                 21,
//                 20,
//                 22,
//                 23,
//                 23,
//                 23,
//                 23,
//                 23,
//                 23,
//                 23,
//                 24,
//                 23,
//                 25,
//                 25,
//                 24,
//                 23,
//                 23,
//                 22,
//                 21,
//                 20,
//                 34,
//                 33,
//                 32,
//                 32,
//                 32,
//                 32,
//                 33,
//                 33,
//                 33,
//                 33,
//                 32,
//                 31,
//                 31,
//                 30,
//                 30,
//                 30,
//                 30,
//                 29,
//                 29,
//                 29,
//                 29,
//                 30,
//                 30,
//                 30,
//                 29,
//                 28,
//                 27,
//                 28,
//                 28,
//                 27,
//                 26,
//                 25,
//                 25,
//                 26,
//                 25,
//                 26,
//                 26,
//                 26,
//                 27,
//                 26,
//                 27,
//                 26,
//                 26,
//                 26,
//                 24,
//                 25,
//                 25,
//                 23,
//                 24,
//                 26,
//                 25,
//                 26,
//                 26,
//                 26,
//                 26,
//                 26,
//                 26,
//                 26,
//                 25,
//                 24,
//                 31,
//                 32,
//                 31,
//                 32,
//                 32,
//                 31,
//                 31,
//                 33,
//                 34,
//                 33,
//                 32,
//                 32,
//                 31,
//                 30,
//                 30,
//                 32,
//                 32,
//                 33,
//                 33,
//                 32,
//                 31,
//                 32,
//                 34,
//                 34,
//                 34,
//                 33,
//                 32,
//                 31,
//                 32,
//                 30,
//                 32,
//                 31,
//                 32,
//                 33,
//                 32,
//                 31,
//                 31,
//                 32,
//                 34,
//                 34,
//                 33,
//                 32,
//                 31,
//                 32,
//                 32,
//                 31,
//                 30,
//                 30,
//                 32,
//                 33,
//                 33,
//                 32,
//                 32,
//                 32,
//                 33,
//                 32,
//                 33,
//                 33,
//                 33,
//                 32,
//                 31,
//                 31,
//                 31,
//                 31,
//                 32,
//                 31,
//                 31,
//                 30,
//                 30,
//                 30,
//                 30,
//                 30,
//                 29,
//                 31,
//                 31,
//                 32,
//                 32,
//                 31,
//                 31,
//                 33,
//                 34,
//                 33,
//                 32,
//                 32,
//                 31,
//                 30,
//                 30,
//                 30,
//                 30,
//                 30,
//                 30,
//                 30,
//                 29,
//                 28,
//                 28,
//                 28,
//                 27,
//                 26,
//                 27,
//                 26,
//                 26,
//                 26,
//                 26,
//                 25,
//                 24,
//                 23,
//                 26,
//                 25,
//                 25,
//                 25,
//                 25,
//                 27,
//                 26,
//                 25,
//                 25,
//                 24,
//                 24,
//                 23,
//                 23,
//                 22,
//                 23,
//                 23,
//                 24,
//                 24,
//                 23,
//                 23,
//                 22,
//                 28,
//                 27,
//                 29,
//                 30,
//                 32,
//                 31,
//                 31,
//                 30,
//                 29,
//                 29,
//                 29,
//                 31,
//                 30,
//                 30,
//                 29,
//                 28,
//                 28,
//                 29,
//                 29,
//                 30,
//                 30,
//                 28,
//                 29,
//                 30,
//                 30,
//                 29,
//                 29,
//                 29,
//                 28,
//                 28,
//                 27,
//                 27,
//                 27,
//                 27,
//                 26,
//                 27,
//                 28,
//                 27,
//                 26,
//                 28,
//                 29,
//                 29,
//                 28,
//                 28,
//                 28,
//                 27,
//                 29,
//                 28,
//                 29,
//                 29,
//                 29,
//                 29,
//                 29,
//                 29,
//                 28,
//                 28,
//                 28,
//                 27,
//                 28,
//                 29,
//                 29,
//                 28,
//                 28,
//                 27,
//                 26,
//                 27,
//                 26,
//                 25,
//                 24,
//                 26,
//                 27,
//                 26,
//                 27,
//                 27,
//                 27,
//                 27,
//                 26,
//                 25,
//                 25,
//                 25,
//                 25,
//                 26,
//                 26,
//                 26,
//                 26,
//                 25,
//                 26,
//                 26,
//                 25,
//                 24,
//                 26,
//                 28,
//                 30,
//                 31,
//                 31,
//                 31,
//                 31,
//                 32,
//                 32,
//                 32,
//                 31,
//                 30,
//                 30,
//                 30,
//                 31,
//                 31,
//                 30,
//                 29,
//                 29,
//                 29,
//                 28,
//                 27,
//                 26,
//                 27,
//                 28,
//                 28,
//                 27,
//                 27,
//                 27,
//                 26,
//                 25,
//                 24,
//                 25,
//                 26,
//                 26,
//                 26,
//                 26,
//                 28,
//                 27,
//                 26,
//                 26,
//                 26,
//                 26,
//                 25,
//                 25,
//                 25,
//                 25,
//                 24,
//                 26,
//                 26,
//                 26,
//                 26,
//                 27,
//                 28,
//                 29,
//                 28,
//                 29,
//                 29,
//                 28,
//                 28,
//                 27,
//                 26,
//                 26,
//                 25,
//                 25,
//                 26,
//                 26,
//                 25,
//                 24,
//                 23,
//                 23,
//                 24,
//                 24,
//                 23,
//                 23,
//                 22,
//                 22,
//                 21,
//                 21,
//                 20,
//                 20,
//                 19,
//                 18,
//                 17,
//                 19,
//                 19,
//                 19,
//                 18,
//                 18,
//                 17,
//                 16,
//                 15,
//                 24,
//                 24,
//                 23,
//                 22,
//                 21,
//                 21,
//                 21,
//                 21,
//                 22,
//                 21,
//                 20,
//                 20,
//                 20,
//                 20,
//                 20,
//                 20,
//                 20,
//                 21,
//                 21,
//                 20,
//                 19,
//                 19,
//                 19,
//                 18,
//                 17,
//                 16,
//                 21,
//                 21,
//                 20,
//                 22,
//                 21,
//                 22,
//                 22,
//                 22,
//                 22,
//                 21,
//                 21,
//                 21,
//                 21,
//                 21,
//                 21,
//                 20,
//                 20,
//                 22,
//                 22,
//                 21,
//                 21,
//                 22,
//                 22,
//                 21,
//                 21,
//                 20,
//                 20,
//                 21,
//                 21,
//                 21,
//                 21,
//                 21,
//                 20,
//                 20,
//                 20,
//                 20,
//                 20,
//                 19,
//                 21,
//                 21,
//                 22,
//                 22,
//                 21,
//                 20,
//                 20,
//                 20,
//                 19,
//                 20,
//                 20,
//                 19,
//                 19,
//                 19,
//                 20,
//                 19,
//                 20,
//                 21,
//                 21,
//                 21,
//                 21,
//                 21,
//                 21,
//                 23,
//                 23,
//                 23,
//                 23,
//                 23,
//                 22,
//                 21,
//                 20,
//                 19,
//                 18,
//                 20,
//                 20,
//                 19,
//                 18,
//                 18,
//                 20,
//                 21,
//                 21,
//                 21,
//                 21,
//                 20,
//                 19,
//                 19,
//                 19,
//                 19,
//                 19,
//                 19,
//                 18,
//                 17,
//                 16,
//                 18,
//                 17,
//                 18,
//                 19,
//                 19,
//                 18,
//                 18,
//                 20,
//                 20,
//                 20,
//                 19,
//                 19,
//                 18,
//                 17,
//                 17,
//                 17,
//                 17,
//                 16,
//                 17,
//                 19,
//                 20,
//                 21,
//                 20,
//                 21,
//                 20,
//                 20,
//                 20,
//                 20,
//                 20,
//                 19,
//                 20,
//                 21,
//                 20,
//                 20,
//                 20,
//                 21,
//                 22,
//                 21,
//                 20,
//                 19,
//                 19,
//                 19,
//                 19,
//                 20,
//                 20,
//                 20,
//                 20,
//                 19,
//                 19,
//                 19,
//                 19,
//                 19,
//                 18,
//                 19,
//                 19,
//                 19,
//                 20,
//                 21,
//                 20,
//                 20,
//                 20,
//                 20,
//                 19,
//                 19,
//                 19,
//                 20,
//                 20,
//                 19,
//                 19,
//                 19,
//                 21,
//                 21,
//                 20,
//                 19,
//                 18,
//                 18,
//                 17,
//                 16,
//                 15,
//                 17,
//                 18,
//                 19,
//                 18,
//                 17,
//                 17,
//                 17,
//                 17,
//                 17,
//                 18,
//                 18,
//                 18,
//                 18,
//                 17,
//                 18,
//                 19,
//                 19,
//                 18,
//                 17,
//                 19,
//                 19,
//                 19,
//                 19,
//                 19,
//                 18,
//                 18,
//                 18,
//                 18,
//                 19,
//                 18,
//                 18,
//                 17,
//                 17,
//                 17,
//                 19,
//                 19,
//                 18,
//                 18,
//                 18,
//                 17,
//                 16,
//                 15,
//                 15,
//                 16,
//                 18,
//                 17,
//                 16,
//                 16,
//                 16,
//                 15,
//                 14,
//                 17,
//                 16,
//                 15,
//                 15,
//                 15,
//                 15,
//                 14,
//                 13,
//                 14,
//                 14,
//                 14,
//                 16,
//                 16,
//                 16,
//                 15,
//                 15,
//                 14,
//                 13,
//                 14,
//                 13,
//                 13,
//                 13,
//                 12,
//                 12,
//                 12,
//                 12,
//                 11,
//                 14,
//                 13,
//                 12,
//                 15,
//                 16,
//                 15,
//                 14,
//                 13,
//                 13,
//                 13,
//                 13,
//                 14,
//                 13,
//                 13,
//                 12,
//                 11,
//                 16,
//                 15,
//                 15,
//                 15,
//                 17,
//                 18,
//                 18,
//                 20,
//                 19,
//                 19,
//                 19,
//                 17,
//                 18,
//                 17,
//                 16,
//                 17,
//                 18,
//                 19,
//                 20,
//                 19,
//                 19,
//                 19,
//                 21,
//                 22,
//                 21,
//                 20,
//                 20,
//                 19,
//                 18,
//                 17,
//                 16,
//                 19,
//                 19,
//                 20,
//                 19,
//                 19,
//                 19,
//                 21,
//                 22,
//                 21,
//                 20,
//                 20,
//                 19,
//                 18,
//                 18,
//                 17,
//                 16,
//                 17,
//                 18,
//                 18,
//                 17,
//                 18,
//                 18,
//                 18,
//                 20,
//                 21,
//                 20,
//                 19,
//                 19,
//                 18,
//                 17,
//                 16,
//                 15,
//                 15,
//                 16,
//                 16,
//                 17,
//                 18,
//                 19,
//                 20,
//                 17,
//                 18,
//                 17,
//                 20,
//                 20,
//                 19,
//                 18,
//                 17,
//                 16,
//                 16,
//                 15,
//                 16,
//                 15,
//                 14,
//                 13,
//                 16,
//                 18,
//                 18,
//                 19,
//                 18,
//                 18,
//                 18,
//                 20,
//                 21,
//                 20,
//                 19,
//                 19,
//                 18,
//                 17,
//                 17,
//                 16,
//                 16,
//                 16,
//                 17,
//                 16,
//                 16,
//                 16,
//                 18,
//                 19,
//                 18,
//                 17,
//                 17,
//                 16,
//                 15,
//                 17,
//                 17,
//                 16,
//                 16,
//                 16,
//                 17,
//                 16,
//                 16,
//                 16,
//                 18,
//                 19,
//                 18,
//                 17,
//                 17,
//                 16,
//                 15,
//                 14,
//                 16,
//                 17,
//                 16,
//                 16,
//                 16,
//                 17,
//                 16,
//                 16,
//                 16,
//                 18,
//                 19,
//                 18,
//                 17,
//                 17,
//                 16,
//                 15,
//                 14,
//                 13,
//                 13,
//                 13,
//                 12,
//                 11,
//                 16,
//                 16,
//                 17,
//                 16,
//                 16,
//                 15,
//                 15,
//                 17,
//                 18,
//                 20,
//                 21,
//                 22,
//                 23,
//                 22,
//                 23,
//                 23,
//                 22,
//                 22,
//                 20,
//                 20,
//                 20,
//                 20,
//                 20,
//                 19,
//                 19,
//                 26,
//                 24,
//                 23,
//                 23,
//                 22,
//                 20,
//                 20,
//                 21,
//                 19,
//                 19,
//                 18,
//                 18,
//                 19,
//                 18,
//                 17,
//                 18,
//                 18,
//                 17,
//                 17,
//                 17,
//                 18,
//                 19,
//                 19,
//                 19,
//                 18,
//                 17,
//                 17,
//                 18,
//                 19,
//                 19,
//                 20,
//                 20,
//                 19,
//                 19,
//                 19,
//                 19,
//                 18,
//                 18,
//                 19,
//                 18,
//                 17,
//                 16,
//                 17,
//                 18,
//                 19,
//                 19,
//                 19,
//                 19,
//                 20,
//                 20,
//                 20,
//                 20,
//                 20,
//                 18,
//                 18,
//                 17,
//                 16,
//                 15,
//                 14,
//                 14,
//                 13,
//                 14,
//                 14,
//                 15,
//                 15,
//                 14,
//                 14,
//                 14,
//                 14,
//                 14,
//                 15,
//                 15,
//                 14,
//                 14,
//                 14,
//                 15,
//                 16,
//                 17,
//                 16,
//                 16,
//                 17,
//                 16,
//                 15,
//                 14,
//                 16,
//                 16,
//                 16,
//                 15,
//                 14,
//                 13,
//                 14,
//                 15,
//                 14,
//                 13,
//                 13,
//                 12,
//                 16,
//                 16,
//                 15,
//                 17,
//                 18,
//                 20,
//                 20,
//                 23,
//                 22,
//                 22,
//                 22,
//                 22,
//                 22,
//                 22,
//                 21,
//                 20,
//                 21,
//                 21,
//                 21,
//                 20,
//                 20,
//                 20,
//                 19,
//                 19,
//                 18,
//                 17,
//                 16,
//                 16,
//                 17,
//                 17,
//                 16,
//                 18,
//                 17,
//                 16,
//                 15,
//                 15,
//                 15,
//                 15,
//                 16,
//                 16,
//                 15,
//                 15,
//                 15,
//                 15,
//                 15,
//                 16,
//                 15,
//                 15,
//                 17,
//                 17,
//                 16,
//                 15,
//                 15,
//                 15,
//                 14,
//                 14,
//                 15,
//                 16,
//                 16,
//                 16,
//                 16,
//                 15,
//                 15,
//                 15,
//                 15,
//                 15,
//                 14,
//                 13,
//                 12,
//                 11,
//                 13,
//                 13,
//                 13,
//                 12,
//                 11,
//                 11,
//                 10,
//                 12,
//                 13,
//                 13,
//                 12,
//                 12,
//                 12,
//                 13,
//                 12,
//                 12,
//                 12,
//                 14,
//                 14,
//                 14,
//                 13,
//                 13,
//                 12,
//                 11,
//                 12,
//                 13,
//                 13,
//                 12,
//                 12,
//                 12,
//                 13,
//                 12,
//                 12,
//                 12,
//                 14,
//                 14,
//                 14,
//                 13,
//                 13,
//                 12,
//                 11,
//                 10,
//                 9,
//                 10,
//                 10,
//                 10,
//                 9,
//                 8,
//                 8,
//                 7,
//                 7,
//                 6,
//                 8,
//                 7,
//                 7,
//                 6,
//                 6,
//                 5,
//                 7,
//                 8,
//                 7,
//                 6,
//                 6,
//                 5,
//                 4,
//                 5,
//                 5,
//                 4,
//                 4,
//                 4,
//                 3,
//                 9,
//                 9,
//                 9,
//                 14,
//                 16,
//                 16,
//                 14,
//                 13,
//                 12,
//                 13,
//                 11,
//                 12,
//                 13,
//                 13,
//                 15,
//                 14,
//                 13,
//                 13,
//                 12,
//                 11,
//                 11,
//                 10,
//                 13,
//                 14,
//                 15,
//                 16,
//                 15,
//                 15,
//                 15,
//                 14,
//                 15,
//                 14,
//                 15,
//                 15,
//                 16,
//                 17,
//                 17,
//                 18,
//                 19,
//                 20,
//                 19,
//                 21,
//                 19,
//                 20,
//                 20,
//                 19,
//                 18,
//                 18,
//                 18,
//                 17,
//                 17,
//                 17,
//                 16,
//                 16,
//                 16,
//                 13,
//                 12,
//                 11,
//                 11,
//                 12,
//                 14,
//                 13,
//                 12,
//                 13,
//                 15,
//                 14,
//                 13,
//                 13,
//                 13,
//                 12,
//                 12,
//                 11,
//                 11,
//                 11,
//                 13,
//                 12,
//                 12,
//                 13,
//                 15,
//                 14,
//                 13,
//                 13,
//                 13,
//                 12,
//                 11,
//                 11,
//                 11,
//                 11,
//                 10,
//                 10,
//                 9,
//                 11,
//                 10,
//                 11,
//                 11,
//                 12,
//                 14,
//                 13,
//                 12,
//                 12,
//                 12,
//                 11,
//                 11,
//                 10,
//                 9,
//                 8,
//                 9,
//                 9,
//                 9,
//                 10,
//                 9,
//                 9,
//                 9,
//                 11,
//                 11,
//                 11,
//                 10,
//                 10,
//                 9,
//                 8,
//                 7,
//                 7,
//                 6,
//                 5,
//                 4,
//                 4,
//                 3,
//                 4,
//                 5,
//                 6,
//                 5,
//                 4,
//                 4,
//                 6,
//                 5,
//                 5,
//                 7,
//                 9,
//                 9,
//                 7,
//                 8,
//                 7,
//                 6,
//                 5,
//                 4,
//                 3,
//                 4,
//                 3,
//                 3,
//                 4,
//                 3,
//                 3,
//                 5,
//                 7,
//                 6,
//                 5,
//                 5,
//                 5,
//                 4,
//                 4,
//                 3,
//                 2,
//                 7,
//                 6,
//                 13,
//                 12,
//                 12,
//                 12,
//                 12,
//                 12,
//                 12,
//                 12,
//                 13,
//                 14,
//                 15,
//                 14,
//                 15,
//                 14,
//                 13,
//                 13,
//                 13,
//                 12,
//                 11,
//                 11,
//                 11,
//                 11,
//                 10,
//                 9,
//                 8,
//                 13,
//                 11,
//                 11,
//                 13,
//                 12,
//                 11,
//                 11,
//                 11,
//                 11,
//                 10,
//                 9,
//                 9,
//                 9,
//                 10,
//                 10,
//                 11,
//                 10,
//                 9,
//                 8,
//                 9,
//                 10,
//                 10,
//                 10,
//                 10,
//                 10,
//                 11,
//                 10,
//                 10,
//                 10,
//                 11,
//                 10,
//                 10,
//                 11,
//                 11,
//                 12,
//                 12,
//                 12,
//                 11,
//                 10,
//                 12,
//                 13,
//                 12,
//                 12,
//                 12,
//                 12,
//                 12,
//                 13,
//                 11,
//                 12,
//                 11,
//                 10,
//                 9,
//                 10,
//                 9,
//                 8,
//                 9,
//                 8,
//                 7,
//                 6,
//                 6,
//                 6,
//                 5,
//                 5,
//                 4,
//                 5,
//                 5,
//                 5,
//                 4,
//                 4,
//                 5,
//                 5,
//                 5,
//                 5,
//                 5,
//                 4,
//                 3,
//                 2,
//                 7,
//                 7,
//                 7,
//                 9,
//                 9,
//                 8,
//                 8,
//                 7,
//                 7,
//                 7,
//                 7,
//                 7,
//                 7,
//                 7,
//                 8,
//                 7,
//                 7,
//                 7,
//                 7,
//                 7,
//                 6,
//                 6,
//                 6,
//                 6,
//                 5,
//                 4,
//                 4,
//                 5,
//                 5,
//                 5,
//                 6,
//                 6,
//                 6,
//                 5,
//                 5,
//                 5,
//                 5,
//                 5,
//                 5,
//                 5,
//                 4,
//                 3,
//                 2,
//                 4,
//                 4,
//                 3,
//                 3,
//                 3,
//                 3,
//                 3,
//                 4,
//                 3,
//                 2,
//                 2,
//                 1,
//                 22,
//                 22,
//                 22,
//                 22,
//                 22,
//                 21,
//                 20,
//                 19,
//                 21,
//                 21,
//                 21,
//                 21,
//                 20,
//                 22,
//                 19,
//                 21,
//                 21,
//                 21,
//                 20,
//                 20,
//                 20,
//                 20,
//                 20,
//                 17,
//                 18,
//                 20,
//                 21,
//                 22,
//                 22,
//                 20,
//                 20,
//                 19,
//                 19,
//                 20,
//                 20,
//                 21,
//                 20,
//                 20,
//                 19,
//                 18,
//                 18,
//                 17,
//                 17,
//                 16,
//                 17,
//                 21,
//                 21,
//                 21,
//                 20,
//                 20,
//                 22,
//                 20,
//                 19,
//                 18,
//                 19,
//                 20,
//                 19,
//                 19,
//                 20,
//                 20,
//                 21,
//                 21,
//                 22,
//                 23,
//                 23,
//                 23,
//                 22,
//                 23,
//                 23,
//                 23,
//                 22,
//                 21,
//                 21,
//                 21,
//                 21,
//                 22,
//                 23,
//                 23,
//                 23,
//                 23,
//                 22,
//                 22,
//                 22,
//                 21,
//                 20,
//                 21,
//                 20,
//                 19,
//                 19,
//                 18,
//                 17,
//                 17,
//                 17,
//                 16,
//                 16,
//                 15,
//                 16,
//                 16,
//                 17,
//                 17,
//                 18,
//                 18,
//                 17,
//                 20,
//                 20,
//                 19,
//                 19,
//                 19,
//                 18,
//                 18,
//                 19,
//                 18,
//                 19,
//                 18,
//                 18,
//                 18,
//                 17,
//                 16,
//                 17,
//                 17,
//                 17,
//                 18,
//                 17,
//                 17,
//                 17,
//                 17,
//                 18,
//                 17,
//                 16,
//                 16,
//                 15,
//                 16,
//                 17,
//                 17,
//                 18,
//                 19,
//                 17,
//                 19,
//                 19,
//                 19,
//                 20,
//                 21,
//                 20,
//                 20,
//                 21,
//                 21,
//                 19,
//                 18,
//                 18,
//                 18,
//                 19,
//                 19,
//                 19,
//                 19,
//                 19,
//                 19,
//                 19,
//                 19,
//                 20,
//                 20,
//                 20,
//                 19,
//                 20,
//                 21,
//                 21,
//                 20,
//                 20,
//                 19,
//                 18,
//                 17,
//                 17,
//                 16,
//                 17,
//                 15,
//                 15,
//                 15,
//                 15,
//                 14,
//                 13,
//                 14,
//                 13,
//                 13,
//                 12,
//                 12,
//                 13,
//                 13,
//                 13,
//                 13,
//                 14,
//                 13,
//                 13,
//                 13,
//                 13,
//                 13,
//                 13,
//                 13,
//                 13,
//                 14,
//                 13,
//                 13,
//                 14,
//                 14,
//                 15,
//                 14,
//                 14,
//                 13,
//                 12,
//                 11,
//                 11,
//                 11,
//                 10,
//                 10,
//                 9,
//                 9,
//                 8,
//                 7,
//                 6,
//                 5,
//                 4,
//                 5,
//                 6,
//                 6,
//                 6,
//                 7,
//                 6,
//                 6,
//                 6,
//                 6,
//                 5,
//                 6,
//                 8,
//                 10,
//                 10,
//                 11,
//                 10,
//                 9,
//                 11,
//                 10,
//                 9,
//                 10,
//                 10,
//                 9,
//                 9,
//                 9,
//                 9,
//                 8,
//                 8,
//                 7,
//                 6,
//                 5,
//                 5,
//                 4,
//                 4,
//                 4,
//                 3,
//                 4,
//                 4,
//                 5,
//                 6,
//                 6,
//                 5,
//                 5,
//                 5,
//                 6,
//                 7,
//                 6,
//                 6,
//                 7,
//                 6,
//                 6,
//                 5,
//                 5,
//                 4,
//                 3,
//                 2,
//                 2,
//                 2,
//                 2,
//                 2,
//                 1,
//                 1,
//                 1,
//                 2,
//                 5,
//                 4,
//                 3,
//                 1,
//                 0
//             ],
//             "length": 2456
//         },
//         "state": 2000
// }
//     return Result
// })