defmodule Aoc202102Test do
  use ExUnit.Case

  test "day 2 part 1 base" do
    input = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"]

    Enum.map(input, fn x -> String.split(x, " ") end)
    |> Aoc202102.day_2_part_1()
    |> IO.inspect(label: "part 1")
  end

  test "day 2 part 1" do

    File.stream!("./input.txt")
    |> Enum.map(&clean_and_parse_input/1)
    |> Enum.map(fn x -> String.split(x, " ") end)
    |> Aoc202102.day_2_part_1()
    |> IO.inspect(label: "part 1")
  end


  test "day 2 part 2 base" do
    input = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"]

    Enum.map(input, fn x -> String.split(x, " ") end)
    |> Aoc202102.day_2_part_2()
    |> IO.inspect(label: "part 2")
  end

  test "day 2 part 2" do

    File.stream!("./input.txt")
    |> Enum.map(&clean_and_parse_input/1)
    |> Enum.map(fn x -> String.split(x, " ") end)
    |> Aoc202102.day_2_part_2()
    |> IO.inspect(label: "part 2")
  end

  defp clean_and_parse_input(num) do
    num
    |> String.replace("\n", "")
  end
end
