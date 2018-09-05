const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
const allStartLocations = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return allStartLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const allEndLocations = this.journeys.map((journey) => {
      return journey.endLocation;
    });
    return allEndLocations;
  };

Traveller.prototype.getModesOfTransport = function (transportMode) {
  const modesOfTransport = this.journeys.map((journey) => {
  return journey['transport'];
});
  return modesOfTransport;
};

Traveller.prototype.getJourneysByTransport = function (Transport) {
  const journeysByTransport = this.journeys.filter((journey) => {
    return journey['transport'] === Transport;
  });
    return journeysByTransport;
  };

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
    return this.journeys.filter((journey) => {
      return journey['distance'] > minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function (distance) {
  return this.journeys.reduce((running_total, journey) => {
  return running_total + journey['distance'];
}, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let modes = this.getModesOfTransport();
  let uniqueModes = modes.filter((mode, index) => {
    return modes.indexOf(mode) ===  index;
  })
  return uniqueModes;
};


module.exports = Traveller;
