// datos_partidos.js — 07/06/2026, 09:14:28
const PARTIDOS_GENERADO = "07/06/2026, 09:14:28";
const PARTIDOS_TOTAL = 7;
const PARTIDOS_META = [
  {
    "nombre": "Untref",
    "rival": "Untref",
    "fecha": "01/05/2026",
    "torneo": "NLA Suiza 2026",
    "resultado": "V",
    "sets_nafels": "3",
    "sets_rival": "1"
  },
  {
    "nombre": "Ciudad",
    "rival": "Ciudad",
    "fecha": "05/05/2026",
    "torneo": "NLA Suiza 2026",
    "resultado": "D",
    "sets_nafels": "0",
    "sets_rival": "3"
  },
  {
    "nombre": "Ferro",
    "rival": "Ferro",
    "fecha": "08/05/2026",
    "torneo": "NLA Suiza 2026",
    "resultado": "D",
    "sets_nafels": "1",
    "sets_rival": "3"
  },
  {
    "nombre": "Hacoaj",
    "rival": "Hacoaj",
    "fecha": "16/05/2026",
    "torneo": "NLA Suiza 2026",
    "resultado": "V",
    "sets_nafels": "3",
    "sets_rival": "1"
  },
  {
    "nombre": "Velez",
    "rival": "Velez",
    "fecha": "22/05/2026",
    "torneo": "NLA Suiza 2026",
    "resultado": "V",
    "sets_nafels": "3",
    "sets_rival": "2"
  },
  {
    "nombre": "Defensores",
    "rival": "Defensores",
    "fecha": "26/05/2026",
    "torneo": "NLA Suiza 2026",
    "resultado": "D",
    "sets_nafels": "2",
    "sets_rival": "3"
  },
  {
    "nombre": "Lomas",
    "rival": "Lomas",
    "fecha": "30/05/2026",
    "torneo": "NLA Suiza 2026",
    "resultado": "V",
    "sets_nafels": "3",
    "sets_rival": "2"
  }
];
const PARTIDOS_JUGADORES = [
  {
    "num": 1,
    "nombre": "1 Salazar Imanol",
    "pos": "CENTRAL",
    "color": "#22c55e",
    "info": {},
    "ataques": [],
    "saques": [],
    "recepciones": [],
    "objetivos": {
      "sq": -11,
      "rec": 67,
      "bqpos": 50,
      "bqpt": 29,
      "atqq": 43,
      "atqhb": null,
      "atqx": null,
      "atqrp": 60,
      "atqri": 0,
      "atqrm": null,
      "atqtr": 27
    },
    "tot_saques": 23,
    "tot_recep": 3,
    "tot_ataques": 28
  },
  {
    "num": 2,
    "nombre": "2 Ojuez Agustin",
    "pos": "CENTRAL",
    "color": "#22c55e",
    "info": {},
    "ataques": [],
    "saques": [],
    "recepciones": [],
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
    },
    "tot_saques": 45,
    "tot_recep": 5,
    "tot_ataques": 72
  },
  {
    "num": 3,
    "nombre": "3 Romeo Winer Agustin",
    "pos": "LIBERO",
    "color": "#f59e0b",
    "info": {},
    "ataques": [],
    "saques": [],
    "recepciones": [],
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
    },
    "tot_saques": 6,
    "tot_recep": 67,
    "tot_ataques": 0
  },
  {
    "num": 4,
    "nombre": "4 Vazquez Ezequiel",
    "pos": "OTRO",
    "color": "#64748b",
    "info": {},
    "ataques": [],
    "saques": [],
    "recepciones": [],
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
    },
    "tot_saques": 96,
    "tot_recep": 3,
    "tot_ataques": 3
  },
  {
    "num": 5,
    "nombre": "5 Ramos Iaki",
    "pos": "OTRO",
    "color": "#64748b",
    "info": {},
    "ataques": [],
    "saques": [],
    "recepciones": [],
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
    },
    "tot_saques": 57,
    "tot_recep": 2,
    "tot_ataques": 148
  },
  {
    "num": 6,
    "nombre": "6 Villarruel Juan Simon",
    "pos": "OTRO",
    "color": "#64748b",
    "info": {},
    "ataques": [],
    "saques": [],
    "recepciones": [],
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
    },
    "tot_saques": 7,
    "tot_recep": 5,
    "tot_ataques": 7
  },
  {
    "num": 9,
    "nombre": "9 Godoy Martin",
    "pos": "OTRO",
    "color": "#64748b",
    "info": {},
    "ataques": [],
    "saques": [],
    "recepciones": [],
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
    },
    "tot_saques": 51,
    "tot_recep": 4,
    "tot_ataques": 0
  },
  {
    "num": 11,
    "nombre": "11 Durdos Valentin",
    "pos": "PUNTA",
    "color": "#3b82f6",
    "info": {},
    "ataques": [],
    "saques": [],
    "recepciones": [],
    "objetivos": {
      "sq": -16,
      "rec": 37,
      "bqpos": 37,
      "bqpt": 13,
      "atqq": null,
      "atqhb": 10,
      "atqx": 32,
      "atqrp": 36,
      "atqri": 71,
      "atqrm": 5,
      "atqtr": 14
    },
    "tot_saques": 91,
    "tot_recep": 152,
    "tot_ataques": 186
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
    },
    "tot_saques": 0,
    "tot_recep": 139,
    "tot_ataques": 0
  },
  {
    "num": 13,
    "nombre": "13 Rojas Caruso Mauro",
    "pos": "OTRO",
    "color": "#64748b",
    "info": {},
    "ataques": [],
    "saques": [],
    "recepciones": [],
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
    },
    "tot_saques": 4,
    "tot_recep": 4,
    "tot_ataques": 0
  },
  {
    "num": 14,
    "nombre": "14 Nielson Ramiro",
    "pos": "PUNTA",
    "color": "#3b82f6",
    "info": {},
    "ataques": [],
    "saques": [],
    "recepciones": [],
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
    },
    "tot_saques": 130,
    "tot_recep": 154,
    "tot_ataques": 205
  },
  {
    "num": 15,
    "nombre": "15 Rotezzi Ramiro Lucio",
    "pos": "CENTRAL",
    "color": "#22c55e",
    "info": {},
    "ataques": [],
    "saques": [],
    "recepciones": [],
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
    },
    "tot_saques": 26,
    "tot_recep": 6,
    "tot_ataques": 18
  },
  {
    "num": 17,
    "nombre": "17 Herbsommer Leonardo",
    "pos": "CENTRAL",
    "color": "#22c55e",
    "info": {},
    "ataques": [],
    "saques": [],
    "recepciones": [],
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
    },
    "tot_saques": 71,
    "tot_recep": 0,
    "tot_ataques": 68
  },
  {
    "num": 18,
    "nombre": "18 Acosta Wilson",
    "pos": "OTRO",
    "color": "#64748b",
    "info": {},
    "ataques": [],
    "saques": [],
    "recepciones": [],
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
    },
    "tot_saques": 38,
    "tot_recep": 0,
    "tot_ataques": 89
  },
  {
    "num": 19,
    "nombre": "19 Diaz Bolli Santiago",
    "pos": "OTRO",
    "color": "#64748b",
    "info": {},
    "ataques": [],
    "saques": [],
    "recepciones": [],
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
    },
    "tot_saques": 12,
    "tot_recep": 0,
    "tot_ataques": 0
  }
];
const PARTIDOS_EQUIPO_OBJ = {"sq": -6, "rec": 33, "bqpos": 46, "bqpt": 20, "atqq": 43, "atqhb": 15, "atqx": 29, "atqrp": 35, "atqri": 42, "atqrm": 17, "atqtr": 21};
const PARTIDOS_INDIVIDUAL = [
  {
    "nombre": "Untref",
    "rival": "Untref",
    "resultado": "V",
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
    },
    "jugadores": [
      {
        "nombre": "9 Godoy Martin",
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
        "nombre": "5 Ramos Iaki",
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
        "nombre": "14 Nielson Ramiro",
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
        "nombre": "11 Durdos Valentin",
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
        "nombre": "3 Romeo Winer Agustin",
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
        "nombre": "15 Rotezzi Ramiro Lucio",
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
        "nombre": "2 Ojuez Agustin",
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
        "nombre": "13 Rojas Caruso Mauro",
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
        "nombre": "1 Salazar Imanol",
        "objetivos": {
          "sq": -25,
          "rec": 50,
          "bqpos": 43,
          "bqpt": 29,
          "atqq": 83,
          "atqhb": null,
          "atqx": null,
          "atqrp": 100,
          "atqri": 0,
          "atqrm": null,
          "atqtr": 100
        }
      },
      {
        "nombre": "17 Alderete Brian",
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
        "nombre": "4 Vazquez Ezequiel",
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
    ]
  },
  {
    "nombre": "Ciudad",
    "rival": "Ciudad",
    "resultado": "D",
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
    },
    "jugadores": [
      {
        "nombre": "9 Godoy Martin",
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
        "nombre": "3 Romeo Winer Agustin",
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
        "nombre": "5 Ramos Iaki",
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
        "nombre": "14 Nielson Ramiro",
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
        "nombre": "11 Durdos Valentin",
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
        "nombre": "1 Salazar Imanol",
        "objetivos": {
          "sq": -17,
          "rec": null,
          "bqpos": 67,
          "bqpt": 22,
          "atqq": 22,
          "atqhb": null,
          "atqx": null,
          "atqrp": 50,
          "atqri": 0,
          "atqrm": null,
          "atqtr": -50
        }
      },
      {
        "nombre": "2 Ojuez Agustin",
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
        "nombre": "17 Herbsommer Leonardo",
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
        "nombre": "13 Rojas Caruso Mauro",
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
      }
    ]
  },
  {
    "nombre": "Ferro",
    "rival": "Ferro",
    "resultado": "D",
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
    },
    "jugadores": [
      {
        "nombre": "9 Godoy Martin",
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
        "nombre": "1 Salazar Imanol",
        "objetivos": {
          "sq": 0,
          "rec": 100,
          "bqpos": 44,
          "bqpt": 33,
          "atqq": 38,
          "atqhb": null,
          "atqx": null,
          "atqrp": 50,
          "atqri": 0,
          "atqrm": null,
          "atqtr": 29
        }
      },
      {
        "nombre": "12 Zanotti Juan Cruz",
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
        "nombre": "5 Ramos Iaki",
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
        "nombre": "14 Nielson Ramiro",
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
        "nombre": "11 Durdos Valentin",
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
        "nombre": "17 Herbsommer Leonardo",
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
        "nombre": "13 Rojas Caruso Mauro",
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
        "nombre": "4 Vazquez Ezequiel",
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
        "nombre": "18 Acosta Wilson",
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
        "nombre": "2 Ojuez Agustin",
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
      }
    ]
  },
  {
    "nombre": "Hacoaj",
    "rival": "Hacoaj",
    "resultado": "V",
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
    },
    "jugadores": [
      {
        "nombre": "4 Vazquez Ezequiel",
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
        "nombre": "14 Nielson Ramiro",
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
        "nombre": "12 Zanotti Juan Cruz",
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
        "nombre": "5 Ramos Iaki",
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
        "nombre": "15 Rotezzi Ramiro Lucio",
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
        "nombre": "2 Ojuez Agustin",
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
        "nombre": "11 Durdos Valentin",
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
        "nombre": "3 Romeo Winer Agustin",
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
        "nombre": "9 Godoy Martin",
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
        "nombre": "18 Acosta Wilson",
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
      }
    ]
  },
  {
    "nombre": "Velez",
    "rival": "Velez",
    "resultado": "V",
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
    },
    "jugadores": [
      {
        "nombre": "14 Nielson Ramiro",
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
        "nombre": "18 Acosta Wilson",
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
        "nombre": "11 Durdos Valentin",
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
        "nombre": "17 Herbsommer Leonardo",
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
        "nombre": "4 Vazquez Ezequiel",
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
        "nombre": "2 Ojuez Agustin",
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
        "nombre": "12 Zanotti Juan Cruz",
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
        "nombre": "19 Diaz Bolli Santiago",
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
      },
      {
        "nombre": "6 Villarruel Juan Simon",
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
        "nombre": "5 Ramos Iaki",
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
        "nombre": "9 Godoy Martin",
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
      }
    ]
  },
  {
    "nombre": "Defensores",
    "rival": "Defensores",
    "resultado": "D",
    "equipo_obj": {
      "sq": -3,
      "rec": 28,
      "bqpos": 58,
      "bqpt": 22,
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
        "nombre": "17 Herbsommer Leonardo",
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
        "nombre": "14 Nielson Ramiro",
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
        "nombre": "11 Durdos Valentin",
        "objetivos": {
          "sq": 9,
          "rec": 24,
          "bqpos": 46,
          "bqpt": 8,
          "atqq": null,
          "atqhb": -7,
          "atqx": 35,
          "atqrp": 50,
          "atqri": 50,
          "atqrm": 0,
          "atqtr": -11
        }
      },
      {
        "nombre": "18 Acosta Wilson",
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
        "nombre": "12 Zanotti Juan Cruz",
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
        "nombre": "2 Ojuez Agustin",
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
        "nombre": "19 Diaz Bolli Santiago",
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
        "nombre": "5 Ramos Iaki",
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
        "nombre": "6 Villarruel Juan Simon",
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
      }
    ]
  },
  {
    "nombre": "Lomas",
    "rival": "Lomas",
    "resultado": "V",
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
    },
    "jugadores": [
      {
        "nombre": "4 Vazquez Ezequiel",
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
        "nombre": "17 Herbsommer Leonardo",
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
        "nombre": "11 Durdos Valentin",
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
        "nombre": "14 Nielson Ramiro",
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
        "nombre": "18 Acosta Wilson",
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
        "nombre": "12 Zanotti Juan Cruz",
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
        "nombre": "2 Ojuez Agustin",
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
        "nombre": "5 Ramos Iaki",
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
        "nombre": "19 Diaz Bolli Santiago",
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
        "nombre": "6 Villarruel Juan Simon",
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
        "nombre": "9 Godoy Martin",
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
      }
    ]
  }
];
