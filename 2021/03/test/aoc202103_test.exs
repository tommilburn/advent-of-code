defmodule Aoc202103Test do
  use ExUnit.Case
  doctest Aoc202103

  test "greets the world" do
    assert Aoc202103.hello() == :world
    assert 198 ==  Aoc202103.day_3_part_1([
    "00100", "11110", "10110", "10111", "10101", "01111", "00111", "11100", "10000", "11001", "00010", "01010",
    ])

    File.stream!("./input.txt")
    |> Enum.map(fn x -> x |> String.replace("\n", "") end)
    |> Aoc202103.day_3_part_1()
    |> IO.inspect()


  end
end
