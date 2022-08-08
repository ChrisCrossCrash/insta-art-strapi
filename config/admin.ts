export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '517d86b7ce8030e9c505d7c42996185a'),
  },
})
