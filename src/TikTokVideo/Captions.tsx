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
    "to": 102,
    "words": [
      {
        "text": "CÓ",
        "start": 6,
        "end": 13
      },
      {
        "text": "PHẢI",
        "start": 14,
        "end": 21
      },
      {
        "text": "TRỢ",
        "start": 22,
        "end": 29
      },
      {
        "text": "LÝ",
        "start": 30,
        "end": 37
      },
      {
        "text": "AI",
        "start": 38,
        "end": 45
      },
      {
        "text": "CỨ",
        "start": 46,
        "end": 53
      },
      {
        "text": "TẮT",
        "start": 54,
        "end": 61
      },
      {
        "text": "ĐI",
        "start": 62,
        "end": 69
      },
      {
        "text": "LÀ",
        "start": 70,
        "end": 77
      },
      {
        "text": "QUÊN",
        "start": 78,
        "end": 85
      },
      {
        "text": "SẠCH",
        "start": 86,
        "end": 93
      },
      {
        "text": "MỌI",
        "start": 94,
        "end": 101
      },
      {
        "text": "VIỆC",
        "start": 96,
        "end": 102
      }
    ]
  },
  {
    "from": 102,
    "to": 195,
    "words": [
      {
        "text": "DỰ",
        "start": 110,
        "end": 118
      },
      {
        "text": "ÁN",
        "start": 119,
        "end": 127
      },
      {
        "text": "CLAUDE",
        "start": 129,
        "end": 137
      },
      {
        "text": "MEM",
        "start": 138,
        "end": 146
      },
      {
        "text": "TỪ",
        "start": 148,
        "end": 156
      },
      {
        "text": "TÁC",
        "start": 157,
        "end": 165
      },
      {
        "text": "GIẢ",
        "start": 166,
        "end": 174
      },
      {
        "text": "THEDOTMACK",
        "start": 176,
        "end": 184
      }
    ]
  },
  {
    "from": 195,
    "to": 285,
    "words": [
      {
        "text": "DỰ",
        "start": 202,
        "end": 209
      },
      {
        "text": "ÁN",
        "start": 210,
        "end": 217
      },
      {
        "text": "ĐẠT",
        "start": 218,
        "end": 225
      },
      {
        "text": "HƠN",
        "start": 226,
        "end": 233
      },
      {
        "text": "MỘT",
        "start": 234,
        "end": 241
      },
      {
        "text": "TRĂM",
        "start": 242,
        "end": 249
      },
      {
        "text": "NGHÌN",
        "start": 250,
        "end": 257
      },
      {
        "text": "NGÔI",
        "start": 258,
        "end": 265
      },
      {
        "text": "SAO",
        "start": 266,
        "end": 273
      },
      {
        "text": "GITHUB",
        "start": 274,
        "end": 281
      }
    ]
  },
  {
    "from": 285,
    "to": 411,
    "words": [
      {
        "text": "CLAUDE",
        "start": 291,
        "end": 298
      },
      {
        "text": "MEM",
        "start": 299,
        "end": 306
      },
      {
        "text": "LÀ",
        "start": 307,
        "end": 314
      },
      {
        "text": "CÔNG",
        "start": 315,
        "end": 322
      },
      {
        "text": "CỤ",
        "start": 323,
        "end": 330
      },
      {
        "text": "GIÚP",
        "start": 331,
        "end": 338
      },
      {
        "text": "TRỢ",
        "start": 339,
        "end": 346
      },
      {
        "text": "LÝ",
        "start": 347,
        "end": 354
      },
      {
        "text": "AI",
        "start": 355,
        "end": 362
      },
      {
        "text": "NHỚ",
        "start": 363,
        "end": 370
      },
      {
        "text": "MỌI",
        "start": 371,
        "end": 378
      },
      {
        "text": "VIỆC",
        "start": 379,
        "end": 386
      },
      {
        "text": "BẠN",
        "start": 387,
        "end": 394
      },
      {
        "text": "LÀM",
        "start": 395,
        "end": 402
      }
    ]
  },
  {
    "from": 411,
    "to": 531,
    "words": [
      {
        "text": "BẠN",
        "start": 417,
        "end": 424
      },
      {
        "text": "NÉM",
        "start": 425,
        "end": 432
      },
      {
        "text": "VÀO",
        "start": 433,
        "end": 440
      },
      {
        "text": "CÁC",
        "start": 441,
        "end": 448
      },
      {
        "text": "PHIÊN",
        "start": 449,
        "end": 456
      },
      {
        "text": "LÀM",
        "start": 457,
        "end": 464
      },
      {
        "text": "VIỆC",
        "start": 465,
        "end": 472
      },
      {
        "text": "MÁY",
        "start": 473,
        "end": 480
      },
      {
        "text": "TỰ",
        "start": 481,
        "end": 488
      },
      {
        "text": "NHẢ",
        "start": 489,
        "end": 496
      },
      {
        "text": "RA",
        "start": 497,
        "end": 504
      },
      {
        "text": "SỔ",
        "start": 505,
        "end": 512
      },
      {
        "text": "NHỚ",
        "start": 513,
        "end": 520
      },
      {
        "text": "CHI",
        "start": 521,
        "end": 528
      },
      {
        "text": "TIẾT",
        "start": 529,
        "end": 531
      }
    ]
  },
  {
    "from": 531,
    "to": 658,
    "words": [
      {
        "text": "TẮT",
        "start": 537,
        "end": 544
      },
      {
        "text": "MÁY",
        "start": 545,
        "end": 552
      },
      {
        "text": "MỞ",
        "start": 553,
        "end": 560
      },
      {
        "text": "LẠI",
        "start": 561,
        "end": 568
      },
      {
        "text": "SAU",
        "start": 569,
        "end": 576
      },
      {
        "text": "MỘT",
        "start": 577,
        "end": 584
      },
      {
        "text": "TUẦN",
        "start": 585,
        "end": 592
      },
      {
        "text": "AI",
        "start": 593,
        "end": 600
      },
      {
        "text": "VẪN",
        "start": 601,
        "end": 608
      },
      {
        "text": "NHỚ",
        "start": 609,
        "end": 616
      },
      {
        "text": "RÕ",
        "start": 617,
        "end": 624
      },
      {
        "text": "MƯỜI",
        "start": 625,
        "end": 632
      },
      {
        "text": "LỖI",
        "start": 633,
        "end": 640
      },
      {
        "text": "VỪA",
        "start": 641,
        "end": 648
      },
      {
        "text": "SỬA",
        "start": 649,
        "end": 656
      }
    ]
  },
  {
    "from": 658,
    "to": 773,
    "words": [
      {
        "text": "DÀNH",
        "start": 665,
        "end": 672
      },
      {
        "text": "CHO",
        "start": 673,
        "end": 680
      },
      {
        "text": "NGƯỜI",
        "start": 681,
        "end": 688
      },
      {
        "text": "DÙNG",
        "start": 689,
        "end": 696
      },
      {
        "text": "AI",
        "start": 697,
        "end": 704
      },
      {
        "text": "SỢ",
        "start": 705,
        "end": 712
      },
      {
        "text": "CẢNH",
        "start": 713,
        "end": 720
      },
      {
        "text": "NGÀY",
        "start": 721,
        "end": 728
      },
      {
        "text": "NÀO",
        "start": 729,
        "end": 736
      },
      {
        "text": "CŨNG",
        "start": 737,
        "end": 744
      },
      {
        "text": "PHẢI",
        "start": 745,
        "end": 752
      },
      {
        "text": "NHẮC",
        "start": 753,
        "end": 760
      },
      {
        "text": "LẠI",
        "start": 761,
        "end": 768
      }
    ]
  },
  {
    "from": 773,
    "to": 861,
    "words": [
      {
        "text": "HOÀN",
        "start": 779,
        "end": 788
      },
      {
        "text": "TOÀN",
        "start": 788,
        "end": 797
      },
      {
        "text": "MIỄN",
        "start": 798,
        "end": 807
      },
      {
        "text": "PHÍ",
        "start": 808,
        "end": 817
      },
      {
        "text": "KHÔNG",
        "start": 817,
        "end": 826
      },
      {
        "text": "TỐN",
        "start": 826,
        "end": 835
      },
      {
        "text": "MỘT",
        "start": 836,
        "end": 845
      },
      {
        "text": "ĐỒNG",
        "start": 846,
        "end": 855
      }
    ]
  },
  {
    "from": 861,
    "to": 950,
    "words": [
      {
        "text": "CÀI",
        "start": 871,
        "end": 878
      },
      {
        "text": "ĐẶT",
        "start": 879,
        "end": 886
      },
      {
        "text": "MỘT",
        "start": 887,
        "end": 894
      },
      {
        "text": "DÒNG",
        "start": 895,
        "end": 902
      },
      {
        "text": "LỆNH",
        "start": 903,
        "end": 910
      },
      {
        "text": "CỰC",
        "start": 912,
        "end": 919
      },
      {
        "text": "NHANH",
        "start": 920,
        "end": 927
      },
      {
        "text": "BẰNG",
        "start": 928,
        "end": 935
      },
      {
        "text": "NPX",
        "start": 936,
        "end": 943
      }
    ]
  },
  {
    "from": 950,
    "to": 1131,
    "words": [
      {
        "text": "XEM",
        "start": 956,
        "end": 963
      },
      {
        "text": "HƯỚNG",
        "start": 964,
        "end": 971
      },
      {
        "text": "DẪN",
        "start": 972,
        "end": 979
      },
      {
        "text": "CHI",
        "start": 980,
        "end": 987
      },
      {
        "text": "TIẾT",
        "start": 988,
        "end": 995
      },
      {
        "text": "TRONG",
        "start": 996,
        "end": 1003
      },
      {
        "text": "NHÓM",
        "start": 1004,
        "end": 1011
      },
      {
        "text": "NHÉ",
        "start": 1012,
        "end": 1019
      },
      {
        "text": "THAM",
        "start": 1020,
        "end": 1027
      },
      {
        "text": "GIA",
        "start": 1028,
        "end": 1035
      },
      {
        "text": "NHÓM",
        "start": 1036,
        "end": 1043
      },
      {
        "text": "CHAT",
        "start": 1045,
        "end": 1052
      },
      {
        "text": "TELE",
        "start": 1053,
        "end": 1060
      },
      {
        "text": "CỦA",
        "start": 1061,
        "end": 1068
      },
      {
        "text": "MÌNH",
        "start": 1069,
        "end": 1076
      },
      {
        "text": "Ở",
        "start": 1077,
        "end": 1084
      },
      {
        "text": "LINK",
        "start": 1085,
        "end": 1092
      },
      {
        "text": "TRONG",
        "start": 1093,
        "end": 1100
      },
      {
        "text": "BIO",
        "start": 1101,
        "end": 1108
      },
      {
        "text": "TIKTOK",
        "start": 1109,
        "end": 1116
      },
      {
        "text": "NHÉ",
        "start": 1117,
        "end": 1124
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
