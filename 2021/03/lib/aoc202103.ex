defmodule Aoc202103 do
  @moduledoc """
  Documentation for `Aoc202103`.
  """

  @doc """
  Hello world.

  ## Examples

      iex> Aoc202103.hello()
      :world

  """
  def hello do
    :world
  end


  def day_3_part_1(input) do
    length = length(input)
    most_common_bits =
      Enum.map(input,
      fn x ->
        # turn them into list of Integer 0s or Integer 1s
        to_charlist(x)
        |> Enum.map(fn c ->
            c - (:binary.first("0"))
          end)
      end)
      # reduce to a sum each position in each list
      |> Enum.reduce(fn x, acc ->
        Enum.zip(acc, x)
        |> Enum.map(fn x -> elem(x, 0) + elem(x, 1) end)
      end)
      # were there more 1s or 0s?
      |> Enum.map(fn x ->
        if x > length/2 do 1 else 0 end
      end)
    |> IO.inspect()

    # the inverse of most common bits
    least_common_bits =
      Enum.map(most_common_bits, fn x ->
        if x == 0 do 1 else 0 end
      end)
    |> IO.inspect

    bad_integer_list_to_decimal(most_common_bits) * bad_integer_list_to_decimal(least_common_bits)

  end

  defp bad_integer_list_to_decimal(input) do
    input
    |> Enum.map(fn c ->
        c + (:binary.first("0"))
      end)
    |> to_string
    |> Integer.parse(2) |> elem(0)
  end
end
