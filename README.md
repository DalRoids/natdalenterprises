# natdalenterprises
A shitty reddit/vesti hybrid clone brought to you from the losers over on Dal's discord.

## Running the Server

NOTE: Do 1-time setup below first

1. Navigate into the `natdalenterprises` dir
```bash
cd natdalenterprises
```

2. Run the server
```bash
bun index.ts
```

3. Test an endpoint
```bash
curl localhost:3000/create_account
curl localhost:3000/threads
```

## One Time Setup
We are going to use typescript. Hopefully [Bun](https://bun.sh/) is mature enough to work ok-ish.

VERY IMPORTAINT: Use Linux for development. Don't talk to me about issues unless you are on linux.
See [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) and install Ubuntu.

1. Clone the repo
```bash
git clone https://github.com/DalRoids/natdalenterprises.git
```

2. Install bun: 
```bash
curl -fsSL https://bun.sh/install | bash
```

3. Install deps
```bash
bun install
```

## TODO List
1. Make server endpoints not broken
2. Write database adapter
3. Front-end?
4. Make auth and shit not shit
5. ???
