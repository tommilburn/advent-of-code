defmodule Aoc202102 do
  @moduledoc """
  Documentation for `Aoc202102`.
  """

  @doc """
  Hello world.

  ## Examples

      iex> Aoc202102.hello()
      :world

  """

  def update_position(acc, "forward", distance) do
    List.update_at(acc, 0, &(&1 + distance))
  end

  def update_position(acc, "up", distance) do
    List.update_at(acc, 1, &(&1 + distance))
  end

  def update_position(acc, "down", distance) do
    List.update_at(acc, 1, &(&1 - distance))
  end

  def day_2_part_1(input) do
    [distance, depth] =
      Enum.reduce(input, [0, 0], fn x, acc ->
        [direction, distance] = x
        update_position(acc, direction, String.to_integer(distance))
      end)

    abs(distance) * abs(depth)
  end

  def update_position(acc, "forward", distance, aim) do
    IO.inspect(distance, label: "forward before")

    acc =
      acc
      |> List.update_at(0, &(&1 + distance))
      |> List.update_at(1, &((&1 + distance) * aim))

    IO.inspect(acc, label: "forward after")
    acc
  end

  def update_position(acc, "up", distance, _) do
    List.update_at(acc, 2, &(&1 - distance))
    IO.inspect(acc, label: "up")
    acc
  end

  def update_position(acc, "down", distance, _) do
    List.update_at(acc, 2, &(&1 + distance))
    IO.inspect(acc, label: "down")
    acc
  end

  def day_2_part_2(input) do
    [distance, depth, _] =
      Enum.reduce(input, [0, 0, 0], fn x, acc ->
        [direction, distance] = x
        update_position(acc, direction, String.to_integer(distance), Enum.at(acc, 2))
      end)

    abs(distance) * abs(depth)
  end
end
