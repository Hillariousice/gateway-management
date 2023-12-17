

const dbConfig = {
  URL:process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/gateway-management',
  CONNECT_OPTIONS: {},
  MODELS: {
   GATEWAY: 'GATEWAY',
   PERIPHERALDEVICE: 'MASTERDEVICE',
   MASTERDEVICE: 'DEVICE',
  }
};

export default dbConfig;
