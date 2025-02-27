# Missing runtime variables

## Setup
```bash
npm install
```

## Dev run for sanity check

```bash
TEST="Hello from dev run" npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and see the proper env value.

## Build and run the test

1. Build the app with buildtime env
```bash
TEST="Set during build" npm run build
```

2. Build the app with different runtime env
```bash
TEST="Set during startup" npm run start
```
I would assume the last run should show *The environment variable value is "Set during startup"* rather than use the build time value.

## Python example
Here is how the corresponding code works in Python:
```shell
TEST="Set during startup" python -c 'import os; print(os.environ["TEST"])'
```