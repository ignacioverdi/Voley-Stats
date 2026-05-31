// datos_partidos.js — 31/05/2026 00:29
const PARTIDOS_GENERADO = "31/05/2026 00:29";
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
    "recepcion": {}
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
    "recepcion": {}
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
    "recepcion": {}
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
    "recepcion": {}
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
        "pts_pct": 48
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
        "recepcion": {}
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
        "recepcion": {}
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
        "recepcion": {}
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
        "recepcion": {}
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
    ]
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
        "recepcion": {}
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
        "recepcion": {}
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
        "recepcion": {}
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
        "recepcion": {}
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
    ]
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
        "recepcion": {}
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
        "recepcion": {}
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
        "recepcion": {}
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
        "recepcion": {}
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
    ]
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
        "recepcion": {}
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
        "recepcion": {}
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
        "recepcion": {}
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
        "recepcion": {}
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
    ]
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
        "recepcion": {}
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
        "recepcion": {}
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
        "recepcion": {}
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
        "recepcion": {}
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
    ]
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
        "recepcion": {}
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
        "recepcion": {}
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
        "recepcion": {}
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
        "recepcion": {}
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
    ]
  }
];
