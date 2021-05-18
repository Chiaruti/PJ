//chiamata api per ottenere il file json
import axios from 'axios'

const silosList = {
    "blocks": [
      {
        "block": "one",
        "silos": [
          {
            "serial": "silos1",
            "liquid_contained": "water"
          },
          {
             "serial": "silos2",
             "liquid_contained": "tea"
          },
          {
             "serial": "silos3",
             "liquid_contained": "vinegar"
          }
        ]
      },
      {
        "block": "two",
        "silos": [
          {
              "serial": "silos4",
              "liquid_contained": "cereals"
          },
          {
              "serial": "silos5",
              "liquid_contained": "nytro"
          },
          {
              "serial": "silos6",
              "liquid_contained": "bread"
          },
          {
              "serial": "silos7",
              "liquid_contained": "random"
          }
        ]      
      }
    ]
  }

const ultimateSilosList = []
for (var block of silosList.blocks){
    for (var silo of block.silos){
        var rep = silo
        rep.block = block.block
        ultimateSilosList.push(rep);
    }
}
console.log(ultimateSilosList)

export default ultimateSilosList