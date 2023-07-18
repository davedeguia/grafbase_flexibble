import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.string().optional(),
  linkedInUrl: g.string().optional(),
  projects: g.relation(),
})

const Project = g.model('Project', {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.string().
})

export default config({
  schema: g,
})
