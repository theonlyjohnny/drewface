# Drewface

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Install Node.js dependencies with `npm install` inside the `assets` directory
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).

## Learn more

  * Official website: https://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Forum: https://elixirforum.com/c/phoenix-forum
  * Source: https://github.com/phoenixframework/phoenix


## Releases
We have a build script for Elixir releases, to run it simply use: `./build.sh`

To test releases locally after building:
`DATABASE_URL=postgresql://postgres:postgres@localhost/drewface_dev SECRET_KEY_BASE=`mix phx.gen.secret` _build/prod/rel/drewface/bin/drewface start`

To create and start a release:
```
mix deps.get --only prod
MIX_ENV=prod mix release
_build/prod/rel/my_app/bin/my_app start
```

For help:
`mix help release`

[This Guide](https://render.com/docs/deploy-phoenix) is also helpful