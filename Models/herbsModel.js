const mongoose=require("mongoose");

//Schema
const herbsSchema=mongoose.Schema({
    "name": {
      "type": "String",
      "required": true
    },
    "scientific_name": {
      "type": "String",
      "required": true
    },
    "common_names": {
      "type": ["String"],
      "required": true
    },
    "3d_model": {
      "url": {
        "type": "String",
        "required": true
      },
      "interactive_features": {
        "type": ["String"],
        "enum": ["rotate", "zoom", "explore from different angles"]
      }
    },
    "habitat": {
      "native_to": {
        "type": "String",
        "required": true
      },
      "regions": {
        "type": "String",
        "required": true
      },
      "soil_type": {
        "type": "String",
        "required": true
      },
      "climate_conditions": {
        "drought_tolerant": {
          "type": "Boolean",
          "default": false
        },
        "preferred_temperature_range": {
          "min": {
            "type": "Number",
            "required": true
          },
          "max": {
            "type": "Number",
            "required": true
          },
          "unit": {
            "type": "String",
            "default": "Celsius"
          }
        }
      }
    },
    "medicinal_uses": {
      "type": [
        {
          "property": {
            "type": "String",
            "required": true
          },
          "description": {
            "type": "String",
            "required": true
          }
        }
      ]
    },
    "active_compounds": {
      "type": [
        {
          "compound": {
            "type": "String",
            "required": true
          },
          "properties": {
            "type": "String",
            "required": true
          }
        }
      ]
    },
    "method_of_cultivation": {
      "propagation": {
        "type": "String",
        "required": true
      },
      "soil_type": {
        "type": "String",
        "required": true
      },
      "watering": {
        "type": "String",
        "required": true
      }
    },
    "images": {
      "type": [
        {
          "type": {
            "type": "String",
            "required": true
          },
          "url": {
            "type": "String",
            "required": true
          }
        }
      ]
    },
    "videos": {
      "type": [
        {
          "title": {
            "type": "String",
            "required": true
          },
          "url": {
            "type": "String",
            "required": true
          }
        }
      ]
    },
    "audio_descriptions": {
      "type": [
        {
          "title": {
            "type": "String",
            "required": true
          },
          "url": {
            "type": "String",
            "required": true
          }
        }
      ]
    },
    "search_filters": {
      "region": {
        "type": "String"
      },
      "medicinal_uses": {
        "type": ["String"]
      },
      "type": {
        "type": "String"
      }
    },
    "virtual_tours": {
      "type": [
        {
          "theme": {
            "type": "String",
            "required": true
          },
          "description": {
            "type": "String"
          },
          "url": {
            "type": "String",
            "required": true
          }
        }
      ]
    },
    "user_interaction": {
      "bookmark_url": {
        "type": "String"
      },
      "share_url": {
        "type": "String"
      },
      "note_url": {
        "type": "String"
      }
    }
},{timestamps:true})

//Model
const herbsModel=mongoose.model("herbals",herbsSchema);

module.exports=herbsModel;