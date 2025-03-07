# Missing runtime variables (solved)

This repository was created to demonstrate problems with resolving NextJS Runtime variables. It should be easy as described in https://github.com/vercel/next.js/discussions/44628#discussioncomment-7040424 and https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#bundling-environment-variables-for-the-browser but is not so straightforward.

In general the runtime values will be used only if the variable has not been set during build time in any way (either via *.env* or as OS value `NEXT_PUBLIC_TEST="Set during startup" npm run build`). There is workaround though, which allows to override the existing build time value in runtime. The runtime value must be retrieved in the following way:
```javascript
const variableName = "NEXT_PUBLIC_TEST"
const valueAccessedAsMap = process.env[variableName]
```

## Setup
```bash
npm install
```

## Dev run for sanity check

```bash
NEXT_PUBLIC_TEST="Hello from dev run" npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and see the runtime env value.

## Build and run the test

1. Build with a var defined defined
```bash
NEXT_PUBLIC_TEST="Set during build" npm run build
```

2. Run the app with different runtime env
```bash
NEXT_PUBLIC_TEST="Set during startup" npm run start
```

Open [http://localhost:3000](http://localhost:3000) to observe the different outcomes.