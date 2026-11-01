import React from "react";
import { useCurrentFrame } from "remotion";
import { theme } from "../theme";

interface WordTiming {
  text: string;
  start: number;
  end: number;
}

interface SubtitleChunk {
  from: number;
  to: number;
  words: WordTiming[];
}

export const SUBTITLE_CHUNKS: SubtitleChunk[] = [
  {
    "from": 0,
    "to": 259,
    "words": [
      {
        "text": "BẠN",
        "start": 6,
        "end": 13
      },
      {
        "text": "ĐANG",
        "start": 14,
        "end": 21
      },
      {
        "text": "LÀM",
        "start": 22,
        "end": 29
      },
      {
        "text": "VIỆC",
        "start": 30,
        "end": 37
      },
      {
        "text": "MỘT",
        "start": 38,
        "end": 45
      },
      {
        "text": "MÌNH",
        "start": 46,
        "end": 53
      },
      {
        "text": "VÀ",
        "start": 54,
        "end": 61
      },
      {
        "text": "KIỆT",
        "start": 62,
        "end": 69
      },
      {
        "text": "SỨC",
        "start": 70,
        "end": 77
      },
      {
        "text": "VÌ",
        "start": 78,
        "end": 85
      },
      {
        "text": "PHẢI",
        "start": 86,
        "end": 93
      },
      {
        "text": "VỪA",
        "start": 94,
        "end": 101
      },
      {
        "text": "VIẾT",
        "start": 102,
        "end": 109
      },
      {
        "text": "BÀI",
        "start": 110,
        "end": 117
      },
      {
        "text": "LÀM",
        "start": 118,
        "end": 125
      },
      {
        "text": "SLIDE",
        "start": 126,
        "end": 133
      },
      {
        "text": "LẠI",
        "start": 134,
        "end": 141
      },
      {
        "text": "VỪA",
        "start": 142,
        "end": 149
      },
      {
        "text": "TỰ",
        "start": 150,
        "end": 157
      },
      {
        "text": "DỰNG",
        "start": 158,
        "end": 165
      },
      {
        "text": "VIDEO",
        "start": 166,
        "end": 173
      },
      {
        "text": "DỰ",
        "start": 174,
        "end": 181
      },
      {
        "text": "ÁN",
        "start": 182,
        "end": 189
      },
      {
        "text": "ORKAS",
        "start": 190,
        "end": 197
      },
      {
        "text": "GẦN",
        "start": 198,
        "end": 205
      },
      {
        "text": "BẢY",
        "start": 206,
        "end": 213
      },
      {
        "text": "NGHÌN",
        "start": 214,
        "end": 221
      },
      {
        "text": "SAO",
        "start": 222,
        "end": 229
      },
      {
        "text": "NÀY",
        "start": 230,
        "end": 237
      },
      {
        "text": "SẼ",
        "start": 238,
        "end": 245
      },
      {
        "text": "GIẢI",
        "start": 246,
        "end": 253
      },
      {
        "text": "PHÓNG",
        "start": 254,
        "end": 259
      },
      {
        "text": "BẠN",
        "start": 253,
        "end": 259
      }
    ]
  },
  {
    "from": 259,
    "to": 549,
    "words": [
      {
        "text": "NGƯỜI",
        "start": 267,
        "end": 274
      },
      {
        "text": "ĐI",
        "start": 275,
        "end": 282
      },
      {
        "text": "LÀM",
        "start": 283,
        "end": 290
      },
      {
        "text": "THƯỜNG",
        "start": 291,
        "end": 298
      },
      {
        "text": "PHẢI",
        "start": 299,
        "end": 306
      },
      {
        "text": "THUÊ",
        "start": 307,
        "end": 314
      },
      {
        "text": "NGOÀI",
        "start": 315,
        "end": 322
      },
      {
        "text": "TỐN",
        "start": 323,
        "end": 330
      },
      {
        "text": "HÀNG",
        "start": 331,
        "end": 338
      },
      {
        "text": "CHỤC",
        "start": 339,
        "end": 346
      },
      {
        "text": "TRIỆU",
        "start": 347,
        "end": 354
      },
      {
        "text": "MỖI",
        "start": 355,
        "end": 362
      },
      {
        "text": "THÁNG",
        "start": 363,
        "end": 370
      },
      {
        "text": "NẾU",
        "start": 371,
        "end": 378
      },
      {
        "text": "TỰ",
        "start": 379,
        "end": 386
      },
      {
        "text": "LÀM",
        "start": 387,
        "end": 394
      },
      {
        "text": "BẰNG",
        "start": 395,
        "end": 402
      },
      {
        "text": "CÁC",
        "start": 403,
        "end": 410
      },
      {
        "text": "CÔNG",
        "start": 411,
        "end": 418
      },
      {
        "text": "CỤ",
        "start": 419,
        "end": 426
      },
      {
        "text": "CHAT",
        "start": 427,
        "end": 434
      },
      {
        "text": "RIÊNG",
        "start": 435,
        "end": 442
      },
      {
        "text": "LẺ",
        "start": 443,
        "end": 450
      },
      {
        "text": "BẠN",
        "start": 451,
        "end": 458
      },
      {
        "text": "PHẢI",
        "start": 459,
        "end": 466
      },
      {
        "text": "SAO",
        "start": 467,
        "end": 474
      },
      {
        "text": "CHÉP",
        "start": 475,
        "end": 482
      },
      {
        "text": "QUA",
        "start": 483,
        "end": 490
      },
      {
        "text": "LẠI",
        "start": 491,
        "end": 498
      },
      {
        "text": "CỰC",
        "start": 499,
        "end": 506
      },
      {
        "text": "KỲ",
        "start": 507,
        "end": 514
      },
      {
        "text": "MỆT",
        "start": 515,
        "end": 522
      },
      {
        "text": "MỎI",
        "start": 523,
        "end": 530
      }
    ]
  },
  {
    "from": 549,
    "to": 841,
    "words": [
      {
        "text": "ORKAS",
        "start": 555,
        "end": 562
      },
      {
        "text": "CHÍNH",
        "start": 563,
        "end": 570
      },
      {
        "text": "LÀ",
        "start": 571,
        "end": 578
      },
      {
        "text": "MỘT",
        "start": 580,
        "end": 587
      },
      {
        "text": "CÔNG",
        "start": 588,
        "end": 595
      },
      {
        "text": "TY",
        "start": 596,
        "end": 603
      },
      {
        "text": "THU",
        "start": 604,
        "end": 611
      },
      {
        "text": "NHỎ",
        "start": 612,
        "end": 619
      },
      {
        "text": "NGAY",
        "start": 620,
        "end": 627
      },
      {
        "text": "TRÊN",
        "start": 629,
        "end": 636
      },
      {
        "text": "MÁY",
        "start": 637,
        "end": 644
      },
      {
        "text": "TÍNH",
        "start": 645,
        "end": 652
      },
      {
        "text": "CỦA",
        "start": 653,
        "end": 660
      },
      {
        "text": "BẠN",
        "start": 661,
        "end": 668
      },
      {
        "text": "ỨNG",
        "start": 670,
        "end": 677
      },
      {
        "text": "DỤNG",
        "start": 678,
        "end": 685
      },
      {
        "text": "GOM",
        "start": 686,
        "end": 693
      },
      {
        "text": "SẴN",
        "start": 694,
        "end": 701
      },
      {
        "text": "MƯỜI",
        "start": 702,
        "end": 709
      },
      {
        "text": "SÁU",
        "start": 710,
        "end": 717
      },
      {
        "text": "NHÂN",
        "start": 719,
        "end": 726
      },
      {
        "text": "VIÊN",
        "start": 727,
        "end": 734
      },
      {
        "text": "ẢO",
        "start": 735,
        "end": 742
      },
      {
        "text": "CHUYÊN",
        "start": 743,
        "end": 750
      },
      {
        "text": "LÀM",
        "start": 751,
        "end": 758
      },
      {
        "text": "SLIDE",
        "start": 760,
        "end": 767
      },
      {
        "text": "VIẾT",
        "start": 768,
        "end": 775
      },
      {
        "text": "VĂN",
        "start": 776,
        "end": 783
      },
      {
        "text": "BẢN",
        "start": 784,
        "end": 791
      },
      {
        "text": "VÀ",
        "start": 792,
        "end": 799
      },
      {
        "text": "DỰNG",
        "start": 800,
        "end": 807
      },
      {
        "text": "HÌNH",
        "start": 809,
        "end": 816
      },
      {
        "text": "ẢNH",
        "start": 817,
        "end": 824
      }
    ]
  },
  {
    "from": 841,
    "to": 1126,
    "words": [
      {
        "text": "BẠN",
        "start": 847,
        "end": 854
      },
      {
        "text": "CHỈ",
        "start": 855,
        "end": 862
      },
      {
        "text": "CẦN",
        "start": 863,
        "end": 870
      },
      {
        "text": "NÉM",
        "start": 871,
        "end": 878
      },
      {
        "text": "YÊU",
        "start": 879,
        "end": 886
      },
      {
        "text": "CẦU",
        "start": 887,
        "end": 894
      },
      {
        "text": "CÔNG",
        "start": 895,
        "end": 902
      },
      {
        "text": "VIỆC",
        "start": 903,
        "end": 910
      },
      {
        "text": "VÀO",
        "start": 911,
        "end": 918
      },
      {
        "text": "NGƯỜI",
        "start": 919,
        "end": 926
      },
      {
        "text": "CHỈ",
        "start": 927,
        "end": 934
      },
      {
        "text": "HUY",
        "start": 935,
        "end": 942
      },
      {
        "text": "ẢO",
        "start": 943,
        "end": 950
      },
      {
        "text": "SẼ",
        "start": 951,
        "end": 958
      },
      {
        "text": "TỰ",
        "start": 959,
        "end": 966
      },
      {
        "text": "CHIA",
        "start": 967,
        "end": 974
      },
      {
        "text": "NHỎ",
        "start": 975,
        "end": 982
      },
      {
        "text": "CÁC",
        "start": 983,
        "end": 990
      },
      {
        "text": "BƯỚC",
        "start": 991,
        "end": 998
      },
      {
        "text": "ĐỘI",
        "start": 999,
        "end": 1006
      },
      {
        "text": "NGŨ",
        "start": 1007,
        "end": 1014
      },
      {
        "text": "NHÂN",
        "start": 1015,
        "end": 1022
      },
      {
        "text": "VIÊN",
        "start": 1023,
        "end": 1030
      },
      {
        "text": "TỰ",
        "start": 1031,
        "end": 1038
      },
      {
        "text": "ĐỘNG",
        "start": 1039,
        "end": 1046
      },
      {
        "text": "LÀM",
        "start": 1047,
        "end": 1054
      },
      {
        "text": "VIỆC",
        "start": 1055,
        "end": 1062
      },
      {
        "text": "VÀ",
        "start": 1063,
        "end": 1070
      },
      {
        "text": "GỬI",
        "start": 1071,
        "end": 1078
      },
      {
        "text": "LẠI",
        "start": 1079,
        "end": 1086
      },
      {
        "text": "TỆP",
        "start": 1087,
        "end": 1094
      },
      {
        "text": "KẾT",
        "start": 1095,
        "end": 1102
      },
      {
        "text": "QUẢ",
        "start": 1103,
        "end": 1110
      }
    ]
  },
  {
    "from": 1126,
    "to": 1418,
    "words": [
      {
        "text": "VÍ",
        "start": 1132,
        "end": 1139
      },
      {
        "text": "DỤ",
        "start": 1140,
        "end": 1147
      },
      {
        "text": "BẠN",
        "start": 1148,
        "end": 1155
      },
      {
        "text": "CẦN",
        "start": 1156,
        "end": 1163
      },
      {
        "text": "BẢN",
        "start": 1164,
        "end": 1171
      },
      {
        "text": "THUYẾT",
        "start": 1172,
        "end": 1179
      },
      {
        "text": "TRÌNH",
        "start": 1180,
        "end": 1187
      },
      {
        "text": "TỪ",
        "start": 1188,
        "end": 1195
      },
      {
        "text": "TÀI",
        "start": 1196,
        "end": 1203
      },
      {
        "text": "LIỆU",
        "start": 1204,
        "end": 1211
      },
      {
        "text": "DÀI",
        "start": 1212,
        "end": 1219
      },
      {
        "text": "BA",
        "start": 1220,
        "end": 1227
      },
      {
        "text": "MƯƠI",
        "start": 1228,
        "end": 1235
      },
      {
        "text": "TRANG",
        "start": 1236,
        "end": 1243
      },
      {
        "text": "TRỢ",
        "start": 1244,
        "end": 1251
      },
      {
        "text": "LÝ",
        "start": 1252,
        "end": 1259
      },
      {
        "text": "CHỈ",
        "start": 1260,
        "end": 1267
      },
      {
        "text": "HUY",
        "start": 1268,
        "end": 1275
      },
      {
        "text": "TỰ",
        "start": 1276,
        "end": 1283
      },
      {
        "text": "GIAO",
        "start": 1284,
        "end": 1291
      },
      {
        "text": "VIỆC",
        "start": 1292,
        "end": 1299
      },
      {
        "text": "CHO",
        "start": 1300,
        "end": 1307
      },
      {
        "text": "THỢ",
        "start": 1308,
        "end": 1315
      },
      {
        "text": "LÀM",
        "start": 1316,
        "end": 1323
      },
      {
        "text": "SLIDE",
        "start": 1324,
        "end": 1331
      },
      {
        "text": "VÀ",
        "start": 1332,
        "end": 1339
      },
      {
        "text": "TRẢ",
        "start": 1340,
        "end": 1347
      },
      {
        "text": "RA",
        "start": 1348,
        "end": 1355
      },
      {
        "text": "BÀI",
        "start": 1356,
        "end": 1363
      },
      {
        "text": "TRÌNH",
        "start": 1364,
        "end": 1371
      },
      {
        "text": "CHIẾU",
        "start": 1372,
        "end": 1379
      },
      {
        "text": "CHỈ",
        "start": 1380,
        "end": 1387
      },
      {
        "text": "TRONG",
        "start": 1388,
        "end": 1395
      },
      {
        "text": "BA",
        "start": 1396,
        "end": 1403
      },
      {
        "text": "PHÚT",
        "start": 1404,
        "end": 1411
      }
    ]
  },
  {
    "from": 1418,
    "to": 1726,
    "words": [
      {
        "text": "TRƯỚC",
        "start": 1424,
        "end": 1432
      },
      {
        "text": "ĐÂY",
        "start": 1432,
        "end": 1440
      },
      {
        "text": "TỰ",
        "start": 1441,
        "end": 1449
      },
      {
        "text": "LÀM",
        "start": 1449,
        "end": 1457
      },
      {
        "text": "MẤT",
        "start": 1458,
        "end": 1466
      },
      {
        "text": "CẢ",
        "start": 1466,
        "end": 1474
      },
      {
        "text": "NGÀY",
        "start": 1475,
        "end": 1483
      },
      {
        "text": "NAY",
        "start": 1483,
        "end": 1491
      },
      {
        "text": "CẢ",
        "start": 1492,
        "end": 1500
      },
      {
        "text": "ĐỘI",
        "start": 1500,
        "end": 1508
      },
      {
        "text": "NGŨ",
        "start": 1509,
        "end": 1517
      },
      {
        "text": "ẢO",
        "start": 1517,
        "end": 1525
      },
      {
        "text": "TỰ",
        "start": 1525,
        "end": 1533
      },
      {
        "text": "PHỐI",
        "start": 1534,
        "end": 1542
      },
      {
        "text": "HỢP",
        "start": 1542,
        "end": 1550
      },
      {
        "text": "LÀM",
        "start": 1551,
        "end": 1559
      },
      {
        "text": "THAY",
        "start": 1559,
        "end": 1567
      },
      {
        "text": "BẠN",
        "start": 1568,
        "end": 1576
      },
      {
        "text": "MỌI",
        "start": 1576,
        "end": 1584
      },
      {
        "text": "TÀI",
        "start": 1585,
        "end": 1593
      },
      {
        "text": "LIỆU",
        "start": 1593,
        "end": 1601
      },
      {
        "text": "CÔNG",
        "start": 1602,
        "end": 1610
      },
      {
        "text": "VIỆC",
        "start": 1610,
        "end": 1618
      },
      {
        "text": "ĐỀU",
        "start": 1619,
        "end": 1627
      },
      {
        "text": "LƯU",
        "start": 1627,
        "end": 1635
      },
      {
        "text": "TRÊN",
        "start": 1635,
        "end": 1643
      },
      {
        "text": "MÁY",
        "start": 1644,
        "end": 1652
      },
      {
        "text": "TÍNH",
        "start": 1652,
        "end": 1660
      },
      {
        "text": "CỦA",
        "start": 1661,
        "end": 1669
      },
      {
        "text": "BẠN",
        "start": 1669,
        "end": 1677
      },
      {
        "text": "KHÔNG",
        "start": 1678,
        "end": 1686
      },
      {
        "text": "SỢ",
        "start": 1686,
        "end": 1694
      },
      {
        "text": "LỘ",
        "start": 1695,
        "end": 1703
      },
      {
        "text": "BÍ",
        "start": 1703,
        "end": 1711
      },
      {
        "text": "MẬT",
        "start": 1712,
        "end": 1720
      }
    ]
  },
  {
    "from": 1726,
    "to": 2005,
    "words": [
      {
        "text": "DỰ",
        "start": 1739,
        "end": 1746
      },
      {
        "text": "ÁN",
        "start": 1747,
        "end": 1754
      },
      {
        "text": "MÃ",
        "start": 1755,
        "end": 1762
      },
      {
        "text": "NGUỒN",
        "start": 1763,
        "end": 1770
      },
      {
        "text": "MỞ",
        "start": 1771,
        "end": 1778
      },
      {
        "text": "HOÀN",
        "start": 1779,
        "end": 1786
      },
      {
        "text": "TOÀN",
        "start": 1787,
        "end": 1794
      },
      {
        "text": "MIỄN",
        "start": 1795,
        "end": 1802
      },
      {
        "text": "PHÍ",
        "start": 1803,
        "end": 1810
      },
      {
        "text": "KHÔNG",
        "start": 1811,
        "end": 1818
      },
      {
        "text": "TỐN",
        "start": 1819,
        "end": 1826
      },
      {
        "text": "MỘT",
        "start": 1827,
        "end": 1834
      },
      {
        "text": "ĐỒNG",
        "start": 1835,
        "end": 1842
      },
      {
        "text": "BẠN",
        "start": 1843,
        "end": 1850
      },
      {
        "text": "CÓ",
        "start": 1851,
        "end": 1858
      },
      {
        "text": "THỂ",
        "start": 1859,
        "end": 1866
      },
      {
        "text": "TẢI",
        "start": 1867,
        "end": 1874
      },
      {
        "text": "NGAY",
        "start": 1875,
        "end": 1882
      },
      {
        "text": "BẢN",
        "start": 1883,
        "end": 1890
      },
      {
        "text": "CÀI",
        "start": 1891,
        "end": 1898
      },
      {
        "text": "ĐẶT",
        "start": 1899,
        "end": 1906
      },
      {
        "text": "CHO",
        "start": 1907,
        "end": 1914
      },
      {
        "text": "MÁY",
        "start": 1915,
        "end": 1922
      },
      {
        "text": "TÍNH",
        "start": 1923,
        "end": 1930
      },
      {
        "text": "MAC",
        "start": 1931,
        "end": 1938
      },
      {
        "text": "HOẶC",
        "start": 1939,
        "end": 1946
      },
      {
        "text": "WINDOWS",
        "start": 1947,
        "end": 1954
      },
      {
        "text": "ĐỂ",
        "start": 1955,
        "end": 1962
      },
      {
        "text": "TRẢI",
        "start": 1963,
        "end": 1970
      },
      {
        "text": "NGHIỆM",
        "start": 1971,
        "end": 1978
      },
      {
        "text": "NGAY",
        "start": 1979,
        "end": 1986
      },
      {
        "text": "HÔM",
        "start": 1987,
        "end": 1994
      },
      {
        "text": "NAY",
        "start": 1995,
        "end": 2002
      }
    ]
  },
  {
    "from": 2005,
    "to": 2251,
    "words": [
      {
        "text": "BẠN",
        "start": 2012,
        "end": 2019
      },
      {
        "text": "NGHĨ",
        "start": 2020,
        "end": 2027
      },
      {
        "text": "CÔNG",
        "start": 2028,
        "end": 2035
      },
      {
        "text": "TY",
        "start": 2037,
        "end": 2044
      },
      {
        "text": "NHÂN",
        "start": 2045,
        "end": 2052
      },
      {
        "text": "VIÊN",
        "start": 2053,
        "end": 2060
      },
      {
        "text": "ẢO",
        "start": 2061,
        "end": 2068
      },
      {
        "text": "NÀY",
        "start": 2069,
        "end": 2076
      },
      {
        "text": "CÓ",
        "start": 2077,
        "end": 2084
      },
      {
        "text": "THAY",
        "start": 2086,
        "end": 2093
      },
      {
        "text": "THẾ",
        "start": 2094,
        "end": 2101
      },
      {
        "text": "NGƯỜI",
        "start": 2102,
        "end": 2109
      },
      {
        "text": "THẬT",
        "start": 2110,
        "end": 2117
      },
      {
        "text": "KHÔNG",
        "start": 2118,
        "end": 2125
      },
      {
        "text": "THAM",
        "start": 2127,
        "end": 2134
      },
      {
        "text": "GIA",
        "start": 2135,
        "end": 2142
      },
      {
        "text": "NHÓM",
        "start": 2143,
        "end": 2150
      },
      {
        "text": "CHAT",
        "start": 2151,
        "end": 2158
      },
      {
        "text": "TELE",
        "start": 2159,
        "end": 2166
      },
      {
        "text": "CỦA",
        "start": 2168,
        "end": 2175
      },
      {
        "text": "MÌNH",
        "start": 2176,
        "end": 2183
      },
      {
        "text": "Ở",
        "start": 2184,
        "end": 2191
      },
      {
        "text": "LINK",
        "start": 2192,
        "end": 2199
      },
      {
        "text": "TRONG",
        "start": 2200,
        "end": 2207
      },
      {
        "text": "BIO",
        "start": 2208,
        "end": 2215
      },
      {
        "text": "TIKTOK",
        "start": 2217,
        "end": 2224
      },
      {
        "text": "NHÉ",
        "start": 2225,
        "end": 2232
      }
    ]
  }
];

export const Captions: React.FC = () => {
  const frame = useCurrentFrame();

  const currentChunk = SUBTITLE_CHUNKS.find(
    (c) => frame >= c.from && frame < c.to
  );
  if (!currentChunk) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 240,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 40px",
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(17, 18, 16, 0.94)",
          border: "2px solid #3A3D34",
          borderRadius: 28,
          padding: "20px 36px",
          maxWidth: 960,
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.8)",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 44,
            fontWeight: 900,
            lineHeight: 1.35,
            fontFamily: theme.typography.rounded,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            columnGap: "18px",
            rowGap: "8px",
          }}
        >
          {currentChunk.words.map((item, idx) => {
            const isCurrent = frame >= item.start && frame < item.end;
            const isSpoken = frame >= item.start;

            const color = isCurrent
              ? theme.colors.accentGold
              : isSpoken
              ? "#FFFFFF"
              : "rgba(255, 255, 255, 0.45)";

            return (
              <span
                key={idx}
                style={{
                  display: "inline-block",
                  margin: "0 2px",
                  color,
                  transform: isCurrent ? "scale(1.14)" : "scale(1)",
                  textShadow: isCurrent
                    ? "0 0 24px rgba(255, 204, 0, 0.95), 0 2px 4px #000"
                    : isSpoken
                    ? "0 2px 4px #000"
                    : "none",
                  transition: "color 0.04s ease, transform 0.04s ease",
                }}
              >
                {item.text}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};
