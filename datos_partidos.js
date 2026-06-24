// datos_partidos.js — 24/06/2026, 13:35:08
const PARTIDOS_GENERADO = "24/06/2026, 13:35:08";
const PARTIDOS_TOTAL = 10;
const PARTIDOS_META = [
  {
    "id": "Untref__2026-05-01",
    "nombre": "Untref",
    "rival": "Untref",
    "fecha": "01/05/2026",
    "torneo": "NLA Suiza 2026",
    "resultado": "V",
    "sets_nafels": "3",
    "sets_rival": "1"
  },
  {
    "id": "Ciudad__2026-05-05",
    "nombre": "Ciudad",
    "rival": "Ciudad",
    "fecha": "05/05/2026",
    "torneo": "NLA Suiza 2026",
    "resultado": "D",
    "sets_nafels": "0",
    "sets_rival": "3"
  },
  {
    "id": "Ferro__2026-05-08",
    "nombre": "Ferro",
    "rival": "Ferro",
    "fecha": "08/05/2026",
    "torneo": "NLA Suiza 2026",
    "resultado": "D",
    "sets_nafels": "1",
    "sets_rival": "3"
  },
  {
    "id": "Hacoaj__2026-05-16",
    "nombre": "Hacoaj",
    "rival": "Hacoaj",
    "fecha": "16/05/2026",
    "torneo": "NLA Suiza 2026",
    "resultado": "V",
    "sets_nafels": "3",
    "sets_rival": "1"
  },
  {
    "id": "Velez__2026-05-22",
    "nombre": "Velez",
    "rival": "Velez",
    "fecha": "22/05/2026",
    "torneo": "NLA Suiza 2026",
    "resultado": "V",
    "sets_nafels": "3",
    "sets_rival": "2"
  },
  {
    "id": "Defensores__2026-05-26",
    "nombre": "Defensores",
    "rival": "Defensores",
    "fecha": "26/05/2026",
    "torneo": "NLA Suiza 2026",
    "resultado": "D",
    "sets_nafels": "2",
    "sets_rival": "3"
  },
  {
    "id": "Lomas__2026-05-30",
    "nombre": "Lomas",
    "rival": "Lomas",
    "fecha": "30/05/2026",
    "torneo": "NLA Suiza 2026",
    "resultado": "V",
    "sets_nafels": "3",
    "sets_rival": "2"
  },
  {
    "id": "UBA__2026-06-09",
    "nombre": "UBA",
    "rival": "UBA",
    "fecha": "09/06/2026",
    "torneo": "NLA Suiza 2026",
    "resultado": "V",
    "sets_nafels": "3",
    "sets_rival": "1"
  },
  {
    "id": "Campana__2026-06-13",
    "nombre": "Campana",
    "rival": "Campana",
    "fecha": "13/06/2026",
    "torneo": "NLA Suiza 2026",
    "resultado": "V",
    "sets_nafels": "3",
    "sets_rival": "1"
  },
  {
    "id": "Boca__2026-06-19",
    "nombre": "Boca",
    "rival": "Boca",
    "fecha": "19/06/2026",
    "torneo": "NLA Suiza 2026",
    "resultado": "V",
    "sets_nafels": "3",
    "sets_rival": "0"
  }
];
const PARTIDOS_JUGADORES = [
  {
    "num": 1,
    "nombre": "1 Salazar Imanol",
    "pos": "CENTRAL",
    "color": "#22c55e",
    "info": {},
    "ataques": [
      {
        "cod": "X7",
        "tipo": "",
        "orig": 3,
        "destinos": [
          {
            "z": 3,
            "pct": 29
          },
          {
            "z": 1,
            "pct": 12
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
        "eff": 44,
        "tot": 18,
        "pts": 11,
        "slash": 2,
        "err": 1,
        "video": null,
        "pts_pct": 61
      },
      {
        "cod": "XM",
        "tipo": "",
        "orig": 3,
        "destinos": [
          {
            "z": 1,
            "pct": 27
          },
          {
            "z": 9,
            "pct": 27
          },
          {
            "z": 3,
            "pct": 20
          },
          {
            "z": 6,
            "pct": 13
          }
        ],
        "eff": 56,
        "tot": 16,
        "pts": 10,
        "slash": 0,
        "err": 1,
        "video": null,
        "pts_pct": 62
      },
      {
        "cod": "X1",
        "tipo": "",
        "orig": 3,
        "destinos": [
          {
            "z": 5,
            "pct": 50
          },
          {
            "z": 3,
            "pct": 50
          }
        ],
        "eff": 0,
        "tot": 2,
        "pts": 1,
        "slash": 0,
        "err": 1,
        "video": null,
        "pts_pct": 50
      },
      {
        "cod": "PR",
        "tipo": "",
        "orig": 8,
        "destinos": [
          {
            "z": 3,
            "pct": 100
          }
        ],
        "eff": 0,
        "tot": 1,
        "pts": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "X6",
        "tipo": "",
        "orig": 2,
        "destinos": [
          {
            "z": 3,
            "pct": 100
          }
        ],
        "eff": 0,
        "tot": 1,
        "pts": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "X2",
        "tipo": "",
        "orig": 3,
        "destinos": [
          {
            "z": 7,
            "pct": 100
          }
        ],
        "eff": 0,
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
        "destinos": [
          {
            "z": 1,
            "pct": 29
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
            "pct": 14
          },
          {
            "z": 5,
            "pct": 10
          },
          {
            "z": 3,
            "pct": 5
          }
        ],
        "eff": -5,
        "tot": 21,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 1,
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
            "z": 1,
            "pct": 43
          },
          {
            "z": 5,
            "pct": 7
          }
        ],
        "eff": -29,
        "tot": 14,
        "pts": 3,
        "plus": 0,
        "slash": 0,
        "err": 7,
        "video": null,
        "pts_pct": 21
      }
    ],
    "recepciones": [],
    "recepcion": {
      "flotado": {
        "desde_z1": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 1,
            "eff": 100,
            "pos": 100,
            "neg": 0,
            "pt": 1,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 1,
            "eff": 100,
            "pos": 100,
            "neg": 0,
            "pt": 1,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 1,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 1,
            "eff": 100,
            "pos": 100,
            "neg": 0,
            "pt": 1,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 2,
            "eff": 50,
            "pos": 50,
            "neg": 0,
            "pt": 1,
            "mas": 0,
            "neu": 0,
            "med": 1,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        }
      }
    },
    "objetivos": {
      "sq": -11,
      "rec": 67,
      "bqpos": 51,
      "bqpt": 27,
      "atk": 44,
      "atqq": 46,
      "atqhb": null,
      "atqx": null,
      "atqrp": 53,
      "atqri": 20,
      "atqrm": null,
      "atqtr": 40
    },
    "tot_saques": 35,
    "tot_recep": 3,
    "tot_ataques": 37
  },
  {
    "num": 2,
    "nombre": "2 Ojuez Agustin",
    "pos": "CENTRAL",
    "color": "#22c55e",
    "info": {},
    "ataques": [
      {
        "cod": "XM",
        "tipo": "",
        "orig": 3,
        "destinos": [
          {
            "z": 6,
            "pct": 26
          },
          {
            "z": 1,
            "pct": 26
          },
          {
            "z": 3,
            "pct": 15
          },
          {
            "z": 5,
            "pct": 12
          }
        ],
        "eff": 49,
        "tot": 35,
        "pts": 21,
        "slash": 1,
        "err": 3,
        "video": null,
        "pts_pct": 60
      },
      {
        "cod": "X1",
        "tipo": "",
        "orig": 3,
        "destinos": [
          {
            "z": 5,
            "pct": 34
          },
          {
            "z": 6,
            "pct": 31
          },
          {
            "z": 3,
            "pct": 14
          },
          {
            "z": 7,
            "pct": 11
          }
        ],
        "eff": 54,
        "tot": 35,
        "pts": 22,
        "slash": 1,
        "err": 2,
        "video": null,
        "pts_pct": 63
      },
      {
        "cod": "X7",
        "tipo": "",
        "orig": 3,
        "destinos": [
          {
            "z": 6,
            "pct": 31
          },
          {
            "z": 7,
            "pct": 15
          },
          {
            "z": 1,
            "pct": 15
          },
          {
            "z": 8,
            "pct": 15
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
        "cod": "X2",
        "tipo": "",
        "orig": 3,
        "destinos": [
          {
            "z": 9,
            "pct": 40
          },
          {
            "z": 6,
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
        "eff": 40,
        "tot": 5,
        "pts": 3,
        "slash": 0,
        "err": 1,
        "video": null,
        "pts_pct": 60
      },
      {
        "cod": "PR",
        "tipo": "",
        "orig": 8,
        "destinos": [
          {
            "z": 3,
            "pct": 100
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
        "cod": "X6",
        "tipo": "",
        "orig": 2,
        "destinos": [
          {
            "z": 4,
            "pct": 50
          },
          {
            "z": 3,
            "pct": 50
          }
        ],
        "eff": 0,
        "tot": 2,
        "pts": 1,
        "slash": 1,
        "err": 0,
        "video": null,
        "pts_pct": 50
      },
      {
        "cod": "P2",
        "tipo": "",
        "orig": 8,
        "destinos": [],
        "eff": -100,
        "tot": 1,
        "pts": 0,
        "slash": 0,
        "err": 1,
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
            "pct": 34
          },
          {
            "z": 1,
            "pct": 23
          },
          {
            "z": 5,
            "pct": 18
          },
          {
            "z": 7,
            "pct": 13
          },
          {
            "z": 8,
            "pct": 7
          },
          {
            "z": 9,
            "pct": 5
          }
        ],
        "eff": -15,
        "tot": 61,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 9,
        "video": null,
        "pts_pct": 0
      }
    ],
    "recepciones": [],
    "recepcion": {
      "flotado": {
        "desde_z1": {
          "P5": {
            "tot": 2,
            "eff": 25,
            "pos": 50,
            "neg": 50,
            "pt": 1,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 1,
            "err": 0
          },
          "P6": {
            "tot": 3,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 2,
            "med": 1,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 5,
            "eff": 10,
            "pos": 20,
            "neg": 20,
            "pt": 1,
            "mas": 0,
            "neu": 2,
            "med": 1,
            "ovp": 1,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 1,
            "eff": 50,
            "pos": 100,
            "neg": 0,
            "pt": 0,
            "mas": 1,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 1,
            "eff": 50,
            "pos": 100,
            "neg": 0,
            "pt": 0,
            "mas": 1,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        }
      }
    },
    "objetivos": {
      "sq": -11,
      "rec": 17,
      "bqpos": 59,
      "bqpt": 32,
      "atk": 51,
      "atqq": 53,
      "atqhb": null,
      "atqx": -100,
      "atqrp": 52,
      "atqri": 75,
      "atqrm": 67,
      "atqtr": 33
    },
    "tot_saques": 61,
    "tot_recep": 6,
    "tot_ataques": 88
  },
  {
    "num": 3,
    "nombre": "3 Romeo Winer Agustin",
    "pos": "LIBERO",
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
            "pct": 33
          },
          {
            "z": 6,
            "pct": 17
          }
        ],
        "eff": -17,
        "tot": 6,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 1,
        "video": null,
        "pts_pct": 0
      }
    ],
    "recepciones": [],
    "recepcion": {
      "flotado": {
        "desde_z1": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 9,
            "eff": 28,
            "pos": 56,
            "neg": 22,
            "pt": 2,
            "mas": 3,
            "neu": 2,
            "med": 0,
            "ovp": 2,
            "err": 0
          },
          "P1": {
            "tot": 3,
            "eff": 17,
            "pos": 33,
            "neg": 33,
            "pt": 1,
            "mas": 0,
            "neu": 0,
            "med": 1,
            "ovp": 1,
            "err": 0
          },
          "total": {
            "tot": 12,
            "eff": 25,
            "pos": 50,
            "neg": 25,
            "pt": 3,
            "mas": 3,
            "neu": 2,
            "med": 1,
            "ovp": 3,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 7,
            "eff": -36,
            "pos": 14,
            "neg": 43,
            "pt": 0,
            "mas": 1,
            "neu": 2,
            "med": 1,
            "ovp": 0,
            "err": 3
          },
          "P1": {
            "tot": 1,
            "eff": 50,
            "pos": 100,
            "neg": 0,
            "pt": 0,
            "mas": 1,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 8,
            "eff": -25,
            "pos": 25,
            "neg": 38,
            "pt": 0,
            "mas": 2,
            "neu": 2,
            "med": 1,
            "ovp": 0,
            "err": 3
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 9,
            "eff": 22,
            "pos": 33,
            "neg": 0,
            "pt": 1,
            "mas": 2,
            "neu": 1,
            "med": 5,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 1,
            "eff": 50,
            "pos": 100,
            "neg": 0,
            "pt": 0,
            "mas": 1,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 1,
            "eff": 50,
            "pos": 100,
            "neg": 0,
            "pt": 0,
            "mas": 1,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "P5": {
            "tot": 1,
            "eff": -50,
            "pos": 0,
            "neg": 100,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 1,
            "err": 0
          },
          "P6": {
            "tot": 6,
            "eff": 25,
            "pos": 50,
            "neg": 0,
            "pt": 0,
            "mas": 3,
            "neu": 2,
            "med": 1,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 7,
            "eff": 14,
            "pos": 43,
            "neg": 14,
            "pt": 0,
            "mas": 3,
            "neu": 2,
            "med": 1,
            "ovp": 1,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 2,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 2,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 1,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 3,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 1,
            "med": 2,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 1,
            "eff": 100,
            "pos": 100,
            "neg": 0,
            "pt": 1,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 2,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 2,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 3,
            "eff": 33,
            "pos": 33,
            "neg": 0,
            "pt": 1,
            "mas": 0,
            "neu": 2,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        }
      }
    },
    "objetivos": {
      "sq": -17,
      "rec": 13,
      "bqpos": null,
      "bqpt": null,
      "atk": null,
      "atqq": null,
      "atqhb": null,
      "atqx": null,
      "atqrp": null,
      "atqri": null,
      "atqrm": null,
      "atqtr": null
    },
    "tot_saques": 6,
    "tot_recep": 67,
    "tot_ataques": 0
  },
  {
    "num": 4,
    "nombre": "4 Vazquez Ezequiel",
    "pos": "ARMADOR",
    "color": "#a855f7",
    "info": {},
    "ataques": [
      {
        "cod": "P2",
        "tipo": "",
        "orig": 8,
        "destinos": [
          {
            "z": 4,
            "pct": 44
          },
          {
            "z": 3,
            "pct": 33
          },
          {
            "z": 2,
            "pct": 11
          },
          {
            "z": 8,
            "pct": 11
          }
        ],
        "eff": 11,
        "tot": 9,
        "pts": 3,
        "slash": 2,
        "err": 0,
        "video": null,
        "pts_pct": 33
      },
      {
        "cod": "XM",
        "tipo": "",
        "orig": 3,
        "destinos": [
          {
            "z": 4,
            "pct": 38
          },
          {
            "z": 7,
            "pct": 25
          },
          {
            "z": 8,
            "pct": 12
          },
          {
            "z": 9,
            "pct": 12
          }
        ],
        "eff": 33,
        "tot": 9,
        "pts": 4,
        "slash": 1,
        "err": 0,
        "video": null,
        "pts_pct": 44
      },
      {
        "cod": "V6",
        "tipo": "",
        "orig": 2,
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
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "V8",
        "tipo": "",
        "orig": 9,
        "destinos": [
          {
            "z": 5,
            "pct": 100
          }
        ],
        "eff": 0,
        "tot": 1,
        "pts": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "X6",
        "tipo": "",
        "orig": 2,
        "destinos": [
          {
            "z": 6,
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
            "pct": 36
          },
          {
            "z": 1,
            "pct": 28
          },
          {
            "z": 8,
            "pct": 9
          },
          {
            "z": 7,
            "pct": 9
          },
          {
            "z": 5,
            "pct": 9
          },
          {
            "z": 9,
            "pct": 9
          }
        ],
        "eff": 2,
        "tot": 141,
        "pts": 11,
        "plus": 0,
        "slash": 0,
        "err": 8,
        "video": null,
        "pts_pct": 8
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
            "z": 1,
            "pct": 50
          }
        ],
        "eff": -50,
        "tot": 2,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 1,
        "video": null,
        "pts_pct": 0
      }
    ],
    "recepciones": [],
    "recepcion": {
      "flotado": {
        "desde_z1": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 1,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 1,
            "ovp": 0,
            "err": 0
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 2,
            "eff": -50,
            "pos": 0,
            "neg": 50,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 1,
            "ovp": 0,
            "err": 1
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 2,
            "eff": -50,
            "pos": 0,
            "neg": 50,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 1,
            "ovp": 0,
            "err": 1
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 1,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 1,
            "ovp": 0,
            "err": 0
          }
        }
      }
    },
    "objetivos": {
      "sq": 5,
      "rec": -25,
      "bqpos": 42,
      "bqpt": 6,
      "atk": 23,
      "atqq": null,
      "atqhb": 0,
      "atqx": null,
      "atqrp": 50,
      "atqri": 0,
      "atqrm": -33,
      "atqtr": 33
    },
    "tot_saques": 143,
    "tot_recep": 4,
    "tot_ataques": 3
  },
  {
    "num": 5,
    "nombre": "5 Ramos Iaki",
    "pos": "OPUESTO",
    "color": "#ef4444",
    "info": {},
    "ataques": [
      {
        "cod": "X6",
        "tipo": "",
        "orig": 2,
        "destinos": [
          {
            "z": 4,
            "pct": 29
          },
          {
            "z": 1,
            "pct": 27
          },
          {
            "z": 6,
            "pct": 20
          },
          {
            "z": 9,
            "pct": 7
          }
        ],
        "eff": 27,
        "tot": 56,
        "pts": 22,
        "slash": 3,
        "err": 4,
        "video": null,
        "pts_pct": 39
      },
      {
        "cod": "V6",
        "tipo": "",
        "orig": 2,
        "destinos": [
          {
            "z": 4,
            "pct": 35
          },
          {
            "z": 1,
            "pct": 30
          },
          {
            "z": 6,
            "pct": 15
          },
          {
            "z": 5,
            "pct": 8
          }
        ],
        "eff": 18,
        "tot": 44,
        "pts": 18,
        "slash": 5,
        "err": 5,
        "video": null,
        "pts_pct": 41
      },
      {
        "cod": "X8",
        "tipo": "",
        "orig": 9,
        "destinos": [
          {
            "z": 5,
            "pct": 40
          },
          {
            "z": 4,
            "pct": 26
          },
          {
            "z": 1,
            "pct": 20
          },
          {
            "z": 6,
            "pct": 11
          }
        ],
        "eff": 22,
        "tot": 37,
        "pts": 18,
        "slash": 5,
        "err": 5,
        "video": null,
        "pts_pct": 49
      },
      {
        "cod": "V8",
        "tipo": "",
        "orig": 9,
        "destinos": [
          {
            "z": 1,
            "pct": 32
          },
          {
            "z": 4,
            "pct": 32
          },
          {
            "z": 5,
            "pct": 16
          },
          {
            "z": 6,
            "pct": 11
          }
        ],
        "eff": 47,
        "tot": 19,
        "pts": 11,
        "slash": 2,
        "err": 0,
        "video": null,
        "pts_pct": 58
      },
      {
        "cod": "PR",
        "tipo": "",
        "orig": 8,
        "destinos": [],
        "eff": 100,
        "tot": 2,
        "pts": 2,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 100
      },
      {
        "cod": "X5",
        "tipo": "",
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
        "cod": "V5",
        "tipo": "",
        "orig": 4,
        "destinos": [
          {
            "z": 2,
            "pct": 100
          }
        ],
        "eff": 0,
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
        "cod": "SQ",
        "tipo": "POTENCIA",
        "orig": 6,
        "destinos": [
          {
            "z": 5,
            "pct": 38
          },
          {
            "z": 6,
            "pct": 30
          },
          {
            "z": 1,
            "pct": 25
          },
          {
            "z": 9,
            "pct": 4
          },
          {
            "z": 7,
            "pct": 2
          },
          {
            "z": 4,
            "pct": 2
          }
        ],
        "eff": -35,
        "tot": 57,
        "pts": 4,
        "plus": 0,
        "slash": 0,
        "err": 24,
        "video": null,
        "pts_pct": 7
      },
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
        "err": 1,
        "video": null,
        "pts_pct": 0
      }
    ],
    "recepciones": [],
    "recepcion": {
      "flotado": {
        "desde_z1": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 1,
            "eff": 50,
            "pos": 100,
            "neg": 0,
            "pt": 0,
            "mas": 1,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 1,
            "eff": 50,
            "pos": 100,
            "neg": 0,
            "pt": 0,
            "mas": 1,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 1,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 1,
            "ovp": 0,
            "err": 0
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        }
      }
    },
    "objetivos": {
      "sq": -31,
      "rec": 25,
      "bqpos": 40,
      "bqpt": 17,
      "atk": 27,
      "atqq": null,
      "atqhb": 27,
      "atqx": 26,
      "atqrp": 30,
      "atqri": 14,
      "atqrm": 21,
      "atqtr": 32
    },
    "tot_saques": 59,
    "tot_recep": 2,
    "tot_ataques": 157
  },
  {
    "num": 6,
    "nombre": "6 Villarruel Juan Simon",
    "pos": "PUNTA",
    "color": "#3b82f6",
    "info": {},
    "ataques": [
      {
        "cod": "X5",
        "tipo": "",
        "orig": 4,
        "destinos": [
          {
            "z": 2,
            "pct": 44
          },
          {
            "z": 1,
            "pct": 22
          },
          {
            "z": 3,
            "pct": 11
          },
          {
            "z": 6,
            "pct": 11
          }
        ],
        "eff": -22,
        "tot": 9,
        "pts": 1,
        "slash": 2,
        "err": 1,
        "video": null,
        "pts_pct": 11
      }
    ],
    "saques": [
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
            "z": 3,
            "pct": 14
          },
          {
            "z": 5,
            "pct": 14
          }
        ],
        "eff": -29,
        "tot": 7,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 2,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "SM",
        "tipo": "FLOTADO",
        "orig": 6,
        "destinos": [
          {
            "z": 1,
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
    "recepciones": [],
    "recepcion": {
      "flotado": {
        "desde_z1": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 2,
            "eff": 25,
            "pos": 50,
            "neg": 0,
            "pt": 0,
            "mas": 1,
            "neu": 1,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 2,
            "eff": 25,
            "pos": 50,
            "neg": 0,
            "pt": 0,
            "mas": 1,
            "neu": 1,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 1,
            "eff": 50,
            "pos": 100,
            "neg": 0,
            "pt": 0,
            "mas": 1,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 1,
            "eff": 50,
            "pos": 100,
            "neg": 0,
            "pt": 0,
            "mas": 1,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 1,
            "eff": 100,
            "pos": 100,
            "neg": 0,
            "pt": 1,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 1,
            "eff": 100,
            "pos": 100,
            "neg": 0,
            "pt": 1,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 1,
            "eff": 100,
            "pos": 100,
            "neg": 0,
            "pt": 1,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 1,
            "eff": 100,
            "pos": 100,
            "neg": 0,
            "pt": 1,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        }
      }
    },
    "objetivos": {
      "sq": -19,
      "rec": 60,
      "bqpos": 100,
      "bqpt": 0,
      "atk": -22,
      "atqq": null,
      "atqhb": null,
      "atqx": -22,
      "atqrp": 0,
      "atqri": 0,
      "atqrm": null,
      "atqtr": -33
    },
    "tot_saques": 8,
    "tot_recep": 5,
    "tot_ataques": 9
  },
  {
    "num": 9,
    "nombre": "9 Godoy Martin",
    "pos": "ARMADOR",
    "color": "#a855f7",
    "info": {},
    "ataques": [
      {
        "cod": "P2",
        "tipo": "",
        "orig": 8,
        "destinos": [
          {
            "z": 4,
            "pct": 100
          }
        ],
        "eff": 0,
        "tot": 3,
        "pts": 1,
        "slash": 1,
        "err": 0,
        "video": null,
        "pts_pct": 33
      },
      {
        "cod": "PR",
        "tipo": "",
        "orig": 8,
        "destinos": [
          {
            "z": 6,
            "pct": 50
          },
          {
            "z": 3,
            "pct": 50
          }
        ],
        "eff": 0,
        "tot": 2,
        "pts": 1,
        "slash": 0,
        "err": 1,
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
            "pct": 26
          },
          {
            "z": 1,
            "pct": 21
          },
          {
            "z": 7,
            "pct": 19
          },
          {
            "z": 8,
            "pct": 12
          },
          {
            "z": 9,
            "pct": 11
          },
          {
            "z": 5,
            "pct": 5
          }
        ],
        "eff": -4,
        "tot": 57,
        "pts": 2,
        "plus": 0,
        "slash": 0,
        "err": 4,
        "video": null,
        "pts_pct": 4
      }
    ],
    "recepciones": [],
    "recepcion": {
      "flotado": {
        "desde_z1": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 1,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 1,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 2,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 2,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 2,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 2,
            "ovp": 0,
            "err": 0
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 1,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 1,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        }
      }
    },
    "objetivos": {
      "sq": 0,
      "rec": 0,
      "bqpos": 42,
      "bqpt": 8,
      "atk": 0,
      "atqq": null,
      "atqhb": null,
      "atqx": null,
      "atqrp": 100,
      "atqri": -100,
      "atqrm": null,
      "atqtr": 0
    },
    "tot_saques": 57,
    "tot_recep": 4,
    "tot_ataques": 0
  },
  {
    "num": 11,
    "nombre": "11 Durdos Valentin",
    "pos": "PUNTA",
    "color": "#3b82f6",
    "info": {},
    "ataques": [
      {
        "cod": "X5",
        "tipo": "",
        "orig": 4,
        "destinos": [
          {
            "z": 2,
            "pct": 40
          },
          {
            "z": 7,
            "pct": 16
          },
          {
            "z": 6,
            "pct": 13
          },
          {
            "z": 1,
            "pct": 9
          }
        ],
        "eff": 41,
        "tot": 174,
        "pts": 90,
        "slash": 7,
        "err": 11,
        "video": null,
        "pts_pct": 52
      },
      {
        "cod": "V5",
        "tipo": "",
        "orig": 4,
        "destinos": [
          {
            "z": 2,
            "pct": 47
          },
          {
            "z": 1,
            "pct": 14
          },
          {
            "z": 5,
            "pct": 10
          },
          {
            "z": 6,
            "pct": 8
          }
        ],
        "eff": 16,
        "tot": 92,
        "pts": 31,
        "slash": 7,
        "err": 9,
        "video": null,
        "pts_pct": 34
      },
      {
        "cod": "XP",
        "tipo": "",
        "orig": 8,
        "destinos": [
          {
            "z": 1,
            "pct": 38
          },
          {
            "z": 3,
            "pct": 23
          },
          {
            "z": 6,
            "pct": 19
          },
          {
            "z": 5,
            "pct": 15
          }
        ],
        "eff": 27,
        "tot": 30,
        "pts": 15,
        "slash": 1,
        "err": 6,
        "video": null,
        "pts_pct": 50
      },
      {
        "cod": "PR",
        "tipo": "",
        "orig": 8,
        "destinos": [
          {
            "z": 3,
            "pct": 33
          },
          {
            "z": 2,
            "pct": 33
          },
          {
            "z": 7,
            "pct": 33
          }
        ],
        "eff": 71,
        "tot": 7,
        "pts": 5,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 71
      },
      {
        "cod": "X6",
        "tipo": "",
        "orig": 2,
        "destinos": [
          {
            "z": 2,
            "pct": 33
          },
          {
            "z": 8,
            "pct": 33
          },
          {
            "z": 3,
            "pct": 33
          }
        ],
        "eff": 40,
        "tot": 5,
        "pts": 3,
        "slash": 0,
        "err": 1,
        "video": null,
        "pts_pct": 60
      },
      {
        "cod": "VP",
        "tipo": "",
        "orig": 8,
        "destinos": [
          {
            "z": 5,
            "pct": 33
          },
          {
            "z": 4,
            "pct": 33
          },
          {
            "z": 7,
            "pct": 33
          }
        ],
        "eff": 0,
        "tot": 4,
        "pts": 1,
        "slash": 0,
        "err": 1,
        "video": null,
        "pts_pct": 25
      }
    ],
    "saques": [
      {
        "cod": "SQ",
        "tipo": "POTENCIA",
        "orig": 6,
        "destinos": [
          {
            "z": 6,
            "pct": 38
          },
          {
            "z": 5,
            "pct": 33
          },
          {
            "z": 1,
            "pct": 22
          },
          {
            "z": 8,
            "pct": 3
          },
          {
            "z": 3,
            "pct": 3
          },
          {
            "z": 2,
            "pct": 1
          }
        ],
        "eff": -23,
        "tot": 69,
        "pts": 9,
        "plus": 0,
        "slash": 0,
        "err": 25,
        "video": null,
        "pts_pct": 13
      },
      {
        "cod": "SM",
        "tipo": "FLOTADO",
        "orig": 6,
        "destinos": [
          {
            "z": 1,
            "pct": 22
          },
          {
            "z": 6,
            "pct": 20
          },
          {
            "z": 5,
            "pct": 19
          },
          {
            "z": 9,
            "pct": 16
          },
          {
            "z": 7,
            "pct": 16
          },
          {
            "z": 8,
            "pct": 8
          }
        ],
        "eff": -6,
        "tot": 64,
        "pts": 1,
        "plus": 0,
        "slash": 0,
        "err": 5,
        "video": null,
        "pts_pct": 2
      }
    ],
    "recepciones": [],
    "recepcion": {
      "flotado": {
        "desde_z1": {
          "P5": {
            "tot": 16,
            "eff": 47,
            "pos": 88,
            "neg": 6,
            "pt": 2,
            "mas": 12,
            "neu": 1,
            "med": 0,
            "ovp": 1,
            "err": 0
          },
          "P6": {
            "tot": 21,
            "eff": 43,
            "pos": 62,
            "neg": 5,
            "pt": 7,
            "mas": 6,
            "neu": 6,
            "med": 1,
            "ovp": 0,
            "err": 1
          },
          "P1": {
            "tot": 11,
            "eff": 55,
            "pos": 82,
            "neg": 0,
            "pt": 3,
            "mas": 6,
            "neu": 2,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 48,
            "eff": 47,
            "pos": 75,
            "neg": 4,
            "pt": 12,
            "mas": 24,
            "neu": 9,
            "med": 1,
            "ovp": 1,
            "err": 1
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 8,
            "eff": 25,
            "pos": 38,
            "neg": 0,
            "pt": 1,
            "mas": 2,
            "neu": 4,
            "med": 1,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 10,
            "eff": 55,
            "pos": 70,
            "neg": 0,
            "pt": 4,
            "mas": 3,
            "neu": 2,
            "med": 1,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 4,
            "eff": 25,
            "pos": 25,
            "neg": 0,
            "pt": 1,
            "mas": 0,
            "neu": 1,
            "med": 2,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 22,
            "eff": 39,
            "pos": 50,
            "neg": 0,
            "pt": 6,
            "mas": 5,
            "neu": 7,
            "med": 4,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 23,
            "eff": 50,
            "pos": 78,
            "neg": 0,
            "pt": 5,
            "mas": 13,
            "neu": 1,
            "med": 4,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 24,
            "eff": 54,
            "pos": 79,
            "neg": 4,
            "pt": 8,
            "mas": 11,
            "neu": 3,
            "med": 1,
            "ovp": 1,
            "err": 0
          },
          "P1": {
            "tot": 2,
            "eff": 25,
            "pos": 50,
            "neg": 0,
            "pt": 0,
            "mas": 1,
            "neu": 1,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 49,
            "eff": 51,
            "pos": 78,
            "neg": 2,
            "pt": 13,
            "mas": 25,
            "neu": 5,
            "med": 5,
            "ovp": 1,
            "err": 0
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "P5": {
            "tot": 18,
            "eff": -3,
            "pos": 28,
            "neg": 28,
            "pt": 3,
            "mas": 2,
            "neu": 3,
            "med": 5,
            "ovp": 1,
            "err": 4
          },
          "P6": {
            "tot": 14,
            "eff": 29,
            "pos": 50,
            "neg": 7,
            "pt": 3,
            "mas": 4,
            "neu": 3,
            "med": 3,
            "ovp": 0,
            "err": 1
          },
          "P1": {
            "tot": 3,
            "eff": 33,
            "pos": 67,
            "neg": 0,
            "pt": 0,
            "mas": 2,
            "neu": 1,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 35,
            "eff": 13,
            "pos": 40,
            "neg": 17,
            "pt": 6,
            "mas": 8,
            "neu": 7,
            "med": 8,
            "ovp": 1,
            "err": 5
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 11,
            "eff": 36,
            "pos": 55,
            "neg": 9,
            "pt": 3,
            "mas": 3,
            "neu": 1,
            "med": 3,
            "ovp": 1,
            "err": 0
          },
          "P6": {
            "tot": 20,
            "eff": 40,
            "pos": 55,
            "neg": 10,
            "pt": 8,
            "mas": 3,
            "neu": 4,
            "med": 3,
            "ovp": 1,
            "err": 1
          },
          "P1": {
            "tot": 2,
            "eff": 25,
            "pos": 50,
            "neg": 0,
            "pt": 0,
            "mas": 1,
            "neu": 0,
            "med": 1,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 33,
            "eff": 38,
            "pos": 55,
            "neg": 9,
            "pt": 11,
            "mas": 7,
            "neu": 5,
            "med": 7,
            "ovp": 2,
            "err": 1
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 8,
            "eff": 25,
            "pos": 38,
            "neg": 12,
            "pt": 2,
            "mas": 1,
            "neu": 4,
            "med": 0,
            "ovp": 1,
            "err": 0
          },
          "P6": {
            "tot": 14,
            "eff": 21,
            "pos": 43,
            "neg": 7,
            "pt": 1,
            "mas": 5,
            "neu": 5,
            "med": 2,
            "ovp": 1,
            "err": 0
          },
          "P1": {
            "tot": 2,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 1,
            "med": 1,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 24,
            "eff": 21,
            "pos": 38,
            "neg": 8,
            "pt": 3,
            "mas": 6,
            "neu": 10,
            "med": 3,
            "ovp": 2,
            "err": 0
          }
        }
      }
    },
    "objetivos": {
      "sq": -11,
      "rec": 37,
      "bqpos": 40,
      "bqpt": 14,
      "atk": 33,
      "atqq": null,
      "atqhb": 16,
      "atqx": 41,
      "atqrp": 43,
      "atqri": 70,
      "atqrm": 12,
      "atqtr": 24
    },
    "tot_saques": 133,
    "tot_recep": 211,
    "tot_ataques": 283
  },
  {
    "num": 12,
    "nombre": "12 Zanotti Juan Cruz",
    "pos": "LIBERO",
    "color": "#f59e0b",
    "info": {},
    "ataques": [],
    "saques": [],
    "recepciones": [],
    "recepcion": {
      "flotado": {
        "desde_z1": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 15,
            "eff": 57,
            "pos": 80,
            "neg": 7,
            "pt": 6,
            "mas": 6,
            "neu": 1,
            "med": 1,
            "ovp": 1,
            "err": 0
          },
          "P1": {
            "tot": 17,
            "eff": 56,
            "pos": 82,
            "neg": 0,
            "pt": 5,
            "mas": 9,
            "neu": 1,
            "med": 2,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 32,
            "eff": 56,
            "pos": 81,
            "neg": 3,
            "pt": 11,
            "mas": 15,
            "neu": 2,
            "med": 3,
            "ovp": 1,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 2,
            "eff": 50,
            "pos": 100,
            "neg": 0,
            "pt": 0,
            "mas": 2,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 11,
            "eff": 36,
            "pos": 55,
            "neg": 9,
            "pt": 4,
            "mas": 2,
            "neu": 4,
            "med": 0,
            "ovp": 0,
            "err": 1
          },
          "P1": {
            "tot": 6,
            "eff": 75,
            "pos": 100,
            "neg": 0,
            "pt": 3,
            "mas": 3,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 19,
            "eff": 50,
            "pos": 74,
            "neg": 5,
            "pt": 7,
            "mas": 7,
            "neu": 4,
            "med": 0,
            "ovp": 0,
            "err": 1
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 4,
            "eff": 25,
            "pos": 50,
            "neg": 0,
            "pt": 0,
            "mas": 2,
            "neu": 1,
            "med": 1,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 26,
            "eff": 60,
            "pos": 77,
            "neg": 4,
            "pt": 12,
            "mas": 8,
            "neu": 4,
            "med": 1,
            "ovp": 1,
            "err": 0
          },
          "P1": {
            "tot": 32,
            "eff": 44,
            "pos": 66,
            "neg": 9,
            "pt": 12,
            "mas": 9,
            "neu": 4,
            "med": 4,
            "ovp": 1,
            "err": 2
          },
          "total": {
            "tot": 62,
            "eff": 49,
            "pos": 69,
            "neg": 6,
            "pt": 24,
            "mas": 19,
            "neu": 9,
            "med": 6,
            "ovp": 2,
            "err": 2
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 24,
            "eff": 12,
            "pos": 29,
            "neg": 8,
            "pt": 2,
            "mas": 5,
            "neu": 11,
            "med": 4,
            "ovp": 1,
            "err": 1
          },
          "P1": {
            "tot": 23,
            "eff": 4,
            "pos": 13,
            "neg": 9,
            "pt": 2,
            "mas": 1,
            "neu": 12,
            "med": 6,
            "ovp": 1,
            "err": 1
          },
          "total": {
            "tot": 47,
            "eff": 9,
            "pos": 21,
            "neg": 9,
            "pt": 4,
            "mas": 6,
            "neu": 23,
            "med": 10,
            "ovp": 2,
            "err": 2
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 5,
            "eff": 30,
            "pos": 60,
            "neg": 20,
            "pt": 2,
            "mas": 1,
            "neu": 1,
            "med": 0,
            "ovp": 0,
            "err": 1
          },
          "P1": {
            "tot": 13,
            "eff": 0,
            "pos": 23,
            "neg": 15,
            "pt": 1,
            "mas": 2,
            "neu": 2,
            "med": 6,
            "ovp": 0,
            "err": 2
          },
          "total": {
            "tot": 18,
            "eff": 8,
            "pos": 33,
            "neg": 17,
            "pt": 3,
            "mas": 3,
            "neu": 3,
            "med": 6,
            "ovp": 0,
            "err": 3
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 2,
            "eff": 75,
            "pos": 100,
            "neg": 0,
            "pt": 1,
            "mas": 1,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 7,
            "eff": -7,
            "pos": 29,
            "neg": 29,
            "pt": 1,
            "mas": 1,
            "neu": 1,
            "med": 2,
            "ovp": 0,
            "err": 2
          },
          "total": {
            "tot": 9,
            "eff": 11,
            "pos": 44,
            "neg": 22,
            "pt": 2,
            "mas": 2,
            "neu": 1,
            "med": 2,
            "ovp": 0,
            "err": 2
          }
        }
      }
    },
    "objetivos": {
      "sq": null,
      "rec": 34,
      "bqpos": null,
      "bqpt": null,
      "atk": null,
      "atqq": null,
      "atqhb": null,
      "atqx": null,
      "atqrp": null,
      "atqri": null,
      "atqrm": null,
      "atqtr": null
    },
    "tot_saques": 0,
    "tot_recep": 187,
    "tot_ataques": 0
  },
  {
    "num": 13,
    "nombre": "13 Rojas Caruso Mauro",
    "pos": "PUNTA",
    "color": "#3b82f6",
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
            "pct": 56
          },
          {
            "z": 1,
            "pct": 22
          },
          {
            "z": 4,
            "pct": 11
          },
          {
            "z": 9,
            "pct": 11
          }
        ],
        "eff": -11,
        "tot": 9,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 1,
        "video": null,
        "pts_pct": 0
      }
    ],
    "recepciones": [],
    "recepcion": {
      "flotado": {
        "desde_z1": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 2,
            "eff": 25,
            "pos": 50,
            "neg": 0,
            "pt": 0,
            "mas": 1,
            "neu": 1,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 1,
            "eff": 100,
            "pos": 100,
            "neg": 0,
            "pt": 1,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 3,
            "eff": 50,
            "pos": 67,
            "neg": 0,
            "pt": 1,
            "mas": 1,
            "neu": 1,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 1,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 1,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        }
      }
    },
    "objetivos": {
      "sq": -11,
      "rec": 38,
      "bqpos": null,
      "bqpt": null,
      "atk": null,
      "atqq": null,
      "atqhb": null,
      "atqx": null,
      "atqrp": null,
      "atqri": null,
      "atqrm": null,
      "atqtr": null
    },
    "tot_saques": 9,
    "tot_recep": 4,
    "tot_ataques": 0
  },
  {
    "num": 14,
    "nombre": "14 Nielson Ramiro",
    "pos": "PUNTA",
    "color": "#3b82f6",
    "info": {},
    "ataques": [
      {
        "cod": "X5",
        "tipo": "",
        "orig": 4,
        "destinos": [
          {
            "z": 2,
            "pct": 45
          },
          {
            "z": 1,
            "pct": 19
          },
          {
            "z": 7,
            "pct": 12
          },
          {
            "z": 6,
            "pct": 7
          }
        ],
        "eff": 30,
        "tot": 176,
        "pts": 74,
        "slash": 12,
        "err": 9,
        "video": null,
        "pts_pct": 42
      },
      {
        "cod": "V5",
        "tipo": "",
        "orig": 4,
        "destinos": [
          {
            "z": 2,
            "pct": 33
          },
          {
            "z": 1,
            "pct": 25
          },
          {
            "z": 5,
            "pct": 10
          },
          {
            "z": 6,
            "pct": 10
          }
        ],
        "eff": 17,
        "tot": 108,
        "pts": 32,
        "slash": 6,
        "err": 8,
        "video": null,
        "pts_pct": 30
      },
      {
        "cod": "XP",
        "tipo": "",
        "orig": 8,
        "destinos": [
          {
            "z": 2,
            "pct": 50
          },
          {
            "z": 3,
            "pct": 25
          },
          {
            "z": 1,
            "pct": 25
          }
        ],
        "eff": 20,
        "tot": 5,
        "pts": 2,
        "slash": 0,
        "err": 1,
        "video": null,
        "pts_pct": 40
      },
      {
        "cod": "X6",
        "tipo": "",
        "orig": 2,
        "destinos": [
          {
            "z": 4,
            "pct": 75
          },
          {
            "z": 3,
            "pct": 25
          }
        ],
        "eff": 25,
        "tot": 4,
        "pts": 1,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 25
      },
      {
        "cod": "VP",
        "tipo": "",
        "orig": 8,
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
        "tot": 3,
        "pts": 1,
        "slash": 0,
        "err": 1,
        "video": null,
        "pts_pct": 33
      },
      {
        "cod": "V6",
        "tipo": "",
        "orig": 2,
        "destinos": [
          {
            "z": 4,
            "pct": 50
          },
          {
            "z": 2,
            "pct": 50
          }
        ],
        "eff": -50,
        "tot": 2,
        "pts": 0,
        "slash": 0,
        "err": 1,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "PR",
        "tipo": "",
        "orig": 8,
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
        "cod": "SQ",
        "tipo": "POTENCIA",
        "orig": 6,
        "destinos": [
          {
            "z": 6,
            "pct": 49
          },
          {
            "z": 1,
            "pct": 39
          },
          {
            "z": 5,
            "pct": 9
          },
          {
            "z": 7,
            "pct": 2
          },
          {
            "z": 2,
            "pct": 1
          },
          {
            "z": 3,
            "pct": 1
          }
        ],
        "eff": -3,
        "tot": 128,
        "pts": 6,
        "plus": 0,
        "slash": 0,
        "err": 10,
        "video": null,
        "pts_pct": 5
      },
      {
        "cod": "SM",
        "tipo": "FLOTADO",
        "orig": 6,
        "destinos": [
          {
            "z": 1,
            "pct": 34
          },
          {
            "z": 6,
            "pct": 31
          },
          {
            "z": 7,
            "pct": 10
          },
          {
            "z": 5,
            "pct": 10
          },
          {
            "z": 8,
            "pct": 7
          },
          {
            "z": 9,
            "pct": 7
          }
        ],
        "eff": 2,
        "tot": 58,
        "pts": 3,
        "plus": 0,
        "slash": 0,
        "err": 2,
        "video": null,
        "pts_pct": 5
      }
    ],
    "recepciones": [],
    "recepcion": {
      "flotado": {
        "desde_z1": {
          "P5": {
            "tot": 25,
            "eff": 60,
            "pos": 76,
            "neg": 0,
            "pt": 11,
            "mas": 8,
            "neu": 6,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 17,
            "eff": 44,
            "pos": 65,
            "neg": 6,
            "pt": 5,
            "mas": 6,
            "neu": 5,
            "med": 0,
            "ovp": 1,
            "err": 0
          },
          "P1": {
            "tot": 5,
            "eff": 50,
            "pos": 80,
            "neg": 0,
            "pt": 1,
            "mas": 3,
            "neu": 1,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 47,
            "eff": 53,
            "pos": 72,
            "neg": 2,
            "pt": 17,
            "mas": 17,
            "neu": 12,
            "med": 0,
            "ovp": 1,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 10,
            "eff": 65,
            "pos": 90,
            "neg": 0,
            "pt": 4,
            "mas": 5,
            "neu": 1,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 12,
            "eff": 54,
            "pos": 75,
            "neg": 0,
            "pt": 4,
            "mas": 5,
            "neu": 2,
            "med": 1,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 22,
            "eff": 59,
            "pos": 82,
            "neg": 0,
            "pt": 8,
            "mas": 10,
            "neu": 3,
            "med": 1,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 1,
            "eff": 50,
            "pos": 100,
            "neg": 0,
            "pt": 0,
            "mas": 1,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 27,
            "eff": 46,
            "pos": 70,
            "neg": 4,
            "pt": 7,
            "mas": 12,
            "neu": 4,
            "med": 3,
            "ovp": 1,
            "err": 0
          },
          "P1": {
            "tot": 13,
            "eff": 58,
            "pos": 69,
            "neg": 0,
            "pt": 6,
            "mas": 3,
            "neu": 4,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 1,
            "eff": 50,
            "pos": 100,
            "neg": 0,
            "pt": 0,
            "mas": 1,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "P5": {
            "tot": 11,
            "eff": -14,
            "pos": 27,
            "neg": 36,
            "pt": 1,
            "mas": 2,
            "neu": 2,
            "med": 2,
            "ovp": 1,
            "err": 3
          },
          "P6": {
            "tot": 26,
            "eff": 31,
            "pos": 46,
            "neg": 4,
            "pt": 6,
            "mas": 6,
            "neu": 8,
            "med": 5,
            "ovp": 0,
            "err": 1
          },
          "P1": {
            "tot": 4,
            "eff": -25,
            "pos": 0,
            "neg": 25,
            "pt": 0,
            "mas": 0,
            "neu": 2,
            "med": 1,
            "ovp": 0,
            "err": 1
          },
          "total": {
            "tot": 41,
            "eff": 13,
            "pos": 37,
            "neg": 15,
            "pt": 7,
            "mas": 8,
            "neu": 12,
            "med": 8,
            "ovp": 1,
            "err": 5
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 8,
            "eff": 12,
            "pos": 38,
            "neg": 12,
            "pt": 1,
            "mas": 2,
            "neu": 2,
            "med": 2,
            "ovp": 0,
            "err": 1
          },
          "P6": {
            "tot": 23,
            "eff": 37,
            "pos": 57,
            "neg": 4,
            "pt": 6,
            "mas": 7,
            "neu": 3,
            "med": 6,
            "ovp": 0,
            "err": 1
          },
          "P1": {
            "tot": 4,
            "eff": 62,
            "pos": 75,
            "neg": 0,
            "pt": 2,
            "mas": 1,
            "neu": 1,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 35,
            "eff": 34,
            "pos": 54,
            "neg": 6,
            "pt": 9,
            "mas": 10,
            "neu": 6,
            "med": 8,
            "ovp": 0,
            "err": 2
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 7,
            "eff": -7,
            "pos": 14,
            "neg": 14,
            "pt": 0,
            "mas": 1,
            "neu": 3,
            "med": 2,
            "ovp": 0,
            "err": 1
          },
          "P6": {
            "tot": 4,
            "eff": 25,
            "pos": 50,
            "neg": 0,
            "pt": 0,
            "mas": 2,
            "neu": 0,
            "med": 2,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 4,
            "eff": 12,
            "pos": 25,
            "neg": 0,
            "pt": 0,
            "mas": 1,
            "neu": 3,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 15,
            "eff": 7,
            "pos": 27,
            "neg": 7,
            "pt": 0,
            "mas": 4,
            "neu": 6,
            "med": 4,
            "ovp": 0,
            "err": 1
          }
        }
      }
    },
    "objetivos": {
      "sq": 4,
      "rec": 39,
      "bqpos": 44,
      "bqpt": 16,
      "atk": 24,
      "atqq": null,
      "atqhb": 15,
      "atqx": 31,
      "atqrp": 28,
      "atqri": 26,
      "atqrm": 17,
      "atqtr": 24
    },
    "tot_saques": 186,
    "tot_recep": 223,
    "tot_ataques": 296
  },
  {
    "num": 15,
    "nombre": "15 Rotezzi Ramiro Lucio",
    "pos": "CENTRAL",
    "color": "#22c55e",
    "info": {},
    "ataques": [
      {
        "cod": "XM",
        "tipo": "",
        "orig": 3,
        "destinos": [
          {
            "z": 3,
            "pct": 55
          },
          {
            "z": 6,
            "pct": 18
          },
          {
            "z": 1,
            "pct": 18
          },
          {
            "z": 9,
            "pct": 9
          }
        ],
        "eff": 36,
        "tot": 11,
        "pts": 5,
        "slash": 1,
        "err": 0,
        "video": null,
        "pts_pct": 45
      },
      {
        "cod": "X1",
        "tipo": "",
        "orig": 3,
        "destinos": [
          {
            "z": 9,
            "pct": 33
          },
          {
            "z": 1,
            "pct": 33
          },
          {
            "z": 7,
            "pct": 22
          },
          {
            "z": 3,
            "pct": 11
          }
        ],
        "eff": 44,
        "tot": 9,
        "pts": 5,
        "slash": 0,
        "err": 1,
        "video": null,
        "pts_pct": 56
      },
      {
        "cod": "PR",
        "tipo": "",
        "orig": 8,
        "destinos": [
          {
            "z": 3,
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
            "z": 6,
            "pct": 40
          },
          {
            "z": 1,
            "pct": 24
          },
          {
            "z": 9,
            "pct": 24
          },
          {
            "z": 3,
            "pct": 4
          },
          {
            "z": 5,
            "pct": 4
          },
          {
            "z": 8,
            "pct": 4
          }
        ],
        "eff": 0,
        "tot": 26,
        "pts": 1,
        "plus": 0,
        "slash": 0,
        "err": 1,
        "video": null,
        "pts_pct": 4
      }
    ],
    "recepciones": [],
    "recepcion": {
      "flotado": {
        "desde_z1": {
          "P5": {
            "tot": 2,
            "eff": 25,
            "pos": 50,
            "neg": 0,
            "pt": 0,
            "mas": 1,
            "neu": 1,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 1,
            "eff": 50,
            "pos": 100,
            "neg": 0,
            "pt": 0,
            "mas": 1,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 3,
            "eff": 33,
            "pos": 67,
            "neg": 0,
            "pt": 0,
            "mas": 2,
            "neu": 1,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 1,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 1,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 1,
            "eff": 50,
            "pos": 100,
            "neg": 0,
            "pt": 0,
            "mas": 1,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 1,
            "eff": 50,
            "pos": 100,
            "neg": 0,
            "pt": 0,
            "mas": 1,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 1,
            "eff": -100,
            "pos": 0,
            "neg": 100,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 1
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 1,
            "eff": -100,
            "pos": 0,
            "neg": 100,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 1
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        }
      }
    },
    "objetivos": {
      "sq": 1,
      "rec": 8,
      "bqpos": 55,
      "bqpt": 9,
      "atk": 41,
      "atqq": 40,
      "atqhb": null,
      "atqx": null,
      "atqrp": 38,
      "atqri": 50,
      "atqrm": null,
      "atqtr": 43
    },
    "tot_saques": 26,
    "tot_recep": 6,
    "tot_ataques": 20
  },
  {
    "num": 17,
    "nombre": "17 Herbsommer Leonardo",
    "pos": "CENTRAL",
    "color": "#22c55e",
    "info": {},
    "ataques": [
      {
        "cod": "XM",
        "tipo": "",
        "orig": 3,
        "destinos": [
          {
            "z": 3,
            "pct": 24
          },
          {
            "z": 9,
            "pct": 22
          },
          {
            "z": 7,
            "pct": 18
          },
          {
            "z": 6,
            "pct": 18
          }
        ],
        "eff": 25,
        "tot": 52,
        "pts": 24,
        "slash": 3,
        "err": 8,
        "video": null,
        "pts_pct": 46
      },
      {
        "cod": "X7",
        "tipo": "",
        "orig": 3,
        "destinos": [
          {
            "z": 3,
            "pct": 38
          },
          {
            "z": 1,
            "pct": 25
          },
          {
            "z": 9,
            "pct": 21
          },
          {
            "z": 8,
            "pct": 8
          }
        ],
        "eff": 31,
        "tot": 26,
        "pts": 11,
        "slash": 1,
        "err": 2,
        "video": null,
        "pts_pct": 42
      },
      {
        "cod": "X1",
        "tipo": "",
        "orig": 3,
        "destinos": [
          {
            "z": 5,
            "pct": 39
          },
          {
            "z": 3,
            "pct": 28
          },
          {
            "z": 9,
            "pct": 17
          },
          {
            "z": 7,
            "pct": 6
          }
        ],
        "eff": 61,
        "tot": 18,
        "pts": 11,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 61
      },
      {
        "cod": "X6",
        "tipo": "",
        "orig": 2,
        "destinos": [
          {
            "z": 8,
            "pct": 100
          }
        ],
        "eff": 0,
        "tot": 2,
        "pts": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "X2",
        "tipo": "",
        "orig": 3,
        "destinos": [
          {
            "z": 4,
            "pct": 100
          }
        ],
        "eff": 0,
        "tot": 2,
        "pts": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      },
      {
        "cod": "X5",
        "tipo": "",
        "orig": 4,
        "destinos": [
          {
            "z": 2,
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
        "cod": "PR",
        "tipo": "",
        "orig": 8,
        "destinos": [
          {
            "z": 6,
            "pct": 100
          }
        ],
        "eff": 0,
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
        "destinos": [
          {
            "z": 6,
            "pct": 31
          },
          {
            "z": 5,
            "pct": 22
          },
          {
            "z": 7,
            "pct": 16
          },
          {
            "z": 1,
            "pct": 16
          },
          {
            "z": 8,
            "pct": 9
          },
          {
            "z": 9,
            "pct": 3
          }
        ],
        "eff": -8,
        "tot": 113,
        "pts": 1,
        "plus": 0,
        "slash": 0,
        "err": 10,
        "video": null,
        "pts_pct": 1
      }
    ],
    "recepciones": [],
    "recepcion": {},
    "objetivos": {
      "sq": -2,
      "rec": null,
      "bqpos": 49,
      "bqpt": 28,
      "atk": 32,
      "atqq": 33,
      "atqhb": null,
      "atqx": 50,
      "atqrp": 32,
      "atqri": 40,
      "atqrm": 50,
      "atqtr": 24
    },
    "tot_saques": 113,
    "tot_recep": 0,
    "tot_ataques": 100
  },
  {
    "num": 18,
    "nombre": "18 Acosta Wilson",
    "pos": "OPUESTO",
    "color": "#ef4444",
    "info": {},
    "ataques": [
      {
        "cod": "X6",
        "tipo": "",
        "orig": 2,
        "destinos": [
          {
            "z": 4,
            "pct": 35
          },
          {
            "z": 9,
            "pct": 22
          },
          {
            "z": 1,
            "pct": 12
          },
          {
            "z": 5,
            "pct": 12
          }
        ],
        "eff": 33,
        "tot": 61,
        "pts": 29,
        "slash": 6,
        "err": 3,
        "video": null,
        "pts_pct": 48
      },
      {
        "cod": "X8",
        "tipo": "",
        "orig": 9,
        "destinos": [
          {
            "z": 5,
            "pct": 35
          },
          {
            "z": 4,
            "pct": 25
          },
          {
            "z": 1,
            "pct": 20
          },
          {
            "z": 9,
            "pct": 8
          }
        ],
        "eff": 27,
        "tot": 41,
        "pts": 20,
        "slash": 1,
        "err": 8,
        "video": null,
        "pts_pct": 49
      },
      {
        "cod": "V6",
        "tipo": "",
        "orig": 2,
        "destinos": [
          {
            "z": 4,
            "pct": 28
          },
          {
            "z": 1,
            "pct": 28
          },
          {
            "z": 9,
            "pct": 19
          },
          {
            "z": 8,
            "pct": 8
          }
        ],
        "eff": 8,
        "tot": 37,
        "pts": 9,
        "slash": 5,
        "err": 1,
        "video": null,
        "pts_pct": 24
      },
      {
        "cod": "V8",
        "tipo": "",
        "orig": 9,
        "destinos": [
          {
            "z": 4,
            "pct": 40
          },
          {
            "z": 1,
            "pct": 33
          },
          {
            "z": 5,
            "pct": 13
          },
          {
            "z": 6,
            "pct": 7
          }
        ],
        "eff": 7,
        "tot": 15,
        "pts": 5,
        "slash": 2,
        "err": 2,
        "video": null,
        "pts_pct": 33
      },
      {
        "cod": "PR",
        "tipo": "",
        "orig": 8,
        "destinos": [],
        "eff": 100,
        "tot": 1,
        "pts": 1,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 100
      },
      {
        "cod": "V5",
        "tipo": "",
        "orig": 4,
        "destinos": [],
        "eff": -100,
        "tot": 1,
        "pts": 0,
        "slash": 0,
        "err": 1,
        "video": null,
        "pts_pct": 0
      }
    ],
    "saques": [
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
            "pct": 27
          },
          {
            "z": 1,
            "pct": 18
          },
          {
            "z": 3,
            "pct": 4
          },
          {
            "z": 8,
            "pct": 4
          }
        ],
        "eff": -10,
        "tot": 71,
        "pts": 5,
        "plus": 0,
        "slash": 0,
        "err": 12,
        "video": null,
        "pts_pct": 7
      }
    ],
    "recepciones": [],
    "recepcion": {
      "flotado": {
        "desde_z1": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        }
      },
      "potencia": {
        "desde_z1": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 1,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 1,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 1,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z6": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        },
        "desde_z5": {
          "P5": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P6": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "P1": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          },
          "total": {
            "tot": 0,
            "eff": 0,
            "pos": 0,
            "neg": 0,
            "pt": 0,
            "mas": 0,
            "neu": 0,
            "med": 0,
            "ovp": 0,
            "err": 0
          }
        }
      }
    },
    "objetivos": {
      "sq": -4,
      "rec": 0,
      "bqpos": 56,
      "bqpt": 17,
      "atk": 22,
      "atqq": null,
      "atqhb": 6,
      "atqx": 30,
      "atqrp": 22,
      "atqri": 60,
      "atqrm": 29,
      "atqtr": 8
    },
    "tot_saques": 71,
    "tot_recep": 1,
    "tot_ataques": 155
  },
  {
    "num": 19,
    "nombre": "19 Diaz Bolli Santiago",
    "pos": "ARMADOR",
    "color": "#a855f7",
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
            "pct": 56
          },
          {
            "z": 5,
            "pct": 17
          },
          {
            "z": 7,
            "pct": 17
          },
          {
            "z": 9,
            "pct": 6
          },
          {
            "z": 8,
            "pct": 6
          }
        ],
        "eff": 0,
        "tot": 18,
        "pts": 0,
        "plus": 0,
        "slash": 0,
        "err": 0,
        "video": null,
        "pts_pct": 0
      }
    ],
    "recepciones": [],
    "recepcion": {},
    "objetivos": {
      "sq": 6,
      "rec": null,
      "bqpos": null,
      "bqpt": null,
      "atk": null,
      "atqq": null,
      "atqhb": null,
      "atqx": null,
      "atqrp": null,
      "atqri": null,
      "atqrm": null,
      "atqtr": null
    },
    "tot_saques": 18,
    "tot_recep": 0,
    "tot_ataques": 0
  }
];
const PARTIDOS_EQUIPO_OBJ = {"sq": -4, "rec": 34, "bqpos": 48, "bqpt": 20, "atk": 30, "atqq": 43, "atqhb": 16, "atqx": 32, "atqrp": 37, "atqri": 42, "atqrm": 18, "atqtr": 23};
const PARTIDOS_INDIVIDUAL = [
  {
    "id": "Untref__2026-05-01",
    "nombre": "Untref",
    "rival": "Untref",
    "fecha": "01/05/2026",
    "resultado": "V",
    "equipo_obj": {
      "sq": -11,
      "rec": 37,
      "bqpos": 42,
      "bqpt": 14,
      "atk": 41,
      "atqq": 65,
      "atqhb": 17,
      "atqx": 44,
      "atqrp": 57,
      "atqri": 29,
      "atqrm": 14,
      "atqtr": 38
    },
    "jugadores": [
      {
        "nombre": "9 Godoy Martin",
        "num": 9,
        "objetivos": {
          "sq": -8,
          "rec": 0,
          "bqpos": 58,
          "bqpt": 8,
          "atk": 100,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": 100,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
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
                "z": 9,
                "pct": 28
              },
              {
                "z": 6,
                "pct": 28
              },
              {
                "z": 2,
                "pct": 6
              },
              {
                "z": 8,
                "pct": 6
              }
            ],
            "eff": -11,
            "tot": 18,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 2,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "P2",
            "tipo": "",
            "orig": 8,
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
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "5 Ramos Iaki",
        "num": 5,
        "objetivos": {
          "sq": -17,
          "rec": 0,
          "bqpos": 18,
          "bqpt": 6,
          "atk": 35,
          "atqq": null,
          "atqhb": 20,
          "atqx": 43,
          "atqrp": 100,
          "atqri": 25,
          "atqrm": -50,
          "atqtr": 35
        },
        "saques": [
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
                "pct": 21
              },
              {
                "z": 5,
                "pct": 21
              },
              {
                "z": 9,
                "pct": 5
              }
            ],
            "eff": -21,
            "tot": 19,
            "pts": 3,
            "plus": 0,
            "slash": 0,
            "err": 7,
            "video": null,
            "pts_pct": 16
          }
        ],
        "ataques": [
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 1,
                "pct": 46
              },
              {
                "z": 4,
                "pct": 23
              },
              {
                "z": 9,
                "pct": 23
              },
              {
                "z": 7,
                "pct": 8
              }
            ],
            "eff": 54,
            "tot": 13,
            "pts": 8,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 62
          },
          {
            "cod": "X8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 1,
                "pct": 57
              },
              {
                "z": 5,
                "pct": 29
              },
              {
                "z": 4,
                "pct": 14
              }
            ],
            "eff": 25,
            "tot": 8,
            "pts": 4,
            "slash": 1,
            "err": 1,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "V6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 4,
                "pct": 50
              },
              {
                "z": 1,
                "pct": 33
              },
              {
                "z": 6,
                "pct": 17
              }
            ],
            "eff": 0,
            "tot": 6,
            "pts": 2,
            "slash": 2,
            "err": 0,
            "video": null,
            "pts_pct": 33
          },
          {
            "cod": "V8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 1,
                "pct": 75
              },
              {
                "z": 4,
                "pct": 25
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
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "14 Nielson Ramiro",
        "num": 14,
        "objetivos": {
          "sq": -7,
          "rec": 53,
          "bqpos": 33,
          "bqpt": 33,
          "atk": 33,
          "atqq": null,
          "atqhb": 11,
          "atqx": 41,
          "atqrp": 43,
          "atqri": 50,
          "atqrm": 50,
          "atqtr": 25
        },
        "saques": [
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
                "pct": 23
              },
              {
                "z": 5,
                "pct": 15
              }
            ],
            "eff": -8,
            "tot": 13,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          },
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
          }
        ],
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 1,
                "pct": 69
              },
              {
                "z": 2,
                "pct": 12
              },
              {
                "z": 7,
                "pct": 6
              },
              {
                "z": 9,
                "pct": 6
              }
            ],
            "eff": 41,
            "tot": 17,
            "pts": 8,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 47
          },
          {
            "cod": "V5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 1,
                "pct": 44
              },
              {
                "z": 2,
                "pct": 33
              },
              {
                "z": 4,
                "pct": 22
              }
            ],
            "eff": 11,
            "tot": 9,
            "pts": 2,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 22
          },
          {
            "cod": "PR",
            "tipo": "",
            "orig": 8,
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
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 4,
                "eff": 38,
                "pos": 75,
                "neg": 0,
                "pt": 0,
                "mas": 3,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 2,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "11 Durdos Valentin",
        "num": 11,
        "objetivos": {
          "sq": -25,
          "rec": 69,
          "bqpos": 56,
          "bqpt": 11,
          "atk": 37,
          "atqq": null,
          "atqhb": 18,
          "atqx": 60,
          "atqrp": 45,
          "atqri": 50,
          "atqrm": 33,
          "atqtr": 29
        },
        "saques": [
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
                "pct": 44
              },
              {
                "z": 1,
                "pct": 12
              }
            ],
            "eff": -31,
            "tot": 16,
            "pts": 2,
            "plus": 0,
            "slash": 0,
            "err": 7,
            "video": null,
            "pts_pct": 12
          },
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
          }
        ],
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 1,
                "pct": 27
              },
              {
                "z": 7,
                "pct": 20
              },
              {
                "z": 2,
                "pct": 20
              },
              {
                "z": 8,
                "pct": 7
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
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 45
              },
              {
                "z": 5,
                "pct": 18
              },
              {
                "z": 1,
                "pct": 18
              },
              {
                "z": 4,
                "pct": 9
              }
            ],
            "eff": 18,
            "tot": 11,
            "pts": 4,
            "slash": 0,
            "err": 2,
            "video": null,
            "pts_pct": 36
          },
          {
            "cod": "XP",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 3,
                "pct": 67
              },
              {
                "z": 6,
                "pct": 33
              }
            ],
            "eff": 0,
            "tot": 4,
            "pts": 1,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 25
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 2,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 2,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 3,
                "eff": 67,
                "pos": 67,
                "neg": 0,
                "pt": 2,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 4,
                "eff": 50,
                "pos": 75,
                "neg": 0,
                "pt": 1,
                "mas": 2,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 3,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 3,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 4,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 4,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "3 Romeo Winer Agustin",
        "num": 3,
        "objetivos": {
          "sq": null,
          "rec": 18,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
        "saques": [],
        "ataques": [],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 4,
                "eff": 25,
                "pos": 50,
                "neg": 25,
                "pt": 1,
                "mas": 1,
                "neu": 1,
                "med": 0,
                "ovp": 1,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 4,
                "eff": 25,
                "pos": 50,
                "neg": 25,
                "pt": 1,
                "mas": 1,
                "neu": 1,
                "med": 0,
                "ovp": 1,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 4,
                "eff": 12,
                "pos": 25,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 1,
                "med": 2,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 1,
                "eff": -50,
                "pos": 0,
                "neg": 100,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 1,
                "err": 0
              },
              "P6": {
                "tot": 5,
                "eff": 20,
                "pos": 40,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 2,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 6,
                "eff": 8,
                "pos": 33,
                "neg": 17,
                "pt": 0,
                "mas": 2,
                "neu": 2,
                "med": 1,
                "ovp": 1,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "15 Rotezzi Ramiro Lucio",
        "num": 15,
        "objetivos": {
          "sq": 10,
          "rec": null,
          "bqpos": 60,
          "bqpt": 20,
          "atk": 56,
          "atqq": 56,
          "atqhb": null,
          "atqx": null,
          "atqrp": 50,
          "atqri": null,
          "atqrm": null,
          "atqtr": 67
        },
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
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
                "z": 3,
                "pct": 8
              }
            ],
            "eff": 8,
            "tot": 13,
            "pts": 1,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 8
          }
        ],
        "ataques": [
          {
            "cod": "X1",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 9,
                "pct": 50
              },
              {
                "z": 1,
                "pct": 50
              }
            ],
            "eff": 33,
            "tot": 6,
            "pts": 3,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 6,
                "pct": 33
              },
              {
                "z": 9,
                "pct": 33
              },
              {
                "z": 3,
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
        "recepcion": {}
      },
      {
        "nombre": "2 Ojuez Agustin",
        "num": 2,
        "objetivos": {
          "sq": -7,
          "rec": null,
          "bqpos": 50,
          "bqpt": 25,
          "atk": 50,
          "atqq": 62,
          "atqhb": null,
          "atqx": -100,
          "atqrp": 40,
          "atqri": 0,
          "atqrm": null,
          "atqtr": 75
        },
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
            "eff": -14,
            "tot": 7,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 6,
                "pct": 33
              },
              {
                "z": 9,
                "pct": 33
              },
              {
                "z": 1,
                "pct": 33
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
            "cod": "X1",
            "tipo": "",
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
            "tipo": "",
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
            "tot": 2,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "PR",
            "tipo": "",
            "orig": 8,
            "destinos": [],
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
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 4,
                "pct": 100
              }
            ],
            "eff": -100,
            "tot": 1,
            "pts": 0,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "X2",
            "tipo": "",
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
        "recepcion": {}
      },
      {
        "nombre": "13 Rojas Caruso Mauro",
        "num": 13,
        "objetivos": {
          "sq": 0,
          "rec": 50,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 4,
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
        "ataques": [],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "1 Salazar Imanol",
        "num": 1,
        "objetivos": {
          "sq": -25,
          "rec": 50,
          "bqpos": 43,
          "bqpt": 29,
          "atk": 83,
          "atqq": 83,
          "atqhb": null,
          "atqx": null,
          "atqrp": 100,
          "atqri": 0,
          "atqrm": null,
          "atqtr": 100
        },
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 7,
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
                "z": 1,
                "pct": 100
              }
            ],
            "eff": -100,
            "tot": 1,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 1,
                "pct": 25
              },
              {
                "z": 2,
                "pct": 25
              },
              {
                "z": 9,
                "pct": 25
              },
              {
                "z": 7,
                "pct": 25
              }
            ],
            "eff": 100,
            "tot": 4,
            "pts": 4,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 100
          },
          {
            "cod": "X7",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 8,
                "pct": 50
              },
              {
                "z": 1,
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
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "17 Alderete Brian",
        "num": 17,
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
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
          }
        ],
        "ataques": [],
        "recepcion": {}
      },
      {
        "nombre": "4 Vazquez Ezequiel",
        "num": 4,
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
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
          }
        ],
        "ataques": [],
        "recepcion": {}
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "9 Godoy Martin",
        "num": 9,
        "rotaciones": [
          {
            "pos": "P4",
            "total": 5,
            "total_all": 17,
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
              }
            ]
          },
          {
            "pos": "P3",
            "total": 4,
            "total_all": 24,
            "dist": [
              {
                "zona": 3,
                "tot": 3,
                "pts": 2,
                "pct": 75,
                "pct_p": 67
              },
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 25,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P2",
            "total": 5,
            "total_all": 10,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 2,
                "pct": 40,
                "pct_p": 100
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 1,
                "pct": 20,
                "pct_p": 100
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 1,
                "pct": 20,
                "pct_p": 100
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 1,
                "pct": 20,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P5",
            "total": 7,
            "total_all": 15,
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
              }
            ]
          },
          {
            "pos": "P6",
            "total": 8,
            "total_all": 17,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 1,
                "pct": 38,
                "pct_p": 33
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 3,
                "pct": 38,
                "pct_p": 100
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 1,
                "pct": 25,
                "pct_p": 50
              }
            ]
          },
          {
            "pos": "P1",
            "total": 8,
            "total_all": 22,
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
                "zona": 8,
                "tot": 1,
                "pts": 0,
                "pct": 12,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 27,
            "tot": 22,
            "pts": 9,
            "pts_pct": 41
          },
          {
            "label": "P6",
            "eff": 47,
            "tot": 17,
            "pts": 10,
            "pts_pct": 59
          },
          {
            "label": "P5",
            "eff": 27,
            "tot": 15,
            "pts": 8,
            "pts_pct": 53
          },
          {
            "label": "P4",
            "eff": 47,
            "tot": 17,
            "pts": 9,
            "pts_pct": 53
          },
          {
            "label": "P3",
            "eff": 29,
            "tot": 24,
            "pts": 9,
            "pts_pct": 38
          },
          {
            "label": "P2",
            "eff": 80,
            "tot": 10,
            "pts": 8,
            "pts_pct": 80
          },
          {
            "label": "SO",
            "eff": 46,
            "tot": 57,
            "pts": 33,
            "pts_pct": 58
          },
          {
            "label": "TR",
            "eff": 31,
            "tot": 48,
            "pts": 20,
            "pts_pct": 42
          }
        ],
        "llamadas": [
          {
            "call": "K1",
            "tot": 28,
            "eff": 64,
            "pts_pct": 71,
            "dist": [
              {
                "zona": 3,
                "tot": 12,
                "pts": 9,
                "pct": 43,
                "pct_p": 75
              },
              {
                "zona": 4,
                "tot": 11,
                "pts": 6,
                "pct": 39,
                "pct_p": 55
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 3,
                "pct": 11,
                "pct_p": 100
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 1,
                "pct": 4,
                "pct_p": 100
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 1,
                "pct": 4,
                "pct_p": 100
              }
            ]
          },
          {
            "call": "K7",
            "tot": 9,
            "eff": 44,
            "pts_pct": 56,
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
                "tot": 2,
                "pts": 2,
                "pct": 33,
                "pct_p": 100
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 17,
                "pct_p": 0
              }
            ]
          },
          {
            "call": "KM",
            "tot": 5,
            "eff": -40,
            "pts_pct": 20,
            "dist": [
              {
                "zona": 2,
                "tot": 3,
                "pts": 1,
                "pct": 60,
                "pct_p": 33
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              }
            ]
          },
          {
            "call": "KC",
            "tot": 47,
            "eff": 30,
            "pts_pct": 40,
            "dist": [
              {
                "zona": 4,
                "tot": 23,
                "pts": 9,
                "pct": 50,
                "pct_p": 39
              },
              {
                "zona": 2,
                "tot": 8,
                "pts": 2,
                "pct": 17,
                "pct_p": 25
              },
              {
                "zona": 3,
                "tot": 7,
                "pts": 5,
                "pct": 15,
                "pct_p": 71
              },
              {
                "zona": 9,
                "tot": 6,
                "pts": 3,
                "pct": 13,
                "pct_p": 50
              },
              {
                "zona": 8,
                "tot": 2,
                "pts": 0,
                "pct": 4,
                "pct_p": 0
              }
            ]
          },
          {
            "call": "KE",
            "tot": 7,
            "eff": 14,
            "pts_pct": 29,
            "dist": [
              {
                "zona": 4,
                "tot": 5,
                "pts": 1,
                "pct": 71,
                "pct_p": 20
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 1,
                "pct": 14,
                "pct_p": 100
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 0,
                "pct": 14,
                "pct_p": 0
              }
            ]
          }
        ],
        "so": {
          "eff": 46,
          "tot": 57
        },
        "tr": {
          "eff": 31,
          "tot": 48
        }
      },
      "suplente": {
        "nombre": "14 Nielson Ramiro",
        "num": 14,
        "rotaciones": [
          {
            "pos": "P4",
            "total": 0,
            "total_all": 2,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 1,
                "pct": 100,
                "pct_p": 50
              }
            ]
          },
          {
            "pos": "P3",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P2",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P5",
            "total": 0,
            "total_all": 2,
            "dist": [
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 100,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P6",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P1",
            "total": 0,
            "total_all": 0,
            "dist": []
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "P6",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "P5",
            "eff": 0,
            "tot": 2,
            "pts": 0,
            "pts_pct": 0
          },
          {
            "label": "P4",
            "eff": 50,
            "tot": 2,
            "pts": 1,
            "pts_pct": 50
          },
          {
            "label": "P3",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "P2",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "SO",
            "eff": 0,
            "tot": 2,
            "pts": 0,
            "pts_pct": 0
          },
          {
            "label": "TR",
            "eff": 50,
            "tot": 2,
            "pts": 1,
            "pts_pct": 50
          }
        ],
        "llamadas": [],
        "so": {
          "eff": 0,
          "tot": 2
        },
        "tr": {
          "eff": 50,
          "tot": 2
        }
      }
    }
  },
  {
    "id": "Ciudad__2026-05-05",
    "nombre": "Ciudad",
    "rival": "Ciudad",
    "fecha": "05/05/2026",
    "resultado": "D",
    "equipo_obj": {
      "sq": -18,
      "rec": 20,
      "bqpos": 36,
      "bqpt": 10,
      "atk": 29,
      "atqq": 36,
      "atqhb": 36,
      "atqx": 18,
      "atqrp": 33,
      "atqri": 7,
      "atqrm": 36,
      "atqtr": 32
    },
    "jugadores": [
      {
        "nombre": "9 Godoy Martin",
        "num": 9,
        "objetivos": {
          "sq": 10,
          "rec": 0,
          "bqpos": 67,
          "bqpt": 0,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
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
                "z": 8,
                "pct": 27
              },
              {
                "z": 6,
                "pct": 7
              },
              {
                "z": 3,
                "pct": 7
              }
            ],
            "eff": 7,
            "tot": 15,
            "pts": 1,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 7
          }
        ],
        "ataques": [],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "3 Romeo Winer Agustin",
        "num": 3,
        "objetivos": {
          "sq": null,
          "rec": 10,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
        "saques": [],
        "ataques": [],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 5,
                "eff": 30,
                "pos": 60,
                "neg": 20,
                "pt": 1,
                "mas": 2,
                "neu": 1,
                "med": 0,
                "ovp": 1,
                "err": 0
              },
              "P1": {
                "tot": 3,
                "eff": 17,
                "pos": 33,
                "neg": 33,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 1,
                "err": 0
              },
              "total": {
                "tot": 8,
                "eff": 25,
                "pos": 50,
                "neg": 25,
                "pt": 2,
                "mas": 2,
                "neu": 1,
                "med": 1,
                "ovp": 2,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 7,
                "eff": -36,
                "pos": 14,
                "neg": 43,
                "pt": 0,
                "mas": 1,
                "neu": 2,
                "med": 1,
                "ovp": 0,
                "err": 3
              },
              "P1": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 8,
                "eff": -25,
                "pos": 25,
                "neg": 38,
                "pt": 0,
                "mas": 2,
                "neu": 2,
                "med": 1,
                "ovp": 0,
                "err": 3
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 5,
                "eff": 30,
                "pos": 40,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 0,
                "med": 3,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 10,
                "eff": 15,
                "pos": 30,
                "neg": 0,
                "pt": 0,
                "mas": 3,
                "neu": 4,
                "med": 3,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 15,
                "eff": 20,
                "pos": 33,
                "neg": 0,
                "pt": 1,
                "mas": 4,
                "neu": 4,
                "med": 6,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 2,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 3,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 2,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "5 Ramos Iaki",
        "num": 5,
        "objetivos": {
          "sq": -20,
          "rec": null,
          "bqpos": 30,
          "bqpt": 20,
          "atk": 28,
          "atqq": null,
          "atqhb": 36,
          "atqx": 22,
          "atqrp": 29,
          "atqri": 17,
          "atqrm": 33,
          "atqtr": 30
        },
        "saques": [
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 5,
                "pct": 40
              },
              {
                "z": 6,
                "pct": 40
              },
              {
                "z": 9,
                "pct": 10
              },
              {
                "z": 1,
                "pct": 10
              }
            ],
            "eff": -27,
            "tot": 11,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 3,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
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
                "z": 9,
                "pct": 10
              },
              {
                "z": 5,
                "pct": 10
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
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 1,
                "pct": 57
              },
              {
                "z": 4,
                "pct": 29
              },
              {
                "z": 5,
                "pct": 14
              }
            ],
            "eff": 22,
            "tot": 9,
            "pts": 4,
            "slash": 1,
            "err": 1,
            "video": null,
            "pts_pct": 44
          },
          {
            "cod": "X8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 5,
                "pct": 43
              },
              {
                "z": 6,
                "pct": 29
              },
              {
                "z": 1,
                "pct": 29
              }
            ],
            "eff": 0,
            "tot": 8,
            "pts": 3,
            "slash": 0,
            "err": 3,
            "video": null,
            "pts_pct": 38
          },
          {
            "cod": "V8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 4,
                "pct": 40
              },
              {
                "z": 6,
                "pct": 20
              },
              {
                "z": 9,
                "pct": 20
              },
              {
                "z": 1,
                "pct": 20
              }
            ],
            "eff": 60,
            "tot": 5,
            "pts": 4,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 80
          }
        ],
        "recepcion": {}
      },
      {
        "nombre": "14 Nielson Ramiro",
        "num": 14,
        "objetivos": {
          "sq": -40,
          "rec": 45,
          "bqpos": 33,
          "bqpt": 0,
          "atk": 15,
          "atqq": null,
          "atqhb": 31,
          "atqx": 0,
          "atqrp": -33,
          "atqri": -20,
          "atqrm": 40,
          "atqtr": 31
        },
        "saques": [
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
                "z": 1,
                "pct": 40
              },
              {
                "z": 5,
                "pct": 20
              }
            ],
            "eff": -60,
            "tot": 5,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 3,
            "video": null,
            "pts_pct": 0
          },
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
                "z": 6,
                "pct": 20
              },
              {
                "z": 9,
                "pct": 20
              }
            ],
            "eff": -20,
            "tot": 5,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 75
              },
              {
                "z": 1,
                "pct": 17
              },
              {
                "z": 7,
                "pct": 8
              }
            ],
            "eff": 0,
            "tot": 13,
            "pts": 3,
            "slash": 3,
            "err": 0,
            "video": null,
            "pts_pct": 23
          },
          {
            "cod": "V5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 36
              },
              {
                "z": 1,
                "pct": 27
              },
              {
                "z": 5,
                "pct": 9
              },
              {
                "z": 7,
                "pct": 9
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
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 3,
                "eff": 50,
                "pos": 67,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 3,
                "eff": 50,
                "pos": 67,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 6,
                "eff": 33,
                "pos": 67,
                "neg": 0,
                "pt": 0,
                "mas": 4,
                "neu": 1,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 6,
                "eff": 33,
                "pos": 67,
                "neg": 0,
                "pt": 0,
                "mas": 4,
                "neu": 1,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "11 Durdos Valentin",
        "num": 11,
        "objetivos": {
          "sq": -50,
          "rec": 27,
          "bqpos": 0,
          "bqpt": 0,
          "atk": 50,
          "atqq": null,
          "atqhb": 100,
          "atqx": 38,
          "atqrp": 33,
          "atqri": 50,
          "atqrm": null,
          "atqtr": 100
        },
        "saques": [
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
                "pct": 40
              }
            ],
            "eff": -80,
            "tot": 5,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 4,
            "video": null,
            "pts_pct": 0
          },
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
                "z": 5,
                "pct": 20
              },
              {
                "z": 1,
                "pct": 20
              },
              {
                "z": 9,
                "pct": 20
              }
            ],
            "eff": -20,
            "tot": 5,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 38
              },
              {
                "z": 7,
                "pct": 38
              },
              {
                "z": 8,
                "pct": 12
              },
              {
                "z": 1,
                "pct": 12
              }
            ],
            "eff": 38,
            "tot": 8,
            "pts": 5,
            "slash": 1,
            "err": 1,
            "video": null,
            "pts_pct": 62
          },
          {
            "cod": "XP",
            "tipo": "",
            "orig": 8,
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
            "eff": 50,
            "tot": 4,
            "pts": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "V5",
            "tipo": "",
            "orig": 4,
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
            "cod": "PR",
            "tipo": "",
            "orig": 8,
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
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 4,
                "eff": 38,
                "pos": 75,
                "neg": 0,
                "pt": 0,
                "mas": 3,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 5,
                "eff": 40,
                "pos": 80,
                "neg": 0,
                "pt": 0,
                "mas": 4,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 25,
                "pos": 50,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 3,
                "eff": 17,
                "pos": 33,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 2,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 3,
                "eff": 33,
                "pos": 67,
                "neg": 33,
                "pt": 1,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 1,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": -25,
                "pos": 50,
                "neg": 50,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 1
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 5,
                "eff": 10,
                "pos": 60,
                "neg": 40,
                "pt": 1,
                "mas": 2,
                "neu": 0,
                "med": 0,
                "ovp": 1,
                "err": 1
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "1 Salazar Imanol",
        "num": 1,
        "objetivos": {
          "sq": -17,
          "rec": null,
          "bqpos": 67,
          "bqpt": 22,
          "atk": 22,
          "atqq": 22,
          "atqhb": null,
          "atqx": null,
          "atqrp": 50,
          "atqri": 0,
          "atqrm": null,
          "atqtr": -50
        },
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
                "z": 8,
                "pct": 25
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
            "eff": -12,
            "tot": 8,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
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
            "eff": -100,
            "tot": 1,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 1,
                "pct": 43
              },
              {
                "z": 9,
                "pct": 29
              },
              {
                "z": 6,
                "pct": 14
              },
              {
                "z": 3,
                "pct": 14
              }
            ],
            "eff": 43,
            "tot": 7,
            "pts": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 43
          },
          {
            "cod": "X7",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 6,
                "pct": 100
              }
            ],
            "eff": -50,
            "tot": 2,
            "pts": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {}
      },
      {
        "nombre": "2 Ojuez Agustin",
        "num": 2,
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": 20,
          "bqpt": 0,
          "atk": 67,
          "atqq": 67,
          "atqhb": null,
          "atqx": null,
          "atqrp": 67,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
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
          }
        ],
        "ataques": [
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 6,
                "pct": 50
              },
              {
                "z": 1,
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
            "cod": "X7",
            "tipo": "",
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
        "recepcion": {}
      },
      {
        "nombre": "17 Herbsommer Leonardo",
        "num": 17,
        "objetivos": {
          "sq": -11,
          "rec": null,
          "bqpos": 0,
          "bqpt": 0,
          "atk": 50,
          "atqq": 50,
          "atqhb": null,
          "atqx": null,
          "atqrp": 50,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 8,
                "pct": 43
              },
              {
                "z": 6,
                "pct": 29
              },
              {
                "z": 5,
                "pct": 14
              },
              {
                "z": 7,
                "pct": 14
              }
            ],
            "eff": -14,
            "tot": 7,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 1,
                "pct": 50
              },
              {
                "z": 9,
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
          }
        ],
        "recepcion": {}
      },
      {
        "nombre": "13 Rojas Caruso Mauro",
        "num": 13,
        "objetivos": {
          "sq": 0,
          "rec": 25,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
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
          }
        ],
        "ataques": [],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "9 Godoy Martin",
        "num": 9,
        "rotaciones": [
          {
            "pos": "P4",
            "total": 8,
            "total_all": 12,
            "dist": [
              {
                "zona": 3,
                "tot": 3,
                "pts": 2,
                "pct": 38,
                "pct_p": 67
              },
              {
                "zona": 4,
                "tot": 3,
                "pts": 1,
                "pct": 38,
                "pct_p": 33
              },
              {
                "zona": 9,
                "tot": 2,
                "pts": 1,
                "pct": 25,
                "pct_p": 50
              }
            ]
          },
          {
            "pos": "P3",
            "total": 1,
            "total_all": 6,
            "dist": [
              {
                "zona": 9,
                "tot": 4,
                "pts": 2,
                "pct": 67,
                "pct_p": 50
              },
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 17,
                "pct_p": 0
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 1,
                "pct": 17,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P2",
            "total": 1,
            "total_all": 12,
            "dist": [
              {
                "zona": 4,
                "tot": 6,
                "pts": 2,
                "pct": 50,
                "pct_p": 33
              },
              {
                "zona": 9,
                "tot": 4,
                "pts": 2,
                "pct": 33,
                "pct_p": 50
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 0,
                "pct": 8,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 8,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P5",
            "total": 5,
            "total_all": 7,
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
              }
            ]
          },
          {
            "pos": "P6",
            "total": 7,
            "total_all": 9,
            "dist": [
              {
                "zona": 3,
                "tot": 4,
                "pts": 3,
                "pct": 57,
                "pct_p": 75
              },
              {
                "zona": 4,
                "tot": 2,
                "pts": 2,
                "pct": 29,
                "pct_p": 100
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 1,
                "pct": 14,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P1",
            "total": 8,
            "total_all": 27,
            "dist": [
              {
                "zona": 2,
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
                "zona": 4,
                "tot": 2,
                "pts": 0,
                "pct": 25,
                "pct_p": 0
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 0,
                "pct": 12,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 11,
            "tot": 27,
            "pts": 7,
            "pts_pct": 26
          },
          {
            "label": "P6",
            "eff": 78,
            "tot": 9,
            "pts": 7,
            "pts_pct": 78
          },
          {
            "label": "P5",
            "eff": 57,
            "tot": 7,
            "pts": 4,
            "pts_pct": 57
          },
          {
            "label": "P4",
            "eff": 25,
            "tot": 12,
            "pts": 7,
            "pts_pct": 58
          },
          {
            "label": "P3",
            "eff": 17,
            "tot": 6,
            "pts": 3,
            "pts_pct": 50
          },
          {
            "label": "P2",
            "eff": 25,
            "tot": 12,
            "pts": 4,
            "pts_pct": 33
          },
          {
            "label": "SO",
            "eff": 26,
            "tot": 50,
            "pts": 21,
            "pts_pct": 42
          },
          {
            "label": "TR",
            "eff": 35,
            "tot": 23,
            "pts": 11,
            "pts_pct": 48
          }
        ],
        "llamadas": [
          {
            "call": "K1",
            "tot": 25,
            "eff": 32,
            "pts_pct": 48,
            "dist": [
              {
                "zona": 3,
                "tot": 10,
                "pts": 5,
                "pct": 42,
                "pct_p": 50
              },
              {
                "zona": 4,
                "tot": 7,
                "pts": 4,
                "pct": 29,
                "pct_p": 57
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 1,
                "pct": 12,
                "pct_p": 33
              },
              {
                "zona": 9,
                "tot": 2,
                "pts": 1,
                "pct": 8,
                "pct_p": 50
              },
              {
                "zona": 8,
                "tot": 2,
                "pts": 1,
                "pct": 8,
                "pct_p": 50
              }
            ]
          },
          {
            "call": "K7",
            "tot": 5,
            "eff": 40,
            "pts_pct": 60,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 1,
                "pct": 50,
                "pct_p": 50
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
              }
            ]
          },
          {
            "call": "KM",
            "tot": 5,
            "eff": -20,
            "pts_pct": 0,
            "dist": [
              {
                "zona": 2,
                "tot": 4,
                "pts": 0,
                "pct": 80,
                "pct_p": 0
              },
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              }
            ]
          },
          {
            "call": "KC",
            "tot": 22,
            "eff": 36,
            "pts_pct": 50,
            "dist": [
              {
                "zona": 4,
                "tot": 12,
                "pts": 5,
                "pct": 55,
                "pct_p": 42
              },
              {
                "zona": 9,
                "tot": 5,
                "pts": 3,
                "pct": 23,
                "pct_p": 60
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 2,
                "pct": 14,
                "pct_p": 67
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 1,
                "pct": 5,
                "pct_p": 100
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 5,
                "pct_p": 0
              }
            ]
          },
          {
            "call": "KE",
            "tot": 8,
            "eff": 25,
            "pts_pct": 50,
            "dist": [
              {
                "zona": 9,
                "tot": 3,
                "pts": 1,
                "pct": 38,
                "pct_p": 33
              },
              {
                "zona": 4,
                "tot": 3,
                "pts": 1,
                "pct": 38,
                "pct_p": 33
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 2,
                "pct": 25,
                "pct_p": 100
              }
            ]
          }
        ],
        "so": {
          "eff": 26,
          "tot": 50
        },
        "tr": {
          "eff": 35,
          "tot": 23
        }
      },
      "suplente": {
        "nombre": "11 Durdos Valentin",
        "num": 11,
        "rotaciones": [
          {
            "pos": "P4",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P3",
            "total": 0,
            "total_all": 1,
            "dist": [
              {
                "zona": 4,
                "tot": 1,
                "pts": 1,
                "pct": 100,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P2",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P5",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P6",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P1",
            "total": 0,
            "total_all": 4,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 1,
                "pct": 75,
                "pct_p": 33
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 25,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 25,
            "tot": 4,
            "pts": 1,
            "pts_pct": 25
          },
          {
            "label": "P6",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "P5",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "P4",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "P3",
            "eff": 100,
            "tot": 1,
            "pts": 1,
            "pts_pct": 100
          },
          {
            "label": "P2",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "SO",
            "eff": 50,
            "tot": 4,
            "pts": 2,
            "pts_pct": 50
          },
          {
            "label": "TR",
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "pts_pct": 0
          }
        ],
        "llamadas": [],
        "so": {
          "eff": 50,
          "tot": 4
        },
        "tr": {
          "eff": 0,
          "tot": 1
        }
      }
    }
  },
  {
    "id": "Ferro__2026-05-08",
    "nombre": "Ferro",
    "rival": "Ferro",
    "fecha": "08/05/2026",
    "resultado": "D",
    "equipo_obj": {
      "sq": -5,
      "rec": 43,
      "bqpos": 38,
      "bqpt": 30,
      "atk": 16,
      "atqq": 36,
      "atqhb": 0,
      "atqx": 15,
      "atqrp": 21,
      "atqri": 0,
      "atqrm": -50,
      "atqtr": 20
    },
    "jugadores": [
      {
        "nombre": "9 Godoy Martin",
        "num": 9,
        "objetivos": {
          "sq": 13,
          "rec": 0,
          "bqpos": 17,
          "bqpt": 17,
          "atk": -100,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": -100,
          "atqrm": null,
          "atqtr": -100
        },
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
            "eff": 8,
            "tot": 13,
            "pts": 1,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 8
          }
        ],
        "ataques": [
          {
            "cod": "P2",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 4,
                "pct": 100
              }
            ],
            "eff": -100,
            "tot": 1,
            "pts": 0,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "PR",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 6,
                "pct": 100
              }
            ],
            "eff": -100,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "1 Salazar Imanol",
        "num": 1,
        "objetivos": {
          "sq": 0,
          "rec": 100,
          "bqpos": 44,
          "bqpt": 33,
          "atk": 33,
          "atqq": 38,
          "atqhb": null,
          "atqx": null,
          "atqrp": 50,
          "atqri": 0,
          "atqrm": null,
          "atqtr": 29
        },
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 1,
                "pct": 40
              },
              {
                "z": 5,
                "pct": 20
              },
              {
                "z": 7,
                "pct": 20
              },
              {
                "z": 3,
                "pct": 10
              },
              {
                "z": 6,
                "pct": 10
              }
            ],
            "eff": 0,
            "tot": 10,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X7",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 3,
                "pct": 44
              },
              {
                "z": 6,
                "pct": 11
              },
              {
                "z": 1,
                "pct": 11
              },
              {
                "z": 7,
                "pct": 11
              }
            ],
            "eff": 44,
            "tot": 9,
            "pts": 6,
            "slash": 2,
            "err": 0,
            "video": null,
            "pts_pct": 67
          },
          {
            "cod": "X1",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 5,
                "pct": 50
              },
              {
                "z": 3,
                "pct": 50
              }
            ],
            "eff": 0,
            "tot": 2,
            "pts": 1,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "PR",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 3,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 3,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "X2",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 7,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 6,
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
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "12 Zanotti Juan Cruz",
        "num": 12,
        "objetivos": {
          "sq": null,
          "rec": 36,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
        "saques": [],
        "ataques": [],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 4,
                "eff": 12,
                "pos": 50,
                "neg": 25,
                "pt": 0,
                "mas": 2,
                "neu": 0,
                "med": 1,
                "ovp": 1,
                "err": 0
              },
              "P1": {
                "tot": 11,
                "eff": 55,
                "pos": 82,
                "neg": 0,
                "pt": 3,
                "mas": 6,
                "neu": 1,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 15,
                "eff": 43,
                "pos": 73,
                "neg": 7,
                "pt": 3,
                "mas": 8,
                "neu": 1,
                "med": 2,
                "ovp": 1,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 5,
                "eff": 40,
                "pos": 60,
                "neg": 20,
                "pt": 3,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 1
              },
              "P1": {
                "tot": 4,
                "eff": 75,
                "pos": 100,
                "neg": 0,
                "pt": 2,
                "mas": 2,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 10,
                "eff": 55,
                "pos": 80,
                "neg": 10,
                "pt": 5,
                "mas": 3,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 1
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 3,
                "eff": 17,
                "pos": 33,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 1,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 4,
                "eff": 62,
                "pos": 75,
                "neg": 25,
                "pt": 3,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 1,
                "err": 0
              },
              "P1": {
                "tot": 2,
                "eff": -25,
                "pos": 50,
                "neg": 50,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 1
              },
              "total": {
                "tot": 9,
                "eff": 28,
                "pos": 56,
                "neg": 22,
                "pt": 3,
                "mas": 2,
                "neu": 1,
                "med": 1,
                "ovp": 1,
                "err": 1
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 2,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 3,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 2,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": -100,
                "pos": 0,
                "neg": 100,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 1
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": -100,
                "pos": 0,
                "neg": 100,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 1
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "5 Ramos Iaki",
        "num": 5,
        "objetivos": {
          "sq": -38,
          "rec": null,
          "bqpos": 12,
          "bqpt": 0,
          "atk": -4,
          "atqq": null,
          "atqhb": -30,
          "atqx": 6,
          "atqrp": 0,
          "atqri": -50,
          "atqrm": -50,
          "atqtr": 8
        },
        "saques": [
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
                "z": 1,
                "pct": 40
              }
            ],
            "eff": -40,
            "tot": 10,
            "pts": 1,
            "plus": 0,
            "slash": 0,
            "err": 5,
            "video": null,
            "pts_pct": 10
          }
        ],
        "ataques": [
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 2,
                "pct": 22
              },
              {
                "z": 4,
                "pct": 22
              },
              {
                "z": 6,
                "pct": 22
              },
              {
                "z": 5,
                "pct": 22
              }
            ],
            "eff": 0,
            "tot": 9,
            "pts": 2,
            "slash": 0,
            "err": 2,
            "video": null,
            "pts_pct": 22
          },
          {
            "cod": "X8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 4,
                "pct": 43
              },
              {
                "z": 5,
                "pct": 29
              },
              {
                "z": 1,
                "pct": 14
              },
              {
                "z": 9,
                "pct": 14
              }
            ],
            "eff": 14,
            "tot": 7,
            "pts": 3,
            "slash": 2,
            "err": 0,
            "video": null,
            "pts_pct": 43
          },
          {
            "cod": "V6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 4,
                "pct": 60
              },
              {
                "z": 1,
                "pct": 40
              }
            ],
            "eff": -67,
            "tot": 6,
            "pts": 0,
            "slash": 2,
            "err": 2,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "V8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 4,
                "pct": 50
              },
              {
                "z": 1,
                "pct": 25
              },
              {
                "z": 9,
                "pct": 25
              }
            ],
            "eff": 25,
            "tot": 4,
            "pts": 2,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "PR",
            "tipo": "",
            "orig": 8,
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
        "recepcion": {}
      },
      {
        "nombre": "14 Nielson Ramiro",
        "num": 14,
        "objetivos": {
          "sq": 12,
          "rec": 42,
          "bqpos": 33,
          "bqpt": 17,
          "atk": 14,
          "atqq": null,
          "atqhb": 11,
          "atqx": 15,
          "atqrp": 11,
          "atqri": 50,
          "atqrm": -67,
          "atqtr": 38
        },
        "saques": [
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
            "eff": 5,
            "tot": 19,
            "pts": 1,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 5
          },
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
            "eff": 0,
            "tot": 6,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 38
              },
              {
                "z": 1,
                "pct": 23
              },
              {
                "z": 7,
                "pct": 23
              },
              {
                "z": 5,
                "pct": 15
              }
            ],
            "eff": 15,
            "tot": 13,
            "pts": 4,
            "slash": 0,
            "err": 2,
            "video": null,
            "pts_pct": 31
          },
          {
            "cod": "V5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 38
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
                "z": 7,
                "pct": 12
              }
            ],
            "eff": 12,
            "tot": 8,
            "pts": 3,
            "slash": 2,
            "err": 0,
            "video": null,
            "pts_pct": 38
          },
          {
            "cod": "VP",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 5,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 3,
                "eff": 83,
                "pos": 100,
                "neg": 0,
                "pt": 2,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 4,
                "eff": 50,
                "pos": 75,
                "neg": 25,
                "pt": 2,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 1,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 4,
                "eff": 50,
                "pos": 75,
                "neg": 25,
                "pt": 2,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 1,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 2,
                "eff": 0,
                "pos": 50,
                "neg": 50,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 1
              },
              "P6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 3,
                "eff": 33,
                "pos": 67,
                "neg": 33,
                "pt": 2,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 1
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": -100,
                "pos": 0,
                "neg": 100,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 1
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": -100,
                "pos": 0,
                "neg": 100,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 1
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "11 Durdos Valentin",
        "num": 11,
        "objetivos": {
          "sq": -32,
          "rec": 52,
          "bqpos": 43,
          "bqpt": 43,
          "atk": 19,
          "atqq": null,
          "atqhb": 22,
          "atqx": 21,
          "atqrp": 20,
          "atqri": 100,
          "atqrm": 0,
          "atqtr": 16
        },
        "saques": [
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
                "pct": 43
              }
            ],
            "eff": -43,
            "tot": 7,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 3,
            "video": null,
            "pts_pct": 0
          },
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
                "z": 5,
                "pct": 33
              }
            ],
            "eff": -33,
            "tot": 3,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 45
              },
              {
                "z": 5,
                "pct": 18
              },
              {
                "z": 6,
                "pct": 14
              },
              {
                "z": 4,
                "pct": 9
              }
            ],
            "eff": 17,
            "tot": 23,
            "pts": 7,
            "slash": 1,
            "err": 2,
            "video": null,
            "pts_pct": 30
          },
          {
            "cod": "V5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 43
              },
              {
                "z": 1,
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
            "eff": 29,
            "tot": 7,
            "pts": 3,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 43
          },
          {
            "cod": "VP",
            "tipo": "",
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
            "err": 1,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "XP",
            "tipo": "",
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
            "err": 1,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "PR",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 3,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 2,
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
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 2,
                "eff": 0,
                "pos": 50,
                "neg": 50,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 1,
                "err": 0
              },
              "P6": {
                "tot": 6,
                "eff": 58,
                "pos": 83,
                "neg": 17,
                "pt": 4,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 1
              },
              "P1": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 9,
                "eff": 44,
                "pos": 78,
                "neg": 22,
                "pt": 4,
                "mas": 3,
                "neu": 0,
                "med": 0,
                "ovp": 1,
                "err": 1
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 5,
                "eff": 60,
                "pos": 80,
                "neg": 0,
                "pt": 2,
                "mas": 2,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 3,
                "eff": 33,
                "pos": 33,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 9,
                "eff": 50,
                "pos": 67,
                "neg": 0,
                "pt": 3,
                "mas": 3,
                "neu": 2,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 5,
                "eff": 70,
                "pos": 100,
                "neg": 0,
                "pt": 2,
                "mas": 3,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 5,
                "eff": 70,
                "pos": 100,
                "neg": 0,
                "pt": 2,
                "mas": 3,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 3,
                "eff": 67,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 2,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 2,
                "eff": 25,
                "pos": 50,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "17 Herbsommer Leonardo",
        "num": 17,
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": 25,
          "bqpt": 25,
          "atk": 10,
          "atqq": 10,
          "atqhb": null,
          "atqx": null,
          "atqrp": 10,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
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
          }
        ],
        "ataques": [
          {
            "cod": "X1",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 3,
                "pct": 33
              },
              {
                "z": 5,
                "pct": 17
              },
              {
                "z": 9,
                "pct": 17
              },
              {
                "z": 7,
                "pct": 17
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
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 3,
                "pct": 50
              },
              {
                "z": 7,
                "pct": 25
              },
              {
                "z": 6,
                "pct": 25
              }
            ],
            "eff": -25,
            "tot": 4,
            "pts": 1,
            "slash": 1,
            "err": 1,
            "video": null,
            "pts_pct": 25
          }
        ],
        "recepcion": {}
      },
      {
        "nombre": "13 Rojas Caruso Mauro",
        "num": 13,
        "objetivos": {
          "sq": -50,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
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
                "z": 6,
                "pct": 50
              }
            ],
            "eff": -50,
            "tot": 2,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [],
        "recepcion": {}
      },
      {
        "nombre": "4 Vazquez Ezequiel",
        "num": 4,
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": 50,
          "bqpt": 0,
          "atk": 100,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": 100
        },
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 7,
                "pct": 33
              },
              {
                "z": 1,
                "pct": 33
              },
              {
                "z": 5,
                "pct": 17
              },
              {
                "z": 6,
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
          }
        ],
        "ataques": [
          {
            "cod": "P2",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 4,
                "pct": 50
              },
              {
                "z": 3,
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
          }
        ],
        "recepcion": {}
      },
      {
        "nombre": "18 Acosta Wilson",
        "num": 18,
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atk": 0,
          "atqq": null,
          "atqhb": null,
          "atqx": 0,
          "atqrp": 0,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
        "saques": [],
        "ataques": [
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 4,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {}
      },
      {
        "nombre": "2 Ojuez Agustin",
        "num": 2,
        "objetivos": {
          "sq": -33,
          "rec": 100,
          "bqpos": 100,
          "bqpt": 100,
          "atk": 80,
          "atqq": 80,
          "atqhb": null,
          "atqx": null,
          "atqrp": 80,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
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
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X1",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 6,
                "pct": 50
              },
              {
                "z": 3,
                "pct": 25
              },
              {
                "z": 4,
                "pct": 25
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
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 3,
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
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "9 Godoy Martin",
        "num": 9,
        "rotaciones": [
          {
            "pos": "P4",
            "total": 3,
            "total_all": 5,
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
              }
            ]
          },
          {
            "pos": "P3",
            "total": 6,
            "total_all": 8,
            "dist": [
              {
                "zona": 3,
                "tot": 2,
                "pts": 1,
                "pct": 33,
                "pct_p": 50
              },
              {
                "zona": 4,
                "tot": 2,
                "pts": 1,
                "pct": 33,
                "pct_p": 50
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 0,
                "pct": 17,
                "pct_p": 0
              },
              {
                "zona": 8,
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
            "total_all": 15,
            "dist": [
              {
                "zona": 3,
                "tot": 3,
                "pts": 2,
                "pct": 50,
                "pct_p": 67
              },
              {
                "zona": 9,
                "tot": 2,
                "pts": 2,
                "pct": 33,
                "pct_p": 100
              },
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 17,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P5",
            "total": 9,
            "total_all": 14,
            "dist": [
              {
                "zona": 3,
                "tot": 7,
                "pts": 2,
                "pct": 78,
                "pct_p": 29
              },
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 11,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 11,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P6",
            "total": 5,
            "total_all": 16,
            "dist": [
              {
                "zona": 4,
                "tot": 4,
                "pts": 2,
                "pct": 80,
                "pct_p": 50
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P1",
            "total": 7,
            "total_all": 11,
            "dist": [
              {
                "zona": 2,
                "tot": 3,
                "pts": 0,
                "pct": 43,
                "pct_p": 0
              },
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
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 0,
            "tot": 11,
            "pts": 3,
            "pts_pct": 27
          },
          {
            "label": "P6",
            "eff": 6,
            "tot": 16,
            "pts": 4,
            "pts_pct": 25
          },
          {
            "label": "P5",
            "eff": 7,
            "tot": 14,
            "pts": 4,
            "pts_pct": 29
          },
          {
            "label": "P4",
            "eff": 0,
            "tot": 5,
            "pts": 2,
            "pts_pct": 40
          },
          {
            "label": "P3",
            "eff": 12,
            "tot": 8,
            "pts": 3,
            "pts_pct": 38
          },
          {
            "label": "P2",
            "eff": 60,
            "tot": 15,
            "pts": 10,
            "pts_pct": 67
          },
          {
            "label": "SO",
            "eff": 13,
            "tot": 45,
            "pts": 16,
            "pts_pct": 36
          },
          {
            "label": "TR",
            "eff": 25,
            "tot": 24,
            "pts": 10,
            "pts_pct": 42
          }
        ],
        "llamadas": [
          {
            "call": "K1",
            "tot": 21,
            "eff": 0,
            "pts_pct": 29,
            "dist": [
              {
                "zona": 3,
                "tot": 10,
                "pts": 3,
                "pct": 50,
                "pct_p": 30
              },
              {
                "zona": 4,
                "tot": 6,
                "pts": 3,
                "pct": 30,
                "pct_p": 50
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 0,
                "pct": 10,
                "pct_p": 0
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 0,
                "pct": 5,
                "pct_p": 0
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 0,
                "pct": 5,
                "pct_p": 0
              }
            ]
          },
          {
            "call": "K7",
            "tot": 16,
            "eff": 31,
            "pts_pct": 44,
            "dist": [
              {
                "zona": 4,
                "tot": 7,
                "pts": 2,
                "pct": 44,
                "pct_p": 29
              },
              {
                "zona": 3,
                "tot": 4,
                "pts": 3,
                "pct": 25,
                "pct_p": 75
              },
              {
                "zona": 2,
                "tot": 3,
                "pts": 0,
                "pct": 19,
                "pct_p": 0
              },
              {
                "zona": 9,
                "tot": 2,
                "pts": 2,
                "pct": 12,
                "pct_p": 100
              }
            ]
          },
          {
            "call": "KE",
            "tot": 6,
            "eff": 0,
            "pts_pct": 33,
            "dist": [
              {
                "zona": 3,
                "tot": 2,
                "pts": 1,
                "pct": 33,
                "pct_p": 50
              },
              {
                "zona": 4,
                "tot": 2,
                "pts": 1,
                "pct": 33,
                "pct_p": 50
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 0,
                "pct": 17,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 17,
                "pct_p": 0
              }
            ]
          }
        ],
        "so": {
          "eff": 13,
          "tot": 45
        },
        "tr": {
          "eff": 25,
          "tot": 24
        }
      },
      "suplente": {
        "nombre": "4 Vazquez Ezequiel",
        "num": 4,
        "rotaciones": [
          {
            "pos": "P4",
            "total": 3,
            "total_all": 5,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 0,
                "pct": 67,
                "pct_p": 0
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 0,
                "pct": 33,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P3",
            "total": 3,
            "total_all": 5,
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
              }
            ]
          },
          {
            "pos": "P2",
            "total": 5,
            "total_all": 6,
            "dist": [
              {
                "zona": 3,
                "tot": 3,
                "pts": 2,
                "pct": 60,
                "pct_p": 67
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              },
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P5",
            "total": 3,
            "total_all": 4,
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
              }
            ]
          },
          {
            "pos": "P6",
            "total": 2,
            "total_all": 2,
            "dist": [
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
              }
            ]
          },
          {
            "pos": "P1",
            "total": 5,
            "total_all": 7,
            "dist": [
              {
                "zona": 4,
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
                "zona": 3,
                "tot": 1,
                "pts": 1,
                "pct": 20,
                "pct_p": 100
              },
              {
                "zona": 8,
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
            "eff": 29,
            "tot": 7,
            "pts": 3,
            "pts_pct": 43
          },
          {
            "label": "P6",
            "eff": 100,
            "tot": 2,
            "pts": 2,
            "pts_pct": 100
          },
          {
            "label": "P5",
            "eff": 25,
            "tot": 4,
            "pts": 2,
            "pts_pct": 50
          },
          {
            "label": "P4",
            "eff": 0,
            "tot": 5,
            "pts": 1,
            "pts_pct": 20
          },
          {
            "label": "P3",
            "eff": 0,
            "tot": 5,
            "pts": 2,
            "pts_pct": 40
          },
          {
            "label": "P2",
            "eff": 17,
            "tot": 6,
            "pts": 2,
            "pts_pct": 33
          },
          {
            "label": "SO",
            "eff": 17,
            "tot": 23,
            "pts": 9,
            "pts_pct": 39
          },
          {
            "label": "TR",
            "eff": 33,
            "tot": 6,
            "pts": 3,
            "pts_pct": 50
          }
        ],
        "llamadas": [
          {
            "call": "K1",
            "tot": 19,
            "eff": 32,
            "pts_pct": 47,
            "dist": [
              {
                "zona": 4,
                "tot": 7,
                "pts": 2,
                "pct": 37,
                "pct_p": 29
              },
              {
                "zona": 3,
                "tot": 7,
                "pts": 5,
                "pct": 37,
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
                "zona": 9,
                "tot": 2,
                "pts": 0,
                "pct": 11,
                "pct_p": 0
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 1,
                "pct": 5,
                "pct_p": 100
              }
            ]
          }
        ],
        "so": {
          "eff": 17,
          "tot": 23
        },
        "tr": {
          "eff": 33,
          "tot": 6
        }
      }
    }
  },
  {
    "id": "Hacoaj__2026-05-16",
    "nombre": "Hacoaj",
    "rival": "Hacoaj",
    "fecha": "16/05/2026",
    "resultado": "V",
    "equipo_obj": {
      "sq": -6,
      "rec": 40,
      "bqpos": 48,
      "bqpt": 13,
      "atk": 30,
      "atqq": 39,
      "atqhb": 20,
      "atqx": 34,
      "atqrp": 45,
      "atqri": 53,
      "atqrm": 17,
      "atqtr": 16
    },
    "jugadores": [
      {
        "nombre": "4 Vazquez Ezequiel",
        "num": 4,
        "objetivos": {
          "sq": -8,
          "rec": 0,
          "bqpos": 50,
          "bqpt": 6,
          "atk": 0,
          "atqq": null,
          "atqhb": 0,
          "atqx": null,
          "atqrp": null,
          "atqri": 0,
          "atqrm": null,
          "atqtr": 0
        },
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 9,
                "pct": 41
              },
              {
                "z": 1,
                "pct": 27
              },
              {
                "z": 6,
                "pct": 23
              },
              {
                "z": 8,
                "pct": 9
              }
            ],
            "eff": -9,
            "tot": 22,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 2,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "P2",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 3,
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
            "eff": 0,
            "tot": 4,
            "pts": 1,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 25
          },
          {
            "cod": "V8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 5,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "14 Nielson Ramiro",
        "num": 14,
        "objetivos": {
          "sq": 17,
          "rec": 59,
          "bqpos": 47,
          "bqpt": 13,
          "atk": 30,
          "atqq": null,
          "atqhb": 18,
          "atqx": 45,
          "atqrp": 44,
          "atqri": 75,
          "atqrm": 50,
          "atqtr": 16
        },
        "saques": [
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
            "eff": 20,
            "tot": 10,
            "pts": 2,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 20
          },
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
                "z": 7,
                "pct": 17
              },
              {
                "z": 6,
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
          }
        ],
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 47
              },
              {
                "z": 1,
                "pct": 16
              },
              {
                "z": 8,
                "pct": 11
              },
              {
                "z": 7,
                "pct": 11
              }
            ],
            "eff": 47,
            "tot": 19,
            "pts": 10,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 53
          },
          {
            "cod": "V5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 43
              },
              {
                "z": 1,
                "pct": 21
              },
              {
                "z": 4,
                "pct": 14
              },
              {
                "z": 6,
                "pct": 7
              }
            ],
            "eff": 27,
            "tot": 15,
            "pts": 7,
            "slash": 0,
            "err": 3,
            "video": null,
            "pts_pct": 47
          },
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 4,
                "pct": 100
              }
            ],
            "eff": 33,
            "tot": 3,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 33
          },
          {
            "cod": "V6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 4,
                "pct": 50
              },
              {
                "z": 2,
                "pct": 50
              }
            ],
            "eff": -50,
            "tot": 2,
            "pts": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "XP",
            "tipo": "",
            "orig": 8,
            "destinos": [],
            "eff": -100,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 5,
                "eff": 80,
                "pos": 100,
                "neg": 0,
                "pt": 3,
                "mas": 2,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 5,
                "eff": 40,
                "pos": 60,
                "neg": 0,
                "pt": 1,
                "mas": 2,
                "neu": 2,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 10,
                "eff": 60,
                "pos": 80,
                "neg": 0,
                "pt": 4,
                "mas": 4,
                "neu": 2,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 3,
                "eff": 67,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 2,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 5,
                "eff": 60,
                "pos": 80,
                "neg": 0,
                "pt": 2,
                "mas": 2,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 8,
                "eff": 62,
                "pos": 88,
                "neg": 0,
                "pt": 3,
                "mas": 4,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 2,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 2,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 4,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 4,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 6,
                "eff": 67,
                "pos": 100,
                "neg": 0,
                "pt": 2,
                "mas": 4,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 2,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 2,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "12 Zanotti Juan Cruz",
        "num": 12,
        "objetivos": {
          "sq": null,
          "rec": 35,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
        "saques": [],
        "ataques": [],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 2,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 2,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 3,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 3,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 3,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 3,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 4,
                "eff": 12,
                "pos": 25,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 3,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 5,
                "eff": 60,
                "pos": 80,
                "neg": 0,
                "pt": 2,
                "mas": 2,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 8,
                "eff": 62,
                "pos": 75,
                "neg": 0,
                "pt": 4,
                "mas": 2,
                "neu": 2,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 14,
                "eff": 61,
                "pos": 79,
                "neg": 0,
                "pt": 6,
                "mas": 5,
                "neu": 2,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 7,
                "eff": 0,
                "pos": 14,
                "neg": 14,
                "pt": 0,
                "mas": 1,
                "neu": 4,
                "med": 1,
                "ovp": 1,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 7,
                "eff": 0,
                "pos": 14,
                "neg": 14,
                "pt": 0,
                "mas": 1,
                "neu": 4,
                "med": 1,
                "ovp": 1,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 5,
                "eff": -10,
                "pos": 20,
                "neg": 20,
                "pt": 0,
                "mas": 1,
                "neu": 1,
                "med": 2,
                "ovp": 0,
                "err": 1
              },
              "total": {
                "tot": 5,
                "eff": -10,
                "pos": 20,
                "neg": 20,
                "pt": 0,
                "mas": 1,
                "neu": 1,
                "med": 2,
                "ovp": 0,
                "err": 1
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "5 Ramos Iaki",
        "num": 5,
        "objetivos": {
          "sq": -80,
          "rec": 50,
          "bqpos": 71,
          "bqpt": 29,
          "atk": 33,
          "atqq": null,
          "atqhb": 20,
          "atqx": 46,
          "atqrp": 60,
          "atqri": 0,
          "atqrm": 0,
          "atqtr": 25
        },
        "saques": [
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
            "err": 3,
            "video": null,
            "pts_pct": 0
          },
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
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 5,
                "pct": 62
              },
              {
                "z": 4,
                "pct": 25
              },
              {
                "z": 6,
                "pct": 12
              }
            ],
            "eff": 50,
            "tot": 8,
            "pts": 5,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 62
          },
          {
            "cod": "V6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 5,
                "pct": 29
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
                "z": 4,
                "pct": 14
              }
            ],
            "eff": 29,
            "tot": 7,
            "pts": 3,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 43
          },
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 4,
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
                "z": 3,
                "pct": 20
              }
            ],
            "eff": 20,
            "tot": 5,
            "pts": 2,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 40
          },
          {
            "cod": "V8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 5,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 2,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "X5",
            "tipo": "",
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
            "cod": "V5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "15 Rotezzi Ramiro Lucio",
        "num": 15,
        "objetivos": {
          "sq": -8,
          "rec": 8,
          "bqpos": 40,
          "bqpt": 0,
          "atk": 45,
          "atqq": 44,
          "atqhb": null,
          "atqx": null,
          "atqrp": 50,
          "atqri": 100,
          "atqrm": null,
          "atqtr": 25
        },
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 9,
                "pct": 46
              },
              {
                "z": 1,
                "pct": 31
              },
              {
                "z": 5,
                "pct": 8
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
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 3,
                "pct": 50
              },
              {
                "z": 1,
                "pct": 33
              },
              {
                "z": 6,
                "pct": 17
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
            "cod": "X1",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 7,
                "pct": 67
              },
              {
                "z": 3,
                "pct": 33
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
            "cod": "PR",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 3,
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
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 2,
                "eff": 25,
                "pos": 50,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 3,
                "eff": 33,
                "pos": 67,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": -100,
                "pos": 0,
                "neg": 100,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 1
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": -100,
                "pos": 0,
                "neg": 100,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 1
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "2 Ojuez Agustin",
        "num": 2,
        "objetivos": {
          "sq": -10,
          "rec": -25,
          "bqpos": 62,
          "bqpt": 23,
          "atk": 40,
          "atqq": 37,
          "atqhb": null,
          "atqx": null,
          "atqrp": 39,
          "atqri": 0,
          "atqrm": null,
          "atqtr": 100
        },
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 9,
                "pct": 30
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
                "z": 8,
                "pct": 10
              },
              {
                "z": 7,
                "pct": 10
              },
              {
                "z": 5,
                "pct": 10
              }
            ],
            "eff": -10,
            "tot": 10,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X1",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 5,
                "pct": 33
              },
              {
                "z": 6,
                "pct": 25
              },
              {
                "z": 7,
                "pct": 17
              },
              {
                "z": 3,
                "pct": 17
              }
            ],
            "eff": 33,
            "tot": 12,
            "pts": 6,
            "slash": 0,
            "err": 2,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 1,
                "pct": 50
              },
              {
                "z": 3,
                "pct": 33
              },
              {
                "z": 6,
                "pct": 17
              }
            ],
            "eff": 50,
            "tot": 6,
            "pts": 4,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 67
          },
          {
            "cod": "PR",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 3,
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
            "cod": "X2",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 6,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 1,
                "eff": -50,
                "pos": 0,
                "neg": 100,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 1,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 2,
                "eff": -25,
                "pos": 0,
                "neg": 50,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 1,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "11 Durdos Valentin",
        "num": 11,
        "objetivos": {
          "sq": -6,
          "rec": 41,
          "bqpos": 0,
          "bqpt": 0,
          "atk": 25,
          "atqq": null,
          "atqhb": 11,
          "atqx": 24,
          "atqrp": 50,
          "atqri": 100,
          "atqrm": 0,
          "atqtr": 9
        },
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
                "z": 5,
                "pct": 29
              },
              {
                "z": 1,
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
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 35
              },
              {
                "z": 6,
                "pct": 29
              },
              {
                "z": 7,
                "pct": 24
              },
              {
                "z": 3,
                "pct": 12
              }
            ],
            "eff": 24,
            "tot": 17,
            "pts": 6,
            "slash": 0,
            "err": 2,
            "video": null,
            "pts_pct": 35
          },
          {
            "cod": "V5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 62
              },
              {
                "z": 1,
                "pct": 12
              },
              {
                "z": 4,
                "pct": 12
              },
              {
                "z": 3,
                "pct": 12
              }
            ],
            "eff": 12,
            "tot": 8,
            "pts": 2,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 25
          },
          {
            "cod": "XP",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 3,
                "pct": 33
              },
              {
                "z": 6,
                "pct": 33
              },
              {
                "z": 1,
                "pct": 33
              }
            ],
            "eff": 50,
            "tot": 4,
            "pts": 3,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 75
          },
          {
            "cod": "PR",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 2,
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
            "cod": "VP",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 4,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 2,
                "eff": -25,
                "pos": 0,
                "neg": 50,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 1,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 2,
                "eff": -25,
                "pos": 0,
                "neg": 50,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 1,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 5,
                "eff": 30,
                "pos": 60,
                "neg": 20,
                "pt": 1,
                "mas": 2,
                "neu": 1,
                "med": 0,
                "ovp": 1,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 5,
                "eff": 30,
                "pos": 60,
                "neg": 20,
                "pt": 1,
                "mas": 2,
                "neu": 1,
                "med": 0,
                "ovp": 1,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "3 Romeo Winer Agustin",
        "num": 3,
        "objetivos": {
          "sq": -17,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
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
                "pct": 33
              },
              {
                "z": 6,
                "pct": 17
              }
            ],
            "eff": -17,
            "tot": 6,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [],
        "recepcion": {}
      },
      {
        "nombre": "9 Godoy Martin",
        "num": 9,
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
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
          }
        ],
        "ataques": [],
        "recepcion": {}
      },
      {
        "nombre": "18 Acosta Wilson",
        "num": 18,
        "objetivos": {
          "sq": 11,
          "rec": null,
          "bqpos": 0,
          "bqpt": 0,
          "atk": 25,
          "atqq": null,
          "atqhb": 50,
          "atqx": 17,
          "atqrp": 0,
          "atqri": 50,
          "atqrm": null,
          "atqtr": 20
        },
        "saques": [
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
                "z": 5,
                "pct": 22
              },
              {
                "z": 1,
                "pct": 22
              }
            ],
            "eff": 0,
            "tot": 9,
            "pts": 2,
            "plus": 0,
            "slash": 0,
            "err": 2,
            "video": null,
            "pts_pct": 22
          }
        ],
        "ataques": [
          {
            "cod": "X8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 1,
                "pct": 25
              },
              {
                "z": 5,
                "pct": 25
              },
              {
                "z": 4,
                "pct": 25
              },
              {
                "z": 3,
                "pct": 12
              }
            ],
            "eff": 11,
            "tot": 9,
            "pts": 4,
            "slash": 0,
            "err": 3,
            "video": null,
            "pts_pct": 44
          },
          {
            "cod": "V6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 4,
                "pct": 33
              },
              {
                "z": 1,
                "pct": 33
              },
              {
                "z": 9,
                "pct": 33
              }
            ],
            "eff": 33,
            "tot": 3,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 33
          },
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 4,
                "pct": 100
              }
            ],
            "eff": 33,
            "tot": 3,
            "pts": 2,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 67
          },
          {
            "cod": "V8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 4,
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
        "recepcion": {}
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "4 Vazquez Ezequiel",
        "num": 4,
        "rotaciones": [
          {
            "pos": "P4",
            "total": 10,
            "total_all": 19,
            "dist": [
              {
                "zona": 3,
                "tot": 5,
                "pts": 1,
                "pct": 50,
                "pct_p": 20
              },
              {
                "zona": 4,
                "tot": 3,
                "pts": 2,
                "pct": 30,
                "pct_p": 67
              },
              {
                "zona": 9,
                "tot": 2,
                "pts": 1,
                "pct": 20,
                "pct_p": 50
              }
            ]
          },
          {
            "pos": "P3",
            "total": 10,
            "total_all": 22,
            "dist": [
              {
                "zona": 9,
                "tot": 4,
                "pts": 2,
                "pct": 40,
                "pct_p": 50
              },
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
              }
            ]
          },
          {
            "pos": "P2",
            "total": 4,
            "total_all": 15,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 1,
                "pct": 25,
                "pct_p": 100
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 1,
                "pct": 25,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P5",
            "total": 11,
            "total_all": 16,
            "dist": [
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
                "zona": 4,
                "tot": 2,
                "pts": 2,
                "pct": 18,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P6",
            "total": 1,
            "total_all": 10,
            "dist": [
              {
                "zona": 2,
                "tot": 4,
                "pts": 4,
                "pct": 40,
                "pct_p": 100
              },
              {
                "zona": 4,
                "tot": 4,
                "pts": 1,
                "pct": 40,
                "pct_p": 25
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 1,
                "pct": 10,
                "pct_p": 100
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 0,
                "pct": 10,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P1",
            "total": 9,
            "total_all": 25,
            "dist": [
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
                "zona": 4,
                "tot": 2,
                "pts": 2,
                "pct": 22,
                "pct_p": 100
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 40,
            "tot": 25,
            "pts": 13,
            "pts_pct": 52
          },
          {
            "label": "P6",
            "eff": 50,
            "tot": 10,
            "pts": 6,
            "pts_pct": 60
          },
          {
            "label": "P5",
            "eff": 50,
            "tot": 16,
            "pts": 9,
            "pts_pct": 56
          },
          {
            "label": "P4",
            "eff": 16,
            "tot": 19,
            "pts": 6,
            "pts_pct": 32
          },
          {
            "label": "P3",
            "eff": 32,
            "tot": 22,
            "pts": 11,
            "pts_pct": 50
          },
          {
            "label": "P2",
            "eff": 20,
            "tot": 15,
            "pts": 5,
            "pts_pct": 33
          },
          {
            "label": "SO",
            "eff": 46,
            "tot": 65,
            "pts": 37,
            "pts_pct": 57
          },
          {
            "label": "TR",
            "eff": 14,
            "tot": 42,
            "pts": 13,
            "pts_pct": 31
          }
        ],
        "llamadas": [
          {
            "call": "K1",
            "tot": 45,
            "eff": 42,
            "pts_pct": 53,
            "dist": [
              {
                "zona": 3,
                "tot": 19,
                "pts": 11,
                "pct": 45,
                "pct_p": 58
              },
              {
                "zona": 4,
                "tot": 12,
                "pts": 8,
                "pct": 29,
                "pct_p": 67
              },
              {
                "zona": 9,
                "tot": 6,
                "pts": 3,
                "pct": 14,
                "pct_p": 50
              },
              {
                "zona": 2,
                "tot": 5,
                "pts": 2,
                "pct": 12,
                "pct_p": 40
              }
            ]
          },
          {
            "call": "KM",
            "tot": 10,
            "eff": 80,
            "pts_pct": 80,
            "dist": [
              {
                "zona": 2,
                "tot": 4,
                "pts": 4,
                "pct": 40,
                "pct_p": 100
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 1,
                "pct": 20,
                "pct_p": 50
              },
              {
                "zona": 9,
                "tot": 2,
                "pts": 2,
                "pct": 20,
                "pct_p": 100
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 1,
                "pct": 10,
                "pct_p": 100
              },
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 10,
                "pct_p": 0
              }
            ]
          },
          {
            "call": "KC",
            "tot": 37,
            "eff": 11,
            "pts_pct": 30,
            "dist": [
              {
                "zona": 4,
                "tot": 22,
                "pts": 7,
                "pct": 59,
                "pct_p": 32
              },
              {
                "zona": 9,
                "tot": 7,
                "pts": 3,
                "pct": 19,
                "pct_p": 43
              },
              {
                "zona": 2,
                "tot": 4,
                "pts": 0,
                "pct": 11,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 0,
                "pct": 5,
                "pct_p": 0
              },
              {
                "zona": 8,
                "tot": 2,
                "pts": 1,
                "pct": 5,
                "pct_p": 50
              }
            ]
          },
          {
            "call": "KE",
            "tot": 6,
            "eff": 50,
            "pts_pct": 67,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 3,
                "pct": 50,
                "pct_p": 100
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 1,
                "pct": 33,
                "pct_p": 50
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 0,
                "pct": 17,
                "pct_p": 0
              }
            ]
          }
        ],
        "so": {
          "eff": 46,
          "tot": 65
        },
        "tr": {
          "eff": 14,
          "tot": 42
        }
      },
      "suplente": {
        "nombre": "9 Godoy Martin",
        "num": 9,
        "rotaciones": [
          {
            "pos": "P4",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P3",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P2",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P5",
            "total": 2,
            "total_all": 2,
            "dist": [
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P6",
            "total": 2,
            "total_all": 2,
            "dist": [
              {
                "zona": 3,
                "tot": 1,
                "pts": 1,
                "pct": 50,
                "pct_p": 100
              },
              {
                "zona": 4,
                "tot": 1,
                "pts": 1,
                "pct": 50,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P1",
            "total": 2,
            "total_all": 2,
            "dist": [
              {
                "zona": 3,
                "tot": 2,
                "pts": 1,
                "pct": 100,
                "pct_p": 50
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
            "pts_pct": 50
          },
          {
            "label": "P6",
            "eff": 100,
            "tot": 2,
            "pts": 2,
            "pts_pct": 100
          },
          {
            "label": "P5",
            "eff": -50,
            "tot": 2,
            "pts": 0,
            "pts_pct": 0
          },
          {
            "label": "P4",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "P3",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "P2",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "SO",
            "eff": 33,
            "tot": 6,
            "pts": 3,
            "pts_pct": 50
          },
          {
            "label": "TR",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          }
        ],
        "llamadas": [
          {
            "call": "K1",
            "tot": 6,
            "eff": 33,
            "pts_pct": 50,
            "dist": [
              {
                "zona": 3,
                "tot": 4,
                "pts": 2,
                "pct": 67,
                "pct_p": 50
              },
              {
                "zona": 4,
                "tot": 1,
                "pts": 1,
                "pct": 17,
                "pct_p": 100
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 0,
                "pct": 17,
                "pct_p": 0
              }
            ]
          }
        ],
        "so": {
          "eff": 33,
          "tot": 6
        },
        "tr": {
          "eff": null,
          "tot": 0
        }
      }
    }
  },
  {
    "id": "Velez__2026-05-22",
    "nombre": "Velez",
    "rival": "Velez",
    "fecha": "22/05/2026",
    "resultado": "V",
    "equipo_obj": {
      "sq": 1,
      "rec": 40,
      "bqpos": 41,
      "bqpt": 20,
      "atk": 31,
      "atqq": 50,
      "atqhb": 4,
      "atqx": 35,
      "atqrp": 33,
      "atqri": 53,
      "atqrm": 40,
      "atqtr": 20
    },
    "jugadores": [
      {
        "nombre": "14 Nielson Ramiro",
        "num": 14,
        "objetivos": {
          "sq": 7,
          "rec": 50,
          "bqpos": 33,
          "bqpt": 17,
          "atk": 45,
          "atqq": null,
          "atqhb": 33,
          "atqx": 50,
          "atqrp": 27,
          "atqri": 50,
          "atqrm": 100,
          "atqtr": 50
        },
        "saques": [
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
            "eff": 0,
            "tot": 16,
            "pts": 1,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 6
          },
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
          }
        ],
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 54
              },
              {
                "z": 1,
                "pct": 17
              },
              {
                "z": 7,
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
            "err": 1,
            "video": null,
            "pts_pct": 54
          },
          {
            "cod": "V5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 44
              },
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
              }
            ],
            "eff": 33,
            "tot": 9,
            "pts": 4,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 44
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 10,
                "eff": 65,
                "pos": 80,
                "neg": 0,
                "pt": 5,
                "mas": 3,
                "neu": 2,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 12,
                "eff": 62,
                "pos": 75,
                "neg": 0,
                "pt": 6,
                "mas": 3,
                "neu": 3,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 3,
                "eff": 83,
                "pos": 100,
                "neg": 0,
                "pt": 2,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 6,
                "eff": 75,
                "pos": 83,
                "neg": 0,
                "pt": 4,
                "mas": 1,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 6,
                "eff": 75,
                "pos": 83,
                "neg": 0,
                "pt": 4,
                "mas": 1,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 2,
                "eff": -50,
                "pos": 0,
                "neg": 50,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 1
              },
              "P6": {
                "tot": 5,
                "eff": 50,
                "pos": 60,
                "neg": 0,
                "pt": 2,
                "mas": 1,
                "neu": 0,
                "med": 2,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 7,
                "eff": 21,
                "pos": 43,
                "neg": 14,
                "pt": 2,
                "mas": 1,
                "neu": 0,
                "med": 3,
                "ovp": 0,
                "err": 1
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 3,
                "eff": 17,
                "pos": 33,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 2,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 5,
                "eff": 10,
                "pos": 20,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 3,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "18 Acosta Wilson",
        "num": 18,
        "objetivos": {
          "sq": -31,
          "rec": null,
          "bqpos": 50,
          "bqpt": 25,
          "atk": 30,
          "atqq": null,
          "atqhb": -12,
          "atqx": 43,
          "atqrp": 38,
          "atqri": 40,
          "atqrm": 0,
          "atqtr": 27
        },
        "saques": [
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 1,
                "pct": 42
              },
              {
                "z": 5,
                "pct": 42
              },
              {
                "z": 6,
                "pct": 17
              }
            ],
            "eff": -33,
            "tot": 12,
            "pts": 1,
            "plus": 0,
            "slash": 0,
            "err": 5,
            "video": null,
            "pts_pct": 8
          }
        ],
        "ataques": [
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 4,
                "pct": 50
              },
              {
                "z": 1,
                "pct": 17
              },
              {
                "z": 9,
                "pct": 8
              },
              {
                "z": 2,
                "pct": 8
              }
            ],
            "eff": 42,
            "tot": 12,
            "pts": 7,
            "slash": 2,
            "err": 0,
            "video": null,
            "pts_pct": 58
          },
          {
            "cod": "X8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 1,
                "pct": 33
              },
              {
                "z": 4,
                "pct": 33
              },
              {
                "z": 5,
                "pct": 11
              },
              {
                "z": 6,
                "pct": 11
              }
            ],
            "eff": 44,
            "tot": 9,
            "pts": 6,
            "slash": 0,
            "err": 2,
            "video": null,
            "pts_pct": 67
          },
          {
            "cod": "V6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 4,
                "pct": 67
              },
              {
                "z": 7,
                "pct": 17
              },
              {
                "z": 5,
                "pct": 17
              }
            ],
            "eff": 0,
            "tot": 6,
            "pts": 1,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 17
          },
          {
            "cod": "V8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 4,
                "pct": 50
              },
              {
                "z": 1,
                "pct": 50
              }
            ],
            "eff": -50,
            "tot": 2,
            "pts": 0,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "PR",
            "tipo": "",
            "orig": 8,
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
        "recepcion": {}
      },
      {
        "nombre": "11 Durdos Valentin",
        "num": 11,
        "objetivos": {
          "sq": -50,
          "rec": 31,
          "bqpos": 20,
          "bqpt": 0,
          "atk": 6,
          "atqq": null,
          "atqhb": -12,
          "atqx": 20,
          "atqrp": 11,
          "atqri": 60,
          "atqrm": 20,
          "atqtr": -25
        },
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
            "err": 1,
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
            "err": 2,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 42
              },
              {
                "z": 6,
                "pct": 16
              },
              {
                "z": 5,
                "pct": 11
              },
              {
                "z": 7,
                "pct": 5
              }
            ],
            "eff": 20,
            "tot": 20,
            "pts": 9,
            "slash": 2,
            "err": 3,
            "video": null,
            "pts_pct": 45
          },
          {
            "cod": "V5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 62
              },
              {
                "z": 8,
                "pct": 25
              },
              {
                "z": 1,
                "pct": 12
              }
            ],
            "eff": -12,
            "tot": 8,
            "pts": 2,
            "slash": 3,
            "err": 0,
            "video": null,
            "pts_pct": 25
          },
          {
            "cod": "XP",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 1,
                "pct": 50
              },
              {
                "z": 3,
                "pct": 50
              }
            ],
            "eff": -33,
            "tot": 3,
            "pts": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 7,
                "eff": 50,
                "pos": 86,
                "neg": 0,
                "pt": 1,
                "mas": 5,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 7,
                "eff": 50,
                "pos": 86,
                "neg": 0,
                "pt": 1,
                "mas": 5,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 4,
                "eff": 12,
                "pos": 25,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 3,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 5,
                "eff": 20,
                "pos": 40,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 3,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 6,
                "eff": 33,
                "pos": 67,
                "neg": 17,
                "pt": 1,
                "mas": 3,
                "neu": 1,
                "med": 0,
                "ovp": 1,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 8,
                "eff": 31,
                "pos": 62,
                "neg": 12,
                "pt": 1,
                "mas": 4,
                "neu": 1,
                "med": 1,
                "ovp": 1,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 2,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 2,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 7,
                "eff": 36,
                "pos": 43,
                "neg": 0,
                "pt": 2,
                "mas": 1,
                "neu": 4,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 5,
                "eff": 20,
                "pos": 40,
                "neg": 20,
                "pt": 1,
                "mas": 1,
                "neu": 1,
                "med": 1,
                "ovp": 1,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 12,
                "eff": 29,
                "pos": 42,
                "neg": 8,
                "pt": 3,
                "mas": 2,
                "neu": 5,
                "med": 1,
                "ovp": 1,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "17 Herbsommer Leonardo",
        "num": 17,
        "objetivos": {
          "sq": 6,
          "rec": null,
          "bqpos": 40,
          "bqpt": 20,
          "atk": 55,
          "atqq": 55,
          "atqhb": null,
          "atqx": null,
          "atqrp": 64,
          "atqri": 60,
          "atqrm": null,
          "atqtr": 33
        },
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 5,
                "pct": 36
              },
              {
                "z": 7,
                "pct": 23
              },
              {
                "z": 6,
                "pct": 18
              },
              {
                "z": 1,
                "pct": 9
              },
              {
                "z": 8,
                "pct": 9
              },
              {
                "z": 9,
                "pct": 5
              }
            ],
            "eff": -5,
            "tot": 22,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 3,
                "pct": 38
              },
              {
                "z": 6,
                "pct": 15
              },
              {
                "z": 7,
                "pct": 15
              },
              {
                "z": 8,
                "pct": 8
              }
            ],
            "eff": 54,
            "tot": 13,
            "pts": 8,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 62
          },
          {
            "cod": "X7",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 3,
                "pct": 40
              },
              {
                "z": 8,
                "pct": 20
              },
              {
                "z": 9,
                "pct": 20
              },
              {
                "z": 1,
                "pct": 20
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
            "cod": "X1",
            "tipo": "",
            "orig": 3,
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
                "z": 3,
                "pct": 25
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
        "recepcion": {}
      },
      {
        "nombre": "4 Vazquez Ezequiel",
        "num": 4,
        "objetivos": {
          "sq": 19,
          "rec": null,
          "bqpos": 33,
          "bqpt": 0,
          "atk": -100,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": -100
        },
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
                "z": 5,
                "pct": 17
              },
              {
                "z": 8,
                "pct": 17
              },
              {
                "z": 1,
                "pct": 17
              },
              {
                "z": 7,
                "pct": 10
              }
            ],
            "eff": 13,
            "tot": 30,
            "pts": 5,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 17
          }
        ],
        "ataques": [
          {
            "cod": "P2",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 4,
                "pct": 100
              }
            ],
            "eff": -100,
            "tot": 1,
            "pts": 0,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {}
      },
      {
        "nombre": "2 Ojuez Agustin",
        "num": 2,
        "objetivos": {
          "sq": -9,
          "rec": null,
          "bqpos": 70,
          "bqpt": 40,
          "atk": 33,
          "atqq": 43,
          "atqhb": null,
          "atqx": null,
          "atqrp": 38,
          "atqri": null,
          "atqrm": 100,
          "atqtr": 17
        },
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
                "z": 7,
                "pct": 12
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
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X7",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 6,
                "pct": 40
              },
              {
                "z": 5,
                "pct": 20
              },
              {
                "z": 8,
                "pct": 20
              },
              {
                "z": 4,
                "pct": 20
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
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 1,
                "pct": 50
              },
              {
                "z": 7,
                "pct": 25
              },
              {
                "z": 6,
                "pct": 25
              }
            ],
            "eff": 0,
            "tot": 4,
            "pts": 1,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 25
          },
          {
            "cod": "X1",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 5,
                "pct": 25
              },
              {
                "z": 3,
                "pct": 25
              },
              {
                "z": 7,
                "pct": 25
              },
              {
                "z": 6,
                "pct": 25
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
            "cod": "P2",
            "tipo": "",
            "orig": 8,
            "destinos": [],
            "eff": -100,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "X2",
            "tipo": "",
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
        "recepcion": {}
      },
      {
        "nombre": "12 Zanotti Juan Cruz",
        "num": 12,
        "objetivos": {
          "sq": null,
          "rec": 31,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
        "saques": [],
        "ataques": [],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 2,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 3,
                "eff": 83,
                "pos": 100,
                "neg": 0,
                "pt": 2,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 3,
                "eff": 33,
                "pos": 67,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 4,
                "eff": 38,
                "pos": 75,
                "neg": 0,
                "pt": 0,
                "mas": 3,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 3,
                "eff": -33,
                "pos": 0,
                "neg": 33,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 2,
                "ovp": 0,
                "err": 1
              },
              "total": {
                "tot": 5,
                "eff": 0,
                "pos": 20,
                "neg": 20,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 2,
                "ovp": 0,
                "err": 1
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": -100,
                "pos": 0,
                "neg": 100,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 1
              },
              "total": {
                "tot": 2,
                "eff": -25,
                "pos": 50,
                "neg": 50,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 1
              }
            }
          }
        }
      },
      {
        "nombre": "19 Diaz Bolli Santiago",
        "num": 19,
        "objetivos": {
          "sq": 12,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 75
              },
              {
                "z": 5,
                "pct": 25
              }
            ],
            "eff": 0,
            "tot": 4,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [],
        "recepcion": {}
      },
      {
        "nombre": "6 Villarruel Juan Simon",
        "num": 6,
        "objetivos": {
          "sq": -15,
          "rec": 67,
          "bqpos": null,
          "bqpt": null,
          "atk": -20,
          "atqq": null,
          "atqhb": null,
          "atqx": -20,
          "atqrp": 0,
          "atqri": null,
          "atqrm": null,
          "atqtr": -33
        },
        "saques": [
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
            "eff": -20,
            "tot": 5,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 60
              },
              {
                "z": 1,
                "pct": 40
              }
            ],
            "eff": -20,
            "tot": 5,
            "pts": 1,
            "slash": 1,
            "err": 1,
            "video": null,
            "pts_pct": 20
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "5 Ramos Iaki",
        "num": 5,
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": 33,
          "bqpt": 33,
          "atk": 40,
          "atqq": null,
          "atqhb": 0,
          "atqx": 50,
          "atqrp": 0,
          "atqri": 50,
          "atqrm": null,
          "atqtr": 100
        },
        "saques": [
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
        "ataques": [
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 1,
                "pct": 33
              },
              {
                "z": 4,
                "pct": 33
              },
              {
                "z": 6,
                "pct": 33
              }
            ],
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
            "tipo": "",
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
          },
          {
            "cod": "V6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 8,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {}
      },
      {
        "nombre": "9 Godoy Martin",
        "num": 9,
        "objetivos": {
          "sq": 12,
          "rec": null,
          "bqpos": 20,
          "bqpt": 0,
          "atk": 50,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": 50
        },
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
                "z": 3,
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
        "ataques": [
          {
            "cod": "P2",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 4,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "PR",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 3,
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
        "recepcion": {}
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "4 Vazquez Ezequiel",
        "num": 4,
        "rotaciones": [
          {
            "pos": "P4",
            "total": 6,
            "total_all": 13,
            "dist": [
              {
                "zona": 9,
                "tot": 2,
                "pts": 1,
                "pct": 33,
                "pct_p": 50
              },
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
              }
            ]
          },
          {
            "pos": "P3",
            "total": 4,
            "total_all": 13,
            "dist": [
              {
                "zona": 3,
                "tot": 3,
                "pts": 2,
                "pct": 75,
                "pct_p": 67
              },
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 25,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P2",
            "total": 9,
            "total_all": 20,
            "dist": [
              {
                "zona": 3,
                "tot": 4,
                "pts": 3,
                "pct": 44,
                "pct_p": 75
              },
              {
                "zona": 4,
                "tot": 3,
                "pts": 1,
                "pct": 33,
                "pct_p": 33
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 1,
                "pct": 11,
                "pct_p": 100
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 0,
                "pct": 11,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P5",
            "total": 6,
            "total_all": 19,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 2,
                "pct": 50,
                "pct_p": 67
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 0,
                "pct": 33,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 17,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P6",
            "total": 9,
            "total_all": 23,
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
              }
            ]
          },
          {
            "pos": "P1",
            "total": 7,
            "total_all": 23,
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
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 61,
            "tot": 23,
            "pts": 14,
            "pts_pct": 61
          },
          {
            "label": "P6",
            "eff": 22,
            "tot": 23,
            "pts": 10,
            "pts_pct": 43
          },
          {
            "label": "P5",
            "eff": 37,
            "tot": 19,
            "pts": 10,
            "pts_pct": 53
          },
          {
            "label": "P4",
            "eff": 23,
            "tot": 13,
            "pts": 6,
            "pts_pct": 46
          },
          {
            "label": "P3",
            "eff": 46,
            "tot": 13,
            "pts": 7,
            "pts_pct": 54
          },
          {
            "label": "P2",
            "eff": 25,
            "tot": 20,
            "pts": 9,
            "pts_pct": 45
          },
          {
            "label": "SO",
            "eff": 40,
            "tot": 68,
            "pts": 36,
            "pts_pct": 53
          },
          {
            "label": "TR",
            "eff": 30,
            "tot": 43,
            "pts": 20,
            "pts_pct": 47
          }
        ],
        "llamadas": [
          {
            "call": "K1",
            "tot": 39,
            "eff": 41,
            "pts_pct": 56,
            "dist": [
              {
                "zona": 4,
                "tot": 15,
                "pts": 7,
                "pct": 41,
                "pct_p": 47
              },
              {
                "zona": 3,
                "tot": 14,
                "pts": 9,
                "pct": 38,
                "pct_p": 64
              },
              {
                "zona": 2,
                "tot": 5,
                "pts": 3,
                "pct": 14,
                "pct_p": 60
              },
              {
                "zona": 9,
                "tot": 3,
                "pts": 2,
                "pct": 8,
                "pct_p": 67
              }
            ]
          },
          {
            "call": "K7",
            "tot": 5,
            "eff": 20,
            "pts_pct": 40,
            "dist": [
              {
                "zona": 3,
                "tot": 1,
                "pts": 1,
                "pct": 33,
                "pct_p": 100
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 0,
                "pct": 33,
                "pct_p": 0
              },
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 33,
                "pct_p": 0
              }
            ]
          },
          {
            "call": "KE",
            "tot": 16,
            "eff": 44,
            "pts_pct": 56,
            "dist": [
              {
                "zona": 4,
                "tot": 9,
                "pts": 4,
                "pct": 60,
                "pct_p": 44
              },
              {
                "zona": 9,
                "tot": 3,
                "pts": 2,
                "pct": 20,
                "pct_p": 67
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 3,
                "pct": 20,
                "pct_p": 100
              }
            ]
          }
        ],
        "so": {
          "eff": 40,
          "tot": 68
        },
        "tr": {
          "eff": 30,
          "tot": 43
        }
      },
      "suplente": {
        "nombre": "9 Godoy Martin",
        "num": 9,
        "rotaciones": [
          {
            "pos": "P4",
            "total": 2,
            "total_all": 3,
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
                "pts": 1,
                "pct": 33,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P3",
            "total": 1,
            "total_all": 2,
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
              }
            ]
          },
          {
            "pos": "P2",
            "total": 0,
            "total_all": 1,
            "dist": [
              {
                "zona": 9,
                "tot": 1,
                "pts": 1,
                "pct": 100,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P5",
            "total": 1,
            "total_all": 1,
            "dist": [
              {
                "zona": 4,
                "tot": 1,
                "pts": 1,
                "pct": 100,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P6",
            "total": 4,
            "total_all": 5,
            "dist": [
              {
                "zona": 2,
                "tot": 2,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 1,
                "pct": 50,
                "pct_p": 50
              }
            ]
          },
          {
            "pos": "P1",
            "total": 2,
            "total_all": 7,
            "dist": [
              {
                "zona": 4,
                "tot": 4,
                "pts": 1,
                "pct": 57,
                "pct_p": 25
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 1,
                "pct": 29,
                "pct_p": 50
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 14,
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
            "pts_pct": 29
          },
          {
            "label": "P6",
            "eff": 40,
            "tot": 5,
            "pts": 2,
            "pts_pct": 40
          },
          {
            "label": "P5",
            "eff": 100,
            "tot": 1,
            "pts": 1,
            "pts_pct": 100
          },
          {
            "label": "P4",
            "eff": 33,
            "tot": 3,
            "pts": 1,
            "pts_pct": 33
          },
          {
            "label": "P3",
            "eff": 50,
            "tot": 2,
            "pts": 1,
            "pts_pct": 50
          },
          {
            "label": "P2",
            "eff": 100,
            "tot": 1,
            "pts": 1,
            "pts_pct": 100
          },
          {
            "label": "SO",
            "eff": 31,
            "tot": 13,
            "pts": 5,
            "pts_pct": 38
          },
          {
            "label": "TR",
            "eff": 33,
            "tot": 6,
            "pts": 3,
            "pts_pct": 50
          }
        ],
        "llamadas": [
          {
            "call": "K1",
            "tot": 9,
            "eff": 11,
            "pts_pct": 22,
            "dist": [
              {
                "zona": 4,
                "tot": 5,
                "pts": 1,
                "pct": 56,
                "pct_p": 20
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 0,
                "pct": 22,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 1,
                "pct": 22,
                "pct_p": 50
              }
            ]
          }
        ],
        "so": {
          "eff": 31,
          "tot": 13
        },
        "tr": {
          "eff": 33,
          "tot": 6
        }
      }
    }
  },
  {
    "id": "Defensores__2026-05-26",
    "nombre": "Defensores",
    "rival": "Defensores",
    "fecha": "26/05/2026",
    "resultado": "D",
    "equipo_obj": {
      "sq": -3,
      "rec": 28,
      "bqpos": 58,
      "bqpt": 22,
      "atk": 19,
      "atqq": 39,
      "atqhb": -2,
      "atqx": 27,
      "atqrp": 24,
      "atqri": 67,
      "atqrm": 25,
      "atqtr": 2
    },
    "jugadores": [
      {
        "nombre": "4 Vazquez Ezequiel",
        "num": 4,
        "objetivos": {
          "sq": 15,
          "rec": -100,
          "bqpos": 57,
          "bqpt": 29,
          "atk": 50,
          "atqq": null,
          "atqhb": 0,
          "atqx": null,
          "atqrp": 0,
          "atqri": 0,
          "atqrm": null,
          "atqtr": 75
        },
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
            "eff": 7,
            "tot": 15,
            "pts": 1,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 7
          }
        ],
        "ataques": [
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 8,
                "pct": 25
              },
              {
                "z": 9,
                "pct": 25
              },
              {
                "z": 4,
                "pct": 25
              },
              {
                "z": 7,
                "pct": 25
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
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 6,
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
            "cod": "V6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 6,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": -100,
                "pos": 0,
                "neg": 100,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 1
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": -100,
                "pos": 0,
                "neg": 100,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 1
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "17 Herbsommer Leonardo",
        "num": 17,
        "objetivos": {
          "sq": -11,
          "rec": null,
          "bqpos": 60,
          "bqpt": 35,
          "atk": 19,
          "atqq": 20,
          "atqhb": null,
          "atqx": null,
          "atqrp": -50,
          "atqri": 57,
          "atqrm": null,
          "atqtr": 67
        },
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
            "eff": -12,
            "tot": 16,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 2,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 7,
                "pct": 50
              },
              {
                "z": 9,
                "pct": 30
              },
              {
                "z": 6,
                "pct": 20
              }
            ],
            "eff": 0,
            "tot": 10,
            "pts": 4,
            "slash": 0,
            "err": 4,
            "video": null,
            "pts_pct": 40
          },
          {
            "cod": "X7",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 9,
                "pct": 67
              },
              {
                "z": 2,
                "pct": 33
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
            "cod": "X1",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 3,
                "pct": 50
              },
              {
                "z": 5,
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
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 8,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {}
      },
      {
        "nombre": "14 Nielson Ramiro",
        "num": 14,
        "objetivos": {
          "sq": 0,
          "rec": 26,
          "bqpos": 44,
          "bqpt": 11,
          "atk": 20,
          "atqq": null,
          "atqhb": 8,
          "atqx": 31,
          "atqrp": 12,
          "atqri": 100,
          "atqrm": 0,
          "atqtr": 11
        },
        "saques": [
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 64
              },
              {
                "z": 1,
                "pct": 14
              },
              {
                "z": 5,
                "pct": 7
              },
              {
                "z": 2,
                "pct": 7
              },
              {
                "z": 3,
                "pct": 7
              }
            ],
            "eff": -7,
            "tot": 14,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 7,
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
                "z": 9,
                "pct": 12
              },
              {
                "z": 8,
                "pct": 12
              }
            ],
            "eff": 0,
            "tot": 8,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 6,
                "pct": 23
              },
              {
                "z": 1,
                "pct": 15
              },
              {
                "z": 7,
                "pct": 15
              },
              {
                "z": 2,
                "pct": 15
              }
            ],
            "eff": 31,
            "tot": 13,
            "pts": 6,
            "slash": 1,
            "err": 1,
            "video": null,
            "pts_pct": 46
          },
          {
            "cod": "V5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 5,
                "pct": 33
              },
              {
                "z": 1,
                "pct": 33
              },
              {
                "z": 6,
                "pct": 25
              },
              {
                "z": 9,
                "pct": 8
              }
            ],
            "eff": 8,
            "tot": 12,
            "pts": 3,
            "slash": 0,
            "err": 2,
            "video": null,
            "pts_pct": 25
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 5,
                "eff": 20,
                "pos": 40,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 3,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 6,
                "eff": 25,
                "pos": 50,
                "neg": 17,
                "pt": 1,
                "mas": 2,
                "neu": 2,
                "med": 0,
                "ovp": 1,
                "err": 0
              },
              "P1": {
                "tot": 3,
                "eff": 33,
                "pos": 67,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 14,
                "eff": 25,
                "pos": 50,
                "neg": 7,
                "pt": 1,
                "mas": 6,
                "neu": 6,
                "med": 0,
                "ovp": 1,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 2,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 4,
                "eff": 75,
                "pos": 75,
                "neg": 0,
                "pt": 3,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 4,
                "eff": -38,
                "pos": 25,
                "neg": 50,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 2
              },
              "P6": {
                "tot": 6,
                "eff": 25,
                "pos": 50,
                "neg": 17,
                "pt": 2,
                "mas": 1,
                "neu": 1,
                "med": 1,
                "ovp": 0,
                "err": 1
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 10,
                "eff": 0,
                "pos": 40,
                "neg": 30,
                "pt": 2,
                "mas": 2,
                "neu": 1,
                "med": 2,
                "ovp": 0,
                "err": 3
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "11 Durdos Valentin",
        "num": 11,
        "objetivos": {
          "sq": 9,
          "rec": 24,
          "bqpos": 46,
          "bqpt": 8,
          "atk": 12,
          "atqq": null,
          "atqhb": -7,
          "atqx": 35,
          "atqrp": 50,
          "atqri": 50,
          "atqrm": 0,
          "atqtr": -11
        },
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
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 8,
                "pct": 36
              },
              {
                "z": 6,
                "pct": 21
              },
              {
                "z": 9,
                "pct": 14
              },
              {
                "z": 1,
                "pct": 14
              }
            ],
            "eff": 40,
            "tot": 15,
            "pts": 7,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 47
          },
          {
            "cod": "V5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 6,
                "pct": 31
              },
              {
                "z": 1,
                "pct": 23
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
            "eff": -7,
            "tot": 14,
            "pts": 2,
            "slash": 0,
            "err": 3,
            "video": null,
            "pts_pct": 14
          },
          {
            "cod": "XP",
            "tipo": "",
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
            "err": 1,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "VP",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 7,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [],
            "eff": -100,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 6,
                "eff": 25,
                "pos": 33,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 4,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 9,
                "eff": 39,
                "pos": 56,
                "neg": 0,
                "pt": 2,
                "mas": 3,
                "neu": 4,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 2,
                "eff": 25,
                "pos": 50,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 4,
                "eff": 50,
                "pos": 75,
                "neg": 0,
                "pt": 1,
                "mas": 2,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 2,
                "eff": -50,
                "pos": 0,
                "neg": 50,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 1
              },
              "P6": {
                "tot": 4,
                "eff": 0,
                "pos": 25,
                "neg": 25,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 1,
                "ovp": 0,
                "err": 1
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 6,
                "eff": -17,
                "pos": 17,
                "neg": 33,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 2,
                "ovp": 0,
                "err": 2
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "18 Acosta Wilson",
        "num": 18,
        "objetivos": {
          "sq": -13,
          "rec": null,
          "bqpos": 50,
          "bqpt": 0,
          "atk": 8,
          "atqq": null,
          "atqhb": -11,
          "atqx": 28,
          "atqrp": 22,
          "atqri": 100,
          "atqrm": 100,
          "atqtr": -12
        },
        "saques": [
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
                "z": 5,
                "pct": 20
              },
              {
                "z": 3,
                "pct": 20
              },
              {
                "z": 1,
                "pct": 7
              }
            ],
            "eff": -13,
            "tot": 15,
            "pts": 1,
            "plus": 0,
            "slash": 0,
            "err": 3,
            "video": null,
            "pts_pct": 7
          }
        ],
        "ataques": [
          {
            "cod": "V6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 1,
                "pct": 50
              },
              {
                "z": 8,
                "pct": 12
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
            "eff": -12,
            "tot": 16,
            "pts": 2,
            "slash": 4,
            "err": 0,
            "video": null,
            "pts_pct": 12
          },
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 1,
                "pct": 42
              },
              {
                "z": 9,
                "pct": 25
              },
              {
                "z": 7,
                "pct": 8
              },
              {
                "z": 5,
                "pct": 8
              }
            ],
            "eff": 25,
            "tot": 12,
            "pts": 5,
            "slash": 2,
            "err": 0,
            "video": null,
            "pts_pct": 42
          },
          {
            "cod": "X8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 5,
                "pct": 50
              },
              {
                "z": 6,
                "pct": 17
              },
              {
                "z": 9,
                "pct": 17
              },
              {
                "z": 1,
                "pct": 17
              }
            ],
            "eff": 33,
            "tot": 6,
            "pts": 3,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "V8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 6,
                "pct": 50
              },
              {
                "z": 1,
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
            "cod": "V5",
            "tipo": "",
            "orig": 4,
            "destinos": [],
            "eff": -100,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {}
      },
      {
        "nombre": "12 Zanotti Juan Cruz",
        "num": 12,
        "objetivos": {
          "sq": null,
          "rec": 39,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
        "saques": [],
        "ataques": [],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 7,
                "eff": 64,
                "pos": 86,
                "neg": 0,
                "pt": 3,
                "mas": 3,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 7,
                "eff": 64,
                "pos": 86,
                "neg": 0,
                "pt": 3,
                "mas": 3,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 3,
                "eff": 67,
                "pos": 67,
                "neg": 0,
                "pt": 2,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 8,
                "eff": 31,
                "pos": 50,
                "neg": 12,
                "pt": 3,
                "mas": 1,
                "neu": 0,
                "med": 3,
                "ovp": 0,
                "err": 1
              },
              "total": {
                "tot": 11,
                "eff": 41,
                "pos": 55,
                "neg": 9,
                "pt": 5,
                "mas": 1,
                "neu": 1,
                "med": 3,
                "ovp": 0,
                "err": 1
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 3,
                "eff": 17,
                "pos": 33,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 1,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 4,
                "eff": 0,
                "pos": 25,
                "neg": 25,
                "pt": 1,
                "mas": 0,
                "neu": 2,
                "med": 0,
                "ovp": 0,
                "err": 1
              },
              "total": {
                "tot": 7,
                "eff": 7,
                "pos": 29,
                "neg": 14,
                "pt": 1,
                "mas": 1,
                "neu": 3,
                "med": 1,
                "ovp": 0,
                "err": 1
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "2 Ojuez Agustin",
        "num": 2,
        "objetivos": {
          "sq": -12,
          "rec": 0,
          "bqpos": 75,
          "bqpt": 31,
          "atk": 57,
          "atqq": 62,
          "atqhb": null,
          "atqx": null,
          "atqrp": 71,
          "atqri": 100,
          "atqrm": 50,
          "atqtr": 25
        },
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
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X7",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 7,
                "pct": 20
              },
              {
                "z": 8,
                "pct": 20
              },
              {
                "z": 3,
                "pct": 20
              },
              {
                "z": 1,
                "pct": 20
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
            "cod": "X1",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 6,
                "pct": 60
              },
              {
                "z": 7,
                "pct": 20
              },
              {
                "z": 5,
                "pct": 20
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
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 8,
                "pct": 50
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
            "eff": 50,
            "tot": 4,
            "pts": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "19 Diaz Bolli Santiago",
        "num": 19,
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
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
            "tot": 3,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [],
        "recepcion": {}
      },
      {
        "nombre": "5 Ramos Iaki",
        "num": 5,
        "objetivos": {
          "sq": -100,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atk": 33,
          "atqq": null,
          "atqhb": 50,
          "atqx": 0,
          "atqrp": 0,
          "atqri": null,
          "atqrm": 100,
          "atqtr": 0
        },
        "saques": [
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
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "V6",
            "tipo": "",
            "orig": 2,
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
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 1,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "V8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 1,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {}
      },
      {
        "nombre": "6 Villarruel Juan Simon",
        "num": 6,
        "objetivos": {
          "sq": -100,
          "rec": 50,
          "bqpos": 100,
          "bqpt": 0,
          "atk": -50,
          "atqq": null,
          "atqhb": null,
          "atqx": -50,
          "atqrp": null,
          "atqri": 0,
          "atqrm": null,
          "atqtr": -100
        },
        "saques": [
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 3,
                "pct": 100
              }
            ],
            "eff": -100,
            "tot": 1,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 3,
                "pct": 50
              },
              {
                "z": 6,
                "pct": 50
              }
            ],
            "eff": -50,
            "tot": 2,
            "pts": 0,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "4 Vazquez Ezequiel",
        "num": 4,
        "rotaciones": [
          {
            "pos": "P4",
            "total": 6,
            "total_all": 8,
            "dist": [
              {
                "zona": 3,
                "tot": 3,
                "pts": 2,
                "pct": 50,
                "pct_p": 67
              },
              {
                "zona": 4,
                "tot": 2,
                "pts": 2,
                "pct": 33,
                "pct_p": 100
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 1,
                "pct": 17,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P3",
            "total": 7,
            "total_all": 18,
            "dist": [
              {
                "zona": 4,
                "tot": 4,
                "pts": 2,
                "pct": 57,
                "pct_p": 50
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 14,
                "pct_p": 0
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 0,
                "pct": 14,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 1,
                "pct": 14,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P2",
            "total": 0,
            "total_all": 8,
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
                "zona": 9,
                "tot": 1,
                "pts": 1,
                "pct": 12,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P5",
            "total": 6,
            "total_all": 15,
            "dist": [
              {
                "zona": 3,
                "tot": 3,
                "pts": 2,
                "pct": 50,
                "pct_p": 67
              },
              {
                "zona": 4,
                "tot": 2,
                "pts": 1,
                "pct": 33,
                "pct_p": 50
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 1,
                "pct": 17,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P6",
            "total": 12,
            "total_all": 28,
            "dist": [
              {
                "zona": 4,
                "tot": 5,
                "pts": 1,
                "pct": 42,
                "pct_p": 20
              },
              {
                "zona": 2,
                "tot": 4,
                "pts": 1,
                "pct": 33,
                "pct_p": 25
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 1,
                "pct": 25,
                "pct_p": 33
              }
            ]
          },
          {
            "pos": "P1",
            "total": 9,
            "total_all": 19,
            "dist": [
              {
                "zona": 4,
                "tot": 4,
                "pts": 1,
                "pct": 44,
                "pct_p": 25
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 1,
                "pct": 22,
                "pct_p": 50
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 0,
                "pct": 22,
                "pct_p": 0
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 1,
                "pct": 11,
                "pct_p": 100
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 0,
            "tot": 19,
            "pts": 7,
            "pts_pct": 37
          },
          {
            "label": "P6",
            "eff": 7,
            "tot": 28,
            "pts": 8,
            "pts_pct": 29
          },
          {
            "label": "P5",
            "eff": 47,
            "tot": 15,
            "pts": 9,
            "pts_pct": 60
          },
          {
            "label": "P4",
            "eff": 75,
            "tot": 8,
            "pts": 6,
            "pts_pct": 75
          },
          {
            "label": "P3",
            "eff": 17,
            "tot": 18,
            "pts": 5,
            "pts_pct": 28
          },
          {
            "label": "P2",
            "eff": 62,
            "tot": 8,
            "pts": 5,
            "pts_pct": 62
          },
          {
            "label": "SO",
            "eff": 39,
            "tot": 64,
            "pts": 32,
            "pts_pct": 50
          },
          {
            "label": "TR",
            "eff": -6,
            "tot": 32,
            "pts": 8,
            "pts_pct": 25
          }
        ],
        "llamadas": [
          {
            "call": "K1",
            "tot": 35,
            "eff": 20,
            "pts_pct": 40,
            "dist": [
              {
                "zona": 4,
                "tot": 16,
                "pts": 7,
                "pct": 47,
                "pct_p": 44
              },
              {
                "zona": 3,
                "tot": 9,
                "pts": 4,
                "pct": 26,
                "pct_p": 44
              },
              {
                "zona": 2,
                "tot": 6,
                "pts": 1,
                "pct": 18,
                "pct_p": 17
              },
              {
                "zona": 9,
                "tot": 2,
                "pts": 1,
                "pct": 6,
                "pct_p": 50
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 1,
                "pct": 3,
                "pct_p": 100
              }
            ]
          },
          {
            "call": "K2",
            "tot": 5,
            "eff": 80,
            "pts_pct": 80,
            "dist": [
              {
                "zona": 3,
                "tot": 3,
                "pts": 2,
                "pct": 60,
                "pct_p": 67
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 2,
                "pct": 40,
                "pct_p": 100
              }
            ]
          },
          {
            "call": "KC",
            "tot": 5,
            "eff": 60,
            "pts_pct": 60,
            "dist": [
              {
                "zona": 3,
                "tot": 5,
                "pts": 3,
                "pct": 100,
                "pct_p": 60
              }
            ]
          },
          {
            "call": "KE",
            "tot": 5,
            "eff": 40,
            "pts_pct": 40,
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
                "tot": 1,
                "pts": 1,
                "pct": 20,
                "pct_p": 100
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 1,
                "pct": 20,
                "pct_p": 100
              }
            ]
          }
        ],
        "so": {
          "eff": 39,
          "tot": 64
        },
        "tr": {
          "eff": -6,
          "tot": 32
        }
      },
      "suplente": {
        "nombre": "9 Godoy Martin",
        "num": 9,
        "rotaciones": [
          {
            "pos": "P4",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P3",
            "total": 1,
            "total_all": 4,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 0,
                "pct": 25,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 25,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P2",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P5",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P6",
            "total": 1,
            "total_all": 2,
            "dist": [
              {
                "zona": 2,
                "tot": 1,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 4,
                "tot": 1,
                "pts": 1,
                "pct": 50,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P1",
            "total": 0,
            "total_all": 2,
            "dist": [
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 1,
                "pct": 50,
                "pct_p": 100
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
            "pts_pct": 50
          },
          {
            "label": "P6",
            "eff": 50,
            "tot": 2,
            "pts": 1,
            "pts_pct": 50
          },
          {
            "label": "P5",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "P4",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "P3",
            "eff": -50,
            "tot": 4,
            "pts": 0,
            "pts_pct": 0
          },
          {
            "label": "P2",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "SO",
            "eff": 0,
            "tot": 5,
            "pts": 1,
            "pts_pct": 20
          },
          {
            "label": "TR",
            "eff": 0,
            "tot": 3,
            "pts": 1,
            "pts_pct": 33
          }
        ],
        "llamadas": [],
        "so": {
          "eff": 0,
          "tot": 5
        },
        "tr": {
          "eff": 0,
          "tot": 3
        }
      }
    }
  },
  {
    "id": "Lomas__2026-05-30",
    "nombre": "Lomas",
    "rival": "Lomas",
    "fecha": "30/05/2026",
    "resultado": "V",
    "equipo_obj": {
      "sq": -3,
      "rec": 23,
      "bqpos": 53,
      "bqpt": 25,
      "atk": 30,
      "atqq": 36,
      "atqhb": 32,
      "atqx": 20,
      "atqrp": 35,
      "atqri": 50,
      "atqrm": 6,
      "atqtr": 27
    },
    "jugadores": [
      {
        "nombre": "4 Vazquez Ezequiel",
        "num": 4,
        "objetivos": {
          "sq": 0,
          "rec": 0,
          "bqpos": 50,
          "bqpt": 0,
          "atk": 0,
          "atqq": null,
          "atqhb": 0,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": 0,
          "atqtr": 0
        },
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
            "eff": -5,
            "tot": 22,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "P2",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 4,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 2,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "V6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 5,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "17 Herbsommer Leonardo",
        "num": 17,
        "objetivos": {
          "sq": 9,
          "rec": null,
          "bqpos": 48,
          "bqpt": 28,
          "atk": 15,
          "atqq": 16,
          "atqhb": null,
          "atqx": null,
          "atqrp": 27,
          "atqri": 20,
          "atqrm": null,
          "atqtr": -25
        },
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
                "pct": 19
              },
              {
                "z": 3,
                "pct": 6
              }
            ],
            "eff": 0,
            "tot": 16,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 1,
                "pct": 36
              },
              {
                "z": 6,
                "pct": 27
              },
              {
                "z": 3,
                "pct": 18
              },
              {
                "z": 9,
                "pct": 9
              }
            ],
            "eff": 9,
            "tot": 11,
            "pts": 4,
            "slash": 0,
            "err": 3,
            "video": null,
            "pts_pct": 36
          },
          {
            "cod": "X7",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 3,
                "pct": 75
              },
              {
                "z": 1,
                "pct": 25
              }
            ],
            "eff": 0,
            "tot": 4,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "X1",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 5,
                "pct": 67
              },
              {
                "z": 3,
                "pct": 33
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
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 4,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "PR",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 6,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {}
      },
      {
        "nombre": "11 Durdos Valentin",
        "num": 11,
        "objetivos": {
          "sq": 0,
          "rec": 28,
          "bqpos": 29,
          "bqpt": 14,
          "atk": 39,
          "atqq": null,
          "atqhb": 19,
          "atqx": 44,
          "atqrp": 56,
          "atqri": 100,
          "atqrm": -12,
          "atqtr": 47
        },
        "saques": [
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 1,
                "pct": 57
              },
              {
                "z": 5,
                "pct": 29
              },
              {
                "z": 3,
                "pct": 14
              }
            ],
            "eff": 0,
            "tot": 7,
            "pts": 1,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 14
          },
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
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "V5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 56
              },
              {
                "z": 1,
                "pct": 12
              },
              {
                "z": 6,
                "pct": 6
              },
              {
                "z": 3,
                "pct": 6
              }
            ],
            "eff": 19,
            "tot": 16,
            "pts": 7,
            "slash": 2,
            "err": 2,
            "video": null,
            "pts_pct": 44
          },
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 38
              },
              {
                "z": 7,
                "pct": 25
              },
              {
                "z": 1,
                "pct": 19
              },
              {
                "z": 5,
                "pct": 12
              }
            ],
            "eff": 44,
            "tot": 16,
            "pts": 10,
            "slash": 1,
            "err": 2,
            "video": null,
            "pts_pct": 62
          },
          {
            "cod": "PR",
            "tipo": "",
            "orig": 8,
            "destinos": [],
            "eff": 100,
            "tot": 3,
            "pts": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 100
          },
          {
            "cod": "XP",
            "tipo": "",
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
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 8,
                "eff": 44,
                "pos": 62,
                "neg": 0,
                "pt": 2,
                "mas": 3,
                "neu": 1,
                "med": 2,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 6,
                "eff": 58,
                "pos": 83,
                "neg": 0,
                "pt": 2,
                "mas": 3,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 14,
                "eff": 50,
                "pos": 71,
                "neg": 0,
                "pt": 4,
                "mas": 6,
                "neu": 2,
                "med": 2,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 6,
                "eff": 0,
                "pos": 33,
                "neg": 33,
                "pt": 2,
                "mas": 0,
                "neu": 1,
                "med": 1,
                "ovp": 0,
                "err": 2
              },
              "P6": {
                "tot": 3,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 2,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 9,
                "eff": 0,
                "pos": 22,
                "neg": 22,
                "pt": 2,
                "mas": 0,
                "neu": 3,
                "med": 2,
                "ovp": 0,
                "err": 2
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 1,
                "eff": -50,
                "pos": 0,
                "neg": 100,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 1,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 2,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 5,
                "eff": 10,
                "pos": 40,
                "neg": 20,
                "pt": 0,
                "mas": 2,
                "neu": 1,
                "med": 1,
                "ovp": 1,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "14 Nielson Ramiro",
        "num": 14,
        "objetivos": {
          "sq": 1,
          "rec": 13,
          "bqpos": 67,
          "bqpt": 33,
          "atk": 9,
          "atqq": null,
          "atqhb": 0,
          "atqx": 14,
          "atqrp": 33,
          "atqri": 67,
          "atqrm": -25,
          "atqtr": 0
        },
        "saques": [
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
            "eff": -4,
            "tot": 23,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          },
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
          }
        ],
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 48
              },
              {
                "z": 7,
                "pct": 19
              },
              {
                "z": 5,
                "pct": 10
              },
              {
                "z": 6,
                "pct": 10
              }
            ],
            "eff": 14,
            "tot": 21,
            "pts": 7,
            "slash": 3,
            "err": 1,
            "video": null,
            "pts_pct": 33
          },
          {
            "cod": "V5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 1,
                "pct": 45
              },
              {
                "z": 2,
                "pct": 27
              },
              {
                "z": 3,
                "pct": 18
              },
              {
                "z": 5,
                "pct": 9
              }
            ],
            "eff": 0,
            "tot": 11,
            "pts": 1,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 9
          },
          {
            "cod": "VP",
            "tipo": "",
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
            "err": 1,
            "video": null,
            "pts_pct": 50
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 7,
                "eff": 7,
                "pos": 43,
                "neg": 29,
                "pt": 1,
                "mas": 2,
                "neu": 1,
                "med": 1,
                "ovp": 1,
                "err": 1
              },
              "P6": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 6,
                "eff": 50,
                "pos": 67,
                "neg": 0,
                "pt": 2,
                "mas": 2,
                "neu": 2,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 15,
                "eff": 30,
                "pos": 53,
                "neg": 13,
                "pt": 4,
                "mas": 4,
                "neu": 4,
                "med": 1,
                "ovp": 1,
                "err": 1
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 2,
                "eff": -25,
                "pos": 0,
                "neg": 50,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 1,
                "err": 0
              },
              "P6": {
                "tot": 4,
                "eff": 12,
                "pos": 25,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 2,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 2,
                "eff": -50,
                "pos": 0,
                "neg": 50,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 1
              },
              "total": {
                "tot": 8,
                "eff": -12,
                "pos": 12,
                "neg": 25,
                "pt": 0,
                "mas": 1,
                "neu": 2,
                "med": 3,
                "ovp": 1,
                "err": 1
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 3,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 2,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "18 Acosta Wilson",
        "num": 18,
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": 100,
          "bqpt": 0,
          "atk": 33,
          "atqq": null,
          "atqhb": 67,
          "atqx": 0,
          "atqrp": 0,
          "atqri": null,
          "atqrm": 100,
          "atqtr": 33
        },
        "saques": [
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
        "ataques": [
          {
            "cod": "V6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 4,
                "pct": 50
              },
              {
                "z": 1,
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
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 9,
                "pct": 50
              },
              {
                "z": 4,
                "pct": 50
              }
            ],
            "eff": 0,
            "tot": 2,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "X8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 5,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "V8",
            "tipo": "",
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
        "recepcion": {}
      },
      {
        "nombre": "12 Zanotti Juan Cruz",
        "num": 12,
        "objetivos": {
          "sq": null,
          "rec": 27,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
        "saques": [],
        "ataques": [],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 2,
                "eff": 25,
                "pos": 50,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 3,
                "eff": 33,
                "pos": 67,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 3,
                "eff": 83,
                "pos": 100,
                "neg": 0,
                "pt": 2,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 5,
                "eff": 70,
                "pos": 80,
                "neg": 0,
                "pt": 3,
                "mas": 1,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 3,
                "eff": 17,
                "pos": 33,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 2,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 7,
                "eff": 14,
                "pos": 29,
                "neg": 14,
                "pt": 1,
                "mas": 1,
                "neu": 2,
                "med": 2,
                "ovp": 1,
                "err": 0
              },
              "total": {
                "tot": 10,
                "eff": 15,
                "pos": 30,
                "neg": 10,
                "pt": 1,
                "mas": 2,
                "neu": 4,
                "med": 2,
                "ovp": 1,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 4,
                "eff": -25,
                "pos": 0,
                "neg": 25,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 2,
                "ovp": 0,
                "err": 1
              },
              "total": {
                "tot": 5,
                "eff": 0,
                "pos": 20,
                "neg": 20,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 2,
                "ovp": 0,
                "err": 1
              }
            }
          }
        }
      },
      {
        "nombre": "2 Ojuez Agustin",
        "num": 2,
        "objetivos": {
          "sq": -7,
          "rec": 50,
          "bqpos": 50,
          "bqpt": 33,
          "atk": 78,
          "atqq": 78,
          "atqhb": null,
          "atqx": null,
          "atqrp": 50,
          "atqri": 100,
          "atqrm": null,
          "atqtr": 100
        },
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
            "eff": -14,
            "tot": 7,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X1",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 5,
                "pct": 67
              },
              {
                "z": 3,
                "pct": 17
              },
              {
                "z": 6,
                "pct": 17
              }
            ],
            "eff": 67,
            "tot": 6,
            "pts": 5,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 83
          },
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 6,
                "pct": 50
              },
              {
                "z": 1,
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
            "tipo": "",
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
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "5 Ramos Iaki",
        "num": 5,
        "objetivos": {
          "sq": -30,
          "rec": null,
          "bqpos": 78,
          "bqpt": 33,
          "atk": 41,
          "atqq": null,
          "atqhb": 71,
          "atqx": 7,
          "atqrp": 20,
          "atqri": 17,
          "atqrm": 100,
          "atqtr": 50
        },
        "saques": [
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
            "eff": -40,
            "tot": 10,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 4,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "V6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 6,
                "pct": 45
              },
              {
                "z": 4,
                "pct": 36
              },
              {
                "z": 1,
                "pct": 9
              },
              {
                "z": 2,
                "pct": 9
              }
            ],
            "eff": 64,
            "tot": 11,
            "pts": 7,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 64
          },
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 4,
                "pct": 55
              },
              {
                "z": 6,
                "pct": 36
              },
              {
                "z": 2,
                "pct": 9
              }
            ],
            "eff": 18,
            "tot": 11,
            "pts": 4,
            "slash": 2,
            "err": 0,
            "video": null,
            "pts_pct": 36
          },
          {
            "cod": "X8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 4,
                "pct": 67
              },
              {
                "z": 5,
                "pct": 33
              }
            ],
            "eff": -33,
            "tot": 3,
            "pts": 1,
            "slash": 2,
            "err": 0,
            "video": null,
            "pts_pct": 33
          },
          {
            "cod": "V8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 6,
                "pct": 33
              },
              {
                "z": 5,
                "pct": 33
              },
              {
                "z": 4,
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
          },
          {
            "cod": "PR",
            "tipo": "",
            "orig": 8,
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
        "recepcion": {}
      },
      {
        "nombre": "19 Diaz Bolli Santiago",
        "num": 19,
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 60
              },
              {
                "z": 5,
                "pct": 40
              }
            ],
            "eff": 0,
            "tot": 5,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [],
        "recepcion": {}
      },
      {
        "nombre": "6 Villarruel Juan Simon",
        "num": 6,
        "objetivos": {
          "sq": 0,
          "rec": 50,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
        "saques": [
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
        "ataques": [],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "9 Godoy Martin",
        "num": 9,
        "objetivos": {
          "sq": -100,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
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
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [],
        "recepcion": {}
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "4 Vazquez Ezequiel",
        "num": 4,
        "rotaciones": [
          {
            "pos": "P4",
            "total": 4,
            "total_all": 12,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 3,
                "pct": 75,
                "pct_p": 100
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 0,
                "pct": 25,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P3",
            "total": 2,
            "total_all": 9,
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
                "pts": 3,
                "pct": 33,
                "pct_p": 100
              },
              {
                "zona": 9,
                "tot": 2,
                "pts": 1,
                "pct": 22,
                "pct_p": 50
              }
            ]
          },
          {
            "pos": "P2",
            "total": 4,
            "total_all": 12,
            "dist": [
              {
                "zona": 3,
                "tot": 2,
                "pts": 1,
                "pct": 50,
                "pct_p": 50
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 0,
                "pct": 25,
                "pct_p": 0
              },
              {
                "zona": 4,
                "tot": 1,
                "pts": 1,
                "pct": 25,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P5",
            "total": 3,
            "total_all": 18,
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
              }
            ]
          },
          {
            "pos": "P6",
            "total": 10,
            "total_all": 29,
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
              }
            ]
          },
          {
            "pos": "P1",
            "total": 13,
            "total_all": 31,
            "dist": [
              {
                "zona": 3,
                "tot": 6,
                "pts": 4,
                "pct": 46,
                "pct_p": 67
              },
              {
                "zona": 4,
                "tot": 5,
                "pts": 2,
                "pct": 38,
                "pct_p": 40
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 1,
                "pct": 15,
                "pct_p": 50
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 29,
            "tot": 31,
            "pts": 13,
            "pts_pct": 42
          },
          {
            "label": "P6",
            "eff": 10,
            "tot": 29,
            "pts": 8,
            "pts_pct": 28
          },
          {
            "label": "P5",
            "eff": 39,
            "tot": 18,
            "pts": 11,
            "pts_pct": 61
          },
          {
            "label": "P4",
            "eff": 58,
            "tot": 12,
            "pts": 8,
            "pts_pct": 67
          },
          {
            "label": "P3",
            "eff": 22,
            "tot": 9,
            "pts": 4,
            "pts_pct": 44
          },
          {
            "label": "P2",
            "eff": 42,
            "tot": 12,
            "pts": 7,
            "pts_pct": 58
          },
          {
            "label": "SO",
            "eff": 36,
            "tot": 66,
            "pts": 34,
            "pts_pct": 52
          },
          {
            "label": "TR",
            "eff": 20,
            "tot": 45,
            "pts": 17,
            "pts_pct": 38
          }
        ],
        "llamadas": [
          {
            "call": "K1",
            "tot": 36,
            "eff": 36,
            "pts_pct": 56,
            "dist": [
              {
                "zona": 4,
                "tot": 15,
                "pts": 10,
                "pct": 43,
                "pct_p": 67
              },
              {
                "zona": 3,
                "tot": 13,
                "pts": 7,
                "pct": 37,
                "pct_p": 54
              },
              {
                "zona": 2,
                "tot": 5,
                "pts": 2,
                "pct": 14,
                "pct_p": 40
              },
              {
                "zona": 9,
                "tot": 2,
                "pts": 0,
                "pct": 6,
                "pct_p": 0
              }
            ]
          },
          {
            "call": "KE",
            "tot": 18,
            "eff": 44,
            "pts_pct": 56,
            "dist": [
              {
                "zona": 4,
                "tot": 10,
                "pts": 4,
                "pct": 56,
                "pct_p": 40
              },
              {
                "zona": 2,
                "tot": 4,
                "pts": 2,
                "pct": 22,
                "pct_p": 50
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 2,
                "pct": 11,
                "pct_p": 100
              },
              {
                "zona": 9,
                "tot": 2,
                "pts": 2,
                "pct": 11,
                "pct_p": 100
              }
            ]
          }
        ],
        "so": {
          "eff": 36,
          "tot": 66
        },
        "tr": {
          "eff": 20,
          "tot": 45
        }
      },
      "suplente": {
        "nombre": "9 Godoy Martin",
        "num": 9,
        "rotaciones": [
          {
            "pos": "P4",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P3",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P2",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P5",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P6",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P1",
            "total": 1,
            "total_all": 1,
            "dist": [
              {
                "zona": 3,
                "tot": 1,
                "pts": 1,
                "pct": 100,
                "pct_p": 100
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
            "pts_pct": 100
          },
          {
            "label": "P6",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "P5",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "P4",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "P3",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "P2",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "SO",
            "eff": 100,
            "tot": 1,
            "pts": 1,
            "pts_pct": 100
          },
          {
            "label": "TR",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          }
        ],
        "llamadas": [],
        "so": {
          "eff": 100,
          "tot": 1
        },
        "tr": {
          "eff": null,
          "tot": 0
        }
      }
    }
  },
  {
    "id": "UBA__2026-06-09",
    "nombre": "UBA",
    "rival": "UBA",
    "fecha": "09/06/2026",
    "resultado": "V",
    "equipo_obj": {
      "sq": 2,
      "rec": 41,
      "bqpos": 60,
      "bqpt": 26,
      "atk": 31,
      "atqq": 29,
      "atqhb": 22,
      "atqx": 35,
      "atqrp": 39,
      "atqri": 50,
      "atqrm": 11,
      "atqtr": 26
    },
    "jugadores": [
      {
        "nombre": "4 Vazquez Ezequiel",
        "num": 4,
        "objetivos": {
          "sq": 8,
          "rec": null,
          "bqpos": 67,
          "bqpt": 0,
          "atk": -33,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": -100,
          "atqtr": 0
        },
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
                "pct": 39
              },
              {
                "z": 8,
                "pct": 6
              },
              {
                "z": 3,
                "pct": 6
              }
            ],
            "eff": 6,
            "tot": 18,
            "pts": 3,
            "plus": 0,
            "slash": 0,
            "err": 2,
            "video": null,
            "pts_pct": 17
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
        "ataques": [
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 4,
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
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {}
      },
      {
        "nombre": "14 Nielson Ramiro",
        "num": 14,
        "objetivos": {
          "sq": 19,
          "rec": 40,
          "bqpos": 67,
          "bqpt": 33,
          "atk": 34,
          "atqq": null,
          "atqhb": 50,
          "atqx": 27,
          "atqrp": 50,
          "atqri": -50,
          "atqrm": 50,
          "atqtr": 43
        },
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 1,
                "pct": 71
              },
              {
                "z": 6,
                "pct": 21
              },
              {
                "z": 9,
                "pct": 4
              },
              {
                "z": 8,
                "pct": 4
              }
            ],
            "eff": 8,
            "tot": 24,
            "pts": 3,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 12
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
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 50
              },
              {
                "z": 7,
                "pct": 12
              },
              {
                "z": 4,
                "pct": 12
              },
              {
                "z": 6,
                "pct": 8
              }
            ],
            "eff": 24,
            "tot": 25,
            "pts": 9,
            "slash": 2,
            "err": 1,
            "video": null,
            "pts_pct": 36
          },
          {
            "cod": "V5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 45
              },
              {
                "z": 1,
                "pct": 18
              },
              {
                "z": 5,
                "pct": 9
              },
              {
                "z": 3,
                "pct": 9
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
            "cod": "XP",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 3,
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
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 3,
                "eff": 33,
                "pos": 67,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 4,
                "eff": 50,
                "pos": 75,
                "neg": 0,
                "pt": 1,
                "mas": 2,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 3,
                "eff": 67,
                "pos": 67,
                "neg": 0,
                "pt": 2,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 6,
                "eff": 25,
                "pos": 33,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 2,
                "med": 2,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 10,
                "eff": 45,
                "pos": 50,
                "neg": 0,
                "pt": 4,
                "mas": 1,
                "neu": 3,
                "med": 2,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 3,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 2,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 2,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 2,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 5,
                "eff": 50,
                "pos": 60,
                "neg": 0,
                "pt": 2,
                "mas": 1,
                "neu": 1,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 8,
                "eff": 44,
                "pos": 50,
                "neg": 0,
                "pt": 3,
                "mas": 1,
                "neu": 3,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "12 Zanotti Juan Cruz",
        "num": 12,
        "objetivos": {
          "sq": null,
          "rec": 39,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
        "saques": [],
        "ataques": [],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 6,
                "eff": 75,
                "pos": 100,
                "neg": 0,
                "pt": 3,
                "mas": 3,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 7,
                "eff": 43,
                "pos": 71,
                "neg": 14,
                "pt": 2,
                "mas": 3,
                "neu": 1,
                "med": 0,
                "ovp": 1,
                "err": 0
              },
              "total": {
                "tot": 13,
                "eff": 58,
                "pos": 85,
                "neg": 8,
                "pt": 5,
                "mas": 6,
                "neu": 1,
                "med": 0,
                "ovp": 1,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 3,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 2,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 3,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 3,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 6,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 2,
                "med": 4,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 2,
                "eff": 25,
                "pos": 50,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "5 Ramos Iaki",
        "num": 5,
        "objetivos": {
          "sq": -38,
          "rec": null,
          "bqpos": 75,
          "bqpt": 25,
          "atk": 17,
          "atqq": null,
          "atqhb": 0,
          "atqx": 25,
          "atqrp": 0,
          "atqri": 0,
          "atqrm": null,
          "atqtr": 33
        },
        "saques": [
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 1,
                "pct": 50
              },
              {
                "z": 4,
                "pct": 50
              }
            ],
            "eff": -50,
            "tot": 2,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 1,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 2,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "X8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 6,
                "pct": 50
              },
              {
                "z": 4,
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
            "cod": "V6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 9,
                "pct": 50
              },
              {
                "z": 4,
                "pct": 50
              }
            ],
            "eff": 0,
            "tot": 2,
            "pts": 1,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 50
          }
        ],
        "recepcion": {}
      },
      {
        "nombre": "11 Durdos Valentin",
        "num": 11,
        "objetivos": {
          "sq": -2,
          "rec": 44,
          "bqpos": 44,
          "bqpt": 11,
          "atk": 46,
          "atqq": null,
          "atqhb": 17,
          "atqx": 50,
          "atqrp": 64,
          "atqri": 100,
          "atqrm": 0,
          "atqtr": 35
        },
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
                "pct": 33
              },
              {
                "z": 9,
                "pct": 17
              },
              {
                "z": 8,
                "pct": 8
              },
              {
                "z": 5,
                "pct": 8
              }
            ],
            "eff": 8,
            "tot": 12,
            "pts": 1,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 8
          },
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 33
              },
              {
                "z": 5,
                "pct": 33
              },
              {
                "z": 3,
                "pct": 33
              }
            ],
            "eff": -67,
            "tot": 3,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 2,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 50
              },
              {
                "z": 5,
                "pct": 12
              },
              {
                "z": 7,
                "pct": 12
              },
              {
                "z": 6,
                "pct": 12
              }
            ],
            "eff": 54,
            "tot": 24,
            "pts": 13,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 54
          },
          {
            "cod": "V5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
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
            "eff": 17,
            "tot": 6,
            "pts": 2,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 33
          },
          {
            "cod": "XP",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 5,
                "pct": 25
              },
              {
                "z": 3,
                "pct": 25
              },
              {
                "z": 6,
                "pct": 25
              },
              {
                "z": 1,
                "pct": 25
              }
            ],
            "eff": 25,
            "tot": 4,
            "pts": 2,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
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
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 3,
                "eff": 33,
                "pos": 33,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 5,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 5,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 7,
                "eff": 57,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 6,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 5,
                "eff": 40,
                "pos": 40,
                "neg": 0,
                "pt": 2,
                "mas": 0,
                "neu": 1,
                "med": 2,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "17 Herbsommer Leonardo",
        "num": 17,
        "objetivos": {
          "sq": -12,
          "rec": null,
          "bqpos": 75,
          "bqpt": 50,
          "atk": 33,
          "atqq": 33,
          "atqhb": null,
          "atqx": null,
          "atqrp": 20,
          "atqri": 100,
          "atqrm": 100,
          "atqtr": 20
        },
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 57
              },
              {
                "z": 1,
                "pct": 21
              },
              {
                "z": 3,
                "pct": 14
              },
              {
                "z": 8,
                "pct": 7
              }
            ],
            "eff": -21,
            "tot": 14,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 3,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X7",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 1,
                "pct": 50
              },
              {
                "z": 3,
                "pct": 33
              },
              {
                "z": 7,
                "pct": 17
              }
            ],
            "eff": 29,
            "tot": 7,
            "pts": 3,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 43
          },
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 3,
                "pct": 40
              },
              {
                "z": 9,
                "pct": 40
              },
              {
                "z": 1,
                "pct": 20
              }
            ],
            "eff": 40,
            "tot": 5,
            "pts": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 40
          }
        ],
        "recepcion": {}
      },
      {
        "nombre": "2 Ojuez Agustin",
        "num": 2,
        "objetivos": {
          "sq": -39,
          "rec": null,
          "bqpos": 36,
          "bqpt": 18,
          "atk": 42,
          "atqq": 36,
          "atqhb": null,
          "atqx": null,
          "atqrp": 50,
          "atqri": 100,
          "atqrm": null,
          "atqtr": 0
        },
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 57
              },
              {
                "z": 1,
                "pct": 43
              }
            ],
            "eff": -43,
            "tot": 7,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 3,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 5,
                "pct": 40
              },
              {
                "z": 6,
                "pct": 20
              },
              {
                "z": 8,
                "pct": 10
              },
              {
                "z": 1,
                "pct": 10
              }
            ],
            "eff": 36,
            "tot": 11,
            "pts": 6,
            "slash": 0,
            "err": 2,
            "video": null,
            "pts_pct": 55
          },
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 3,
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
        "recepcion": {}
      },
      {
        "nombre": "9 Godoy Martin",
        "num": 9,
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
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
                "z": 6,
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
        "ataques": [],
        "recepcion": {}
      },
      {
        "nombre": "19 Diaz Bolli Santiago",
        "num": 19,
        "objetivos": {
          "sq": 6,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 75
              },
              {
                "z": 9,
                "pct": 25
              }
            ],
            "eff": 0,
            "tot": 4,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [],
        "recepcion": {}
      },
      {
        "nombre": "18 Acosta Wilson",
        "num": 18,
        "objetivos": {
          "sq": 2,
          "rec": null,
          "bqpos": 80,
          "bqpt": 20,
          "atk": 18,
          "atqq": null,
          "atqhb": -67,
          "atqx": 32,
          "atqrp": 20,
          "atqri": 100,
          "atqrm": 0,
          "atqtr": -8
        },
        "saques": [
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 60
              },
              {
                "z": 8,
                "pct": 20
              },
              {
                "z": 1,
                "pct": 10
              },
              {
                "z": 5,
                "pct": 10
              }
            ],
            "eff": 0,
            "tot": 10,
            "pts": 1,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 10
          }
        ],
        "ataques": [
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 4,
                "pct": 50
              },
              {
                "z": 9,
                "pct": 29
              },
              {
                "z": 6,
                "pct": 14
              },
              {
                "z": 2,
                "pct": 7
              }
            ],
            "eff": 36,
            "tot": 14,
            "pts": 7,
            "slash": 1,
            "err": 1,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "X8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 4,
                "pct": 40
              },
              {
                "z": 2,
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
            "eff": 20,
            "tot": 5,
            "pts": 2,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 40
          },
          {
            "cod": "V8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 4,
                "pct": 100
              }
            ],
            "eff": -50,
            "tot": 2,
            "pts": 0,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "V6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 4,
                "pct": 100
              }
            ],
            "eff": -100,
            "tot": 1,
            "pts": 0,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {}
      },
      {
        "nombre": "15 Rotezzi Ramiro Lucio",
        "num": 15,
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atk": -100,
          "atqq": -100,
          "atqhb": null,
          "atqx": null,
          "atqrp": -100,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
        "saques": [],
        "ataques": [
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 3,
                "pct": 100
              }
            ],
            "eff": -100,
            "tot": 1,
            "pts": 0,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {}
      },
      {
        "nombre": "6 Villarruel Juan Simon",
        "num": 6,
        "objetivos": {
          "sq": 25,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atk": 0,
          "atqq": null,
          "atqhb": null,
          "atqx": 0,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": 0
        },
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 1,
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
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
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
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {}
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "4 Vazquez Ezequiel",
        "num": 4,
        "rotaciones": [
          {
            "pos": "P4",
            "total": 6,
            "total_all": 12,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 3,
                "pct": 50,
                "pct_p": 100
              },
              {
                "zona": 3,
                "tot": 3,
                "pts": 3,
                "pct": 50,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P3",
            "total": 4,
            "total_all": 16,
            "dist": [
              {
                "zona": 3,
                "tot": 2,
                "pts": 1,
                "pct": 50,
                "pct_p": 50
              },
              {
                "zona": 4,
                "tot": 2,
                "pts": 1,
                "pct": 50,
                "pct_p": 50
              }
            ]
          },
          {
            "pos": "P2",
            "total": 5,
            "total_all": 13,
            "dist": [
              {
                "zona": 3,
                "tot": 2,
                "pts": 0,
                "pct": 40,
                "pct_p": 0
              },
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 1,
                "pct": 20,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P5",
            "total": 7,
            "total_all": 17,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 1,
                "pct": 43,
                "pct_p": 33
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 0,
                "pct": 29,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 1,
                "pct": 29,
                "pct_p": 50
              }
            ]
          },
          {
            "pos": "P6",
            "total": 5,
            "total_all": 20,
            "dist": [
              {
                "zona": 3,
                "tot": 2,
                "pts": 0,
                "pct": 40,
                "pct_p": 0
              },
              {
                "zona": 4,
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
              }
            ]
          },
          {
            "pos": "P1",
            "total": 7,
            "total_all": 21,
            "dist": [
              {
                "zona": 2,
                "tot": 3,
                "pts": 1,
                "pct": 43,
                "pct_p": 33
              },
              {
                "zona": 8,
                "tot": 2,
                "pts": 1,
                "pct": 29,
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
                "zona": 4,
                "tot": 1,
                "pts": 1,
                "pct": 14,
                "pct_p": 100
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 29,
            "tot": 21,
            "pts": 8,
            "pts_pct": 38
          },
          {
            "label": "P6",
            "eff": 45,
            "tot": 20,
            "pts": 9,
            "pts_pct": 45
          },
          {
            "label": "P5",
            "eff": 18,
            "tot": 17,
            "pts": 6,
            "pts_pct": 35
          },
          {
            "label": "P4",
            "eff": 83,
            "tot": 12,
            "pts": 10,
            "pts_pct": 83
          },
          {
            "label": "P3",
            "eff": 25,
            "tot": 16,
            "pts": 8,
            "pts_pct": 50
          },
          {
            "label": "P2",
            "eff": 31,
            "tot": 13,
            "pts": 4,
            "pts_pct": 31
          },
          {
            "label": "SO",
            "eff": 42,
            "tot": 52,
            "pts": 27,
            "pts_pct": 52
          },
          {
            "label": "TR",
            "eff": 30,
            "tot": 47,
            "pts": 18,
            "pts_pct": 38
          }
        ],
        "llamadas": [
          {
            "call": "K1",
            "tot": 29,
            "eff": 41,
            "pts_pct": 52,
            "dist": [
              {
                "zona": 4,
                "tot": 10,
                "pts": 5,
                "pct": 34,
                "pct_p": 50
              },
              {
                "zona": 3,
                "tot": 10,
                "pts": 6,
                "pct": 34,
                "pct_p": 60
              },
              {
                "zona": 2,
                "tot": 6,
                "pts": 2,
                "pct": 21,
                "pct_p": 33
              },
              {
                "zona": 8,
                "tot": 2,
                "pts": 2,
                "pct": 7,
                "pct_p": 100
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 0,
                "pct": 3,
                "pct_p": 0
              }
            ]
          },
          {
            "call": "K2",
            "tot": 5,
            "eff": 60,
            "pts_pct": 60,
            "dist": [
              {
                "zona": 3,
                "tot": 2,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 4,
                "tot": 2,
                "pts": 2,
                "pct": 50,
                "pct_p": 100
              }
            ]
          }
        ],
        "so": {
          "eff": 42,
          "tot": 52
        },
        "tr": {
          "eff": 30,
          "tot": 47
        }
      },
      "suplente": {
        "nombre": "9 Godoy Martin",
        "num": 9,
        "rotaciones": [
          {
            "pos": "P4",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P3",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P2",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P5",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P6",
            "total": 0,
            "total_all": 1,
            "dist": [
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 100,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P1",
            "total": 2,
            "total_all": 3,
            "dist": [
              {
                "zona": 3,
                "tot": 3,
                "pts": 0,
                "pct": 100,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": -33,
            "tot": 3,
            "pts": 0,
            "pts_pct": 0
          },
          {
            "label": "P6",
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "pts_pct": 0
          },
          {
            "label": "P5",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "P4",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "P3",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "P2",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "SO",
            "eff": 0,
            "tot": 3,
            "pts": 0,
            "pts_pct": 0
          },
          {
            "label": "TR",
            "eff": -100,
            "tot": 1,
            "pts": 0,
            "pts_pct": 0
          }
        ],
        "llamadas": [],
        "so": {
          "eff": 0,
          "tot": 3
        },
        "tr": {
          "eff": -100,
          "tot": 1
        }
      }
    }
  },
  {
    "id": "Campana__2026-06-13",
    "nombre": "Campana",
    "rival": "Campana",
    "fecha": "13/06/2026",
    "resultado": "V",
    "equipo_obj": {
      "sq": 6,
      "rec": 31,
      "bqpos": 53,
      "bqpt": 19,
      "atk": 34,
      "atqq": 56,
      "atqhb": 7,
      "atqx": 40,
      "atqrp": 44,
      "atqri": 39,
      "atqrm": 20,
      "atqtr": 28
    },
    "jugadores": [
      {
        "nombre": "12 Zanotti Juan Cruz",
        "num": 12,
        "objetivos": {
          "sq": null,
          "rec": 29,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
        "saques": [],
        "ataques": [],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 3,
                "eff": 50,
                "pos": 67,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 4,
                "eff": 38,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 1,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 5,
                "eff": 30,
                "pos": 60,
                "neg": 20,
                "pt": 2,
                "mas": 1,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 1
              },
              "P1": {
                "tot": 5,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 5,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 10,
                "eff": 15,
                "pos": 30,
                "neg": 10,
                "pt": 2,
                "mas": 1,
                "neu": 6,
                "med": 0,
                "ovp": 0,
                "err": 1
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 2,
                "eff": 75,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "11 Durdos Valentin",
        "num": 11,
        "objetivos": {
          "sq": 25,
          "rec": 35,
          "bqpos": 33,
          "bqpt": 17,
          "atk": 58,
          "atqq": null,
          "atqhb": 36,
          "atqx": 67,
          "atqrp": 43,
          "atqri": 100,
          "atqrm": 29,
          "atqtr": 64
        },
        "saques": [
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 1,
                "pct": 41
              },
              {
                "z": 6,
                "pct": 35
              },
              {
                "z": 5,
                "pct": 18
              },
              {
                "z": 2,
                "pct": 6
              }
            ],
            "eff": 18,
            "tot": 17,
            "pts": 5,
            "plus": 0,
            "slash": 0,
            "err": 2,
            "video": null,
            "pts_pct": 29
          }
        ],
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 56
              },
              {
                "z": 7,
                "pct": 17
              },
              {
                "z": 6,
                "pct": 11
              },
              {
                "z": 4,
                "pct": 6
              }
            ],
            "eff": 67,
            "tot": 18,
            "pts": 13,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 72
          },
          {
            "cod": "V5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 60
              },
              {
                "z": 9,
                "pct": 20
              },
              {
                "z": 7,
                "pct": 10
              },
              {
                "z": 5,
                "pct": 10
              }
            ],
            "eff": 36,
            "tot": 11,
            "pts": 4,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 36
          },
          {
            "cod": "XP",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 3,
                "pct": 33
              },
              {
                "z": 1,
                "pct": 33
              },
              {
                "z": 5,
                "pct": 33
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
            "cod": "X6",
            "tipo": "",
            "orig": 2,
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
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 4,
                "eff": 38,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 2,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 4,
                "eff": 62,
                "pos": 75,
                "neg": 0,
                "pt": 2,
                "mas": 1,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 9,
                "eff": 50,
                "pos": 67,
                "neg": 0,
                "pt": 3,
                "mas": 3,
                "neu": 3,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 2,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 2,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 3,
                "eff": 67,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 2,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 6,
                "eff": 42,
                "pos": 67,
                "neg": 0,
                "pt": 1,
                "mas": 3,
                "neu": 0,
                "med": 2,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 7,
                "eff": 14,
                "pos": 29,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 4,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 7,
                "eff": 14,
                "pos": 29,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 4,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "14 Nielson Ramiro",
        "num": 14,
        "objetivos": {
          "sq": -3,
          "rec": 30,
          "bqpos": 50,
          "bqpt": 17,
          "atk": 6,
          "atqq": null,
          "atqhb": -21,
          "atqx": 28,
          "atqrp": 30,
          "atqri": -33,
          "atqrm": 0,
          "atqtr": 0
        },
        "saques": [
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 1,
                "pct": 54
              },
              {
                "z": 6,
                "pct": 46
              }
            ],
            "eff": -8,
            "tot": 13,
            "pts": 1,
            "plus": 0,
            "slash": 0,
            "err": 2,
            "video": null,
            "pts_pct": 8
          },
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
                "z": 8,
                "pct": 25
              },
              {
                "z": 1,
                "pct": 25
              }
            ],
            "eff": 0,
            "tot": 4,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 47
              },
              {
                "z": 7,
                "pct": 13
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
            "eff": 25,
            "tot": 16,
            "pts": 7,
            "slash": 2,
            "err": 1,
            "video": null,
            "pts_pct": 44
          },
          {
            "cod": "V5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 33
              },
              {
                "z": 1,
                "pct": 8
              },
              {
                "z": 9,
                "pct": 8
              },
              {
                "z": 4,
                "pct": 8
              }
            ],
            "eff": -21,
            "tot": 14,
            "pts": 1,
            "slash": 2,
            "err": 2,
            "video": null,
            "pts_pct": 7
          },
          {
            "cod": "XP",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 1,
                "pct": 50
              },
              {
                "z": 2,
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
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 3,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 4,
                "eff": 62,
                "pos": 75,
                "neg": 0,
                "pt": 2,
                "mas": 1,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 5,
                "eff": 60,
                "pos": 80,
                "neg": 0,
                "pt": 2,
                "mas": 2,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 8,
                "eff": 31,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 3,
                "neu": 3,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 9,
                "eff": 33,
                "pos": 56,
                "neg": 0,
                "pt": 1,
                "mas": 4,
                "neu": 3,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 3,
                "eff": 17,
                "pos": 33,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 2,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 3,
                "eff": 17,
                "pos": 33,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 2,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 5,
                "eff": -10,
                "pos": 20,
                "neg": 20,
                "pt": 0,
                "mas": 1,
                "neu": 1,
                "med": 2,
                "ovp": 0,
                "err": 1
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 5,
                "eff": -10,
                "pos": 20,
                "neg": 20,
                "pt": 0,
                "mas": 1,
                "neu": 1,
                "med": 2,
                "ovp": 0,
                "err": 1
              }
            }
          }
        }
      },
      {
        "nombre": "17 Herbsommer Leonardo",
        "num": 17,
        "objetivos": {
          "sq": 6,
          "rec": null,
          "bqpos": 60,
          "bqpt": 40,
          "atk": 50,
          "atqq": 62,
          "atqhb": null,
          "atqx": 0,
          "atqrp": 100,
          "atqri": -50,
          "atqrm": null,
          "atqtr": 50
        },
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 1,
                "pct": 38
              },
              {
                "z": 6,
                "pct": 25
              },
              {
                "z": 7,
                "pct": 19
              },
              {
                "z": 9,
                "pct": 6
              },
              {
                "z": 4,
                "pct": 6
              },
              {
                "z": 8,
                "pct": 6
              }
            ],
            "eff": 0,
            "tot": 16,
            "pts": 1,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 6
          }
        ],
        "ataques": [
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 9,
                "pct": 50
              },
              {
                "z": 1,
                "pct": 50
              }
            ],
            "eff": 33,
            "tot": 3,
            "pts": 2,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 67
          },
          {
            "cod": "X1",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 5,
                "pct": 100
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
            "cod": "X7",
            "tipo": "",
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
            "eff": 100,
            "tot": 2,
            "pts": 2,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 100
          },
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 8,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "X2",
            "tipo": "",
            "orig": 3,
            "destinos": [],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {}
      },
      {
        "nombre": "4 Vazquez Ezequiel",
        "num": 4,
        "objetivos": {
          "sq": 8,
          "rec": null,
          "bqpos": 44,
          "bqpt": 0,
          "atk": 100,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": 100,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 7,
                "pct": 33
              },
              {
                "z": 8,
                "pct": 20
              },
              {
                "z": 5,
                "pct": 20
              },
              {
                "z": 1,
                "pct": 13
              },
              {
                "z": 6,
                "pct": 13
              }
            ],
            "eff": 7,
            "tot": 15,
            "pts": 2,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 13
          }
        ],
        "ataques": [
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 4,
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
        "recepcion": {}
      },
      {
        "nombre": "18 Acosta Wilson",
        "num": 18,
        "objetivos": {
          "sq": 17,
          "rec": 0,
          "bqpos": 67,
          "bqpt": 33,
          "atk": 25,
          "atqq": null,
          "atqhb": 33,
          "atqx": 23,
          "atqrp": 50,
          "atqri": 50,
          "atqrm": null,
          "atqtr": -17
        },
        "saques": [
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
                "z": 1,
                "pct": 31
              },
              {
                "z": 5,
                "pct": 15
              },
              {
                "z": 8,
                "pct": 8
              }
            ],
            "eff": 0,
            "tot": 13,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 2,
                "pct": 33
              },
              {
                "z": 5,
                "pct": 33
              },
              {
                "z": 4,
                "pct": 17
              },
              {
                "z": 3,
                "pct": 17
              }
            ],
            "eff": 14,
            "tot": 7,
            "pts": 3,
            "slash": 0,
            "err": 2,
            "video": null,
            "pts_pct": 43
          },
          {
            "cod": "X8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 5,
                "pct": 33
              },
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
              }
            ],
            "eff": 33,
            "tot": 6,
            "pts": 3,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "V6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 4,
                "pct": 50
              },
              {
                "z": 9,
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
            "cod": "V8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 1,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "1 Salazar Imanol",
        "num": 1,
        "objetivos": {
          "sq": -10,
          "rec": null,
          "bqpos": 57,
          "bqpt": 14,
          "atk": 56,
          "atqq": 56,
          "atqhb": null,
          "atqx": null,
          "atqrp": 25,
          "atqri": 100,
          "atqrm": null,
          "atqtr": 75
        },
        "saques": [
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
                "z": 1,
                "pct": 42
              },
              {
                "z": 5,
                "pct": 8
              }
            ],
            "eff": -17,
            "tot": 12,
            "pts": 3,
            "plus": 0,
            "slash": 0,
            "err": 5,
            "video": null,
            "pts_pct": 25
          }
        ],
        "ataques": [
          {
            "cod": "X7",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 4,
                "pct": 20
              },
              {
                "z": 5,
                "pct": 20
              },
              {
                "z": 9,
                "pct": 20
              },
              {
                "z": 3,
                "pct": 20
              }
            ],
            "eff": 80,
            "tot": 5,
            "pts": 4,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 80
          },
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 3,
                "pct": 67
              },
              {
                "z": 9,
                "pct": 33
              }
            ],
            "eff": 25,
            "tot": 4,
            "pts": 2,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 50
          }
        ],
        "recepcion": {}
      },
      {
        "nombre": "5 Ramos Iaki",
        "num": 5,
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atk": 0,
          "atqq": null,
          "atqhb": 0,
          "atqx": 0,
          "atqrp": 0,
          "atqri": null,
          "atqrm": null,
          "atqtr": 0
        },
        "saques": [],
        "ataques": [
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 4,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 2,
            "pts": 1,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "V6",
            "tipo": "",
            "orig": 2,
            "destinos": [],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {}
      },
      {
        "nombre": "19 Diaz Bolli Santiago",
        "num": 19,
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
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
          }
        ],
        "ataques": [],
        "recepcion": {}
      },
      {
        "nombre": "9 Godoy Martin",
        "num": 9,
        "objetivos": {
          "sq": -33,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
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
                "z": 7,
                "pct": 33
              }
            ],
            "eff": -33,
            "tot": 3,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [],
        "recepcion": {}
      },
      {
        "nombre": "15 Rotezzi Ramiro Lucio",
        "num": 15,
        "objetivos": {
          "sq": null,
          "rec": null,
          "bqpos": 100,
          "bqpt": 0,
          "atk": 0,
          "atqq": 0,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": 0,
          "atqrm": null,
          "atqtr": null
        },
        "saques": [],
        "ataques": [
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 3,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {}
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "4 Vazquez Ezequiel",
        "num": 4,
        "rotaciones": [
          {
            "pos": "P4",
            "total": 3,
            "total_all": 10,
            "dist": [
              {
                "zona": 9,
                "tot": 1,
                "pts": 1,
                "pct": 33,
                "pct_p": 100
              },
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
              }
            ]
          },
          {
            "pos": "P3",
            "total": 4,
            "total_all": 12,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 1,
                "pct": 50,
                "pct_p": 50
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 1,
                "pct": 50,
                "pct_p": 50
              }
            ]
          },
          {
            "pos": "P2",
            "total": 7,
            "total_all": 16,
            "dist": [
              {
                "zona": 4,
                "tot": 4,
                "pts": 3,
                "pct": 57,
                "pct_p": 75
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 0,
                "pct": 14,
                "pct_p": 0
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 1,
                "pct": 14,
                "pct_p": 100
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 1,
                "pct": 14,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P5",
            "total": 3,
            "total_all": 11,
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
                "pts": 1,
                "pct": 33,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P6",
            "total": 9,
            "total_all": 15,
            "dist": [
              {
                "zona": 3,
                "tot": 4,
                "pts": 4,
                "pct": 44,
                "pct_p": 100
              },
              {
                "zona": 4,
                "tot": 2,
                "pts": 2,
                "pct": 22,
                "pct_p": 100
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 1,
                "pct": 22,
                "pct_p": 50
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 0,
                "pct": 11,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P1",
            "total": 4,
            "total_all": 14,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 1,
                "pct": 75,
                "pct_p": 33
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 1,
                "pct": 25,
                "pct_p": 100
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 7,
            "tot": 14,
            "pts": 5,
            "pts_pct": 36
          },
          {
            "label": "P6",
            "eff": 67,
            "tot": 15,
            "pts": 11,
            "pts_pct": 73
          },
          {
            "label": "P5",
            "eff": 64,
            "tot": 11,
            "pts": 8,
            "pts_pct": 73
          },
          {
            "label": "P4",
            "eff": 50,
            "tot": 10,
            "pts": 6,
            "pts_pct": 60
          },
          {
            "label": "P3",
            "eff": 42,
            "tot": 12,
            "pts": 5,
            "pts_pct": 42
          },
          {
            "label": "P2",
            "eff": 31,
            "tot": 16,
            "pts": 8,
            "pts_pct": 50
          },
          {
            "label": "SO",
            "eff": 42,
            "tot": 52,
            "pts": 29,
            "pts_pct": 56
          },
          {
            "label": "TR",
            "eff": 42,
            "tot": 26,
            "pts": 14,
            "pts_pct": 54
          }
        ],
        "llamadas": [
          {
            "call": "K1",
            "tot": 18,
            "eff": 61,
            "pts_pct": 72,
            "dist": [
              {
                "zona": 4,
                "tot": 7,
                "pts": 5,
                "pct": 39,
                "pct_p": 71
              },
              {
                "zona": 3,
                "tot": 5,
                "pts": 4,
                "pct": 28,
                "pct_p": 80
              },
              {
                "zona": 8,
                "tot": 3,
                "pts": 1,
                "pct": 17,
                "pct_p": 33
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 2,
                "pct": 11,
                "pct_p": 100
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 1,
                "pct": 6,
                "pct_p": 100
              }
            ]
          },
          {
            "call": "K2",
            "tot": 5,
            "eff": 80,
            "pts_pct": 80,
            "dist": [
              {
                "zona": 3,
                "tot": 3,
                "pts": 2,
                "pct": 75,
                "pct_p": 67
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 1,
                "pct": 25,
                "pct_p": 100
              }
            ]
          },
          {
            "call": "KB",
            "tot": 6,
            "eff": 33,
            "pts_pct": 50,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 3,
                "pct": 60,
                "pct_p": 100
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              }
            ]
          }
        ],
        "so": {
          "eff": 42,
          "tot": 52
        },
        "tr": {
          "eff": 42,
          "tot": 26
        }
      },
      "suplente": {
        "nombre": "9 Godoy Martin",
        "num": 9,
        "rotaciones": [
          {
            "pos": "P4",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P3",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P2",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P5",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P6",
            "total": 2,
            "total_all": 2,
            "dist": [
              {
                "zona": 2,
                "tot": 2,
                "pts": 1,
                "pct": 100,
                "pct_p": 50
              }
            ]
          },
          {
            "pos": "P1",
            "total": 0,
            "total_all": 4,
            "dist": [
              {
                "zona": 4,
                "tot": 2,
                "pts": 1,
                "pct": 50,
                "pct_p": 50
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 1,
                "pct": 25,
                "pct_p": 100
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 0,
                "pct": 25,
                "pct_p": 0
              }
            ]
          }
        ],
        "pills": [
          {
            "label": "P1",
            "eff": 50,
            "tot": 4,
            "pts": 2,
            "pts_pct": 50
          },
          {
            "label": "P6",
            "eff": 0,
            "tot": 2,
            "pts": 1,
            "pts_pct": 50
          },
          {
            "label": "P5",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "P4",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "P3",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "P2",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "SO",
            "eff": 0,
            "tot": 3,
            "pts": 1,
            "pts_pct": 33
          },
          {
            "label": "TR",
            "eff": 67,
            "tot": 3,
            "pts": 2,
            "pts_pct": 67
          }
        ],
        "llamadas": [],
        "so": {
          "eff": 0,
          "tot": 3
        },
        "tr": {
          "eff": 67,
          "tot": 3
        }
      }
    }
  },
  {
    "id": "Boca__2026-06-19",
    "nombre": "Boca",
    "rival": "Boca",
    "fecha": "19/06/2026",
    "resultado": "V",
    "equipo_obj": {
      "sq": -7,
      "rec": 38,
      "bqpos": 39,
      "bqpt": 12,
      "atk": 39,
      "atqq": 40,
      "atqhb": 25,
      "atqx": 45,
      "atqrp": 54,
      "atqri": 38,
      "atqrm": 33,
      "atqtr": 31
    },
    "jugadores": [
      {
        "nombre": "4 Vazquez Ezequiel",
        "num": 4,
        "objetivos": {
          "sq": -13,
          "rec": 0,
          "bqpos": 0,
          "bqpt": 0,
          "atk": 100,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": 100
        },
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
            "eff": -8,
            "tot": 12,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
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
            "tot": 1,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 6,
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
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "17 Herbsommer Leonardo",
        "num": 17,
        "objetivos": {
          "sq": -10,
          "rec": null,
          "bqpos": 42,
          "bqpt": 8,
          "atk": 36,
          "atqq": 30,
          "atqhb": null,
          "atqx": 100,
          "atqrp": 57,
          "atqri": null,
          "atqrm": 0,
          "atqtr": 0
        },
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 58
              },
              {
                "z": 1,
                "pct": 42
              }
            ],
            "eff": -17,
            "tot": 12,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 2,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X7",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 3,
                "pct": 50
              },
              {
                "z": 1,
                "pct": 25
              },
              {
                "z": 9,
                "pct": 25
              }
            ],
            "eff": 0,
            "tot": 5,
            "pts": 2,
            "slash": 1,
            "err": 1,
            "video": null,
            "pts_pct": 40
          },
          {
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 9,
                "pct": 50
              },
              {
                "z": 6,
                "pct": 25
              },
              {
                "z": 3,
                "pct": 25
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
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
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
            "cod": "X1",
            "tipo": "",
            "orig": 3,
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
        "recepcion": {}
      },
      {
        "nombre": "11 Durdos Valentin",
        "num": 11,
        "objetivos": {
          "sq": -35,
          "rec": 34,
          "bqpos": 75,
          "bqpt": 25,
          "atk": 44,
          "atqq": null,
          "atqhb": 30,
          "atqx": 52,
          "atqrp": 75,
          "atqri": 20,
          "atqrm": 50,
          "atqtr": 35
        },
        "saques": [
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
                "pct": 22
              },
              {
                "z": 5,
                "pct": 22
              }
            ],
            "eff": -44,
            "tot": 9,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 4,
            "video": null,
            "pts_pct": 0
          },
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 1,
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
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 56
              },
              {
                "z": 7,
                "pct": 17
              },
              {
                "z": 1,
                "pct": 11
              },
              {
                "z": 6,
                "pct": 11
              }
            ],
            "eff": 56,
            "tot": 18,
            "pts": 11,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 61
          },
          {
            "cod": "V5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 40
              },
              {
                "z": 5,
                "pct": 20
              },
              {
                "z": 7,
                "pct": 10
              },
              {
                "z": 3,
                "pct": 10
              }
            ],
            "eff": 30,
            "tot": 10,
            "pts": 4,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 40
          },
          {
            "cod": "XP",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 1,
                "pct": 100
              }
            ],
            "eff": 33,
            "tot": 3,
            "pts": 2,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 67
          },
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 3,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 3,
                "eff": 33,
                "pos": 67,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 3,
                "eff": 33,
                "pos": 67,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 3,
                "eff": 67,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 2,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 4,
                "eff": 62,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 3,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 4,
                "eff": -12,
                "pos": 25,
                "neg": 25,
                "pt": 0,
                "mas": 1,
                "neu": 2,
                "med": 0,
                "ovp": 0,
                "err": 1
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 4,
                "eff": -12,
                "pos": 25,
                "neg": 25,
                "pt": 0,
                "mas": 1,
                "neu": 2,
                "med": 0,
                "ovp": 0,
                "err": 1
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 1,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 7,
                "eff": 43,
                "pos": 43,
                "neg": 0,
                "pt": 3,
                "mas": 0,
                "neu": 2,
                "med": 2,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 8,
                "eff": 44,
                "pos": 50,
                "neg": 0,
                "pt": 3,
                "mas": 1,
                "neu": 2,
                "med": 2,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "14 Nielson Ramiro",
        "num": 14,
        "objetivos": {
          "sq": 6,
          "rec": 45,
          "bqpos": 33,
          "bqpt": 0,
          "atk": 33,
          "atqq": null,
          "atqhb": 20,
          "atqx": 38,
          "atqrp": 40,
          "atqri": 33,
          "atqrm": 100,
          "atqtr": 25
        },
        "saques": [
          {
            "cod": "SQ",
            "tipo": "POTENCIA",
            "orig": 6,
            "destinos": [
              {
                "z": 1,
                "pct": 62
              },
              {
                "z": 6,
                "pct": 31
              },
              {
                "z": 5,
                "pct": 8
              }
            ],
            "eff": -8,
            "tot": 13,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 60
              },
              {
                "z": 1,
                "pct": 27
              },
              {
                "z": 6,
                "pct": 7
              },
              {
                "z": 7,
                "pct": 7
              }
            ],
            "eff": 40,
            "tot": 15,
            "pts": 7,
            "slash": 1,
            "err": 0,
            "video": null,
            "pts_pct": 47
          },
          {
            "cod": "V5",
            "tipo": "",
            "orig": 4,
            "destinos": [
              {
                "z": 2,
                "pct": 40
              },
              {
                "z": 6,
                "pct": 20
              },
              {
                "z": 1,
                "pct": 20
              },
              {
                "z": 7,
                "pct": 20
              }
            ],
            "eff": 20,
            "tot": 5,
            "pts": 1,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 20
          },
          {
            "cod": "XP",
            "tipo": "",
            "orig": 8,
            "destinos": [
              {
                "z": 2,
                "pct": 100
              }
            ],
            "eff": 0,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 3,
                "eff": 50,
                "pos": 67,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 3,
                "eff": 50,
                "pos": 67,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 4,
                "eff": 50,
                "pos": 75,
                "neg": 0,
                "pt": 1,
                "mas": 2,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 5,
                "eff": 60,
                "pos": 80,
                "neg": 0,
                "pt": 2,
                "mas": 2,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 50,
                "pos": 100,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 3,
                "eff": 33,
                "pos": 67,
                "neg": 0,
                "pt": 0,
                "mas": 2,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 4,
                "eff": 38,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 1,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 5,
                "eff": 30,
                "pos": 40,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 2,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 3,
                "eff": 50,
                "pos": 67,
                "neg": 0,
                "pt": 1,
                "mas": 1,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 5,
                "eff": 50,
                "pos": 60,
                "neg": 0,
                "pt": 2,
                "mas": 1,
                "neu": 1,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "12 Zanotti Juan Cruz",
        "num": 12,
        "objetivos": {
          "sq": null,
          "rec": 39,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
        "saques": [],
        "ataques": [],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 2,
                "eff": 25,
                "pos": 50,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 0,
                "med": 1,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 2,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 2,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 4,
                "eff": 12,
                "pos": 25,
                "neg": 0,
                "pt": 0,
                "mas": 1,
                "neu": 2,
                "med": 1,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 100,
                "pos": 100,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 2,
                "eff": 50,
                "pos": 50,
                "neg": 0,
                "pt": 1,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 3,
                "eff": 67,
                "pos": 67,
                "neg": 0,
                "pt": 2,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "18 Acosta Wilson",
        "num": 18,
        "objetivos": {
          "sq": -2,
          "rec": null,
          "bqpos": 50,
          "bqpt": 12,
          "atk": 32,
          "atqq": null,
          "atqhb": 23,
          "atqx": 40,
          "atqrp": 0,
          "atqri": 50,
          "atqrm": 0,
          "atqtr": 38
        },
        "saques": [
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
            "eff": -10,
            "tot": 10,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 9,
                "pct": 40
              },
              {
                "z": 5,
                "pct": 30
              },
              {
                "z": 4,
                "pct": 20
              },
              {
                "z": 6,
                "pct": 10
              }
            ],
            "eff": 50,
            "tot": 10,
            "pts": 5,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 50
          },
          {
            "cod": "V6",
            "tipo": "",
            "orig": 2,
            "destinos": [
              {
                "z": 9,
                "pct": 50
              },
              {
                "z": 4,
                "pct": 33
              },
              {
                "z": 8,
                "pct": 17
              }
            ],
            "eff": 43,
            "tot": 7,
            "pts": 3,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 43
          },
          {
            "cod": "V8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 4,
                "pct": 33
              },
              {
                "z": 5,
                "pct": 33
              },
              {
                "z": 9,
                "pct": 17
              },
              {
                "z": 1,
                "pct": 17
              }
            ],
            "eff": 0,
            "tot": 6,
            "pts": 2,
            "slash": 0,
            "err": 2,
            "video": null,
            "pts_pct": 33
          },
          {
            "cod": "X8",
            "tipo": "",
            "orig": 9,
            "destinos": [
              {
                "z": 5,
                "pct": 80
              },
              {
                "z": 4,
                "pct": 20
              }
            ],
            "eff": 20,
            "tot": 5,
            "pts": 2,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 40
          }
        ],
        "recepcion": {}
      },
      {
        "nombre": "2 Ojuez Agustin",
        "num": 2,
        "objetivos": {
          "sq": 6,
          "rec": 0,
          "bqpos": 50,
          "bqpt": 33,
          "atk": 60,
          "atqq": 60,
          "atqhb": null,
          "atqx": null,
          "atqrp": 100,
          "atqri": null,
          "atqrm": null,
          "atqtr": 0
        },
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
            "tot": 9,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [
          {
            "cod": "X1",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 5,
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
            "cod": "XM",
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 6,
                "pct": 50
              },
              {
                "z": 3,
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
            "tipo": "",
            "orig": 3,
            "destinos": [
              {
                "z": 5,
                "pct": 100
              }
            ],
            "eff": -100,
            "tot": 1,
            "pts": 0,
            "slash": 0,
            "err": 1,
            "video": null,
            "pts_pct": 0
          }
        ],
        "recepcion": {
          "flotado": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 1,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 1,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          },
          "potencia": {
            "desde_z1": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z6": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            },
            "desde_z5": {
              "P5": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P6": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "P1": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              },
              "total": {
                "tot": 0,
                "eff": 0,
                "pos": 0,
                "neg": 0,
                "pt": 0,
                "mas": 0,
                "neu": 0,
                "med": 0,
                "ovp": 0,
                "err": 0
              }
            }
          }
        }
      },
      {
        "nombre": "19 Diaz Bolli Santiago",
        "num": 19,
        "objetivos": {
          "sq": 25,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
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
          }
        ],
        "ataques": [],
        "recepcion": {}
      },
      {
        "nombre": "13 Rojas Caruso Mauro",
        "num": 13,
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
        "saques": [
          {
            "cod": "SM",
            "tipo": "FLOTADO",
            "orig": 6,
            "destinos": [
              {
                "z": 6,
                "pct": 60
              },
              {
                "z": 1,
                "pct": 40
              }
            ],
            "eff": 0,
            "tot": 5,
            "pts": 0,
            "plus": 0,
            "slash": 0,
            "err": 0,
            "video": null,
            "pts_pct": 0
          }
        ],
        "ataques": [],
        "recepcion": {}
      },
      {
        "nombre": "9 Godoy Martin",
        "num": 9,
        "objetivos": {
          "sq": 0,
          "rec": null,
          "bqpos": null,
          "bqpt": null,
          "atk": null,
          "atqq": null,
          "atqhb": null,
          "atqx": null,
          "atqrp": null,
          "atqri": null,
          "atqrm": null,
          "atqtr": null
        },
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
        "ataques": [],
        "recepcion": {}
      }
    ],
    "armadores": {
      "titular": {
        "nombre": "4 Vazquez Ezequiel",
        "num": 4,
        "rotaciones": [
          {
            "pos": "P4",
            "total": 4,
            "total_all": 11,
            "dist": [
              {
                "zona": 3,
                "tot": 2,
                "pts": 2,
                "pct": 50,
                "pct_p": 100
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 0,
                "pct": 25,
                "pct_p": 0
              },
              {
                "zona": 4,
                "tot": 1,
                "pts": 1,
                "pct": 25,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P3",
            "total": 5,
            "total_all": 13,
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
                "tot": 1,
                "pts": 1,
                "pct": 20,
                "pct_p": 100
              },
              {
                "zona": 9,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 0,
                "pct": 20,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P2",
            "total": 7,
            "total_all": 19,
            "dist": [
              {
                "zona": 9,
                "tot": 2,
                "pts": 0,
                "pct": 29,
                "pct_p": 0
              },
              {
                "zona": 4,
                "tot": 2,
                "pts": 1,
                "pct": 29,
                "pct_p": 50
              },
              {
                "zona": 3,
                "tot": 2,
                "pts": 1,
                "pct": 29,
                "pct_p": 50
              },
              {
                "zona": 8,
                "tot": 1,
                "pts": 1,
                "pct": 14,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P5",
            "total": 3,
            "total_all": 15,
            "dist": [
              {
                "zona": 4,
                "tot": 3,
                "pts": 3,
                "pct": 100,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P6",
            "total": 4,
            "total_all": 13,
            "dist": [
              {
                "zona": 2,
                "tot": 2,
                "pts": 1,
                "pct": 50,
                "pct_p": 50
              },
              {
                "zona": 3,
                "tot": 1,
                "pts": 1,
                "pct": 25,
                "pct_p": 100
              },
              {
                "zona": 4,
                "tot": 1,
                "pts": 1,
                "pct": 25,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P1",
            "total": 5,
            "total_all": 12,
            "dist": [
              {
                "zona": 3,
                "tot": 3,
                "pts": 2,
                "pct": 60,
                "pct_p": 67
              },
              {
                "zona": 4,
                "tot": 1,
                "pts": 1,
                "pct": 20,
                "pct_p": 100
              },
              {
                "zona": 8,
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
            "eff": 58,
            "tot": 12,
            "pts": 7,
            "pts_pct": 58
          },
          {
            "label": "P6",
            "eff": 54,
            "tot": 13,
            "pts": 7,
            "pts_pct": 54
          },
          {
            "label": "P5",
            "eff": 40,
            "tot": 15,
            "pts": 8,
            "pts_pct": 53
          },
          {
            "label": "P4",
            "eff": 45,
            "tot": 11,
            "pts": 5,
            "pts_pct": 45
          },
          {
            "label": "P3",
            "eff": 31,
            "tot": 13,
            "pts": 6,
            "pts_pct": 46
          },
          {
            "label": "P2",
            "eff": 11,
            "tot": 19,
            "pts": 7,
            "pts_pct": 37
          },
          {
            "label": "SO",
            "eff": 48,
            "tot": 46,
            "pts": 27,
            "pts_pct": 59
          },
          {
            "label": "TR",
            "eff": 24,
            "tot": 37,
            "pts": 13,
            "pts_pct": 35
          }
        ],
        "llamadas": [
          {
            "call": "K1",
            "tot": 25,
            "eff": 56,
            "pts_pct": 64,
            "dist": [
              {
                "zona": 4,
                "tot": 9,
                "pts": 7,
                "pct": 38,
                "pct_p": 78
              },
              {
                "zona": 3,
                "tot": 6,
                "pts": 5,
                "pct": 25,
                "pct_p": 83
              },
              {
                "zona": 8,
                "tot": 4,
                "pts": 2,
                "pct": 17,
                "pct_p": 50
              },
              {
                "zona": 9,
                "tot": 3,
                "pts": 0,
                "pct": 12,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 2,
                "pts": 1,
                "pct": 8,
                "pct_p": 50
              }
            ]
          }
        ],
        "so": {
          "eff": 48,
          "tot": 46
        },
        "tr": {
          "eff": 24,
          "tot": 37
        }
      },
      "suplente": {
        "nombre": "14 Nielson Ramiro",
        "num": 14,
        "rotaciones": [
          {
            "pos": "P4",
            "total": 0,
            "total_all": 1,
            "dist": [
              {
                "zona": 9,
                "tot": 1,
                "pts": 1,
                "pct": 100,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P3",
            "total": 0,
            "total_all": 0,
            "dist": []
          },
          {
            "pos": "P2",
            "total": 0,
            "total_all": 1,
            "dist": [
              {
                "zona": 9,
                "tot": 1,
                "pts": 0,
                "pct": 100,
                "pct_p": 0
              }
            ]
          },
          {
            "pos": "P5",
            "total": 0,
            "total_all": 1,
            "dist": [
              {
                "zona": 4,
                "tot": 1,
                "pts": 1,
                "pct": 100,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P6",
            "total": 0,
            "total_all": 3,
            "dist": [
              {
                "zona": 4,
                "tot": 1,
                "pts": 0,
                "pct": 50,
                "pct_p": 0
              },
              {
                "zona": 2,
                "tot": 1,
                "pts": 1,
                "pct": 50,
                "pct_p": 100
              }
            ]
          },
          {
            "pos": "P1",
            "total": 0,
            "total_all": 1,
            "dist": [
              {
                "zona": 2,
                "tot": 1,
                "pts": 1,
                "pct": 100,
                "pct_p": 100
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
            "pts_pct": 100
          },
          {
            "label": "P6",
            "eff": 33,
            "tot": 3,
            "pts": 1,
            "pts_pct": 33
          },
          {
            "label": "P5",
            "eff": 100,
            "tot": 1,
            "pts": 1,
            "pts_pct": 100
          },
          {
            "label": "P4",
            "eff": 100,
            "tot": 1,
            "pts": 1,
            "pts_pct": 100
          },
          {
            "label": "P3",
            "eff": null,
            "tot": 0,
            "pts": 0,
            "pts_pct": null
          },
          {
            "label": "P2",
            "eff": -100,
            "tot": 1,
            "pts": 0,
            "pts_pct": 0
          },
          {
            "label": "SO",
            "eff": -50,
            "tot": 2,
            "pts": 0,
            "pts_pct": 0
          },
          {
            "label": "TR",
            "eff": 80,
            "tot": 5,
            "pts": 4,
            "pts_pct": 80
          }
        ],
        "llamadas": [],
        "so": {
          "eff": -50,
          "tot": 2
        },
        "tr": {
          "eff": 80,
          "tot": 5
        }
      }
    }
  }
];
const PARTIDOS_ARMADOR = {"titular": {"nombre": "4 Vazquez Ezequiel", "num": 4, "rotaciones": [{"pos": "P4", "total": 42, "total_all": 90, "dist": [{"zona": 4, "tot": 17, "pts": 13, "pct": 40, "pct_p": 76}, {"zona": 3, "tot": 16, "pts": 9, "pct": 38, "pct_p": 56}, {"zona": 9, "tot": 8, "pts": 4, "pct": 19, "pct_p": 50}, {"zona": 8, "tot": 1, "pts": 0, "pct": 2, "pct_p": 0}]}, {"pos": "P3", "total": 39, "total_all": 108, "dist": [{"zona": 4, "tot": 16, "pts": 8, "pct": 41, "pct_p": 50}, {"zona": 3, "tot": 15, "pts": 11, "pct": 38, "pct_p": 73}, {"zona": 9, "tot": 6, "pts": 2, "pct": 15, "pct_p": 33}, {"zona": 2, "tot": 1, "pts": 0, "pct": 3, "pct_p": 0}, {"zona": 8, "tot": 1, "pts": 0, "pct": 3, "pct_p": 0}]}, {"pos": "P2", "total": 41, "total_all": 109, "dist": [{"zona": 3, "tot": 14, "pts": 8, "pct": 34, "pct_p": 57}, {"zona": 4, "tot": 14, "pts": 6, "pct": 34, "pct_p": 43}, {"zona": 9, "tot": 8, "pts": 3, "pct": 20, "pct_p": 38}, {"zona": 8, "tot": 4, "pts": 2, "pct": 10, "pct_p": 50}, {"zona": 2, "tot": 1, "pts": 1, "pct": 2, "pct_p": 100}]}, {"pos": "P5", "total": 42, "total_all": 115, "dist": [{"zona": 4, "tot": 18, "pts": 11, "pct": 43, "pct_p": 61}, {"zona": 3, "tot": 16, "pts": 9, "pct": 38, "pct_p": 56}, {"zona": 2, "tot": 8, "pts": 3, "pct": 19, "pct_p": 38}]}, {"pos": "P6", "total": 52, "total_all": 140, "dist": [{"zona": 4, "tot": 19, "pts": 10, "pct": 37, "pct_p": 53}, {"zona": 3, "tot": 17, "pts": 9, "pct": 33, "pct_p": 53}, {"zona": 2, "tot": 15, "pts": 8, "pct": 29, "pct_p": 53}, {"zona": 8, "tot": 1, "pts": 0, "pct": 2, "pct_p": 0}]}, {"pos": "P1", "total": 59, "total_all": 152, "dist": [{"zona": 4, "tot": 21, "pts": 9, "pct": 36, "pct_p": 43}, {"zona": 3, "tot": 20, "pts": 12, "pct": 34, "pct_p": 60}, {"zona": 2, "tot": 12, "pts": 5, "pct": 20, "pct_p": 42}, {"zona": 8, "tot": 6, "pts": 5, "pct": 10, "pct_p": 83}]}], "pills": [{"label": "P1", "eff": 32, "tot": 152, "pts": 70, "pts_pct": 46}, {"label": "P6", "eff": 31, "tot": 140, "pts": 61, "pts_pct": 44}, {"label": "P5", "eff": 40, "tot": 115, "pts": 63, "pts_pct": 55}, {"label": "P4", "eff": 43, "tot": 90, "pts": 48, "pts_pct": 53}, {"label": "P3", "eff": 29, "tot": 108, "pts": 48, "pts_pct": 44}, {"label": "P2", "eff": 28, "tot": 109, "pts": 47, "pts_pct": 43}, {"label": "SO", "eff": 40, "tot": 436, "pts": 231, "pts_pct": 53}, {"label": "TR", "eff": 22, "tot": 278, "pts": 106, "pts_pct": 38}], "llamadas": [{"call": "K1", "tot": 246, "eff": 40, "pts_pct": 54, "dist": [{"zona": 4, "tot": 91, "pts": 51, "pct": 38, "pct_p": 56}, {"zona": 3, "tot": 83, "pts": 51, "pct": 35, "pct_p": 61}, {"zona": 2, "tot": 33, "pts": 14, "pct": 14, "pct_p": 42}, {"zona": 9, "tot": 20, "pts": 7, "pct": 8, "pct_p": 35}, {"zona": 8, "tot": 11, "pts": 7, "pct": 5, "pct_p": 64}]}, {"call": "K7", "tot": 12, "eff": 17, "pts_pct": 33, "dist": [{"zona": 4, "tot": 2, "pts": 0, "pct": 40, "pct_p": 0}, {"zona": 3, "tot": 2, "pts": 1, "pct": 40, "pct_p": 50}, {"zona": 8, "tot": 1, "pts": 0, "pct": 20, "pct_p": 0}]}, {"call": "KM", "tot": 17, "eff": 59, "pts_pct": 59, "dist": [{"zona": 2, "tot": 6, "pts": 5, "pct": 35, "pct_p": 83}, {"zona": 3, "tot": 5, "pts": 2, "pct": 29, "pct_p": 40}, {"zona": 9, "tot": 3, "pts": 2, "pct": 18, "pct_p": 67}, {"zona": 4, "tot": 2, "pts": 0, "pct": 12, "pct_p": 0}, {"zona": 8, "tot": 1, "pts": 1, "pct": 6, "pct_p": 100}]}, {"call": "K2", "tot": 20, "eff": 65, "pts_pct": 70, "dist": [{"zona": 3, "tot": 12, "pts": 6, "pct": 67, "pct_p": 50}, {"zona": 9, "tot": 2, "pts": 2, "pct": 11, "pct_p": 100}, {"zona": 2, "tot": 2, "pts": 2, "pct": 11, "pct_p": 100}, {"zona": 4, "tot": 2, "pts": 2, "pct": 11, "pct_p": 100}]}, {"call": "KC", "tot": 43, "eff": 16, "pts_pct": 33, "dist": [{"zona": 4, "tot": 22, "pts": 7, "pct": 51, "pct_p": 32}, {"zona": 3, "tot": 8, "pts": 3, "pct": 19, "pct_p": 38}, {"zona": 9, "tot": 7, "pts": 3, "pct": 16, "pct_p": 43}, {"zona": 2, "tot": 4, "pts": 0, "pct": 9, "pct_p": 0}, {"zona": 8, "tot": 2, "pts": 1, "pct": 5, "pct_p": 50}]}, {"call": "KP", "tot": 8, "eff": 50, "pts_pct": 50, "dist": [{"zona": 4, "tot": 4, "pts": 1, "pct": 50, "pct_p": 25}, {"zona": 3, "tot": 3, "pts": 2, "pct": 38, "pct_p": 67}, {"zona": 8, "tot": 1, "pts": 1, "pct": 12, "pct_p": 100}]}, {"call": "KE", "tot": 50, "eff": 38, "pts_pct": 52, "dist": [{"zona": 4, "tot": 29, "pts": 12, "pct": 59, "pct_p": 41}, {"zona": 9, "tot": 7, "pts": 5, "pct": 14, "pct_p": 71}, {"zona": 3, "tot": 7, "pts": 6, "pct": 14, "pct_p": 86}, {"zona": 2, "tot": 6, "pts": 3, "pct": 12, "pct_p": 50}]}, {"call": "KB", "tot": 16, "eff": 50, "pts_pct": 62, "dist": [{"zona": 4, "tot": 6, "pts": 5, "pct": 40, "pct_p": 83}, {"zona": 2, "tot": 4, "pts": 4, "pct": 27, "pct_p": 100}, {"zona": 3, "tot": 3, "pts": 1, "pct": 20, "pct_p": 33}, {"zona": 9, "tot": 2, "pts": 0, "pct": 13, "pct_p": 0}]}], "so": {"eff": 40, "tot": 436}, "tr": {"eff": 22, "tot": 278}}, "suplente": {"nombre": "9 Godoy Martin", "num": 9, "rotaciones": [{"pos": "P4", "total": 18, "total_all": 37, "dist": [{"zona": 4, "tot": 9, "pts": 4, "pct": 50, "pct_p": 44}, {"zona": 3, "tot": 7, "pts": 5, "pct": 39, "pct_p": 71}, {"zona": 9, "tot": 2, "pts": 1, "pct": 11, "pct_p": 50}]}, {"pos": "P3", "total": 13, "total_all": 44, "dist": [{"zona": 3, "tot": 6, "pts": 3, "pct": 46, "pct_p": 50}, {"zona": 4, "tot": 4, "pts": 1, "pct": 31, "pct_p": 25}, {"zona": 8, "tot": 2, "pts": 1, "pct": 15, "pct_p": 50}, {"zona": 9, "tot": 1, "pts": 0, "pct": 8, "pct_p": 0}]}, {"pos": "P2", "total": 12, "total_all": 38, "dist": [{"zona": 4, "tot": 4, "pts": 3, "pct": 33, "pct_p": 75}, {"zona": 3, "tot": 4, "pts": 3, "pct": 33, "pct_p": 75}, {"zona": 9, "tot": 3, "pts": 3, "pct": 25, "pct_p": 100}, {"zona": 8, "tot": 1, "pts": 1, "pct": 8, "pct_p": 100}]}, {"pos": "P5", "total": 24, "total_all": 39, "dist": [{"zona": 3, "tot": 13, "pts": 6, "pct": 54, "pct_p": 46}, {"zona": 4, "tot": 7, "pts": 4, "pct": 29, "pct_p": 57}, {"zona": 2, "tot": 3, "pts": 1, "pct": 12, "pct_p": 33}, {"zona": 8, "tot": 1, "pts": 0, "pct": 4, "pct_p": 0}]}, {"pos": "P6", "total": 29, "total_all": 54, "dist": [{"zona": 4, "tot": 10, "pts": 6, "pct": 34, "pct_p": 60}, {"zona": 2, "tot": 10, "pts": 5, "pct": 34, "pct_p": 50}, {"zona": 3, "tot": 9, "pts": 6, "pct": 31, "pct_p": 67}]}, {"pos": "P1", "total": 30, "total_all": 79, "dist": [{"zona": 4, "tot": 11, "pts": 3, "pct": 37, "pct_p": 27}, {"zona": 3, "tot": 11, "pts": 5, "pct": 37, "pct_p": 45}, {"zona": 2, "tot": 6, "pts": 0, "pct": 20, "pct_p": 0}, {"zona": 8, "tot": 2, "pts": 0, "pct": 7, "pct_p": 0}]}], "pills": [{"label": "P1", "eff": 16, "tot": 79, "pts": 26, "pts_pct": 33}, {"label": "P6", "eff": 39, "tot": 54, "pts": 27, "pts_pct": 50}, {"label": "P5", "eff": 23, "tot": 39, "pts": 17, "pts_pct": 44}, {"label": "P4", "eff": 32, "tot": 37, "pts": 19, "pts_pct": 51}, {"label": "P3", "eff": 18, "tot": 44, "pts": 16, "pts_pct": 36}, {"label": "P2", "eff": 55, "tot": 38, "pts": 23, "pts_pct": 61}, {"label": "SO", "eff": 28, "tot": 183, "pts": 81, "pts_pct": 44}, {"label": "TR", "eff": 30, "tot": 108, "pts": 47, "pts_pct": 44}], "llamadas": [{"call": "K1", "tot": 95, "eff": 32, "pts_pct": 47, "dist": [{"zona": 3, "tot": 42, "pts": 21, "pct": 45, "pct_p": 50}, {"zona": 4, "tot": 30, "pts": 15, "pct": 32, "pct_p": 50}, {"zona": 2, "tot": 12, "pts": 5, "pct": 13, "pct_p": 42}, {"zona": 8, "tot": 5, "pts": 2, "pct": 5, "pct_p": 40}, {"zona": 9, "tot": 4, "pts": 2, "pct": 4, "pct_p": 50}]}, {"call": "K7", "tot": 30, "eff": 37, "pts_pct": 50, "dist": [{"zona": 4, "tot": 12, "pts": 5, "pct": 46, "pct_p": 42}, {"zona": 3, "tot": 7, "pts": 6, "pct": 27, "pct_p": 86}, {"zona": 2, "tot": 5, "pts": 1, "pct": 19, "pct_p": 20}, {"zona": 9, "tot": 2, "pts": 2, "pct": 8, "pct_p": 100}]}, {"call": "KM", "tot": 12, "eff": -17, "pts_pct": 17, "dist": [{"zona": 2, "tot": 8, "pts": 1, "pct": 67, "pct_p": 12}, {"zona": 4, "tot": 2, "pts": 1, "pct": 17, "pct_p": 50}, {"zona": 9, "tot": 1, "pts": 0, "pct": 8, "pct_p": 0}, {"zona": 8, "tot": 1, "pts": 0, "pct": 8, "pct_p": 0}]}, {"call": "KC", "tot": 69, "eff": 32, "pts_pct": 43, "dist": [{"zona": 4, "tot": 35, "pts": 14, "pct": 51, "pct_p": 40}, {"zona": 2, "tot": 11, "pts": 4, "pct": 16, "pct_p": 36}, {"zona": 9, "tot": 11, "pts": 6, "pct": 16, "pct_p": 55}, {"zona": 3, "tot": 8, "pts": 5, "pct": 12, "pct_p": 62}, {"zona": 8, "tot": 3, "pts": 1, "pct": 4, "pct_p": 33}]}, {"call": "KP", "tot": 6, "eff": 50, "pts_pct": 50, "dist": [{"zona": 4, "tot": 3, "pts": 1, "pct": 100, "pct_p": 33}]}, {"call": "KE", "tot": 24, "eff": 21, "pts_pct": 42, "dist": [{"zona": 4, "tot": 12, "pts": 4, "pct": 50, "pct_p": 33}, {"zona": 2, "tot": 5, "pts": 4, "pct": 21, "pct_p": 80}, {"zona": 9, "tot": 5, "pts": 1, "pct": 21, "pct_p": 20}, {"zona": 3, "tot": 2, "pts": 1, "pct": 8, "pct_p": 50}]}], "so": {"eff": 28, "tot": 183}, "tr": {"eff": 30, "tot": 108}}};
