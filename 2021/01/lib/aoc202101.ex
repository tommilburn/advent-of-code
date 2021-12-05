defmodule Aoc202101 do
  def day_one_part_one(input) do
    [first | _] = input

    {output, _} =
      Enum.reduce(input, {0, first}, fn x, {acc, previous} ->
        cond do
          x > previous ->
            {acc + 1, x}

          true ->
            {acc, x}
        end
      end)

    output
  end

  def day_one_part_two(input) do
    Enum.chunk_every(input, 3, 1, :discard)
    |> Enum.map(fn x -> Enum.sum(x) end)
    |> day_one_part_one()
  end
end
