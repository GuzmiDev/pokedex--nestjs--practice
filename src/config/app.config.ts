export const EnvConfiguration = () => ({
  envitonment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGODB,
  port: process.env.PORT || 3001,
  defaultLimit: process.env.DEFAULT_LIMIT || 6,
});
