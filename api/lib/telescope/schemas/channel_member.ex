defmodule Telescope.Schemas.ChannelMember do
  use Ecto.Schema
  import Ecto.Changeset

  alias Telescope.Schemas.Channel
  alias Telescope.Schemas.User

  @derive {Jason.Encoder, only: ~w(id userId channelId)a}
  @primary_key {:id, :binary_id, []}
  schema "channel_members" do
    belongs_to(:channel, Channel, foreign_key: :channelId, type: :binary_id)
    belongs_to(:user, User, foreign_key: :userId, type: :binary_id)

    timestamps(type: :utc_datetime_usec)
  end

  def changeset(member, params \\ %{}) do
    member
    |> cast(params, [:channelId, :userId])
    |> validate_required([:channelId, :userId])
  end
end
