// datos_partidos.js — 01/07/2026 10:00
const PARTIDOS_GENERADO = "01/07/2026 10:00";
const PARTIDOS_TOTAL = 7;
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
  },
  {
    "nombre": "LOMAS",
    "rival": "LOMAS",
    "fecha": "30/05/2026",
    "torneo": "División de Honor",
    "resultado": "V",
    "sets_casla": "3",
    "sets_rival": "2"
  }
];
const PARTIDOS_JUGADORES = [
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
            "pct": 30
          },
          {
            "z": 5,
            "pct": 30
          },
          {
            "z": 8,
            "pct": 15
          },
          {
            "z": 7,
            "pct": 15
          }
        ],
        "eff": 51,
        "tot": 33,
        "pts": 20,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 61
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
            "pct": 46
          },
          {
            "z": 6,
            "pct": 31
          },
          {
            "z": 8,
            "pct": 23
          }
        ],
        "eff": 53,
        "tot": 21,
        "pts": 13,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 62
      },
      {
        "cod": "X2",
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
        "eff": 75,
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
            "z": 6,
            "pct": 32
          },
          {
            "z": 5,
            "pct": 25
          },
          {
            "z": 7,
            "pct": 18
          },
          {
            "z": 8,
            "pct": 9
          },
          {
            "z": 1,
            "pct": 9
          },
          {
            "z": 9,
            "pct": 7
          }
        ],
        "eff": -10,
        "tot": 45,
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
    "objetivos": {
      "sq": -11,
      "rec": 20,
      "bqpos": 64,
      "bqpt": 34,
      "atqq": 55,
      "atqhb": null,
      "atqx": -100,
      "atqrp": 50,
      "atqri": 71,
      "atqrm": 67,
      "atqtr": 44
    }
  },
  {
    "num": 3,
    "nombre": "3 Romeo Winer A.",
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
    },
    "objetivos": {
      "sq": -17,
      "rec": 13,
      "bqpos": null,
      "bqpt": null,
      "atqq": null,
      "atqhb": null,
      "atqx": null,
      "atqrp": null,
      "atqri": null,
      "atqrm": null,
      "atqtr": null
    }
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
            "pct": 38
          },
          {
            "z": 1,
            "pct": 23
          },
          {
            "z": 9,
            "pct": 13
          },
          {
            "z": 8,
            "pct": 10
          },
          {
            "z": 5,
            "pct": 9
          },
          {
            "z": 7,
            "pct": 7
          }
        ],
        "eff": 7,
        "tot": 96,
        "pts": 6,
        "plus": 9,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 6
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
    "objetivos": {
      "sq": 7,
      "rec": -33,
      "bqpos": 50,
      "bqpt": 9,
      "atqq": null,
      "atqhb": 0,
      "atqx": null,
      "atqrp": 0,
      "atqri": 0,
      "atqrm": 0,
      "atqtr": 33
    }
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
            "pct": 19
          },
          {
            "z": 1,
            "pct": 14
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
        "eff": 29,
        "tot": 51,
        "pts": 21,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 41
      },
      {
        "cod": "V6",
        "orig": 2,
        "destinos": [
          {
            "z": 1,
            "pct": 35
          },
          {
            "z": 6,
            "pct": 24
          },
          {
            "z": 5,
            "pct": 12
          }
        ],
        "eff": null,
        "tot": 17,
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
            "pct": 53
          },
          {
            "z": 6,
            "pct": 18
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
        "eff": 20,
        "tot": 35,
        "pts": 17,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 49
      },
      {
        "cod": "V8",
        "orig": 9,
        "destinos": [
          {
            "z": 1,
            "pct": 27
          },
          {
            "z": 6,
            "pct": 18
          },
          {
            "z": 9,
            "pct": 9
          },
          {
            "z": 5,
            "pct": 9
          }
        ],
        "eff": 48,
        "tot": 19,
        "pts": 11,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 59
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
            "pct": 44
          },
          {
            "z": 6,
            "pct": 35
          },
          {
            "z": 1,
            "pct": 15
          },
          {
            "z": 9,
            "pct": 4
          },
          {
            "z": 7,
            "pct": 2
          }
        ],
        "eff": -29,
        "tot": 55,
        "pts": 4,
        "plus": 7,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 7
      }
    ],
    "video": 0,
    "recepcion": {},
    "objetivos": {
      "sq": -30,
      "rec": 25,
      "bqpos": 37,
      "bqpt": 17,
      "atqq": null,
      "atqhb": 28,
      "atqx": 26,
      "atqrp": 32,
      "atqri": 15,
      "atqrm": 21,
      "atqtr": 32
    }
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
            "pct": 80
          },
          {
            "z": 5,
            "pct": 20
          }
        ],
        "eff": -25,
        "tot": 7,
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
    },
    "objetivos": {
      "sq": -25,
      "rec": 60,
      "bqpos": 100,
      "bqpt": 0,
      "atqq": null,
      "atqhb": null,
      "atqx": -29,
      "atqrp": 0,
      "atqri": 0,
      "atqrm": null,
      "atqtr": -50
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
            "pct": 30
          },
          {
            "z": 7,
            "pct": 22
          },
          {
            "z": 1,
            "pct": 17
          },
          {
            "z": 8,
            "pct": 15
          },
          {
            "z": 9,
            "pct": 13
          },
          {
            "z": 5,
            "pct": 2
          }
        ],
        "eff": 2,
        "tot": 51,
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
    "objetivos": {
      "sq": 2,
      "rec": 0,
      "bqpos": 42,
      "bqpt": 8,
      "atqq": null,
      "atqhb": null,
      "atqx": null,
      "atqrp": 100,
      "atqri": -100,
      "atqrm": null,
      "atqtr": 0
    }
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
    "objetivos": {
      "sq": null,
      "rec": null,
      "bqpos": null,
      "bqpt": null,
      "atqq": null,
      "atqhb": null,
      "atqx": null,
      "atqrp": null,
      "atqri": null,
      "atqrm": null,
      "atqtr": null
    }
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
            "pct": 23
          },
          {
            "z": 8,
            "pct": 17
          },
          {
            "z": 1,
            "pct": 15
          },
          {
            "z": 2,
            "pct": 8
          }
        ],
        "eff": 32,
        "tot": 114,
        "pts": 53,
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
            "z": 1,
            "pct": 19
          },
          {
            "z": 2,
            "pct": 10
          },
          {
            "z": 6,
            "pct": 10
          },
          {
            "z": 8,
            "pct": 10
          }
        ],
        "eff": null,
        "tot": 21,
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
            "z": 5,
            "pct": 22
          },
          {
            "z": 8,
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
            "pct": 22
          },
          {
            "z": 7,
            "pct": 20
          },
          {
            "z": 6,
            "pct": 18
          },
          {
            "z": 9,
            "pct": 16
          },
          {
            "z": 1,
            "pct": 16
          },
          {
            "z": 8,
            "pct": 8
          }
        ],
        "eff": -9,
        "tot": 51,
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
            "pct": 41
          },
          {
            "z": 6,
            "pct": 34
          },
          {
            "z": 1,
            "pct": 19
          },
          {
            "z": 8,
            "pct": 6
          }
        ],
        "eff": -26,
        "tot": 40,
        "pts": 4,
        "plus": 6,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 10
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
    },
    "objetivos": {
      "sq": -16,
      "rec": 37,
      "bqpos": 37,
      "bqpt": 13,
      "atqq": null,
      "atqhb": 10,
      "atqx": 34,
      "atqrp": 36,
      "atqri": 71,
      "atqrm": 5,
      "atqtr": 14
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
    },
    "objetivos": {
      "sq": null,
      "rec": 34,
      "bqpos": null,
      "bqpt": null,
      "atqq": null,
      "atqhb": null,
      "atqx": null,
      "atqrp": null,
      "atqri": null,
      "atqrm": null,
      "atqtr": null
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
    },
    "objetivos": {
      "sq": -25,
      "rec": 38,
      "bqpos": null,
      "bqpt": null,
      "atqq": null,
      "atqhb": null,
      "atqx": null,
      "atqrp": null,
      "atqri": null,
      "atqrm": null,
      "atqtr": null
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
            "pct": 22
          },
          {
            "z": 2,
            "pct": 16
          },
          {
            "z": 7,
            "pct": 16
          },
          {
            "z": 9,
            "pct": 8
          }
        ],
        "eff": 30,
        "tot": 120,
        "pts": 51,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 43
      },
      {
        "cod": "V5",
        "orig": 4,
        "destinos": [
          {
            "z": 4,
            "pct": 21
          },
          {
            "z": 1,
            "pct": 17
          },
          {
            "z": 2,
            "pct": 8
          },
          {
            "z": 6,
            "pct": 8
          }
        ],
        "eff": 18,
        "tot": 77,
        "pts": 24,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 31
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
            "pct": 37
          },
          {
            "z": 7,
            "pct": 20
          },
          {
            "z": 5,
            "pct": 20
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
        "tot": 30,
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
            "pct": 56
          },
          {
            "z": 1,
            "pct": 32
          },
          {
            "z": 5,
            "pct": 11
          },
          {
            "z": 7,
            "pct": 2
          }
        ],
        "eff": 3,
        "tot": 100,
        "pts": 4,
        "plus": 12,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 4
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
    },
    "objetivos": {
      "sq": 2,
      "rec": 40,
      "bqpos": 42,
      "bqpt": 15,
      "atqq": null,
      "atqhb": 16,
      "atqx": 31,
      "atqrp": 25,
      "atqri": 48,
      "atqrm": 13,
      "atqtr": 23
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
    "recepcion": {},
    "objetivos": {
      "sq": 1,
      "rec": 8,
      "bqpos": 50,
      "bqpt": 10,
      "atqq": 50,
      "atqhb": null,
      "atqx": null,
      "atqrp": 50,
      "atqri": 100,
      "atqrm": null,
      "atqtr": 43
    }
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
            "z": 7,
            "pct": 28
          },
          {
            "z": 9,
            "pct": 22
          },
          {
            "z": 1,
            "pct": 17
          },
          {
            "z": 6,
            "pct": 17
          }
        ],
        "eff": 20,
        "tot": 40,
        "pts": 18,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 45
      },
      {
        "cod": "X1",
        "orig": 3,
        "destinos": [
          {
            "z": 5,
            "pct": 38
          },
          {
            "z": 9,
            "pct": 25
          },
          {
            "z": 8,
            "pct": 25
          },
          {
            "z": 7,
            "pct": 12
          }
        ],
        "eff": 53,
        "tot": 15,
        "pts": 8,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 53
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
        "eff": 33,
        "tot": 12,
        "pts": 4,
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
            "pct": 34
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
            "pct": 12
          },
          {
            "z": 1,
            "pct": 6
          },
          {
            "z": 9,
            "pct": 3
          }
        ],
        "eff": 0,
        "tot": 70,
        "pts": 0,
        "plus": 7,
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
    "objetivos": {
      "sq": 0,
      "rec": null,
      "bqpos": 44,
      "bqpt": 26,
      "atqq": 29,
      "atqhb": null,
      "atqx": null,
      "atqrp": 22,
      "atqri": 47,
      "atqrm": null,
      "atqtr": 23
    }
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
        "eff": 28,
        "tot": 29,
        "pts": 13,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 45
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
            "z": 7,
            "pct": 20
          }
        ],
        "eff": null,
        "tot": 5,
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
        "eff": 28,
        "tot": 25,
        "pts": 13,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 52
      },
      {
        "cod": "V8",
        "orig": 9,
        "destinos": [
          {
            "z": 1,
            "pct": 67
          }
        ],
        "eff": 33,
        "tot": 6,
        "pts": 3,
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
            "pct": 57
          },
          {
            "z": 5,
            "pct": 39
          },
          {
            "z": 1,
            "pct": 4
          }
        ],
        "eff": -12,
        "tot": 38,
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
    "objetivos": {
      "sq": -12,
      "rec": null,
      "bqpos": 43,
      "bqpt": 7,
      "atqq": null,
      "atqhb": 3,
      "atqx": 29,
      "atqrp": 23,
      "atqri": 58,
      "atqrm": 50,
      "atqtr": 8
    }
  },
  {
    "num": 19,
    "nombre": "19 Diaz Bolli S.",
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
        "tot": 12,
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
    "recepcion": {},
    "objetivos": {
      "sq": 4,
      "rec": null,
      "bqpos": null,
      "bqpt": null,
      "atqq": null,
      "atqhb": null,
      "atqx": null,
      "atqrp": null,
      "atqri": null,
      "atqrm": null,
      "atqtr": null
    }
  }
];

const PARTIDOS_ARMADOR = {
  "titular": {
    "nombre": "Vazquez E.",
    "rotaciones": [
      {
        "pos": "P1",
        "total": 43,
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
        "total": 34,
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
        "total": 29,
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
        "total": 29,
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
        "pos": "P2",
        "total": 22,
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
        "total": 28,
        "dist": [
          {
            "zona": 4,
            "tot": 4,
            "pts": 2,
            "pct": 50,
            "pct_p": 50
          },
          {
            "zona": 3,
            "tot": 3,
            "pts": 2,
            "pct": 38,
            "pct_p": 67
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
            "pts": 1,
            "pct": 38,
            "pct_p": 33
          },
          {
            "zona": 3,
            "tot": 2,
            "pts": 1,
            "pct": 25,
            "pct_p": 50
          },
          {
            "zona": 2,
            "tot": 3,
            "pts": 3,
            "pct": 38,
            "pct_p": 100
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
            "pts": 2,
            "pct": 43,
            "pct_p": 67
          },
          {
            "zona": 3,
            "tot": 3,
            "pts": 3,
            "pct": 43,
            "pct_p": 100
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
            "pts": 2,
            "pct": 60,
            "pct_p": 67
          },
          {
            "zona": 3,
            "tot": 2,
            "pts": 2,
            "pct": 40,
            "pct_p": 100
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
            "pts": 1,
            "pct": 50,
            "pct_p": 50
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
            "pts": 2,
            "pct": 40,
            "pct_p": 100
          },
          {
            "zona": 3,
            "tot": 1,
            "pts": 1,
            "pct": 20,
            "pct_p": 100
          },
          {
            "zona": 2,
            "tot": 1,
            "pts": 1,
            "pct": 20,
            "pct_p": 100
          },
          {
            "zona": 6,
            "tot": 1,
            "pts": 1,
            "pct": 20,
            "pct_p": 100
          }
        ]
      }
    ],
    "pills": [
      {
        "label": "P1",
        "eff": 12,
        "tot": 8,
        "pts": 4,
        "pts_pct": 50,
        "err_pct": 38
      },
      {
        "label": "P6",
        "eff": 62,
        "tot": 8,
        "pts": 5,
        "pts_pct": 62,
        "err_pct": 0
      },
      {
        "label": "P5",
        "eff": 57,
        "tot": 7,
        "pts": 5,
        "pts_pct": 71,
        "err_pct": 14
      },
      {
        "label": "P4",
        "eff": 80,
        "tot": 5,
        "pts": 4,
        "pts_pct": 80,
        "err_pct": 0
      },
      {
        "label": "P3",
        "eff": 50,
        "tot": 4,
        "pts": 2,
        "pts_pct": 50,
        "err_pct": 0
      },
      {
        "label": "P2",
        "eff": 100,
        "tot": 5,
        "pts": 5,
        "pts_pct": 100,
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
        "recepcion": {},
        "objetivos": {
          "sq": -7,
          "rec": null,
          "bqpos": 50,
          "bqpt": 25,
          "atqq": 62,
          "atqhb": null,
          "atqx": -100,
          "atqrp": 40,
          "atqri": 0,
          "atqrm": null,
          "atqtr": 75
        }
      },
      {
        "num": 3,
        "nombre": "3 Romeo Winer A.",
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
        },
        "objetivos": {
          "sq": null,
          "rec": 18,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": -17,
          "rec": 0,
          "bqpos": 18,
          "bqpt": 6,
          "atqq": null,
          "atqhb": 20,
          "atqx": 43,
          "atqrp": 100,
          "atqri": 25,
          "atqrm": -50,
          "atqtr": 35
        }
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
        },
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
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
        "recepcion": {},
        "objetivos": {
          "sq": -8,
          "rec": 0,
          "bqpos": 58,
          "bqpt": 8,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": 100,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        },
        "objetivos": {
          "sq": -25,
          "rec": 69,
          "bqpos": 56,
          "bqpt": 11,
          "atqq": null,
          "atqhb": 18,
          "atqx": 60,
          "atqrp": 45,
          "atqri": 50,
          "atqrm": 33,
          "atqtr": 29
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
        },
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
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
        },
        "objetivos": {
          "sq": 0,
          "rec": 50,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
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
        },
        "objetivos": {
          "sq": -7,
          "rec": 53,
          "bqpos": 33,
          "bqpt": 33,
          "atqq": null,
          "atqhb": 11,
          "atqx": 41,
          "atqrp": 43,
          "atqri": 50,
          "atqrm": 50,
          "atqtr": 25
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
        "recepcion": {},
        "objetivos": {
          "sq": 10,
          "rec": null,
          "bqpos": 60,
          "bqpt": 20,
          "atqq": 56,
          "atqhb": null,
          "atqx": null,
          "atqrp": 50,
          "atqri": null,
          "atqrm": null,
          "atqtr": 67
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
      },
      {
        "num": 19,
        "nombre": "19 Diaz Bolli S.",
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
        "recepcion": {},
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "extra_pills": [
          {
            "label": "SO",
            "eff": 0
          },
          {
            "label": "REC #",
            "eff": 0
          },
          {
            "label": "REC +",
            "eff": 0
          },
          {
            "label": "REC !",
            "eff": 0
          },
          {
            "label": "REC -",
            "eff": 0
          },
          {
            "label": "TRANS",
            "eff": 0
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
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P2",
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P6",
            "tot": 0,
            "pts": 0,
            "pct": 0
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 0,
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
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 0,
            "pts": 0,
            "pct": 0
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
                "pts": 2,
                "pct": 50,
                "pct_p": 50
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 2,
                "pct": 38,
                "pct_p": 67
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
                "pts": 1,
                "pct": 38,
                "pct_p": 33
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 1,
                "pct": 25,
                "pct_p": 50
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 3,
                "pct": 38,
                "pct_p": 100
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
                "pts": 2,
                "pct": 43,
                "pct_p": 67
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 3,
                "pct": 43,
                "pct_p": 100
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
                "pts": 2,
                "pct": 60,
                "pct_p": 67
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 2,
                "pct": 40,
                "pct_p": 100
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
                "pts": 1,
                "pct": 50,
                "pct_p": 50
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
                "pts": 2,
                "pct": 40,
                "pct_p": 100
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 1,
                "pct": 20,
                "pct_p": 100
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 1,
                "pct": 20,
                "pct_p": 100
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 1,
                "pct": 20,
                "pct_p": 100
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 12,
            "tot": 8,
            "pts": 4,
            "pts_pct": 50,
            "err_pct": 38
          },
          {
            "label": "P6",
            "eff": 62,
            "tot": 8,
            "pts": 5,
            "pts_pct": 62,
            "err_pct": 0
          },
          {
            "label": "P5",
            "eff": 57,
            "tot": 7,
            "pts": 5,
            "pts_pct": 71,
            "err_pct": 14
          },
          {
            "label": "P4",
            "eff": 80,
            "tot": 5,
            "pts": 4,
            "pts_pct": 80,
            "err_pct": 0
          },
          {
            "label": "P3",
            "eff": 50,
            "tot": 4,
            "pts": 2,
            "pts_pct": 50,
            "err_pct": 0
          },
          {
            "label": "P2",
            "eff": 100,
            "tot": 5,
            "pts": 5,
            "pts_pct": 100,
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
        "extra_pills": [
          {
            "label": "SO",
            "eff": 46
          },
          {
            "label": "REC #",
            "eff": 56
          },
          {
            "label": "REC +",
            "eff": 58
          },
          {
            "label": "REC !",
            "eff": 29
          },
          {
            "label": "REC -",
            "eff": 17
          },
          {
            "label": "TRANS",
            "eff": 32
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
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P2",
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P6",
            "tot": 0,
            "pts": 0,
            "pct": 0
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 0,
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
            "tot": 8,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 1,
            "pts": 6,
            "pct": 33
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
    "objetivos": {
      "Ojuez A.": {
        "sq": -7,
        "rec": null,
        "bqpos": 50,
        "bqpt": 25,
        "atqq": 62,
        "atqhb": null,
        "atqx": -100,
        "atqrp": 40,
        "atqri": 0,
        "atqrm": null,
        "atqtr": 75
      },
      "Romeo Winer A.": {
        "sq": null,
        "rec": 18,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Vazquez E.": {
        "sq": 0,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Ramos I.": {
        "sq": -17,
        "rec": 0,
        "bqpos": 18,
        "bqpt": 6,
        "atqq": null,
        "atqhb": 20,
        "atqx": 43,
        "atqrp": 100,
        "atqri": 25,
        "atqrm": -50,
        "atqtr": 35
      },
      "Villarruel J.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Godoy M.": {
        "sq": -8,
        "rec": 0,
        "bqpos": 58,
        "bqpt": 8,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": 100,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Viera M.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Durdos V.": {
        "sq": -25,
        "rec": 69,
        "bqpos": 56,
        "bqpt": 11,
        "atqq": null,
        "atqhb": 18,
        "atqx": 60,
        "atqrp": 45,
        "atqri": 50,
        "atqrm": 33,
        "atqtr": 29
      },
      "Zanotti J.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Rojas Caruso M.": {
        "sq": 0,
        "rec": 50,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Nielson R.": {
        "sq": -7,
        "rec": 53,
        "bqpos": 33,
        "bqpt": 33,
        "atqq": null,
        "atqhb": 11,
        "atqx": 41,
        "atqrp": 43,
        "atqri": 50,
        "atqrm": 50,
        "atqtr": 25
      },
      "Rotezzi R.": {
        "sq": 10,
        "rec": null,
        "bqpos": 60,
        "bqpt": 20,
        "atqq": 56,
        "atqhb": null,
        "atqx": null,
        "atqrp": 50,
        "atqri": null,
        "atqrm": null,
        "atqtr": 67
      },
      "Herbsommer L.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Acosta W.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Diaz Bolli S.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      }
    },
    "equipo_obj": {
      "sq": -11,
      "rec": 37,
      "bqpos": 42,
      "bqpt": 14,
      "atqq": 65,
      "atqhb": 17,
      "atqx": 44,
      "atqrp": 57,
      "atqri": 29,
      "atqrm": 14,
      "atqtr": 38
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
        "recepcion": {},
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": 20,
          "bqpt": 0,
          "atqq": 67,
          "atqhb": null,
          "atqx": null,
          "atqrp": 67,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
      },
      {
        "num": 3,
        "nombre": "3 Romeo Winer A.",
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
        },
        "objetivos": {
          "sq": null,
          "rec": 10,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": -20,
          "rec": null,
          "bqpos": 30,
          "bqpt": 20,
          "atqq": null,
          "atqhb": 36,
          "atqx": 22,
          "atqrp": 29,
          "atqri": 17,
          "atqrm": 33,
          "atqtr": 30
        }
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
        },
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
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
        "recepcion": {},
        "objetivos": {
          "sq": 10,
          "rec": 0,
          "bqpos": 67,
          "bqpt": 0,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        },
        "objetivos": {
          "sq": -50,
          "rec": 27,
          "bqpos": 0,
          "bqpt": 0,
          "atqq": null,
          "atqhb": 100,
          "atqx": 38,
          "atqrp": 33,
          "atqri": 50,
          "atqrm": null,
          "atqtr": 100
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
        },
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
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
        },
        "objetivos": {
          "sq": 0,
          "rec": 25,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
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
        },
        "objetivos": {
          "sq": -40,
          "rec": 45,
          "bqpos": 33,
          "bqpt": 0,
          "atqq": null,
          "atqhb": 31,
          "atqx": 0,
          "atqrp": -33,
          "atqri": -20,
          "atqrm": 40,
          "atqtr": 31
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
        "recepcion": {},
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": -11,
          "rec": null,
          "bqpos": 0,
          "bqpt": 0,
          "atqq": 50,
          "atqhb": null,
          "atqx": null,
          "atqrp": 50,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
      },
      {
        "num": 19,
        "nombre": "19 Diaz Bolli S.",
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
        "recepcion": {},
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "extra_pills": [
          {
            "label": "SO",
            "eff": 0
          },
          {
            "label": "REC #",
            "eff": 0
          },
          {
            "label": "REC +",
            "eff": 0
          },
          {
            "label": "REC !",
            "eff": 0
          },
          {
            "label": "REC -",
            "eff": 0
          },
          {
            "label": "TRANS",
            "eff": 0
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
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P2",
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P6",
            "tot": 0,
            "pts": 0,
            "pct": 0
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 0,
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
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 0,
            "pts": 0,
            "pct": 0
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
                "pts": 2,
                "pct": 29,
                "pct_p": 100
              },
              {
                "zona": 3,
                "tot": 4,
                "pts": 3,
                "pct": 57,
                "pct_p": 75
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 1,
                "pct": 14,
                "pct_p": 100
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
                "pts": 1,
                "pct": 40,
                "pct_p": 50
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 1,
                "pct": 40,
                "pct_p": 50
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 1,
                "pct": 20,
                "pct_p": 100
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
                "pts": 1,
                "pct": 38,
                "pct_p": 33
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 2,
                "pct": 38,
                "pct_p": 67
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 1,
                "pct": 25,
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
                "pts": 1,
                "pct": 100,
                "pct_p": 100
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
                "pts": 1,
                "pct": 100,
                "pct_p": 100
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
            "eff": -25,
            "tot": 8,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 25
          },
          {
            "label": "P6",
            "eff": 86,
            "tot": 7,
            "pts": 6,
            "pts_pct": 86,
            "err_pct": 0
          },
          {
            "label": "P5",
            "eff": 60,
            "tot": 5,
            "pts": 3,
            "pts_pct": 60,
            "err_pct": 0
          },
          {
            "label": "P4",
            "eff": 12,
            "tot": 8,
            "pts": 4,
            "pts_pct": 50,
            "err_pct": 38
          },
          {
            "label": "P3",
            "eff": 100,
            "tot": 1,
            "pts": 1,
            "pts_pct": 100,
            "err_pct": 0
          },
          {
            "label": "P2",
            "eff": 100,
            "tot": 1,
            "pts": 1,
            "pts_pct": 100,
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
        "extra_pills": [
          {
            "label": "SO",
            "eff": 26
          },
          {
            "label": "REC #",
            "eff": 14
          },
          {
            "label": "REC +",
            "eff": 39
          },
          {
            "label": "REC !",
            "eff": 7
          },
          {
            "label": "REC -",
            "eff": 33
          },
          {
            "label": "TRANS",
            "eff": 35
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
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P2",
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P6",
            "tot": 0,
            "pts": 0,
            "pct": 0
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 0,
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
            "tot": 17,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 2,
            "pts": 3,
            "pct": 17
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
    "objetivos": {
      "Ojuez A.": {
        "sq": 0,
        "rec": null,
        "bqpos": 20,
        "bqpt": 0,
        "atqq": 67,
        "atqhb": null,
        "atqx": null,
        "atqrp": 67,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Romeo Winer A.": {
        "sq": null,
        "rec": 10,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Vazquez E.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Ramos I.": {
        "sq": -20,
        "rec": null,
        "bqpos": 30,
        "bqpt": 20,
        "atqq": null,
        "atqhb": 36,
        "atqx": 22,
        "atqrp": 29,
        "atqri": 17,
        "atqrm": 33,
        "atqtr": 30
      },
      "Villarruel J.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Godoy M.": {
        "sq": 10,
        "rec": 0,
        "bqpos": 67,
        "bqpt": 0,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Viera M.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Durdos V.": {
        "sq": -50,
        "rec": 27,
        "bqpos": 0,
        "bqpt": 0,
        "atqq": null,
        "atqhb": 100,
        "atqx": 38,
        "atqrp": 33,
        "atqri": 50,
        "atqrm": null,
        "atqtr": 100
      },
      "Zanotti J.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Rojas Caruso M.": {
        "sq": 0,
        "rec": 25,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Nielson R.": {
        "sq": -40,
        "rec": 45,
        "bqpos": 33,
        "bqpt": 0,
        "atqq": null,
        "atqhb": 31,
        "atqx": 0,
        "atqrp": -33,
        "atqri": -20,
        "atqrm": 40,
        "atqtr": 31
      },
      "Rotezzi R.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Herbsommer L.": {
        "sq": -11,
        "rec": null,
        "bqpos": 0,
        "bqpt": 0,
        "atqq": 50,
        "atqhb": null,
        "atqx": null,
        "atqrp": 50,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Acosta W.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Diaz Bolli S.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      }
    },
    "equipo_obj": {
      "sq": -18,
      "rec": 20,
      "bqpos": 36,
      "bqpt": 10,
      "atqq": 36,
      "atqhb": 36,
      "atqx": 18,
      "atqrp": 33,
      "atqri": 7,
      "atqrm": 36,
      "atqtr": 32
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
        "recepcion": {},
        "objetivos": {
          "sq": -33,
          "rec": 100,
          "bqpos": 100,
          "bqpt": 100,
          "atqq": 80,
          "atqhb": null,
          "atqx": null,
          "atqrp": 80,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
      },
      {
        "num": 3,
        "nombre": "3 Romeo Winer A.",
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
        },
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": 50,
          "bqpt": 0,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": 100
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": -38,
          "rec": null,
          "bqpos": 12,
          "bqpt": 0,
          "atqq": null,
          "atqhb": -30,
          "atqx": 6,
          "atqrp": 0,
          "atqri": -50,
          "atqrm": -50,
          "atqtr": 8
        }
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
        },
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
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
        "recepcion": {},
        "objetivos": {
          "sq": 13,
          "rec": 0,
          "bqpos": 17,
          "bqpt": 17,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": -100,
          "atqrm": null,
          "atqtr": -100
        }
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
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        },
        "objetivos": {
          "sq": -32,
          "rec": 52,
          "bqpos": 43,
          "bqpt": 43,
          "atqq": null,
          "atqhb": 22,
          "atqx": 21,
          "atqrp": 20,
          "atqri": 100,
          "atqrm": 0,
          "atqtr": 16
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
        },
        "objetivos": {
          "sq": null,
          "rec": 36,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
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
        },
        "objetivos": {
          "sq": -50,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
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
        },
        "objetivos": {
          "sq": 12,
          "rec": 42,
          "bqpos": 33,
          "bqpt": 17,
          "atqq": null,
          "atqhb": 11,
          "atqx": 15,
          "atqrp": 11,
          "atqri": 50,
          "atqrm": -67,
          "atqtr": 38
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
        "recepcion": {},
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": 25,
          "bqpt": 25,
          "atqq": 10,
          "atqhb": null,
          "atqx": null,
          "atqrp": 10,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": 0,
          "atqrp": 0,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
      },
      {
        "num": 19,
        "nombre": "19 Diaz Bolli S.",
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
        "recepcion": {},
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
                "pts": 1,
                "pct": 20,
                "pct_p": 100
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
                "pts": 1,
                "pct": 20,
                "pct_p": 100
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
                "pts": 1,
                "pct": 50,
                "pct_p": 100
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 1,
                "pct": 50,
                "pct_p": 100
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
                "pts": 1,
                "pct": 67,
                "pct_p": 50
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
                "pts": 1,
                "pct": 67,
                "pct_p": 50
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 1,
                "pct": 33,
                "pct_p": 100
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
                "pts": 2,
                "pct": 60,
                "pct_p": 67
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
            "eff": 40,
            "tot": 5,
            "pts": 2,
            "pts_pct": 40,
            "err_pct": 0
          },
          {
            "label": "P6",
            "eff": 100,
            "tot": 2,
            "pts": 2,
            "pts_pct": 100,
            "err_pct": 0
          },
          {
            "label": "P5",
            "eff": 0,
            "tot": 3,
            "pts": 1,
            "pts_pct": 33,
            "err_pct": 33
          },
          {
            "label": "P4",
            "eff": -33,
            "tot": 3,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 33
          },
          {
            "label": "P3",
            "eff": 33,
            "tot": 3,
            "pts": 2,
            "pts_pct": 67,
            "err_pct": 33
          },
          {
            "label": "P2",
            "eff": 40,
            "tot": 5,
            "pts": 2,
            "pts_pct": 40,
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
        "extra_pills": [
          {
            "label": "SO",
            "eff": 26
          },
          {
            "label": "REC #",
            "eff": 27
          },
          {
            "label": "REC +",
            "eff": 30
          },
          {
            "label": "REC !",
            "eff": 0
          },
          {
            "label": "REC -",
            "eff": -100
          },
          {
            "label": "TRANS",
            "eff": 33
          }
        ],
        "so_dist": [
          {
            "pos": "P4",
            "tot": 9,
            "pts": 2,
            "pct": 22
          },
          {
            "pos": "P3",
            "tot": 7,
            "pts": 5,
            "pct": 71
          },
          {
            "pos": "P2",
            "tot": 2,
            "pts": 1,
            "pct": 50
          },
          {
            "pos": "P1",
            "tot": 2,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P6",
            "tot": 1,
            "pts": 1,
            "pct": 100
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 3,
            "pts": 2,
            "pct": 67
          },
          {
            "pos": "P3",
            "tot": 3,
            "pts": 1,
            "pct": 33
          },
          {
            "pos": "P2",
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 0,
            "pts": 0,
            "pct": 0
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
                "pts": 1,
                "pct": 43,
                "pct_p": 33
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 1,
                "pct": 14,
                "pct_p": 100
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
                "pts": 2,
                "pct": 80,
                "pct_p": 50
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
                "pts": 2,
                "pct": 78,
                "pct_p": 29
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
                "pts": 1,
                "pct": 67,
                "pct_p": 50
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
                "pts": 1,
                "pct": 33,
                "pct_p": 50
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 1,
                "pct": 33,
                "pct_p": 50
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
                "pts": 2,
                "pct": 50,
                "pct_p": 67
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 2,
                "pct": 33,
                "pct_p": 100
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
            "pts": 2,
            "pts_pct": 29,
            "err_pct": 29
          },
          {
            "label": "P6",
            "eff": 20,
            "tot": 5,
            "pts": 2,
            "pts_pct": 40,
            "err_pct": 20
          },
          {
            "label": "P5",
            "eff": 0,
            "tot": 9,
            "pts": 2,
            "pts_pct": 22,
            "err_pct": 22
          },
          {
            "label": "P4",
            "eff": 0,
            "tot": 3,
            "pts": 1,
            "pts_pct": 33,
            "err_pct": 33
          },
          {
            "label": "P3",
            "eff": 17,
            "tot": 6,
            "pts": 2,
            "pts_pct": 33,
            "err_pct": 17
          },
          {
            "label": "P2",
            "eff": 67,
            "tot": 6,
            "pts": 4,
            "pts_pct": 67,
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
        "extra_pills": [
          {
            "label": "SO",
            "eff": 13
          },
          {
            "label": "REC #",
            "eff": 28
          },
          {
            "label": "REC +",
            "eff": 6
          },
          {
            "label": "REC !",
            "eff": 0
          },
          {
            "label": "REC -",
            "eff": 0
          },
          {
            "label": "TRANS",
            "eff": 25
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
            "tot": 13,
            "pts": 4,
            "pct": 25
          },
          {
            "pos": "P2",
            "tot": 6,
            "pts": 0,
            "pct": 200
          },
          {
            "pos": "P1",
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P6",
            "tot": 2,
            "pts": 2,
            "pct": -50
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
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 0,
            "pts": 0,
            "pct": 0
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
    "objetivos": {
      "Ojuez A.": {
        "sq": -33,
        "rec": 100,
        "bqpos": 100,
        "bqpt": 100,
        "atqq": 80,
        "atqhb": null,
        "atqx": null,
        "atqrp": 80,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Romeo Winer A.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Vazquez E.": {
        "sq": 0,
        "rec": null,
        "bqpos": 50,
        "bqpt": 0,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": 100
      },
      "Ramos I.": {
        "sq": -38,
        "rec": null,
        "bqpos": 12,
        "bqpt": 0,
        "atqq": null,
        "atqhb": -30,
        "atqx": 6,
        "atqrp": 0,
        "atqri": -50,
        "atqrm": -50,
        "atqtr": 8
      },
      "Villarruel J.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Godoy M.": {
        "sq": 13,
        "rec": 0,
        "bqpos": 17,
        "bqpt": 17,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": -100,
        "atqrm": null,
        "atqtr": -100
      },
      "Viera M.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Durdos V.": {
        "sq": -32,
        "rec": 52,
        "bqpos": 43,
        "bqpt": 43,
        "atqq": null,
        "atqhb": 22,
        "atqx": 21,
        "atqrp": 20,
        "atqri": 100,
        "atqrm": 0,
        "atqtr": 16
      },
      "Zanotti J.": {
        "sq": null,
        "rec": 36,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Rojas Caruso M.": {
        "sq": -50,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Nielson R.": {
        "sq": 12,
        "rec": 42,
        "bqpos": 33,
        "bqpt": 17,
        "atqq": null,
        "atqhb": 11,
        "atqx": 15,
        "atqrp": 11,
        "atqri": 50,
        "atqrm": -67,
        "atqtr": 38
      },
      "Rotezzi R.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Herbsommer L.": {
        "sq": 0,
        "rec": null,
        "bqpos": 25,
        "bqpt": 25,
        "atqq": 10,
        "atqhb": null,
        "atqx": null,
        "atqrp": 10,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Acosta W.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": 0,
        "atqrp": 0,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Diaz Bolli S.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      }
    },
    "equipo_obj": {
      "sq": -5,
      "rec": 43,
      "bqpos": 38,
      "bqpt": 30,
      "atqq": 36,
      "atqhb": 0,
      "atqx": 15,
      "atqrp": 21,
      "atqri": 0,
      "atqrm": -50,
      "atqtr": 20
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
        "recepcion": {},
        "objetivos": {
          "sq": -10,
          "rec": -25,
          "bqpos": 62,
          "bqpt": 23,
          "atqq": 37,
          "atqhb": null,
          "atqx": null,
          "atqrp": 39,
          "atqri": 0,
          "atqrm": null,
          "atqtr": 100
        }
      },
      {
        "num": 3,
        "nombre": "3 Romeo Winer A.",
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
        },
        "objetivos": {
          "sq": -17,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": -8,
          "rec": 0,
          "bqpos": 50,
          "bqpt": 6,
          "atqq": null,
          "atqhb": 0,
          "atqx": null,
          "atqrp": null,
          "atqri": 0,
          "atqrm": null,
          "atqtr": 0
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": -80,
          "rec": 50,
          "bqpos": 71,
          "bqpt": 29,
          "atqq": null,
          "atqhb": 20,
          "atqx": 46,
          "atqrp": 60,
          "atqri": 0,
          "atqrm": 0,
          "atqtr": 25
        }
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
        },
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
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
        "recepcion": {},
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        },
        "objetivos": {
          "sq": -6,
          "rec": 41,
          "bqpos": 0,
          "bqpt": 0,
          "atqq": null,
          "atqhb": 11,
          "atqx": 24,
          "atqrp": 50,
          "atqri": 100,
          "atqrm": 0,
          "atqtr": 9
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
        },
        "objetivos": {
          "sq": null,
          "rec": 35,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
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
        },
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
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
        },
        "objetivos": {
          "sq": 17,
          "rec": 59,
          "bqpos": 47,
          "bqpt": 13,
          "atqq": null,
          "atqhb": 18,
          "atqx": 45,
          "atqrp": 44,
          "atqri": 75,
          "atqrm": 50,
          "atqtr": 16
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
        "recepcion": {},
        "objetivos": {
          "sq": -8,
          "rec": 8,
          "bqpos": 40,
          "bqpt": 0,
          "atqq": 44,
          "atqhb": null,
          "atqx": null,
          "atqrp": 50,
          "atqri": 100,
          "atqrm": null,
          "atqtr": 25
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": 11,
          "rec": null,
          "bqpos": 0,
          "bqpt": 0,
          "atqq": null,
          "atqhb": 50,
          "atqx": 17,
          "atqrp": 0,
          "atqri": 50,
          "atqrm": null,
          "atqtr": 20
        }
      },
      {
        "num": 19,
        "nombre": "19 Diaz Bolli S.",
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
        "recepcion": {},
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
                "pts": 2,
                "pct": 22,
                "pct_p": 100
              },
              {
                "zona": 3,
                "tot": 4,
                "pts": 2,
                "pct": 44,
                "pct_p": 50
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 1,
                "pct": 33,
                "pct_p": 33
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
                "pts": 1,
                "pct": 100,
                "pct_p": 100
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
                "pts": 2,
                "pct": 18,
                "pct_p": 100
              },
              {
                "zona": 3,
                "tot": 7,
                "pts": 5,
                "pct": 64,
                "pct_p": 71
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 1,
                "pct": 18,
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
            "pos": "P4",
            "total": 10,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 2,
                "pct": 30,
                "pct_p": 67
              },
              {
                "zona": 3,
                "tot": 5,
                "pts": 1,
                "pct": 50,
                "pct_p": 20
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 1,
                "pct": 20,
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
            "total": 10,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 2,
                "pct": 30,
                "pct_p": 67
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 2,
                "pct": 30,
                "pct_p": 67
              },
              {
                "zona": 2,
                "tot": 4,
                "pts": 2,
                "pct": 40,
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
                "pts": 1,
                "pct": 25,
                "pct_p": 100
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 1,
                "pct": 25,
                "pct_p": 100
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
            "eff": 56,
            "tot": 9,
            "pts": 5,
            "pts_pct": 56,
            "err_pct": 0
          },
          {
            "label": "P6",
            "eff": 100,
            "tot": 1,
            "pts": 1,
            "pts_pct": 100,
            "err_pct": 0
          },
          {
            "label": "P5",
            "eff": 64,
            "tot": 11,
            "pts": 8,
            "pts_pct": 73,
            "err_pct": 9
          },
          {
            "label": "P4",
            "eff": 30,
            "tot": 10,
            "pts": 4,
            "pts_pct": 40,
            "err_pct": 10
          },
          {
            "label": "P3",
            "eff": 30,
            "tot": 10,
            "pts": 6,
            "pts_pct": 60,
            "err_pct": 30
          },
          {
            "label": "P2",
            "eff": 50,
            "tot": 4,
            "pts": 2,
            "pts_pct": 50,
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
        "extra_pills": [
          {
            "label": "SO",
            "eff": 39
          },
          {
            "label": "REC #",
            "eff": 45
          },
          {
            "label": "REC +",
            "eff": 48
          },
          {
            "label": "REC !",
            "eff": 53
          },
          {
            "label": "REC -",
            "eff": 0
          },
          {
            "label": "TRANS",
            "eff": 15
          }
        ],
        "so_dist": [
          {
            "pos": "P4",
            "tot": 12,
            "pts": 8,
            "pct": 67
          },
          {
            "pos": "P3",
            "tot": 20,
            "pts": 11,
            "pct": 55
          },
          {
            "pos": "P2",
            "tot": 6,
            "pts": 3,
            "pct": 50
          },
          {
            "pos": "P1",
            "tot": 7,
            "pts": 4,
            "pct": 57
          },
          {
            "pos": "P6",
            "tot": 0,
            "pts": 0,
            "pct": 0
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 24,
            "pts": 7,
            "pct": 29
          },
          {
            "pos": "P3",
            "tot": 2,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P2",
            "tot": 4,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 8,
            "pts": 4,
            "pct": 50
          },
          {
            "pos": "P6",
            "tot": 3,
            "pts": 2,
            "pct": 67
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
                "pts": 1,
                "pct": 100,
                "pct_p": 50
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
                "pts": 1,
                "pct": 50,
                "pct_p": 100
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 1,
                "pct": 50,
                "pct_p": 100
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
            "eff": 50,
            "tot": 2,
            "pts": 1,
            "pts_pct": 50,
            "err_pct": 0
          },
          {
            "label": "P6",
            "eff": 100,
            "tot": 2,
            "pts": 2,
            "pts_pct": 100,
            "err_pct": 0
          },
          {
            "label": "P5",
            "eff": -50,
            "tot": 2,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 50
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
        "extra_pills": [
          {
            "label": "SO",
            "eff": 33
          },
          {
            "label": "REC #",
            "eff": 50
          },
          {
            "label": "REC +",
            "eff": 25
          },
          {
            "label": "REC !",
            "eff": 0
          },
          {
            "label": "REC -",
            "eff": 0
          },
          {
            "label": "TRANS",
            "eff": 0
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
            "tot": 9,
            "pts": 2,
            "pct": 50
          },
          {
            "pos": "P2",
            "tot": 3,
            "pts": 0,
            "pct": 200
          },
          {
            "pos": "P1",
            "tot": 0,
            "pts": 0,
            "pct": 100
          },
          {
            "pos": "P6",
            "tot": 5,
            "pts": 7,
            "pct": 0
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 0,
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
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 0,
            "pts": 0,
            "pct": 0
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
    "objetivos": {
      "Ojuez A.": {
        "sq": -10,
        "rec": -25,
        "bqpos": 62,
        "bqpt": 23,
        "atqq": 37,
        "atqhb": null,
        "atqx": null,
        "atqrp": 39,
        "atqri": 0,
        "atqrm": null,
        "atqtr": 100
      },
      "Romeo Winer A.": {
        "sq": -17,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Vazquez E.": {
        "sq": -8,
        "rec": 0,
        "bqpos": 50,
        "bqpt": 6,
        "atqq": null,
        "atqhb": 0,
        "atqx": null,
        "atqrp": null,
        "atqri": 0,
        "atqrm": null,
        "atqtr": 0
      },
      "Ramos I.": {
        "sq": -80,
        "rec": 50,
        "bqpos": 71,
        "bqpt": 29,
        "atqq": null,
        "atqhb": 20,
        "atqx": 46,
        "atqrp": 60,
        "atqri": 0,
        "atqrm": 0,
        "atqtr": 25
      },
      "Villarruel J.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Godoy M.": {
        "sq": 0,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Viera M.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Durdos V.": {
        "sq": -6,
        "rec": 41,
        "bqpos": 0,
        "bqpt": 0,
        "atqq": null,
        "atqhb": 11,
        "atqx": 24,
        "atqrp": 50,
        "atqri": 100,
        "atqrm": 0,
        "atqtr": 9
      },
      "Zanotti J.": {
        "sq": null,
        "rec": 35,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Rojas Caruso M.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Nielson R.": {
        "sq": 17,
        "rec": 59,
        "bqpos": 47,
        "bqpt": 13,
        "atqq": null,
        "atqhb": 18,
        "atqx": 45,
        "atqrp": 44,
        "atqri": 75,
        "atqrm": 50,
        "atqtr": 16
      },
      "Rotezzi R.": {
        "sq": -8,
        "rec": 8,
        "bqpos": 40,
        "bqpt": 0,
        "atqq": 44,
        "atqhb": null,
        "atqx": null,
        "atqrp": 50,
        "atqri": 100,
        "atqrm": null,
        "atqtr": 25
      },
      "Herbsommer L.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Acosta W.": {
        "sq": 11,
        "rec": null,
        "bqpos": 0,
        "bqpt": 0,
        "atqq": null,
        "atqhb": 50,
        "atqx": 17,
        "atqrp": 0,
        "atqri": 50,
        "atqrm": null,
        "atqtr": 20
      },
      "Diaz Bolli S.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      }
    },
    "equipo_obj": {
      "sq": -6,
      "rec": 40,
      "bqpos": 48,
      "bqpt": 13,
      "atqq": 39,
      "atqhb": 20,
      "atqx": 34,
      "atqrp": 45,
      "atqri": 53,
      "atqrm": 17,
      "atqtr": 16
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
        "recepcion": {},
        "objetivos": {
          "sq": -9,
          "rec": null,
          "bqpos": 70,
          "bqpt": 40,
          "atqq": 43,
          "atqhb": null,
          "atqx": null,
          "atqrp": 38,
          "atqri": null,
          "atqrm": 100,
          "atqtr": 17
        }
      },
      {
        "num": 3,
        "nombre": "3 Romeo Winer A.",
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
        },
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": 19,
          "rec": null,
          "bqpos": 33,
          "bqpt": 0,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": -100
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": 33,
          "bqpt": 33,
          "atqq": null,
          "atqhb": 0,
          "atqx": 50,
          "atqrp": 0,
          "atqri": 50,
          "atqrm": null,
          "atqtr": 100
        }
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
        },
        "objetivos": {
          "sq": -15,
          "rec": 67,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": -20,
          "atqrp": 0,
          "atqri": null,
          "atqrm": null,
          "atqtr": -33
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
        "recepcion": {},
        "objetivos": {
          "sq": 12,
          "rec": null,
          "bqpos": 20,
          "bqpt": 0,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": 50
        }
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
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        },
        "objetivos": {
          "sq": -50,
          "rec": 31,
          "bqpos": 20,
          "bqpt": 0,
          "atqq": null,
          "atqhb": -12,
          "atqx": 20,
          "atqrp": 11,
          "atqri": 60,
          "atqrm": 20,
          "atqtr": -25
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
        },
        "objetivos": {
          "sq": null,
          "rec": 31,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
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
        },
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
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
        },
        "objetivos": {
          "sq": 7,
          "rec": 50,
          "bqpos": 33,
          "bqpt": 17,
          "atqq": null,
          "atqhb": 33,
          "atqx": 50,
          "atqrp": 27,
          "atqri": 50,
          "atqrm": 100,
          "atqtr": 50
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
        "recepcion": {},
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": 6,
          "rec": null,
          "bqpos": 40,
          "bqpt": 20,
          "atqq": 55,
          "atqhb": null,
          "atqx": null,
          "atqrp": 64,
          "atqri": 60,
          "atqrm": null,
          "atqtr": 33
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": -31,
          "rec": null,
          "bqpos": 50,
          "bqpt": 25,
          "atqq": null,
          "atqhb": -12,
          "atqx": 43,
          "atqrp": 38,
          "atqri": 40,
          "atqrm": 0,
          "atqtr": 27
        }
      },
      {
        "num": 19,
        "nombre": "19 Diaz Bolli S.",
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
            "eff": 12,
            "tot": 4,
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
        "recepcion": {},
        "objetivos": {
          "sq": 12,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
                "pts": 1,
                "pct": 43,
                "pct_p": 33
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 2,
                "pct": 43,
                "pct_p": 67
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 1,
                "pct": 14,
                "pct_p": 100
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
                "pts": 2,
                "pct": 44,
                "pct_p": 50
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 2,
                "pct": 33,
                "pct_p": 67
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 2,
                "pct": 22,
                "pct_p": 100
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
                "pts": 2,
                "pct": 50,
                "pct_p": 67
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
                "pts": 1,
                "pct": 33,
                "pct_p": 50
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 1,
                "pct": 33,
                "pct_p": 50
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 1,
                "pct": 33,
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
                "pts": 2,
                "pct": 75,
                "pct_p": 67
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
                "pts": 1,
                "pct": 33,
                "pct_p": 33
              },
              {
                "zona": 3,
                "tot": 4,
                "pts": 3,
                "pct": 44,
                "pct_p": 75
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 1,
                "pct": 11,
                "pct_p": 100
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
            "eff": 57,
            "tot": 7,
            "pts": 4,
            "pts_pct": 57,
            "err_pct": 0
          },
          {
            "label": "P6",
            "eff": 44,
            "tot": 9,
            "pts": 6,
            "pts_pct": 67,
            "err_pct": 22
          },
          {
            "label": "P5",
            "eff": 0,
            "tot": 6,
            "pts": 2,
            "pts_pct": 33,
            "err_pct": 33
          },
          {
            "label": "P4",
            "eff": 17,
            "tot": 6,
            "pts": 3,
            "pts_pct": 50,
            "err_pct": 33
          },
          {
            "label": "P3",
            "eff": 50,
            "tot": 4,
            "pts": 2,
            "pts_pct": 50,
            "err_pct": 0
          },
          {
            "label": "P2",
            "eff": 44,
            "tot": 9,
            "pts": 5,
            "pts_pct": 56,
            "err_pct": 11
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
        "extra_pills": [
          {
            "label": "SO",
            "eff": 42
          },
          {
            "label": "REC #",
            "eff": 47
          },
          {
            "label": "REC +",
            "eff": 27
          },
          {
            "label": "REC !",
            "eff": 53
          },
          {
            "label": "REC -",
            "eff": 33
          },
          {
            "label": "TRANS",
            "eff": 30
          }
        ],
        "so_dist": [
          {
            "pos": "P4",
            "tot": 16,
            "pts": 7,
            "pct": 44
          },
          {
            "pos": "P3",
            "tot": 16,
            "pts": 10,
            "pct": 62
          },
          {
            "pos": "P2",
            "tot": 5,
            "pts": 3,
            "pct": 60
          },
          {
            "pos": "P1",
            "tot": 3,
            "pts": 2,
            "pct": 67
          },
          {
            "pos": "P6",
            "tot": 1,
            "pts": 0,
            "pct": 0
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 20,
            "pts": 11,
            "pct": 55
          },
          {
            "pos": "P3",
            "tot": 9,
            "pts": 3,
            "pct": 33
          },
          {
            "pos": "P2",
            "tot": 8,
            "pts": 4,
            "pct": 50
          },
          {
            "pos": "P1",
            "tot": 4,
            "pts": 2,
            "pct": 50
          },
          {
            "pos": "P6",
            "tot": 2,
            "pts": 0,
            "pct": 0
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
                "pts": 1,
                "pct": 50,
                "pct_p": 50
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
                "pts": 1,
                "pct": 100,
                "pct_p": 100
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
                "pts": 1,
                "pct": 50,
                "pct_p": 100
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
            "eff": -50,
            "tot": 2,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 50
          },
          {
            "label": "P6",
            "eff": 25,
            "tot": 4,
            "pts": 1,
            "pts_pct": 25,
            "err_pct": 0
          },
          {
            "label": "P5",
            "eff": 100,
            "tot": 1,
            "pts": 1,
            "pts_pct": 100,
            "err_pct": 0
          },
          {
            "label": "P4",
            "eff": 50,
            "tot": 2,
            "pts": 1,
            "pts_pct": 50,
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
        "extra_pills": [
          {
            "label": "SO",
            "eff": 31
          },
          {
            "label": "REC #",
            "eff": 0
          },
          {
            "label": "REC +",
            "eff": 50
          },
          {
            "label": "REC !",
            "eff": 50
          },
          {
            "label": "REC -",
            "eff": 100
          },
          {
            "label": "TRANS",
            "eff": 33
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
            "tot": 7,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P2",
            "tot": 3,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 0,
            "pts": 1,
            "pct": 100
          },
          {
            "pos": "P6",
            "tot": 4,
            "pts": 3,
            "pct": 50
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 0,
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
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 0,
            "pts": 0,
            "pct": 0
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
    "objetivos": {
      "Ojuez A.": {
        "sq": -9,
        "rec": null,
        "bqpos": 70,
        "bqpt": 40,
        "atqq": 43,
        "atqhb": null,
        "atqx": null,
        "atqrp": 38,
        "atqri": null,
        "atqrm": 100,
        "atqtr": 17
      },
      "Romeo Winer A.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Vazquez E.": {
        "sq": 19,
        "rec": null,
        "bqpos": 33,
        "bqpt": 0,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": -100
      },
      "Ramos I.": {
        "sq": 0,
        "rec": null,
        "bqpos": 33,
        "bqpt": 33,
        "atqq": null,
        "atqhb": 0,
        "atqx": 50,
        "atqrp": 0,
        "atqri": 50,
        "atqrm": null,
        "atqtr": 100
      },
      "Villarruel J.": {
        "sq": -15,
        "rec": 67,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": -20,
        "atqrp": 0,
        "atqri": null,
        "atqrm": null,
        "atqtr": -33
      },
      "Godoy M.": {
        "sq": 12,
        "rec": null,
        "bqpos": 20,
        "bqpt": 0,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": 50
      },
      "Viera M.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Durdos V.": {
        "sq": -50,
        "rec": 31,
        "bqpos": 20,
        "bqpt": 0,
        "atqq": null,
        "atqhb": -12,
        "atqx": 20,
        "atqrp": 11,
        "atqri": 60,
        "atqrm": 20,
        "atqtr": -25
      },
      "Zanotti J.": {
        "sq": null,
        "rec": 31,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Rojas Caruso M.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Nielson R.": {
        "sq": 7,
        "rec": 50,
        "bqpos": 33,
        "bqpt": 17,
        "atqq": null,
        "atqhb": 33,
        "atqx": 50,
        "atqrp": 27,
        "atqri": 50,
        "atqrm": 100,
        "atqtr": 50
      },
      "Rotezzi R.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Herbsommer L.": {
        "sq": 6,
        "rec": null,
        "bqpos": 40,
        "bqpt": 20,
        "atqq": 55,
        "atqhb": null,
        "atqx": null,
        "atqrp": 64,
        "atqri": 60,
        "atqrm": null,
        "atqtr": 33
      },
      "Acosta W.": {
        "sq": -31,
        "rec": null,
        "bqpos": 50,
        "bqpt": 25,
        "atqq": null,
        "atqhb": -12,
        "atqx": 43,
        "atqrp": 38,
        "atqri": 40,
        "atqrm": 0,
        "atqtr": 27
      },
      "Diaz Bolli S.": {
        "sq": 12,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      }
    },
    "equipo_obj": {
      "sq": 1,
      "rec": 40,
      "bqpos": 41,
      "bqpt": 20,
      "atqq": 50,
      "atqhb": 4,
      "atqx": 35,
      "atqrp": 33,
      "atqri": 53,
      "atqrm": 40,
      "atqtr": 20
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
        "recepcion": {},
        "objetivos": {
          "sq": -12,
          "rec": 0,
          "bqpos": 75,
          "bqpt": 31,
          "atqq": 62,
          "atqhb": null,
          "atqx": null,
          "atqrp": 71,
          "atqri": 100,
          "atqrm": 50,
          "atqtr": 25
        }
      },
      {
        "num": 3,
        "nombre": "3 Romeo Winer A.",
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
        },
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": 15,
          "rec": -100,
          "bqpos": 57,
          "bqpt": 29,
          "atqq": null,
          "atqhb": 0,
          "atqx": null,
          "atqrp": 0,
          "atqri": 0,
          "atqrm": null,
          "atqtr": 75
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": -100,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": 50,
          "atqx": 0,
          "atqrp": 0,
          "atqri": null,
          "atqrm": 100,
          "atqtr": 0
        }
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
        },
        "objetivos": {
          "sq": -100,
          "rec": 50,
          "bqpos": 100,
          "bqpt": 0,
          "atqq": null,
          "atqhb": null,
          "atqx": -50,
          "atqrp": null,
          "atqri": 0,
          "atqrm": null,
          "atqtr": -100
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
        "recepcion": {},
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        },
        "objetivos": {
          "sq": 9,
          "rec": 24,
          "bqpos": 46,
          "bqpt": 8,
          "atqq": null,
          "atqhb": -7,
          "atqx": 40,
          "atqrp": 50,
          "atqri": 50,
          "atqrm": 0,
          "atqtr": -11
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
        },
        "objetivos": {
          "sq": null,
          "rec": 39,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
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
        },
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
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
        },
        "objetivos": {
          "sq": 0,
          "rec": 26,
          "bqpos": 44,
          "bqpt": 11,
          "atqq": null,
          "atqhb": 8,
          "atqx": 31,
          "atqrp": 12,
          "atqri": 100,
          "atqrm": 0,
          "atqtr": 11
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
        "recepcion": {},
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": -11,
          "rec": null,
          "bqpos": 60,
          "bqpt": 35,
          "atqq": 20,
          "atqhb": null,
          "atqx": null,
          "atqrp": -50,
          "atqri": 57,
          "atqrm": null,
          "atqtr": 67
        }
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
        "recepcion": {},
        "objetivos": {
          "sq": -13,
          "rec": null,
          "bqpos": 50,
          "bqpt": 0,
          "atqq": null,
          "atqhb": -11,
          "atqx": 28,
          "atqrp": 22,
          "atqri": 100,
          "atqrm": 100,
          "atqtr": -12
        }
      },
      {
        "num": 19,
        "nombre": "19 Diaz Bolli S.",
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
        "recepcion": {},
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
                "pts": 1,
                "pct": 44,
                "pct_p": 25
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
                "pts": 1,
                "pct": 22,
                "pct_p": 50
              },
              {
                "zona": 6,
                "tot": 1,
                "pts": 1,
                "pct": 11,
                "pct_p": 100
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
                "pts": 1,
                "pct": 42,
                "pct_p": 20
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 1,
                "pct": 25,
                "pct_p": 33
              },
              {
                "zona": 2,
                "tot": 4,
                "pts": 1,
                "pct": 33,
                "pct_p": 25
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
                "pts": 1,
                "pct": 33,
                "pct_p": 50
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 2,
                "pct": 50,
                "pct_p": 67
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 1,
                "pct": 17,
                "pct_p": 100
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
                "pts": 2,
                "pct": 33,
                "pct_p": 100
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 2,
                "pct": 50,
                "pct_p": 67
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 1,
                "pct": 17,
                "pct_p": 100
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
                "pts": 2,
                "pct": 57,
                "pct_p": 50
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 1,
                "pct": 14,
                "pct_p": 100
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
            "pts": 3,
            "pts_pct": 33,
            "err_pct": 33
          },
          {
            "label": "P6",
            "eff": 0,
            "tot": 12,
            "pts": 3,
            "pts_pct": 25,
            "err_pct": 25
          },
          {
            "label": "P5",
            "eff": 67,
            "tot": 6,
            "pts": 4,
            "pts_pct": 67,
            "err_pct": 0
          },
          {
            "label": "P4",
            "eff": 83,
            "tot": 6,
            "pts": 5,
            "pts_pct": 83,
            "err_pct": 0
          },
          {
            "label": "P3",
            "eff": 29,
            "tot": 7,
            "pts": 3,
            "pts_pct": 43,
            "err_pct": 14
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
        "extra_pills": [
          {
            "label": "SO",
            "eff": 33
          },
          {
            "label": "REC #",
            "eff": 25
          },
          {
            "label": "REC +",
            "eff": 30
          },
          {
            "label": "REC !",
            "eff": 71
          },
          {
            "label": "REC -",
            "eff": 33
          },
          {
            "label": "TRANS",
            "eff": -6
          }
        ],
        "so_dist": [
          {
            "pos": "P4",
            "tot": 17,
            "pts": 7,
            "pct": 41
          },
          {
            "pos": "P3",
            "tot": 12,
            "pts": 6,
            "pct": 50
          },
          {
            "pos": "P2",
            "tot": 7,
            "pts": 3,
            "pct": 43
          },
          {
            "pos": "P1",
            "tot": 2,
            "pts": 1,
            "pct": 50
          },
          {
            "pos": "P6",
            "tot": 1,
            "pts": 1,
            "pct": 100
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 13,
            "pts": 3,
            "pct": 23
          },
          {
            "pos": "P3",
            "tot": 5,
            "pts": 3,
            "pct": 60
          },
          {
            "pos": "P2",
            "tot": 10,
            "pts": 2,
            "pct": 20
          },
          {
            "pos": "P1",
            "tot": 3,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P6",
            "tot": 1,
            "pts": 0,
            "pct": 0
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
            "eff": -100,
            "tot": 1,
            "pts": 0,
            "pts_pct": 0,
            "err_pct": 100
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
        "extra_pills": [
          {
            "label": "SO",
            "eff": 0
          },
          {
            "label": "REC #",
            "eff": -100
          },
          {
            "label": "REC +",
            "eff": 0
          },
          {
            "label": "REC !",
            "eff": 0
          },
          {
            "label": "REC -",
            "eff": 50
          },
          {
            "label": "TRANS",
            "eff": 0
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
            "tot": 10,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P2",
            "tot": 5,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 1,
            "pts": 0,
            "pct": 100
          },
          {
            "pos": "P6",
            "tot": 5,
            "pts": 3,
            "pct": 17
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 0,
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
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 0,
            "pts": 0,
            "pct": 0
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
    "objetivos": {
      "Ojuez A.": {
        "sq": -12,
        "rec": 0,
        "bqpos": 75,
        "bqpt": 31,
        "atqq": 62,
        "atqhb": null,
        "atqx": null,
        "atqrp": 71,
        "atqri": 100,
        "atqrm": 50,
        "atqtr": 25
      },
      "Romeo Winer A.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Vazquez E.": {
        "sq": 15,
        "rec": -100,
        "bqpos": 57,
        "bqpt": 29,
        "atqq": null,
        "atqhb": 0,
        "atqx": null,
        "atqrp": 0,
        "atqri": 0,
        "atqrm": null,
        "atqtr": 75
      },
      "Ramos I.": {
        "sq": -100,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": 50,
        "atqx": 0,
        "atqrp": 0,
        "atqri": null,
        "atqrm": 100,
        "atqtr": 0
      },
      "Villarruel J.": {
        "sq": -100,
        "rec": 50,
        "bqpos": 100,
        "bqpt": 0,
        "atqq": null,
        "atqhb": null,
        "atqx": -50,
        "atqrp": null,
        "atqri": 0,
        "atqrm": null,
        "atqtr": -100
      },
      "Godoy M.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Viera M.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Durdos V.": {
        "sq": 9,
        "rec": 24,
        "bqpos": 46,
        "bqpt": 8,
        "atqq": null,
        "atqhb": -7,
        "atqx": 40,
        "atqrp": 50,
        "atqri": 50,
        "atqrm": 0,
        "atqtr": -11
      },
      "Zanotti J.": {
        "sq": null,
        "rec": 39,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Rojas Caruso M.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Nielson R.": {
        "sq": 0,
        "rec": 26,
        "bqpos": 44,
        "bqpt": 11,
        "atqq": null,
        "atqhb": 8,
        "atqx": 31,
        "atqrp": 12,
        "atqri": 100,
        "atqrm": 0,
        "atqtr": 11
      },
      "Rotezzi R.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Herbsommer L.": {
        "sq": -11,
        "rec": null,
        "bqpos": 60,
        "bqpt": 35,
        "atqq": 20,
        "atqhb": null,
        "atqx": null,
        "atqrp": -50,
        "atqri": 57,
        "atqrm": null,
        "atqtr": 67
      },
      "Acosta W.": {
        "sq": -13,
        "rec": null,
        "bqpos": 50,
        "bqpt": 0,
        "atqq": null,
        "atqhb": -11,
        "atqx": 28,
        "atqrp": 22,
        "atqri": 100,
        "atqrm": 100,
        "atqtr": -12
      },
      "Diaz Bolli S.": {
        "sq": 0,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      }
    },
    "equipo_obj": {
      "sq": -3,
      "rec": 28,
      "bqpos": 58,
      "bqpt": 22,
      "atqq": 39,
      "atqhb": -2,
      "atqx": 29,
      "atqrp": 24,
      "atqri": 67,
      "atqrm": 25,
      "atqtr": 2
    }
  },
  {
    "nombre": "LOMAS",
    "rival": "LOMAS",
    "fecha": "30/05/2026",
    "torneo": "División de Honor",
    "resultado": "V",
    "sets_casla": "3",
    "sets_rival": "2",
    "jugadores": [
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
                "pct": 80
              },
              {
                "z": 6,
                "pct": 20
              }
            ],
            "eff": 67,
            "tot": 6,
            "pts": 5,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 83
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
            "eff": 100,
            "tot": 2,
            "pts": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 100
          },
          {
            "cod": "X2",
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
                "pct": 86
              },
              {
                "z": 1,
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
        "recepcion": {},
        "objetivos": {
          "sq": -7,
          "rec": 50,
          "bqpos": 50,
          "bqpt": 33,
          "atqq": 78,
          "atqhb": null,
          "atqx": null,
          "atqrp": 50,
          "atqri": 100,
          "atqrm": null,
          "atqtr": 100
        }
      },
      {
        "num": 3,
        "nombre": "3 Romeo Winer A.",
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
        },
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
                "pct": 50
              },
              {
                "z": 1,
                "pct": 41
              },
              {
                "z": 5,
                "pct": 9
              }
            ],
            "eff": 0,
            "tot": 22,
            "pts": 0,
            "plus": 4,
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
        "objetivos": {
          "sq": 0,
          "rec": 0,
          "bqpos": 50,
          "bqpt": 0,
          "atqq": null,
          "atqhb": 0,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": 0,
          "atqtr": 0
        }
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
                "z": 6,
                "pct": 57
              }
            ],
            "eff": null,
            "tot": 7,
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
                "pct": 100
              }
            ],
            "eff": -33,
            "tot": 3,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 33
          },
          {
            "cod": "V8",
            "orig": 9,
            "destinos": [
              {
                "z": 6,
                "pct": 33
              },
              {
                "z": 5,
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
                "pct": 60
              },
              {
                "z": 6,
                "pct": 30
              },
              {
                "z": 1,
                "pct": 10
              }
            ],
            "eff": -30,
            "tot": 10,
            "pts": 0,
            "plus": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "video": 0,
        "recepcion": {},
        "objetivos": {
          "sq": -30,
          "rec": null,
          "bqpos": 78,
          "bqpt": 33,
          "atqq": null,
          "atqhb": 71,
          "atqx": 7,
          "atqrp": 20,
          "atqri": 17,
          "atqrm": 100,
          "atqtr": 50
        }
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
            "destinos": [
              {
                "z": 5,
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
        "recepcion": {
          "num": 6,
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
        },
        "objetivos": {
          "sq": 0,
          "rec": 50,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
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
        "objetivos": {
          "sq": -100,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
                "pct": 30
              },
              {
                "z": 1,
                "pct": 20
              },
              {
                "z": 2,
                "pct": 20
              },
              {
                "z": 8,
                "pct": 10
              }
            ],
            "eff": 44,
            "tot": 16,
            "pts": 10,
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
                "z": 8,
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
            "eff": null,
            "tot": 7,
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
                "z": 1,
                "pct": 29
              },
              {
                "z": 5,
                "pct": 29
              }
            ],
            "eff": -14,
            "tot": 7,
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
                "pct": 67
              },
              {
                "z": 5,
                "pct": 33
              }
            ],
            "eff": 14,
            "tot": 7,
            "pts": 1,
            "plus": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 14
          }
        ],
        "video": 0,
        "recepcion": {
          "num": 11,
          "flotado": {
            "desde_z1": {
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
                "tot": 14,
                "eff": 50,
                "pos": 71,
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
                "eff": 50,
                "pos": 80,
                "neg": 0
              },
              "p5": {
                "tot": 8,
                "eff": 25,
                "pos": 62,
                "neg": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 9,
                "eff": 0,
                "pos": 22,
                "neg": 22
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
                "tot": 6,
                "eff": 0,
                "pos": 33,
                "neg": 33
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
                "tot": 5,
                "eff": 10,
                "pos": 40,
                "neg": 20
              },
              "p1": {
                "tot": 2,
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
                "eff": 0,
                "pos": 0,
                "neg": 100
              }
            }
          }
        },
        "objetivos": {
          "sq": 0,
          "rec": 28,
          "bqpos": 29,
          "bqpt": 14,
          "atqq": null,
          "atqhb": 19,
          "atqx": 44,
          "atqrp": 56,
          "atqri": 100,
          "atqrm": -12,
          "atqtr": 47
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
                "eff": 33,
                "pos": 67,
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
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0
              }
            },
            "desde_z5": {
              "total": {
                "tot": 5,
                "eff": 70,
                "pos": 80,
                "neg": 0
              },
              "p1": {
                "tot": 3,
                "eff": 67,
                "pos": 100,
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
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 10,
                "eff": 15,
                "pos": 30,
                "neg": 10
              },
              "p1": {
                "tot": 7,
                "eff": 14,
                "pos": 29,
                "neg": 14
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
                "tot": 5,
                "eff": 0,
                "pos": 20,
                "neg": 20
              },
              "p1": {
                "tot": 4,
                "eff": -25,
                "pos": 0,
                "neg": 25
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
        "objetivos": {
          "sq": null,
          "rec": 27,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
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
        },
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
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
                "z": 7,
                "pct": 29
              },
              {
                "z": 1,
                "pct": 14
              },
              {
                "z": 8,
                "pct": 14
              },
              {
                "z": 5,
                "pct": 14
              }
            ],
            "eff": 14,
            "tot": 21,
            "pts": 7,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 33
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
            "eff": 0,
            "tot": 11,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 9
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
                "pct": 48
              },
              {
                "z": 1,
                "pct": 39
              },
              {
                "z": 5,
                "pct": 13
              }
            ],
            "eff": 1,
            "tot": 23,
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
          "num": 14,
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
                "tot": 15,
                "eff": 30,
                "pos": 53,
                "neg": 13
              },
              "p1": {
                "tot": 6,
                "eff": 33,
                "pos": 67,
                "neg": 0
              },
              "p6": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0
              },
              "p5": {
                "tot": 7,
                "eff": 0,
                "pos": 43,
                "neg": 29
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "total": {
                "tot": 8,
                "eff": -12,
                "pos": 12,
                "neg": 25
              },
              "p1": {
                "tot": 2,
                "eff": -50,
                "pos": 0,
                "neg": 50
              },
              "p6": {
                "tot": 4,
                "eff": 0,
                "pos": 25,
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
        },
        "objetivos": {
          "sq": 1,
          "rec": 13,
          "bqpos": 67,
          "bqpt": 33,
          "atqq": null,
          "atqhb": 0,
          "atqx": 14,
          "atqrp": 33,
          "atqri": 67,
          "atqrm": -25,
          "atqtr": 0
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
        "recepcion": {},
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
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
                "z": 8,
                "pct": 50
              },
              {
                "z": 5,
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
                "z": 1,
                "pct": 50
              },
              {
                "z": 8,
                "pct": 25
              },
              {
                "z": 7,
                "pct": 25
              }
            ],
            "eff": 9,
            "tot": 11,
            "pts": 4,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 36
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
                "pct": 80
              },
              {
                "z": 6,
                "pct": 20
              }
            ],
            "eff": 9,
            "tot": 16,
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
        "recepcion": {},
        "objetivos": {
          "sq": 9,
          "rec": null,
          "bqpos": 48,
          "bqpt": 28,
          "atqq": 16,
          "atqhb": null,
          "atqx": null,
          "atqrp": 27,
          "atqri": 20,
          "atqrm": null,
          "atqtr": -25
        }
      },
      {
        "num": 18,
        "nombre": "18 Acosta W.",
        "pos": "OPUESTO",
        "color": "#818cf8",
        "info": {},
        "ataques": [
          {
            "cod": "V6",
            "orig": 2,
            "destinos": [],
            "eff": null,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
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
                "pct": 50
              },
              {
                "z": 5,
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
          }
        ],
        "video": 0,
        "recepcion": {},
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": 100,
          "bqpt": 0,
          "atqq": null,
          "atqhb": 67,
          "atqx": 0,
          "atqrp": 0,
          "atqri": null,
          "atqrm": 100,
          "atqtr": 33
        }
      },
      {
        "num": 19,
        "nombre": "19 Diaz Bolli S.",
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
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        }
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "Vazquez E.",
        "rotaciones": [
          {
            "pos": "P1",
            "total": 13,
            "dist": [
              {
                "zona": 4,
                "tot": 5,
                "pts": 2,
                "pct": 38,
                "pct_p": 40
              },
              {
                "zona": 3,
                "tot": 6,
                "pts": 4,
                "pct": 46,
                "pct_p": 67
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 1,
                "pct": 15,
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
            "pos": "P6",
            "total": 10,
            "dist": [
              {
                "zona": 4,
                "tot": 5,
                "pts": 3,
                "pct": 50,
                "pct_p": 60
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
            "pos": "P5",
            "total": 3,
            "dist": [
              {
                "zona": 4,
                "tot": 1,
                "pts": 1,
                "pct": 33,
                "pct_p": 100
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
                "tot": 1,
                "pts": 1,
                "pct": 33,
                "pct_p": 100
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
            "total": 4,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 3,
                "pct": 75,
                "pct_p": 100
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
                "pts": 2,
                "pct": 100,
                "pct_p": 100
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
            "total": 4,
            "dist": [
              {
                "zona": 4,
                "tot": 1,
                "pts": 1,
                "pct": 25,
                "pct_p": 100
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 1,
                "pct": 50,
                "pct_p": 50
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
            "eff": 46,
            "tot": 13,
            "pts": 7,
            "pts_pct": 54,
            "err_pct": 8
          },
          {
            "label": "P6",
            "eff": -10,
            "tot": 10,
            "pts": 3,
            "pts_pct": 30,
            "err_pct": 40
          },
          {
            "label": "P5",
            "eff": 33,
            "tot": 3,
            "pts": 2,
            "pts_pct": 67,
            "err_pct": 33
          },
          {
            "label": "P4",
            "eff": 50,
            "tot": 4,
            "pts": 3,
            "pts_pct": 75,
            "err_pct": 25
          },
          {
            "label": "P3",
            "eff": 100,
            "tot": 2,
            "pts": 2,
            "pts_pct": 100,
            "err_pct": 0
          },
          {
            "label": "P2",
            "eff": 50,
            "tot": 4,
            "pts": 2,
            "pts_pct": 50,
            "err_pct": 0
          },
          {
            "label": "SO",
            "eff": 33,
            "tot": 36,
            "pts": 19,
            "pts_pct": 53,
            "err_pct": 19
          },
          {
            "label": "TR",
            "eff": 20,
            "tot": 45,
            "pts": 17,
            "pts_pct": 38,
            "err_pct": 18
          }
        ],
        "extra_pills": [
          {
            "label": "SO",
            "eff": 32
          },
          {
            "label": "REC #",
            "eff": 12
          },
          {
            "label": "REC +",
            "eff": 50
          },
          {
            "label": "REC !",
            "eff": 50
          },
          {
            "label": "REC -",
            "eff": 20
          },
          {
            "label": "TRANS",
            "eff": 20
          }
        ],
        "so_dist": [
          {
            "pos": "P4",
            "tot": 15,
            "pts": 10,
            "pct": 67
          },
          {
            "pos": "P3",
            "tot": 14,
            "pts": 7,
            "pct": 50
          },
          {
            "pos": "P2",
            "tot": 5,
            "pts": 2,
            "pct": 40
          },
          {
            "pos": "P1",
            "tot": 2,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P6",
            "tot": 0,
            "pts": 0,
            "pct": 0
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 26,
            "pts": 8,
            "pct": 31
          },
          {
            "pos": "P3",
            "tot": 4,
            "pts": 1,
            "pct": 25
          },
          {
            "pos": "P2",
            "tot": 10,
            "pts": 3,
            "pct": 30
          },
          {
            "pos": "P1",
            "tot": 1,
            "pts": 1,
            "pct": 100
          },
          {
            "pos": "P6",
            "tot": 1,
            "pts": 1,
            "pct": 100
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
                "pts": 1,
                "pct": 100,
                "pct_p": 100
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
            "eff": 100,
            "tot": 1,
            "pts": 1,
            "pts_pct": 100,
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
            "eff": 100,
            "tot": 1,
            "pts": 1,
            "pts_pct": 100,
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
        "extra_pills": [
          {
            "label": "SO",
            "eff": 100
          },
          {
            "label": "REC #",
            "eff": 0
          },
          {
            "label": "REC +",
            "eff": 100
          },
          {
            "label": "REC !",
            "eff": 0
          },
          {
            "label": "REC -",
            "eff": 0
          },
          {
            "label": "TRANS",
            "eff": 0
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
            "tot": 3,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P2",
            "tot": 1,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 1,
            "pts": 1,
            "pct": 100
          },
          {
            "pos": "P6",
            "tot": 11,
            "pts": 4,
            "pct": 38
          }
        ],
        "tr_dist": [
          {
            "pos": "P4",
            "tot": 0,
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
            "tot": 0,
            "pts": 0,
            "pct": 0
          },
          {
            "pos": "P1",
            "tot": 0,
            "pts": 0,
            "pct": 0
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
    "objetivos": {
      "Ojuez A.": {
        "sq": -7,
        "rec": 50,
        "bqpos": 50,
        "bqpt": 33,
        "atqq": 78,
        "atqhb": null,
        "atqx": null,
        "atqrp": 50,
        "atqri": 100,
        "atqrm": null,
        "atqtr": 100
      },
      "Romeo Winer A.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Vazquez E.": {
        "sq": 0,
        "rec": 0,
        "bqpos": 50,
        "bqpt": 0,
        "atqq": null,
        "atqhb": 0,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": 0,
        "atqtr": 0
      },
      "Ramos I.": {
        "sq": -30,
        "rec": null,
        "bqpos": 78,
        "bqpt": 33,
        "atqq": null,
        "atqhb": 71,
        "atqx": 7,
        "atqrp": 20,
        "atqri": 17,
        "atqrm": 100,
        "atqtr": 50
      },
      "Villarruel J.": {
        "sq": 0,
        "rec": 50,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Godoy M.": {
        "sq": -100,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Viera M.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Durdos V.": {
        "sq": 0,
        "rec": 28,
        "bqpos": 29,
        "bqpt": 14,
        "atqq": null,
        "atqhb": 19,
        "atqx": 44,
        "atqrp": 56,
        "atqri": 100,
        "atqrm": -12,
        "atqtr": 47
      },
      "Zanotti J.": {
        "sq": null,
        "rec": 27,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Rojas Caruso M.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Nielson R.": {
        "sq": 1,
        "rec": 13,
        "bqpos": 67,
        "bqpt": 33,
        "atqq": null,
        "atqhb": 0,
        "atqx": 14,
        "atqrp": 33,
        "atqri": 67,
        "atqrm": -25,
        "atqtr": 0
      },
      "Rotezzi R.": {
        "sq": null,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      },
      "Herbsommer L.": {
        "sq": 9,
        "rec": null,
        "bqpos": 48,
        "bqpt": 28,
        "atqq": 16,
        "atqhb": null,
        "atqx": null,
        "atqrp": 27,
        "atqri": 20,
        "atqrm": null,
        "atqtr": -25
      },
      "Acosta W.": {
        "sq": 0,
        "rec": null,
        "bqpos": 100,
        "bqpt": 0,
        "atqq": null,
        "atqhb": 67,
        "atqx": 0,
        "atqrp": 0,
        "atqri": null,
        "atqrm": 100,
        "atqtr": 33
      },
      "Diaz Bolli S.": {
        "sq": 0,
        "rec": null,
        "bqpos": null,
        "bqpt": null,
        "atqq": null,
        "atqhb": null,
        "atqx": null,
        "atqrp": null,
        "atqri": null,
        "atqrm": null,
        "atqtr": null
      }
    },
    "equipo_obj": {
      "sq": -3,
      "rec": 23,
      "bqpos": 53,
      "bqpt": 25,
      "atqq": 36,
      "atqhb": 32,
      "atqx": 20,
      "atqrp": 35,
      "atqri": 50,
      "atqrm": 6,
      "atqtr": 27
    }
  }
];

// Objetivos del equipo acumulado
const PARTIDOS_EQUIPO_OBJ = {"sq": -6, "rec": 33, "bqpos": 46, "bqpt": 20, "atqq": 43, "atqhb": 15, "atqx": 29, "atqrp": 35, "atqri": 42, "atqrm": 17, "atqtr": 21};
const PARTIDOS_VIDEOS = [];
const PARTIDOS_FEEDBACK = [{"partido": "UNTREF", "jugador": "NIELSON", "categoria": "ATAQUE", "texto": "Tu eficiencia en ataque rápida fue destacada. Mantené el timing de entrada para replicarlo en los próximos partidos.", "fecha": "01/05/2026"}];
