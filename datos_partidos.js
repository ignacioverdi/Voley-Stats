// datos_partidos.js — 01/06/2026 16:16
const PARTIDOS_GENERADO = "01/06/2026 16:16";
const PARTIDOS_TOTAL = 5;
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
    "nombre": "CIUDAD VOLEY",
    "rival": "CIUDAD VOLEY",
    "fecha": "05/05/2026",
    "torneo": "División de Honor",
    "resultado": "",
    "sets_casla": "",
    "sets_rival": ""
  },
  {
    "nombre": "FERRO",
    "rival": "FERRO",
    "fecha": "08/05/2026",
    "torneo": "División de Honor",
    "resultado": "",
    "sets_casla": "",
    "sets_rival": ""
  },
  {
    "nombre": "HACOAJ",
    "rival": "HACOAJ",
    "fecha": "16/05/2026",
    "torneo": "División de Honor",
    "resultado": "",
    "sets_casla": "",
    "sets_rival": ""
  },
  {
    "nombre": "VELEZ",
    "rival": "VELEZ",
    "fecha": "22/05/2026",
    "torneo": "División de Honor",
    "resultado": "",
    "sets_casla": "",
    "sets_rival": ""
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
            "tot": 12,
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
            "tot": 9,
            "eff": 22,
            "pos": 56,
            "neg": 22
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
            "tot": 33,
            "eff": 17,
            "pos": 33,
            "neg": 9
          },
          "p1": {
            "tot": 24,
            "eff": 8,
            "pos": 33,
            "neg": 12
          },
          "p6": {
            "tot": 9,
            "eff": 22,
            "pos": 33,
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
            "eff": 14,
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
            "tot": 6,
            "eff": 0,
            "pos": 50,
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
            "tot": 3,
            "eff": 33,
            "pos": 33,
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
    },
    "objetivos": {}
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
        "tot": 135,
        "pts": 75,
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
        "tot": 65,
        "pts": 40,
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
        "eff": 47,
        "tot": 95,
        "pts": 55,
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
        "tot": 15,
        "pts": 10,
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
            "z": 6,
            "pct": 22
          },
          {
            "z": 7,
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
        "eff": -11,
        "tot": 190,
        "pts": 0,
        "plus": 15,
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
    "recepcion": {},
    "objetivos": {}
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
        "eff": 8,
        "tot": 370,
        "pts": 30,
        "plus": 25,
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
    "recepcion": {},
    "objetivos": {}
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
        "tot": 5,
        "pts": 5,
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
        "eff": 33,
        "tot": 200,
        "pts": 85,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 42
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
        "tot": 160,
        "pts": 80,
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
        "tot": 80,
        "pts": 40,
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
            "z": 6,
            "pct": 100
          }
        ],
        "eff": -50,
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
        "tot": 225,
        "pts": 20,
        "plus": 25,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 9
      }
    ],
    "video": 0,
    "recepcion": {},
    "objetivos": {}
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
        "tot": 35,
        "pts": 5,
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
        "tot": 30,
        "pts": 0,
        "plus": 5,
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
    },
    "objetivos": {}
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
        "tot": 250,
        "pts": 10,
        "plus": 30,
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
    "recepcion": {},
    "objetivos": {}
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
    "recepcion": {},
    "objetivos": {}
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
        "eff": 31,
        "tot": 490,
        "pts": 215,
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
            "z": 1,
            "pct": 14
          },
          {
            "z": 6,
            "pct": 14
          },
          {
            "z": 8,
            "pct": 9
          }
        ],
        "eff": -8,
        "tot": 220,
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
            "pct": 42
          },
          {
            "z": 5,
            "pct": 42
          },
          {
            "z": 8,
            "pct": 8
          },
          {
            "z": 1,
            "pct": 8
          }
        ],
        "eff": -35,
        "tot": 165,
        "pts": 15,
        "plus": 20,
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
            "tot": 34,
            "eff": 46,
            "pos": 76,
            "neg": 6
          },
          "p1": {
            "tot": 3,
            "eff": 33,
            "pos": 33,
            "neg": 0
          },
          "p6": {
            "tot": 16,
            "eff": 25,
            "pos": 62,
            "neg": 6
          },
          "p5": {
            "tot": 15,
            "eff": 13,
            "pos": 87,
            "neg": 7
          }
        },
        "desde_z6": {
          "total": {
            "tot": 18,
            "eff": 42,
            "pos": 56,
            "neg": 0
          },
          "p1": {
            "tot": 3,
            "eff": 33,
            "pos": 33,
            "neg": 0
          },
          "p6": {
            "tot": 9,
            "eff": 50,
            "pos": 67,
            "neg": 0
          },
          "p5": {
            "tot": 6,
            "eff": 33,
            "pos": 50,
            "neg": 0
          }
        },
        "desde_z5": {
          "total": {
            "tot": 24,
            "eff": 48,
            "pos": 71,
            "neg": 4
          },
          "p1": {
            "tot": 2,
            "eff": 0,
            "pos": 50,
            "neg": 0
          },
          "p6": {
            "tot": 13,
            "eff": 46,
            "pos": 69,
            "neg": 8
          },
          "p5": {
            "tot": 9,
            "eff": 33,
            "pos": 78,
            "neg": 0
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "total": {
            "tot": 15,
            "eff": 17,
            "pos": 47,
            "neg": 20
          },
          "p1": {
            "tot": 2,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 7,
            "eff": 14,
            "pos": 57,
            "neg": 14
          },
          "p5": {
            "tot": 6,
            "eff": 0,
            "pos": 33,
            "neg": 33
          }
        },
        "desde_z6": {
          "total": {
            "tot": 19,
            "eff": 37,
            "pos": 63,
            "neg": 16
          },
          "p1": {
            "tot": 1,
            "eff": 50,
            "pos": 100,
            "neg": 0
          },
          "p6": {
            "tot": 11,
            "eff": 36,
            "pos": 64,
            "neg": 18
          },
          "p5": {
            "tot": 7,
            "eff": 36,
            "pos": 57,
            "neg": 14
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
    },
    "objetivos": {}
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
            "tot": 28,
            "eff": 59,
            "pos": 82,
            "neg": 4
          },
          "p1": {
            "tot": 14,
            "eff": 36,
            "pos": 36,
            "neg": 0
          },
          "p6": {
            "tot": 14,
            "eff": 43,
            "pos": 79,
            "neg": 7
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
            "tot": 18,
            "eff": 53,
            "pos": 72,
            "neg": 6
          },
          "p1": {
            "tot": 6,
            "eff": 75,
            "pos": 100,
            "neg": 0
          },
          "p6": {
            "tot": 10,
            "eff": 35,
            "pos": 50,
            "neg": 10
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
            "tot": 38,
            "eff": 45,
            "pos": 66,
            "neg": 8
          },
          "p1": {
            "tot": 19,
            "eff": 26,
            "pos": 63,
            "neg": 11
          },
          "p6": {
            "tot": 15,
            "eff": 57,
            "pos": 73,
            "neg": 7
          },
          "p5": {
            "tot": 4,
            "eff": 0,
            "pos": 50,
            "neg": 0
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "total": {
            "tot": 17,
            "eff": 3,
            "pos": 18,
            "neg": 12
          },
          "p1": {
            "tot": 6,
            "eff": 0,
            "pos": 17,
            "neg": 17
          },
          "p6": {
            "tot": 11,
            "eff": 0,
            "pos": 18,
            "neg": 9
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
            "tot": 12,
            "eff": -12,
            "pos": 17,
            "neg": 25
          },
          "p1": {
            "tot": 9,
            "eff": -17,
            "pos": 11,
            "neg": 22
          },
          "p6": {
            "tot": 3,
            "eff": 0,
            "pos": 33,
            "neg": 33
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
    },
    "objetivos": {}
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
        "tot": 20,
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
            "tot": 3,
            "eff": 50,
            "pos": 67,
            "neg": 0
          },
          "p1": {
            "tot": 1,
            "eff": 100,
            "pos": 100,
            "neg": 0
          },
          "p6": {
            "tot": 2,
            "eff": 0,
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
    },
    "objetivos": {}
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
        "tot": 495,
        "pts": 220,
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
        "tot": 330,
        "pts": 115,
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
        "tot": 15,
        "pts": 5,
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
            "z": 5,
            "pct": 21
          },
          {
            "z": 7,
            "pct": 21
          },
          {
            "z": 9,
            "pct": 10
          },
          {
            "z": 1,
            "pct": 7
          },
          {
            "z": 8,
            "pct": 7
          }
        ],
        "eff": 1,
        "tot": 145,
        "pts": 0,
        "plus": 15,
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
        "eff": 2,
        "tot": 385,
        "pts": 20,
        "plus": 55,
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
            "tot": 43,
            "eff": 52,
            "pos": 72,
            "neg": 2
          },
          "p1": {
            "tot": 5,
            "eff": 20,
            "pos": 20,
            "neg": 0
          },
          "p6": {
            "tot": 15,
            "eff": 33,
            "pos": 67,
            "neg": 7
          },
          "p5": {
            "tot": 20,
            "eff": 40,
            "pos": 75,
            "neg": 0
          }
        },
        "desde_z6": {
          "total": {
            "tot": 12,
            "eff": 62,
            "pos": 92,
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
            "eff": 64,
            "pos": 86,
            "neg": 0
          },
          "p5": {
            "tot": 4,
            "eff": 62,
            "pos": 100,
            "neg": 0
          }
        },
        "desde_z5": {
          "total": {
            "tot": 29,
            "eff": 62,
            "pos": 83,
            "neg": 3
          },
          "p1": {
            "tot": 2,
            "eff": 50,
            "pos": 50,
            "neg": 0
          },
          "p6": {
            "tot": 15,
            "eff": 53,
            "pos": 80,
            "neg": 7
          },
          "p5": {
            "tot": 9,
            "eff": 67,
            "pos": 89,
            "neg": 0
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "total": {
            "tot": 16,
            "eff": 12,
            "pos": 44,
            "neg": 25
          },
          "p1": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 8,
            "eff": 38,
            "pos": 62,
            "neg": 12
          },
          "p5": {
            "tot": 7,
            "eff": -29,
            "pos": 29,
            "neg": 43
          }
        },
        "desde_z6": {
          "total": {
            "tot": 19,
            "eff": 21,
            "pos": 58,
            "neg": 11
          },
          "p1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0
          },
          "p6": {
            "tot": 15,
            "eff": 37,
            "pos": 60,
            "neg": 7
          },
          "p5": {
            "tot": 4,
            "eff": 0,
            "pos": 50,
            "neg": 25
          }
        },
        "desde_z5": {
          "total": {
            "tot": 7,
            "eff": 21,
            "pos": 43,
            "neg": 0
          },
          "p1": {
            "tot": 3,
            "eff": 0,
            "pos": 33,
            "neg": 0
          },
          "p6": {
            "tot": 3,
            "eff": 33,
            "pos": 67,
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
    },
    "objetivos": {}
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
        "tot": 45,
        "pts": 25,
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
        "eff": 56,
        "tot": 45,
        "pts": 25,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 56
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
        "tot": 130,
        "pts": 5,
        "plus": 5,
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
    "recepcion": {},
    "objetivos": {}
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
            "pct": 7
          },
          {
            "z": 5,
            "pct": 7
          },
          {
            "z": 8,
            "pct": 3
          },
          {
            "z": 7,
            "pct": 3
          }
        ],
        "eff": 50,
        "tot": 60,
        "pts": 30,
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
            "pct": 10
          },
          {
            "z": 2,
            "pct": 5
          },
          {
            "z": 8,
            "pct": 5
          }
        ],
        "eff": 50,
        "tot": 40,
        "pts": 20,
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
            "pct": 6
          },
          {
            "z": 7,
            "pct": 6
          },
          {
            "z": 6,
            "pct": 4
          },
          {
            "z": 8,
            "pct": 3
          }
        ],
        "eff": 24,
        "tot": 145,
        "pts": 70,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 48
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
        "eff": -2,
        "tot": 270,
        "pts": 0,
        "plus": 25,
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
    "recepcion": {},
    "objetivos": {}
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
        "tot": 135,
        "pts": 65,
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
        "tot": 120,
        "pts": 65,
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
        "tot": 25,
        "pts": 10,
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
        "tot": 180,
        "pts": 20,
        "plus": 15,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 11
      }
    ],
    "video": 0,
    "recepcion": {},
    "objetivos": {}
  }
];

const PARTIDOS_ARMADOR = {
  "titular": {
    "nombre": "Vazquez E.",
    "rotaciones": [
      {
        "pos": "P1",
        "total": 150,
        "dist": [
          {
            "zona": 4,
            "tot": 11,
            "pts": 4,
            "pct": 37,
            "pct_p": 36
          },
          {
            "zona": 3,
            "tot": 10,
            "pts": 5,
            "pct": 33,
            "pct_p": 50
          },
          {
            "zona": 2,
            "tot": 7,
            "pts": 3,
            "pct": 23,
            "pct_p": 43
          },
          {
            "zona": 6,
            "tot": 2,
            "pts": 2,
            "pct": 7,
            "pct_p": 100
          }
        ]
      },
      {
        "pos": "P6",
        "total": 120,
        "dist": [
          {
            "zona": 4,
            "tot": 9,
            "pts": 3,
            "pct": 38,
            "pct_p": 33
          },
          {
            "zona": 3,
            "tot": 7,
            "pts": 4,
            "pct": 29,
            "pct_p": 57
          },
          {
            "zona": 2,
            "tot": 8,
            "pts": 5,
            "pct": 33,
            "pct_p": 62
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
        "total": 130,
        "dist": [
          {
            "zona": 4,
            "tot": 9,
            "pts": 6,
            "pct": 35,
            "pct_p": 67
          },
          {
            "zona": 3,
            "tot": 12,
            "pts": 7,
            "pct": 46,
            "pct_p": 58
          },
          {
            "zona": 2,
            "tot": 5,
            "pts": 2,
            "pct": 19,
            "pct_p": 40
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
        "total": 125,
        "dist": [
          {
            "zona": 4,
            "tot": 9,
            "pts": 5,
            "pct": 36,
            "pct_p": 56
          },
          {
            "zona": 3,
            "tot": 10,
            "pts": 4,
            "pct": 40,
            "pct_p": 40
          },
          {
            "zona": 2,
            "tot": 6,
            "pts": 3,
            "pct": 24,
            "pct_p": 50
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
        "total": 120,
        "dist": [
          {
            "zona": 4,
            "tot": 10,
            "pts": 5,
            "pct": 42,
            "pct_p": 50
          },
          {
            "zona": 3,
            "tot": 8,
            "pts": 6,
            "pct": 33,
            "pct_p": 75
          },
          {
            "zona": 2,
            "tot": 5,
            "pts": 2,
            "pct": 21,
            "pct_p": 40
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
        "total": 90,
        "dist": [
          {
            "zona": 4,
            "tot": 6,
            "pts": 1,
            "pct": 33,
            "pct_p": 17
          },
          {
            "zona": 3,
            "tot": 8,
            "pts": 6,
            "pct": 44,
            "pct_p": 75
          },
          {
            "zona": 2,
            "tot": 3,
            "pts": 2,
            "pct": 17,
            "pct_p": 67
          },
          {
            "zona": 6,
            "tot": 1,
            "pts": 0,
            "pct": 6,
            "pct_p": 0
          }
        ]
      }
    ],
    "pills": [
      {
        "label": "P1",
        "eff": 37,
        "tot": 30,
        "pts": 14,
        "pts_pct": 47,
        "err_pct": 10
      },
      {
        "label": "P6",
        "eff": 29,
        "tot": 24,
        "pts": 12,
        "pts_pct": 50,
        "err_pct": 21
      },
      {
        "label": "P5",
        "eff": 42,
        "tot": 26,
        "pts": 15,
        "pts_pct": 58,
        "err_pct": 15
      },
      {
        "label": "P4",
        "eff": 32,
        "tot": 25,
        "pts": 12,
        "pts_pct": 48,
        "err_pct": 16
      },
      {
        "label": "P3",
        "eff": 33,
        "tot": 24,
        "pts": 13,
        "pts_pct": 54,
        "err_pct": 21
      },
      {
        "label": "P2",
        "eff": 44,
        "tot": 18,
        "pts": 9,
        "pts_pct": 50,
        "err_pct": 6
      },
      {
        "label": "SO",
        "eff": 36,
        "tot": 147,
        "pts": 75,
        "pts_pct": 51,
        "err_pct": 15
      },
      {
        "label": "TR",
        "eff": 16,
        "tot": 122,
        "pts": 44,
        "pts_pct": 36,
        "err_pct": 20
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
        "total": 135,
        "dist": [
          {
            "zona": 4,
            "tot": 11,
            "pts": 3,
            "pct": 41,
            "pct_p": 27
          },
          {
            "zona": 3,
            "tot": 8,
            "pts": 4,
            "pct": 30,
            "pct_p": 50
          },
          {
            "zona": 2,
            "tot": 6,
            "pts": 0,
            "pct": 22,
            "pct_p": 0
          },
          {
            "zona": 6,
            "tot": 2,
            "pts": 0,
            "pct": 7,
            "pct_p": 0
          }
        ]
      },
      {
        "pos": "P6",
        "total": 135,
        "dist": [
          {
            "zona": 4,
            "tot": 10,
            "pts": 6,
            "pct": 37,
            "pct_p": 60
          },
          {
            "zona": 3,
            "tot": 9,
            "pts": 6,
            "pct": 33,
            "pct_p": 67
          },
          {
            "zona": 2,
            "tot": 8,
            "pts": 4,
            "pct": 30,
            "pct_p": 50
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
        "total": 120,
        "dist": [
          {
            "zona": 4,
            "tot": 7,
            "pts": 4,
            "pct": 29,
            "pct_p": 57
          },
          {
            "zona": 3,
            "tot": 13,
            "pts": 6,
            "pct": 54,
            "pct_p": 46
          },
          {
            "zona": 2,
            "tot": 3,
            "pts": 1,
            "pct": 12,
            "pct_p": 33
          },
          {
            "zona": 6,
            "tot": 1,
            "pts": 0,
            "pct": 4,
            "pct_p": 0
          }
        ]
      },
      {
        "pos": "P4",
        "total": 90,
        "dist": [
          {
            "zona": 4,
            "tot": 9,
            "pts": 4,
            "pct": 50,
            "pct_p": 44
          },
          {
            "zona": 3,
            "tot": 7,
            "pts": 5,
            "pct": 39,
            "pct_p": 71
          },
          {
            "zona": 2,
            "tot": 2,
            "pts": 1,
            "pct": 11,
            "pct_p": 50
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
        "total": 65,
        "dist": [
          {
            "zona": 4,
            "tot": 4,
            "pts": 1,
            "pct": 31,
            "pct_p": 25
          },
          {
            "zona": 3,
            "tot": 5,
            "pts": 2,
            "pct": 38,
            "pct_p": 40
          },
          {
            "zona": 2,
            "tot": 1,
            "pts": 0,
            "pct": 8,
            "pct_p": 0
          },
          {
            "zona": 6,
            "tot": 2,
            "pts": 1,
            "pct": 15,
            "pct_p": 50
          }
        ]
      },
      {
        "pos": "P2",
        "total": 60,
        "dist": [
          {
            "zona": 4,
            "tot": 4,
            "pts": 3,
            "pct": 33,
            "pct_p": 75
          },
          {
            "zona": 3,
            "tot": 4,
            "pts": 3,
            "pct": 33,
            "pct_p": 75
          },
          {
            "zona": 2,
            "tot": 3,
            "pts": 3,
            "pct": 25,
            "pct_p": 100
          },
          {
            "zona": 6,
            "tot": 1,
            "pts": 1,
            "pct": 8,
            "pct_p": 100
          }
        ]
      }
    ],
    "pills": [
      {
        "label": "P1",
        "eff": -4,
        "tot": 27,
        "pts": 7,
        "pts_pct": 26,
        "err_pct": 30
      },
      {
        "label": "P6",
        "eff": 56,
        "tot": 27,
        "pts": 16,
        "pts_pct": 59,
        "err_pct": 4
      },
      {
        "label": "P5",
        "eff": 29,
        "tot": 24,
        "pts": 11,
        "pts_pct": 46,
        "err_pct": 17
      },
      {
        "label": "P4",
        "eff": 33,
        "tot": 18,
        "pts": 10,
        "pts_pct": 56,
        "err_pct": 22
      },
      {
        "label": "P3",
        "eff": 23,
        "tot": 13,
        "pts": 5,
        "pts_pct": 38,
        "err_pct": 15
      },
      {
        "label": "P2",
        "eff": 83,
        "tot": 12,
        "pts": 10,
        "pts_pct": 83,
        "err_pct": 0
      },
      {
        "label": "SO",
        "eff": 33,
        "tot": 121,
        "pts": 59,
        "pts_pct": 49,
        "err_pct": 16
      },
      {
        "label": "TR",
        "eff": 30,
        "tot": 103,
        "pts": 45,
        "pts_pct": 44,
        "err_pct": 14
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
                "tot": 12,
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
                "tot": 9,
                "eff": 22,
                "pos": 56,
                "neg": 22
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
                "tot": 33,
                "eff": 17,
                "pos": 33,
                "neg": 9
              },
              "p1": {
                "tot": 24,
                "eff": 8,
                "pos": 33,
                "neg": 12
              },
              "p6": {
                "tot": 9,
                "eff": 22,
                "pos": 33,
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
                "eff": 14,
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
                "tot": 6,
                "eff": 0,
                "pos": 50,
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
                "tot": 3,
                "eff": 33,
                "pos": 33,
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
        },
        "objetivos": {}
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
            "eff": 47,
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
                "z": 6,
                "pct": 22
              },
              {
                "z": 7,
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
            "eff": -11,
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
        "recepcion": {},
        "objetivos": {}
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
            "eff": 8,
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
        "recepcion": {},
        "objetivos": {}
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
            "eff": 33,
            "tot": 40,
            "pts": 17,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 42
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
            "pts_pct": 50
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
        "recepcion": {},
        "objetivos": {}
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
        },
        "objetivos": {}
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
        "recepcion": {},
        "objetivos": {}
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
        "recepcion": {},
        "objetivos": {}
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
            "eff": 31,
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
                "z": 1,
                "pct": 14
              },
              {
                "z": 6,
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
                "z": 6,
                "pct": 42
              },
              {
                "z": 5,
                "pct": 42
              },
              {
                "z": 8,
                "pct": 8
              },
              {
                "z": 1,
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
                "tot": 34,
                "eff": 46,
                "pos": 76,
                "neg": 6
              },
              "p1": {
                "tot": 3,
                "eff": 33,
                "pos": 33,
                "neg": 0
              },
              "p6": {
                "tot": 16,
                "eff": 25,
                "pos": 62,
                "neg": 6
              },
              "p5": {
                "tot": 15,
                "eff": 13,
                "pos": 87,
                "neg": 7
              }
            },
            "desde_z6": {
              "total": {
                "tot": 18,
                "eff": 42,
                "pos": 56,
                "neg": 0
              },
              "p1": {
                "tot": 3,
                "eff": 33,
                "pos": 33,
                "neg": 0
              },
              "p6": {
                "tot": 9,
                "eff": 50,
                "pos": 67,
                "neg": 0
              },
              "p5": {
                "tot": 6,
                "eff": 33,
                "pos": 50,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 24,
                "eff": 48,
                "pos": 71,
                "neg": 4
              },
              "p1": {
                "tot": 2,
                "eff": 0,
                "pos": 50,
                "neg": 0
              },
              "p6": {
                "tot": 13,
                "eff": 46,
                "pos": 69,
                "neg": 8
              },
              "p5": {
                "tot": 9,
                "eff": 33,
                "pos": 78,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 15,
                "eff": 17,
                "pos": 47,
                "neg": 20
              },
              "p1": {
                "tot": 2,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 7,
                "eff": 14,
                "pos": 57,
                "neg": 14
              },
              "p5": {
                "tot": 6,
                "eff": 0,
                "pos": 33,
                "neg": 33
              }
            },
            "desde_z6": {
              "total": {
                "tot": 19,
                "eff": 37,
                "pos": 63,
                "neg": 16
              },
              "p1": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 11,
                "eff": 36,
                "pos": 64,
                "neg": 18
              },
              "p5": {
                "tot": 7,
                "eff": 36,
                "pos": 57,
                "neg": 14
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
        },
        "objetivos": {}
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
                "tot": 28,
                "eff": 59,
                "pos": 82,
                "neg": 4
              },
              "p1": {
                "tot": 14,
                "eff": 36,
                "pos": 36,
                "neg": 0
              },
              "p6": {
                "tot": 14,
                "eff": 43,
                "pos": 79,
                "neg": 7
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
                "tot": 18,
                "eff": 53,
                "pos": 72,
                "neg": 6
              },
              "p1": {
                "tot": 6,
                "eff": 75,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 10,
                "eff": 35,
                "pos": 50,
                "neg": 10
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
                "tot": 38,
                "eff": 45,
                "pos": 66,
                "neg": 8
              },
              "p1": {
                "tot": 19,
                "eff": 26,
                "pos": 63,
                "neg": 11
              },
              "p6": {
                "tot": 15,
                "eff": 57,
                "pos": 73,
                "neg": 7
              },
              "p5": {
                "tot": 4,
                "eff": 0,
                "pos": 50,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 17,
                "eff": 3,
                "pos": 18,
                "neg": 12
              },
              "p1": {
                "tot": 6,
                "eff": 0,
                "pos": 17,
                "neg": 17
              },
              "p6": {
                "tot": 11,
                "eff": 0,
                "pos": 18,
                "neg": 9
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
                "tot": 12,
                "eff": -12,
                "pos": 17,
                "neg": 25
              },
              "p1": {
                "tot": 9,
                "eff": -17,
                "pos": 11,
                "neg": 22
              },
              "p6": {
                "tot": 3,
                "eff": 0,
                "pos": 33,
                "neg": 33
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
        },
        "objetivos": {}
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
                "tot": 3,
                "eff": 50,
                "pos": 67,
                "neg": 0
              },
              "p1": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 0,
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
        },
        "objetivos": {}
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
            "pts_pct": 44
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
                "z": 5,
                "pct": 21
              },
              {
                "z": 7,
                "pct": 21
              },
              {
                "z": 9,
                "pct": 10
              },
              {
                "z": 1,
                "pct": 7
              },
              {
                "z": 8,
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
            "eff": 2,
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
                "tot": 43,
                "eff": 52,
                "pos": 72,
                "neg": 2
              },
              "p1": {
                "tot": 5,
                "eff": 20,
                "pos": 20,
                "neg": 0
              },
              "p6": {
                "tot": 15,
                "eff": 33,
                "pos": 67,
                "neg": 7
              },
              "p5": {
                "tot": 20,
                "eff": 40,
                "pos": 75,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 12,
                "eff": 62,
                "pos": 92,
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
                "eff": 64,
                "pos": 86,
                "neg": 0
              },
              "p5": {
                "tot": 4,
                "eff": 62,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 29,
                "eff": 62,
                "pos": 83,
                "neg": 3
              },
              "p1": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0
              },
              "p6": {
                "tot": 15,
                "eff": 53,
                "pos": 80,
                "neg": 7
              },
              "p5": {
                "tot": 9,
                "eff": 67,
                "pos": 89,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 16,
                "eff": 12,
                "pos": 44,
                "neg": 25
              },
              "p1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 8,
                "eff": 38,
                "pos": 62,
                "neg": 12
              },
              "p5": {
                "tot": 7,
                "eff": -29,
                "pos": 29,
                "neg": 43
              }
            },
            "desde_z6": {
              "total": {
                "tot": 19,
                "eff": 21,
                "pos": 58,
                "neg": 11
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 15,
                "eff": 37,
                "pos": 60,
                "neg": 7
              },
              "p5": {
                "tot": 4,
                "eff": 0,
                "pos": 50,
                "neg": 25
              }
            },
            "desde_z5": {
              "total": {
                "tot": 7,
                "eff": 21,
                "pos": 43,
                "neg": 0
              },
              "p1": {
                "tot": 3,
                "eff": 0,
                "pos": 33,
                "neg": 0
              },
              "p6": {
                "tot": 3,
                "eff": 33,
                "pos": 67,
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
        },
        "objetivos": {}
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
            "eff": 56,
            "tot": 9,
            "pts": 5,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 56
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
        "recepcion": {},
        "objetivos": {}
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
          },
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
            "pts_pct": 48
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
            "eff": -2,
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
        "recepcion": {},
        "objetivos": {}
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
        "recepcion": {},
        "objetivos": {}
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "Vazquez E.",
        "rotaciones": [
          {
            "pos": "P1",
            "total": 30,
            "dist": [
              {
                "zona": 4,
                "tot": 11,
                "pts": 4,
                "pct": 37,
                "pct_p": 36
              },
              {
                "zona": 3,
                "tot": 10,
                "pts": 5,
                "pct": 33,
                "pct_p": 50
              },
              {
                "zona": 2,
                "tot": 7,
                "pts": 3,
                "pct": 23,
                "pct_p": 43
              },
              {
                "zona": 6,
                "tot": 2,
                "pts": 2,
                "pct": 7,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P6",
            "total": 24,
            "dist": [
              {
                "zona": 4,
                "tot": 9,
                "pts": 3,
                "pct": 38,
                "pct_p": 33
              },
              {
                "zona": 3,
                "tot": 7,
                "pts": 4,
                "pct": 29,
                "pct_p": 57
              },
              {
                "zona": 2,
                "tot": 8,
                "pts": 5,
                "pct": 33,
                "pct_p": 62
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
                "tot": 9,
                "pts": 6,
                "pct": 35,
                "pct_p": 67
              },
              {
                "zona": 3,
                "tot": 12,
                "pts": 7,
                "pct": 46,
                "pct_p": 58
              },
              {
                "zona": 2,
                "tot": 5,
                "pts": 2,
                "pct": 19,
                "pct_p": 40
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
                "tot": 9,
                "pts": 5,
                "pct": 36,
                "pct_p": 56
              },
              {
                "zona": 3,
                "tot": 10,
                "pts": 4,
                "pct": 40,
                "pct_p": 40
              },
              {
                "zona": 2,
                "tot": 6,
                "pts": 3,
                "pct": 24,
                "pct_p": 50
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
                "tot": 10,
                "pts": 5,
                "pct": 42,
                "pct_p": 50
              },
              {
                "zona": 3,
                "tot": 8,
                "pts": 6,
                "pct": 33,
                "pct_p": 75
              },
              {
                "zona": 2,
                "tot": 5,
                "pts": 2,
                "pct": 21,
                "pct_p": 40
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
                "tot": 6,
                "pts": 1,
                "pct": 33,
                "pct_p": 17
              },
              {
                "zona": 3,
                "tot": 8,
                "pts": 6,
                "pct": 44,
                "pct_p": 75
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 2,
                "pct": 17,
                "pct_p": 67
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 0,
                "pct": 6,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 37,
            "tot": 30,
            "pts": 14,
            "pts_pct": 47,
            "err_pct": 10
          },
          {
            "label": "P6",
            "eff": 29,
            "tot": 24,
            "pts": 12,
            "pts_pct": 50,
            "err_pct": 21
          },
          {
            "label": "P5",
            "eff": 42,
            "tot": 26,
            "pts": 15,
            "pts_pct": 58,
            "err_pct": 15
          },
          {
            "label": "P4",
            "eff": 32,
            "tot": 25,
            "pts": 12,
            "pts_pct": 48,
            "err_pct": 16
          },
          {
            "label": "P3",
            "eff": 33,
            "tot": 24,
            "pts": 13,
            "pts_pct": 54,
            "err_pct": 21
          },
          {
            "label": "P2",
            "eff": 44,
            "tot": 18,
            "pts": 9,
            "pts_pct": 50,
            "err_pct": 6
          },
          {
            "label": "SO",
            "eff": 36,
            "tot": 147,
            "pts": 75,
            "pts_pct": 51,
            "err_pct": 15
          },
          {
            "label": "TR",
            "eff": 16,
            "tot": 122,
            "pts": 44,
            "pts_pct": 36,
            "err_pct": 20
          }
        ],
        "extra_pills": [
          {
            "label": "SO",
            "eff": 37
          },
          {
            "label": "REC #",
            "eff": 37
          },
          {
            "label": "REC +",
            "eff": 35
          },
          {
            "label": "REC !",
            "eff": 59
          },
          {
            "label": "REC -",
            "eff": 16
          },
          {
            "label": "TRANS",
            "eff": 16
          }
        ],
        "so_dist": [
          {
            "pos": "P4",
            "tot": 54,
            "pts": 24,
            "pct": 44
          },
          {
            "pos": "P3",
            "tot": 55,
            "pts": 32,
            "pct": 58
          },
          {
            "pos": "P2",
            "tot": 20,
            "pts": 10,
            "pct": 50
          },
          {
            "pos": "P1",
            "tot": 14,
            "pts": 7,
            "pct": 50
          },
          {
            "pos": "P6",
            "tot": 3,
            "pts": 2,
            "pct": 67
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 60,
            "pts": 23,
            "pct": 38
          },
          {
            "pos": "P3",
            "tot": 19,
            "pts": 7,
            "pct": 37
          },
          {
            "pos": "P2",
            "tot": 22,
            "pts": 6,
            "pct": 27
          },
          {
            "pos": "P1",
            "tot": 15,
            "pts": 6,
            "pct": 40
          },
          {
            "pos": "P6",
            "tot": 6,
            "pts": 2,
            "pct": 33
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
                "tot": 11,
                "pts": 3,
                "pct": 41,
                "pct_p": 27
              },
              {
                "zona": 3,
                "tot": 8,
                "pts": 4,
                "pct": 30,
                "pct_p": 50
              },
              {
                "zona": 2,
                "tot": 6,
                "pts": 0,
                "pct": 22,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 2,
                "pts": 0,
                "pct": 7,
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
                "tot": 10,
                "pts": 6,
                "pct": 37,
                "pct_p": 60
              },
              {
                "zona": 3,
                "tot": 9,
                "pts": 6,
                "pct": 33,
                "pct_p": 67
              },
              {
                "zona": 2,
                "tot": 8,
                "pts": 4,
                "pct": 30,
                "pct_p": 50
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
                "tot": 7,
                "pts": 4,
                "pct": 29,
                "pct_p": 57
              },
              {
                "zona": 3,
                "tot": 13,
                "pts": 6,
                "pct": 54,
                "pct_p": 46
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 1,
                "pct": 12,
                "pct_p": 33
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 0,
                "pct": 4,
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
                "tot": 9,
                "pts": 4,
                "pct": 50,
                "pct_p": 44
              },
              {
                "zona": 3,
                "tot": 7,
                "pts": 5,
                "pct": 39,
                "pct_p": 71
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 1,
                "pct": 11,
                "pct_p": 50
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
                "tot": 4,
                "pts": 1,
                "pct": 31,
                "pct_p": 25
              },
              {
                "zona": 3,
                "tot": 5,
                "pts": 2,
                "pct": 38,
                "pct_p": 40
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 8,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 2,
                "pts": 1,
                "pct": 15,
                "pct_p": 50
              }
            ]
          },
          {
            "pos": "P2",
            "total": 12,
            "dist": [
              {
                "zona": 4,
                "tot": 4,
                "pts": 3,
                "pct": 33,
                "pct_p": 75
              },
              {
                "zona": 3,
                "tot": 4,
                "pts": 3,
                "pct": 33,
                "pct_p": 75
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 3,
                "pct": 25,
                "pct_p": 100
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 1,
                "pct": 8,
                "pct_p": 100
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": -4,
            "tot": 27,
            "pts": 7,
            "pts_pct": 26,
            "err_pct": 30
          },
          {
            "label": "P6",
            "eff": 56,
            "tot": 27,
            "pts": 16,
            "pts_pct": 59,
            "err_pct": 4
          },
          {
            "label": "P5",
            "eff": 29,
            "tot": 24,
            "pts": 11,
            "pts_pct": 46,
            "err_pct": 17
          },
          {
            "label": "P4",
            "eff": 33,
            "tot": 18,
            "pts": 10,
            "pts_pct": 56,
            "err_pct": 22
          },
          {
            "label": "P3",
            "eff": 23,
            "tot": 13,
            "pts": 5,
            "pts_pct": 38,
            "err_pct": 15
          },
          {
            "label": "P2",
            "eff": 83,
            "tot": 12,
            "pts": 10,
            "pts_pct": 83,
            "err_pct": 0
          },
          {
            "label": "SO",
            "eff": 33,
            "tot": 121,
            "pts": 59,
            "pts_pct": 49,
            "err_pct": 16
          },
          {
            "label": "TR",
            "eff": 30,
            "tot": 103,
            "pts": 45,
            "pts_pct": 44,
            "err_pct": 14
          }
        ],
        "extra_pills": [
          {
            "label": "SO",
            "eff": 29
          },
          {
            "label": "REC #",
            "eff": 31
          },
          {
            "label": "REC +",
            "eff": 35
          },
          {
            "label": "REC !",
            "eff": 15
          },
          {
            "label": "REC -",
            "eff": 31
          },
          {
            "label": "TRANS",
            "eff": 30
          }
        ],
        "so_dist": [
          {
            "pos": "P4",
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P3",
            "tot": 39,
            "pts": 6,
            "pct": 33
          },
          {
            "pos": "P2",
            "tot": 17,
            "pts": 0,
            "pct": 400
          },
          {
            "pos": "P1",
            "tot": 1,
            "pts": 1,
            "pct": 300
          },
          {
            "pos": "P6",
            "tot": 16,
            "pts": 15,
            "pct": 7
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 2,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P3",
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P2",
            "tot": 25,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 3,
            "pts": 9,
            "pct": 28
          },
          {
            "pos": "P6",
            "tot": 0,
            "pts": 0,
            "pct": 0
          }
        ],
        "recepcion": [],
        "so": {},
        "tr": {}
      }
    },
    "objetivos": {},
    "equipo_obj": {}
  },
  {
    "nombre": "CIUDAD VOLEY",
    "rival": "CIUDAD VOLEY",
    "fecha": "05/05/2026",
    "torneo": "División de Honor",
    "resultado": "",
    "sets_casla": "",
    "sets_rival": "",
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
                "tot": 12,
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
                "tot": 9,
                "eff": 22,
                "pos": 56,
                "neg": 22
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
                "tot": 33,
                "eff": 17,
                "pos": 33,
                "neg": 9
              },
              "p1": {
                "tot": 24,
                "eff": 8,
                "pos": 33,
                "neg": 12
              },
              "p6": {
                "tot": 9,
                "eff": 22,
                "pos": 33,
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
                "eff": 14,
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
                "tot": 6,
                "eff": 0,
                "pos": 50,
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
                "tot": 3,
                "eff": 33,
                "pos": 33,
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
        },
        "objetivos": {}
      },
      {
        "num": 2,
        "nombre": "2 Ojuez A.",
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
            "eff": -11,
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
        "recepcion": {},
        "objetivos": {}
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
            "eff": 8,
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
        "recepcion": {},
        "objetivos": {}
      },
      {
        "num": 5,
        "nombre": "5 Ramos I.",
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
        "recepcion": {},
        "objetivos": {}
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
        },
        "objetivos": {}
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
        "recepcion": {},
        "objetivos": {}
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
        "recepcion": {},
        "objetivos": {}
      },
      {
        "num": 11,
        "nombre": "11 Durdos V.",
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
            "destinos": [],
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
                "tot": 34,
                "eff": 46,
                "pos": 76,
                "neg": 6
              },
              "p1": {
                "tot": 3,
                "eff": 33,
                "pos": 33,
                "neg": 0
              },
              "p6": {
                "tot": 16,
                "eff": 25,
                "pos": 62,
                "neg": 6
              },
              "p5": {
                "tot": 15,
                "eff": 13,
                "pos": 87,
                "neg": 7
              }
            },
            "desde_z6": {
              "total": {
                "tot": 18,
                "eff": 42,
                "pos": 56,
                "neg": 0
              },
              "p1": {
                "tot": 3,
                "eff": 33,
                "pos": 33,
                "neg": 0
              },
              "p6": {
                "tot": 9,
                "eff": 50,
                "pos": 67,
                "neg": 0
              },
              "p5": {
                "tot": 6,
                "eff": 33,
                "pos": 50,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 24,
                "eff": 48,
                "pos": 71,
                "neg": 4
              },
              "p1": {
                "tot": 2,
                "eff": 0,
                "pos": 50,
                "neg": 0
              },
              "p6": {
                "tot": 13,
                "eff": 46,
                "pos": 69,
                "neg": 8
              },
              "p5": {
                "tot": 9,
                "eff": 33,
                "pos": 78,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 15,
                "eff": 17,
                "pos": 47,
                "neg": 20
              },
              "p1": {
                "tot": 2,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 7,
                "eff": 14,
                "pos": 57,
                "neg": 14
              },
              "p5": {
                "tot": 6,
                "eff": 0,
                "pos": 33,
                "neg": 33
              }
            },
            "desde_z6": {
              "total": {
                "tot": 19,
                "eff": 37,
                "pos": 63,
                "neg": 16
              },
              "p1": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 11,
                "eff": 36,
                "pos": 64,
                "neg": 18
              },
              "p5": {
                "tot": 7,
                "eff": 36,
                "pos": 57,
                "neg": 14
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
        },
        "objetivos": {}
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
                "tot": 28,
                "eff": 59,
                "pos": 82,
                "neg": 4
              },
              "p1": {
                "tot": 14,
                "eff": 36,
                "pos": 36,
                "neg": 0
              },
              "p6": {
                "tot": 14,
                "eff": 43,
                "pos": 79,
                "neg": 7
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
                "tot": 18,
                "eff": 53,
                "pos": 72,
                "neg": 6
              },
              "p1": {
                "tot": 6,
                "eff": 75,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 10,
                "eff": 35,
                "pos": 50,
                "neg": 10
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
                "tot": 38,
                "eff": 45,
                "pos": 66,
                "neg": 8
              },
              "p1": {
                "tot": 19,
                "eff": 26,
                "pos": 63,
                "neg": 11
              },
              "p6": {
                "tot": 15,
                "eff": 57,
                "pos": 73,
                "neg": 7
              },
              "p5": {
                "tot": 4,
                "eff": 0,
                "pos": 50,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 17,
                "eff": 3,
                "pos": 18,
                "neg": 12
              },
              "p1": {
                "tot": 6,
                "eff": 0,
                "pos": 17,
                "neg": 17
              },
              "p6": {
                "tot": 11,
                "eff": 0,
                "pos": 18,
                "neg": 9
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
                "tot": 12,
                "eff": -12,
                "pos": 17,
                "neg": 25
              },
              "p1": {
                "tot": 9,
                "eff": -17,
                "pos": 11,
                "neg": 22
              },
              "p6": {
                "tot": 3,
                "eff": 0,
                "pos": 33,
                "neg": 33
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
        },
        "objetivos": {}
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
                "tot": 3,
                "eff": 50,
                "pos": 67,
                "neg": 0
              },
              "p1": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 0,
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
        },
        "objetivos": {}
      },
      {
        "num": 14,
        "nombre": "14 Nielson R.",
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
            "destinos": [],
            "eff": 2,
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
                "tot": 43,
                "eff": 52,
                "pos": 72,
                "neg": 2
              },
              "p1": {
                "tot": 5,
                "eff": 20,
                "pos": 20,
                "neg": 0
              },
              "p6": {
                "tot": 15,
                "eff": 33,
                "pos": 67,
                "neg": 7
              },
              "p5": {
                "tot": 20,
                "eff": 40,
                "pos": 75,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 12,
                "eff": 62,
                "pos": 92,
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
                "eff": 64,
                "pos": 86,
                "neg": 0
              },
              "p5": {
                "tot": 4,
                "eff": 62,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 29,
                "eff": 62,
                "pos": 83,
                "neg": 3
              },
              "p1": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0
              },
              "p6": {
                "tot": 15,
                "eff": 53,
                "pos": 80,
                "neg": 7
              },
              "p5": {
                "tot": 9,
                "eff": 67,
                "pos": 89,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 16,
                "eff": 12,
                "pos": 44,
                "neg": 25
              },
              "p1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 8,
                "eff": 38,
                "pos": 62,
                "neg": 12
              },
              "p5": {
                "tot": 7,
                "eff": -29,
                "pos": 29,
                "neg": 43
              }
            },
            "desde_z6": {
              "total": {
                "tot": 19,
                "eff": 21,
                "pos": 58,
                "neg": 11
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 15,
                "eff": 37,
                "pos": 60,
                "neg": 7
              },
              "p5": {
                "tot": 4,
                "eff": 0,
                "pos": 50,
                "neg": 25
              }
            },
            "desde_z5": {
              "total": {
                "tot": 7,
                "eff": 21,
                "pos": 43,
                "neg": 0
              },
              "p1": {
                "tot": 3,
                "eff": 0,
                "pos": 33,
                "neg": 0
              },
              "p6": {
                "tot": 3,
                "eff": 33,
                "pos": 67,
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
        },
        "objetivos": {}
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
        "recepcion": {},
        "objetivos": {}
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
            "destinos": [],
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
            "destinos": [],
            "eff": 50,
            "tot": 8,
            "pts": 4,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "XM",
            "orig": 3,
            "destinos": [],
            "eff": 24,
            "tot": 29,
            "pts": 14,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 48
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": -2,
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
        "recepcion": {},
        "objetivos": {}
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
        "recepcion": {},
        "objetivos": {}
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "Vazquez E.",
        "rotaciones": [
          {
            "pos": "P1",
            "total": 30,
            "dist": [
              {
                "zona": 4,
                "tot": 11,
                "pts": 4,
                "pct": 37,
                "pct_p": 36
              },
              {
                "zona": 3,
                "tot": 10,
                "pts": 5,
                "pct": 33,
                "pct_p": 50
              },
              {
                "zona": 2,
                "tot": 7,
                "pts": 3,
                "pct": 23,
                "pct_p": 43
              },
              {
                "zona": 6,
                "tot": 2,
                "pts": 2,
                "pct": 7,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P6",
            "total": 24,
            "dist": [
              {
                "zona": 4,
                "tot": 9,
                "pts": 3,
                "pct": 38,
                "pct_p": 33
              },
              {
                "zona": 3,
                "tot": 7,
                "pts": 4,
                "pct": 29,
                "pct_p": 57
              },
              {
                "zona": 2,
                "tot": 8,
                "pts": 5,
                "pct": 33,
                "pct_p": 62
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
                "tot": 9,
                "pts": 6,
                "pct": 35,
                "pct_p": 67
              },
              {
                "zona": 3,
                "tot": 12,
                "pts": 7,
                "pct": 46,
                "pct_p": 58
              },
              {
                "zona": 2,
                "tot": 5,
                "pts": 2,
                "pct": 19,
                "pct_p": 40
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
                "tot": 9,
                "pts": 5,
                "pct": 36,
                "pct_p": 56
              },
              {
                "zona": 3,
                "tot": 10,
                "pts": 4,
                "pct": 40,
                "pct_p": 40
              },
              {
                "zona": 2,
                "tot": 6,
                "pts": 3,
                "pct": 24,
                "pct_p": 50
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
                "tot": 10,
                "pts": 5,
                "pct": 42,
                "pct_p": 50
              },
              {
                "zona": 3,
                "tot": 8,
                "pts": 6,
                "pct": 33,
                "pct_p": 75
              },
              {
                "zona": 2,
                "tot": 5,
                "pts": 2,
                "pct": 21,
                "pct_p": 40
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
                "tot": 6,
                "pts": 1,
                "pct": 33,
                "pct_p": 17
              },
              {
                "zona": 3,
                "tot": 8,
                "pts": 6,
                "pct": 44,
                "pct_p": 75
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 2,
                "pct": 17,
                "pct_p": 67
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 0,
                "pct": 6,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 37,
            "tot": 30,
            "pts": 14,
            "pts_pct": 47,
            "err_pct": 10
          },
          {
            "label": "P6",
            "eff": 29,
            "tot": 24,
            "pts": 12,
            "pts_pct": 50,
            "err_pct": 21
          },
          {
            "label": "P5",
            "eff": 42,
            "tot": 26,
            "pts": 15,
            "pts_pct": 58,
            "err_pct": 15
          },
          {
            "label": "P4",
            "eff": 32,
            "tot": 25,
            "pts": 12,
            "pts_pct": 48,
            "err_pct": 16
          },
          {
            "label": "P3",
            "eff": 33,
            "tot": 24,
            "pts": 13,
            "pts_pct": 54,
            "err_pct": 21
          },
          {
            "label": "P2",
            "eff": 44,
            "tot": 18,
            "pts": 9,
            "pts_pct": 50,
            "err_pct": 6
          },
          {
            "label": "SO",
            "eff": 36,
            "tot": 147,
            "pts": 75,
            "pts_pct": 51,
            "err_pct": 15
          },
          {
            "label": "TR",
            "eff": 16,
            "tot": 122,
            "pts": 44,
            "pts_pct": 36,
            "err_pct": 20
          }
        ],
        "extra_pills": [
          {
            "label": "SO",
            "eff": 37
          },
          {
            "label": "REC #",
            "eff": 37
          },
          {
            "label": "REC +",
            "eff": 35
          },
          {
            "label": "REC !",
            "eff": 59
          },
          {
            "label": "REC -",
            "eff": 16
          },
          {
            "label": "TRANS",
            "eff": 16
          }
        ],
        "so_dist": [
          {
            "pos": "P4",
            "tot": 54,
            "pts": 24,
            "pct": 44
          },
          {
            "pos": "P3",
            "tot": 55,
            "pts": 32,
            "pct": 58
          },
          {
            "pos": "P2",
            "tot": 20,
            "pts": 10,
            "pct": 50
          },
          {
            "pos": "P1",
            "tot": 14,
            "pts": 7,
            "pct": 50
          },
          {
            "pos": "P6",
            "tot": 3,
            "pts": 2,
            "pct": 67
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 60,
            "pts": 23,
            "pct": 38
          },
          {
            "pos": "P3",
            "tot": 19,
            "pts": 7,
            "pct": 37
          },
          {
            "pos": "P2",
            "tot": 22,
            "pts": 6,
            "pct": 27
          },
          {
            "pos": "P1",
            "tot": 15,
            "pts": 6,
            "pct": 40
          },
          {
            "pos": "P6",
            "tot": 6,
            "pts": 2,
            "pct": 33
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
                "tot": 11,
                "pts": 3,
                "pct": 41,
                "pct_p": 27
              },
              {
                "zona": 3,
                "tot": 8,
                "pts": 4,
                "pct": 30,
                "pct_p": 50
              },
              {
                "zona": 2,
                "tot": 6,
                "pts": 0,
                "pct": 22,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 2,
                "pts": 0,
                "pct": 7,
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
                "tot": 10,
                "pts": 6,
                "pct": 37,
                "pct_p": 60
              },
              {
                "zona": 3,
                "tot": 9,
                "pts": 6,
                "pct": 33,
                "pct_p": 67
              },
              {
                "zona": 2,
                "tot": 8,
                "pts": 4,
                "pct": 30,
                "pct_p": 50
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
                "tot": 7,
                "pts": 4,
                "pct": 29,
                "pct_p": 57
              },
              {
                "zona": 3,
                "tot": 13,
                "pts": 6,
                "pct": 54,
                "pct_p": 46
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 1,
                "pct": 12,
                "pct_p": 33
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 0,
                "pct": 4,
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
                "tot": 9,
                "pts": 4,
                "pct": 50,
                "pct_p": 44
              },
              {
                "zona": 3,
                "tot": 7,
                "pts": 5,
                "pct": 39,
                "pct_p": 71
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 1,
                "pct": 11,
                "pct_p": 50
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
                "tot": 4,
                "pts": 1,
                "pct": 31,
                "pct_p": 25
              },
              {
                "zona": 3,
                "tot": 5,
                "pts": 2,
                "pct": 38,
                "pct_p": 40
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 8,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 2,
                "pts": 1,
                "pct": 15,
                "pct_p": 50
              }
            ]
          },
          {
            "pos": "P2",
            "total": 12,
            "dist": [
              {
                "zona": 4,
                "tot": 4,
                "pts": 3,
                "pct": 33,
                "pct_p": 75
              },
              {
                "zona": 3,
                "tot": 4,
                "pts": 3,
                "pct": 33,
                "pct_p": 75
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 3,
                "pct": 25,
                "pct_p": 100
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 1,
                "pct": 8,
                "pct_p": 100
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": -4,
            "tot": 27,
            "pts": 7,
            "pts_pct": 26,
            "err_pct": 30
          },
          {
            "label": "P6",
            "eff": 56,
            "tot": 27,
            "pts": 16,
            "pts_pct": 59,
            "err_pct": 4
          },
          {
            "label": "P5",
            "eff": 29,
            "tot": 24,
            "pts": 11,
            "pts_pct": 46,
            "err_pct": 17
          },
          {
            "label": "P4",
            "eff": 33,
            "tot": 18,
            "pts": 10,
            "pts_pct": 56,
            "err_pct": 22
          },
          {
            "label": "P3",
            "eff": 23,
            "tot": 13,
            "pts": 5,
            "pts_pct": 38,
            "err_pct": 15
          },
          {
            "label": "P2",
            "eff": 83,
            "tot": 12,
            "pts": 10,
            "pts_pct": 83,
            "err_pct": 0
          },
          {
            "label": "SO",
            "eff": 33,
            "tot": 121,
            "pts": 59,
            "pts_pct": 49,
            "err_pct": 16
          },
          {
            "label": "TR",
            "eff": 30,
            "tot": 103,
            "pts": 45,
            "pts_pct": 44,
            "err_pct": 14
          }
        ],
        "extra_pills": [
          {
            "label": "SO",
            "eff": 29
          },
          {
            "label": "REC #",
            "eff": 31
          },
          {
            "label": "REC +",
            "eff": 35
          },
          {
            "label": "REC !",
            "eff": 15
          },
          {
            "label": "REC -",
            "eff": 31
          },
          {
            "label": "TRANS",
            "eff": 30
          }
        ],
        "so_dist": [
          {
            "pos": "P4",
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P3",
            "tot": 39,
            "pts": 6,
            "pct": 33
          },
          {
            "pos": "P2",
            "tot": 17,
            "pts": 0,
            "pct": 400
          },
          {
            "pos": "P1",
            "tot": 1,
            "pts": 1,
            "pct": 300
          },
          {
            "pos": "P6",
            "tot": 16,
            "pts": 15,
            "pct": 7
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 2,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P3",
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P2",
            "tot": 25,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 3,
            "pts": 9,
            "pct": 28
          },
          {
            "pos": "P6",
            "tot": 0,
            "pts": 0,
            "pct": 0
          }
        ],
        "recepcion": [],
        "so": {},
        "tr": {}
      }
    },
    "objetivos": {},
    "equipo_obj": {}
  },
  {
    "nombre": "FERRO",
    "rival": "FERRO",
    "fecha": "08/05/2026",
    "torneo": "División de Honor",
    "resultado": "",
    "sets_casla": "",
    "sets_rival": "",
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
                "tot": 12,
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
                "tot": 9,
                "eff": 22,
                "pos": 56,
                "neg": 22
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
                "tot": 33,
                "eff": 17,
                "pos": 33,
                "neg": 9
              },
              "p1": {
                "tot": 24,
                "eff": 8,
                "pos": 33,
                "neg": 12
              },
              "p6": {
                "tot": 9,
                "eff": 22,
                "pos": 33,
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
                "eff": 14,
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
                "tot": 6,
                "eff": 0,
                "pos": 50,
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
                "tot": 3,
                "eff": 33,
                "pos": 33,
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
        },
        "objetivos": {}
      },
      {
        "num": 2,
        "nombre": "2 Ojuez A.",
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
            "eff": -11,
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
        "recepcion": {},
        "objetivos": {}
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
            "eff": 8,
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
        "recepcion": {},
        "objetivos": {}
      },
      {
        "num": 5,
        "nombre": "5 Ramos I.",
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
        "recepcion": {},
        "objetivos": {}
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
        },
        "objetivos": {}
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
        "recepcion": {},
        "objetivos": {}
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
        "recepcion": {},
        "objetivos": {}
      },
      {
        "num": 11,
        "nombre": "11 Durdos V.",
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
            "destinos": [],
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
                "tot": 34,
                "eff": 46,
                "pos": 76,
                "neg": 6
              },
              "p1": {
                "tot": 3,
                "eff": 33,
                "pos": 33,
                "neg": 0
              },
              "p6": {
                "tot": 16,
                "eff": 25,
                "pos": 62,
                "neg": 6
              },
              "p5": {
                "tot": 15,
                "eff": 13,
                "pos": 87,
                "neg": 7
              }
            },
            "desde_z6": {
              "total": {
                "tot": 18,
                "eff": 42,
                "pos": 56,
                "neg": 0
              },
              "p1": {
                "tot": 3,
                "eff": 33,
                "pos": 33,
                "neg": 0
              },
              "p6": {
                "tot": 9,
                "eff": 50,
                "pos": 67,
                "neg": 0
              },
              "p5": {
                "tot": 6,
                "eff": 33,
                "pos": 50,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 24,
                "eff": 48,
                "pos": 71,
                "neg": 4
              },
              "p1": {
                "tot": 2,
                "eff": 0,
                "pos": 50,
                "neg": 0
              },
              "p6": {
                "tot": 13,
                "eff": 46,
                "pos": 69,
                "neg": 8
              },
              "p5": {
                "tot": 9,
                "eff": 33,
                "pos": 78,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 15,
                "eff": 17,
                "pos": 47,
                "neg": 20
              },
              "p1": {
                "tot": 2,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 7,
                "eff": 14,
                "pos": 57,
                "neg": 14
              },
              "p5": {
                "tot": 6,
                "eff": 0,
                "pos": 33,
                "neg": 33
              }
            },
            "desde_z6": {
              "total": {
                "tot": 19,
                "eff": 37,
                "pos": 63,
                "neg": 16
              },
              "p1": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 11,
                "eff": 36,
                "pos": 64,
                "neg": 18
              },
              "p5": {
                "tot": 7,
                "eff": 36,
                "pos": 57,
                "neg": 14
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
        },
        "objetivos": {}
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
                "tot": 28,
                "eff": 59,
                "pos": 82,
                "neg": 4
              },
              "p1": {
                "tot": 14,
                "eff": 36,
                "pos": 36,
                "neg": 0
              },
              "p6": {
                "tot": 14,
                "eff": 43,
                "pos": 79,
                "neg": 7
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
                "tot": 18,
                "eff": 53,
                "pos": 72,
                "neg": 6
              },
              "p1": {
                "tot": 6,
                "eff": 75,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 10,
                "eff": 35,
                "pos": 50,
                "neg": 10
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
                "tot": 38,
                "eff": 45,
                "pos": 66,
                "neg": 8
              },
              "p1": {
                "tot": 19,
                "eff": 26,
                "pos": 63,
                "neg": 11
              },
              "p6": {
                "tot": 15,
                "eff": 57,
                "pos": 73,
                "neg": 7
              },
              "p5": {
                "tot": 4,
                "eff": 0,
                "pos": 50,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 17,
                "eff": 3,
                "pos": 18,
                "neg": 12
              },
              "p1": {
                "tot": 6,
                "eff": 0,
                "pos": 17,
                "neg": 17
              },
              "p6": {
                "tot": 11,
                "eff": 0,
                "pos": 18,
                "neg": 9
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
                "tot": 12,
                "eff": -12,
                "pos": 17,
                "neg": 25
              },
              "p1": {
                "tot": 9,
                "eff": -17,
                "pos": 11,
                "neg": 22
              },
              "p6": {
                "tot": 3,
                "eff": 0,
                "pos": 33,
                "neg": 33
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
        },
        "objetivos": {}
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
                "tot": 3,
                "eff": 50,
                "pos": 67,
                "neg": 0
              },
              "p1": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 0,
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
        },
        "objetivos": {}
      },
      {
        "num": 14,
        "nombre": "14 Nielson R.",
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
            "destinos": [],
            "eff": 2,
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
                "tot": 43,
                "eff": 52,
                "pos": 72,
                "neg": 2
              },
              "p1": {
                "tot": 5,
                "eff": 20,
                "pos": 20,
                "neg": 0
              },
              "p6": {
                "tot": 15,
                "eff": 33,
                "pos": 67,
                "neg": 7
              },
              "p5": {
                "tot": 20,
                "eff": 40,
                "pos": 75,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 12,
                "eff": 62,
                "pos": 92,
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
                "eff": 64,
                "pos": 86,
                "neg": 0
              },
              "p5": {
                "tot": 4,
                "eff": 62,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 29,
                "eff": 62,
                "pos": 83,
                "neg": 3
              },
              "p1": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0
              },
              "p6": {
                "tot": 15,
                "eff": 53,
                "pos": 80,
                "neg": 7
              },
              "p5": {
                "tot": 9,
                "eff": 67,
                "pos": 89,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 16,
                "eff": 12,
                "pos": 44,
                "neg": 25
              },
              "p1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 8,
                "eff": 38,
                "pos": 62,
                "neg": 12
              },
              "p5": {
                "tot": 7,
                "eff": -29,
                "pos": 29,
                "neg": 43
              }
            },
            "desde_z6": {
              "total": {
                "tot": 19,
                "eff": 21,
                "pos": 58,
                "neg": 11
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 15,
                "eff": 37,
                "pos": 60,
                "neg": 7
              },
              "p5": {
                "tot": 4,
                "eff": 0,
                "pos": 50,
                "neg": 25
              }
            },
            "desde_z5": {
              "total": {
                "tot": 7,
                "eff": 21,
                "pos": 43,
                "neg": 0
              },
              "p1": {
                "tot": 3,
                "eff": 0,
                "pos": 33,
                "neg": 0
              },
              "p6": {
                "tot": 3,
                "eff": 33,
                "pos": 67,
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
        },
        "objetivos": {}
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
        "recepcion": {},
        "objetivos": {}
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
            "destinos": [],
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
            "destinos": [],
            "eff": 50,
            "tot": 8,
            "pts": 4,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "XM",
            "orig": 3,
            "destinos": [],
            "eff": 24,
            "tot": 29,
            "pts": 14,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 48
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": -2,
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
        "recepcion": {},
        "objetivos": {}
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
        "recepcion": {},
        "objetivos": {}
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "Vazquez E.",
        "rotaciones": [
          {
            "pos": "P1",
            "total": 30,
            "dist": [
              {
                "zona": 4,
                "tot": 11,
                "pts": 4,
                "pct": 37,
                "pct_p": 36
              },
              {
                "zona": 3,
                "tot": 10,
                "pts": 5,
                "pct": 33,
                "pct_p": 50
              },
              {
                "zona": 2,
                "tot": 7,
                "pts": 3,
                "pct": 23,
                "pct_p": 43
              },
              {
                "zona": 6,
                "tot": 2,
                "pts": 2,
                "pct": 7,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P6",
            "total": 24,
            "dist": [
              {
                "zona": 4,
                "tot": 9,
                "pts": 3,
                "pct": 38,
                "pct_p": 33
              },
              {
                "zona": 3,
                "tot": 7,
                "pts": 4,
                "pct": 29,
                "pct_p": 57
              },
              {
                "zona": 2,
                "tot": 8,
                "pts": 5,
                "pct": 33,
                "pct_p": 62
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
                "tot": 9,
                "pts": 6,
                "pct": 35,
                "pct_p": 67
              },
              {
                "zona": 3,
                "tot": 12,
                "pts": 7,
                "pct": 46,
                "pct_p": 58
              },
              {
                "zona": 2,
                "tot": 5,
                "pts": 2,
                "pct": 19,
                "pct_p": 40
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
                "tot": 9,
                "pts": 5,
                "pct": 36,
                "pct_p": 56
              },
              {
                "zona": 3,
                "tot": 10,
                "pts": 4,
                "pct": 40,
                "pct_p": 40
              },
              {
                "zona": 2,
                "tot": 6,
                "pts": 3,
                "pct": 24,
                "pct_p": 50
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
                "tot": 10,
                "pts": 5,
                "pct": 42,
                "pct_p": 50
              },
              {
                "zona": 3,
                "tot": 8,
                "pts": 6,
                "pct": 33,
                "pct_p": 75
              },
              {
                "zona": 2,
                "tot": 5,
                "pts": 2,
                "pct": 21,
                "pct_p": 40
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
                "tot": 6,
                "pts": 1,
                "pct": 33,
                "pct_p": 17
              },
              {
                "zona": 3,
                "tot": 8,
                "pts": 6,
                "pct": 44,
                "pct_p": 75
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 2,
                "pct": 17,
                "pct_p": 67
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 0,
                "pct": 6,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 37,
            "tot": 30,
            "pts": 14,
            "pts_pct": 47,
            "err_pct": 10
          },
          {
            "label": "P6",
            "eff": 29,
            "tot": 24,
            "pts": 12,
            "pts_pct": 50,
            "err_pct": 21
          },
          {
            "label": "P5",
            "eff": 42,
            "tot": 26,
            "pts": 15,
            "pts_pct": 58,
            "err_pct": 15
          },
          {
            "label": "P4",
            "eff": 32,
            "tot": 25,
            "pts": 12,
            "pts_pct": 48,
            "err_pct": 16
          },
          {
            "label": "P3",
            "eff": 33,
            "tot": 24,
            "pts": 13,
            "pts_pct": 54,
            "err_pct": 21
          },
          {
            "label": "P2",
            "eff": 44,
            "tot": 18,
            "pts": 9,
            "pts_pct": 50,
            "err_pct": 6
          },
          {
            "label": "SO",
            "eff": 36,
            "tot": 147,
            "pts": 75,
            "pts_pct": 51,
            "err_pct": 15
          },
          {
            "label": "TR",
            "eff": 16,
            "tot": 122,
            "pts": 44,
            "pts_pct": 36,
            "err_pct": 20
          }
        ],
        "extra_pills": [
          {
            "label": "SO",
            "eff": 37
          },
          {
            "label": "REC #",
            "eff": 37
          },
          {
            "label": "REC +",
            "eff": 35
          },
          {
            "label": "REC !",
            "eff": 59
          },
          {
            "label": "REC -",
            "eff": 16
          },
          {
            "label": "TRANS",
            "eff": 16
          }
        ],
        "so_dist": [
          {
            "pos": "P4",
            "tot": 54,
            "pts": 24,
            "pct": 44
          },
          {
            "pos": "P3",
            "tot": 55,
            "pts": 32,
            "pct": 58
          },
          {
            "pos": "P2",
            "tot": 20,
            "pts": 10,
            "pct": 50
          },
          {
            "pos": "P1",
            "tot": 14,
            "pts": 7,
            "pct": 50
          },
          {
            "pos": "P6",
            "tot": 3,
            "pts": 2,
            "pct": 67
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 60,
            "pts": 23,
            "pct": 38
          },
          {
            "pos": "P3",
            "tot": 19,
            "pts": 7,
            "pct": 37
          },
          {
            "pos": "P2",
            "tot": 22,
            "pts": 6,
            "pct": 27
          },
          {
            "pos": "P1",
            "tot": 15,
            "pts": 6,
            "pct": 40
          },
          {
            "pos": "P6",
            "tot": 6,
            "pts": 2,
            "pct": 33
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
                "tot": 11,
                "pts": 3,
                "pct": 41,
                "pct_p": 27
              },
              {
                "zona": 3,
                "tot": 8,
                "pts": 4,
                "pct": 30,
                "pct_p": 50
              },
              {
                "zona": 2,
                "tot": 6,
                "pts": 0,
                "pct": 22,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 2,
                "pts": 0,
                "pct": 7,
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
                "tot": 10,
                "pts": 6,
                "pct": 37,
                "pct_p": 60
              },
              {
                "zona": 3,
                "tot": 9,
                "pts": 6,
                "pct": 33,
                "pct_p": 67
              },
              {
                "zona": 2,
                "tot": 8,
                "pts": 4,
                "pct": 30,
                "pct_p": 50
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
                "tot": 7,
                "pts": 4,
                "pct": 29,
                "pct_p": 57
              },
              {
                "zona": 3,
                "tot": 13,
                "pts": 6,
                "pct": 54,
                "pct_p": 46
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 1,
                "pct": 12,
                "pct_p": 33
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 0,
                "pct": 4,
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
                "tot": 9,
                "pts": 4,
                "pct": 50,
                "pct_p": 44
              },
              {
                "zona": 3,
                "tot": 7,
                "pts": 5,
                "pct": 39,
                "pct_p": 71
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 1,
                "pct": 11,
                "pct_p": 50
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
                "tot": 4,
                "pts": 1,
                "pct": 31,
                "pct_p": 25
              },
              {
                "zona": 3,
                "tot": 5,
                "pts": 2,
                "pct": 38,
                "pct_p": 40
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 8,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 2,
                "pts": 1,
                "pct": 15,
                "pct_p": 50
              }
            ]
          },
          {
            "pos": "P2",
            "total": 12,
            "dist": [
              {
                "zona": 4,
                "tot": 4,
                "pts": 3,
                "pct": 33,
                "pct_p": 75
              },
              {
                "zona": 3,
                "tot": 4,
                "pts": 3,
                "pct": 33,
                "pct_p": 75
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 3,
                "pct": 25,
                "pct_p": 100
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 1,
                "pct": 8,
                "pct_p": 100
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": -4,
            "tot": 27,
            "pts": 7,
            "pts_pct": 26,
            "err_pct": 30
          },
          {
            "label": "P6",
            "eff": 56,
            "tot": 27,
            "pts": 16,
            "pts_pct": 59,
            "err_pct": 4
          },
          {
            "label": "P5",
            "eff": 29,
            "tot": 24,
            "pts": 11,
            "pts_pct": 46,
            "err_pct": 17
          },
          {
            "label": "P4",
            "eff": 33,
            "tot": 18,
            "pts": 10,
            "pts_pct": 56,
            "err_pct": 22
          },
          {
            "label": "P3",
            "eff": 23,
            "tot": 13,
            "pts": 5,
            "pts_pct": 38,
            "err_pct": 15
          },
          {
            "label": "P2",
            "eff": 83,
            "tot": 12,
            "pts": 10,
            "pts_pct": 83,
            "err_pct": 0
          },
          {
            "label": "SO",
            "eff": 33,
            "tot": 121,
            "pts": 59,
            "pts_pct": 49,
            "err_pct": 16
          },
          {
            "label": "TR",
            "eff": 30,
            "tot": 103,
            "pts": 45,
            "pts_pct": 44,
            "err_pct": 14
          }
        ],
        "extra_pills": [
          {
            "label": "SO",
            "eff": 29
          },
          {
            "label": "REC #",
            "eff": 31
          },
          {
            "label": "REC +",
            "eff": 35
          },
          {
            "label": "REC !",
            "eff": 15
          },
          {
            "label": "REC -",
            "eff": 31
          },
          {
            "label": "TRANS",
            "eff": 30
          }
        ],
        "so_dist": [
          {
            "pos": "P4",
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P3",
            "tot": 39,
            "pts": 6,
            "pct": 33
          },
          {
            "pos": "P2",
            "tot": 17,
            "pts": 0,
            "pct": 400
          },
          {
            "pos": "P1",
            "tot": 1,
            "pts": 1,
            "pct": 300
          },
          {
            "pos": "P6",
            "tot": 16,
            "pts": 15,
            "pct": 7
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 2,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P3",
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P2",
            "tot": 25,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 3,
            "pts": 9,
            "pct": 28
          },
          {
            "pos": "P6",
            "tot": 0,
            "pts": 0,
            "pct": 0
          }
        ],
        "recepcion": [],
        "so": {},
        "tr": {}
      }
    },
    "objetivos": {},
    "equipo_obj": {}
  },
  {
    "nombre": "HACOAJ",
    "rival": "HACOAJ",
    "fecha": "16/05/2026",
    "torneo": "División de Honor",
    "resultado": "",
    "sets_casla": "",
    "sets_rival": "",
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
                "tot": 12,
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
                "tot": 9,
                "eff": 22,
                "pos": 56,
                "neg": 22
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
                "tot": 33,
                "eff": 17,
                "pos": 33,
                "neg": 9
              },
              "p1": {
                "tot": 24,
                "eff": 8,
                "pos": 33,
                "neg": 12
              },
              "p6": {
                "tot": 9,
                "eff": 22,
                "pos": 33,
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
                "eff": 14,
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
                "tot": 6,
                "eff": 0,
                "pos": 50,
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
                "tot": 3,
                "eff": 33,
                "pos": 33,
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
        },
        "objetivos": {}
      },
      {
        "num": 2,
        "nombre": "2 Ojuez A.",
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
            "eff": -11,
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
        "recepcion": {},
        "objetivos": {}
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
            "eff": 8,
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
        "recepcion": {},
        "objetivos": {}
      },
      {
        "num": 5,
        "nombre": "5 Ramos I.",
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
        "recepcion": {},
        "objetivos": {}
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
        },
        "objetivos": {}
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
        "recepcion": {},
        "objetivos": {}
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
        "recepcion": {},
        "objetivos": {}
      },
      {
        "num": 11,
        "nombre": "11 Durdos V.",
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
            "destinos": [],
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
                "tot": 34,
                "eff": 46,
                "pos": 76,
                "neg": 6
              },
              "p1": {
                "tot": 3,
                "eff": 33,
                "pos": 33,
                "neg": 0
              },
              "p6": {
                "tot": 16,
                "eff": 25,
                "pos": 62,
                "neg": 6
              },
              "p5": {
                "tot": 15,
                "eff": 13,
                "pos": 87,
                "neg": 7
              }
            },
            "desde_z6": {
              "total": {
                "tot": 18,
                "eff": 42,
                "pos": 56,
                "neg": 0
              },
              "p1": {
                "tot": 3,
                "eff": 33,
                "pos": 33,
                "neg": 0
              },
              "p6": {
                "tot": 9,
                "eff": 50,
                "pos": 67,
                "neg": 0
              },
              "p5": {
                "tot": 6,
                "eff": 33,
                "pos": 50,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 24,
                "eff": 48,
                "pos": 71,
                "neg": 4
              },
              "p1": {
                "tot": 2,
                "eff": 0,
                "pos": 50,
                "neg": 0
              },
              "p6": {
                "tot": 13,
                "eff": 46,
                "pos": 69,
                "neg": 8
              },
              "p5": {
                "tot": 9,
                "eff": 33,
                "pos": 78,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 15,
                "eff": 17,
                "pos": 47,
                "neg": 20
              },
              "p1": {
                "tot": 2,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 7,
                "eff": 14,
                "pos": 57,
                "neg": 14
              },
              "p5": {
                "tot": 6,
                "eff": 0,
                "pos": 33,
                "neg": 33
              }
            },
            "desde_z6": {
              "total": {
                "tot": 19,
                "eff": 37,
                "pos": 63,
                "neg": 16
              },
              "p1": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 11,
                "eff": 36,
                "pos": 64,
                "neg": 18
              },
              "p5": {
                "tot": 7,
                "eff": 36,
                "pos": 57,
                "neg": 14
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
        },
        "objetivos": {}
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
                "tot": 28,
                "eff": 59,
                "pos": 82,
                "neg": 4
              },
              "p1": {
                "tot": 14,
                "eff": 36,
                "pos": 36,
                "neg": 0
              },
              "p6": {
                "tot": 14,
                "eff": 43,
                "pos": 79,
                "neg": 7
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
                "tot": 18,
                "eff": 53,
                "pos": 72,
                "neg": 6
              },
              "p1": {
                "tot": 6,
                "eff": 75,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 10,
                "eff": 35,
                "pos": 50,
                "neg": 10
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
                "tot": 38,
                "eff": 45,
                "pos": 66,
                "neg": 8
              },
              "p1": {
                "tot": 19,
                "eff": 26,
                "pos": 63,
                "neg": 11
              },
              "p6": {
                "tot": 15,
                "eff": 57,
                "pos": 73,
                "neg": 7
              },
              "p5": {
                "tot": 4,
                "eff": 0,
                "pos": 50,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 17,
                "eff": 3,
                "pos": 18,
                "neg": 12
              },
              "p1": {
                "tot": 6,
                "eff": 0,
                "pos": 17,
                "neg": 17
              },
              "p6": {
                "tot": 11,
                "eff": 0,
                "pos": 18,
                "neg": 9
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
                "tot": 12,
                "eff": -12,
                "pos": 17,
                "neg": 25
              },
              "p1": {
                "tot": 9,
                "eff": -17,
                "pos": 11,
                "neg": 22
              },
              "p6": {
                "tot": 3,
                "eff": 0,
                "pos": 33,
                "neg": 33
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
        },
        "objetivos": {}
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
                "tot": 3,
                "eff": 50,
                "pos": 67,
                "neg": 0
              },
              "p1": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 0,
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
        },
        "objetivos": {}
      },
      {
        "num": 14,
        "nombre": "14 Nielson R.",
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
            "destinos": [],
            "eff": 2,
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
                "tot": 43,
                "eff": 52,
                "pos": 72,
                "neg": 2
              },
              "p1": {
                "tot": 5,
                "eff": 20,
                "pos": 20,
                "neg": 0
              },
              "p6": {
                "tot": 15,
                "eff": 33,
                "pos": 67,
                "neg": 7
              },
              "p5": {
                "tot": 20,
                "eff": 40,
                "pos": 75,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 12,
                "eff": 62,
                "pos": 92,
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
                "eff": 64,
                "pos": 86,
                "neg": 0
              },
              "p5": {
                "tot": 4,
                "eff": 62,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 29,
                "eff": 62,
                "pos": 83,
                "neg": 3
              },
              "p1": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0
              },
              "p6": {
                "tot": 15,
                "eff": 53,
                "pos": 80,
                "neg": 7
              },
              "p5": {
                "tot": 9,
                "eff": 67,
                "pos": 89,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 16,
                "eff": 12,
                "pos": 44,
                "neg": 25
              },
              "p1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 8,
                "eff": 38,
                "pos": 62,
                "neg": 12
              },
              "p5": {
                "tot": 7,
                "eff": -29,
                "pos": 29,
                "neg": 43
              }
            },
            "desde_z6": {
              "total": {
                "tot": 19,
                "eff": 21,
                "pos": 58,
                "neg": 11
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 15,
                "eff": 37,
                "pos": 60,
                "neg": 7
              },
              "p5": {
                "tot": 4,
                "eff": 0,
                "pos": 50,
                "neg": 25
              }
            },
            "desde_z5": {
              "total": {
                "tot": 7,
                "eff": 21,
                "pos": 43,
                "neg": 0
              },
              "p1": {
                "tot": 3,
                "eff": 0,
                "pos": 33,
                "neg": 0
              },
              "p6": {
                "tot": 3,
                "eff": 33,
                "pos": 67,
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
        },
        "objetivos": {}
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
        "recepcion": {},
        "objetivos": {}
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
            "destinos": [],
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
            "destinos": [],
            "eff": 50,
            "tot": 8,
            "pts": 4,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "XM",
            "orig": 3,
            "destinos": [],
            "eff": 24,
            "tot": 29,
            "pts": 14,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 48
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": -2,
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
        "recepcion": {},
        "objetivos": {}
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
        "recepcion": {},
        "objetivos": {}
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "Vazquez E.",
        "rotaciones": [
          {
            "pos": "P1",
            "total": 30,
            "dist": [
              {
                "zona": 4,
                "tot": 11,
                "pts": 4,
                "pct": 37,
                "pct_p": 36
              },
              {
                "zona": 3,
                "tot": 10,
                "pts": 5,
                "pct": 33,
                "pct_p": 50
              },
              {
                "zona": 2,
                "tot": 7,
                "pts": 3,
                "pct": 23,
                "pct_p": 43
              },
              {
                "zona": 6,
                "tot": 2,
                "pts": 2,
                "pct": 7,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P6",
            "total": 24,
            "dist": [
              {
                "zona": 4,
                "tot": 9,
                "pts": 3,
                "pct": 38,
                "pct_p": 33
              },
              {
                "zona": 3,
                "tot": 7,
                "pts": 4,
                "pct": 29,
                "pct_p": 57
              },
              {
                "zona": 2,
                "tot": 8,
                "pts": 5,
                "pct": 33,
                "pct_p": 62
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
                "tot": 9,
                "pts": 6,
                "pct": 35,
                "pct_p": 67
              },
              {
                "zona": 3,
                "tot": 12,
                "pts": 7,
                "pct": 46,
                "pct_p": 58
              },
              {
                "zona": 2,
                "tot": 5,
                "pts": 2,
                "pct": 19,
                "pct_p": 40
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
                "tot": 9,
                "pts": 5,
                "pct": 36,
                "pct_p": 56
              },
              {
                "zona": 3,
                "tot": 10,
                "pts": 4,
                "pct": 40,
                "pct_p": 40
              },
              {
                "zona": 2,
                "tot": 6,
                "pts": 3,
                "pct": 24,
                "pct_p": 50
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
                "tot": 10,
                "pts": 5,
                "pct": 42,
                "pct_p": 50
              },
              {
                "zona": 3,
                "tot": 8,
                "pts": 6,
                "pct": 33,
                "pct_p": 75
              },
              {
                "zona": 2,
                "tot": 5,
                "pts": 2,
                "pct": 21,
                "pct_p": 40
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
                "tot": 6,
                "pts": 1,
                "pct": 33,
                "pct_p": 17
              },
              {
                "zona": 3,
                "tot": 8,
                "pts": 6,
                "pct": 44,
                "pct_p": 75
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 2,
                "pct": 17,
                "pct_p": 67
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 0,
                "pct": 6,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 37,
            "tot": 30,
            "pts": 14,
            "pts_pct": 47,
            "err_pct": 10
          },
          {
            "label": "P6",
            "eff": 29,
            "tot": 24,
            "pts": 12,
            "pts_pct": 50,
            "err_pct": 21
          },
          {
            "label": "P5",
            "eff": 42,
            "tot": 26,
            "pts": 15,
            "pts_pct": 58,
            "err_pct": 15
          },
          {
            "label": "P4",
            "eff": 32,
            "tot": 25,
            "pts": 12,
            "pts_pct": 48,
            "err_pct": 16
          },
          {
            "label": "P3",
            "eff": 33,
            "tot": 24,
            "pts": 13,
            "pts_pct": 54,
            "err_pct": 21
          },
          {
            "label": "P2",
            "eff": 44,
            "tot": 18,
            "pts": 9,
            "pts_pct": 50,
            "err_pct": 6
          },
          {
            "label": "SO",
            "eff": 36,
            "tot": 147,
            "pts": 75,
            "pts_pct": 51,
            "err_pct": 15
          },
          {
            "label": "TR",
            "eff": 16,
            "tot": 122,
            "pts": 44,
            "pts_pct": 36,
            "err_pct": 20
          }
        ],
        "extra_pills": [
          {
            "label": "SO",
            "eff": 37
          },
          {
            "label": "REC #",
            "eff": 37
          },
          {
            "label": "REC +",
            "eff": 35
          },
          {
            "label": "REC !",
            "eff": 59
          },
          {
            "label": "REC -",
            "eff": 16
          },
          {
            "label": "TRANS",
            "eff": 16
          }
        ],
        "so_dist": [
          {
            "pos": "P4",
            "tot": 54,
            "pts": 24,
            "pct": 44
          },
          {
            "pos": "P3",
            "tot": 55,
            "pts": 32,
            "pct": 58
          },
          {
            "pos": "P2",
            "tot": 20,
            "pts": 10,
            "pct": 50
          },
          {
            "pos": "P1",
            "tot": 14,
            "pts": 7,
            "pct": 50
          },
          {
            "pos": "P6",
            "tot": 3,
            "pts": 2,
            "pct": 67
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 60,
            "pts": 23,
            "pct": 38
          },
          {
            "pos": "P3",
            "tot": 19,
            "pts": 7,
            "pct": 37
          },
          {
            "pos": "P2",
            "tot": 22,
            "pts": 6,
            "pct": 27
          },
          {
            "pos": "P1",
            "tot": 15,
            "pts": 6,
            "pct": 40
          },
          {
            "pos": "P6",
            "tot": 6,
            "pts": 2,
            "pct": 33
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
                "tot": 11,
                "pts": 3,
                "pct": 41,
                "pct_p": 27
              },
              {
                "zona": 3,
                "tot": 8,
                "pts": 4,
                "pct": 30,
                "pct_p": 50
              },
              {
                "zona": 2,
                "tot": 6,
                "pts": 0,
                "pct": 22,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 2,
                "pts": 0,
                "pct": 7,
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
                "tot": 10,
                "pts": 6,
                "pct": 37,
                "pct_p": 60
              },
              {
                "zona": 3,
                "tot": 9,
                "pts": 6,
                "pct": 33,
                "pct_p": 67
              },
              {
                "zona": 2,
                "tot": 8,
                "pts": 4,
                "pct": 30,
                "pct_p": 50
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
                "tot": 7,
                "pts": 4,
                "pct": 29,
                "pct_p": 57
              },
              {
                "zona": 3,
                "tot": 13,
                "pts": 6,
                "pct": 54,
                "pct_p": 46
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 1,
                "pct": 12,
                "pct_p": 33
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 0,
                "pct": 4,
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
                "tot": 9,
                "pts": 4,
                "pct": 50,
                "pct_p": 44
              },
              {
                "zona": 3,
                "tot": 7,
                "pts": 5,
                "pct": 39,
                "pct_p": 71
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 1,
                "pct": 11,
                "pct_p": 50
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
                "tot": 4,
                "pts": 1,
                "pct": 31,
                "pct_p": 25
              },
              {
                "zona": 3,
                "tot": 5,
                "pts": 2,
                "pct": 38,
                "pct_p": 40
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 8,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 2,
                "pts": 1,
                "pct": 15,
                "pct_p": 50
              }
            ]
          },
          {
            "pos": "P2",
            "total": 12,
            "dist": [
              {
                "zona": 4,
                "tot": 4,
                "pts": 3,
                "pct": 33,
                "pct_p": 75
              },
              {
                "zona": 3,
                "tot": 4,
                "pts": 3,
                "pct": 33,
                "pct_p": 75
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 3,
                "pct": 25,
                "pct_p": 100
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 1,
                "pct": 8,
                "pct_p": 100
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": -4,
            "tot": 27,
            "pts": 7,
            "pts_pct": 26,
            "err_pct": 30
          },
          {
            "label": "P6",
            "eff": 56,
            "tot": 27,
            "pts": 16,
            "pts_pct": 59,
            "err_pct": 4
          },
          {
            "label": "P5",
            "eff": 29,
            "tot": 24,
            "pts": 11,
            "pts_pct": 46,
            "err_pct": 17
          },
          {
            "label": "P4",
            "eff": 33,
            "tot": 18,
            "pts": 10,
            "pts_pct": 56,
            "err_pct": 22
          },
          {
            "label": "P3",
            "eff": 23,
            "tot": 13,
            "pts": 5,
            "pts_pct": 38,
            "err_pct": 15
          },
          {
            "label": "P2",
            "eff": 83,
            "tot": 12,
            "pts": 10,
            "pts_pct": 83,
            "err_pct": 0
          },
          {
            "label": "SO",
            "eff": 33,
            "tot": 121,
            "pts": 59,
            "pts_pct": 49,
            "err_pct": 16
          },
          {
            "label": "TR",
            "eff": 30,
            "tot": 103,
            "pts": 45,
            "pts_pct": 44,
            "err_pct": 14
          }
        ],
        "extra_pills": [
          {
            "label": "SO",
            "eff": 29
          },
          {
            "label": "REC #",
            "eff": 31
          },
          {
            "label": "REC +",
            "eff": 35
          },
          {
            "label": "REC !",
            "eff": 15
          },
          {
            "label": "REC -",
            "eff": 31
          },
          {
            "label": "TRANS",
            "eff": 30
          }
        ],
        "so_dist": [
          {
            "pos": "P4",
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P3",
            "tot": 39,
            "pts": 6,
            "pct": 33
          },
          {
            "pos": "P2",
            "tot": 17,
            "pts": 0,
            "pct": 400
          },
          {
            "pos": "P1",
            "tot": 1,
            "pts": 1,
            "pct": 300
          },
          {
            "pos": "P6",
            "tot": 16,
            "pts": 15,
            "pct": 7
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 2,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P3",
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P2",
            "tot": 25,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 3,
            "pts": 9,
            "pct": 28
          },
          {
            "pos": "P6",
            "tot": 0,
            "pts": 0,
            "pct": 0
          }
        ],
        "recepcion": [],
        "so": {},
        "tr": {}
      }
    },
    "objetivos": {},
    "equipo_obj": {}
  },
  {
    "nombre": "VELEZ",
    "rival": "VELEZ",
    "fecha": "22/05/2026",
    "torneo": "División de Honor",
    "resultado": "",
    "sets_casla": "",
    "sets_rival": "",
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
                "tot": 12,
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
                "tot": 9,
                "eff": 22,
                "pos": 56,
                "neg": 22
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
                "tot": 33,
                "eff": 17,
                "pos": 33,
                "neg": 9
              },
              "p1": {
                "tot": 24,
                "eff": 8,
                "pos": 33,
                "neg": 12
              },
              "p6": {
                "tot": 9,
                "eff": 22,
                "pos": 33,
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
                "eff": 14,
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
                "tot": 6,
                "eff": 0,
                "pos": 50,
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
                "tot": 3,
                "eff": 33,
                "pos": 33,
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
        },
        "objetivos": {}
      },
      {
        "num": 2,
        "nombre": "2 Ojuez A.",
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
            "eff": -11,
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
        "recepcion": {},
        "objetivos": {}
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
            "eff": 8,
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
        "recepcion": {},
        "objetivos": {}
      },
      {
        "num": 5,
        "nombre": "5 Ramos I.",
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
        "recepcion": {},
        "objetivos": {}
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
        },
        "objetivos": {}
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
        "recepcion": {},
        "objetivos": {}
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
        "recepcion": {},
        "objetivos": {}
      },
      {
        "num": 11,
        "nombre": "11 Durdos V.",
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
            "destinos": [],
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
                "tot": 34,
                "eff": 46,
                "pos": 76,
                "neg": 6
              },
              "p1": {
                "tot": 3,
                "eff": 33,
                "pos": 33,
                "neg": 0
              },
              "p6": {
                "tot": 16,
                "eff": 25,
                "pos": 62,
                "neg": 6
              },
              "p5": {
                "tot": 15,
                "eff": 13,
                "pos": 87,
                "neg": 7
              }
            },
            "desde_z6": {
              "total": {
                "tot": 18,
                "eff": 42,
                "pos": 56,
                "neg": 0
              },
              "p1": {
                "tot": 3,
                "eff": 33,
                "pos": 33,
                "neg": 0
              },
              "p6": {
                "tot": 9,
                "eff": 50,
                "pos": 67,
                "neg": 0
              },
              "p5": {
                "tot": 6,
                "eff": 33,
                "pos": 50,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 24,
                "eff": 48,
                "pos": 71,
                "neg": 4
              },
              "p1": {
                "tot": 2,
                "eff": 0,
                "pos": 50,
                "neg": 0
              },
              "p6": {
                "tot": 13,
                "eff": 46,
                "pos": 69,
                "neg": 8
              },
              "p5": {
                "tot": 9,
                "eff": 33,
                "pos": 78,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 15,
                "eff": 17,
                "pos": 47,
                "neg": 20
              },
              "p1": {
                "tot": 2,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 7,
                "eff": 14,
                "pos": 57,
                "neg": 14
              },
              "p5": {
                "tot": 6,
                "eff": 0,
                "pos": 33,
                "neg": 33
              }
            },
            "desde_z6": {
              "total": {
                "tot": 19,
                "eff": 37,
                "pos": 63,
                "neg": 16
              },
              "p1": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 11,
                "eff": 36,
                "pos": 64,
                "neg": 18
              },
              "p5": {
                "tot": 7,
                "eff": 36,
                "pos": 57,
                "neg": 14
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
        },
        "objetivos": {}
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
                "tot": 28,
                "eff": 59,
                "pos": 82,
                "neg": 4
              },
              "p1": {
                "tot": 14,
                "eff": 36,
                "pos": 36,
                "neg": 0
              },
              "p6": {
                "tot": 14,
                "eff": 43,
                "pos": 79,
                "neg": 7
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
                "tot": 18,
                "eff": 53,
                "pos": 72,
                "neg": 6
              },
              "p1": {
                "tot": 6,
                "eff": 75,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 10,
                "eff": 35,
                "pos": 50,
                "neg": 10
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
                "tot": 38,
                "eff": 45,
                "pos": 66,
                "neg": 8
              },
              "p1": {
                "tot": 19,
                "eff": 26,
                "pos": 63,
                "neg": 11
              },
              "p6": {
                "tot": 15,
                "eff": 57,
                "pos": 73,
                "neg": 7
              },
              "p5": {
                "tot": 4,
                "eff": 0,
                "pos": 50,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 17,
                "eff": 3,
                "pos": 18,
                "neg": 12
              },
              "p1": {
                "tot": 6,
                "eff": 0,
                "pos": 17,
                "neg": 17
              },
              "p6": {
                "tot": 11,
                "eff": 0,
                "pos": 18,
                "neg": 9
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
                "tot": 12,
                "eff": -12,
                "pos": 17,
                "neg": 25
              },
              "p1": {
                "tot": 9,
                "eff": -17,
                "pos": 11,
                "neg": 22
              },
              "p6": {
                "tot": 3,
                "eff": 0,
                "pos": 33,
                "neg": 33
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
        },
        "objetivos": {}
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
                "tot": 3,
                "eff": 50,
                "pos": 67,
                "neg": 0
              },
              "p1": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 0,
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
        },
        "objetivos": {}
      },
      {
        "num": 14,
        "nombre": "14 Nielson R.",
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
            "destinos": [],
            "eff": 2,
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
                "tot": 43,
                "eff": 52,
                "pos": 72,
                "neg": 2
              },
              "p1": {
                "tot": 5,
                "eff": 20,
                "pos": 20,
                "neg": 0
              },
              "p6": {
                "tot": 15,
                "eff": 33,
                "pos": 67,
                "neg": 7
              },
              "p5": {
                "tot": 20,
                "eff": 40,
                "pos": 75,
                "neg": 0
              }
            },
            "desde_z6": {
              "total": {
                "tot": 12,
                "eff": 62,
                "pos": 92,
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
                "eff": 64,
                "pos": 86,
                "neg": 0
              },
              "p5": {
                "tot": 4,
                "eff": 62,
                "pos": 100,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 29,
                "eff": 62,
                "pos": 83,
                "neg": 3
              },
              "p1": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0
              },
              "p6": {
                "tot": 15,
                "eff": 53,
                "pos": 80,
                "neg": 7
              },
              "p5": {
                "tot": 9,
                "eff": 67,
                "pos": 89,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 16,
                "eff": 12,
                "pos": 44,
                "neg": 25
              },
              "p1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 8,
                "eff": 38,
                "pos": 62,
                "neg": 12
              },
              "p5": {
                "tot": 7,
                "eff": -29,
                "pos": 29,
                "neg": 43
              }
            },
            "desde_z6": {
              "total": {
                "tot": 19,
                "eff": 21,
                "pos": 58,
                "neg": 11
              },
              "p1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              },
              "p6": {
                "tot": 15,
                "eff": 37,
                "pos": 60,
                "neg": 7
              },
              "p5": {
                "tot": 4,
                "eff": 0,
                "pos": 50,
                "neg": 25
              }
            },
            "desde_z5": {
              "total": {
                "tot": 7,
                "eff": 21,
                "pos": 43,
                "neg": 0
              },
              "p1": {
                "tot": 3,
                "eff": 0,
                "pos": 33,
                "neg": 0
              },
              "p6": {
                "tot": 3,
                "eff": 33,
                "pos": 67,
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
        },
        "objetivos": {}
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
        "recepcion": {},
        "objetivos": {}
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
            "destinos": [],
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
            "destinos": [],
            "eff": 50,
            "tot": 8,
            "pts": 4,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "XM",
            "orig": 3,
            "destinos": [],
            "eff": 24,
            "tot": 29,
            "pts": 14,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 48
          }
        ],
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [],
            "eff": -2,
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
        "recepcion": {},
        "objetivos": {}
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
        "recepcion": {},
        "objetivos": {}
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "Vazquez E.",
        "rotaciones": [
          {
            "pos": "P1",
            "total": 30,
            "dist": [
              {
                "zona": 4,
                "tot": 11,
                "pts": 4,
                "pct": 37,
                "pct_p": 36
              },
              {
                "zona": 3,
                "tot": 10,
                "pts": 5,
                "pct": 33,
                "pct_p": 50
              },
              {
                "zona": 2,
                "tot": 7,
                "pts": 3,
                "pct": 23,
                "pct_p": 43
              },
              {
                "zona": 6,
                "tot": 2,
                "pts": 2,
                "pct": 7,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P6",
            "total": 24,
            "dist": [
              {
                "zona": 4,
                "tot": 9,
                "pts": 3,
                "pct": 38,
                "pct_p": 33
              },
              {
                "zona": 3,
                "tot": 7,
                "pts": 4,
                "pct": 29,
                "pct_p": 57
              },
              {
                "zona": 2,
                "tot": 8,
                "pts": 5,
                "pct": 33,
                "pct_p": 62
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
                "tot": 9,
                "pts": 6,
                "pct": 35,
                "pct_p": 67
              },
              {
                "zona": 3,
                "tot": 12,
                "pts": 7,
                "pct": 46,
                "pct_p": 58
              },
              {
                "zona": 2,
                "tot": 5,
                "pts": 2,
                "pct": 19,
                "pct_p": 40
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
                "tot": 9,
                "pts": 5,
                "pct": 36,
                "pct_p": 56
              },
              {
                "zona": 3,
                "tot": 10,
                "pts": 4,
                "pct": 40,
                "pct_p": 40
              },
              {
                "zona": 2,
                "tot": 6,
                "pts": 3,
                "pct": 24,
                "pct_p": 50
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
                "tot": 10,
                "pts": 5,
                "pct": 42,
                "pct_p": 50
              },
              {
                "zona": 3,
                "tot": 8,
                "pts": 6,
                "pct": 33,
                "pct_p": 75
              },
              {
                "zona": 2,
                "tot": 5,
                "pts": 2,
                "pct": 21,
                "pct_p": 40
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
                "tot": 6,
                "pts": 1,
                "pct": 33,
                "pct_p": 17
              },
              {
                "zona": 3,
                "tot": 8,
                "pts": 6,
                "pct": 44,
                "pct_p": 75
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 2,
                "pct": 17,
                "pct_p": 67
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 0,
                "pct": 6,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 37,
            "tot": 30,
            "pts": 14,
            "pts_pct": 47,
            "err_pct": 10
          },
          {
            "label": "P6",
            "eff": 29,
            "tot": 24,
            "pts": 12,
            "pts_pct": 50,
            "err_pct": 21
          },
          {
            "label": "P5",
            "eff": 42,
            "tot": 26,
            "pts": 15,
            "pts_pct": 58,
            "err_pct": 15
          },
          {
            "label": "P4",
            "eff": 32,
            "tot": 25,
            "pts": 12,
            "pts_pct": 48,
            "err_pct": 16
          },
          {
            "label": "P3",
            "eff": 33,
            "tot": 24,
            "pts": 13,
            "pts_pct": 54,
            "err_pct": 21
          },
          {
            "label": "P2",
            "eff": 44,
            "tot": 18,
            "pts": 9,
            "pts_pct": 50,
            "err_pct": 6
          },
          {
            "label": "SO",
            "eff": 36,
            "tot": 147,
            "pts": 75,
            "pts_pct": 51,
            "err_pct": 15
          },
          {
            "label": "TR",
            "eff": 16,
            "tot": 122,
            "pts": 44,
            "pts_pct": 36,
            "err_pct": 20
          }
        ],
        "extra_pills": [
          {
            "label": "SO",
            "eff": 37
          },
          {
            "label": "REC #",
            "eff": 37
          },
          {
            "label": "REC +",
            "eff": 35
          },
          {
            "label": "REC !",
            "eff": 59
          },
          {
            "label": "REC -",
            "eff": 16
          },
          {
            "label": "TRANS",
            "eff": 16
          }
        ],
        "so_dist": [
          {
            "pos": "P4",
            "tot": 54,
            "pts": 24,
            "pct": 44
          },
          {
            "pos": "P3",
            "tot": 55,
            "pts": 32,
            "pct": 58
          },
          {
            "pos": "P2",
            "tot": 20,
            "pts": 10,
            "pct": 50
          },
          {
            "pos": "P1",
            "tot": 14,
            "pts": 7,
            "pct": 50
          },
          {
            "pos": "P6",
            "tot": 3,
            "pts": 2,
            "pct": 67
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 60,
            "pts": 23,
            "pct": 38
          },
          {
            "pos": "P3",
            "tot": 19,
            "pts": 7,
            "pct": 37
          },
          {
            "pos": "P2",
            "tot": 22,
            "pts": 6,
            "pct": 27
          },
          {
            "pos": "P1",
            "tot": 15,
            "pts": 6,
            "pct": 40
          },
          {
            "pos": "P6",
            "tot": 6,
            "pts": 2,
            "pct": 33
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
                "tot": 11,
                "pts": 3,
                "pct": 41,
                "pct_p": 27
              },
              {
                "zona": 3,
                "tot": 8,
                "pts": 4,
                "pct": 30,
                "pct_p": 50
              },
              {
                "zona": 2,
                "tot": 6,
                "pts": 0,
                "pct": 22,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 2,
                "pts": 0,
                "pct": 7,
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
                "tot": 10,
                "pts": 6,
                "pct": 37,
                "pct_p": 60
              },
              {
                "zona": 3,
                "tot": 9,
                "pts": 6,
                "pct": 33,
                "pct_p": 67
              },
              {
                "zona": 2,
                "tot": 8,
                "pts": 4,
                "pct": 30,
                "pct_p": 50
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
                "tot": 7,
                "pts": 4,
                "pct": 29,
                "pct_p": 57
              },
              {
                "zona": 3,
                "tot": 13,
                "pts": 6,
                "pct": 54,
                "pct_p": 46
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 1,
                "pct": 12,
                "pct_p": 33
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 0,
                "pct": 4,
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
                "tot": 9,
                "pts": 4,
                "pct": 50,
                "pct_p": 44
              },
              {
                "zona": 3,
                "tot": 7,
                "pts": 5,
                "pct": 39,
                "pct_p": 71
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 1,
                "pct": 11,
                "pct_p": 50
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
                "tot": 4,
                "pts": 1,
                "pct": 31,
                "pct_p": 25
              },
              {
                "zona": 3,
                "tot": 5,
                "pts": 2,
                "pct": 38,
                "pct_p": 40
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 8,
                "pct_p": 0
              },
              {
                "zona": 6,
                "tot": 2,
                "pts": 1,
                "pct": 15,
                "pct_p": 50
              }
            ]
          },
          {
            "pos": "P2",
            "total": 12,
            "dist": [
              {
                "zona": 4,
                "tot": 4,
                "pts": 3,
                "pct": 33,
                "pct_p": 75
              },
              {
                "zona": 3,
                "tot": 4,
                "pts": 3,
                "pct": 33,
                "pct_p": 75
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 3,
                "pct": 25,
                "pct_p": 100
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 1,
                "pct": 8,
                "pct_p": 100
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": -4,
            "tot": 27,
            "pts": 7,
            "pts_pct": 26,
            "err_pct": 30
          },
          {
            "label": "P6",
            "eff": 56,
            "tot": 27,
            "pts": 16,
            "pts_pct": 59,
            "err_pct": 4
          },
          {
            "label": "P5",
            "eff": 29,
            "tot": 24,
            "pts": 11,
            "pts_pct": 46,
            "err_pct": 17
          },
          {
            "label": "P4",
            "eff": 33,
            "tot": 18,
            "pts": 10,
            "pts_pct": 56,
            "err_pct": 22
          },
          {
            "label": "P3",
            "eff": 23,
            "tot": 13,
            "pts": 5,
            "pts_pct": 38,
            "err_pct": 15
          },
          {
            "label": "P2",
            "eff": 83,
            "tot": 12,
            "pts": 10,
            "pts_pct": 83,
            "err_pct": 0
          },
          {
            "label": "SO",
            "eff": 33,
            "tot": 121,
            "pts": 59,
            "pts_pct": 49,
            "err_pct": 16
          },
          {
            "label": "TR",
            "eff": 30,
            "tot": 103,
            "pts": 45,
            "pts_pct": 44,
            "err_pct": 14
          }
        ],
        "extra_pills": [
          {
            "label": "SO",
            "eff": 29
          },
          {
            "label": "REC #",
            "eff": 31
          },
          {
            "label": "REC +",
            "eff": 35
          },
          {
            "label": "REC !",
            "eff": 15
          },
          {
            "label": "REC -",
            "eff": 31
          },
          {
            "label": "TRANS",
            "eff": 30
          }
        ],
        "so_dist": [
          {
            "pos": "P4",
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P3",
            "tot": 39,
            "pts": 6,
            "pct": 33
          },
          {
            "pos": "P2",
            "tot": 17,
            "pts": 0,
            "pct": 400
          },
          {
            "pos": "P1",
            "tot": 1,
            "pts": 1,
            "pct": 300
          },
          {
            "pos": "P6",
            "tot": 16,
            "pts": 15,
            "pct": 7
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 2,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P3",
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P2",
            "tot": 25,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 3,
            "pts": 9,
            "pct": 28
          },
          {
            "pos": "P6",
            "tot": 0,
            "pts": 0,
            "pct": 0
          }
        ],
        "recepcion": [],
        "so": {},
        "tr": {}
      }
    },
    "objetivos": {},
    "equipo_obj": {}
  }
];

// Objetivos del equipo acumulado
const PARTIDOS_EQUIPO_OBJ = {};
const PARTIDOS_VIDEOS = [];
const PARTIDOS_FEEDBACK = [];
