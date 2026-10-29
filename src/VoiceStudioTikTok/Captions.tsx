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

const SUBTITLE_CHUNKS: SubtitleChunk[] = [
  {
    "from": 0,
    "to": 232,
    "words": [
      {
        "text": "DỪNG",
        "start": 0,
        "end": 20
      },
      {
        "text": "LẠI!",
        "start": 20,
        "end": 61
      },
      {
        "text": "ĐỪNG",
        "start": 61,
        "end": 92
      },
      {
        "text": "TỐN",
        "start": 92,
        "end": 106
      },
      {
        "text": "TIỀN",
        "start": 106,
        "end": 116
      },
      {
        "text": "CHO",
        "start": 116,
        "end": 127
      },
      {
        "text": "ELEVENLABS",
        "start": 127,
        "end": 164
      },
      {
        "text": "NỮA!",
        "start": 164,
        "end": 226
      }
    ]
  },
  {
    "from": 232,
    "to": 415,
    "words": [
      {
        "text": "ĐÃ",
        "start": 232,
        "end": 250
      },
      {
        "text": "CÓ",
        "start": 250,
        "end": 258
      },
      {
        "text": "BẢN",
        "start": 258,
        "end": 266
      },
      {
        "text": "THAY",
        "start": 266,
        "end": 276
      },
      {
        "text": "THẾ",
        "start": 276,
        "end": 285
      },
      {
        "text": "MÃ",
        "start": 285,
        "end": 294
      },
      {
        "text": "NGUỒN",
        "start": 294,
        "end": 308
      },
      {
        "text": "MỞ",
        "start": 308,
        "end": 316
      },
      {
        "text": "MIỄN",
        "start": 316,
        "end": 328
      },
      {
        "text": "PHÍ",
        "start": 328,
        "end": 339
      },
      {
        "text": "CỰC",
        "start": 339,
        "end": 350
      },
      {
        "text": "ĐỈNH!",
        "start": 350,
        "end": 392
      }
    ]
  },
  {
    "from": 415,
    "to": 628,
    "words": [
      {
        "text": "ĐÂY",
        "start": 426,
        "end": 434
      },
      {
        "text": "LÀ",
        "start": 434,
        "end": 444
      },
      {
        "text": "VOICESTUDIO,",
        "start": 444,
        "end": 509
      },
      {
        "text": "SIÊU",
        "start": 509,
        "end": 522
      },
      {
        "text": "DỰ",
        "start": 522,
        "end": 533
      },
      {
        "text": "ÁN",
        "start": 533,
        "end": 546
      },
      {
        "text": "TRÊN",
        "start": 546,
        "end": 557
      },
      {
        "text": "GITHUB.",
        "start": 557,
        "end": 624
      }
    ]
  },
  {
    "from": 628,
    "to": 836,
    "words": [
      {
        "text": "GIAO",
        "start": 640,
        "end": 650
      },
      {
        "text": "DIỆN",
        "start": 650,
        "end": 660
      },
      {
        "text": "DESKTOP",
        "start": 660,
        "end": 678
      },
      {
        "text": "CỰC",
        "start": 678,
        "end": 693
      },
      {
        "text": "ĐẸP,",
        "start": 693,
        "end": 720
      },
      {
        "text": "KHÔNG",
        "start": 720,
        "end": 728
      },
      {
        "text": "CẦN",
        "start": 728,
        "end": 738
      },
      {
        "text": "GÕ",
        "start": 738,
        "end": 749
      },
      {
        "text": "DÒNG",
        "start": 749,
        "end": 759
      },
      {
        "text": "LỆNH",
        "start": 759,
        "end": 772
      },
      {
        "text": "NÀO.",
        "start": 772,
        "end": 833
      }
    ]
  },
  {
    "from": 836,
    "to": 1044,
    "words": [
      {
        "text": "CLONE",
        "start": 849,
        "end": 867
      },
      {
        "text": "GIỌNG",
        "start": 867,
        "end": 880
      },
      {
        "text": "NÓI",
        "start": 880,
        "end": 892
      },
      {
        "text": "BẤT",
        "start": 892,
        "end": 903
      },
      {
        "text": "KỲ",
        "start": 903,
        "end": 913
      },
      {
        "text": "CHỈ",
        "start": 913,
        "end": 922
      },
      {
        "text": "CẦN",
        "start": 922,
        "end": 934
      },
      {
        "text": "3",
        "start": 934,
        "end": 944
      },
      {
        "text": "GIÂY",
        "start": 944,
        "end": 956
      },
      {
        "text": "ÂM",
        "start": 956,
        "end": 966
      },
      {
        "text": "THANH",
        "start": 966,
        "end": 976
      },
      {
        "text": "MẪU.",
        "start": 976,
        "end": 1027
      }
    ]
  },
  {
    "from": 1044,
    "to": 1243,
    "words": [
      {
        "text": "HỖ",
        "start": 1052,
        "end": 1064
      },
      {
        "text": "TRỢ",
        "start": 1064,
        "end": 1075
      },
      {
        "text": "TỚI",
        "start": 1075,
        "end": 1088
      },
      {
        "text": "646",
        "start": 1088,
        "end": 1140
      },
      {
        "text": "NGÔN",
        "start": 1140,
        "end": 1154
      },
      {
        "text": "NGỮ",
        "start": 1154,
        "end": 1164
      },
      {
        "text": "THẾ",
        "start": 1164,
        "end": 1174
      },
      {
        "text": "GIỚI.",
        "start": 1174,
        "end": 1243
      }
    ]
  },
  {
    "from": 1243,
    "to": 1456,
    "words": [
      {
        "text": "TỰ",
        "start": 1254,
        "end": 1263
      },
      {
        "text": "ĐỘNG",
        "start": 1263,
        "end": 1274
      },
      {
        "text": "LỒNG",
        "start": 1274,
        "end": 1287
      },
      {
        "text": "TIẾNG",
        "start": 1287,
        "end": 1301
      },
      {
        "text": "VIDEO,",
        "start": 1301,
        "end": 1344
      },
      {
        "text": "KHỚP",
        "start": 1344,
        "end": 1357
      },
      {
        "text": "CHUẨN",
        "start": 1357,
        "end": 1369
      },
      {
        "text": "TỪNG",
        "start": 1369,
        "end": 1382
      },
      {
        "text": "KHUNG",
        "start": 1382,
        "end": 1393
      },
      {
        "text": "HÌNH.",
        "start": 1393,
        "end": 1449
      }
    ]
  },
  {
    "from": 1456,
    "to": 1658,
    "words": [
      {
        "text": "TẠO",
        "start": 1461,
        "end": 1476
      },
      {
        "text": "SÁCH",
        "start": 1476,
        "end": 1486
      },
      {
        "text": "NÓI,",
        "start": 1486,
        "end": 1515
      },
      {
        "text": "XUẤT",
        "start": 1515,
        "end": 1526
      },
      {
        "text": "ÂM",
        "start": 1526,
        "end": 1535
      },
      {
        "text": "THANH",
        "start": 1535,
        "end": 1548
      },
      {
        "text": "HÀNG",
        "start": 1548,
        "end": 1556
      },
      {
        "text": "LOẠT",
        "start": 1556,
        "end": 1568
      },
      {
        "text": "KHÔNG",
        "start": 1568,
        "end": 1580
      },
      {
        "text": "GIỚI",
        "start": 1580,
        "end": 1590
      },
      {
        "text": "HẠN.",
        "start": 1590,
        "end": 1602
      }
    ]
  },
  {
    "from": 1658,
    "to": 1864,
    "words": [
      {
        "text": "TÍCH",
        "start": 1663,
        "end": 1677
      },
      {
        "text": "HỢP",
        "start": 1677,
        "end": 1689
      },
      {
        "text": "HƠN",
        "start": 1689,
        "end": 1700
      },
      {
        "text": "15",
        "start": 1700,
        "end": 1720
      },
      {
        "text": "MODEL",
        "start": 1720,
        "end": 1741
      },
      {
        "text": "TRÍ",
        "start": 1741,
        "end": 1754
      },
      {
        "text": "TUỆ",
        "start": 1754,
        "end": 1766
      },
      {
        "text": "NHÂN",
        "start": 1766,
        "end": 1777
      },
      {
        "text": "TẠO",
        "start": 1777,
        "end": 1791
      },
      {
        "text": "ĐỈNH",
        "start": 1791,
        "end": 1804
      },
      {
        "text": "NHẤT.",
        "start": 1804,
        "end": 1812
      }
    ]
  },
  {
    "from": 1864,
    "to": 2069,
    "words": [
      {
        "text": "CHẠY",
        "start": 1869,
        "end": 1888
      },
      {
        "text": "HOÀN",
        "start": 1888,
        "end": 1899
      },
      {
        "text": "TOÀN",
        "start": 1899,
        "end": 1912
      },
      {
        "text": "OFFLINE,",
        "start": 1912,
        "end": 1950
      },
      {
        "text": "BẢO",
        "start": 1950,
        "end": 1959
      },
      {
        "text": "MẬT",
        "start": 1959,
        "end": 1970
      },
      {
        "text": "DỮ",
        "start": 1970,
        "end": 1980
      },
      {
        "text": "LIỆU",
        "start": 1980,
        "end": 1990
      },
      {
        "text": "MÁY",
        "start": 1990,
        "end": 2003
      },
      {
        "text": "TÍNH.",
        "start": 2003,
        "end": 2013
      }
    ]
  },
  {
    "from": 2069,
    "to": 2288,
    "words": [
      {
        "text": "CÓ",
        "start": 2074,
        "end": 2086
      },
      {
        "text": "SẴN",
        "start": 2086,
        "end": 2098
      },
      {
        "text": "API",
        "start": 2098,
        "end": 2121
      },
      {
        "text": "NỘI",
        "start": 2121,
        "end": 2140
      },
      {
        "text": "BỘ,",
        "start": 2140,
        "end": 2169
      },
      {
        "text": "KẾT",
        "start": 2169,
        "end": 2177
      },
      {
        "text": "NỐI",
        "start": 2177,
        "end": 2187
      },
      {
        "text": "THẲNG",
        "start": 2187,
        "end": 2199
      },
      {
        "text": "TRỢ",
        "start": 2199,
        "end": 2211
      },
      {
        "text": "LÝ",
        "start": 2211,
        "end": 2220
      },
      {
        "text": "ẢO.",
        "start": 2220,
        "end": 2231
      }
    ]
  },
  {
    "from": 2288,
    "to": 2487,
    "words": [
      {
        "text": "CÀI",
        "start": 2293,
        "end": 2310
      },
      {
        "text": "ĐẶT",
        "start": 2310,
        "end": 2319
      },
      {
        "text": "SIÊU",
        "start": 2319,
        "end": 2332
      },
      {
        "text": "NHANH",
        "start": 2332,
        "end": 2344
      },
      {
        "text": "ĐÚNG",
        "start": 2344,
        "end": 2354
      },
      {
        "text": "MỘT",
        "start": 2354,
        "end": 2364
      },
      {
        "text": "DÒNG",
        "start": 2364,
        "end": 2374
      },
      {
        "text": "LỆNH",
        "start": 2374,
        "end": 2389
      },
      {
        "text": "TRONG",
        "start": 2389,
        "end": 2400
      },
      {
        "text": "TERMINAL.",
        "start": 2400,
        "end": 2432
      }
    ]
  },
  {
    "from": 2487,
    "to": 2692,
    "words": [
      {
        "text": "HOÀN",
        "start": 2492,
        "end": 2509
      },
      {
        "text": "TOÀN",
        "start": 2509,
        "end": 2518
      },
      {
        "text": "MIỄN",
        "start": 2518,
        "end": 2530
      },
      {
        "text": "PHÍ",
        "start": 2530,
        "end": 2537
      },
      {
        "text": "TRỌN",
        "start": 2537,
        "end": 2549
      },
      {
        "text": "ĐỜI,",
        "start": 2549,
        "end": 2578
      },
      {
        "text": "LƯU",
        "start": 2578,
        "end": 2587
      },
      {
        "text": "NGAY",
        "start": 2587,
        "end": 2594
      },
      {
        "text": "VIDEO",
        "start": 2594,
        "end": 2611
      },
      {
        "text": "LẠI",
        "start": 2611,
        "end": 2627
      },
      {
        "text": "NHÉ!",
        "start": 2627,
        "end": 2642
      }
    ]
  },
  {
    "from": 2692,
    "to": 2903,
    "words": [
      {
        "text": "THAM",
        "start": 2697,
        "end": 2712
      },
      {
        "text": "GIA",
        "start": 2712,
        "end": 2721
      },
      {
        "text": "NHÓM",
        "start": 2721,
        "end": 2735
      },
      {
        "text": "CHAT",
        "start": 2735,
        "end": 2747
      },
      {
        "text": "TELE",
        "start": 2747,
        "end": 2758
      },
      {
        "text": "CỦA",
        "start": 2758,
        "end": 2769
      },
      {
        "text": "MÌNH",
        "start": 2769,
        "end": 2778
      },
      {
        "text": "Ở",
        "start": 2778,
        "end": 2789
      },
      {
        "text": "LINK",
        "start": 2789,
        "end": 2798
      },
      {
        "text": "TRONG",
        "start": 2798,
        "end": 2808
      },
      {
        "text": "BIO",
        "start": 2808,
        "end": 2819
      },
      {
        "text": "TIKTOK",
        "start": 2819,
        "end": 2832
      },
      {
        "text": "NHÉ.",
        "start": 2832,
        "end": 2853
      }
    ]
  },
  {
    "from": 2903,
    "to": 3116,
    "words": [
      {
        "text": "ANH",
        "start": 2908,
        "end": 2921
      },
      {
        "text": "EM",
        "start": 2921,
        "end": 2932
      },
      {
        "text": "LƯỚT",
        "start": 2932,
        "end": 2943
      },
      {
        "text": "XUỐNG",
        "start": 2943,
        "end": 2953
      },
      {
        "text": "XÍU",
        "start": 2953,
        "end": 2965
      },
      {
        "text": "TRONG",
        "start": 2965,
        "end": 2975
      },
      {
        "text": "TRANG",
        "start": 2975,
        "end": 2985
      },
      {
        "text": "WEB,",
        "start": 2985,
        "end": 2995
      },
      {
        "text": "LÀ",
        "start": 2995,
        "end": 3017
      },
      {
        "text": "THẤY",
        "start": 3017,
        "end": 3029
      },
      {
        "text": "LINK",
        "start": 3029,
        "end": 3042
      },
      {
        "text": "NHÓM",
        "start": 3042,
        "end": 3052
      },
      {
        "text": "NHÉ!",
        "start": 3052,
        "end": 3064
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
