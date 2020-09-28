defmodule DrewfaceWeb.HelloLive do
  use DrewfaceWeb, :live_view

  @impl true
  def mount(_params, _session, socket) do
    # mount will magically render hello_live.html.leex, I think
    {:ok, assign(socket, query: "", results: %{})}
  end
end
