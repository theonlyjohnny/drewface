defmodule Drewface.Repo do
  use Ecto.Repo,
    otp_app: :drewface,
    adapter: Ecto.Adapters.Postgres
end
