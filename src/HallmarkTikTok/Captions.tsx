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

export const HALLMARK_SUBTITLE_CHUNKS: SubtitleChunk[] = [
  {
    "from": 0,
    "to": 283,
    "words": [
      {
        "text": "DỪNG",
        "start": 0,
        "end": 19
      },
      {
        "text": "LẠI",
        "start": 21,
        "end": 40
      },
      {
        "text": "NGAY!",
        "start": 42,
        "end": 61
      },
      {
        "text": "NẾU",
        "start": 63,
        "end": 82
      },
      {
        "text": "BẠN",
        "start": 84,
        "end": 103
      },
      {
        "text": "VẪN",
        "start": 105,
        "end": 124
      },
      {
        "text": "ĐỂ",
        "start": 126,
        "end": 145
      },
      {
        "text": "CLAUDE",
        "start": 148,
        "end": 167
      },
      {
        "text": "HAY",
        "start": 169,
        "end": 188
      },
      {
        "text": "CURSOR",
        "start": 190,
        "end": 209
      },
      {
        "text": "TỰ",
        "start": 211,
        "end": 230
      },
      {
        "text": "VẼ",
        "start": 232,
        "end": 251
      },
      {
        "text": "WEB...",
        "start": 253,
        "end": 272
      }
    ]
  },
  {
    "from": 283,
    "to": 507,
    "words": [
      {
        "text": "BẠN",
        "start": 283,
        "end": 297
      },
      {
        "text": "ĐANG",
        "start": 298,
        "end": 312
      },
      {
        "text": "TẠO",
        "start": 314,
        "end": 328
      },
      {
        "text": "RA",
        "start": 330,
        "end": 344
      },
      {
        "text": "RÁC",
        "start": 345,
        "end": 359
      },
      {
        "text": "CÔNG",
        "start": 360,
        "end": 374
      },
      {
        "text": "NGHỆ,",
        "start": 376,
        "end": 390
      },
      {
        "text": "KHÁCH",
        "start": 392,
        "end": 406
      },
      {
        "text": "NHÌN",
        "start": 407,
        "end": 421
      },
      {
        "text": "VÀO",
        "start": 422,
        "end": 436
      },
      {
        "text": "LÀ",
        "start": 438,
        "end": 452
      },
      {
        "text": "MUỐN",
        "start": 454,
        "end": 468
      },
      {
        "text": "THOÁT",
        "start": 469,
        "end": 483
      },
      {
        "text": "NGAY!",
        "start": 484,
        "end": 498
      }
    ]
  },
  {
    "from": 507,
    "to": 759,
    "words": [
      {
        "text": "ĐÂY",
        "start": 507,
        "end": 529
      },
      {
        "text": "LÀ",
        "start": 532,
        "end": 554
      },
      {
        "text": "CỨU",
        "start": 556,
        "end": 578
      },
      {
        "text": "TINH:",
        "start": 581,
        "end": 603
      },
      {
        "text": "HALLMARK,",
        "start": 606,
        "end": 628
      },
      {
        "text": "HƠN",
        "start": 630,
        "end": 652
      },
      {
        "text": "38.000",
        "start": 655,
        "end": 677
      },
      {
        "text": "SAO",
        "start": 680,
        "end": 702
      },
      {
        "text": "TRÊN",
        "start": 705,
        "end": 727
      },
      {
        "text": "GITHUB.",
        "start": 729,
        "end": 751
      }
    ]
  },
  {
    "from": 759,
    "to": 1011,
    "words": [
      {
        "text": "CHẤM",
        "start": 759,
        "end": 774
      },
      {
        "text": "DỨT",
        "start": 775,
        "end": 790
      },
      {
        "text": "HOÀN",
        "start": 791,
        "end": 806
      },
      {
        "text": "TOÀN",
        "start": 808,
        "end": 823
      },
      {
        "text": "CHỮ",
        "start": 824,
        "end": 839
      },
      {
        "text": "TO",
        "start": 840,
        "end": 855
      },
      {
        "text": "NHỎ",
        "start": 856,
        "end": 871
      },
      {
        "text": "LÒE",
        "start": 872,
        "end": 887
      },
      {
        "text": "LOẸT,",
        "start": 889,
        "end": 904
      },
      {
        "text": "PHÈN",
        "start": 905,
        "end": 920
      },
      {
        "text": "KHÔNG",
        "start": 921,
        "end": 936
      },
      {
        "text": "THỂ",
        "start": 937,
        "end": 952
      },
      {
        "text": "TẢ",
        "start": 953,
        "end": 968
      },
      {
        "text": "CỦA",
        "start": 970,
        "end": 985
      },
      {
        "text": "AI!",
        "start": 986,
        "end": 1001
      }
    ]
  },
  {
    "from": 1011,
    "to": 1232,
    "words": [
      {
        "text": "TÍCH",
        "start": 1011,
        "end": 1027
      },
      {
        "text": "HỢP",
        "start": 1029,
        "end": 1045
      },
      {
        "text": "50",
        "start": 1047,
        "end": 1063
      },
      {
        "text": "BỘ",
        "start": 1064,
        "end": 1080
      },
      {
        "text": "TEMPLATE",
        "start": 1082,
        "end": 1098
      },
      {
        "text": "CHUẨN",
        "start": 1100,
        "end": 1116
      },
      {
        "text": "THIẾT",
        "start": 1118,
        "end": 1134
      },
      {
        "text": "KẾ",
        "start": 1136,
        "end": 1152
      },
      {
        "text": "GIAO",
        "start": 1154,
        "end": 1170
      },
      {
        "text": "DIỆN",
        "start": 1172,
        "end": 1188
      },
      {
        "text": "CAO",
        "start": 1189,
        "end": 1205
      },
      {
        "text": "CẤP.",
        "start": 1207,
        "end": 1223
      }
    ]
  },
  {
    "from": 1232,
    "to": 1473,
    "words": [
      {
        "text": "CHẤT",
        "start": 1232,
        "end": 1248
      },
      {
        "text": "LIỆU",
        "start": 1250,
        "end": 1266
      },
      {
        "text": "PHÔNG",
        "start": 1268,
        "end": 1284
      },
      {
        "text": "CHỮ,",
        "start": 1286,
        "end": 1302
      },
      {
        "text": "BỐ",
        "start": 1304,
        "end": 1320
      },
      {
        "text": "CỤC",
        "start": 1322,
        "end": 1338
      },
      {
        "text": "TỈ",
        "start": 1340,
        "end": 1356
      },
      {
        "text": "MỈ",
        "start": 1358,
        "end": 1374
      },
      {
        "text": "NHƯ",
        "start": 1376,
        "end": 1392
      },
      {
        "text": "TẠP",
        "start": 1394,
        "end": 1410
      },
      {
        "text": "CHÍ",
        "start": 1412,
        "end": 1428
      },
      {
        "text": "NGHỆ",
        "start": 1430,
        "end": 1446
      },
      {
        "text": "THUẬT.",
        "start": 1448,
        "end": 1464
      }
    ]
  },
  {
    "from": 1473,
    "to": 1698,
    "words": [
      {
        "text": "TỰ",
        "start": 1473,
        "end": 1487
      },
      {
        "text": "ĐỘNG",
        "start": 1489,
        "end": 1503
      },
      {
        "text": "QUÉT",
        "start": 1505,
        "end": 1519
      },
      {
        "text": "VÀ",
        "start": 1521,
        "end": 1535
      },
      {
        "text": "DIỆT",
        "start": 1537,
        "end": 1551
      },
      {
        "text": "SẠCH",
        "start": 1553,
        "end": 1567
      },
      {
        "text": "MỌI",
        "start": 1569,
        "end": 1583
      },
      {
        "text": "DẤU",
        "start": 1586,
        "end": 1600
      },
      {
        "text": "VẾT",
        "start": 1602,
        "end": 1616
      },
      {
        "text": "LỖI",
        "start": 1618,
        "end": 1632
      },
      {
        "text": "THIẾT",
        "start": 1634,
        "end": 1648
      },
      {
        "text": "KẾ",
        "start": 1650,
        "end": 1664
      },
      {
        "text": "MÁY",
        "start": 1666,
        "end": 1680
      },
      {
        "text": "TẠO.",
        "start": 1682,
        "end": 1696
      }
    ]
  },
  {
    "from": 1698,
    "to": 1969,
    "words": [
      {
        "text": "TƯƠNG",
        "start": 1720,
        "end": 1736
      },
      {
        "text": "THÍCH",
        "start": 1738,
        "end": 1754
      },
      {
        "text": "MƯỢT",
        "start": 1756,
        "end": 1772
      },
      {
        "text": "MÀ",
        "start": 1773,
        "end": 1789
      },
      {
        "text": "VỚI",
        "start": 1791,
        "end": 1807
      },
      {
        "text": "CLAUDE",
        "start": 1809,
        "end": 1825
      },
      {
        "text": "CODE,",
        "start": 1827,
        "end": 1843
      },
      {
        "text": "CURSOR,",
        "start": 1845,
        "end": 1861
      },
      {
        "text": "CODEX",
        "start": 1863,
        "end": 1879
      },
      {
        "text": "VÀ",
        "start": 1880,
        "end": 1896
      },
      {
        "text": "OPENCODE.",
        "start": 1898,
        "end": 1914
      }
    ]
  },
  {
    "from": 1969,
    "to": 2208,
    "words": [
      {
        "text": "TỰ",
        "start": 1978,
        "end": 1990
      },
      {
        "text": "MỞ",
        "start": 1991,
        "end": 2003
      },
      {
        "text": "TRÌNH",
        "start": 2004,
        "end": 2016
      },
      {
        "text": "DUYỆT",
        "start": 2017,
        "end": 2029
      },
      {
        "text": "KIỂM",
        "start": 2030,
        "end": 2042
      },
      {
        "text": "TRA",
        "start": 2043,
        "end": 2055
      },
      {
        "text": "ĐỘ",
        "start": 2056,
        "end": 2068
      },
      {
        "text": "TƯƠNG",
        "start": 2068,
        "end": 2080
      },
      {
        "text": "PHẢN,",
        "start": 2081,
        "end": 2093
      },
      {
        "text": "BỐ",
        "start": 2094,
        "end": 2106
      },
      {
        "text": "CỤC",
        "start": 2107,
        "end": 2119
      },
      {
        "text": "TRÊN",
        "start": 2120,
        "end": 2132
      },
      {
        "text": "PHONE",
        "start": 2133,
        "end": 2145
      },
      {
        "text": "THẬT.",
        "start": 2146,
        "end": 2158
      }
    ]
  },
  {
    "from": 2208,
    "to": 2447,
    "words": [
      {
        "text": "GIAO",
        "start": 2216,
        "end": 2228
      },
      {
        "text": "DIỆN",
        "start": 2230,
        "end": 2242
      },
      {
        "text": "CHUẨN",
        "start": 2244,
        "end": 2256
      },
      {
        "text": "CHỈNH,",
        "start": 2257,
        "end": 2269
      },
      {
        "text": "TĂNG",
        "start": 2271,
        "end": 2283
      },
      {
        "text": "TỶ",
        "start": 2285,
        "end": 2297
      },
      {
        "text": "LỆ",
        "start": 2299,
        "end": 2311
      },
      {
        "text": "KHÁCH",
        "start": 2312,
        "end": 2324
      },
      {
        "text": "MUA",
        "start": 2326,
        "end": 2338
      },
      {
        "text": "HÀNG",
        "start": 2340,
        "end": 2352
      },
      {
        "text": "VÀ",
        "start": 2354,
        "end": 2366
      },
      {
        "text": "DÙNG",
        "start": 2367,
        "end": 2379
      },
      {
        "text": "THỬ.",
        "start": 2381,
        "end": 2393
      }
    ]
  },
  {
    "from": 2447,
    "to": 2711,
    "words": [
      {
        "text": "HOÀN",
        "start": 2447,
        "end": 2463
      },
      {
        "text": "TOÀN",
        "start": 2464,
        "end": 2480
      },
      {
        "text": "MIỄN",
        "start": 2482,
        "end": 2498
      },
      {
        "text": "PHÍ,",
        "start": 2500,
        "end": 2516
      },
      {
        "text": "MÃ",
        "start": 2517,
        "end": 2533
      },
      {
        "text": "NGUỒN",
        "start": 2534,
        "end": 2550
      },
      {
        "text": "MỞ,",
        "start": 2552,
        "end": 2568
      },
      {
        "text": "KHÔNG",
        "start": 2570,
        "end": 2586
      },
      {
        "text": "TỐN",
        "start": 2587,
        "end": 2603
      },
      {
        "text": "CHI",
        "start": 2604,
        "end": 2620
      },
      {
        "text": "PHÍ",
        "start": 2622,
        "end": 2638
      },
      {
        "text": "NÀO.",
        "start": 2640,
        "end": 2656
      }
    ]
  },
  {
    "from": 2711,
    "to": 2932,
    "words": [
      {
        "text": "CÀI",
        "start": 2714,
        "end": 2729
      },
      {
        "text": "ĐẶT",
        "start": 2730,
        "end": 2745
      },
      {
        "text": "SIÊU",
        "start": 2746,
        "end": 2761
      },
      {
        "text": "NHANH",
        "start": 2763,
        "end": 2778
      },
      {
        "text": "ĐÚNG",
        "start": 2779,
        "end": 2794
      },
      {
        "text": "MỘT",
        "start": 2795,
        "end": 2810
      },
      {
        "text": "DÒNG",
        "start": 2811,
        "end": 2826
      },
      {
        "text": "LỆNH",
        "start": 2827,
        "end": 2842
      },
      {
        "text": "TRONG",
        "start": 2844,
        "end": 2859
      },
      {
        "text": "TERMINAL.",
        "start": 2860,
        "end": 2875
      }
    ]
  },
  {
    "from": 2932,
    "to": 3174,
    "words": [
      {
        "text": "MUỐN",
        "start": 2935,
        "end": 2949
      },
      {
        "text": "WEB",
        "start": 2950,
        "end": 2964
      },
      {
        "text": "LÀM",
        "start": 2966,
        "end": 2980
      },
      {
        "text": "RA",
        "start": 2981,
        "end": 2995
      },
      {
        "text": "ĐẸP",
        "start": 2996,
        "end": 3010
      },
      {
        "text": "NHƯ",
        "start": 3012,
        "end": 3026
      },
      {
        "text": "CHUYÊN",
        "start": 3027,
        "end": 3041
      },
      {
        "text": "GIA,",
        "start": 3042,
        "end": 3056
      },
      {
        "text": "HÃY",
        "start": 3058,
        "end": 3072
      },
      {
        "text": "LƯU",
        "start": 3073,
        "end": 3087
      },
      {
        "text": "VIDEO",
        "start": 3088,
        "end": 3102
      },
      {
        "text": "LẠI!",
        "start": 3104,
        "end": 3118
      }
    ]
  },
  {
    "from": 3174,
    "to": 3513,
    "words": [
      {
        "text": "LƯU",
        "start": 3180,
        "end": 3197
      },
      {
        "text": "VIDEO",
        "start": 3199,
        "end": 3216
      },
      {
        "text": "LẠI",
        "start": 3218,
        "end": 3235
      },
      {
        "text": "DÙNG",
        "start": 3236,
        "end": 3253
      },
      {
        "text": "NGAY!",
        "start": 3255,
        "end": 3272
      },
      {
        "text": "THAM",
        "start": 3274,
        "end": 3291
      },
      {
        "text": "GIA",
        "start": 3293,
        "end": 3310
      },
      {
        "text": "NHÓM",
        "start": 3312,
        "end": 3329
      },
      {
        "text": "CHAT",
        "start": 3330,
        "end": 3347
      },
      {
        "text": "TELE",
        "start": 3349,
        "end": 3366
      },
      {
        "text": "Ở",
        "start": 3368,
        "end": 3385
      },
      {
        "text": "LINK",
        "start": 3387,
        "end": 3404
      },
      {
        "text": "BIO",
        "start": 3406,
        "end": 3423
      },
      {
        "text": "TIKTOK",
        "start": 3424,
        "end": 3441
      },
      {
        "text": "NHÉ.",
        "start": 3443,
        "end": 3460
      }
    ]
  },
  {
    "from": 3513,
    "to": 3729,
    "words": [
      {
        "text": "ANH",
        "start": 3513,
        "end": 3524
      },
      {
        "text": "EM",
        "start": 3526,
        "end": 3537
      },
      {
        "text": "LƯỚT",
        "start": 3538,
        "end": 3549
      },
      {
        "text": "XUỐNG",
        "start": 3551,
        "end": 3562
      },
      {
        "text": "XÍU",
        "start": 3563,
        "end": 3574
      },
      {
        "text": "TRONG",
        "start": 3576,
        "end": 3587
      },
      {
        "text": "TRANG",
        "start": 3589,
        "end": 3600
      },
      {
        "text": "WEB,",
        "start": 3601,
        "end": 3612
      },
      {
        "text": "LÀ",
        "start": 3614,
        "end": 3625
      },
      {
        "text": "THẤY",
        "start": 3627,
        "end": 3638
      },
      {
        "text": "LINK",
        "start": 3639,
        "end": 3650
      },
      {
        "text": "NHÓM",
        "start": 3652,
        "end": 3663
      },
      {
        "text": "NHÉ!",
        "start": 3664,
        "end": 3675
      }
    ]
  }
];

export const HallmarkCaptions: React.FC = () => {
  const frame = useCurrentFrame();

  const currentChunk = HALLMARK_SUBTITLE_CHUNKS.find(
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
