# mistral-nextjs-client

A simple client for the [mistral.ai](https://mistral.ai) chat API, using [Next.js](https://nextjs.org/) and [Vercel AI](https://sdk.vercel.ai/).

## Description

`mistral-nextjs-client` is a simple interface for interacting with the mistral.ai chat API.

**Note**: This project is in no way affiliated with mistral.ai.

<img width="500" alt="Screenshot 2023-12-20 at 17 30 28" src="https://github.com/yoavf/mistral-nextjs-client/assets/844866/4168ab9e-c173-4d92-bb18-46eb53997283">

### TODOs

- [ ] Session reset
- [ ] Persistance and local history storage
- [ ] Dark mode

## Getting started

Before running the project, make sure you have `pnpm` [installed](https://pnpm.io/installation).

### Setup

```bash
git clone https://github.com/yoavf/mistral-nextjs-client.git
cd mistral-nextjs-client
pnpm install
```

Create a `.env` file in the root directory of your project and add your mistral.ai API key:

```
MISTRAL_API_KEY=your_api_key_here
```

### Running the Project

To start the project locally, run:

```bash
pnpm run dev
```

The project will start running on http://localhost:3000.
