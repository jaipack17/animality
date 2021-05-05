const fetch = require("node-fetch")

module.exports = {
  getAsync : async function(type){
    if(typeof type != "string" && typeof type != "object") throw new TypeError("Invalid type of arguments! Arguments must be a string or an array!")
    if(!type) throw new TypeError("No arguments provided!")
    let img = `https://random-api.nitcord.repl.co/api/img/${type}`
    let fact = `https://random-api.nitcord.repl.co/api/facts/${type}`
    if(typeof type == "object"){
      let data = []
      let animals = ["cat", "dog", "bird", "panda", "redpanda", "koala", "fox", "whale", "kangaroo", "bunny"]
      for(var i = 0; i < type.length; i++){
        if(animals.includes(type[i])){
          img = `https://random-api.nitcord.repl.co/api/img/${type[i]}`
          fact = `https://random-api.nitcord.repl.co/api/facts/${type[i]}`
          const imgData = await fetch(img).then(lang => lang.json())
          const factData = await fetch(fact).then(lang => lang.json())
          let factReceived = factData.fact
          let imgReceived = imgData.link  
          let object = {}
          object["name"] = type[i]
          object["image"] = imgReceived
          object["fact"] = factReceived
          data[i] = object
        } else{
          throw new TypeError("Invalid argument! Invalid Animal Name!")
        }
      }
      return data
    }
    if(type == "cat"){
      const imgData = await fetch(img).then(lang => lang.json())
      const factData = await fetch(fact).then(lang => lang.json())
      let factReceived = factData.fact
      let imgReceived = imgData.link  

      const data = {}
      data["image"] = imgReceived
      data["fact"] = factReceived

      return data;
    }
    if(type == "dog"){
      const imgData = await fetch(img).then(lang => lang.json())
      const factData = await fetch(fact).then(lang => lang.json())
      let factReceived = factData.fact
      let imgReceived = imgData.link  

      const data = {}
      data["image"] = imgReceived
      data["fact"] = factReceived
    
      return data;
    }
    if(type == "bird"){
      const imgData = await fetch(img).then(lang => lang.json())
      const factData = await fetch(fact).then(lang => lang.json())
      let factReceived = factData.fact
      let imgReceived = imgData.link  

      const data = {}
      data["image"] = imgReceived
      data["fact"] = factReceived

      return data;
    }
    if(type == "panda"){
      const imgData = await fetch(img).then(lang => lang.json())
      const factData = await fetch(fact).then(lang => lang.json())
      let factReceived = factData.fact
      let imgReceived = imgData.link  

      const data = {}
      data["image"] = imgReceived
      data["fact"] = factReceived

      return data;
    }
    if(type == "redpanda"){
      const imgData = await fetch(img).then(lang => lang.json())
      const factData = await fetch(fact).then(lang => lang.json())
      let factReceived = factData.fact
      let imgReceived = imgData.link  

      const data = {}
      data["image"] = imgReceived
      data["fact"] = factReceived

      return data;
    }
    if(type == "koala"){
      const imgData = await fetch(img).then(lang => lang.json())
      const factData = await fetch(fact).then(lang => lang.json())
      let factReceived = factData.fact
      let imgReceived = imgData.link  

      const data = {}
      data["image"] = imgReceived
      data["fact"] = factReceived

      return data;
    }
    if(type == "fox"){
      const imgData = await fetch(img).then(lang => lang.json())
      const factData = await fetch(fact).then(lang => lang.json())
      let factReceived = factData.fact
      let imgReceived = imgData.link  

      const data = {}
      data["image"] = imgReceived
      data["fact"] = factReceived

      return data;
    }
    if(type == "whale"){
      const imgData = await fetch(img).then(lang => lang.json())
      const factData = await fetch(fact).then(lang => lang.json())
      let factReceived = factData.fact
      let imgReceived = imgData.link  

      const data = {}
      data["image"] = imgReceived
      data["fact"] = factReceived

      return data;
    }
    if(type == "kangaroo"){
      const imgData = await fetch(img).then(lang => lang.json())
      const factData = await fetch(fact).then(lang => lang.json())
      let factReceived = factData.fact
      let imgReceived = imgData.link  

      const data = {}
      data["image"] = imgReceived
      data["fact"] = factReceived

      return data;
    }
    if(type == "bunny"){
      const imgData = await fetch(img).then(lang => lang.json())
      const factData = await fetch(fact).then(lang => lang.json())
      let factReceived = factData.fact
      let imgReceived = imgData.link  

      const data = {}
      data["image"] = imgReceived
      data["fact"] = factReceived

      return data;
    }
    if(type == "random"){
      let animals = ["cat", "dog", "bird", "panda", "redpanda", "koala", "fox", "whale", "kangaroo", "bunny"]

      let random = animals[Math.floor(Math.random() * animals.length)]
      img = `https://random-api.nitcord.repl.co/api/img/${random}`
      fact = `https://random-api.nitcord.repl.co/api/facts/${random}`
      const imgData = await fetch(img).then(lang => lang.json())
      const factData = await fetch(fact).then(lang => lang.json())
      let factReceived = factData.fact
      let imgReceived = imgData.link  

      const data = {}
      data["name"] = random
      data["image"] = imgReceived
      data["fact"] = factReceived

      return data;
    } else{
      throw new TypeError("Invalid arguments!")
    }
  }
}
