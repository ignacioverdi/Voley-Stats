// datos_partidos.js — 31/05/2026 01:10
const PARTIDOS_GENERADO = "31/05/2026 01:10";
const PARTIDOS_TOTAL = 6;
const PARTIDOS_META = [
  {
    "nombre": "UNTREF",
    "rival": "UNTREF",
    "fecha": "01/05/2026",
    "torneo": "División de Honor",
    "resultado": "V",
    "sets_casla": "3",
    "sets_rival": "1"
  },
  {
    "nombre": "CIUDAD",
    "rival": "CIUDAD",
    "fecha": "05/05/2026",
    "torneo": "División de Honor",
    "resultado": "D",
    "sets_casla": "",
    "sets_rival": "3"
  },
  {
    "nombre": "FERRO",
    "rival": "FERRO",
    "fecha": "08/05/2026",
    "torneo": "División de Honor",
    "resultado": "D",
    "sets_casla": "1",
    "sets_rival": "3"
  },
  {
    "nombre": "HACOAJ",
    "rival": "HACOAJ",
    "fecha": "16/05/2026",
    "torneo": "División de Honor",
    "resultado": "V",
    "sets_casla": "3",
    "sets_rival": "1"
  },
  {
    "nombre": "VELEZ",
    "rival": "VELEZ",
    "fecha": "22/05/2026",
    "torneo": "División de Honor",
    "resultado": "V",
    "sets_casla": "3",
    "sets_rival": "2"
  },
  {
    "nombre": "DBANF",
    "rival": "DBANF",
    "fecha": "26/05/2026",
    "torneo": "División de Honor",
    "resultado": "D",
    "sets_casla": "2",
    "sets_rival": "3"
  }
];
const PARTIDOS_JUGADORES = [
  {
    "num": 0,
    "nombre": "0 Romeo Winer A.",
    "pos": "",
    "color": "#64748b",
    "info": {},
    "ataques": [],
    "saques": [
      {
        "cod": "SM",
        "tipo": "FLOTADO",
        "orig": 6,
        "destinos": [],
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "SQ",
        "tipo": "POTENCIA",
        "orig": 6,
        "destinos": [],
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      }
    ],
    "video": 0,
    "recepcion": {
      "num": 3,
      "flotado": {
        "desde_z1": {
          "total": {
            "tot": 4,
            "eff": 25,
            "pos": 50,
            "neg": 25
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 4,
            "eff": 25,
            "pos": 50,
            "neg": 25
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        },
        "desde_z6": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        },
        "desde_z5": {
          "total": {
            "tot": 18,
            "eff": 14,
            "pos": 33,
            "neg": 17
          },
          "p1": {
            "tot": 14,
            "eff": 14,
            "pos": 36,
            "neg": 21
          },
          "p6": {
            "tot": 4,
            "eff": 12,
            "pos": 25,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "total": {
            "tot": 6,
            "eff": 8,
            "pos": 33,
            "neg": 17
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 5,
            "eff": 0,
            "pos": 40,
            "neg": 0
          },
          "p5": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 100
          }
        },
        "desde_z6": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        },
        "desde_z5": {
          "total": {
            "tot": 2,
            "eff": 50,
            "pos": 50,
            "neg": 0
          },
          "p1": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 1,
            "eff": 100,
            "pos": 100,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        }
      }
    }
  },
  {
    "num": 2,
    "nombre": "2 Ojuez A.",
    "pos": "CENTRAL",
    "color": "#f97316",
    "info": {},
    "ataques": [
      {
        "cod": "X1",
        "orig": 3,
        "destinos": [
          {
            "z": 6,
            "pct": 33
          },
          {
            "z": 8,
            "pct": 20
          },
          {
            "z": 7,
            "pct": 20
          },
          {
            "z": 5,
            "pct": 13
          }
        ],
        "eff": 48,
        "tot": 27,
        "pts": 15,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 56
      },
      {
        "cod": "X7",
        "orig": 3,
        "destinos": [
          {
            "z": 1,
            "pct": 25
          },
          {
            "z": 8,
            "pct": 25
          },
          {
            "z": 7,
            "pct": 25
          },
          {
            "z": 6,
            "pct": 12
          }
        ],
        "eff": 62,
        "tot": 13,
        "pts": 8,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 62
      },
      {
        "cod": "XM",
        "orig": 3,
        "destinos": [
          {
            "z": 1,
            "pct": 45
          },
          {
            "z": 6,
            "pct": 27
          },
          {
            "z": 8,
            "pct": 27
          }
        ],
        "eff": 48,
        "tot": 19,
        "pts": 11,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 58
      },
      {
        "cod": "X2",
        "orig": 3,
        "destinos": [
          {
            "z": 9,
            "pct": 100
          }
        ],
        "eff": 67,
        "tot": 3,
        "pts": 2,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 67
      }
    ],
    "saques": [
      {
        "cod": "SM",
        "tipo": "FLOTADO",
        "orig": 6,
        "destinos": [
          {
            "z": 5,
            "pct": 30
          },
          {
            "z": 7,
            "pct": 22
          },
          {
            "z": 6,
            "pct": 22
          },
          {
            "z": 8,
            "pct": 11
          },
          {
            "z": 1,
            "pct": 8
          },
          {
            "z": 9,
            "pct": 8
          }
        ],
        "eff": -10,
        "tot": 38,
        "pts": 0,
        "plus": 3,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "SQ",
        "tipo": "POTENCIA",
        "orig": 6,
        "destinos": [],
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      }
    ],
    "video": 0,
    "recepcion": {}
  },
  {
    "num": 4,
    "nombre": "4 Vazquez E.",
    "pos": "ARMADOR",
    "color": "#f59e0b",
    "info": {},
    "ataques": [],
    "saques": [
      {
        "cod": "SM",
        "tipo": "FLOTADO",
        "orig": 6,
        "destinos": [
          {
            "z": 6,
            "pct": 35
          },
          {
            "z": 1,
            "pct": 18
          },
          {
            "z": 9,
            "pct": 17
          },
          {
            "z": 8,
            "pct": 12
          },
          {
            "z": 7,
            "pct": 10
          },
          {
            "z": 5,
            "pct": 8
          }
        ],
        "eff": 9,
        "tot": 74,
        "pts": 6,
        "plus": 5,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 8
      },
      {
        "cod": "SQ",
        "tipo": "POTENCIA",
        "orig": 6,
        "destinos": [],
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      }
    ],
    "video": 0,
    "recepcion": {}
  },
  {
    "num": 5,
    "nombre": "5 Ramos I.",
    "pos": "OPUESTO",
    "color": "#818cf8",
    "info": {},
    "ataques": [
      {
        "cod": "X6",
        "orig": 2,
        "destinos": [
          {
            "z": 1,
            "pct": 18
          },
          {
            "z": 9,
            "pct": 18
          },
          {
            "z": 7,
            "pct": 18
          },
          {
            "z": 6,
            "pct": 12
          }
        ],
        "eff": 32,
        "tot": 40,
        "pts": 17,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 43
      },
      {
        "cod": "V6",
        "orig": 2,
        "destinos": [
          {
            "z": 1,
            "pct": 60
          },
          {
            "z": 5,
            "pct": 20
          }
        ],
        "eff": null,
        "tot": 10,
        "pts": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "X8",
        "orig": 9,
        "destinos": [
          {
            "z": 5,
            "pct": 50
          },
          {
            "z": 6,
            "pct": 19
          },
          {
            "z": 1,
            "pct": 12
          },
          {
            "z": 9,
            "pct": 6
          }
        ],
        "eff": 25,
        "tot": 32,
        "pts": 16,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 51
      },
      {
        "cod": "V8",
        "orig": 9,
        "destinos": [
          {
            "z": 1,
            "pct": 38
          },
          {
            "z": 9,
            "pct": 12
          },
          {
            "z": 6,
            "pct": 12
          }
        ],
        "eff": 38,
        "tot": 16,
        "pts": 8,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 51
      },
      {
        "cod": "X5",
        "orig": 4,
        "destinos": [
          {
            "z": 8,
            "pct": 100
          }
        ],
        "eff": 100,
        "tot": 1,
        "pts": 1,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 100
      }
    ],
    "saques": [
      {
        "cod": "SM",
        "tipo": "FLOTADO",
        "orig": 6,
        "destinos": [
          {
            "z": 6,
            "pct": 100
          }
        ],
        "eff": -50,
        "tot": 2,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "SQ",
        "tipo": "POTENCIA",
        "orig": 6,
        "destinos": [
          {
            "z": 5,
            "pct": 39
          },
          {
            "z": 6,
            "pct": 37
          },
          {
            "z": 1,
            "pct": 16
          },
          {
            "z": 9,
            "pct": 5
          },
          {
            "z": 7,
            "pct": 3
          }
        ],
        "eff": -29,
        "tot": 45,
        "pts": 4,
        "plus": 5,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 9
      }
    ],
    "video": 0,
    "recepcion": {}
  },
  {
    "num": 6,
    "nombre": "6 Villarruel J.",
    "pos": "PUNTA",
    "color": "#22c55e",
    "info": {},
    "ataques": [
      {
        "cod": "X5",
        "orig": 4,
        "destinos": [
          {
            "z": 2,
            "pct": 100
          }
        ],
        "eff": -29,
        "tot": 7,
        "pts": 1,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 14
      }
    ],
    "saques": [
      {
        "cod": "SM",
        "tipo": "FLOTADO",
        "orig": 6,
        "destinos": [],
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "SQ",
        "tipo": "POTENCIA",
        "orig": 6,
        "destinos": [
          {
            "z": 6,
            "pct": 100
          }
        ],
        "eff": -29,
        "tot": 6,
        "pts": 0,
        "plus": 1,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      }
    ],
    "video": 0,
    "recepcion": {
      "num": 6,
      "flotado": {
        "desde_z1": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        },
        "desde_z6": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        },
        "desde_z5": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        },
        "desde_z6": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        },
        "desde_z5": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        }
      }
    }
  },
  {
    "num": 9,
    "nombre": "9 Godoy M.",
    "pos": "ARMADOR",
    "color": "#f59e0b",
    "info": {},
    "ataques": [],
    "saques": [
      {
        "cod": "SM",
        "tipo": "FLOTADO",
        "orig": 6,
        "destinos": [
          {
            "z": 6,
            "pct": 31
          },
          {
            "z": 7,
            "pct": 22
          },
          {
            "z": 1,
            "pct": 18
          },
          {
            "z": 8,
            "pct": 16
          },
          {
            "z": 9,
            "pct": 13
          }
        ],
        "eff": 4,
        "tot": 50,
        "pts": 2,
        "plus": 6,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 4
      },
      {
        "cod": "SQ",
        "tipo": "POTENCIA",
        "orig": 6,
        "destinos": [],
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      }
    ],
    "video": 0,
    "recepcion": {}
  },
  {
    "num": 10,
    "nombre": "10 Viera M.",
    "pos": "CENTRAL",
    "color": "#f97316",
    "info": {},
    "ataques": [],
    "saques": [
      {
        "cod": "SM",
        "tipo": "FLOTADO",
        "orig": 6,
        "destinos": [],
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "SQ",
        "tipo": "POTENCIA",
        "orig": 6,
        "destinos": [],
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      }
    ],
    "video": 0,
    "recepcion": {}
  },
  {
    "num": 11,
    "nombre": "11 Durdos V.",
    "pos": "PUNTA",
    "color": "#22c55e",
    "info": {},
    "ataques": [
      {
        "cod": "X5",
        "orig": 4,
        "destinos": [
          {
            "z": 7,
            "pct": 21
          },
          {
            "z": 8,
            "pct": 19
          },
          {
            "z": 1,
            "pct": 14
          },
          {
            "z": 6,
            "pct": 9
          }
        ],
        "eff": 30,
        "tot": 98,
        "pts": 43,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 44
      },
      {
        "cod": "V5",
        "orig": 4,
        "destinos": [
          {
            "z": 1,
            "pct": 29
          },
          {
            "z": 2,
            "pct": 14
          },
          {
            "z": 6,
            "pct": 14
          },
          {
            "z": 9,
            "pct": 7
          }
        ],
        "eff": null,
        "tot": 14,
        "pts": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "XP",
        "orig": 8,
        "destinos": [
          {
            "z": 1,
            "pct": 38
          },
          {
            "z": 6,
            "pct": 38
          },
          {
            "z": 8,
            "pct": 12
          },
          {
            "z": 5,
            "pct": 12
          }
        ],
        "eff": 16,
        "tot": 19,
        "pts": 8,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 42
      }
    ],
    "saques": [
      {
        "cod": "SM",
        "tipo": "FLOTADO",
        "orig": 6,
        "destinos": [
          {
            "z": 7,
            "pct": 23
          },
          {
            "z": 5,
            "pct": 21
          },
          {
            "z": 9,
            "pct": 19
          },
          {
            "z": 6,
            "pct": 14
          },
          {
            "z": 1,
            "pct": 14
          },
          {
            "z": 8,
            "pct": 9
          }
        ],
        "eff": -8,
        "tot": 44,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "SQ",
        "tipo": "POTENCIA",
        "orig": 6,
        "destinos": [
          {
            "z": 5,
            "pct": 42
          },
          {
            "z": 6,
            "pct": 42
          },
          {
            "z": 1,
            "pct": 8
          },
          {
            "z": 8,
            "pct": 8
          }
        ],
        "eff": -35,
        "tot": 33,
        "pts": 3,
        "plus": 4,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 9
      }
    ],
    "video": 0,
    "recepcion": {
      "num": 11,
      "flotado": {
        "desde_z1": {
          "total": {
            "tot": 2,
            "eff": 50,
            "pos": 100,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 2,
            "eff": 0,
            "pos": 100,
            "neg": 0
          }
        },
        "desde_z6": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        },
        "desde_z5": {
          "total": {
            "tot": 3,
            "eff": 67,
            "pos": 67,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 2,
            "eff": 50,
            "pos": 50,
            "neg": 0
          },
          "p5": {
            "tot": 1,
            "eff": 100,
            "pos": 100,
            "neg": 0
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "total": {
            "tot": 4,
            "eff": 50,
            "pos": 75,
            "neg": 0
          },
          "p1": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 2,
            "eff": 0,
            "pos": 100,
            "neg": 0
          },
          "p5": {
            "tot": 1,
            "eff": 100,
            "pos": 100,
            "neg": 0
          }
        },
        "desde_z6": {
          "total": {
            "tot": 4,
            "eff": 150,
            "pos": 100,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 3,
            "eff": 100,
            "pos": 100,
            "neg": 0
          },
          "p5": {
            "tot": 1,
            "eff": 100,
            "pos": 100,
            "neg": 0
          }
        },
        "desde_z5": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        }
      }
    }
  },
  {
    "num": 12,
    "nombre": "12 Zanotti J.",
    "pos": "LIBERO",
    "color": "#06b6d4",
    "info": {},
    "ataques": [],
    "saques": [
      {
        "cod": "SM",
        "tipo": "FLOTADO",
        "orig": 6,
        "destinos": [],
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "SQ",
        "tipo": "POTENCIA",
        "orig": 6,
        "destinos": [],
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      }
    ],
    "video": 0,
    "recepcion": {
      "num": 12,
      "flotado": {
        "desde_z1": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        },
        "desde_z6": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        },
        "desde_z5": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        },
        "desde_z6": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        },
        "desde_z5": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        }
      }
    }
  },
  {
    "num": 13,
    "nombre": "13 Rojas Caruso M.",
    "pos": "PUNTA",
    "color": "#22c55e",
    "info": {},
    "ataques": [],
    "saques": [
      {
        "cod": "SM",
        "tipo": "FLOTADO",
        "orig": 6,
        "destinos": [
          {
            "z": 6,
            "pct": 50
          },
          {
            "z": 9,
            "pct": 50
          }
        ],
        "eff": -25,
        "tot": 4,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "SQ",
        "tipo": "POTENCIA",
        "orig": 6,
        "destinos": [],
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      }
    ],
    "video": 0,
    "recepcion": {
      "num": 13,
      "flotado": {
        "desde_z1": {
          "total": {
            "tot": 2,
            "eff": 50,
            "pos": 50,
            "neg": 0
          },
          "p1": {
            "tot": 1,
            "eff": 100,
            "pos": 100,
            "neg": 0
          },
          "p6": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        },
        "desde_z6": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        },
        "desde_z5": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        },
        "desde_z6": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        },
        "desde_z5": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        }
      }
    }
  },
  {
    "num": 14,
    "nombre": "14 Nielson R.",
    "pos": "PUNTA",
    "color": "#22c55e",
    "info": {},
    "ataques": [
      {
        "cod": "X5",
        "orig": 4,
        "destinos": [
          {
            "z": 1,
            "pct": 23
          },
          {
            "z": 2,
            "pct": 18
          },
          {
            "z": 7,
            "pct": 14
          },
          {
            "z": 9,
            "pct": 9
          }
        ],
        "eff": 34,
        "tot": 99,
        "pts": 44,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 45
      },
      {
        "cod": "V5",
        "orig": 4,
        "destinos": [
          {
            "z": 4,
            "pct": 22
          },
          {
            "z": 1,
            "pct": 13
          },
          {
            "z": 2,
            "pct": 9
          },
          {
            "z": 6,
            "pct": 9
          }
        ],
        "eff": 21,
        "tot": 66,
        "pts": 23,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 35
      },
      {
        "cod": "X6",
        "orig": 2,
        "destinos": [],
        "eff": 33,
        "tot": 3,
        "pts": 1,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 33
      }
    ],
    "saques": [
      {
        "cod": "SM",
        "tipo": "FLOTADO",
        "orig": 6,
        "destinos": [
          {
            "z": 6,
            "pct": 34
          },
          {
            "z": 7,
            "pct": 21
          },
          {
            "z": 5,
            "pct": 21
          },
          {
            "z": 9,
            "pct": 10
          },
          {
            "z": 8,
            "pct": 7
          },
          {
            "z": 1,
            "pct": 7
          }
        ],
        "eff": 1,
        "tot": 29,
        "pts": 0,
        "plus": 3,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "SQ",
        "tipo": "POTENCIA",
        "orig": 6,
        "destinos": [
          {
            "z": 6,
            "pct": 58
          },
          {
            "z": 1,
            "pct": 29
          },
          {
            "z": 5,
            "pct": 10
          },
          {
            "z": 7,
            "pct": 3
          }
        ],
        "eff": 3,
        "tot": 77,
        "pts": 4,
        "plus": 11,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 5
      }
    ],
    "video": 0,
    "recepcion": {
      "num": 14,
      "flotado": {
        "desde_z1": {
          "total": {
            "tot": 2,
            "eff": 75,
            "pos": 100,
            "neg": 0
          },
          "p1": {
            "tot": 2,
            "eff": 50,
            "pos": 50,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        },
        "desde_z6": {
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        },
        "desde_z5": {
          "total": {
            "tot": 6,
            "eff": 50,
            "pos": 83,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 4,
            "eff": 38,
            "pos": 75,
            "neg": 0
          },
          "p5": {
            "tot": 2,
            "eff": 50,
            "pos": 100,
            "neg": 0
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "total": {
            "tot": 2,
            "eff": 50,
            "pos": 50,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 1,
            "eff": 100,
            "pos": 100,
            "neg": 0
          },
          "p5": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        },
        "desde_z6": {
          "total": {
            "tot": 2,
            "eff": 75,
            "pos": 50,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 2,
            "eff": 50,
            "pos": 50,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        },
        "desde_z5": {
          "total": {
            "tot": 2,
            "eff": 50,
            "pos": 100,
            "neg": 0
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 2,
            "eff": 50,
            "pos": 100,
            "neg": 0
          },
          "p5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          }
        }
      }
    }
  },
  {
    "num": 15,
    "nombre": "15 Rotezzi R.",
    "pos": "CENTRAL",
    "color": "#f97316",
    "info": {},
    "ataques": [
      {
        "cod": "X1",
        "orig": 3,
        "destinos": [
          {
            "z": 9,
            "pct": 40
          },
          {
            "z": 7,
            "pct": 40
          },
          {
            "z": 1,
            "pct": 20
          }
        ],
        "eff": 44,
        "tot": 9,
        "pts": 5,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 56
      },
      {
        "cod": "XM",
        "orig": 3,
        "destinos": [
          {
            "z": 6,
            "pct": 40
          },
          {
            "z": 1,
            "pct": 20
          },
          {
            "z": 9,
            "pct": 20
          },
          {
            "z": 8,
            "pct": 20
          }
        ],
        "eff": 55,
        "tot": 9,
        "pts": 5,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 55
      }
    ],
    "saques": [
      {
        "cod": "SM",
        "tipo": "FLOTADO",
        "orig": 6,
        "destinos": [
          {
            "z": 6,
            "pct": 43
          },
          {
            "z": 1,
            "pct": 26
          },
          {
            "z": 9,
            "pct": 26
          },
          {
            "z": 8,
            "pct": 4
          }
        ],
        "eff": 1,
        "tot": 26,
        "pts": 1,
        "plus": 1,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 4
      },
      {
        "cod": "SQ",
        "tipo": "POTENCIA",
        "orig": 6,
        "destinos": [],
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      }
    ],
    "video": 0,
    "recepcion": {}
  },
  {
    "num": 17,
    "nombre": "17 Herbsommer L.",
    "pos": "CENTRAL",
    "color": "#f97316",
    "info": {},
    "ataques": [
      {
        "cod": "XM",
        "orig": 3,
        "destinos": [
          {
            "z": 9,
            "pct": 29
          },
          {
            "z": 7,
            "pct": 29
          },
          {
            "z": 6,
            "pct": 21
          },
          {
            "z": 8,
            "pct": 14
          }
        ],
        "eff": 24,
        "tot": 29,
        "pts": 14,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 49
      },
      {
        "cod": "X1",
        "orig": 3,
        "destinos": [
          {
            "z": 9,
            "pct": 33
          },
          {
            "z": 5,
            "pct": 33
          },
          {
            "z": 8,
            "pct": 17
          },
          {
            "z": 7,
            "pct": 17
          }
        ],
        "eff": 50,
        "tot": 12,
        "pts": 6,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 50
      },
      {
        "cod": "X7",
        "orig": 3,
        "destinos": [
          {
            "z": 9,
            "pct": 50
          },
          {
            "z": 2,
            "pct": 25
          },
          {
            "z": 8,
            "pct": 25
          }
        ],
        "eff": 50,
        "tot": 8,
        "pts": 4,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 50
      }
    ],
    "saques": [
      {
        "cod": "SM",
        "tipo": "FLOTADO",
        "orig": 6,
        "destinos": [
          {
            "z": 7,
            "pct": 29
          },
          {
            "z": 6,
            "pct": 23
          },
          {
            "z": 5,
            "pct": 21
          },
          {
            "z": 8,
            "pct": 15
          },
          {
            "z": 1,
            "pct": 8
          },
          {
            "z": 9,
            "pct": 4
          }
        ],
        "eff": -3,
        "tot": 54,
        "pts": 0,
        "plus": 5,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "SQ",
        "tipo": "POTENCIA",
        "orig": 6,
        "destinos": [],
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      }
    ],
    "video": 0,
    "recepcion": {}
  },
  {
    "num": 18,
    "nombre": "18 Acosta W.",
    "pos": "OPUESTO",
    "color": "#818cf8",
    "info": {},
    "ataques": [
      {
        "cod": "X6",
        "orig": 2,
        "destinos": [
          {
            "z": 9,
            "pct": 23
          },
          {
            "z": 1,
            "pct": 8
          },
          {
            "z": 6,
            "pct": 8
          },
          {
            "z": 5,
            "pct": 8
          }
        ],
        "eff": 30,
        "tot": 27,
        "pts": 13,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 48
      },
      {
        "cod": "V6",
        "orig": 2,
        "destinos": [
          {
            "z": 1,
            "pct": 75
          },
          {
            "z": 7,
            "pct": 25
          }
        ],
        "eff": null,
        "tot": 4,
        "pts": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "X8",
        "orig": 9,
        "destinos": [
          {
            "z": 5,
            "pct": 31
          },
          {
            "z": 1,
            "pct": 23
          },
          {
            "z": 4,
            "pct": 15
          },
          {
            "z": 6,
            "pct": 8
          }
        ],
        "eff": 29,
        "tot": 24,
        "pts": 13,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 54
      },
      {
        "cod": "V8",
        "orig": 9,
        "destinos": [
          {
            "z": 1,
            "pct": 50
          }
        ],
        "eff": 20,
        "tot": 5,
        "pts": 2,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 40
      }
    ],
    "saques": [
      {
        "cod": "SM",
        "tipo": "FLOTADO",
        "orig": 6,
        "destinos": [],
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "SQ",
        "tipo": "POTENCIA",
        "orig": 6,
        "destinos": [
          {
            "z": 6,
            "pct": 58
          },
          {
            "z": 5,
            "pct": 38
          },
          {
            "z": 1,
            "pct": 4
          }
        ],
        "eff": -13,
        "tot": 36,
        "pts": 4,
        "plus": 3,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 11
      }
    ],
    "video": 0,
    "recepcion": {}
  }
];

const PARTIDOS_ARMADOR = {
  "titular": {
    "nombre": "Vazquez E.",
    "rotaciones": [
      {
        "pos": "P1",
        "total": 30,
        "dist": [
          {
            "zona": 4,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          },
          {
            "zona": 3,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          },
          {
            "zona": 2,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          },
          {
            "zona": 6,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          }
        ]
      },
      {
        "pos": "P6",
        "total": 24,
        "dist": [
          {
            "zona": 4,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          },
          {
            "zona": 3,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          },
          {
            "zona": 2,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          },
          {
            "zona": 6,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          }
        ]
      },
      {
        "pos": "P5",
        "total": 26,
        "dist": [
          {
            "zona": 4,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          },
          {
            "zona": 3,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          },
          {
            "zona": 2,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          },
          {
            "zona": 6,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          }
        ]
      },
      {
        "pos": "P4",
        "total": 25,
        "dist": [
          {
            "zona": 4,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          },
          {
            "zona": 3,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          },
          {
            "zona": 2,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          },
          {
            "zona": 6,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          }
        ]
      },
      {
        "pos": "P3",
        "total": 24,
        "dist": [
          {
            "zona": 4,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          },
          {
            "zona": 3,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          },
          {
            "zona": 2,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          },
          {
            "zona": 6,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          }
        ]
      },
      {
        "pos": "P2",
        "total": 18,
        "dist": [
          {
            "zona": 4,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          },
          {
            "zona": 3,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          },
          {
            "zona": 2,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          },
          {
            "zona": 6,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          }
        ]
      }
    ],
    "pills": [
      {
        "label": "P1",
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "pts_pct": 0,
        "err_pct": 0
      },
      {
        "label": "P6",
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "pts_pct": 0,
        "err_pct": 0
      },
      {
        "label": "P5",
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "pts_pct": 0,
        "err_pct": 0
      },
      {
        "label": "P4",
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "pts_pct": 0,
        "err_pct": 0
      },
      {
        "label": "P3",
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "pts_pct": 0,
        "err_pct": 0
      },
      {
        "label": "P2",
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "pts_pct": 0,
        "err_pct": 0
      },
      {
        "label": "SO",
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "pts_pct": 0,
        "err_pct": 0
      },
      {
        "label": "TR",
        "eff": 0,
        "tot": 0,
        "pts": 0,
        "pts_pct": 0,
        "err_pct": 0
      }
    ],
    "recepcion": [],
    "so": {},
    "tr": {}
  },
  "suplente": {
    "nombre": "Godoy M.",
    "rotaciones": [
      {
        "pos": "P1",
        "total": 27,
        "dist": [
          {
            "zona": 4,
            "tot": 4,
            "pts": 0,
            "pct": 50,
            "pct_p": 0
          },
          {
            "zona": 3,
            "tot": 3,
            "pts": 0,
            "pct": 38,
            "pct_p": 0
          },
          {
            "zona": 2,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          },
          {
            "zona": 6,
            "tot": 1,
            "pts": 0,
            "pct": 12,
            "pct_p": 0
          }
        ]
      },
      {
        "pos": "P6",
        "total": 27,
        "dist": [
          {
            "zona": 4,
            "tot": 3,
            "pts": 0,
            "pct": 38,
            "pct_p": 0
          },
          {
            "zona": 3,
            "tot": 2,
            "pts": 0,
            "pct": 25,
            "pct_p": 0
          },
          {
            "zona": 2,
            "tot": 3,
            "pts": 0,
            "pct": 38,
            "pct_p": 0
          },
          {
            "zona": 6,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          }
        ]
      },
      {
        "pos": "P5",
        "total": 24,
        "dist": [
          {
            "zona": 4,
            "tot": 3,
            "pts": 0,
            "pct": 43,
            "pct_p": 0
          },
          {
            "zona": 3,
            "tot": 3,
            "pts": 0,
            "pct": 43,
            "pct_p": 0
          },
          {
            "zona": 2,
            "tot": 1,
            "pts": 0,
            "pct": 14,
            "pct_p": 0
          },
          {
            "zona": 6,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          }
        ]
      },
      {
        "pos": "P4",
        "total": 18,
        "dist": [
          {
            "zona": 4,
            "tot": 3,
            "pts": 0,
            "pct": 60,
            "pct_p": 0
          },
          {
            "zona": 3,
            "tot": 2,
            "pts": 0,
            "pct": 40,
            "pct_p": 0
          },
          {
            "zona": 2,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          },
          {
            "zona": 6,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          }
        ]
      },
      {
        "pos": "P3",
        "total": 13,
        "dist": [
          {
            "zona": 4,
            "tot": 1,
            "pts": 0,
            "pct": 25,
            "pct_p": 0
          },
          {
            "zona": 3,
            "tot": 2,
            "pts": 0,
            "pct": 50,
            "pct_p": 0
          },
          {
            "zona": 2,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          },
          {
            "zona": 6,
            "tot": 0,
            "pts": 0,
            "pct": 0,
            "pct_p": 0
          }
        ]
      },
      {
        "pos": "P2",
        "total": 12,
        "dist": [
          {
            "zona": 4,
            "tot": 2,
            "pts": 0,
            "pct": 40,
            "pct_p": 0
          },
          {
            "zona": 3,
            "tot": 1,
            "pts": 0,
            "pct": 20,
            "pct_p": 0
          },
          {
            "zona": 2,
            "tot": 1,
            "pts": 0,
            "pct": 20,
            "pct_p": 0
          },
          {
            "zona": 6,
            "tot": 1,
            "pts": 0,
            "pct": 20,
            "pct_p": 0
          }
        ]
      }
    ],
    "pills": [
      {
        "label": "P1",
        "eff": 0,
        "tot": 8,
        "pts": 0,
        "pts_pct": 0,
        "err_pct": 0
      },
      {
        "label": "P6",
        "eff": 0,
        "tot": 8,
        "pts": 0,
        "pts_pct": 0,
        "err_pct": 0
      },
      {
        "label": "P5",
        "eff": 0,
        "tot": 7,
        "pts": 0,
        "pts_pct": 0,
        "err_pct": 0
      },
      {
        "label": "P4",
        "eff": 0,
        "tot": 5,
        "pts": 0,
        "pts_pct": 0,
        "err_pct": 0
      },
      {
        "label": "P3",
        "eff": 0,
        "tot": 4,
        "pts": 0,
        "pts_pct": 0,
        "err_pct": 0
      },
      {
        "label": "P2",
        "eff": 0,
        "tot": 5,
        "pts": 0,
        "pts_pct": 0,
        "err_pct": 0
      },
      {
        "label": "SO",
        "eff": 57,
        "tot": 37,
        "pts": 25,
        "pts_pct": 68,
        "err_pct": 11
      },
      {
        "label": "TR",
        "eff": 32,
        "tot": 47,
        "pts": 20,
        "pts_pct": 43,
        "err_pct": 11
      }
    ],
    "recepcion": [],
    "so": {},
    "tr": {}
  }
};
const PARTIDOS_INDIVIDUAL = [
  {
    "nombre": "UNTREF",
    "rival": "UNTREF",
    "fecha": "01/05/2026",
    "torneo": "División de Honor",
    "resultado": "V",
    "sets_casla": "3",
    "sets_rival": "1",
    "jugadores": [
      {
        "num": 0,
        "nombre": "0 Romeo Winer A.",
        "pos": "",
        "color": "#64748b",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 3,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 4,
                "eff": 25,
                "pos": 50,
                "neg": 25
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 4,
                "eff": 25,
                "pos": 50,
                "neg": 25
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 18,
                "eff": 14,
                "pos": 33,
                "neg": 17
              },
              "p1": {
                "tot": 14,
                "eff": 14,
                "pos": 36,
                "neg": 21
              },
              "p6": {
                "tot": 4,
                "eff": 12,
                "pos": 25,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 6,
                "eff": 8,
                "pos": 33,
                "neg": 17
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 5,
                "eff": 0,
                "pos": 40,
                "neg": 0
              },
              "p5": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 100
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0
              },
              "p1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 2,
        "nombre": "2 Ojuez A.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [
          {
            "cod": "X1",
            "orig": 3,
            "destinos": [
              {
                "z": 8,
                "pct": 100
              }
            ],
            "eff": 50,
            "tot": 2,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "X7",
            "orig": 3,
            "destinos": [
              {
                "z": 7,
                "pct": 100
              }
            ],
            "eff": 50,
            "tot": 2,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "XM",
            "orig": 3,
            "destinos": [
              {
                "z": 1,
                "pct": 50
              },
              {
                "z": 6,
                "pct": 50
              }
            ],
            "eff": 67,
            "tot": 3,
            "pts": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 67
          },
          {
            "cod": "X2",
            "orig": 3,
            "destinos": [
              {
                "z": 9,
                "pct": 100
              }
            ],
            "eff": 100,
            "tot": 1,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 100
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 43
              },
              {
                "z": 5,
                "pct": 29
              },
              {
                "z": 7,
                "pct": 14
              },
              {
                "z": 8,
                "pct": 14
              }
            ],
            "eff": -7,
            "tot": 7,
            "pts": 0,
            "plus": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 4,
        "nombre": "4 Vazquez E.",
        "pos": "ARMADOR",
        "color": "#f59e0b",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 5,
        "nombre": "5 Ramos I.",
        "pos": "OPUESTO",
        "color": "#818cf8",
        "info": {},
        "ataques": [
          {
            "cod": "X6",
            "orig": 2,
            "destinos": [
              {
                "z": 1,
                "pct": 38
              },
              {
                "z": 9,
                "pct": 25
              },
              {
                "z": 7,
                "pct": 12
              }
            ],
            "eff": 54,
            "tot": 13,
            "pts": 8,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 62
          },
          {
            "cod": "V6",
            "orig": 2,
            "destinos": [
              {
                "z": 1,
                "pct": 100
              }
            ],
            "eff": null,
            "tot": 2,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "X8",
            "orig": 9,
            "destinos": [
              {
                "z": 1,
                "pct": 50
              },
              {
                "z": 5,
                "pct": 50
              }
            ],
            "eff": 25,
            "tot": 8,
            "pts": 4,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "V8",
            "orig": 9,
            "destinos": [
              {
                "z": 1,
                "pct": 50
              }
            ],
            "eff": 50,
            "tot": 4,
            "pts": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 59
              },
              {
                "z": 5,
                "pct": 24
              },
              {
                "z": 1,
                "pct": 12
              },
              {
                "z": 9,
                "pct": 6
              }
            ],
            "eff": -17,
            "tot": 19,
            "pts": 3,
            "plus": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 16
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 6,
        "nombre": "6 Villarruel J.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 6,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 9,
        "nombre": "9 Godoy M.",
        "pos": "ARMADOR",
        "color": "#f59e0b",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 9,
                "pct": 33
              },
              {
                "z": 6,
                "pct": 33
              },
              {
                "z": 1,
                "pct": 27
              },
              {
                "z": 8,
                "pct": 7
              }
            ],
            "eff": -8,
            "tot": 18,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 10,
        "nombre": "10 Viera M.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 11,
        "nombre": "11 Durdos V.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [
          {
            "cod": "X5",
            "orig": 4,
            "destinos": [
              {
                "z": 7,
                "pct": 33
              },
              {
                "z": 8,
                "pct": 22
              },
              {
                "z": 1,
                "pct": 11
              },
              {
                "z": 2,
                "pct": 11
              }
            ],
            "eff": 60,
            "tot": 15,
            "pts": 9,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 60
          },
          {
            "cod": "V5",
            "orig": 4,
            "destinos": [
              {
                "z": 1,
                "pct": 25
              },
              {
                "z": 6,
                "pct": 25
              }
            ],
            "eff": null,
            "tot": 4,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "XP",
            "orig": 8,
            "destinos": [
              {
                "z": 6,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 4,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 25
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 46
              },
              {
                "z": 5,
                "pct": 38
              },
              {
                "z": 1,
                "pct": 15
              }
            ],
            "eff": -27,
            "tot": 16,
            "pts": 2,
            "plus": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 12
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 11,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 2,
                "eff": 50,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 2,
                "eff": 0,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 3,
                "eff": 67,
                "pos": 67,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0
              },
              "p5": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 4,
                "eff": 50,
                "pos": 75,
                "neg": 0
              },
              "p1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 0,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 4,
                "eff": 150,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 3,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 12,
        "nombre": "12 Zanotti J.",
        "pos": "LIBERO",
        "color": "#06b6d4",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 12,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 13,
        "nombre": "13 Rojas Caruso M.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 13,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0
              },
              "p1": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 14,
        "nombre": "14 Nielson R.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [
          {
            "cod": "X5",
            "orig": 4,
            "destinos": [
              {
                "z": 1,
                "pct": 62
              },
              {
                "z": 9,
                "pct": 12
              },
              {
                "z": 7,
                "pct": 12
              }
            ],
            "eff": 41,
            "tot": 17,
            "pts": 8,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 47
          },
          {
            "cod": "V5",
            "orig": 4,
            "destinos": [
              {
                "z": 4,
                "pct": 100
              }
            ],
            "eff": 11,
            "tot": 9,
            "pts": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 22
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 8,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 67
              },
              {
                "z": 1,
                "pct": 17
              },
              {
                "z": 5,
                "pct": 17
              }
            ],
            "eff": -8,
            "tot": 13,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 14,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 6,
                "eff": 50,
                "pos": 83,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 4,
                "eff": 38,
                "pos": 75,
                "neg": 0
              },
              "p5": {
                "tot": 2,
                "eff": 50,
                "pos": 100,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 2,
                "eff": 75,
                "pos": 50,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 2,
                "eff": 50,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 50,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 15,
        "nombre": "15 Rotezzi R.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [
          {
            "cod": "X1",
            "orig": 3,
            "destinos": [
              {
                "z": 9,
                "pct": 67
              },
              {
                "z": 1,
                "pct": 33
              }
            ],
            "eff": 33,
            "tot": 6,
            "pts": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "XM",
            "orig": 3,
            "destinos": [
              {
                "z": 9,
                "pct": 33
              },
              {
                "z": 6,
                "pct": 33
              },
              {
                "z": 8,
                "pct": 33
              }
            ],
            "eff": 100,
            "tot": 3,
            "pts": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 100
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 82
              },
              {
                "z": 1,
                "pct": 18
              }
            ],
            "eff": 10,
            "tot": 13,
            "pts": 1,
            "plus": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 8
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 17,
        "nombre": "17 Herbsommer L.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 18,
        "nombre": "18 Acosta W.",
        "pos": "OPUESTO",
        "color": "#818cf8",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "Vazquez E.",
        "rotaciones": [
          {
            "pos": "P1",
            "total": 0,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P6",
            "total": 0,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P5",
            "total": 0,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P4",
            "total": 0,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P3",
            "total": 0,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P2",
            "total": 0,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P6",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P5",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P4",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P3",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P2",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "SO",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "TR",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          }
        ],
        "recepcion": [],
        "so": {},
        "tr": {}
      },
      "suplente": {
        "nombre": "Godoy M.",
        "rotaciones": [
          {
            "pos": "P1",
            "total": 8,
            "dist": [
              {
                "zona": 4,
                "tot": 4,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 0,
                "pct": 38,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 0,
                "pct": 12,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P6",
            "total": 8,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 0,
                "pct": 38,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 0,
                "pct": 25,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 0,
                "pct": 38,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P5",
            "total": 7,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 0,
                "pct": 43,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 0,
                "pct": 43,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 14,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P4",
            "total": 5,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 0,
                "pct": 60,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 0,
                "pct": 40,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P3",
            "total": 4,
            "dist": [
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 25,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P2",
            "total": 5,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 0,
                "pct": 40,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 0,
            "tot": 8,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P6",
            "eff": 0,
            "tot": 8,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P5",
            "eff": 0,
            "tot": 7,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P4",
            "eff": 0,
            "tot": 5,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P3",
            "eff": 0,
            "tot": 4,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P2",
            "eff": 0,
            "tot": 5,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "SO",
            "eff": 57,
            "tot": 37,
            "pts": 25,
            "pts_pct": 68,
            "err_pct": 11
          },
          {
            "label": "TR",
            "eff": 32,
            "tot": 47,
            "pts": 20,
            "pts_pct": 43,
            "err_pct": 11
          }
        ],
        "recepcion": [],
        "so": {},
        "tr": {}
      }
    }
  },
  {
    "nombre": "CIUDAD",
    "rival": "CIUDAD",
    "fecha": "05/05/2026",
    "torneo": "División de Honor",
    "resultado": "D",
    "sets_casla": "",
    "sets_rival": "3",
    "jugadores": [
      {
        "num": 0,
        "nombre": "0 Romeo Winer A.",
        "pos": "",
        "color": "#64748b",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 3,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 8,
                "eff": 25,
                "pos": 50,
                "neg": 25
              },
              "p1": {
                "tot": 3,
                "eff": 33,
                "pos": 67,
                "neg": 33
              },
              "p6": {
                "tot": 5,
                "eff": 20,
                "pos": 60,
                "neg": 20
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 8,
                "eff": -38,
                "pos": 25,
                "neg": 38
              },
              "p1": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 7,
                "eff": -36,
                "pos": 14,
                "neg": 43
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 15,
                "eff": 20,
                "pos": 33,
                "neg": 0
              },
              "p1": {
                "tot": 10,
                "eff": 0,
                "pos": 30,
                "neg": 0
              },
              "p6": {
                "tot": 5,
                "eff": 30,
                "pos": 40,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 1,
                "eff": 0,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 3,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 2,
        "nombre": "2 Ojuez A.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [
          {
            "cod": "X7",
            "orig": 3,
            "destinos": [
              {
                "z": 1,
                "pct": 100
              }
            ],
            "eff": 100,
            "tot": 1,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 100
          },
          {
            "cod": "XM",
            "orig": 3,
            "destinos": [
              {
                "z": 6,
                "pct": 100
              }
            ],
            "eff": 50,
            "tot": 2,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 7,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 2,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 4,
        "nombre": "4 Vazquez E.",
        "pos": "ARMADOR",
        "color": "#f59e0b",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 5,
        "nombre": "5 Ramos I.",
        "pos": "OPUESTO",
        "color": "#818cf8",
        "info": {},
        "ataques": [
          {
            "cod": "X6",
            "orig": 2,
            "destinos": [
              {
                "z": 9,
                "pct": 25
              },
              {
                "z": 6,
                "pct": 25
              },
              {
                "z": 5,
                "pct": 25
              },
              {
                "z": 7,
                "pct": 25
              }
            ],
            "eff": 40,
            "tot": 10,
            "pts": 4,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 40
          },
          {
            "cod": "V6",
            "orig": 2,
            "destinos": [
              {
                "z": 1,
                "pct": 50
              },
              {
                "z": 5,
                "pct": 25
              }
            ],
            "eff": null,
            "tot": 4,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "X8",
            "orig": 9,
            "destinos": [
              {
                "z": 6,
                "pct": 67
              },
              {
                "z": 5,
                "pct": 33
              }
            ],
            "eff": 0,
            "tot": 8,
            "pts": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 38
          },
          {
            "cod": "V8",
            "orig": 9,
            "destinos": [
              {
                "z": 1,
                "pct": 25
              },
              {
                "z": 9,
                "pct": 25
              },
              {
                "z": 6,
                "pct": 25
              }
            ],
            "eff": 60,
            "tot": 5,
            "pts": 4,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 80
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 44
              },
              {
                "z": 5,
                "pct": 44
              },
              {
                "z": 9,
                "pct": 11
              }
            ],
            "eff": -20,
            "tot": 11,
            "pts": 0,
            "plus": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 6,
        "nombre": "6 Villarruel J.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 6,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 9,
        "nombre": "9 Godoy M.",
        "pos": "ARMADOR",
        "color": "#f59e0b",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 7,
                "pct": 64
              },
              {
                "z": 8,
                "pct": 29
              },
              {
                "z": 6,
                "pct": 7
              }
            ],
            "eff": 10,
            "tot": 15,
            "pts": 1,
            "plus": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 7
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 10,
        "nombre": "10 Viera M.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 11,
        "nombre": "11 Durdos V.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [
          {
            "cod": "X5",
            "orig": 4,
            "destinos": [
              {
                "z": 7,
                "pct": 40
              },
              {
                "z": 1,
                "pct": 20
              },
              {
                "z": 8,
                "pct": 20
              }
            ],
            "eff": 38,
            "tot": 8,
            "pts": 5,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 62
          },
          {
            "cod": "V5",
            "orig": 4,
            "destinos": [
              {
                "z": 1,
                "pct": 100
              }
            ],
            "eff": null,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "XP",
            "orig": 8,
            "destinos": [
              {
                "z": 1,
                "pct": 100
              }
            ],
            "eff": 50,
            "tot": 4,
            "pts": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 8,
                "pct": 40
              },
              {
                "z": 9,
                "pct": 20
              },
              {
                "z": 1,
                "pct": 20
              },
              {
                "z": 5,
                "pct": 20
              }
            ],
            "eff": -20,
            "tot": 5,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 50
              },
              {
                "z": 5,
                "pct": 50
              }
            ],
            "eff": -80,
            "tot": 5,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 11,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 5,
                "eff": 40,
                "pos": 80,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 4,
                "eff": 0,
                "pos": 75,
                "neg": 0
              },
              "p5": {
                "tot": 1,
                "eff": 0,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 2,
                "eff": 75,
                "pos": 50,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 3,
                "eff": 17,
                "pos": 33,
                "neg": 0
              },
              "p1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 25,
                "pos": 50,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 5,
                "eff": 0,
                "pos": 60,
                "neg": 40
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": -25,
                "pos": 50,
                "neg": 50
              },
              "p5": {
                "tot": 3,
                "eff": 33,
                "pos": 67,
                "neg": 33
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 12,
        "nombre": "12 Zanotti J.",
        "pos": "LIBERO",
        "color": "#06b6d4",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 12,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 13,
        "nombre": "13 Rojas Caruso M.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 13,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 1,
                "eff": 0,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 14,
        "nombre": "14 Nielson R.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [
          {
            "cod": "X5",
            "orig": 4,
            "destinos": [
              {
                "z": 1,
                "pct": 33
              }
            ],
            "eff": 0,
            "tot": 13,
            "pts": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 23
          },
          {
            "cod": "V5",
            "orig": 4,
            "destinos": [
              {
                "z": 1,
                "pct": 25
              },
              {
                "z": 5,
                "pct": 25
              }
            ],
            "eff": 31,
            "tot": 13,
            "pts": 4,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 31
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 7,
                "pct": 60
              },
              {
                "z": 9,
                "pct": 20
              },
              {
                "z": 6,
                "pct": 20
              }
            ],
            "eff": -20,
            "tot": 5,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 67
              },
              {
                "z": 5,
                "pct": 33
              }
            ],
            "eff": -60,
            "tot": 5,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 14,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 50,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 3,
                "eff": 50,
                "pos": 67,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 3,
                "eff": 50,
                "pos": 67,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 6,
                "eff": 0,
                "pos": 67,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 6,
                "eff": 33,
                "pos": 67,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 15,
        "nombre": "15 Rotezzi R.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 17,
        "nombre": "17 Herbsommer L.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [
          {
            "cod": "XM",
            "orig": 3,
            "destinos": [
              {
                "z": 9,
                "pct": 100
              }
            ],
            "eff": 50,
            "tot": 2,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 8,
                "pct": 50
              },
              {
                "z": 6,
                "pct": 33
              },
              {
                "z": 7,
                "pct": 17
              }
            ],
            "eff": -11,
            "tot": 7,
            "pts": 0,
            "plus": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 18,
        "nombre": "18 Acosta W.",
        "pos": "OPUESTO",
        "color": "#818cf8",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "Vazquez E.",
        "rotaciones": [
          {
            "pos": "P1",
            "total": 0,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P6",
            "total": 0,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P5",
            "total": 0,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P4",
            "total": 0,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P3",
            "total": 0,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P2",
            "total": 0,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P6",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P5",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P4",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P3",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P2",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "SO",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "TR",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          }
        ],
        "recepcion": [],
        "so": {},
        "tr": {}
      },
      "suplente": {
        "nombre": "Godoy M.",
        "rotaciones": [
          {
            "pos": "P1",
            "total": 8,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 0,
                "pct": 25,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 0,
                "pct": 25,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 0,
                "pct": 38,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 0,
                "pct": 12,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P6",
            "total": 7,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 0,
                "pct": 29,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 4,
                "pts": 0,
                "pct": 57,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 14,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P5",
            "total": 5,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 0,
                "pct": 40,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 0,
                "pct": 40,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P4",
            "total": 8,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 0,
                "pct": 38,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 0,
                "pct": 38,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 0,
                "pct": 25,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P3",
            "total": 1,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 0,
                "pct": 100,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P2",
            "total": 1,
            "dist": [
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 100,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 0,
            "tot": 8,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P6",
            "eff": 0,
            "tot": 7,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P5",
            "eff": 0,
            "tot": 5,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P4",
            "eff": 0,
            "tot": 8,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P3",
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P2",
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "SO",
            "eff": 33,
            "tot": 30,
            "pts": 15,
            "pts_pct": 50,
            "err_pct": 17
          },
          {
            "label": "TR",
            "eff": 35,
            "tot": 23,
            "pts": 11,
            "pts_pct": 48,
            "err_pct": 13
          }
        ],
        "recepcion": [],
        "so": {},
        "tr": {}
      }
    }
  },
  {
    "nombre": "FERRO",
    "rival": "FERRO",
    "fecha": "08/05/2026",
    "torneo": "División de Honor",
    "resultado": "D",
    "sets_casla": "1",
    "sets_rival": "3",
    "jugadores": [
      {
        "num": 0,
        "nombre": "0 Romeo Winer A.",
        "pos": "",
        "color": "#64748b",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 3,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 2,
        "nombre": "2 Ojuez A.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [
          {
            "cod": "X1",
            "orig": 3,
            "destinos": [
              {
                "z": 6,
                "pct": 33
              },
              {
                "z": 8,
                "pct": 33
              },
              {
                "z": 4,
                "pct": 33
              }
            ],
            "eff": 75,
            "tot": 4,
            "pts": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 75
          },
          {
            "cod": "XM",
            "orig": 3,
            "destinos": [
              {
                "z": 8,
                "pct": 100
              }
            ],
            "eff": 100,
            "tot": 1,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 100
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 1,
                "pct": 67
              },
              {
                "z": 6,
                "pct": 33
              }
            ],
            "eff": -33,
            "tot": 3,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 4,
        "nombre": "4 Vazquez E.",
        "pos": "ARMADOR",
        "color": "#f59e0b",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 1,
                "pct": 33
              },
              {
                "z": 7,
                "pct": 33
              },
              {
                "z": 6,
                "pct": 17
              },
              {
                "z": 5,
                "pct": 17
              }
            ],
            "eff": 0,
            "tot": 6,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 5,
        "nombre": "5 Ramos I.",
        "pos": "OPUESTO",
        "color": "#818cf8",
        "info": {},
        "ataques": [
          {
            "cod": "X6",
            "orig": 2,
            "destinos": [
              {
                "z": 6,
                "pct": 50
              },
              {
                "z": 7,
                "pct": 50
              }
            ],
            "eff": 0,
            "tot": 9,
            "pts": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 22
          },
          {
            "cod": "X8",
            "orig": 9,
            "destinos": [
              {
                "z": 9,
                "pct": 33
              },
              {
                "z": 5,
                "pct": 33
              }
            ],
            "eff": 14,
            "tot": 7,
            "pts": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 43
          },
          {
            "cod": "V8",
            "orig": 9,
            "destinos": [
              {
                "z": 1,
                "pct": 50
              }
            ],
            "eff": 25,
            "tot": 4,
            "pts": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 5,
                "pct": 67
              },
              {
                "z": 1,
                "pct": 33
              }
            ],
            "eff": -38,
            "tot": 10,
            "pts": 1,
            "plus": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 10
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 6,
        "nombre": "6 Villarruel J.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 6,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 9,
        "nombre": "9 Godoy M.",
        "pos": "ARMADOR",
        "color": "#f59e0b",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 62
              },
              {
                "z": 1,
                "pct": 31
              },
              {
                "z": 8,
                "pct": 8
              }
            ],
            "eff": 13,
            "tot": 13,
            "pts": 1,
            "plus": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 8
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 10,
        "nombre": "10 Viera M.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 11,
        "nombre": "11 Durdos V.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [
          {
            "cod": "X5",
            "orig": 4,
            "destinos": [
              {
                "z": 1,
                "pct": 14
              },
              {
                "z": 5,
                "pct": 14
              }
            ],
            "eff": 17,
            "tot": 23,
            "pts": 7,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 30
          },
          {
            "cod": "V5",
            "orig": 4,
            "destinos": [
              {
                "z": 1,
                "pct": 33
              },
              {
                "z": 9,
                "pct": 33
              },
              {
                "z": 2,
                "pct": 33
              }
            ],
            "eff": null,
            "tot": 3,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "XP",
            "orig": 8,
            "destinos": [
              {
                "z": 6,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 2,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 5,
                "pct": 50
              },
              {
                "z": 7,
                "pct": 50
              }
            ],
            "eff": -33,
            "tot": 3,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 50
              },
              {
                "z": 5,
                "pct": 50
              }
            ],
            "eff": -32,
            "tot": 7,
            "pts": 0,
            "plus": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 11,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 9,
                "eff": 44,
                "pos": 78,
                "neg": 22
              },
              "p1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 6,
                "eff": 50,
                "pos": 83,
                "neg": 17
              },
              "p5": {
                "tot": 2,
                "eff": 0,
                "pos": 50,
                "neg": 50
              }
            },
            "desde_z6": {
              "total": {
                "tot": 9,
                "eff": 50,
                "pos": 67,
                "neg": 0
              },
              "p1": {
                "tot": 3,
                "eff": 33,
                "pos": 33,
                "neg": 0
              },
              "p6": {
                "tot": 5,
                "eff": 60,
                "pos": 80,
                "neg": 0
              },
              "p5": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 5,
                "eff": 70,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 5,
                "eff": 40,
                "pos": 100,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 3,
                "eff": 67,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 1,
                "eff": 0,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 2,
                "eff": 0,
                "pos": 50,
                "neg": 0
              },
              "p1": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 12,
        "nombre": "12 Zanotti J.",
        "pos": "LIBERO",
        "color": "#06b6d4",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 12,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 15,
                "eff": 43,
                "pos": 73,
                "neg": 7
              },
              "p1": {
                "tot": 11,
                "eff": 27,
                "pos": 27,
                "neg": 0
              },
              "p6": {
                "tot": 4,
                "eff": 0,
                "pos": 50,
                "neg": 25
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 10,
                "eff": 65,
                "pos": 80,
                "neg": 10
              },
              "p1": {
                "tot": 4,
                "eff": 75,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 5,
                "eff": 40,
                "pos": 60,
                "neg": 20
              },
              "p5": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 9,
                "eff": 28,
                "pos": 56,
                "neg": 22
              },
              "p1": {
                "tot": 2,
                "eff": -50,
                "pos": 50,
                "neg": 50
              },
              "p6": {
                "tot": 4,
                "eff": 62,
                "pos": 75,
                "neg": 25
              },
              "p5": {
                "tot": 3,
                "eff": 0,
                "pos": 33,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 3,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 2,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 1,
                "eff": -100,
                "pos": 0,
                "neg": 100
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 1,
                "eff": -100,
                "pos": 0,
                "neg": 100
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 13,
        "nombre": "13 Rojas Caruso M.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 9,
                "pct": 100
              }
            ],
            "eff": -50,
            "tot": 2,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 13,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 14,
        "nombre": "14 Nielson R.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [
          {
            "cod": "X5",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 50
              },
              {
                "z": 7,
                "pct": 25
              }
            ],
            "eff": 15,
            "tot": 13,
            "pts": 4,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 31
          },
          {
            "cod": "V5",
            "orig": 4,
            "destinos": [
              {
                "z": 1,
                "pct": 33
              },
              {
                "z": 6,
                "pct": 33
              },
              {
                "z": 7,
                "pct": 33
              }
            ],
            "eff": 12,
            "tot": 8,
            "pts": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 38
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 83
              },
              {
                "z": 5,
                "pct": 17
              }
            ],
            "eff": 12,
            "tot": 6,
            "pts": 0,
            "plus": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 53
              },
              {
                "z": 1,
                "pct": 42
              },
              {
                "z": 5,
                "pct": 5
              }
            ],
            "eff": 12,
            "tot": 19,
            "pts": 1,
            "plus": 5,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 5
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 14,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 3,
                "eff": 83,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 50,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 4,
                "eff": 50,
                "pos": 75,
                "neg": 25
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 4,
                "eff": 50,
                "pos": 75,
                "neg": 25
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 3,
                "eff": 33,
                "pos": 67,
                "neg": 33
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 2,
                "eff": 0,
                "pos": 50,
                "neg": 50
              }
            },
            "desde_z6": {
              "total": {
                "tot": 1,
                "eff": -100,
                "pos": 0,
                "neg": 100
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 1,
                "eff": -100,
                "pos": 0,
                "neg": 100
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 15,
        "nombre": "15 Rotezzi R.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 17,
        "nombre": "17 Herbsommer L.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [
          {
            "cod": "X1",
            "orig": 3,
            "destinos": [
              {
                "z": 5,
                "pct": 50
              },
              {
                "z": 7,
                "pct": 50
              }
            ],
            "eff": 33,
            "tot": 6,
            "pts": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 33
          },
          {
            "cod": "XM",
            "orig": 3,
            "destinos": [
              {
                "z": 6,
                "pct": 100
              }
            ],
            "eff": -25,
            "tot": 4,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 25
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 33
              },
              {
                "z": 1,
                "pct": 22
              },
              {
                "z": 5,
                "pct": 22
              },
              {
                "z": 7,
                "pct": 11
              },
              {
                "z": 9,
                "pct": 11
              }
            ],
            "eff": 0,
            "tot": 9,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 18,
        "nombre": "18 Acosta W.",
        "pos": "OPUESTO",
        "color": "#818cf8",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "Vazquez E.",
        "rotaciones": [
          {
            "pos": "P1",
            "total": 5,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 0,
                "pct": 40,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P6",
            "total": 2,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P5",
            "total": 3,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 0,
                "pct": 67,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 33,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P4",
            "total": 3,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 0,
                "pct": 67,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 33,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P3",
            "total": 3,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 0,
                "pct": 67,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 33,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P2",
            "total": 5,
            "dist": [
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 0,
                "pct": 60,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 0,
            "tot": 5,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P6",
            "eff": 0,
            "tot": 2,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P5",
            "eff": 0,
            "tot": 3,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P4",
            "eff": 0,
            "tot": 3,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P3",
            "eff": 0,
            "tot": 3,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P2",
            "eff": 0,
            "tot": 5,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "SO",
            "eff": 29,
            "tot": 21,
            "pts": 9,
            "pts_pct": 43,
            "err_pct": 14
          },
          {
            "label": "TR",
            "eff": 33,
            "tot": 6,
            "pts": 3,
            "pts_pct": 50,
            "err_pct": 17
          }
        ],
        "recepcion": [],
        "so": {},
        "tr": {}
      },
      "suplente": {
        "nombre": "Godoy M.",
        "rotaciones": [
          {
            "pos": "P1",
            "total": 7,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 0,
                "pct": 43,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 14,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 0,
                "pct": 43,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P6",
            "total": 5,
            "dist": [
              {
                "zona": 4,
                "tot": 4,
                "pts": 0,
                "pct": 80,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P5",
            "total": 9,
            "dist": [
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 11,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 7,
                "pts": 0,
                "pct": 78,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 11,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P4",
            "total": 3,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 0,
                "pct": 67,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 33,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P3",
            "total": 6,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 0,
                "pct": 33,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 0,
                "pct": 33,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 17,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 0,
                "pct": 17,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P2",
            "total": 6,
            "dist": [
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 17,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 0,
                "pct": 33,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 0,
            "tot": 7,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P6",
            "eff": 0,
            "tot": 5,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P5",
            "eff": 0,
            "tot": 9,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P4",
            "eff": 0,
            "tot": 3,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P3",
            "eff": 0,
            "tot": 6,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P2",
            "eff": 0,
            "tot": 6,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "SO",
            "eff": 17,
            "tot": 36,
            "pts": 13,
            "pts_pct": 36,
            "err_pct": 19
          },
          {
            "label": "TR",
            "eff": 25,
            "tot": 24,
            "pts": 10,
            "pts_pct": 42,
            "err_pct": 17
          }
        ],
        "recepcion": [],
        "so": {},
        "tr": {}
      }
    }
  },
  {
    "nombre": "HACOAJ",
    "rival": "HACOAJ",
    "fecha": "16/05/2026",
    "torneo": "División de Honor",
    "resultado": "V",
    "sets_casla": "3",
    "sets_rival": "1",
    "jugadores": [
      {
        "num": 0,
        "nombre": "0 Romeo Winer A.",
        "pos": "",
        "color": "#64748b",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 3,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 2,
        "nombre": "2 Ojuez A.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [
          {
            "cod": "X1",
            "orig": 3,
            "destinos": [
              {
                "z": 5,
                "pct": 33
              },
              {
                "z": 6,
                "pct": 17
              },
              {
                "z": 8,
                "pct": 17
              },
              {
                "z": 7,
                "pct": 17
              }
            ],
            "eff": 33,
            "tot": 12,
            "pts": 6,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "XM",
            "orig": 3,
            "destinos": [
              {
                "z": 1,
                "pct": 75
              },
              {
                "z": 6,
                "pct": 25
              }
            ],
            "eff": 50,
            "tot": 6,
            "pts": 4,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 67
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 9,
                "pct": 33
              },
              {
                "z": 6,
                "pct": 22
              },
              {
                "z": 1,
                "pct": 11
              },
              {
                "z": 8,
                "pct": 11
              },
              {
                "z": 5,
                "pct": 11
              },
              {
                "z": 7,
                "pct": 11
              }
            ],
            "eff": -10,
            "tot": 10,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 4,
        "nombre": "4 Vazquez E.",
        "pos": "ARMADOR",
        "color": "#f59e0b",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 9,
                "pct": 43
              },
              {
                "z": 1,
                "pct": 24
              },
              {
                "z": 6,
                "pct": 24
              },
              {
                "z": 8,
                "pct": 10
              }
            ],
            "eff": -8,
            "tot": 22,
            "pts": 0,
            "plus": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 5,
        "nombre": "5 Ramos I.",
        "pos": "OPUESTO",
        "color": "#818cf8",
        "info": {},
        "ataques": [
          {
            "cod": "X5",
            "orig": 4,
            "destinos": [
              {
                "z": 8,
                "pct": 100
              }
            ],
            "eff": 100,
            "tot": 1,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 100
          },
          {
            "cod": "X6",
            "orig": 2,
            "destinos": [
              {
                "z": 4,
                "pct": 50
              }
            ],
            "eff": 25,
            "tot": 4,
            "pts": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "V6",
            "orig": 2,
            "destinos": [
              {
                "z": 1,
                "pct": 33
              },
              {
                "z": 5,
                "pct": 33
              }
            ],
            "eff": null,
            "tot": 3,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "X8",
            "orig": 9,
            "destinos": [
              {
                "z": 5,
                "pct": 60
              },
              {
                "z": 6,
                "pct": 20
              }
            ],
            "eff": 50,
            "tot": 8,
            "pts": 5,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 62
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 100
              }
            ],
            "eff": -50,
            "tot": 2,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 1,
                "pct": 100
              }
            ],
            "eff": -100,
            "tot": 3,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 6,
        "nombre": "6 Villarruel J.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 6,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 9,
        "nombre": "9 Godoy M.",
        "pos": "ARMADOR",
        "color": "#f59e0b",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 9,
                "pct": 50
              },
              {
                "z": 7,
                "pct": 50
              }
            ],
            "eff": 0,
            "tot": 2,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 10,
        "nombre": "10 Viera M.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 11,
        "nombre": "11 Durdos V.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [
          {
            "cod": "X5",
            "orig": 4,
            "destinos": [
              {
                "z": 7,
                "pct": 50
              },
              {
                "z": 6,
                "pct": 17
              }
            ],
            "eff": 24,
            "tot": 17,
            "pts": 6,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 35
          },
          {
            "cod": "V5",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 50
              }
            ],
            "eff": null,
            "tot": 2,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "XP",
            "orig": 8,
            "destinos": [
              {
                "z": 1,
                "pct": 33
              },
              {
                "z": 6,
                "pct": 33
              },
              {
                "z": 8,
                "pct": 33
              }
            ],
            "eff": 50,
            "tot": 4,
            "pts": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 75
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 9,
                "pct": 35
              },
              {
                "z": 1,
                "pct": 29
              },
              {
                "z": 5,
                "pct": 29
              },
              {
                "z": 7,
                "pct": 6
              }
            ],
            "eff": -6,
            "tot": 17,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 11,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 2,
                "eff": 50,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 1,
                "eff": 150,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 2,
                "eff": -25,
                "pos": 0,
                "neg": 50
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 2,
                "eff": 0,
                "pos": 0,
                "neg": 50
              }
            },
            "desde_z6": {
              "total": {
                "tot": 5,
                "eff": 20,
                "pos": 60,
                "neg": 20
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 5,
                "eff": 30,
                "pos": 60,
                "neg": 20
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 12,
        "nombre": "12 Zanotti J.",
        "pos": "LIBERO",
        "color": "#06b6d4",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 12,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 3,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 2,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 4,
                "eff": 0,
                "pos": 25,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 3,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 14,
                "eff": 61,
                "pos": 79,
                "neg": 0
              },
              "p1": {
                "tot": 8,
                "eff": 50,
                "pos": 75,
                "neg": 0
              },
              "p6": {
                "tot": 5,
                "eff": 60,
                "pos": 80,
                "neg": 0
              },
              "p5": {
                "tot": 1,
                "eff": 0,
                "pos": 100,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 7,
                "eff": 0,
                "pos": 14,
                "neg": 14
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 7,
                "eff": 0,
                "pos": 14,
                "neg": 14
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 5,
                "eff": -20,
                "pos": 20,
                "neg": 20
              },
              "p1": {
                "tot": 5,
                "eff": -10,
                "pos": 20,
                "neg": 20
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 13,
        "nombre": "13 Rojas Caruso M.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 13,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 14,
        "nombre": "14 Nielson R.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [
          {
            "cod": "X5",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 30
              },
              {
                "z": 8,
                "pct": 30
              },
              {
                "z": 1,
                "pct": 10
              },
              {
                "z": 9,
                "pct": 10
              }
            ],
            "eff": 47,
            "tot": 19,
            "pts": 10,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 53
          },
          {
            "cod": "V5",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 14
              },
              {
                "z": 6,
                "pct": 14
              },
              {
                "z": 8,
                "pct": 14
              },
              {
                "z": 7,
                "pct": 14
              }
            ],
            "eff": 27,
            "tot": 15,
            "pts": 7,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 47
          },
          {
            "cod": "X6",
            "orig": 2,
            "destinos": [],
            "eff": 33,
            "tot": 3,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 33
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 5,
                "pct": 50
              },
              {
                "z": 9,
                "pct": 17
              },
              {
                "z": 6,
                "pct": 17
              },
              {
                "z": 7,
                "pct": 17
              }
            ],
            "eff": 0,
            "tot": 6,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 1,
                "pct": 40
              },
              {
                "z": 6,
                "pct": 30
              },
              {
                "z": 7,
                "pct": 20
              },
              {
                "z": 5,
                "pct": 10
              }
            ],
            "eff": 28,
            "tot": 10,
            "pts": 2,
            "plus": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 20
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 14,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 10,
                "eff": 60,
                "pos": 80,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 3,
                "eff": 33,
                "pos": 67,
                "neg": 0
              },
              "p5": {
                "tot": 4,
                "eff": 50,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 8,
                "eff": 56,
                "pos": 88,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 5,
                "eff": 60,
                "pos": 80,
                "neg": 0
              },
              "p5": {
                "tot": 2,
                "eff": 50,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 6,
                "eff": 67,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 50,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 2,
                "eff": 0,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 2,
                "eff": 50,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 15,
        "nombre": "15 Rotezzi R.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [
          {
            "cod": "X1",
            "orig": 3,
            "destinos": [
              {
                "z": 7,
                "pct": 100
              }
            ],
            "eff": 67,
            "tot": 3,
            "pts": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 67
          },
          {
            "cod": "XM",
            "orig": 3,
            "destinos": [
              {
                "z": 1,
                "pct": 50
              },
              {
                "z": 6,
                "pct": 50
              }
            ],
            "eff": 33,
            "tot": 6,
            "pts": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 33
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 9,
                "pct": 50
              },
              {
                "z": 1,
                "pct": 33
              },
              {
                "z": 6,
                "pct": 8
              },
              {
                "z": 8,
                "pct": 8
              }
            ],
            "eff": -8,
            "tot": 13,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 17,
        "nombre": "17 Herbsommer L.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 18,
        "nombre": "18 Acosta W.",
        "pos": "OPUESTO",
        "color": "#818cf8",
        "info": {},
        "ataques": [
          {
            "cod": "X6",
            "orig": 2,
            "destinos": [],
            "eff": 33,
            "tot": 3,
            "pts": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 67
          },
          {
            "cod": "V6",
            "orig": 2,
            "destinos": [
              {
                "z": 1,
                "pct": 100
              }
            ],
            "eff": null,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "X8",
            "orig": 9,
            "destinos": [
              {
                "z": 1,
                "pct": 25
              },
              {
                "z": 5,
                "pct": 25
              }
            ],
            "eff": 11,
            "tot": 9,
            "pts": 4,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 44
          },
          {
            "cod": "V8",
            "orig": 9,
            "destinos": [],
            "eff": 100,
            "tot": 1,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 100
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 71
              },
              {
                "z": 5,
                "pct": 29
              }
            ],
            "eff": 11,
            "tot": 9,
            "pts": 2,
            "plus": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 22
          }
        ],
        "video": 0,
        "recepcion": {}
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "Vazquez E.",
        "rotaciones": [
          {
            "pos": "P1",
            "total": 9,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 0,
                "pct": 22,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 4,
                "pts": 0,
                "pct": 44,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 0,
                "pct": 33,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P6",
            "total": 1,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 100,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P5",
            "total": 11,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 0,
                "pct": 18,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 7,
                "pts": 0,
                "pct": 64,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 0,
                "pct": 18,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P4",
            "total": 10,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 0,
                "pct": 30,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 5,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P3",
            "total": 10,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 0,
                "pct": 30,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 0,
                "pct": 30,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 4,
                "pts": 0,
                "pct": 40,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P2",
            "total": 4,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 25,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 25,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 0,
            "tot": 9,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P6",
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P5",
            "eff": 0,
            "tot": 11,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P4",
            "eff": 0,
            "tot": 10,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P3",
            "eff": 0,
            "tot": 10,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P2",
            "eff": 0,
            "tot": 4,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "SO",
            "eff": 47,
            "tot": 45,
            "pts": 26,
            "pts_pct": 58,
            "err_pct": 11
          },
          {
            "label": "TR",
            "eff": 15,
            "tot": 41,
            "pts": 13,
            "pts_pct": 32,
            "err_pct": 17
          }
        ],
        "recepcion": [],
        "so": {},
        "tr": {}
      },
      "suplente": {
        "nombre": "Godoy M.",
        "rotaciones": [
          {
            "pos": "P1",
            "total": 2,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 0,
                "pct": 100,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P6",
            "total": 2,
            "dist": [
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P5",
            "total": 2,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P4",
            "total": 0,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P3",
            "total": 0,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P2",
            "total": 0,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 0,
            "tot": 2,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P6",
            "eff": 0,
            "tot": 2,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P5",
            "eff": 0,
            "tot": 2,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P4",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P3",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P2",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "SO",
            "eff": 33,
            "tot": 6,
            "pts": 3,
            "pts_pct": 50,
            "err_pct": 17
          },
          {
            "label": "TR",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          }
        ],
        "recepcion": [],
        "so": {},
        "tr": {}
      }
    }
  },
  {
    "nombre": "VELEZ",
    "rival": "VELEZ",
    "fecha": "22/05/2026",
    "torneo": "División de Honor",
    "resultado": "V",
    "sets_casla": "3",
    "sets_rival": "2",
    "jugadores": [
      {
        "num": 0,
        "nombre": "0 Romeo Winer A.",
        "pos": "",
        "color": "#64748b",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 3,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 2,
        "nombre": "2 Ojuez A.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [
          {
            "cod": "X1",
            "orig": 3,
            "destinos": [
              {
                "z": 6,
                "pct": 50
              },
              {
                "z": 7,
                "pct": 50
              }
            ],
            "eff": 50,
            "tot": 4,
            "pts": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "X7",
            "orig": 3,
            "destinos": [
              {
                "z": 6,
                "pct": 33
              },
              {
                "z": 8,
                "pct": 33
              },
              {
                "z": 4,
                "pct": 33
              }
            ],
            "eff": 60,
            "tot": 5,
            "pts": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 60
          },
          {
            "cod": "XM",
            "orig": 3,
            "destinos": [
              {
                "z": 1,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 4,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 25
          },
          {
            "cod": "X2",
            "orig": 3,
            "destinos": [
              {
                "z": 9,
                "pct": 100
              }
            ],
            "eff": 100,
            "tot": 1,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 100
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 5,
                "pct": 75
              },
              {
                "z": 6,
                "pct": 12
              },
              {
                "z": 7,
                "pct": 12
              }
            ],
            "eff": -9,
            "tot": 8,
            "pts": 0,
            "plus": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 4,
        "nombre": "4 Vazquez E.",
        "pos": "ARMADOR",
        "color": "#f59e0b",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 41
              },
              {
                "z": 1,
                "pct": 17
              },
              {
                "z": 8,
                "pct": 17
              },
              {
                "z": 5,
                "pct": 14
              },
              {
                "z": 7,
                "pct": 10
              }
            ],
            "eff": 19,
            "tot": 30,
            "pts": 5,
            "plus": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 17
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 5,
        "nombre": "5 Ramos I.",
        "pos": "OPUESTO",
        "color": "#818cf8",
        "info": {},
        "ataques": [
          {
            "cod": "X6",
            "orig": 2,
            "destinos": [],
            "eff": 33,
            "tot": 3,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 33
          },
          {
            "cod": "X8",
            "orig": 9,
            "destinos": [
              {
                "z": 5,
                "pct": 100
              }
            ],
            "eff": 100,
            "tot": 1,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 100
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 7,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 6,
        "nombre": "6 Villarruel J.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [
          {
            "cod": "X5",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 100
              }
            ],
            "eff": -20,
            "tot": 5,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 20
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 100
              }
            ],
            "eff": -15,
            "tot": 5,
            "pts": 0,
            "plus": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 6,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 1,
                "eff": 150,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 9,
        "nombre": "9 Godoy M.",
        "pos": "ARMADOR",
        "color": "#f59e0b",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 8,
                "pct": 100
              }
            ],
            "eff": 12,
            "tot": 2,
            "pts": 0,
            "plus": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 10,
        "nombre": "10 Viera M.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 11,
        "nombre": "11 Durdos V.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [
          {
            "cod": "X5",
            "orig": 4,
            "destinos": [
              {
                "z": 6,
                "pct": 22
              },
              {
                "z": 8,
                "pct": 22
              },
              {
                "z": 1,
                "pct": 11
              },
              {
                "z": 2,
                "pct": 11
              }
            ],
            "eff": 20,
            "tot": 20,
            "pts": 9,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 45
          },
          {
            "cod": "V5",
            "orig": 4,
            "destinos": [
              {
                "z": 1,
                "pct": 50
              }
            ],
            "eff": null,
            "tot": 2,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 67
              },
              {
                "z": 7,
                "pct": 33
              }
            ],
            "eff": -33,
            "tot": 3,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 5,
                "pct": 67
              },
              {
                "z": 6,
                "pct": 33
              }
            ],
            "eff": -67,
            "tot": 3,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 11,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 7,
                "eff": 50,
                "pos": 86,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 7,
                "eff": 14,
                "pos": 86,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 5,
                "eff": 0,
                "pos": 40,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 4,
                "eff": 12,
                "pos": 25,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 8,
                "eff": 31,
                "pos": 62,
                "neg": 12
              },
              "p1": {
                "tot": 1,
                "eff": 0,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 6,
                "eff": 33,
                "pos": 67,
                "neg": 17
              },
              "p5": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 2,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 12,
                "eff": 29,
                "pos": 42,
                "neg": 8
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 5,
                "eff": 20,
                "pos": 40,
                "neg": 20
              },
              "p5": {
                "tot": 7,
                "eff": 29,
                "pos": 43,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 12,
        "nombre": "12 Zanotti J.",
        "pos": "LIBERO",
        "color": "#06b6d4",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 12,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 3,
                "eff": 83,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 4,
                "eff": 38,
                "pos": 75,
                "neg": 0
              },
              "p1": {
                "tot": 1,
                "eff": 0,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 3,
                "eff": 33,
                "pos": 67,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 5,
                "eff": 10,
                "pos": 20,
                "neg": 20
              },
              "p1": {
                "tot": 3,
                "eff": -33,
                "pos": 0,
                "neg": 33
              },
              "p6": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 2,
                "eff": -25,
                "pos": 50,
                "neg": 50
              },
              "p1": {
                "tot": 1,
                "eff": -100,
                "pos": 0,
                "neg": 100
              },
              "p6": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 13,
        "nombre": "13 Rojas Caruso M.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 13,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 14,
        "nombre": "14 Nielson R.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [
          {
            "cod": "X5",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 23
              },
              {
                "z": 1,
                "pct": 15
              },
              {
                "z": 9,
                "pct": 8
              },
              {
                "z": 6,
                "pct": 8
              }
            ],
            "eff": 50,
            "tot": 24,
            "pts": 13,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 54
          },
          {
            "cod": "V5",
            "orig": 4,
            "destinos": [
              {
                "z": 4,
                "pct": 50
              },
              {
                "z": 2,
                "pct": 25
              }
            ],
            "eff": 33,
            "tot": 9,
            "pts": 4,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 44
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 1,
                "pct": 67
              },
              {
                "z": 6,
                "pct": 33
              }
            ],
            "eff": 0,
            "tot": 3,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 62
              },
              {
                "z": 1,
                "pct": 31
              },
              {
                "z": 5,
                "pct": 6
              }
            ],
            "eff": 8,
            "tot": 16,
            "pts": 1,
            "plus": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 6
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 14,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 12,
                "eff": 62,
                "pos": 75,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0
              },
              "p5": {
                "tot": 10,
                "eff": 50,
                "pos": 80,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 3,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 6,
                "eff": 75,
                "pos": 83,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 6,
                "eff": 67,
                "pos": 83,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 7,
                "eff": 29,
                "pos": 43,
                "neg": 14
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 5,
                "eff": 50,
                "pos": 60,
                "neg": 0
              },
              "p5": {
                "tot": 2,
                "eff": -50,
                "pos": 0,
                "neg": 50
              }
            },
            "desde_z5": {
              "total": {
                "tot": 5,
                "eff": 10,
                "pos": 20,
                "neg": 0
              },
              "p1": {
                "tot": 3,
                "eff": 0,
                "pos": 33,
                "neg": 0
              },
              "p6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 15,
        "nombre": "15 Rotezzi R.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 17,
        "nombre": "17 Herbsommer L.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [
          {
            "cod": "X1",
            "orig": 3,
            "destinos": [
              {
                "z": 9,
                "pct": 67
              },
              {
                "z": 8,
                "pct": 33
              }
            ],
            "eff": 75,
            "tot": 4,
            "pts": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 75
          },
          {
            "cod": "X7",
            "orig": 3,
            "destinos": [
              {
                "z": 9,
                "pct": 50
              },
              {
                "z": 8,
                "pct": 50
              }
            ],
            "eff": 40,
            "tot": 5,
            "pts": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 40
          },
          {
            "cod": "XM",
            "orig": 3,
            "destinos": [
              {
                "z": 6,
                "pct": 25
              },
              {
                "z": 8,
                "pct": 25
              },
              {
                "z": 7,
                "pct": 25
              },
              {
                "z": 1,
                "pct": 12
              }
            ],
            "eff": 54,
            "tot": 13,
            "pts": 8,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 62
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 5,
                "pct": 33
              },
              {
                "z": 7,
                "pct": 24
              },
              {
                "z": 6,
                "pct": 19
              },
              {
                "z": 8,
                "pct": 10
              },
              {
                "z": 1,
                "pct": 10
              },
              {
                "z": 9,
                "pct": 5
              }
            ],
            "eff": 6,
            "tot": 22,
            "pts": 0,
            "plus": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 18,
        "nombre": "18 Acosta W.",
        "pos": "OPUESTO",
        "color": "#818cf8",
        "info": {},
        "ataques": [
          {
            "cod": "X6",
            "orig": 2,
            "destinos": [
              {
                "z": 9,
                "pct": 14
              },
              {
                "z": 6,
                "pct": 14
              },
              {
                "z": 5,
                "pct": 14
              },
              {
                "z": 4,
                "pct": 14
              }
            ],
            "eff": 42,
            "tot": 12,
            "pts": 7,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 58
          },
          {
            "cod": "V6",
            "orig": 2,
            "destinos": [
              {
                "z": 7,
                "pct": 100
              }
            ],
            "eff": null,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "X8",
            "orig": 9,
            "destinos": [
              {
                "z": 4,
                "pct": 33
              },
              {
                "z": 1,
                "pct": 17
              },
              {
                "z": 6,
                "pct": 17
              },
              {
                "z": 5,
                "pct": 17
              }
            ],
            "eff": 44,
            "tot": 9,
            "pts": 6,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 67
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 5,
                "pct": 71
              },
              {
                "z": 6,
                "pct": 29
              }
            ],
            "eff": -31,
            "tot": 12,
            "pts": 1,
            "plus": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 8
          }
        ],
        "video": 0,
        "recepcion": {}
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "Vazquez E.",
        "rotaciones": [
          {
            "pos": "P1",
            "total": 7,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 0,
                "pct": 43,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 0,
                "pct": 43,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 14,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P6",
            "total": 9,
            "dist": [
              {
                "zona": 4,
                "tot": 4,
                "pts": 0,
                "pct": 44,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 0,
                "pct": 33,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 0,
                "pct": 22,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P5",
            "total": 6,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 17,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 0,
                "pct": 33,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P4",
            "total": 6,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 0,
                "pct": 33,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 0,
                "pct": 33,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 0,
                "pct": 33,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P3",
            "total": 4,
            "dist": [
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 25,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 0,
                "pct": 75,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P2",
            "total": 9,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 0,
                "pct": 33,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 4,
                "pts": 0,
                "pct": 44,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 11,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 0,
                "pct": 11,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 0,
            "tot": 7,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P6",
            "eff": 0,
            "tot": 9,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P5",
            "eff": 0,
            "tot": 6,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P4",
            "eff": 0,
            "tot": 6,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P3",
            "eff": 0,
            "tot": 4,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P2",
            "eff": 0,
            "tot": 9,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "SO",
            "eff": 37,
            "tot": 41,
            "pts": 22,
            "pts_pct": 54,
            "err_pct": 17
          },
          {
            "label": "TR",
            "eff": 30,
            "tot": 43,
            "pts": 20,
            "pts_pct": 47,
            "err_pct": 16
          }
        ],
        "recepcion": [],
        "so": {},
        "tr": {}
      },
      "suplente": {
        "nombre": "Godoy M.",
        "rotaciones": [
          {
            "pos": "P1",
            "total": 2,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 0,
                "pct": 100,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P6",
            "total": 4,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P5",
            "total": 1,
            "dist": [
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 100,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P4",
            "total": 2,
            "dist": [
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P3",
            "total": 1,
            "dist": [
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 100,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P2",
            "total": 0,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 0,
            "tot": 2,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P6",
            "eff": 0,
            "tot": 4,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P5",
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P4",
            "eff": 0,
            "tot": 2,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P3",
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P2",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "SO",
            "eff": 20,
            "tot": 10,
            "pts": 3,
            "pts_pct": 30,
            "err_pct": 10
          },
          {
            "label": "TR",
            "eff": 33,
            "tot": 6,
            "pts": 3,
            "pts_pct": 50,
            "err_pct": 17
          }
        ],
        "recepcion": [],
        "so": {},
        "tr": {}
      }
    }
  },
  {
    "nombre": "DBANF",
    "rival": "DBANF",
    "fecha": "26/05/2026",
    "torneo": "División de Honor",
    "resultado": "D",
    "sets_casla": "2",
    "sets_rival": "3",
    "jugadores": [
      {
        "num": 0,
        "nombre": "0 Romeo Winer A.",
        "pos": "",
        "color": "#64748b",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 3,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 2,
        "nombre": "2 Ojuez A.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [
          {
            "cod": "X1",
            "orig": 3,
            "destinos": [
              {
                "z": 6,
                "pct": 67
              },
              {
                "z": 7,
                "pct": 33
              }
            ],
            "eff": 60,
            "tot": 5,
            "pts": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 60
          },
          {
            "cod": "X7",
            "orig": 3,
            "destinos": [
              {
                "z": 1,
                "pct": 33
              },
              {
                "z": 8,
                "pct": 33
              },
              {
                "z": 7,
                "pct": 33
              }
            ],
            "eff": 60,
            "tot": 5,
            "pts": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 60
          },
          {
            "cod": "XM",
            "orig": 3,
            "destinos": [
              {
                "z": 8,
                "pct": 100
              }
            ],
            "eff": 67,
            "tot": 3,
            "pts": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 67
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 7,
                "pct": 38
              },
              {
                "z": 8,
                "pct": 25
              },
              {
                "z": 5,
                "pct": 25
              },
              {
                "z": 6,
                "pct": 12
              }
            ],
            "eff": -12,
            "tot": 8,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 4,
        "nombre": "4 Vazquez E.",
        "pos": "ARMADOR",
        "color": "#f59e0b",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 40
              },
              {
                "z": 9,
                "pct": 20
              },
              {
                "z": 8,
                "pct": 13
              },
              {
                "z": 7,
                "pct": 13
              },
              {
                "z": 1,
                "pct": 7
              },
              {
                "z": 5,
                "pct": 7
              }
            ],
            "eff": 15,
            "tot": 15,
            "pts": 1,
            "plus": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 7
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 5,
        "nombre": "5 Ramos I.",
        "pos": "OPUESTO",
        "color": "#818cf8",
        "info": {},
        "ataques": [
          {
            "cod": "V6",
            "orig": 2,
            "destinos": [
              {
                "z": 1,
                "pct": 100
              }
            ],
            "eff": null,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 5,
                "pct": 100
              }
            ],
            "eff": -100,
            "tot": 1,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 6,
        "nombre": "6 Villarruel J.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": -100,
            "tot": 1,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 6,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 9,
        "nombre": "9 Godoy M.",
        "pos": "ARMADOR",
        "color": "#f59e0b",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 10,
        "nombre": "10 Viera M.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 11,
        "nombre": "11 Durdos V.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [
          {
            "cod": "X5",
            "orig": 4,
            "destinos": [
              {
                "z": 8,
                "pct": 43
              },
              {
                "z": 1,
                "pct": 29
              },
              {
                "z": 9,
                "pct": 14
              },
              {
                "z": 7,
                "pct": 14
              }
            ],
            "eff": 40,
            "tot": 15,
            "pts": 7,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 47
          },
          {
            "cod": "V5",
            "orig": 4,
            "destinos": [
              {
                "z": 6,
                "pct": 50
              },
              {
                "z": 8,
                "pct": 50
              }
            ],
            "eff": null,
            "tot": 2,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "XP",
            "orig": 8,
            "destinos": [
              {
                "z": 5,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 2,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 7,
                "pct": 47
              },
              {
                "z": 6,
                "pct": 20
              },
              {
                "z": 5,
                "pct": 13
              },
              {
                "z": 8,
                "pct": 13
              },
              {
                "z": 9,
                "pct": 7
              }
            ],
            "eff": 3,
            "tot": 15,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 8,
                "pct": 100
              }
            ],
            "eff": 50,
            "tot": 2,
            "pts": 1,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 11,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 9,
                "eff": 39,
                "pos": 56,
                "neg": 0
              },
              "p1": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0
              },
              "p6": {
                "tot": 6,
                "eff": 17,
                "pos": 33,
                "neg": 0
              },
              "p5": {
                "tot": 1,
                "eff": 0,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 4,
                "eff": 50,
                "pos": 75,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 2,
                "eff": 0,
                "pos": 50,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 6,
                "eff": -17,
                "pos": 17,
                "neg": 33
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 4,
                "eff": 0,
                "pos": 25,
                "neg": 25
              },
              "p5": {
                "tot": 2,
                "eff": -50,
                "pos": 0,
                "neg": 50
              }
            },
            "desde_z6": {
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 12,
        "nombre": "12 Zanotti J.",
        "pos": "LIBERO",
        "color": "#06b6d4",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 12,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 7,
                "eff": 64,
                "pos": 86,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 7,
                "eff": 43,
                "pos": 86,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 11,
                "eff": 41,
                "pos": 55,
                "neg": 9
              },
              "p1": {
                "tot": 8,
                "eff": 25,
                "pos": 50,
                "neg": 12
              },
              "p6": {
                "tot": 3,
                "eff": 67,
                "pos": 67,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 7,
                "eff": 7,
                "pos": 29,
                "neg": 14
              },
              "p1": {
                "tot": 4,
                "eff": 0,
                "pos": 25,
                "neg": 25
              },
              "p6": {
                "tot": 3,
                "eff": 0,
                "pos": 33,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 13,
        "nombre": "13 Rojas Caruso M.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 13,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 14,
        "nombre": "14 Nielson R.",
        "pos": "PUNTA",
        "color": "#22c55e",
        "info": {},
        "ataques": [
          {
            "cod": "X5",
            "orig": 4,
            "destinos": [
              {
                "z": 6,
                "pct": 33
              },
              {
                "z": 7,
                "pct": 33
              },
              {
                "z": 1,
                "pct": 17
              },
              {
                "z": 9,
                "pct": 17
              }
            ],
            "eff": 31,
            "tot": 13,
            "pts": 6,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 46
          },
          {
            "cod": "V5",
            "orig": 4,
            "destinos": [
              {
                "z": 1,
                "pct": 33
              },
              {
                "z": 9,
                "pct": 33
              },
              {
                "z": 5,
                "pct": 33
              }
            ],
            "eff": 8,
            "tot": 12,
            "pts": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 25
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 25
              },
              {
                "z": 5,
                "pct": 25
              },
              {
                "z": 7,
                "pct": 25
              },
              {
                "z": 9,
                "pct": 12
              },
              {
                "z": 8,
                "pct": 12
              }
            ],
            "eff": 6,
            "tot": 8,
            "pts": 0,
            "plus": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 75
              },
              {
                "z": 1,
                "pct": 17
              },
              {
                "z": 5,
                "pct": 8
              }
            ],
            "eff": -4,
            "tot": 14,
            "pts": 0,
            "plus": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 14,
          "flotado": {
            "desde_z1": {
              "total": {
                "tot": 14,
                "eff": 25,
                "pos": 50,
                "neg": 7
              },
              "p1": {
                "tot": 3,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 6,
                "eff": 17,
                "pos": 50,
                "neg": 17
              },
              "p5": {
                "tot": 5,
                "eff": 0,
                "pos": 40,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 4,
                "eff": 75,
                "pos": 75,
                "neg": 0
              },
              "p1": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 10,
                "eff": 0,
                "pos": 40,
                "neg": 30
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 6,
                "eff": 17,
                "pos": 50,
                "neg": 17
              },
              "p5": {
                "tot": 4,
                "eff": -50,
                "pos": 25,
                "neg": 50
              }
            },
            "desde_z6": {
              "total": {
                "tot": 1,
                "eff": 150,
                "pos": 100,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            }
          }
        }
      },
      {
        "num": 15,
        "nombre": "15 Rotezzi R.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 17,
        "nombre": "17 Herbsommer L.",
        "pos": "CENTRAL",
        "color": "#f97316",
        "info": {},
        "ataques": [
          {
            "cod": "X1",
            "orig": 3,
            "destinos": [
              {
                "z": 5,
                "pct": 100
              }
            ],
            "eff": 50,
            "tot": 2,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "X7",
            "orig": 3,
            "destinos": [
              {
                "z": 9,
                "pct": 50
              },
              {
                "z": 2,
                "pct": 50
              }
            ],
            "eff": 67,
            "tot": 3,
            "pts": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 67
          },
          {
            "cod": "XM",
            "orig": 3,
            "destinos": [
              {
                "z": 9,
                "pct": 50
              },
              {
                "z": 7,
                "pct": 50
              }
            ],
            "eff": 0,
            "tot": 10,
            "pts": 4,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 40
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 7,
                "pct": 50
              },
              {
                "z": 6,
                "pct": 19
              },
              {
                "z": 8,
                "pct": 19
              },
              {
                "z": 5,
                "pct": 12
              }
            ],
            "eff": -11,
            "tot": 16,
            "pts": 0,
            "plus": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {}
      },
      {
        "num": 18,
        "nombre": "18 Acosta W.",
        "pos": "OPUESTO",
        "color": "#818cf8",
        "info": {},
        "ataques": [
          {
            "cod": "X6",
            "orig": 2,
            "destinos": [
              {
                "z": 9,
                "pct": 50
              },
              {
                "z": 1,
                "pct": 25
              },
              {
                "z": 7,
                "pct": 25
              }
            ],
            "eff": 18,
            "tot": 11,
            "pts": 4,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 36
          },
          {
            "cod": "V6",
            "orig": 2,
            "destinos": [
              {
                "z": 1,
                "pct": 100
              }
            ],
            "eff": null,
            "tot": 2,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "X8",
            "orig": 9,
            "destinos": [
              {
                "z": 5,
                "pct": 67
              },
              {
                "z": 1,
                "pct": 33
              }
            ],
            "eff": 33,
            "tot": 6,
            "pts": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "V8",
            "orig": 9,
            "destinos": [
              {
                "z": 1,
                "pct": 100
              }
            ],
            "eff": 50,
            "tot": 2,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 67
              },
              {
                "z": 5,
                "pct": 25
              },
              {
                "z": 1,
                "pct": 8
              }
            ],
            "eff": -13,
            "tot": 15,
            "pts": 1,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 7
          }
        ],
        "video": 0,
        "recepcion": {}
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "Vazquez E.",
        "rotaciones": [
          {
            "pos": "P1",
            "total": 9,
            "dist": [
              {
                "zona": 4,
                "tot": 4,
                "pts": 0,
                "pct": 44,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 0,
                "pct": 22,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 0,
                "pct": 22,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 0,
                "pct": 11,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P6",
            "total": 12,
            "dist": [
              {
                "zona": 4,
                "tot": 5,
                "pts": 0,
                "pct": 42,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 0,
                "pct": 25,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 4,
                "pts": 0,
                "pct": 33,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P5",
            "total": 6,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 0,
                "pct": 33,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 17,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P4",
            "total": 6,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 0,
                "pct": 33,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 17,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P3",
            "total": 7,
            "dist": [
              {
                "zona": 4,
                "tot": 4,
                "pts": 0,
                "pct": 57,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 14,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 14,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P2",
            "total": 0,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 0,
            "tot": 9,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P6",
            "eff": 0,
            "tot": 12,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P5",
            "eff": 0,
            "tot": 6,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P4",
            "eff": 0,
            "tot": 6,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P3",
            "eff": 0,
            "tot": 7,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P2",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "SO",
            "eff": 28,
            "tot": 40,
            "pts": 18,
            "pts_pct": 45,
            "err_pct": 18
          },
          {
            "label": "TR",
            "eff": -6,
            "tot": 32,
            "pts": 8,
            "pts_pct": 25,
            "err_pct": 31
          }
        ],
        "recepcion": [],
        "so": {},
        "tr": {}
      },
      "suplente": {
        "nombre": "Godoy M.",
        "rotaciones": [
          {
            "pos": "P1",
            "total": 0,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P6",
            "total": 1,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 100,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P5",
            "total": 0,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P4",
            "total": 0,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P3",
            "total": 1,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 100,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P2",
            "total": 0,
            "dist": [
              {
                "zona": 4,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 0,
                "pts": 0,
                "pct": 0,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P6",
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P5",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P4",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P3",
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "P2",
            "eff": 0,
            "tot": 0,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 0
          },
          {
            "label": "SO",
            "eff": -50,
            "tot": 2,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 50
          },
          {
            "label": "TR",
            "eff": 0,
            "tot": 3,
            "pts": 1,
            "pts_pct": 33,
            "err_pct": 33
          }
        ],
        "recepcion": [],
        "so": {},
        "tr": {}
      }
    }
  }
];
