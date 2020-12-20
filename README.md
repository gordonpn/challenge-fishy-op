# Overview of the repository

## Directory structure

```bash
.
├── .docker       # Docker related files such as scripts for deployment
├── .github
│  └── workflows  # GitHub Actions workflow yaml files
├── front-page    # Landing page hosted at https://shopify.gordon-pn.com
│  └── frontend   # Next.js project
├── image-repo    # Image repository project (currently work in progress)
│  └── frontend   # Next.js project
├── proxy         # NGINX entrypoint config files
└── shoppies      # "The Shoppies" project
   └── frontend   # Next.js project
```

## Technology used

- Docker-compose v1.25
- Docker v19
- Node.js v15
- Next.js v10
- Chakra UI v1
- Yarn v1.22
- Caddy v2
- NGINX
- GitHub Actions
- Drone CI
- Docker Swarm

## How the project is connected

The project is currently self-hosted, deployed with Docker containers and orchestrated with Docker Swarm.

### `proxy`

This subdirectory contains the NGINX config and the Dockerfile used to build the reverse proxy entrypoint when <https://shopify.gordon-pn.com> is requested.

### `front-page`

This subdirectory contains the Next.js (React.js) project that acts as a landing page that links to the other micro frontends (some could say).

### `shoppies`

This subdirectory contains the the Next.js (React.js) project for The Shoppies challenge. Built as an SPA and statically generated.

```bash
.
├── pages         # Pages (in this case only '/')
├── src
│  ├── api        # api functions that make external calls
│  ├── components # React.js components
│  ├── hooks      # Custom hooks
│  └── stores     # Zustand state management stores
├── styles        # Global css styles
```

#### Quick demo gif

![](./docs/demo/shoppies.gif)

### `image-repo`

Work in progress.

### CI/CD

Drone CI is used to deploy the project with self-hosted runners.

Otherwise, GitHub Actions is used to build and publish the Docker images.

## Authors

[@gordonpn](https://github.com/gordonpn)

## License

[MIT License](./LICENSE)
