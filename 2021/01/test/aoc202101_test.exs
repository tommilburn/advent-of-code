defmodule Aoc202101Test do
  use ExUnit.Case
  doctest Aoc202101

  test "greets the world" do
    assert Aoc202101.hello() == :world
  end

  test "base case day 1" do
    assert Aoc202101.day_one_part_one([1, 2, 3, 4]) == 3
    assert Aoc202101.day_one_part_one([199, 200, 208, 210, 200, 207, 240, 269, 260, 263]) == 7
  end

  test "day one" do
    File.stream!("./input.txt")
    |> Enum.map(&clean_and_parse_input/1)
    |> Aoc202101.day_one_part_one()
    |> IO.inspect(label: "day one")
  end

  test "day two" do
    File.stream!("./input.txt")
    |> Enum.map(&clean_and_parse_input/1)
    |> Aoc202101.day_one_part_two()
    |> IO.inspect(label: "day two")
  end

  defp clean_and_parse_input(num) do
    num
    |> String.replace("\n", "")
    |> String.to_integer()
  end
end
