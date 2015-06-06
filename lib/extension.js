module.exports = Extension;

function Extension(Vapor) {
    this.vapor = Vapor;
}

Extension.prototype.registerHandler = function(type, event, callback) {
    var vapor = this.vapor;

    switch(type) {
        case 'steam':
            vapor.client.on(event, callback.bind(vapor));
            break;

        case 'steam-tradeoffers':
            vapor.tradeOffers.on(event, callback.bind(vapor));
            break;

        default:
            throw Error("Unknown event type " + event + " in 'Extension.prototype.registerHandler' function.");
    }
};

Extension.prototype.removeAllHandlers = function(type, event) {
    var vapor = this.vapor;

    switch(type) {
        case 'steam':
            vapor.client.removeAllListeners(event);
            break;

        case 'steam-tradeoffers':
            vapor.tradeOffers.removeAllListeners(event);
            break;

        default:
            throw Error("Unknown event type " + event + " in 'Extension.prototype.removeAllHandlers' function.");
    }
};