(async () => {
  const Planet = require("./models/Planet")
/*
  const newPlanet = await Planet.create({
    name: "Venus",
    position: 5,
  })

  const seePlanets = await Planet.findAll({
    where: {
      name: "Venus"
    }
  })
  
  const updatePlanets = await Planet.findByPk(3)
  updatePlanets.position = 2
  await updatePlanets.save()
  */

 const deletePlanets = await Planet.findByPk(4)
 console.log(deletePlanets);

 await deletePlanets.destroy()
 console.log(deletePlanets);
})();