// datos_entrenamientos.js — 01/07/2026 10:00
const ENTRENAMIENTOS_GENERADO = "01/07/2026 10:00";
const ENTRENAMIENTOS_TOTAL = 3;
const ENTRENAMIENTOS_META = [
  {
    "nombre": "18-05",
    "rival": "Entrenamiento",
    "fecha": "18/05/2026",
    "torneo": "E",
    "resultado": "",
    "sets_casla": "",
    "sets_rival": ""
  },
  {
    "nombre": "19-05",
    "rival": "Entrenamiento",
    "fecha": "19/05/2026",
    "torneo": "E",
    "resultado": "",
    "sets_casla": "",
    "sets_rival": ""
  },
  {
    "nombre": "21-05",
    "rival": "Entrenamiento",
    "fecha": "21/05/2026",
    "torneo": "E",
    "resultado": "",
    "sets_casla": "",
    "sets_rival": ""
  }
];
const ENTRENAMIENTOS_JUGADORES = [
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
            "pct": 50
          },
          {
            "z": 6,
            "pct": 25
          },
          {
            "z": 4,
            "pct": 25
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
            "z": 1,
            "pct": 50
          },
          {
            "z": 7,
            "pct": 50
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
            "z": 6,
            "pct": 50
          },
          {
            "z": 1,
            "pct": 25
          },
          {
            "z": 8,
            "pct": 25
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
            "pct": 33
          },
          {
            "z": 7,
            "pct": 25
          },
          {
            "z": 5,
            "pct": 17
          },
          {
            "z": 1,
            "pct": 17
          },
          {
            "z": 8,
            "pct": 8
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
            "pct": 29
          },
          {
            "z": 1,
            "pct": 29
          },
          {
            "z": 7,
            "pct": 29
          },
          {
            "z": 5,
            "pct": 14
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
            "z": 1,
            "pct": 21
          },
          {
            "z": 9,
            "pct": 21
          },
          {
            "z": 7,
            "pct": 21
          },
          {
            "z": 6,
            "pct": 14
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
            "pct": 67
          },
          {
            "z": 5,
            "pct": 17
          }
        ],
        "eff": null,
        "tot": 6,
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
            "pct": 40
          },
          {
            "z": 1,
            "pct": 20
          },
          {
            "z": 6,
            "pct": 20
          },
          {
            "z": 9,
            "pct": 10
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
            "pct": 40
          },
          {
            "z": 5,
            "pct": 40
          },
          {
            "z": 1,
            "pct": 14
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
            "pct": 33
          },
          {
            "z": 7,
            "pct": 21
          },
          {
            "z": 1,
            "pct": 19
          },
          {
            "z": 8,
            "pct": 14
          },
          {
            "z": 9,
            "pct": 12
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
            "pct": 24
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
            "pct": 10
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
            "pct": 38
          },
          {
            "z": 9,
            "pct": 12
          },
          {
            "z": 2,
            "pct": 12
          },
          {
            "z": 6,
            "pct": 12
          }
        ],
        "eff": null,
        "tot": 8,
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
            "pct": 50
          },
          {
            "z": 6,
            "pct": 50
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
          },
          {
            "z": 9,
            "pct": 12
          },
          {
            "z": 1,
            "pct": 12
          },
          {
            "z": 7,
            "pct": 12
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
            "z": 5,
            "pct": 43
          },
          {
            "z": 1,
            "pct": 10
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
            "pct": 40
          },
          {
            "z": 2,
            "pct": 13
          },
          {
            "z": 7,
            "pct": 13
          },
          {
            "z": 9,
            "pct": 7
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
            "z": 1,
            "pct": 22
          },
          {
            "z": 4,
            "pct": 22
          },
          {
            "z": 6,
            "pct": 11
          },
          {
            "z": 5,
            "pct": 11
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
            "z": 6,
            "pct": 50
          },
          {
            "z": 7,
            "pct": 25
          },
          {
            "z": 8,
            "pct": 8
          },
          {
            "z": 9,
            "pct": 8
          },
          {
            "z": 5,
            "pct": 8
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
            "pct": 59
          },
          {
            "z": 1,
            "pct": 29
          },
          {
            "z": 5,
            "pct": 12
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
            "z": 9,
            "pct": 50
          },
          {
            "z": 6,
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
            "pct": 33
          },
          {
            "z": 8,
            "pct": 20
          },
          {
            "z": 7,
            "pct": 13
          },
          {
            "z": 1,
            "pct": 13
          },
          {
            "z": 5,
            "pct": 13
          },
          {
            "z": 9,
            "pct": 7
          }
        ],
        "eff": 0,
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

const ENTRENAMIENTOS_ARMADOR = {
  "titular": {
    "nombre": "Vazquez E.",
    "rotaciones": [
      {
        "pos": "P1",
        "total": 5,
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
        "total": 3,
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
        "total": 3,
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
        "total": 3,
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
        "total": 5,
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
        "total": 23,
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
        "total": 20,
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
        "total": 21,
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
        "total": 16,
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
        "total": 11,
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
const ENTRENAMIENTOS_INDIVIDUAL = [
  {
    "nombre": "18-05",
    "rival": "Entrenamiento",
    "fecha": "18/05/2026",
    "torneo": "E",
    "resultado": "",
    "sets_casla": "",
    "sets_rival": "",
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
    "nombre": "19-05",
    "rival": "Entrenamiento",
    "fecha": "19/05/2026",
    "torneo": "E",
    "resultado": "",
    "sets_casla": "",
    "sets_rival": "",
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
    "nombre": "21-05",
    "rival": "Entrenamiento",
    "fecha": "21/05/2026",
    "torneo": "E",
    "resultado": "",
    "sets_casla": "",
    "sets_rival": "",
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
  }
];

// Objetivos del equipo acumulado
const ENTRENAMIENTOS_EQUIPO_OBJ = {"sq": -6, "rec": 33, "bqpos": 46, "bqpt": 20, "atqq": 43, "atqhb": 15, "atqx": 29, "atqrp": 35, "atqri": 42, "atqrm": 17, "atqtr": 21};
