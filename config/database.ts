export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      // Use the direct IP to bypass DNS issues
      host: env('DATABASE_HOST', '10.0.1.7'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'qq3COjCGaKh4PoR7146A86qWLLVHEGtLFuwQ43NTOMmHfSR5z4gfvENiCkGHO205'),
      
      // CRITICAL: Force SSL off
      ssl: false,
    },
    debug: false,
  },
});