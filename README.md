# INVVARCH

## Introducing:

#### [Introducing: Japanese version](./README_ja.md)

### A Post-Structuralist Approach to Software Design

After nearly 30 years as a software architect, I have synthesized my experience into a singular, comprehensive theory. This journey has been the most profound gift of my career and life.

INVVARCH, a product currently in alpha development, is my attempt to apply **_[Post-structuralism through original research](./docs/concepts/ApplicationOfPoststructuralismToDesignTheoryThroughOriginalResearch.md)_** to software design. Inspired by biological motifs like RNA synthesis (PCR methods), this paradigm fundamentally redefines how software structure is conceived. Here, "structure" is not designed—it emerges from the design itself, evolving autonomously through differential absorption.

At its core, this paradigm uses a meta-design schema as the foundation. From this schema, “structure” is mechanically generated, mirroring how DNA encodes and manifests life. Software modifications no longer require direct adjustments to entities. Instead, they are implemented through schema language changes, akin to editing genetic sequences.

The system functions as a primitive organism, with:

```md
* A consistent schema space (the "DNA")
* A database (the "organism")
* A membrane covering the design's surface (the "synaptic field")
```

This ensures an interface that remains lightweight, adaptable, and responsive to user inputs, continually evolving in real-time. The result is a paradigm where "design is immune to unknown errors."

In essence, INVVARCH represents a vision where software is both the plan and the design itself. Just as DNA gives rise to living organisms, structure emerges from the plan, harmonizing dynamically over time.

I am the sole developer working on this open-source project. [If development proceeds without delays](https://github.com/VVVVISE/lego/milestones?direction=asc&sort=due_date&state=open), I anticipate a beta release by late 2025 and an alpha version by early 2027.

## Get Involved:

If you’re interested in joining the development, sponsoring the project, exploring partial integration into your business, or scheduling an in-depth discussion, I would love to hear from you. Let’s shape the future of software design together.

---

### NOW UNDER WIP - alpha or less

---

## CoreMiddlewares:

#### [vercel/turborepo](https://github.com/vercel/turborepo)
  - [Documentation](https://turbo.build/repo/docs)
#### [nodejs/node > v22.11.0](https://github.com/nodejs/node)
  - [API Documentation](https://nodejs.org/docs/latest/api/)
#### [yarnpkg/berry](https://github.com/yarnpkg/berry)
  - [Documentation](https://yarnpkg.com/getting-started)
  - [CLI](https://yarnpkg.com/cli)
  - [API](https://yarnpkg.com/api)

---

## TABLE of CONTENTS

- _**[Revised Explanation of the Schema-Driven Development Paradigm](https://github.com/vvvvise/invvarch/wiki)**_ 📎

* _**[Technical-Design](https://github.com/vvvvise/invvarch/wiki/Technical-Design)**_ 📎
* _**[The data flow and automation process: by Centered around the schema‐driven approach](https://github.com/vvvvise/invvarch/wiki/The-data-flow-and-automation-process-centered-around-the-schema%E2%80%90driven-approach)**_ 📎
* [EffortEstimation](https://github.com/vvvvise/invvarch/wiki/Effort-Estimation) 📎

- [Usages](#Usages)

* [Clouds](#Clouds)
* [Server](#server)
* [Logging](#logging)
* [DB](#DB)
* [Schemes](#Schemes)

- [Apps](#Apps)
- [Packages](#Packages)

* [Author](#Author)
* [Licence](#Licence)

---

## Usages:

### First time Instration

#### Setup Nodenv

- Install [Nodenv](https://github.com/nodenv/nodenv)

```sh
# Install Nodejs & Set Version

$ nodenv install 20.18.0
$ nodenv rehash
$ node -v
v20.18.0
```

```sh
# Install Doppler-CLI

## Debian 11+ / Ubuntu 22.04+
$ bash
$ sudo apt update -y && sudo apt install make
$ make doppler-apt

## MacOS
$ bash
$ brew install make
$ make doppler-mac

# Create Development-Workspaces
## $ make workspace
## $ make prisma
## This Shot hand below (make workspace && make prisma)
$ make create

## Check Workspacecs
$ yarn workspaces list
➤ YN0000: .
➤ YN0000: apps/schema-client
➤ YN0000: apps/schema-editor
➤ YN0000: apps/web
➤ YN0000: packages/tests
➤ YN0000: packages/typescript-config
➤ YN0000: packages/ui
➤ YN0000: Done in 0s 2ms
```

### Boot whole packages dev-server

```sh
$ yarn dev

## Ref: if only boot `@repo/web` dev-server
$ yarn web dev
```

### Build whole packages

```sh
$ yarn build

## Ref: if only build `@repo/web` package
$ yarn web dev
```

---

## Clouds:

### 1.Environments-Handler
  - [Doppler](https://www.doppler.com/)

### 2. Hosting Recommnendations
  - Asia-Pacific recommended (considering the weak JPYen)
    - [DigitalOcean](https://www.digitalocean.com/)
    - [SakuraInternet-Cloud](https://cloud.sakura.ad.jp/)
    - [SakuraInternet-VPS](https://vps.sakura.ad.jp/)
  - The following is also possible, of course
    - Vercel
    - AWS
    - GCP
    - Azure

## Server:

Now Under consideration (for)

### A. Scratch with FW
#### FW Plans
  - Typescript + Express + Nginx + CDN
  - Go ways
  - Kotlin ways

### B. Serverless-Middleware
  - [appwrite](https://github.com/appwrite/appwrite)
  - [SupaBase](https://github.com/supabase/supabase)
  - [Nhost](https://nhost.io/)

## Logging:

### 1. ObservabilityService
  - Datadog

### 2. ClientLogHost
  - [Sentry](https://sentry.io/)

## DB:

### 1. ORM
  - [Prisma](https://github.com/prisma/prisma)
### 2. ClientSide
  - [SQLite (node@22.7.0 native-API)](https://nodejs.org/docs/latest/api/sqlite.html)
### 3. ServerSide
  - [appwrite/Databases](https://appwrite.io/docs/products/databases)

## Schemes:

- GraphQL
  - Generated from Prisma
    - Generate Models for Client
    - Generate Models for EdgeFront
    - Generate Models for ServerlessAPI

---

## Apps:

1. [invvarch-schema-client](https://github.com/vvvvise/invvarch/tree/main/apps/schema-client)
    - ApiClients generates **Interfaces**, **Modules**, **Functions**, and **Hooks** from **GraphQL**.
2. invvarch-edge
    - _WIP_
    - [PartialHydration with ServerComponent](https://github.com/sujii/partial-hydration-with-server-components)
    - Sockets to ServerlessAPI
3. [invvarch-web](https://github.com/vvvvise/invvarch/tree/main/apps/web)
    - Client application itself
    - Components Suites
      - [invvarch-ui](https://github.com/vvvvise/invvarch/tree/main/packages/ui):
        - Basic Package
      - **[OOUI](https://github.com/vvvvise/ooui)**:
        - Payed Subscription Package
          - _**Object-Oriented Fully UI Suites** - that fully abstract the components of browser applications_
          - _The beta version is currently in the development stage_
          - Not for public
            - We have plans for a _**Payed Subscription Service**_ in the near future.
4. [invvarch-scheme-editor](https://github.com/vvvvise/invvarch/tree/main/apps/schema-editor)
    - The package will be able to manipulate Prisma's DB schema from the GUI, but currently it is simply Prisma.

## Packages:

1. invvarch-cli
2. invvarch-assets
3. invvarch-constants
4. invvarch-figma-sync-server
5. invvarch-storybook-server
6. [invvarch-typescript-config](https://github.com/vvvvise/invvarch/tree/main/packages/typescript-config)
7. [invvarch-tests](https://github.com/vvvvise/invvarch/tree/main/packages/tests)
    - unit-test
    - component-test
    - e2e-test
8. invvarch-ui
      - [invvarch-ui](https://github.com/vvvvise/invvarch/tree/main/packages/ui):
        - Basic Package
      - **[ooui](https://github.com/vvvvise/ooui)**:
        - Payed Subscription Package
          - _**Object-Oriented Fully UI Suites** - that fully abstract the components of browser applications_
          - _The beta version is currently in the development stage_
          - Not for public
            - We have plans for a _**Payed Subscription Service**_ in the near future.

---

## Author:
vvvvise / **Susumu Fujii**: _Usually known as suji(i)_

## License:

GPL-3.0 license
